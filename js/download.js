const starfield=document.getElementById('starfield');
if(starfield){for(let i=0;i<120;i++){const s=document.createElement('span');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.setProperty('--o',(0.25+Math.random()*0.75).toFixed(2));s.style.setProperty('--d',(8+Math.random()*18)+'s');s.style.setProperty('--t',(1.5+Math.random()*3)+'s');s.style.setProperty('--x',(Math.random()*80-40)+'px');s.style.setProperty('--y',(Math.random()*80-40)+'px');starfield.appendChild(s)}}

const start=document.getElementById('start-download');
const captcha=document.getElementById('captcha-check');
const challenge=document.getElementById('challenge');
const options=document.getElementById('challenge-options');
const symbol=document.getElementById('challenge-symbol');
const verified=document.getElementById('verified-message');
const status=document.getElementById('download-status');
let passed=false;

if(captcha){captcha.addEventListener('click',()=>{if(passed)return;captcha.disabled=true;status.textContent='Starting verification…';setTimeout(()=>{captcha.classList.add('verified');challenge.hidden=false;status.textContent='Complete the quick check below.';const symbols=['◆','●','▲','■'];const answer=symbols[Math.floor(Math.random()*symbols.length)];symbol.textContent=answer;options.innerHTML='';symbols.sort(()=>Math.random()-.5).forEach(x=>{const b=document.createElement('button');b.type='button';b.textContent=x;b.addEventListener('click',()=>{if(x!==answer){b.animate([{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}],{duration:220});return}passed=true;challenge.hidden=true;verified.hidden=false;status.textContent='✓ Verification complete. Your download is ready.';start.disabled=false;start.textContent='Download AudioX';});options.appendChild(b)})},650)})}

if(start){start.disabled=true;start.addEventListener('click',()=>{if(!passed)return;status.textContent='Preparing download…';start.disabled=true;setTimeout(()=>{const blob=new Blob(['AudioX Preview\nv0.1.0\n\nWebsite preview placeholder. Replace this file with the actual AudioX build when ready.'],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AudioX-v0.1.0-preview.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='✓ Download started';start.disabled=false},900)})}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.18});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
window.addEventListener('scroll',()=>document.documentElement.style.setProperty('--scroll',window.scrollY+'px'),{passive:true});
