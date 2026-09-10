const title='AudioX';
const el=document.getElementById('typed-title');
let typingTimer=null;

function typeTitle(){
  clearTimeout(typingTimer);
  el.innerHTML='';
  let i=0;
  function step(){
    if(i<title.length){
      const span=document.createElement('span');
      span.className='title-letter';
      span.textContent=title[i];
      span.style.setProperty('--letter',i);
      el.appendChild(span);
      i++;
      setTimeout(step,150);
    }else{
      typingTimer=setTimeout(typeTitle,5000);
    }
  }
  step();
}
typeTitle();

const button=document.getElementById('download-button');
const status=document.getElementById('download-status');
if(button){button.addEventListener('click',()=>{status.textContent='Preparing download…';button.disabled=true;setTimeout(()=>{const blob=new Blob(['AudioX Preview\nv0.1.0\n\nWebsite preview placeholder. Replace this file with the actual AudioX build when ready.'],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AudioX-v0.1.0-preview.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='✓ Download started';button.disabled=false},700)})}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.classList.contains('type-on-view')){const text=e.target.dataset.text||'';e.target.textContent='';let n=0;const run=()=>{if(n<=text.length){e.target.textContent=text.slice(0,n++);setTimeout(run,42)}};run()}}}),{threshold:.18});
document.querySelectorAll('.reveal,.type-on-view').forEach(x=>observer.observe(x));

const cards=document.querySelectorAll('.tilt-card');cards.forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*6}deg) rotateY(${x*6}deg) translateY(-7px) scale(1.015)`});card.addEventListener('mouseleave',()=>card.style.transform='')});

const magnetic=document.querySelector('.magnetic');if(magnetic){magnetic.addEventListener('mousemove',e=>{const r=magnetic.getBoundingClientRect();magnetic.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});magnetic.addEventListener('mouseleave',()=>magnetic.style.transform='')}

window.addEventListener('scroll',()=>{document.documentElement.style.setProperty('--scroll',window.scrollY+'px')},{passive:true});
