# Design System Specification: The Bespoke Sanctuary

## 1. Overview & Creative North Star
This design system is engineered to move beyond the transactional nature of wellness apps and into the realm of digital editorial. Our Creative North Star is **"The Curated Breath."** 

Like a well-designed physical sanctuary, the interface must feel intentional, rhythmic, and spacious. We reject the "template" look—rigid grids, heavy borders, and boxed-in content. Instead, we embrace **Architectural Asymmetry**: balancing a large, high-contrast headline against a vast expanse of `surface` (#fbf9f4), or allowing an organic image to break the vertical axis. This system is a living gallery where white space is not "empty," but is a structural element used to pace the user's journey.

## 2. Color & Atmospheric Surface Hierarchy
The palette is grounded in the earth and air. We avoid clinical whites and synthetic grays in favor of warm, mineral tones.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. The "boxed" look is the antithesis of a sanctuary. Boundaries must be defined solely through background color shifts or tonal transitions.
- **Sectioning:** Use a transition from `surface` to `surface-container-low` (#f5f3ee) to denote a change in context.
- **Nesting:** To create depth, treat the UI as stacked sheets of fine paper. A card (`surface-container-lowest` / #ffffff) should sit upon a `surface-container` (#f0eee9) background to create a soft, natural lift.

### Glass & Gradient Signature
To elevate the experience, floating navigation or top-level modals must use **Glassmorphism**. Apply a background blur (12px–20px) to `surface` tokens at 80% opacity. For primary CTAs, use a subtle linear gradient from `primary` (#814735) to `primary-container` (#9e5f4b) at a 135-degree angle to provide a tactile, "lit from within" quality.

## 3. Typography: The Editorial Voice
Our typography is a dialogue between the timeless (Serif) and the modern (Sans-Serif). 

- **The Serif (Noto Serif):** Used for `display` and `headline` roles. These should be treated as art. Use `display-lg` (3.5rem) for hero moments, ensuring letter-spacing is tight to emphasize the high-contrast strokes of the letterforms.
- **The Sans-Serif (Manrope):** Used for `title`, `body`, and `label` roles. To maintain the architectural feel, all Manrope text—especially `label-md` and `title-sm`—should be **wide-tracked** (letter-spacing: 0.05em to 0.1em). This creates a sense of "air" between the characters, mirroring the brand's focus on breath.

| Role | Token | Font | Size | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| Hero | display-lg | Noto Serif | 3.5rem | -0.02em |
| Header | headline-md | Noto Serif | 1.75rem | 0 |
| Action | title-md | Manrope | 1.125rem | 0.05em |
| Reading | body-lg | Manrope | 1rem | 0.01em |
| Detail | label-sm | Manrope | 0.6875rem | 0.1em (Uppercase) |

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use light and shadow.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. The delta in hex value provides all the separation required.
- **Ambient Shadows:** When a physical "float" is required (e.g., a floating action button), use a shadow with a 24px-32px blur and 4% opacity. The shadow color must be a tint of `on-surface` (#1b1c19), never pure black.
- **The Ghost Border:** If accessibility requires a stroke (e.g., an input field), use `outline-variant` (#d8c2bc) at 20% opacity. This "Ghost Border" provides a hint of structure without interrupting the fluid visual flow.

## 5. Components

### Buttons & CTAs
- **Primary:** Gradient fill (`primary` to `primary-container`). Roundedness: `full`. No border. Text: `label-md` in `on-primary` (#ffffff), uppercase with 0.1em tracking.
- **Secondary:** Transparent background with a `Ghost Border`. 
- **Tertiary:** Text-only (`primary` color), using an underline that is 1px thick and offset by 4px, utilizing the `outline-variant` color.

### Cards & Collections
- **Rule:** Forbid divider lines. Use vertical spacing (token `8` or `10`) to separate items.
- **Shape:** Use the `xl` (1.5rem) roundedness for organic containers, but occasionally mix in a `none` (0px) corner on one side to create an asymmetrical, architectural silhouette.

### Input Fields
- **Style:** Minimalist. No background fill. Only a bottom border using `outline-variant` at 40% opacity. On focus, the border transitions to `primary` (#814735) and becomes 1.5px thick.

### Floating Sanctuary Navigation (Custom Component)
A bottom-anchored, glassmorphic bar using `surface` at 85% opacity with a `20px` backdrop-blur. Icons should be thin-stroke (1px) in `on-surface-variant`.

## 6. Do’s and Don'ts

### Do
- **Do** use asymmetrical margins. If the left margin is `10` (3.5rem), try a right margin of `16` (5.5rem) for editorial layouts.
- **Do** allow images to overlap container edges slightly to create a layered, "collage" feel.
- **Do** use `secondary_container` (#e0e5d2) for success states instead of bright green to maintain the "Soft Sage" palette.

### Don't
- **Don't** use 100% opaque black for text. Always use `Deep Charcoal` (#1A1A1A) to keep the contrast high but the "vibe" soft.
- **Don't** use standard shadows. If it looks like a default Material Design shadow, it is too heavy.
- **Don't** crowd the screen. If you are unsure if there is enough white space, add one more increment from the Spacing Scale (e.g., move from `12` to `16`).