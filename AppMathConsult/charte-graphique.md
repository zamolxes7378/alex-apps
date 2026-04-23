# Charte Graphique — Math Consult

> Identité visuelle officielle de la plateforme pédagogique Math Consult.
> Document de référence pour toute création ou modification UI.

---

## 1. Palette de couleurs

### Couleurs principales

| Nom | HEX | HSL | Usage |
|---|---|---|---|
| **Rose Primaire** | `#E93F85` | `hsl(338, 80%, 58%)` | Boutons, titres de cards, liens actifs, icônes, accents |
| **Rose Primaire Foncé** | `#C2185B` | `hsl(340, 78%, 43%)` | Hover buttons, badges « Approfondissement » |
| **Rose Hover** | `#D1306F` | `hsl(339, 65%, 50%)` | État hover du bouton primaire |

### Couleurs de fond

| Nom | HEX | Usage |
|---|---|---|
| **Rose Clair** | `#FBD9E7` | Fond de badges, fond de level-cards, progress bars bg |
| **Rose Fond** | `#FDF3F6` | Fond de sections alternées, fond des filtres |
| **Blanc** | `#FFFFFF` | Surface principale, cards, navigation |

### Couleurs de texte

| Nom | HEX | Usage |
|---|---|---|
| **Ébène** | `#240814` | Titres H1-H3, texte de navigation |
| **Corps** | `#333333` | Texte de corps, descriptions, paragraphes |
| **Corps/60** | `#333333` à 60% opacité | Texte secondaire, footer, méta-informations |
| **Corps/40** | `#333333` à 40% opacité | Texte tertiaire, mentions légales |

### Couleurs utilitaires

| Nom | HEX | Usage |
|---|---|---|
| **Jaune** | `#FBD600` | Réservé pour alertes / accent secondaire |
| **Bordure** | `#F0C4D4` | Séparateurs, bordures de cards, input borders |

### Couleurs de badges (types de ressources)

| Badge | Fond | Texte |
|---|---|---|
| **Cours** | `#E3F2FD` | `#1565C0` |
| **Méthode** | `#F3E5F5` | `#7B1FA2` |
| **Synthèse** | `#FFF3E0` | `#E65100` |
| **Exercice** | `#E8F5E9` | `#2E7D32` |

### Couleurs de difficulté (exercices)

| Niveau | Fond | Texte |
|---|---|---|
| **Découverte** | `#E8F5E9` | `#2E7D32` |
| **Application** | `#FFF3E0` | `#E65100` |
| **Approfondissement** | `#FCE4EC` | `#C2185B` |

---

## 2. Typographie

### Familles de polices

| Rôle | Police | Poids | Source |
|---|---|---|---|
| **Titres + Navigation + Boutons** | Josefin Sans | 100–700 | Google Fonts |
| **Texte de corps + Descriptions** | Work Sans | 300, 400, 500, 600 | Google Fonts |
| **Icônes** | Material Symbols Outlined | 100–700 | Google Fonts |

### Échelle typographique

| Élément | Taille | Poids | Police |
|---|---|---|---|
| H1 (Hero) | `text-5xl` / `text-6xl` | Bold (700) | Josefin Sans |
| H2 (Sections) | `text-4xl` / `text-5xl` | Bold (700) | Josefin Sans |
| H3 (Cards) | `text-xl` – `text-3xl` | Bold (700) | Josefin Sans |
| Sous-titre section | `text-sm` | Bold (700) | Josefin Sans (uppercase) |
| Corps | `text-base` | Regular (400) | Work Sans |
| Corps large | `text-lg` | Regular (400) | Work Sans |
| Navigation | `text-sm` | Semibold (600) | Josefin Sans |
| Boutons | — | Semibold (600) | Josefin Sans |
| Labels / Badges | `text-xs` | Bold (700) | Josefin Sans (uppercase) |
| Footer texte | `text-sm` | Regular (400) | Work Sans |

> **Letter-spacing** : Conformément au site officiel mathconsult-niort.fr, tous les éléments utilisent `letter-spacing: normal`. Aucun `tracking-*` Tailwind ne doit être appliqué.

---

## 3. Composants UI

### Boutons

```
Bouton Primaire (.btn-primary)
├── Background : #E93F85
├── Texte : white
├── Padding : 14px 28px
├── Border : none
├── Border-radius : 8px (arrondi)
├── Font-weight : 600
├── Hover : background #D1306F, scale(1.03), box-shadow rose
└── Transition : all 0.2s ease

Bouton Secondaire (.btn-secondary)
├── Background : transparent
├── Texte : #E93F85
├── Border : 2px solid #E93F85
├── Border-radius : 8px (arrondi)
├── Padding : 14px 28px
├── Hover : background #FBD9E7
└── Transition : all 0.2s ease
```

### Cards

```
Card de base
├── Background : white
├── Padding : 40px 32px (pillar) / 36px (resource)
├── Border-radius : 14px (arrondi)
├── Border : 1px solid rgba(240,196,212,0.2)
├── Box-shadow : 0 2px 12px rgba(0,0,0,0.04) au repos
├── Hover : translateY(-4px), box-shadow 0 20px 60px rgba(233,63,133,0.08)
└── Transition : all 0.3s ease

Level Card
├── Position relative, overflow hidden
├── Border-radius : 14px
├── ::before pseudo-element : barre latérale rose 4px, scaleY(0) → scaleY(1)
└── Hover : box-shadow 0 20px 60px rgba(233,63,133,0.1)
```

