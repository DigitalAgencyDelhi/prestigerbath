(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>$('#loader')&&$('#loader').classList.add('hide'),350));
setTimeout(()=>$('#loader')&&$('#loader').classList.add('hide'),2000);
const nav=$('#nav');const sc=()=>nav.classList.toggle('solid',scrollY>40||!$('.hero,.phero'));sc();addEventListener('scroll',sc,{passive:true});
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const sib=[...e.target.parentNode.children].indexOf(e.target);e.target.style.transitionDelay=(sib%4)*90+'ms';e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
// tilt
if(matchMedia('(hover:hover)').matches)$$('.tilt').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
// bubbles
const cv=$('#bubbles');if(cv){const x=cv.getContext('2d');let W,H,B=[];const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight};rs();addEventListener('resize',rs);
const mk=()=>({x:Math.random()*W,y:H+Math.random()*H,r:2+Math.random()*10,v:.3+Math.random()*1.0,w:Math.random()*6});
for(let i=0;i<45;i++){const b=mk();b.y=Math.random()*H;B.push(b)}
(function f(){x.clearRect(0,0,W,H);B.forEach(b=>{b.y-=b.v;b.w+=.02;b.x+=Math.sin(b.w)*.4;if(b.y<-20)Object.assign(b,mk(),{y:H+20});
x.beginPath();x.arc(b.x,b.y,b.r,0,7);x.strokeStyle='rgba(127,214,245,.45)';x.lineWidth=1.2;x.stroke();x.fillStyle='rgba(127,214,245,.08)';x.fill();
x.beginPath();x.arc(b.x-b.r*.3,b.y-b.r*.3,b.r*.2,0,7);x.fillStyle='rgba(255,255,255,.5)';x.fill()});requestAnimationFrame(f)})()}
// gallery + zoom
const mi=$('#mainimg');if(mi){$$('.th').forEach(t=>t.onclick=()=>{mi.src=t.dataset.src;$$('.th').forEach(o=>o.classList.remove('on'));t.classList.add('on')});
const z=$('#zoom');z.addEventListener('mousemove',e=>{const r=z.getBoundingClientRect();mi.style.transformOrigin=((e.clientX-r.left)/r.width*100)+'% '+((e.clientY-r.top)/r.height*100)+'%';mi.style.transform='scale(1.9)'});z.addEventListener('mouseleave',()=>mi.style.transform='')}
})();
