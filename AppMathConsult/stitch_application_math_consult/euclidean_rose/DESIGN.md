# Design System Document

## 1. Overview & Creative North Star: "The Academic Atelier"
This design system is built to transform an open-source mathematics platform into a high-end editorial experience. Moving away from the utilitarian "dashboard" aesthetic common in EdTech, we embrace **The Academic Atelier**—a philosophy that treats mathematical concepts as works of art. 

The visual identity is defined by **Intentional Asymmetry** and **Breathable Sophistication**. By utilizing expansive white space, overlapping geometric forms (inspired by the trigonometry in the reference image), and a hierarchy that favors large-scale editorial type, we create a space that feels curated, authoritative, and welcoming. We break the grid intentionally to guide the eye through "narrative" learning paths rather than forcing users through a rigid table of contents.

---

## 2. Colors
The palette is a sophisticated interplay of high-energy pinks and soft, cerebral neutrals. It is designed to feel "human" and accessible while maintaining professional academic rigor.

### Palette Strategy
*   **Primary (`#b0004a`)**: Used for the most critical actions and brand moments. 
*   **Surface Tiers**: We rely on a nuanced white/pink spectrum to define space.
    *   `surface` (`#fef8fa`) is the canvas.
    *   `surface_container_low` (`#f8f2f4`) defines secondary reading zones.
    *   `surface_container_lowest` (`#ffffff`) is reserved for high-contrast interactive elements like cards.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts. For example, a content block should be distinguished by sitting a `surface_container_low` section on a `surface` background. This creates a seamless, "molded" look that feels premium and custom.

### The Glass & Gradient Rule
To move beyond a flat UI, use **Glassmorphism** for the top navigation and floating action elements. Utilize the `surface_container_lowest` token at 70% opacity with a 20px backdrop blur. 
*   **Signature Textures:** For hero backgrounds or primary CTAs, use a subtle linear gradient: `primary` (#b0004a) to `primary_container` (#d81b60) at a 135-degree angle. This provides a "lit from within" quality that feels alive.

---

## 3. Typography
We use **Josefin Sans** as our sole typeface. Its geometric construction mirrors the precision of mathematics, while its elegant, slightly vintage proportions provide an editorial warmth.

*   **Display & Headline Scale:** Use `display-lg` (3.5rem) for hero statements. These should be set with tight letter-spacing (-0.02em) to create a bold, "title page" feel.
*   **The Narrative Flow:** Headlines (`headline-lg`) should often be placed with generous top margins to signify the start of a new concept, acting as a mental "reset" for the student.
*   **Body & Labels:** `body-lg` (1rem) is the workhorse. Ensure a line height of 1.6 for maximum readability during long-form mathematical proofs.

---

## 4. Elevation & Depth
In this system, depth is a result of **Tonal Layering** rather than structural lines or heavy shadows.

*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. 
    *   Level 0: `surface` (The Desk)
    *   Level 1: `surface_container_low` (The Folder)
    *   Level 2: `surface_container_lowest` (The Paper)
*   **Ambient Shadows:** When an element must "float" (e.g., a modal or a floating action button), use an ultra-diffused shadow. 
    *   *Shadow Specs:* Blur: 40px, Spread: -10px, Color: `#b0004a` at 6% opacity. This creates a "glow" rather than a "shadow," keeping the vibe light and academic.
*   **The "Ghost Border" Fallback:** For input fields or essential containment, use the `outline_variant` token at 15% opacity. It should be felt, not seen.
*   **Depth through Blur:** Use backdrop blurs on the top navigation bar to allow the vibrant pink mathematical diagrams to bleed through softly as the user scrolls, maintaining a sense of place.

---

## 5. Components

### Navigation (Top Menu)
A traditional top-aligned layout. Use `label-md` for links, all caps with 0.1em letter spacing. The active state is indicated by a 2px horizontal line using the `primary` token, placed 8px below the text.

### Buttons
*   **Primary:** Rounded-full (`9999px`). Background: Primary-to-Container gradient. Text: `on_primary`. 
*   **Secondary:** Rounded-xl (`0.75rem`). Background: `secondary_container`. Text: `on_secondary_container`. No border.
*   **Tertiary:** Text-only. Use `title-sm` weight.

### Cards & Lists
*   **Cards:** Forbid divider lines. Separate card content using vertical white space (use the `32px` spacing increment). Cards should use `surface_container_lowest` and an `xl` corner radius.
*   **Interactive Lists:** Use a subtle background shift to `surface_container_high` on hover rather than a border or shadow change.

### Input Fields
To maintain the "clean" educational look, use "Flushed" inputs. A background of `surface_container_low` with a slightly darker `outline_variant` (20% opacity) bottom border. This mimics the look of a lined notebook.

### Mathematical Callouts
Specialized containers for formulas or theorems. Use `secondary_fixed` as a background with an `xl` corner radius and `title-md` for the header to make these "moments of insight" stand out from standard body text.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use oversized margins. High-end design requires "wasted" space to let the content breathe.
*   **DO** use the `primary` pink for accents like bullet points, icons, and text highlights within mathematical proofs.
*   **DO** ensure all mathematical LaTeX blocks are rendered in a color that matches `on_surface` for total visual integration.

### Don't:
*   **DON'T** use 1px solid borders. It shatters the high-end editorial feel and makes the site look like a legacy software tool.
*   **DON'T** use pure black (#000000). Always use `on_background` (#1d1b1d) to maintain the soft, sophisticated tone.
*   **DON'T** use sharp corners. Mathematics can be intimidating; our UI should be soft. Stick to `xl` (0.75rem) or `full` roundedness.
*   **DON'T** use a sidebar. All navigation must live in the top bar or within the page narrative to keep the focus on the "Linear Learning" experience.