# DesiGolfers brand site: instructions for Claude Code

This folder is a **finished static site**. Publish it as-is; don't rebuild it in a framework. There's no build step and no dependencies.

## Task
1. `git init`, commit everything in this folder (keep `.nojekyll`).
2. Create a public GitHub repo (suggested name `desigolfers-logo`) and push to `main`.
3. Enable GitHub Pages: deploy from branch `main`, folder `/` (root).
4. Check that `index.html`, `three-tees.html` and `assets/logos/` load, and that `assets/desi-golfers-three-tees-logos.zip` downloads.

## What's here
- `index.html`: overview, Download all logos (ZIP), Brand brief (PDF; opens `three-tees.html?print=1`, which auto-prints)
- `three-tees.html`: full logo kit, rendered client-side by `js/brand-page.js` + `js/logo-kit.js`
- `css/site.css`: brand tokens and page styles. `css/fonts.css` + `fonts/`: self-hosted woff2 (Young Serif, Hanken Grotesk, Anek Telugu, Noto Serif Telugu; all OFL)
- `assets/logos/three-tees/{symbol,lockup,vertical,stacked,social,pattern}/`: pre-rendered SVG + PNG, each folder with an `index.html` browser
- `assets/desi-golfers-three-tees-logos.zip`: all 223 logo files

## Brand facts (don't change)
- Name: DesiGolfers, a Telugu golf recreation channel (not a club). Telugu: దేశీ గోల్ఫర్స్
- Links: https://www.instagram.com/desigolfersclub/ · https://www.youtube.com/@desigolfersclub · desigolfersclub@gmail.com
- Credit (keep on every page): Logo & brand identity by 🇮🇳 Nikhil Yeli · Instagram @nikki.nikhil.1811
- Colourways: black, white, fairway (pine), bunker (sand), soil (#74472F)

## Notes
- All paths are relative, so the site works under `https://<user>.github.io/<repo>/`.
- Telugu spelling should be confirmed by a native speaker before print.
