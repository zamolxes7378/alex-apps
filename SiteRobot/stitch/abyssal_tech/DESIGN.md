```markdown
# Design System Specification: Bioluminescent Robotics & Oceanic Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Abyssal Navigator"**
This design system moves away from the flat, sterile "SaaS blue" aesthetic toward a deep, immersive experience that mimics high-tech robotics submerged in the midnight zone of the ocean. It is characterized by high-contrast bioluminescence, fluid glassmorphism, and an intentional rejection of traditional containment.

To break the "template" look, we utilize **Intentional Asymmetry**. Hero elements should overlap their containers, and typography should utilize aggressive scale shifts (e.g., placing `display-lg` headings alongside `label-sm` technical metadata). The interface should feel like a Heads-Up Display (HUD) inside a deep-sea submersible: intelligent, high-precision, and awe-inspiring.

---

## 2. Colors & Surface Philosophy
The palette is built on a foundation of "Abyssal Depth" (Deep Ocean Blue) punctuated by "Bioluminescent High-Tech" (Electric Cyan and Neon Turquoise).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established through background color shifts or tonal transitions. Use `surface-container-low` for large section backgrounds against a `surface` base. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of high-density polycarbonate.
- **Base Layer:** `surface` (#00132d) – The deepest background.
- **Primary Containers:** `surface-container` (#05203f) – Used for main content areas.
- **Elevated Components:** `surface-container-highest` (#1e3555) – For active cards or floating panels.
- **The "Glass & Gradient" Rule:** All floating cards must use Glassmorphism. Apply a backdrop-blur (12px–20px) and a semi-transparent fill using `surface-bright` at 40% opacity.

### Signature Textures
Main CTAs and Hero elements should utilize a **Bioluminescent Gradient**: 
*   `primary` (#ffffff) transitioning into `primary-container` (#00fbfb).
*   For critical alerts/accents, use `tertiary-fixed-dim` (#ffb59c) to mimic Coral Red.

---

## 3. Typography
We pair the utilitarian precision of **Manrope** with the futuristic, geometric structuralism of **Space Grotesk**.

*   **Display & Headlines (Space Grotesk):** These are your "Technical Readouts." Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to feel engineered.
*   **Body (Manrope):** The "Logbook." Use `body-md` (0.875rem) for general readability. Manrope’s modern sans-serif builds a bridge between the futuristic headers and human-centric legibility.
*   **Labels (Space Grotesk):** Use `label-md` and `label-sm` in ALL CAPS for technical data points, serial numbers, or robotics telemetry. This reinforces the "9th-grade sci-fi innovation" personality—ambitious and detailed.

---

## 4. Elevation & Depth
In the abyss, light defines space. We use **Tonal Layering** and **Glows** rather than structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft "recessed" effect. This creates depth without visual noise.
*   **Ambient Shadows (Glows):** Instead of black shadows, use "Bioluminescent Blooms." When an element is hovered, apply a shadow with a large blur (24px+) using `secondary` (#43e2d2) at 10% opacity.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use `outline-variant` (#3a4a49) at **15% opacity**. Never use a 100% opaque border; it breaks the fluid oceanic immersion.
*   **Glassmorphism:** All "Tech Cards" must feature a 1px inner stroke using `primary` at 10% opacity to simulate the edge of a glass panel catching a light source.

---

## 5. Components

### Buttons (Neon Navigation)
*   **Primary:** Solid `secondary` (#43e2d2) background with `on-secondary` (#003732) text. Add a 4px outer glow of the same color.
*   **Secondary (Ghost):** A "Ghost Border" of `secondary` with 20% opacity. On hover, the opacity fills to 40%.
*   **Rounding:** Use `full` (9999px) for buttons to mimic sleek, hydrodynamic robotics components.

### Cards & Lists (Integrated Modules)
*   **No Dividers:** Forbid the use of divider lines. Separate list items using the spacing scale (e.g., `spacing-4` / 1.4rem) or a subtle shift to `surface-container-high` on hover.
*   **Structure:** Cards should use `rounded-xl` (1.5rem) to feel tech-inspired but approachable.

### Inputs (Telemetry Fields)
*   **Field:** `surface-container-highest` with a bottom-only "Ghost Border."
*   **Focus State:** Transition the bottom border to `primary-container` (#00fbfb) with a subtle 2px glow.

### Specialized Component: The "Biolume" Chip
*   Small status indicators (`label-sm`) that feature a 4px circular "on/off" indicator using `secondary` for "Active" and `tertiary-fixed-dim` for "Warning."

---

## 6. Do’s and Don’ts

### Do:
*   **Use High-Contrast Scale:** Place a tiny `label-sm` piece of metadata directly above a massive `display-lg` title.
*   **Embrace Negative Space:** Use `spacing-12` (4rem) and `spacing-16` (5.5rem) to allow the "immersive dark" background to breathe.
*   **Layer Surfaces:** Always place lighter containers on darker backgrounds to signify "ascent" or importance.

### Don’t:
*   **Don't use pure black (#000000):** It kills the "oceanic" depth. Always use the `surface` blue tokens.
*   **Don't use standard drop shadows:** They feel like paper. We want the interface to feel like light and glass underwater.
*   **Don't use 90-degree corners:** These represent old-world tech. Our system uses the `Roundedness Scale` (`md` to `xl`) to represent fluid, hydrodynamic engineering.
*   **Don't use divider lines:** If you need to separate content, use a background color shift or a `spacing-8` gap. Lines are "clutter" in a high-tech HUD.

### Accessibility Note:
While we lean into glassmorphism and glows, ensure all text content maintains a contrast ratio of at least 4.5:1 against its immediate background. Use the `primary` (white) and `on-surface` tokens for all critical information.```