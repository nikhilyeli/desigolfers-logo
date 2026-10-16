# Desi Golfers · Brand mark

Logo & brand identity by 🇮🇳 **Nikhil Yeli** · Instagram [@nikki.nikhil.1811](https://instagram.com/nikki.nikhil.1811)

Static site for GitHub Pages. No build step.

## Publish
1. Push the contents of this folder to a repo (root or `/docs`).
2. Settings → Pages → Deploy from branch → pick the branch and folder.

## Structure
- `index.html` overview and downloads
- `three-tees.html` full logo kit (final)
- `css/site.css` tokens + page styles, `css/fonts.css` self-hosted fonts
- `fonts/` Young Serif, Hanken Grotesk, Anek Telugu, Noto Serif Telugu (woff2, SIL Open Font License)
- `js/logo-kit.js` symbols, lockup layout, patterns, export · `js/brand-page.js` page renderer
- `assets/desi-golfers-three-tees-logos.zip` every logo file in one download
- `assets/logos/three-tees/{symbol,lockup,stacked,social,pattern}/` pre-rendered SVG + PNG

## Notes
- SVGs containing type load the fonts from Google Fonts. Outline the text in a vector editor before sending to print.
- Telugu spelling (దేశీ గోల్ఫర్స్) should be checked by a native speaker before production.


## Publish with Claude Code
Open this folder in Claude Code and ask: "Create a GitHub repo, push this folder, and enable GitHub Pages from the main branch root." Or by hand:

```
git init && git add . && git commit -m "DesiGolfers brand site"
gh repo create desigolfers-logo --public --source=. --push
gh api repos/{owner}/desigolfers-logo/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```
Site goes live at https://<user>.github.io/desigolfers-logo/
