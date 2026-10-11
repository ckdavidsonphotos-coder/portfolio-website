const $ = s=>document.querySelector(s), view=$("#view"), ov=$("#overlay");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const groups=["Personal","Commissioned"];
const RN=[1.333,.75,.75,1.5,.75,1.333];
let timers=[], key=null;
const clear=()=>{timers.forEach(clearInterval);timers=[];key=null};

const src = (p,f)=>`images/${p.slug}/${f}`;
const count = p=>p.files.length||p.n||0;
const photo = (url,alt,on)=>`<img class="ph photo${on?" on":""}" src="${url}" alt="${alt}" ${on?"":'loading="lazy"'}>`;
const block = (i,seed,on)=>`<div class="ph${on?" on":""}" style="--h:${(seed*47+i*23)%360};--rn:${RN[(i+seed)%RN.length]}"></div>`;

function projectTiles(p,idx){
  return p.files.length
    ? p.files.map((f,j)=>photo(src(p,f),`${p.t}, ${j+1}`,!j)).join("")
    : Array.from({length:count(p)},(_,j)=>block(j,idx+2,!j)).join("");
}

function homeTiles(g,gi){
  const urls=[];
  PROJECTS.filter(p=>p.g===g).forEach(p=>p.files.slice(0,3).forEach(f=>urls.push([src(p,f),p.t])));
  return urls.length
    ? urls.slice(0,8).map(([u,t],i)=>photo(u,t,!i)).join("")
    : Array.from({length:6},(_,i)=>block(i,gi*3+1,!i)).join("");
}

function home(){
  clear(); ov.classList.remove("open");
  view.innerHTML=`<div class="home">`+groups.map((g,gi)=>`
    <div class="panel" data-g="${g}" tabindex="0" role="link" aria-label="Open ${g} projects">
      <div class="stage">${homeTiles(g,gi)}</div>
      <div class="label"><span>${g}</span><span class="mute">${PROJECTS.filter(p=>p.g===g).length} projects</span></div>
    </div>`).join("")+`</div>`;
  view.querySelectorAll(".panel").forEach((p,pi)=>{
    const imgs=[...p.querySelectorAll(".ph")];let k=0;
    if(!still&&imgs.length>1)timers.push(setInterval(()=>{imgs[k].classList.remove("on");k=(k+1)%imgs.length;imgs[k].classList.add("on")},1200+pi*250));
    const go=()=>project(PROJECTS.findIndex(x=>x.g===p.dataset.g));
    p.onclick=go; p.onkeydown=e=>{if(e.key==="Enter")go()};
  });
}

function project(i){
  clear(); ov.classList.remove("open");
  const p=PROJECTS[i]; let k=0;
  view.innerHTML=`<div class="solo" id="solo">
    <div class="stage">${projectTiles(p,i)}</div>
    <div class="label"><span>${p.t}</span><span class="mute" id="ct"></span></div></div>`;
  const imgs=[...view.querySelectorAll(".ph")], ct=$("#ct");
  const show=n=>{if(!imgs.length)return;imgs[k].classList.remove("on");k=(n+imgs.length)%imgs.length;imgs[k].classList.add("on");ct.textContent=`${k+1} / ${imgs.length}`};
  show(0);
  $("#solo").onclick=e=>{const r=e.currentTarget.getBoundingClientRect();show(k+(e.clientX<r.left+r.width/2?-1:1))};
  key=e=>{if(e.key==="ArrowRight")show(k+1);if(e.key==="ArrowLeft")show(k-1)};
}

function info(){
  clear(); ov.classList.remove("open");
  view.innerHTML=`<div class="info"><p>${SITE.bio}</p>
    <p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></p></div>`;
}

function index(){
  ov.innerHTML=`<div class="top"><span>${SITE.name}</span><button id="close">Close</button></div>`+
    groups.map(g=>`<h4>${g}</h4><ul>`+PROJECTS.map((p,i)=>p.g===g?`<li><button data-i="${i}">${p.t}<sup>${count(p)}</sup></button></li>`:"").join("")+`</ul>`).join("");
  ov.classList.add("open");
  $("#close").onclick=()=>ov.classList.remove("open");
  ov.querySelectorAll("li button").forEach(b=>b.onclick=()=>project(+b.dataset.i));
}

$("#name").textContent=SITE.name; document.title=SITE.name+", Photography";
$("#name").onclick=home; $("#idx").onclick=index; $("#inf").onclick=info;
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")ov.classList.remove("open");
  if(key&&!ov.classList.contains("open"))key(e);
});
home();
