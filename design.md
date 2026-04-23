# Design System Documentation: Titz.cooking

This document outlines the core design tokens, colors, typography, and UI elements used in the Titz.cooking web application. It serves as a reference for maintaining consistency across the site.

## 1. Color Palette

The color palette is inspired by spices and fundamental ingredients, reflecting a deep connection to culinary arts.

### Papers (Neutrals & Backgrounds)
These serve as the foundation of the design, providing warm, organic backgrounds.
- **Salz (`--salz`)**: `#f4efe7` - Base paper, warm white. Used as the primary background (`--paper`).
- **Kümmel (`--kuemmel`)**: `#ebe4d8` - Baked crust. Used for secondary backgrounds (`--paper-2`).
- **Muskat (`--muskat`)**: `#e2d9c8` - Grated nutmeg. Used for tertiary backgrounds (`--paper-3`).
- **Asche (`--asche`)**: `#8c8578` - Fine wood ash. Used for the lightest ink text/elements (`--ink-4`).

### Inks (Deep & Dark)
Used for typography, borders, and high-contrast elements.
- **Pfeffer (`--pfeffer`)**: `#1a1a18` - Freshly ground black pepper. Primary text and element color (`--ink`).
- **Piment (`--piment`)**: `#2d2a25` - Warm black. Secondary text color (`--ink-2`).
- **Kardamom (`--kardamom`)**: `#5a544a` - Medium gray-olive. Tertiary text color, used for metadata and small labels (`--ink-3`).

### Spices (Accents)
Used to draw attention, highlight interactive elements, and create visual depth.
- **Paprika (`--paprika`)**: `oklch(0.62 0.14 45)` - Roasted paprika. Primary accent color (`--ember`).
- **Safran (`--safran`)**: `oklch(0.48 0.13 40)` - Dark saffron. Used for hover states and depth (`--ember-deep`).
- **Chili Soft (`--chili-soft`)**: `oklch(0.92 0.04 55)` - Mild chili. A subtle, warm hint color (`--ember-soft`).
- **Thymian (`--thymian`)**: `oklch(0.38 0.04 140)` - Fresh thyme. A complementary green accent (`--moss`).

### UI Elements
- **Rule (`--rule`)**: `rgba(26,26,24,0.14)` - Standard divider line.
- **Rule Soft (`--rule-soft`)**: `rgba(26,26,24,0.08)` - Soft divider line.

## 2. Typography

All typefaces are open source (OFL) and loaded via Google Fonts.

- **Display & Serif (`--serif`)**: `Fraunces`, `Georgia`, `serif`. Used for all major headings and display text (`.tz-display`). Features optical sizing and variation settings (`SOFT 30, WONK 0` for normal, `SOFT 50, WONK 1` for italic).
- **Body & UI (`--sans`)**: `Inter Tight`, `-apple-system`, `sans-serif`. Used for standard body text, buttons, and UI components.
- **Monospace (`--mono`)**: `JetBrains Mono`, `ui-monospace`, `monospace`. Used for eyebrows, metadata, labels, and small technical text (`.tz-eyebrow`).

## 3. UI Components

### Buttons (`.tz-btn`)
Rounded, pill-shaped buttons with smooth hover transitions.
- **Primary**: Dark background (`--ink`), light text (`--paper`).
- **Ghost**: Transparent background, dark border and text (`--ink`).
- **Ember**: Accent background (`--ember`), light text (`--paper`).

### Links (`.tz-link`)
Inline links with an underline (`border-bottom`) and a subtle arrow icon. Hovering changes color to `--ember-deep`.

### Eyebrows (`.tz-eyebrow`)
Small, uppercase tracking text used to introduce sections. Uses the monospace font with `0.18em` letter spacing.

### Dividers (`.tz-rule`)
A simple 1px line using the `--rule` color to separate content blocks.

## 4. Visual Effects

- **Paper Grain (`.tz-grain`)**: A subtle SVG noise overlay applied with `mix-blend-mode: multiply` to give the background a tactile, organic feel.
- **Animation Ease (`--ease`)**: `cubic-bezier(.2,.7,.2,1)` - Used for smooth, natural transitions across interactive elements.
