/* Renders a full logo page from a config. Needs logo-kit.js (window.DGK). */
window.renderBrandPage=async function(cfg,root){
const K=DGK;await K.ready();const R=K.R,k=cfg.k,S=(B,o)=>K.svg(B,{transp:1,...o}),c=t=>K.col(t);
const F=cfg.fonts,EN=(s=1,ls=F.enLs)=>R('DESI GOLFERS',F.en,F.enW,s*F.enS,ls),TEL=(s=1)=>R(K.TE,F.te,F.teW,s*F.teS),
 tDesi=()=>R('దేశీ',F.te,F.teW,F.teS*1.05),tGolf=()=>R('గోల్ఫర్స్',F.te,F.teW,F.teS*1.05,0,.32);
const TXT=[
['caps','All caps · English',[[EN()]]],
['lower','All lowercase · English',[[R('desi golfers',F.en,F.enW,F.enS*1.08,F.lowLs)]]],
['te-en','దేశీ in Telugu · GOLFERS in English',[[tDesi(),R('GOLFERS',F.en,F.enW,F.enS,F.enLs,.32)]]],
['telugu','Complete Telugu',[[TEL()]]],
['te-over-en','Telugu first, English below',[[TEL()],[EN(.42,.3)]],{justify:1,lg:.24}],
['en-te','DESI in English · గోల్ఫర్స్ in Telugu',[[R('DESI',F.en,F.enW,F.enS,F.enLs),tGolf()]]]];
const STACK=[[EN()],[TEL(.8)]];
const tileB=(B,name,bg)=>`<div class="tile" style="background:var(--${bg})">${S(B)}${K.btns(B,cfg.slug+'-'+name)}</div>`;
const sec=(id,title,p,body,foot='')=>`<section class="board" id="${id}" data-screen-label="${title}"><div class="bh"><h2>${title}</h2><p>${p}</p></div>${body}${foot}</section>`;
let out='';
out+=sec('anatomy','Anatomy',cfg.anatomyText,`<div class="g3">${cfg.anatomy.map(([s,l])=>{const B=K.lock({k:s,z:6,fs:24,fg:'pine-800',bg:'chalk'});return `<div class="cell">${tileB(B,'symbol-'+s.toLowerCase(),'chalk')}<span class="cap">${l}</span></div>`}).join('')}</div>`);
out+=sec('text','Text versions','Six ways to set the name, each as a horizontal and a vertical lockup. Use the all-Telugu or Telugu-first versions for Telugu-language content, and the mixed versions for bilingual posts.',
`<div class="tv">${TXT.map(([id,l,lines,o])=>{const H=K.lock({k,lines,fs:34,fg:'pine-800',bg:'chalk',...o}),V=K.lock({k,arr:'v',lines,fs:28,fg:'pine-800',bg:'chalk',...o});return `<div class="tv-row"><span class="cap">${l}</span><div class="tv-pair">${tileB(H,'text-'+id+'-horizontal','chalk')}${tileB(V,'text-'+id+'-vertical','chalk')}</div></div>`}).join('')}</div>`);
out+=sec('colour','Five colourways','Black, white, fairway, bunker and soil. Symbol and type always share one colour.',
`<div class="g5">${K.VARS.map(v=>tileB(K.lock({k,arr:'v',fs:26,lines:STACK,fg:v.fg,bg:v.bg}),'stack-'+v.id,v.bg)).join('')}</div>
<div class="g5">${K.VARS.map(v=>tileB(K.lock({k,lines:[[EN()]],fs:22,fg:v.fg,bg:v.bg,pad:14}),'lockup-'+v.id,v.bg)).join('')}</div>
<div class="g5">${K.VARS.map(v=>tileB(K.lock({k,z:4,fs:20,fg:v.fg,bg:v.bg}),'symbol-'+v.id,v.bg)).join('')}</div>`);
if(window.renderColourBoard)out+=renderColourBoard(k);
if(window.renderTypeBoard)out+=renderTypeBoard();
const PM=[['grid','Grid','Upright repeat'],['turn','Turn','Each tile rotated 90°'],['tilt','Tilt','Whole field at −35°'],['turntilt','Turn + tilt','Tiles rotated 90°, field at −35°']];
out+=sec('pattern','Pattern system','The symbol repeats, rotates and tiles. The motif uses a tint one step off the background so type on top stays readable.',
`<div class="g2">${PM.map(([m,l,d],i)=>{const v=K.VARS[[2,3,4,1][i]],B=K.compose({W:1200,H:800,bg:v.bg,pattern:{k,fg:v.tint,mode:m,cell:110,scale:.8,opacity:.7}});return `<div class="cell"><div class="tile mk" style="padding:0;--h:0">${K.svg(B,{fluid:1})}${K.btns(B,cfg.slug+'-pattern-'+m+'-'+v.id,{t:false})}</div><span class="cap">${l} · ${d}</span></div>`}).join('')}</div>`);
/* applications */
const igAv=K.avatar(k,{bg:'pine-800',fg:'sand-300',label:'CLUB'}),ytAv=K.avatar(k,{bg:'pine-800',fg:'sand-300'}),fbAv=K.avatar(k,{bg:'soil-600',fg:'chalk',label:'CLUB'});
const W=1080,pst=(B,n)=>`<div class="mk">${K.svg(B,{fluid:1})}${K.btns(B,cfg.slug+'-ig-post-'+n,{t:false})}</div>`,posts=[
 ()=>pst(K.compose({W,H:W,bg:'pine-800',pattern:{k,fg:'pine-700',mode:'turn',cell:150,scale:.8,opacity:.7},items:[{B:K.lock({k,arr:'v',fs:40,lines:STACK,fg:'sand-300',pad:0}),cx:540,cy:540,w:560}]}),'fairway'),
 ()=>pst(K.compose({W,H:W,bg:'soil-600',items:[{B:K.lock({k,lines:[[EN()]],fs:40,fg:'chalk',pad:0}),cx:540,cy:540,w:820}]}),'soil-lockup'),
 ()=>pst(K.compose({W,H:W,bg:'chalk',items:[{B:K.lock({k,arr:'v',fs:40,lines:[[TEL()],[EN(.42,.3)]],justify:1,lg:.24,fg:'pine-800',pad:0}),cx:540,cy:540,w:560}]}),'telugu'),
 ()=>pst(K.compose({W,H:W,bg:'sand-300',items:[{B:K.lock({k,lines:[[tDesi(),R('GOLFERS',F.en,F.enW,F.enS,F.enLs,.32)]],fs:40,fg:'pine-900',pad:0}),cx:540,cy:540,w:820}]}),'bunker'),
 ()=>pst(K.compose({W,H:W,bg:'soil-600',pattern:{k,fg:'soil-700',mode:'turntilt',cell:160,scale:.8}}),'soil-pattern'),
 ()=>pst(K.compose({W,H:W,bg:'ink',items:[{B:K.lock({k,z:5,fs:40,fg:'chalk',pad:0}),cx:540,cy:540,w:460}]}),'symbol')];
const hl=[['pine-800','sand-300','Golf fails'],['soil-600','chalk','Bets'],['sand-300','pine-900','Basics'],['ink','chalk','Banter']];
const ig=`<div class="mk"><div class="lbl">Instagram · profile with CLUB avatar</div><div class="ig">
<div class="ig-top"><span>desigolfersclub</span><span style="font-weight:400">•••</span></div>
<div class="ig-head"><div class="ig-av"><div>${K.svg(igAv,{fluid:1})}</div></div><div class="ig-stats"><div><b>248</b>posts</div><div><b>18.6K</b>followers</div><div><b>312</b>following</div></div></div>
<div class="ig-bio"><b>DesiGolfers</b><span>Telugu friends playing real, unedited golf. Comedy, bets, mid-life jokes and golf basics in Telugu.</span><span style="color:#00376b">youtube.com/@desigolfersclub</span></div>
<div class="ig-btn"><span>Follow</span><span>Message</span></div>
<div class="ig-hl">${hl.map(([bg,fg,l])=>`<div><i>${K.svg(K.avatar(k,{bg,fg}),{fluid:1})}</i>${l}</div>`).join('')}</div>
<div class="ig-grid">${posts.map(p=>p()).join('')}</div>
</div>${K.btns(igAv,cfg.slug+'-instagram-avatar-club',{scale:1.08})}</div>`;
const yt=K.compose({W:2560,H:1440,bg:'pine-800',pattern:{k,fg:'pine-700',mode:'turn',cell:170,scale:.8,opacity:.7},items:[{B:K.lock({k,lines:STACK,fs:60,fg:'sand-300',bg:'pine-800',pad:40}),cx:1280,cy:720,w:1300}]});
const ytCard=`<div class="mk"><div class="lbl">YouTube · channel (symbol only, no CLUB)</div><div class="yt">${K.svg(yt,{fluid:1,vb:'0 508 2560 424'})}
<div class="yt-row"><div class="av">${K.svg(ytAv,{fluid:1})}</div><div><h3>DesiGolfers</h3><p>@desigolfersclub · Telugu fun, real golf, no filters</p></div><span class="yt-sub">Subscribe</span></div></div>${K.btns(ytAv,cfg.slug+'-youtube-avatar',{scale:1.08})}</div>`;
const ytArt=`<div class="mk"><div class="lbl">YouTube banner art · 2560×1440</div><div class="safe">${K.svg(yt,{fluid:1})}</div>${K.btns(yt,cfg.slug+'-youtube-banner-2560x1440',{t:false})}</div>`;
const fbB=K.compose({W:1640,H:624,bg:'sand-300',pattern:{k,fg:'sand-500',mode:'turntilt',cell:120,scale:.8,opacity:.45,angle:-35},items:[{B:K.lock({k,lines:[[EN()]],fs:50,fg:'pine-900',bg:'sand-300',pad:36}),x:620,cy:290,w:920}]});
const fb=`<div class="mk" style="grid-column:1/-1"><div class="lbl">Facebook · cover 1640×624 + CLUB profile picture</div><div class="fb">${K.svg(fbB,{fluid:1})}
<div class="fb-row"><div class="av">${K.svg(fbAv,{fluid:1})}</div><div><h3>DesiGolfers</h3><p>Telugu golf recreation channel</p></div></div></div>${K.btns(fbB,cfg.slug+'-facebook-cover-1640x624',{t:false})}${K.btns(fbAv,cfg.slug+'-facebook-avatar-club',{scale:1.08}).replace('class="ex"','class="ex" style="right:auto;left:10px"')}</div>`;
const strip=K.compose({W:2400,H:180,bg:'pine-900',pattern:{k,fg:'pine-800',mode:'brick',cell:90,scale:.8}});
const ft=`<div class="mk" style="grid-column:1/-1"><div class="lbl">Website footer</div><footer class="ft">${K.svg(strip,{fluid:1})}
<div class="ft-main"><div style="flex:1 1 260px">${S(K.lock({k,lines:STACK,fs:22,fg:'sand-300',pad:0}))}</div>
<div class="ft-col"><b>Watch</b><a href="https://www.youtube.com/@desigolfersclub">Latest videos</a><a href="https://www.youtube.com/@desigolfersclub">Golf basics in Telugu</a><a href="https://www.youtube.com/@desigolfersclub">Golf fails</a></div>
<div class="ft-col"><b>Say hi</b><a href="https://www.instagram.com/desigolfersclub/">Instagram</a><a href="https://www.youtube.com/@desigolfersclub">YouTube</a><a href="mailto:desigolfersclub@gmail.com">desigolfersclub@gmail.com</a></div></div>
<div class="ft-base"><span>© 2026 DesiGolfers · Telugu golf recreation channel</span><span style="display:flex;gap:14px"><a href="https://www.instagram.com/desigolfersclub/">Instagram</a><a href="https://www.youtube.com/@desigolfersclub">YouTube</a></span></div></footer>${K.btns(strip,cfg.slug+'-footer-pattern-strip',{t:false})}</div>`;
out+=sec('apps','Applications','Social profiles, banners and the website footer. Instagram and Facebook avatars carry the small CLUB line; the YouTube avatar is symbol only.',`<div class="apps">${ig}<div style="display:flex;flex-direction:column;gap:28px">${ytCard}${ytArt}</div>${fb}${ft}</div>`);
root.innerHTML=out;};
