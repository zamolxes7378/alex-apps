# Kotech Engineering — site

Single-page editorial site for Kotech (`kotech.ai`).
Built around the positioning *« L'IA, augmentée par l'humain »*.

Pure static site — **no build step, no dependencies**. Just HTML, CSS and a
little vanilla JavaScript.

## Preview locally

**Option A — open the file directly**
Double-click `index.html` (or drag it into a browser). Fonts load from Google
Fonts, so you need an internet connection.

**Option B — local server (recommended)**
```bash
# from inside the SiteKotech/ folder
python3 -m http.server 8000
# then open http://localhost:8000
```

**Option C — Live Server**
In VS Code / Cursor, install the "Live Server" extension, then right-click
`index.html` → *Open with Live Server*.

## Structure

```
SiteKotech/
├── index.html        # all the markup (single page, 6 sections)
├── css/
│   └── styles.css    # design system + components + responsive + motion
├── js/
│   └── main.js       # nav, mobile menu, scroll reveals, counters
└── README.md
```

## Design system

| Role | Choice |
|------|--------|
| Background / ink | warm paper `#f1eee7` · ink `#1a1710` |
| Accent | sienna `#c9462a` (used sparingly) |
| Display serif | Fraunces |
| Body grotesque | Inter |
| Mono (labels, numbering) | JetBrains Mono |

Everything is responsive, keyboard-accessible, and respects
`prefers-reduced-motion`.
