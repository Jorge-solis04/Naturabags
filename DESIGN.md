---
name: Organic Vitality
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#424936'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727a63'
  outline-variant: '#c1cab0'
  surface-tint: '#426900'
  primary: '#426900'
  on-primary: '#ffffff'
  primary-container: '#8cd416'
  on-primary-container: '#365700'
  inverse-primary: '#92db20'
  secondary: '#1e6d00'
  on-secondary: '#ffffff'
  secondary-container: '#99fa75'
  on-secondary-container: '#217400'
  tertiary: '#57633f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b8c59a'
  on-tertiary-container: '#475230'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#adf841'
  primary-fixed-dim: '#92db20'
  on-primary-fixed: '#112000'
  on-primary-fixed-variant: '#314f00'
  secondary-fixed: '#99fa75'
  secondary-fixed-dim: '#7edc5c'
  on-secondary-fixed: '#042100'
  on-secondary-fixed-variant: '#155200'
  tertiary-fixed: '#dbe8ba'
  tertiary-fixed-dim: '#bfcca0'
  on-tertiary-fixed: '#151f03'
  on-tertiary-fixed-variant: '#404b29'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
  surface-soft: '#F1F4E8'
  surface-muted: '#F2F2F2'
  text-on-accent: '#33381F'
  text-secondary: '#6B6B6B'
  border-subtle: '#E5E5E5'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  margin-desktop: 80px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is centered on the intersection of nature and convenience. It evokes a sense of freshness, vitality, and effortless health. The target audience includes health-conscious professionals and busy families looking for high-quality, pre-cut produce without sacrificing the "fresh from the garden" feeling.

The visual style is **Modern Minimalism with a Tactile edge**. It prioritizes vast whitespace to represent cleanliness and clarity, while using soft, organic shapes and high-quality photography of vibrant produce to ground the brand in the physical world. The atmosphere is calm, trustworthy, and energizing, avoiding the clinical coldness of traditional health apps in favor of a warm, approachable kitchen aesthetic.

## Colors

The palette is rooted in a "Leafy Green" spectrum. The primary brand green is energetic and bright, used for high-impact calls to action and brand recognition. The secondary deeper green provides stability and professional weight, often used for secondary buttons or complex data visualizations.

Cleanliness is maintained through a pure white background, while the deep charcoal (Neutral) ensures maximum legibility for body text and headlines, offering a more organic feel than pure black. "Surface" colors are used for subtle section breaks and card backgrounds to prevent visual fatigue. No gradients are permitted; the brand relies on solid blocks of color and high-contrast overlaps to create depth.

## Typography

Typography balances character and utility. **Quicksand** is used for all headlines and display text; its rounded terminals mirror the organic nature of fruits and vegetables, adding a friendly, approachable tone. 

For body copy and functional labels, **Work Sans** provides a neutral, highly legible counterpoint. Its clean, professional construction ensures that nutritional information and instructions are easily digestible. Letter spacing is slightly tightened on large headings for a more modern, editorial look, while uppercase labels are given extra tracking to improve scanability in navigation and metadata.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** on desktop and a **4-column fluid grid** on mobile. The spacing rhythm is strictly based on an 8px baseline, ensuring all components align to a predictable vertical and horizontal flow.

High whitespace is a core requirement to emphasize the "fresh and clean" brand pillar. Content containers should never feel crowded; a minimum of 48px padding is recommended for section transitions on desktop. On mobile, margins are reduced to 20px, but vertical rhythm is maintained to prevent a cramped interface. Reflow logic prioritizes a single-column stack for product listings and recipe cards on mobile to keep imagery large and enticing.

## Elevation & Depth

To maintain the "Modern & Clean" aesthetic, depth is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than heavy drop shadows. 

- **Primary Surface:** White (#FFFFFF) for the main background.
- **Secondary Surface:** Soft Green (#F1F4E8) for cards or highlighted sections.
- **Borders:** A 1px solid border (#E5E5E5) is used to define cards and input fields, keeping the UI light and flat.
- **Interactive Depth:** Only interactive elements (like primary buttons) may use a very subtle, diffused shadow on hover to suggest "pressability," using the "Negro puro de sombra" at a very low opacity (5-8%).

## Shapes

The shape language is consistently rounded to reinforce the brand's friendly and natural persona. All primary UI containers, buttons, and input fields utilize a 0.5rem (8px) base radius. 

Larger components, such as product cards and promotional banners, use the `rounded-lg` (16px) or `rounded-xl` (24px) settings to create a softer, more inviting appearance. This "Rounded" logic avoids the clinical sharpness of 90-degree angles while remaining more professional and structured than a full "Pill-shaped" system.

## Components

### Buttons
- **Primary:** Solid Leafy Green (#8CD416) with Charcoal (#1F1F1F) text. 8px border radius. No border.
- **Secondary:** Solid Deep Green (#4DA82E) with White text for less prominent actions.
- **Tertiary/Ghost:** Transparent background with Charcoal text and a subtle 1px border (#E5E5E5).

### Cards
- White background with a 1px #E5E5E5 border or a subtle #F1F4E8 background. 16px corner radius. Padding should be generous (24px or 32px).

### Input Fields
- White background, 1px #E5E5E5 border, 8px corner radius. Focus state uses a 2px Primary Green border. Placeholder text in #6B6B6B.

### Chips & Badges
- Used for "Organic," "Low Carb," or "Seasonal" labels. Use the Accent Green (#E3F0C2) with dark green text (#33381F). High roundedness (pill-style) for these specific small tags.

### Lists
- Clean, unstyled lists with 16px spacing between items. Use a custom Primary Green checkmark for benefit lists or ingredient tallies to reinforce brand identity.