# Precendent Study

Public website for an ARCHA4144 Methods as Practices precedent study on D3.js / Data-Driven Documents.

## Local Preview

Start a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Structure

- `index.html` - the public website page
- `styles.css` - page layout and typography
- `scripts/main.js` - renders the datasheet, source list, filters, and D3 diagram
- `data/d3-datasheet.json` - structured dataset for the precedent study

## Deployment

This repo includes a GitHub Pages workflow in `.github/workflows/deploy.yml`.
After the repo is pushed to GitHub, enable Pages with GitHub Actions as the source if it is not already active.
