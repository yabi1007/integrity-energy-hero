
'use strict';
const c=document.getElementById('c'),ctx=c.getContext('2d');
const W=1280,H=720,G=600,WORLD=4100;
// 플랫폼 이미지의 실제 윗면과 캐릭터 발이 만나는 공통 기준선
const PLATFORM_SURFACE_Y=598;
// 캐릭터 이미지에서 실제 발바닥이 보이는 시각적 기준선
const CHARACTER_FOOT_Y=604;
const K={},P={};
const IS_TOUCH=('ontouchstart' in window)||navigator.maxTouchPoints>0||matchMedia('(pointer:coarse)').matches;
const mobilePointers=new Map();
function setVirtualKey(key,down,oneShot=false){
 if(down){if(oneShot||!K[key])P[key]=1;K[key]=1}else K[key]=0;
}
function bindTouchButton(id,key,{oneShot=false}={}){
 const el=document.getElementById(id); if(!el)return;
 const press=e=>{e.preventDefault();e.stopPropagation();try{el.setPointerCapture(e.pointerId)}catch(_){};mobilePointers.set(e.pointerId,{el,key});el.classList.add('pressed');setVirtualKey(key,true,oneShot)};
 const release=e=>{const item=mobilePointers.get(e.pointerId);if(!item||item.el!==el)return;e.preventDefault();e.stopPropagation();mobilePointers.delete(e.pointerId);el.classList.remove('pressed');setVirtualKey(key,false)};
 el.addEventListener('pointerdown',press,{passive:false});
 ['pointerup','pointercancel','lostpointercapture'].forEach(t=>el.addEventListener(t,release,{passive:false}));
 el.addEventListener('contextmenu',e=>e.preventDefault());
}
bindTouchButton('btn-left','arrowleft');
bindTouchButton('btn-right','arrowright');
bindTouchButton('btn-attack','z',{oneShot:true});
bindTouchButton('btn-shield','x',{oneShot:true});
addEventListener('blur',()=>{for(const k of ['arrowleft','arrowright','z','x'])K[k]=0;document.querySelectorAll('.touch-btn').forEach(b=>b.classList.remove('pressed'));mobilePointers.clear()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){for(const k of ['arrowleft','arrowright','z','x'])K[k]=0}});
document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});

let S='loading',T=0,last=0,cam=0,rec=0,en=0,life=3,done=0;
let pl,foes,boss,missiles=[],purifiers=[],bursts=[],hitSparks=[],toxicBits=[];

let quizActive=false,currentQuiz=null,quizAnswered=false;

const quizUI={
 overlay:document.getElementById('quiz-overlay'),
 quote:document.getElementById('quiz-slime-quote'),
 title:document.getElementById('quiz-title'),
 question:document.getElementById('quiz-question'),
 choices:document.getElementById('quiz-choices'),
 result:document.getElementById('quiz-result'),
 resultTitle:document.getElementById('quiz-result-title'),
 resultExplain:document.getElementById('quiz-result-explain'),
 continueBtn:document.getElementById('quiz-continue')
};

function getQuizBank(type){
 const banks=window.QUIZ_BANKS||{};
 return Array.isArray(banks[type])?banks[type]:[];
}

function openSlimeQuiz(type){
 if(!quizUI.overlay)return;
 const bank=getQuizBank(type);
 if(!bank.length){
  console.warn('퀴즈 데이터가 없습니다:',type);
  return;
 }

 currentQuiz=bank[Math.floor(Math.random()*bank.length)];
 quizActive=true;
 quizAnswered=false;

 for(const k of ['arrowleft','arrowright','a','d','z','k','x','l',' ','arrowup','w']){
  K[k]=0;
  delete P[k];
 }

 quizUI.quote.textContent='“'+currentQuiz.slimeQuote+'”';
 quizUI.title.textContent=currentQuiz.title;
 quizUI.question.textContent=currentQuiz.question;
 quizUI.choices.innerHTML='';
 quizUI.result.classList.remove('active');
 quizUI.continueBtn.classList.remove('active');
 quizUI.resultTitle.textContent='';
 quizUI.resultExplain.textContent='';

 currentQuiz.choices.forEach((choice,index)=>{
  const button=document.createElement('button');
  button.type='button';
  button.className='quiz-choice';
  button.textContent=choice;
  button.addEventListener('click',e=>{
   e.preventDefault();
   e.stopPropagation();
   answerSlimeQuiz(index);
  });
  quizUI.choices.appendChild(button);
 });

 quizUI.overlay.classList.add('active');
 quizUI.overlay.setAttribute('aria-hidden','false');
}

