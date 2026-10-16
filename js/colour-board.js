/* Colour codes + theme rules board. Needs logo-kit.js (window.DGK). Used by index.html and the logo kit / brand brief. */
window.renderColourBoard=function(k){
const K=DGK,c=t=>K.col(t).toUpperCase(),rgb=h=>{const n=parseInt(h.slice(1),16);return [n>>16,n>>8&255,n&255]};
const lum=h=>{const v=rgb(h).map(x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const cr=(a,b)=>{const[x,y]=[lum(a),lum(b)].sort((p,q)=>q-p);return (x+.05)/(y+.05)};
const label=t=>t.replace(/^(\w)/,m=>m.toUpperCase()).replace('-',' ');
const use={black:'Documents, print on white or chalk paper, forms, one-colour printing.',white:'Dark photos and video overlays, black merch, night-mode screens.',fairway:'Primary brand look. Avatars, YouTube banner, thumbnails, signage.',bunker:'Light, warm backgrounds. Covers, posters, light social posts.',soil:'Warm accent. Event posts, merch, highlights alongside fairway.'};
const row=(l,t)=>{const h=c(t);return `<div class="cr"><span>${l}</span><b>${label(t)}</b><code>${h} · RGB ${rgb(h).join(' ')}</code></div>`};
const cw=K.VARS.map(v=>{const r=cr(c(v.bg),c(v.fg));return `<div class="cw"><div class="cw-sw" style="background:var(--${v.bg})">${K.svg(K.lock({k,z:3,fs:16,fg:v.fg,pad:0}),{transp:1})}<span style="color:var(--${v.fg})">${v.label}</span></div><div class="cw-d">${row('Background',v.bg)}${row('Logo',v.fg)}${row('Pattern tint',v.tint)}<div class="cr"><span>Contrast</span><b>${r.toFixed(1)}:1</b><code>${r>=7?'WCAG AAA':r>=4.5?'WCAG AA':'AA large text'}</code></div><p>${use[v.id]}</p></div></div>`}).join('');
const PAL=[['Pine · fairway greens (primary)',['pine-900','pine-800','pine-700','pine-600','pine-500']],['Sand · bunker',['sand-700','sand-500','sand-300','sand-100']],['Soil · earthy brown',['soil-700','soil-600','soil-400','soil-100']],['Turf · light greens',['turf-400','turf-200','turf-100']],['Clay · terracotta (UI accent)',['clay-700','clay-600','clay-400','clay-100']],['Haldi · turmeric gold (highlights)',['haldi-600','haldi-500','haldi-100']],['Paper and ink',['ink','chalk','paper']],['Stone · warm neutrals',['stone-900','stone-700','stone-500','stone-300','stone-100']]];
const pal=PAL.map(([g,ts])=>`<div class="pg"><div class="lbl">${g}</div><div class="sws">${ts.map(t=>{const h=c(t);return `<div class="sw"><i style="background:${h}"></i><b>${label(t)}</b><code>${h}</code><code>RGB ${rgb(h).join(' ')}</code><code>--${t}</code></div>`}).join('')}</div></div>`).join('');
const RULES=[
['One colour per logo','Symbol and wordmark always share one colour. Never split the tees and the type into different colours, and never add gradients, outlines or shadows.'],
['Only the five colourways','Use the logo only as Black, White, Fairway, Bunker or Soil, each on its own background. Don’t place it on clay, haldi, turf or stone backgrounds.'],
['Fairway leads','Fairway (Pine 800 + Sand 300) is the default brand look. Use Black for documents and print, White over dark photos, and Bunker or Soil for variety.'],
['Strong in monochrome','Every lockup must work in one flat colour. For one-colour printing use Ink #121511 on white, or reverse to white out of any dark colour.'],
['Photos need a panel','On a photo or busy image, put the logo on a solid panel of its colourway’s background. Never set it straight on the image.'],
['Patterns stay quiet','The pattern motif uses the tint one step off the background (listed per colourway) at up to 70% opacity. A logo on a pattern sits on a solid panel.'],
['Clear space and size','Keep clear space equal to the height of the centre ball on every side. Minimum size: lockup 24 px / 8 mm tall, symbol 16 px / 6 mm.'],
['Accents are not logo colours','Clay #A4532F is for links and hover states. Haldi #C8942F is for winners, scores and highlights. Neither is ever used for the logo.'],
['Text on brand colours','Body text: Ink on Chalk or Paper. Secondary text: Stone 700. On Pine 800 use Chalk or Sand 300. Keep text at WCAG AA (4.5:1) or better.'],
['Type','English wordmark: Hanken Grotesk 800, caps, +4% tracking. Telugu: Anek Telugu 800. Headings: Young Serif. Don’t retype the logo in another font.']];
const rules=`<ol class="rules">${RULES.map(([t,d])=>`<li class="rule"><b>${t}</b><span>${d}</span></li>`).join('')}</ol>`;
return `<section class="board" id="theme" data-screen-label="Colour and theme"><div class="bh"><h2>Colour codes &amp; theme rules</h2><p>Exact values for every logo colourway and the full brand palette. Use HEX for screens; RGB is listed for design tools. Contrast is measured against WCAG 2.1.</p></div>
<div class="lbl sub">Logo colourways</div><div class="cws">${cw}</div>
<div class="lbl sub">Theme rules</div>${rules}
<div class="lbl sub">Full palette</div><div class="pal">${pal}</div></section>`};
