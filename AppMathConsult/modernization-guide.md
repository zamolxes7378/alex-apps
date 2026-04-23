# AppMathConsult — Modernization Guide

> Design improvements to apply while strictly respecting the Math Consult graphic charter.
> Brand colors, fonts (Josefin Sans / Work Sans), and academic tone remain unchanged.
> Last updated: 13 April 2026

---

## Guiding Principle

The official website mathconsult-niort.fr is professional but visually conservative.
The **app** is a student-facing digital tool — it should feel **modern, alive, and premium**
while remaining instantly recognizable as Math Consult.

**What changes**: depth, motion, spacing, polish.
**What stays identical**: colors (`#E93F85`, `#240814`, `#FDF3F6`), fonts, tone, content.

---

## 1. Rounded Corners — From Square to Soft

### Current
All cards, buttons, chips, inputs have `border-radius: 0` (sharp squares).

### Target
Consistent `border-radius` system across all elements.

### Specifications

| Element | Current | New Value | Notes |
|---|---|---|---|
| Cards (exercise, resource, grade, fav, progress) | `0` | `12px` | Uniform across all pages |
| Buttons (`.btn-primary`, "Accéder", "Télécharger") | `0` | `8px` | Slightly less than cards |
| Filter chips (`.filter-chip`, `.filter-pill`) | `0` | `9999px` (pill shape) | Full pill = modern filter UX |
| Topic chips (`.topic-chip`) | `0` | `6px` | Subtle rounding, stays compact |
| Search inputs | `0` | `8px` | Matches buttons |
| Stat cards (espace-élève) | `0` | `12px` | Matches content cards |
| Avatar container | `0` | `50%` (circle) | Standard for profile avatars |
| Badge elements (difficulty, type) | `0` | `4px` | Very subtle, stays label-like |
| Navbar | `0` | `0` (keep as-is) | Full-width bar stays sharp |
| Footer | `0` | `0` (keep as-is) | Section dividers stay sharp |

### CSS Implementation
```css
/* Add to each page's <style> block or to a shared stylesheet */
.exercise-card, .resource-card, .grade-card, .fav-card,
.progress-card, .stat-card { border-radius: 12px; }

.btn-primary, input[type="text"] { border-radius: 8px; }

.filter-chip, .filter-pill { border-radius: 9999px; }

.topic-chip { border-radius: 6px; }

.difficulty-badge, .type-badge, .doc-format { border-radius: 4px; }
```

### Pages Affected
- `index.html` — Hero buttons, feature cards, stat counters
- `programme.html` — Grade cards, topic chips, CTA buttons
- `exercices.html` — Filter chips, search bar, exercise cards, difficulty badges
- `ressources.html` — Filter pills, search bar, resource cards, type badges
- `espace-eleve.html` — Stat cards, progress card, fav cards, activity rows, avatar
- `mentions-legales.html` — Minimal (buttons only if any)

---

## 2. Shadows & Depth — From Flat to Floating

### Current
Cards have no shadow by default. Only `box-shadow` appears on `:hover` for some.

### Target
Subtle always-on shadow + enhanced hover shadow. Creates visual hierarchy.

### Specifications

| Element | Default Shadow | Hover Shadow |
|---|---|---|
| Content cards (exercise, resource, grade, fav) | `0 2px 12px rgba(0,0,0,0.04)` | `0 20px 60px rgba(233,63,133,0.08)` |
| Stat cards | `0 1px 8px rgba(0,0,0,0.03)` | (no hover change) |
| Progress card | `0 2px 12px rgba(0,0,0,0.04)` | `0 12px 40px rgba(233,63,133,0.06)` |
| Search bar container | `0 2px 8px rgba(0,0,0,0.02)` | `0 4px 16px rgba(233,63,133,0.06)` |
| Navbar (already has blur) | Keep as-is | Keep as-is |
| Buttons | None | `0 4px 16px rgba(233,63,133,0.25)` |
| Activity rows | None | `0 8px 30px rgba(233,63,133,0.06)` (keep current) |

### CSS Implementation
```css
.exercise-card, .resource-card, .grade-card, .fav-card {
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.exercise-card:hover, .resource-card:hover, .grade-card:hover, .fav-card:hover {
    box-shadow: 0 20px 60px rgba(233,63,133,0.08);
}
.stat-card {
    box-shadow: 0 1px 8px rgba(0,0,0,0.03);
}
.btn-primary:hover {
    box-shadow: 0 4px 16px rgba(233,63,133,0.25);
}
```

---

## 3. Gradient Backgrounds — From Flat White to Warm

### Current
All headers/hero sections use `bg-white` (solid `#FFFFFF`).

### Target
Subtle diagonal gradients using existing brand colors only.

### Specifications

| Section | Current Background | New Background |
|---|---|---|
| Page headers (hero area) | `bg-white` | `linear-gradient(135deg, #FDF3F6 0%, #FFFFFF 60%)` |
| Footer | `bg-white` | `linear-gradient(180deg, #FFFFFF 0%, #FDF3F6 100%)` |
| Espace Élève progress card | `bg-white` | `linear-gradient(135deg, #FFFFFF 0%, #FDF3F6 100%)` |
| DNB promo card | `bg-mc-primary` (solid) | `linear-gradient(135deg, #E93F85 0%, #C2185B 100%)` |

### CSS Implementation
```css
/* Hero sections */
header.bg-white {
    background: linear-gradient(135deg, #FDF3F6 0%, #FFFFFF 60%);
}

/* Footer */
footer {
    background: linear-gradient(180deg, #FFFFFF 0%, #FDF3F6 100%);
}
```

---

## 4. Micro-Animations — From Static to Alive

