/* Desi Golfers logo kit: symbols, lockup layout, patterns, SVG/PNG export. Preview === export. */
(function(){
const FONTS_URL='https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:wght@400;600;700;800&family=Anek+Telugu:wght@600;700;800&family=Noto+Serif+Telugu:wght@600;700;800&display=swap';
const linkP=new Promise(res=>{let l=document.querySelector('link[data-kit-fonts]');if(!l){l=document.createElement('link');l.rel='stylesheet';l.href=FONTS_URL;l.dataset.kitFonts='1';document.head.appendChild(l)}l.addEventListener('load',res);l.addEventListener('error',res);if(l.sheet)res();setTimeout(res,4000)});
const FAM={display:"'Young Serif', Georgia, serif",sans:"'Hanken Grotesk', Helvetica, sans-serif",'telugu-display':"'Noto Serif Telugu', serif",telugu:"'Anek Telugu', sans-serif"};
const LOADS=[['Young Serif',400],['Hanken Grotesk',700],['Hanken Grotesk',800],['Anek Telugu',700],['Anek Telugu',800]];
const ready=async()=>{await linkP;await Promise.all(LOADS.map(([f,w])=>document.fonts.load(`${w} 40px "${f}"`,f.includes('Telugu')?'దేశీ గోల్ఫర్స్':'DESI golfers').catch(()=>{})));await document.fonts.ready};
const TE='దేశీ గోల్ఫర్స్';
const tee=(x,t)=>`M${x} ${t}h24l-8 9V88l-4 6-4-6V${t+9}z`;
const D_FLAG=c=>`<path d="M4 14h9v72H4z" fill="${c}"/><path d="M15.5 14a30 36 0 0 1 0 72z" fill="${c}"/>`;
const G_CUP=c=>`<path d="M88.79 52.43A18 18 0 1 0 92.39 68.66" fill="none" stroke="${c}" stroke-width="9"/><circle cx="80.8" cy="65.6" r="6.4" fill="${c}"/>`;
const SHAPE={
A:c=>`<path d="M26 10h14a31 31 0 0 1 0 62h-5v18h-9z" fill="${c}"/><circle cx="57" cy="83" r="7" fill="${c}"/>`,
B:c=>`<path d="M76.05 28.15A34 34 0 1 0 82.84 58.8" fill="none" stroke="${c}" stroke-width="11"/><circle cx="61" cy="53" r="9.5" fill="${c}"/>`,
C:c=>`<circle cx="50" cy="26" r="18" fill="${c}"/><path d="M28 51h44l-13 11v24l-9 9-9-9V62z" fill="${c}"/>`,
D:c=>`<path fill-rule="evenodd" d="M18 94V44a32 32 0 0 1 64 0v50zM31 94V44a19 19 0 0 1 38 0v50z" fill="${c}"/><circle cx="50" cy="79" r="10" fill="${c}"/>`,
E:c=>`<g fill="${c}"><circle cx="50" cy="25" r="11"/><path d="${tee(38,40)}"/><g transform="translate(18 94) scale(.931) translate(-18 -94)"><circle cx="18" cy="45" r="9"/><path d="${tee(6,58)}"/></g><g transform="translate(82 94) scale(.931) translate(-82 -94)"><circle cx="82" cy="45" r="9"/><path d="${tee(70,58)}"/></g></g>`,
E1:c=>`<g fill="${c}"><circle cx="50" cy="25" r="11"/><path d="${tee(38,40)}"/></g>`,
E3:c=>`<g fill="${c}"><circle cx="18" cy="45" r="9"/><circle cx="50" cy="45" r="9"/><circle cx="82" cy="45" r="9"/><path d="${tee(6,58)}${tee(38,58)}${tee(70,58)}"/></g>`,
F:c=>`<g transform="translate(-.75 0)">${D_FLAG(c)}${G_CUP(c)}</g>`,
FD:c=>`<g transform="translate(25.25 0)">${D_FLAG(c)}</g>`,
FG:c=>`<g transform="translate(-25 0)">${G_CUP(c)}</g>`};
const SYM=(k,c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100" aria-hidden="true">${SHAPE[k](c)}</svg>`;
const col=v=>!v?null:(v[0]==='#'||v.startsWith('rgb'))?v:(getComputedStyle(document.documentElement).getPropertyValue('--'+v).trim()||v);
const f=n=>+(+n).toFixed(2);
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const R=(t,fam,w,s=1,ls=0,sp=0,c)=>({t,f:fam,w,s,ls,sp,c});
const mc=document.createElement('canvas').getContext('2d');
function meas(r,fs){const size=fs*r.s,lsp=r.ls*size,font=`${r.w} ${size}px ${FAM[r.f]}`;mc.font=font;mc.letterSpacing=lsp+'px';const m=mc.measureText(r.t);return {t:r.t,w:r.w,fam:FAM[r.f],size,lsp,c:r.c,sp:r.sp,width:m.width,asc:m.actualBoundingBoxAscent,desc:m.actualBoundingBoxDescent}}
const symAt=(k,c,x,y,z,rot)=>`<svg x="${f(x)}" y="${f(y)}" width="${f(z)}" height="${f(z)}" viewBox="0 0 100 100" overflow="visible">${rot?`<g transform="rotate(${rot} 50 50)">`:''}${SHAPE[k](c)}${rot?'</g>':''}</svg>`;
/* visual bounds of each symbol inside its 100×100 box */
const BOX={A:[26,10,71,90],B:[11,11,89,89],C:[28,8,72,95],D:[18,12,82,94],E:[6.8,14,93.2,94],E1:[38,14,62,94],E3:[6,36,94,94],F:[3.25,14,96.75,86.5],FD:[29.25,14,70.75,86],FG:[26.75,41.5,71.75,86.5]};
const bx=k=>BOX[k]||[0,0,100,100];
/* place symbol by its visual box: returns {svg,vw,vh} for a given visual height */
function symV(k,c,left,top,vh){const b=bx(k),z=vh/((b[3]-b[1])/100),vw=z*(b[2]-b[0])/100;return {svg:symAt(k,c,left-z*b[0]/100,top-z*b[1]/100,z),vw,vh}}
const symWH=(k,vh)=>{const b=bx(k);return vh*(b[2]-b[0])/(b[3]-b[1])};
/* lockup: {k, lines:[[run..]..], arr:'h'|'v'|'text', fs, fg, sym, bg, z, pad, justify, lg} */
function lock(s){const fs=s.fs||40,pad=s.pad??fs*.8,fg=col(s.fg||'ink'),sc=col(s.sym||s.fg||'ink');
 const L=(s.lines||[]).map(rs=>{let x=0;const m=rs.map(r=>{x+=(r.sp||0)*fs;const q=meas(r,fs);q.dx=x;x+=q.width;return q});const last=m[m.length-1];return {m,w:x-last.lsp,asc:Math.max(...m.map(q=>q.asc)),desc:Math.max(...m.map(q=>q.desc))}});
 if(s.justify&&L.length>1){const w0=L[0].w;L.slice(1).forEach(l=>{if(l.m.length!==1||l.w>=w0||/telugu/i.test(l.m[0].fam))return;const r=l.m[0],n=[...r.t].length,ex=(w0-l.w)/(n-1);r.lsp+=ex;r.width+=ex*n;l.w=w0})}
 const gap=fs*(s.lg??.3),n=L.length,bw=n?Math.max(...L.map(l=>l.w)):0;
 const bv=n?L.reduce((a,l)=>a+l.asc,0)+L.slice(0,-1).reduce((a,l)=>a+l.desc,0)+gap*(n-1):0,lastD=n?L[n-1].desc:0;
 const arr=s.k?(s.arr||'h'):'text';let W,H,shapes='',tx,ty,center=false;
 if(arr==='text'){W=bw+pad*2;H=bv+lastD+pad*2;tx=pad;ty=pad}
 else if(!n){const vh=fs*(s.z||4)*.8,vw=symWH(s.k,vh);W=pad*2+vw;H=pad*2+vh;shapes=symV(s.k,sc,pad,pad,vh).svg}
 else if(arr==='h'){const vh=s.z?fs*s.z*.8:n===1?L[0].asc*2.3:bv*1.12,vw=symWH(s.k,vh),g=n===1?L[0].asc*.75:bv*.34;
  const up=Math.max(vh,bv)/2,dn=Math.max(vh/2,bv/2+lastD);H=pad*2+up+dn;W=pad*2+vw+g+bw;const cy=pad+up;
  shapes=symV(s.k,sc,pad,cy-vh/2,vh).svg;tx=pad+vw+g;ty=cy-bv/2}
 else{const vw0=s.z?null:Math.min(bw*.46,bv*2.6);const b=bx(s.k);const vh=s.z?fs*s.z*.8:vw0*(b[3]-b[1])/(b[2]-b[0]),vw=symWH(s.k,vh),g=vh*.2;
  W=pad*2+Math.max(vw,bw);H=pad*2+vh+g+bv+lastD;shapes=symV(s.k,sc,(W-vw)/2,pad,vh).svg;ty=pad+vh+g;center=true}
 const texts=[];let y=ty;L.forEach(l=>{y+=l.asc;const x0=center?(W-l.w)/2:tx;l.m.forEach(q=>texts.push({...q,x:x0+q.dx,y,color:q.c?col(q.c):fg}));y+=l.desc+gap});
 return {W,H,bg:col(s.bg||'chalk'),shapes,texts}}
/* round avatar 1000×1000, optional small label under the symbol */
function avatar(k,o){const W=1000,bg=col(o.bg),fg=col(o.fg),vh=o.label?330:420,vw=symWH(k,vh),top=o.label?(W-vh)/2-60:(W-vh)/2;
 const shapes=`<circle cx="500" cy="500" r="500" fill="${bg}"/>`+symV(k,fg,(W-vw)/2,top,vh).svg;const texts=[];
 if(o.label){const q=meas(R(o.label,'sans',700,1,.42),58);texts.push({...q,x:(W-(q.width-q.lsp))/2,y:top+vh+60+q.asc,color:fg})}
 return {W,H:W,bg:null,shapes,texts}}
/* repeat pattern markup. mode: grid | brick | turn | flip | tilt */
let uid=0;
function pattern(p){const id='dgk'+(++uid)+Math.random().toString(36).slice(2,6),c=col(p.fg),cell=p.cell||120,s=(p.scale||.55)*cell/100,tilt=(p.mode==='tilt'||p.mode==='turntilt')?(p.angle??-35):0;
 const ext=Math.hypot(p.W,p.H),x0=tilt?(p.W-ext)/2-cell:-cell/2,y0=tilt?(p.H-ext)/2-cell:-cell/2,w=tilt?ext+cell*2:p.W+cell,h=tilt?ext+cell*2:p.H+cell;let cells='';
 for(let j=0;j*cell<h;j++)for(let i=0;i*cell<w;i++){const off=(p.mode==='brick'||p.mode==='tilt')&&j%2?cell/2:0,r=(p.mode==='turn'||p.mode==='turntilt')?((i+j)%4)*90:p.mode==='flip'?((i+j)%2)*180:0;
  const x=x0+i*cell+off+(cell-100*s)/2,y=y0+j*cell+(cell-100*s)/2;cells+=`<use href="#${id}" transform="translate(${f(x)} ${f(y)}) scale(${f(s)})${r?` rotate(${r} 50 50)`:''}"/>`}
 const body=tilt?`<g transform="rotate(${tilt} ${f(p.W/2)} ${f(p.H/2)})">${cells}</g>`:cells;return `<defs><g id="${id}">${SHAPE[p.k](c)}</g></defs>`+(p.opacity!=null?`<g opacity="${p.opacity}">${body}</g>`:body)}
/* composite: {W,H,bg, pattern:{k,fg,mode,cell,scale}, items:[{B,cx,cy,w}|{B,x,cy,w}], extra:'svg markup'} */
function compose(c){let shapes=c.pattern?pattern({...c.pattern,W:c.W,H:c.H}):'';const texts=[];
 (c.items||[]).forEach(it=>{const sc=it.w/it.B.W,h=it.B.H*sc,tx=it.x??(it.cx-it.w/2),ty=it.y??(it.cy-h/2);
  shapes+=`<g transform="translate(${f(tx)} ${f(ty)}) scale(${f(sc)})">${it.B.shapes}</g>`;it.B.texts.forEach(t=>texts.push({...t,x:tx+t.x*sc,y:ty+t.y*sc,size:t.size*sc,lsp:t.lsp*sc}))});
 if(c.extra)shapes+=c.extra;return {W:c.W,H:c.H,bg:col(c.bg),shapes,texts}}
const textSVG=ts=>ts.map(t=>`<text x="${f(t.x)}" y="${f(t.y)}" font-family="${t.fam.replace(/"/g,"'")}" font-weight="${t.w}" font-size="${f(t.size)}"${t.lsp?` letter-spacing="${f(t.lsp)}"`:''} fill="${t.color}">${esc(t.t)}</text>`).join('');
function svg(B,o={}){const w=Math.ceil(B.W),h=Math.ceil(B.H),vb=o.vb||`0 0 ${w} ${h}`;
 const size=o.exp?`width="${w}" height="${h}"`:o.fluid?`style="display:block;width:100%;height:auto"`:`width="${w}" height="${h}" style="display:block;max-width:100%;height:auto"`;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" ${size}>${o.exp?`<style>@import url('${FONTS_URL.replace(/&/g,'&amp;')}');</style>`:''}${B.bg&&!o.transp?`<rect width="${w}" height="${h}" fill="${B.bg}"/>`:''}${B.shapes}${textSVG(B.texts)}</svg>`}
async function png(B,o={}){const sc=o.scale||1,cv=document.createElement('canvas');cv.width=Math.ceil(B.W*sc);cv.height=Math.ceil(B.H*sc);const x=cv.getContext('2d');
 if(B.bg&&!o.transp){x.fillStyle=B.bg;x.fillRect(0,0,cv.width,cv.height)}
 const img=new Image();img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${cv.width}" height="${cv.height}" viewBox="0 0 ${B.W} ${B.H}">${B.shapes}</svg>`);await img.decode();x.drawImage(img,0,0,cv.width,cv.height);
 x.scale(sc,sc);x.textBaseline='alphabetic';for(const t of B.texts){x.font=`${t.w} ${t.size}px ${t.fam}`;x.letterSpacing=t.lsp+'px';x.fillStyle=t.color;x.fillText(t.t,t.x,t.y)}
 return new Promise(r=>cv.toBlob(r,'image/png'))}
const REG=[];
function btns(B,name,o={}){const i=REG.push({B,name,scale:o.scale||(B.W<=800?8:B.W<=1200?2:1),t:o.t!==false})-1;return `<div class="ex"><button data-kit="${i}" data-f="png">PNG</button><button data-kit="${i}" data-f="svg">SVG</button></div>`}
const dl=(blob,name)=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000)};
document.addEventListener('click',async e=>{const b=e.target.closest('button[data-kit]');if(!b)return;const r=REG[+b.dataset.kit],tr=r.t&&!!document.getElementById('transp')?.checked,nm='desi-golfers-'+r.name+(tr&&r.B.bg?'-transparent':'');
 if(b.dataset.f==='svg')dl(new Blob([svg(r.B,{exp:1,transp:tr})],{type:'image/svg+xml'}),nm+'.svg');else dl(await png(r.B,{transp:tr,scale:r.scale}),nm+'.png')});
const VARS=[{id:'black',label:'Black',bg:'chalk',fg:'ink',tint:'stone-200'},{id:'white',label:'White',bg:'ink',fg:'chalk',tint:'stone-800'},{id:'fairway',label:'Fairway',bg:'pine-800',fg:'sand-300',tint:'pine-700'},{id:'bunker',label:'Bunker',bg:'sand-300',fg:'pine-900',tint:'sand-500'},{id:'soil',label:'Soil',bg:'soil-600',fg:'chalk',tint:'soil-700'}];
window.DGK={BOX,symV,FONTS_URL,FAM,TE,SHAPE,SYM,R,col,lock,avatar,pattern,compose,svg,png,btns,ready,VARS,symAt};
})();