function answerSlimeQuiz(selectedIndex){
 if(!quizActive||quizAnswered||!currentQuiz)return;
 quizAnswered=true;

 const correct=selectedIndex===currentQuiz.answer;
 quizUI.resultTitle.textContent=correct?currentQuiz.correctText:currentQuiz.wrongText;
 quizUI.resultExplain.textContent=currentQuiz.explain;
 quizUI.result.classList.add('active');
 quizUI.continueBtn.classList.add('active');

 [...quizUI.choices.children].forEach((button,index)=>{
  button.disabled=true;
  if(index===currentQuiz.answer)button.style.outline='3px solid #66efb3';
  else if(index===selectedIndex&&!correct)button.style.outline='3px solid #ff7589';
 });
}

function closeSlimeQuiz(){
 if(!quizActive||!quizAnswered)return;
 quizActive=false;
 currentQuiz=null;
 quizAnswered=false;
 quizUI.overlay.classList.remove('active');
 quizUI.overlay.setAttribute('aria-hidden','true');
 quizUI.choices.innerHTML='';
}

if(quizUI.continueBtn){
 quizUI.continueBtn.addEventListener('click',e=>{
  e.preventDefault();
  e.stopPropagation();
  closeSlimeQuiz();
 });
}
if(quizUI.overlay)quizUI.overlay.addEventListener('click',e=>e.stopPropagation());


const paths={
 title:'assets/title-screen.png',
 sky:'assets/stage/sky.png', cloud:'assets/stage/cloud.png',
 mountain:'assets/stage/mountain.png', building:'assets/stage/building.png',
 platform:'assets/stage/platform.png', turbine:'assets/stage/wind_turbine.png',
 solar:'assets/stage/solar_panel.png', slime:'assets/stage/slime.png',
 boss:'assets/stage/boss.png',
 playerFull:'assets/player/player_full.png',
 shield:'assets/player/shield.png',
 head:'assets/player/head.png', bodyPart:'assets/player/body.png',
 leg:'assets/player/leg.png', sword:'assets/player/sword.png'
};
const A={};
Promise.all(Object.entries(paths).map(([k,p])=>new Promise((res,rej)=>{
 const im=new Image(); im.onload=()=>{A[k]=im;res()}; im.onerror=()=>rej(new Error(p)); im.src=p;
}))).then(()=>{document.getElementById('loading').remove();S='title'}).catch(err=>{
 document.getElementById('loading').textContent='에셋 로드 실패: '+err.message;
});

onkeydown=e=>{
 const k=e.key.toLowerCase();
 if(!K[k])P[k]=1; K[k]=1;
 if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(k))e.preventDefault();
};
onkeyup=e=>K[e.key.toLowerCase()]=0;
c.addEventListener('click',()=>{
 if(S==='title') scene('intro');
 else if(S==='clear'||S==='gameover'||S==='end') scene('title');
});