### Current
Cards have `transition: all 0.3s` and `translateY(-2px)` on hover. Nothing on page load.

### Target
Smooth entrance animations + enhanced hover feedback.

### 4.1 Card Entrance Animation (Page Load)

```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.exercise-card, .resource-card, .grade-card, .fav-card {
    animation: fadeInUp 0.5s ease-out both;
}

/* Stagger cards for sequential reveal */
.exercise-card:nth-child(1), .resource-card:nth-child(1) { animation-delay: 0ms; }
.exercise-card:nth-child(2), .resource-card:nth-child(2) { animation-delay: 80ms; }
.exercise-card:nth-child(3), .resource-card:nth-child(3) { animation-delay: 160ms; }
.exercise-card:nth-child(4), .resource-card:nth-child(4) { animation-delay: 240ms; }
.exercise-card:nth-child(5), .resource-card:nth-child(5) { animation-delay: 320ms; }
.exercise-card:nth-child(6), .resource-card:nth-child(6) { animation-delay: 400ms; }
```

### 4.2 Button Hover Scale

```css
.btn-primary {
    transition: all 0.2s ease;
}
.btn-primary:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(233,63,133,0.25);
}
```

### 4.3 Filter Chip Active Animation

```css
.filter-chip, .filter-pill {
    transition: all 0.2s ease;
}
.filter-chip:hover, .filter-pill:hover {
    transform: translateY(-1px);
}
.filter-chip.active, .filter-pill.active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(233,63,133,0.2);
}
```

### 4.4 Progress Bar Fill Animation (Espace Élève)

```css
@keyframes fillBar {
    from { width: 0%; }
}
.progress-card .h-full.bg-mc-primary {
    animation: fillBar 1s ease-out both;
}
```

---

## 5. Spacing Refinements — Breathing Room

### Current
Sections use `padding: 60px 0`, cards use `padding: 36px`, gaps vary.

### Target
Slightly more generous spacing. 8px grid system.

| Element | Current | New | Diff |
|---|---|---|---|
| Section vertical padding | `60px 0` | `80px 0` | +20px more breathing room |
| Card inner padding | `36px` | `40px` | +4px, aligns to 8px grid |
| Grid gap | `gap-8` (32px) | `gap-8` (keep) | Already good |
| Footer top padding | `60px 0 40px` | `80px 0 48px` | More generous |
| Filter section bottom padding | `40px` | `48px` | Aligns to 8px grid |

---

## 6. Typography Polish — Tighter & Cleaner

### Current
Standard weights and spacing. Body at `400`, headings at default `letter-spacing`.

### Target
Tighter headings, lighter body text, more line height.

| Element | Property | Current | New |
|---|---|---|---|
| `h1` | `letter-spacing` | `normal` | `-0.02em` |
| `h2`, `h3` | `letter-spacing` | `normal` | `-0.01em` |
| Body `p` | `font-weight` | `400` | `300` |
| Body `p` | `line-height` | `1.6` | `1.8` |
| Card descriptions | `line-height` | `1.5` | `1.7` |

### CSS Implementation
```css
h1 { letter-spacing: -0.02em; }
h2, h3 { letter-spacing: -0.01em; }
p, .text-body { font-weight: 300; line-height: 1.8; }
```

---

## 7. Sticky Filters — Persistent Access

### Current
Filter chips scroll out of view on exercices.html and ressources.html.

### Target
Sticky bar that stays visible while scrolling through results.

```css
/* exercices.html & ressources.html */
section.bg-white.border-b {
    position: sticky;
    top: 80px; /* = navbar height */
    z-index: 40;
    backdrop-filter: blur(12px);
    background: rgba(255,255,255,0.95);
}
```

---

## 8. Smooth Scroll — Global

### Current
Page jumps instantly when clicking navigation links.

### Target
Smooth scrolling everywhere.

```css
html { scroll-behavior: smooth; }
```

---

## Implementation Priority

Recommended order for applying these changes:

| Priority | Category | Impact | Effort |
|---|---|---|---|
| 1️⃣ | Rounded corners | High — instant visual upgrade | Low (CSS only) |
| 2️⃣ | Shadows & depth | High — cards feel premium | Low (CSS only) |
| 3️⃣ | Smooth scroll | Medium — feels fluid | Trivial (1 line) |
| 4️⃣ | Button hover scale | Medium — interactive feel | Low (CSS only) |
| 5️⃣ | Card entrance animation | High — first impression wow | Low (CSS only) |
| 6️⃣ | Gradient backgrounds | Medium — warmth & depth | Low (CSS only) |
| 7️⃣ | Typography polish | Medium — refined readability | Low (CSS only) |
| 8️⃣ | Sticky filters | Medium — UX improvement | Low (CSS only) |
| 9️⃣ | Spacing refinements | Low — subtle polish | Medium (touch all pages) |
| 🔟 | Progress bar animation | Low — espace-eleve only | Low (CSS only) |

---

## Visual Reference — Before & After Mental Model

```
BEFORE (current):
┌──────────────────────────┐   ← sharp corners
│  Card Title              │   ← no shadow, flat on page
│  Description text...     │   ← body at weight 400
│  [ACCÉDER]               │   ← square button
└──────────────────────────┘

AFTER (modernized):
╭──────────────────────────╮   ← 12px radius
│  Card Title              │   ← subtle shadow, floats
│  Description text...     │   ← body at weight 300, more line-height
│  ( Accéder → )           │   ← rounded button, hover scale
╰──────────────────────────╯
     ↑ shadow underneath
```

> **All** changes are CSS-only. No content, no colors, no fonts change.
> The app stays 100% on-brand with mathconsult-niort.fr.