### Champs de formulaire

```
Input (.input-field)
├── Padding : 14px 16px
├── Border : 2px solid #F0C4D4
├── Background : white
├── Focus : border-color #E93F85
├── Border-radius : 8px (arrondi)
├── Font : Josefin Sans 0.95rem
└── Placeholder : #999
```

### Navigation

```
Nav fixée (.fixed .bg-white/95)
├── Hauteur : 80px (h-20)
├── Backdrop blur : sm
├── Border bottom : 1px solid #F0C4D4 à 30%
├── Logo : 56px (h-14)
├── Liens : text-sm, font-semibold
├── Lien actif : couleur #E93F85, underline animée 2px
└── Max-width contenu : 1140px
```

---

## 4. Espacements & Grille

### Conteneur principal
- **Max-width** : `1140px`
- **Padding horizontal** : `24px` (px-6)
- **Centrage** : `mx-auto`

### Sections
- **Padding vertical standard** : `100px 0`
- **Padding vertical CTA** : `80px 0`
- **Padding vertical footer** : `60px 0 40px`
- **Gap entre cards** : `32px` (gap-8) ou `48px` (gap-12)
- **Margin bottom titre de section** : `64px` (mb-16)

### Grilles
| Page | Layout | Breakpoint |
|---|---|---|
| Piliers | 3 colonnes | `lg:grid-cols-3` |
| Niveaux index | 2 colonnes | `lg:grid-cols-2` |
| Programme collège | 2 colonnes | `md:grid-cols-2` |
| Programme lycée | 3 colonnes | `lg:grid-cols-3` |
| Ressources | 3 colonnes | `lg:grid-cols-3` |
| Footer | 4 colonnes | `lg:grid-cols-4` |

---

## 5. Iconographie

### Système
- **Bibliothèque** : Material Symbols Outlined (Google)
- **Style** : Outlined, weight 300, FILL 0, GRAD 0, opsz 24
- **Couleur par défaut** : `#E93F85` (rose primaire)

### Icônes utilisées

| Contexte | Icône | Code |
|---|---|---|
| Cours | `menu_book` | Accès rapide |
| Exercices | `edit_note` | Accès rapide |
| Méthodes | `description` | Ressources |
| Synthèses | `summarize` | Ressources |
| Collège | `school` | Badge section |
| Lycée | `history_edu` | Badge section |
| Progression | `trending_up` | Espace élève |
| Raisonnement | `psychology` | Pilier |
| Entraînement | `fitness_center` | Pilier |
| Régularité | `event_repeat` | Pilier |
| Connaissance | `auto_stories` | Pilier |
| Comparaison | `compare` | Pilier |
| Plaisir | `emoji_objects` | Pilier |

---

## 6. Motifs décoratifs

### Triangles

Les triangles sont le **motif signature** de Math Consult, rappelant le logo et l'univers géométrique.

```css
/* Triangle gradient décoratif */
.triangle-bg {
    position: absolute;
    width: 500px;
    height: 440px;
    background: linear-gradient(135deg, #E93F85 0%, #FBD9E7 100%);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    opacity: 0.08;
}
```

- Utilisés en **arrière-plan** des sections (hero, séparateurs)
- Toujours en **opacité faible** (5–15%)
- Orientations variées via `transform: rotate()`
- Tailles entre 120px et 500px

### Séparateur de section

```css
.section-divider::before {
    content: '';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #E93F85 0%, #FBD9E7 100%);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    opacity: 0.15;
}
```

---

## 7. Interactions (Hover uniquement)

> **Pas d'animations au scroll.** Le design est statique — tous les éléments sont visibles immédiatement sans transition d'apparition.

### Hover

- Cards : `translateY(-4px)` + box-shadow
- Boutons : changement de couleur (0.2s ease)
- Navigation : underline animée (width 0 → 100%, 0.3s)
- Level cards : barre latérale `scaleY(0 → 1)` depuis le bas

---

## 8. Règles d'usage

1. **Design arrondi** — Border-radius de 14px sur les cards, 8px sur les boutons/inputs, 4px sur les badges, 9999px sur les chips/pills
2. **Ombres subtiles au repos** — Les cards ont une ombre légère (0 2px 12px rgba(0,0,0,0.04)) au repos, plus prononcée au hover
3. **Josefin Sans pour la structure** — Titres, nav, labels, boutons
4. **Work Sans pour le contenu** — Paragraphes, descriptions, texte de corps
5. **Letter-spacing normal** — Aucune valeur `tracking-*` ou `letter-spacing` personnalisée, conformément au site officiel
6. **Rose primaire unique** — Jamais plus d'une couleur d'accent forte par section
7. **Triangles discrets** — Opacité max 15%, jamais au premier plan
8. **Blanc dominant** — L'espace blanc est une composante majeure du design
9. **Pas d'animations au scroll** — Le contenu est affiché immédiatement, seules les interactions hover sont animées
10. **Bordures légères** — Bordure 1px solid rgba(240,196,212,0.2) sur les cards pour une séparation subtile