function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function txt(s,x,y,size=24,color='#fff',align='center'){
 ctx.font=`700 ${size}px Arial,"Malgun Gothic",sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;
 ctx.strokeStyle='rgba(0,0,0,.45)';ctx.lineWidth=Math.max(2,size/9);ctx.strokeText(s,x,y);ctx.fillText(s,x,y);
}
function rr(x,y,w,h,r,fill,stroke){
 ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();
 if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}
}
function scene(s){S=s;T=0;if(s==='game')reset()}
function reset(){
 quizActive=false;currentQuiz=null;quizAnswered=false;
 if(quizUI.overlay){
  quizUI.overlay.classList.remove('active');
  quizUI.overlay.setAttribute('aria-hidden','true');
 }
 rec=0;en=40;life=3;done=0;cam=0;missiles=[];purifiers=[];bursts=[];hitSparks=[];toxicBits=[];
 pl={x:150,y:G-128,w:62,h:125,vx:0,vy:0,on:1,dir:1,atk:0,atkCd:0,atkSeq:0,sh:0,shCd:0,inv:0};
 const slimeTypes=[
  {label:'유혹 슬라임',quizType:'bribery'},
  {label:'연줄 슬라임',quizType:'connection'},
  {label:'정보보안 슬라임',quizType:'security'},
  {label:'공정 슬라임',quizType:'fairness'},
  {label:'갑질 슬라임',quizType:'abuse'}
 ];
 foes=[620,1080,1540,2200,2780].map((x,i)=>({x,y:PLATFORM_SURFACE_Y-72,w:108,h:72,hp:2,dir:i%2?1:-1,alive:1,lastHit:-1,...slimeTypes[i]}));
 boss={x:3650,y:PLATFORM_SURFACE_Y-330,w:390,h:330,hp:24,max:24,active:0,alive:1,lastHit:-1,phase:'wait',intro:0,attackTimer:3.6,countdown:0,flash:0,shotNo:0,charging:0};
}

function drawCover(img,x,y,w,h,alpha=1){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;
 const r=Math.max(w/img.width,h/img.height),sw=w/r,sh=h/r,sx=(img.width-sw)/2,sy=(img.height-sh)/2;
 ctx.drawImage(img,sx,sy,sw,sh,x,y,w,h);ctx.restore();
}
function drawContain(img,x,y,w,h,alpha=1,flip=false,rot=0,ox=.5,oy=.5){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;ctx.translate(x+w*ox,y+h*oy);ctx.rotate(rot);if(flip)ctx.scale(-1,1);
 const r=Math.min(w/img.width,h/img.height),dw=img.width*r,dh=img.height*r;
 ctx.drawImage(img,-dw*ox,-dh*oy,dw,dh);ctx.restore();
}


function drawCropped(img,sx,sy,sw,sh,x,y,w,h,alpha=1,flip=false){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;
 ctx.translate(x+w/2,y+h/2);if(flip)ctx.scale(-1,1);
 ctx.drawImage(img,sx*img.width,sy*img.height,sw*img.width,sh*img.height,-w/2,-h/2,w,h);
 ctx.restore();
}

function bg(recovery=0){
 drawCover(A.sky,0,0,W,H);
 let off=(performance.now()/55)%760;
 for(let x=-off-760;x<W+760;x+=760)drawContain(A.cloud,x,30,760,260,.28);
 let mx=-(cam*.12%1500)-180;
 for(let x=mx-1500;x<W+1500;x+=1500)drawContain(A.mountain,x,150,1500,480,.8);

 // v5.0.2: 원경의 건물과 발전시설이 하늘에 떠 보이지 않도록
 // 산 아래부터 플랫폼 뒤까지 이어지는 지면 레이어를 만든다.
 const landShift=-(cam*.20%900);
 ctx.save();
 ctx.translate(landShift,0);
 for(let x=-900;x<W+1800;x+=900){
   ctx.fillStyle='#334b3c';
   ctx.beginPath();
   ctx.moveTo(x,492);
   ctx.quadraticCurveTo(x+180,444,x+360,485);
   ctx.quadraticCurveTo(x+585,528,x+900,472);
   ctx.lineTo(x+900,H);ctx.lineTo(x,H);ctx.closePath();ctx.fill();
   ctx.fillStyle='#24382f';
   ctx.beginPath();
   ctx.moveTo(x,525);
   ctx.quadraticCurveTo(x+240,487,x+465,524);
   ctx.quadraticCurveTo(x+700,558,x+900,510);
   ctx.lineTo(x+900,H);ctx.lineTo(x,H);ctx.closePath();ctx.fill();
 }
 ctx.restore();

 // 평평한 도시 부지와 얇은 도로를 더해 건물의 바닥 기준선을 분명하게 한다.
 ctx.fillStyle='#1b2a27';ctx.fillRect(0,536,W,H-536);
 ctx.fillStyle='rgba(137,162,129,.20)';ctx.fillRect(0,536,W,8);
 ctx.fillStyle='rgba(18,28,31,.72)';ctx.fillRect(0,566,W,28);
 ctx.fillStyle='rgba(220,213,151,.20)';
 for(let x=-(cam*.34%150);x<W+150;x+=150)ctx.fillRect(x,578,72,3);

 let bx=-(cam*.28%620)-80;
 for(let x=bx-620;x<W+620;x+=620){
   // 건물 아래 접지 그림자
   ctx.fillStyle='rgba(3,8,12,.34)';ctx.beginPath();ctx.ellipse(x+260,574,176,18,0,0,Math.PI*2);ctx.fill();
   drawContain(A.building,x,285,520,320,.62);
 }
 // 건물 하단을 잔풀/관목 띠가 살짝 덮어 접지감을 강화한다.
 ctx.fillStyle='#162a23';
 for(let x=-(cam*.25%110)-30;x<W+120;x+=110){
   ctx.beginPath();ctx.arc(x,563,28,0,Math.PI*2);ctx.arc(x+30,557,34,0,Math.PI*2);ctx.arc(x+63,565,25,0,Math.PI*2);ctx.fill();
 }
 const dark=1-recovery/100;
 ctx.fillStyle=`rgba(4,10,20,${.42*dark})`;ctx.fillRect(0,0,W,H);
}

function ground(){
 const PLATFORM_LIFT=34;
 ctx.save();ctx.translate(-cam,0);
 for(let x=0;x<WORLD;x+=492)drawCover(A.platform,x,G-PLATFORM_LIFT,510,125);
 ctx.fillStyle='#09121d';ctx.fillRect(0,G+118-PLATFORM_LIFT,WORLD,184);
 // v5.0.3: 발전시설의 하단을 플랫폼 실제 윗면 기준선에 정확히 고정한다.
 const props=[
  {img:A.turbine,x:750,w:170,h:300,flip:false},
  {img:A.solar,x:1370,w:190,h:130,flip:true},
  {img:A.turbine,x:2410,w:165,h:290,flip:false},
  {img:A.solar,x:2920,w:190,h:125,flip:true}
 ];
 props.forEach(p=>{
   // 원본 이미지 내부의 넓은 상하 여백을 잘라낸 뒤, 보이는 오브젝트의 바닥을
   // 캐릭터의 실제 발바닥 기준선에 정확히 맞춘다.
   const isSolar=p.img===A.solar;
   const crop=isSolar
     ? {sx:.12,sy:.24,sw:.80,sh:.58}
     : {sx:.21,sy:.04,sw:.59,sh:.82};
   const drawH=p.h;
   const y=CHARACTER_FOOT_Y-drawH;
   drawCropped(p.img,crop.sx,crop.sy,crop.sw,crop.sh,p.x,y,p.w,drawH,.92,p.flip);
 });
 ctx.restore();
}

function playerRig(screenX,footY,scale=1,attack=0,guard=0,flip=false){
 ctx.save();
 ctx.translate(screenX,footY);
 if(flip)ctx.scale(-1,1);

 const moving=Math.abs(pl?.vx||0)>20&&pl?.on;
 const bob=moving?Math.abs(Math.sin(performance.now()/90))*2:0;
 const FOOT_FIX=36;
 ctx.scale(scale,scale);

 if(attack>0 && A.playerFull && A.sword){
   // 공격 중에도 평상시와 완전히 동일한 통짜 캐릭터를 같은 좌표·크기로 그린다.
   // 따라서 공격 시작/종료 시 몸 크기나 발 위치가 절대 바뀌지 않는다.
   drawContain(A.playerFull,-92,-250+FOOT_FIX+bob,184,250,1,false,0,.5,1);

   // 캐릭터 본체에는 어떤 scale/translate도 추가하지 않고, 추가 칼만 독립적으로 회전한다.
   const p=Math.max(0,Math.min(1,attack));
   const eased=1-Math.pow(1-p,3);
   // 시작 프레임은 통짜 캐릭터의 기존 칼 손잡이와 겹치도록 맞춘다.
   // 이후 칼만 손잡이를 축으로 아래쪽으로 휘두른다.
   // v4.7: 칼을 캐릭터 대비 약 30% 키우고, 시작부터 오른쪽 위를 향하도록 각도를 눕힌다.
   // v5.0.3: 검 손잡이를 축으로 +45도에서 -45도까지 한 번에 휘두른다.
   // v5.0.4: 기존 방향을 반대로 뒤집어 위에서 아래로 내려벤다.
   const swordStart=-Math.PI/4;
   const swordEnd=Math.PI/4;
   const swordRot=swordStart+(swordEnd-swordStart)*eased;
   ctx.save();
   ctx.translate(40,-117+FOOT_FIX+bob);
   ctx.rotate(swordRot);
   drawContain(A.sword,-18,-137,70,158,.98,false,0,.27,.88);
   ctx.restore();

   ctx.save();
   ctx.globalAlpha=.18*Math.sin(p*Math.PI);
   ctx.strokeStyle='#fff0a0';
   ctx.lineWidth=7;
   ctx.lineCap='round';
   ctx.beginPath();
   ctx.arc(40,-117+FOOT_FIX,103,-1.08+swordRot,.12+swordRot);
   ctx.stroke();
   ctx.restore();
 }else{
   // 평상시에는 깨짐 없는 통짜 캐릭터를 사용
   drawContain(A.playerFull,-92,-250+FOOT_FIX+bob,184,250,1,false,0,.5,1);
 }

 if(guard&&A.shield){
   ctx.save();
   const pulse=1+.035*Math.sin(performance.now()/75);
   ctx.translate(48,-118+FOOT_FIX);
   ctx.scale(pulse,pulse);
   drawContain(A.shield,-48,-48,96,96,.98,false,0,.5,.5);
   ctx.globalAlpha=.24;
   ctx.strokeStyle='#9fe9ff';
   ctx.lineWidth=5;
   ctx.beginPath();
   ctx.arc(0,0,55,0,Math.PI*2);
   ctx.stroke();
   ctx.restore();
 }
 ctx.restore();
}

function startBossEncounter(){
 if(boss.phase!=='wait')return;
 boss.active=1;boss.phase='intro';boss.intro=0;boss.x=cam+W+210;
 foes.forEach(f=>f.alive=0);missiles=[];
 pl.vx=0;pl.atk=0;pl.sh=0;
}
const CAPSULE_TYPES=[
 {label:'부정청탁',icon:'!',liquid:'#9a46cf',glow:'#e6a8ff'},
 {label:'금품수수',icon:'₩',liquid:'#b77832',glow:'#ffd28a'},
 {label:'특혜제공',icon:'★',liquid:'#b83e59',glow:'#ff9aaa'}
];
function fireBossMissiles(){
 boss.shotNo++;
 const shots=boss.hp<=boss.max/2?3:2;
 for(let i=0;i<shots;i++){
  const spread=(i-(shots-1)/2)*.13;
  const tx=pl.x,ty=pl.y+55;
  let dx=tx-boss.x,dy=ty-(boss.y+105),ang=Math.atan2(dy,dx)+spread;
  const type=CAPSULE_TYPES[(boss.shotNo+i)%CAPSULE_TYPES.length];
  missiles.push({x:boss.x-90,y:boss.y+92,w:76,h:38,vx:Math.cos(ang)*390,vy:Math.sin(ang)*390,alive:1,trail:[],rot:ang,spin:(Math.random()-.5)*3,type});
 }
 boss.flash=.25;boss.charging=0;
}
function addToxicBreak(x,y,type,big=false){
 const n=big?18:12;
 for(let i=0;i<n;i++){
  const a=Math.random()*Math.PI*2,sp=(big?210:155)*(.55+Math.random()*.7);
  toxicBits.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-45,t:.30+Math.random()*.18,max:.48,r:2+Math.random()*4,kind:i%3===0?'glass':'toxin',color:type?.liquid||'#9a46cf'});
 }
 addBurst(x,y,big);
}
function drawCapsule(m){
 const t=m.type||CAPSULE_TYPES[0];
 ctx.save();ctx.translate(m.x+m.w/2,m.y+m.h/2);ctx.rotate(m.rot||0);
 ctx.shadowColor=t.glow;ctx.shadowBlur=14;
 rr(-m.w/2,-m.h/2,m.w,m.h,m.h/2,'#171824','#ffb1d8');
 ctx.save();ctx.beginPath();ctx.roundRect(-m.w/2+5,-m.h/2+5,m.w-10,m.h-10,(m.h-10)/2);ctx.clip();
 ctx.fillStyle=t.liquid;ctx.fillRect(-m.w/2+5,0,m.w-10,m.h/2-5);
 ctx.fillStyle='rgba(255,255,255,.16)';ctx.fillRect(-m.w/2+10,-m.h/2+8,m.w*.45,5);
 ctx.restore();
 ctx.shadowBlur=0;ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-m.h/2+4);ctx.lineTo(0,m.h/2-4);ctx.stroke();
 txt(t.icon,-9,6,16,'#fff');ctx.restore();
 txt(t.label,m.x+m.w/2,m.y+m.h+19,13,'#ffe8f2');
}
function firePurifier(){
 if(!boss.active||!boss.alive||boss.phase==='intro'||en<30)return;
 en-=30;
 purifiers.push({x:pl.x+pl.dir*42,y:pl.y+42,w:70,h:28,vx:pl.dir*680,alive:1});
}
function addBurst(x,y,big=false){bursts.push({x,y,t:big?.55:.32,max:big?.55:.32,big});}
function addHitSpark(x,y,big=false){
 const count=big?10:6;
 for(let i=0;i<count;i++){
  const a=(-Math.PI*.85)+(Math.random()*Math.PI*1.7);
  const sp=(big?190:140)*(0.65+Math.random()*.55);
  hitSparks.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-35,t:big?.18:.14,max:big?.18:.14,r:(big?4.2:3)*(0.7+Math.random()*.6)});
 }
}
function update(dt){
 T+=dt;
 if(S==='title'){if(P['enter']||P[' ']||P['z'])scene('intro')}
 else if(S==='intro'){if(T>7.5||P['enter']||P[' ']||P['z'])scene('game')}
 else if(S==='game')game(dt);
 else if((S==='clear'||S==='gameover'||S==='end')&&(P['enter']||P[' ']||P['z']))scene('title');
 for(const k in P)delete P[k];
}
function game(dt){
 if(quizActive)return;
 let d=(K['arrowleft']||K['a']?-1:0)+(K['arrowright']||K['d']?1:0);
 const guarding=pl.sh>0;
 const speed=guarding?130:(pl.atk>0?180:270);
 pl.vx+=(d*speed-pl.vx)*Math.min(1,dt*12);if(d)pl.dir=d;
 if((P[' ']||P['arrowup']||P['w'])&&pl.on){pl.vy=-550;pl.on=0}
 pl.atkCd=Math.max(0,pl.atkCd-dt);pl.shCd=Math.max(0,pl.shCd-dt);
 if((P['z']||P['k'])&&pl.atk<=0&&pl.atkCd<=0&&!guarding){pl.atk=.28;pl.atkCd=.31;pl.atkSeq++}
 if((P['x']||P['l'])&&pl.sh<=0&&pl.shCd<=0&&pl.atk<=0){pl.sh=.55;pl.shCd=.95}
 if(P['c']||P['j'])firePurifier()
 pl.atk=Math.max(0,pl.atk-dt);pl.sh=Math.max(0,pl.sh-dt);pl.inv=Math.max(0,pl.inv-dt);
 pl.vy+=1200*dt;pl.x=cl(pl.x+pl.vx*dt,40,WORLD-80);pl.y+=pl.vy*dt;
 if(pl.y+pl.h>=G){pl.y=G-pl.h;pl.vy=0;pl.on=1}else pl.on=0;

 const body={x:pl.x-28,y:pl.y+5,w:56,h:115};
 const atkBox={x:pl.dir>0?pl.x+20:pl.x-105,y:pl.y+5,w:90,h:100};

 foes.forEach(f=>{
  if(!f.alive)return;
  f.x+=f.dir*40*dt;
  if(Math.abs(f.x-[620,1080,1540,2200,2780][foes.indexOf(f)])>90)f.dir*=-1;
  const fb={x:f.x-f.w/2,y:f.y,w:f.w,h:f.h};
  if(pl.atk>.05&&hit(atkBox,fb)&&f.lastHit!==pl.atkSeq){f.lastHit=pl.atkSeq;f.hp--;addHitSpark(pl.dir>0?f.x-f.w*.22:f.x+f.w*.22,f.y+f.h*.48,false);if(f.hp<=0){
    f.alive=0;
    rec+=12;
    en+=10;
    openSlimeQuiz(f.quizType);
   }}
  if(hit(body,fb)&&pl.inv<=0){
    if(pl.sh>0){f.dir*=-1;f.x+=pl.dir*24}else{life--;pl.inv=1.0;pl.vy=-260;if(life<=0)S='gameover'}
  }
 });

 if(pl.x>3100&&boss.phase==='wait')startBossEncounter();
 if(boss.active&&boss.alive){
  if(boss.phase==='intro'){
   boss.intro+=dt;pl.vx=0;
   const target=cam+W-225;
   boss.x+=(target-boss.x)*Math.min(1,dt*2.6);
   if(boss.intro>=1.55){boss.phase='fight';boss.attackTimer=3.0;boss.countdown=0;boss.charging=0}
  }else if(boss.phase==='fight'){
   boss.flash=Math.max(0,boss.flash-dt);
   boss.attackTimer-=dt;
   boss.charging=boss.attackTimer<=.38&&boss.attackTimer>0?1-boss.attackTimer/.38:0;
   boss.countdown=boss.attackTimer<=3?Math.max(1,Math.ceil(boss.attackTimer)):0;
   if(boss.attackTimer<=0){fireBossMissiles();boss.attackTimer=boss.hp<=boss.max/2?2.8:3.8;boss.countdown=0}
   const desired=pl.x+500;
   boss.x+=(desired-boss.x)*Math.min(1,dt*(boss.hp<=boss.max/2?1.2:.75));
   boss.x=cl(boss.x,3200,WORLD-130);
  }
  const bb={x:boss.x-boss.w/2,y:boss.y,w:boss.w,h:boss.h};
  if(boss.phase==='fight'&&pl.atk>.05&&hit(atkBox,bb)&&boss.lastHit!==pl.atkSeq){
   boss.lastHit=pl.atkSeq;boss.hp--;addHitSpark(pl.dir>0?boss.x-boss.w*.32:boss.x+boss.w*.32,boss.y+boss.h*.52,true);
   if(boss.hp<=0){boss.alive=0;rec=100;addBurst(boss.x,boss.y+100,true);S='clear'}
  }
  if(boss.phase==='fight'&&hit(body,bb)&&pl.inv<=0&&pl.sh<=0){life--;pl.inv=1;pl.vx=-pl.dir*300;if(life<=0)S='gameover'}
 }

 purifiers.forEach(m=>{
  if(!m.alive)return;m.x+=m.vx*dt;
  const mb={x:m.x,y:m.y,w:m.w,h:m.h};
  if(boss.active&&boss.alive&&boss.phase==='fight'){
   const bb={x:boss.x-boss.w/2,y:boss.y,w:boss.w,h:boss.h};
   if(hit(mb,bb)){m.alive=0;boss.hp=Math.max(0,boss.hp-4);rec+=5;addBurst(m.x,m.y,true);if(boss.hp<=0){boss.alive=0;rec=100;S='clear'}}
  }
  if(m.x<cam-100||m.x>cam+W+200)m.alive=0;
 });
 purifiers=purifiers.filter(m=>m.alive);
 missiles.forEach(m=>{
  if(!m.alive)return;m.trail.push({x:m.x,y:m.y});if(m.trail.length>11)m.trail.shift();m.x+=m.vx*dt;m.y+=m.vy*dt;m.rot+=m.spin*dt;
  if(pl.atk>.05&&hit(atkBox,m)){m.alive=0;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,false);return}
  if(hit(body,m)){if(pl.sh>0){m.alive=0;en+=2;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,true)}else if(pl.inv<=0){m.alive=0;life--;pl.inv=1;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,false);if(life<=0)S='gameover'}}
  if(m.x<cam-100||m.x>cam+W+200||m.y<0||m.y>H)m.alive=0;
 });
 missiles=missiles.filter(m=>m.alive);
 bursts.forEach(b=>b.t-=dt);bursts=bursts.filter(b=>b.t>0);
 hitSparks.forEach(s=>{s.t-=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.vy+=760*dt});hitSparks=hitSparks.filter(s=>s.t>0);
 toxicBits.forEach(q=>{q.t-=dt;q.x+=q.vx*dt;q.y+=q.vy*dt;q.vy+=620*dt;q.vx*=.985});toxicBits=toxicBits.filter(q=>q.t>0);
 cam=cl(cam+(pl.x-365-cam)*dt*5,0,WORLD-W);
 rec=cl(rec,0,100);
}

function title(){
 drawCover(A.title,0,0,W,H);
 ctx.fillStyle='rgba(0,20,42,.72)';ctx.fillRect(0,H-42,W,42);
 txt(IS_TOUCH?'화면을 터치하거나 ⚔ 버튼을 눌러 시작':'게임 시작 버튼 클릭 · ENTER 또는 SPACE',W/2,H-16,17);txt('Full Quiz v7.0',1238,30,15,'#d7efff','right');
}
function intro(){
 bg(Math.min(30,T*4));ground();
 if(T<2.7){
  txt('부패는 우리의 미래를 어둡게 만듭니다.',W/2,620,32);
 }else if(T<5.3){
  playerRig(470,535,1.0,0,1,false);
  txt('하지만 청렴의 힘은 어둠을 걷어냅니다.',W/2,620,32);
 }else{
  playerRig(330+(T-5.3)*120,540,0.92,Math.max(0,Math.sin(T*4)),0,false);
  txt('부패를 물리치고 대한민국의 미래를 밝혀주세요!',W/2,620,28);
 }
 txt(IS_TOUCH?'⚔ 버튼으로 건너뛰기':'ENTER로 건너뛰기',1230,690,14,'#d7efff','right');
}
function drawGame(){
 bg(rec);ground();
 ctx.save();ctx.translate(-cam,0);
 foes.forEach(f=>{if(f.alive){
  // v5.0.3: 슬라임 이미지의 하단을 캐릭터 발과 동일한 플랫폼 기준선에 고정한다.
  const sw=f.w*1.18, sh=(f.h+12)*1.18;
  // 슬라임 원본의 빈 배경 여백을 제거하고 실제 몸체 바닥을 캐릭터 발 높이에 고정한다.
  drawCropped(A.slime,.14,.20,.73,.60,f.x-sw/2,CHARACTER_FOOT_Y-sh,sw,sh,1,f.dir<0);
  // 이미 월드 좌표계를 -cam만큼 이동했으므로 카메라 값을 다시 빼지 않는다.
  txt(f.label,f.x,f.y-26,15,'#ffe46b');
 }});
 if(boss.alive&&boss.active){
  ctx.save();
  if(boss.flash>0){ctx.globalAlpha=.65+.35*Math.sin(performance.now()/35)}
  drawContain(A.boss,boss.x-boss.w/2,boss.y,boss.w,boss.h,1,false,0,.5,1);
  ctx.restore();
  if(boss.phase==='fight'&&boss.charging>0){
   const pulse=22+boss.charging*24+Math.sin(performance.now()/45)*4;
   ctx.save();ctx.globalAlpha=.45+.45*boss.charging;ctx.shadowColor='#d95cff';ctx.shadowBlur=25;
   ctx.fillStyle='#6f167f';ctx.beginPath();ctx.arc(boss.x-82,boss.y+105,pulse,0,Math.PI*2);ctx.fill();
   ctx.strokeStyle='#ffb3ff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(boss.x-82,boss.y+105,pulse+8,0,Math.PI*2);ctx.stroke();ctx.restore();
  }
 }
 missiles.forEach(m=>{
  const col=m.type?.liquid||'#9b30a7';
  m.trail.forEach((q,i)=>{const a=(i+1)/m.trail.length*.24;ctx.globalAlpha=a;ctx.fillStyle=col;ctx.beginPath();ctx.arc(q.x+m.w*.3,q.y+m.h*.5,5+i*.35,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(12,6,18,.55)';ctx.beginPath();ctx.arc(q.x+m.w*.17,q.y+m.h*.42,3+i*.25,0,Math.PI*2);ctx.fill()});ctx.globalAlpha=1;
  drawCapsule(m);
 });
 toxicBits.forEach(q=>{const a=Math.max(0,q.t/q.max);ctx.globalAlpha=a;if(q.kind==='glass'){ctx.strokeStyle='#e8f7ff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(q.x-4,q.y-2);ctx.lineTo(q.x+4,q.y+2);ctx.stroke()}else{ctx.fillStyle=q.color;ctx.beginPath();ctx.arc(q.x,q.y,q.r*(.5+a),0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1});
 purifiers.forEach(m=>{rr(m.x,m.y,m.w,m.h,14,'#34d7ff','#fff');txt('정화',m.x+m.w/2,m.y+21,14,'#062744')});
 bursts.forEach(b=>{
  const p=1-b.t/b.max,r=(b.big?115:58)*p;
  ctx.globalAlpha=1-p;ctx.strokeStyle=b.big?'#9ffcff':'#ffe671';ctx.lineWidth=b.big?12:7;ctx.beginPath();ctx.arc(b.x,b.y,r,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
 });
 hitSparks.forEach(s=>{
  const a=Math.max(0,s.t/s.max);
  ctx.globalAlpha=a;
  ctx.fillStyle=a>.48?'#ffffff':'#ffd84d';
  ctx.beginPath();ctx.arc(s.x,s.y,s.r*a+.8,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#fff2a3';ctx.lineWidth=2*a;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x-s.vx*.025,s.y-s.vy*.025);ctx.stroke();
  ctx.globalAlpha=1;
 });
 ctx.restore();

 if(pl.inv<=0||Math.floor(pl.inv*10)%2===0){
  const attack=pl.atk>0?1-pl.atk/.28:0;
  playerRig(pl.x-cam,pl.y+pl.h,0.88,attack,pl.sh>0,pl.dir<0);
 }

 rr(22,20,405,94,20,'rgba(3,20,38,.82)','rgba(150,220,255,.65)');
 txt('♥'.repeat(Math.max(0,life)),45,54,28,'#ff7188','left');
 txt('청렴 에너지  '+en,45,88,18,'#d9f7ff','left');
 txt('도시 회복도  '+Math.round(rec)+'%',700,39,18);
 rr(500,58,400,24,12,'#071b2d','#a7d8ef');
 ctx.fillStyle='#50dba2';ctx.fillRect(504,62,392*rec/100,16);
 txt(IS_TOUCH?'◀ ▶ 이동 · ⚔ 공격 · 🛡 방패':'이동 A/D · 점프 SPACE · 공격 Z · 방패 X · 정화미사일 C(30)',1035,40,15,'#d9f7ff');

 if(boss.active&&boss.alive){
  rr(370,105,540,54,18,'rgba(35,5,28,.9)','#ff87ac');
  txt('BOSS  부패 에너지 괴물',640,101,20,'#ffd4df');
  rr(392,124,496,22,11,'#210818','#ffffff55');
  ctx.fillStyle=boss.hp<=boss.max*.2?'#ff263f':'#ef4774';ctx.fillRect(397,129,486*boss.hp/boss.max,12);
  if(boss.phase==='intro'){
   ctx.fillStyle='rgba(20,0,12,.68)';ctx.fillRect(0,0,W,H);
   txt('⚠  BOSS 등장  ⚠',W/2,245,52,'#ff5a7e');
   rr(W/2-340,285,680,150,24,'rgba(3,18,35,.92)','#79dbff');
   txt('독극물 캡슐은  X  방패로 막으세요!',W/2,335,27,'#ffffff');
   txt('방패는 잠깐만 유지됩니다.',W/2,378,22,'#ccefff');
   txt('3 · 2 · 1 카운트다운 끝에 맞춰 X를 누르세요',W/2,414,20,'#ffe59a');
  }else if(boss.countdown>0){
   txt('⚠ LOCK ON · 카운트다운 끝에 X!',W/2,220,23,'#ffd6e1');
   txt(String(boss.countdown),W/2,305,70,'#ff4a75');
   ctx.strokeStyle='rgba(255,58,104,.65)';ctx.lineWidth=6;ctx.beginPath();ctx.arc(pl.x-cam,pl.y+55,52+8*Math.sin(performance.now()/90),0,Math.PI*2);ctx.stroke();
  }
 }
}
function panel(title,sub){
 ctx.fillStyle='rgba(2,10,22,.78)';ctx.fillRect(0,0,W,H);
 txt(title,W/2,300,62,title.includes('CLEAR')?'#8dffcb':'#fff');
 txt(sub,W/2,370,26,'#d7efff');
 rr(W/2-150,430,300,65,18,'#187bc2','#8ee8ff');txt(IS_TOUCH?'화면 터치 또는 ⚔':'클릭 또는 ENTER',W/2,471,21);
}
function render(){
 ctx.clearRect(0,0,W,H);
 if(S==='loading')return;
 if(S==='title')title();
 else if(S==='intro')intro();
 else if(S==='game'){drawGame();if(pl.inv>0&&Math.floor(pl.inv*10)%2===0){ctx.fillStyle='rgba(255,50,80,.12)';ctx.fillRect(0,0,W,H)}}
 else if(S==='clear'){bg(100);ground();playerRig(350,540,1.05,0,1,false);panel('STAGE 1 CLEAR!','도시에 청렴의 빛이 돌아왔습니다.')}
 else if(S==='gameover'){bg(rec);ground();panel('정화 실패','다시 도전해 부패를 몰아내세요.')}
 else if(S==='end'){bg(100);panel('청렴 에너지 히어로','청렴은 대한민국을 밝히는 힘입니다.')}
}
function loop(t){const dt=Math.min(.033,(t-last)/1000||0);last=t;update(dt);render();requestAnimationFrame(loop)}
requestAnimationFrame(loop);
