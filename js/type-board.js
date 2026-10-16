/* Fonts board: the four brand typefaces. Used by index.html and the logo kit / brand brief. */
window.renderTypeBoard=function(){
const F=[
['Hanken Grotesk','English wordmark, UI and body','var(--font-sans)',800,'DESI GOLFERS','Wordmark 800 caps, +4% tracking · UI 600–700 · Body 400','https://fonts.google.com/specimen/Hanken+Grotesk'],
['Anek Telugu','Telugu wordmark and Telugu text','var(--font-telugu)',800,'దేశీ గోల్ఫర్స్','Wordmark 800 · Text 400–600','https://fonts.google.com/specimen/Anek+Telugu'],
['Young Serif','Headings','var(--font-display)',400,'Three tees. One club.','Regular 400 only · sentence case','https://fonts.google.com/specimen/Young+Serif'],
['IBM Plex Mono','Colour codes, captions and data','var(--font-mono)',500,'#1F3527 · 2560×1440','Medium 500 · small sizes only','https://fonts.google.com/specimen/IBM+Plex+Mono']];
return `<section class="board" id="fonts" data-screen-label="Fonts"><div class="bh"><h2>Fonts</h2><p>Four typefaces, all free under the SIL Open Font License and self-hosted on this site. Never retype the logo; use the logo files.</p></div>
<div class="fts">${F.map(([n,role,fam,w,sample,use,url])=>`<div class="ftc"><div class="ft-s" style="font-family:${fam};font-weight:${w}">${sample}</div><div class="ft-d"><b>${n}</b><span>${role}</span><code>${use}</code><a href="${url}" target="_blank" rel="noopener">Google Fonts ↗</a></div></div>`).join('')}</div></section>`};
