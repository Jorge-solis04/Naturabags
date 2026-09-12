# Design Routing Guide

Use this guide to decide which design skill or local workflow to use.

## Skill Map

| Skill | Purpose |
|-------|---------|
| `brand` | Brand identity, voice, assets, palette rules |
| `design-system` | Tokens, component specs, slide decision system |
| `nuxt-ui-styling` | Nuxt, Vue, CSS con tokens y responsive implementation |
| `ui-ux-pro-max` | Style, palette, typography, layout direction |
| `design` | Orchestrate the full design workflow |

## Built-In Workflows

| Workflow | Entry Point |
|----------|-------------|
| Logo | Preserve the current source asset unless redesign is explicitly requested |
| CIP | Define a separate brand deliverable and use available native tools |
| Slides | `references/slides-create.md`, `references/slides-layout-patterns.md`, `references/slides-copywriting-formulas.md`, `references/slides-strategies.md`, `references/slides-html-template.md` |
| Banner | `references/banner-sizes-and-styles.md` + HTML/CSS export workflow |
| Social photos | `references/social-photos-design.md` |
| Icon | Prefer the installed `lucide` and `mdi` collections through Nuxt Icon |

## Routing by Task Type

### Brand Identity Tasks

Use `brand` for:

- color and typography rules
- asset governance
- tone of voice
- brand consistency review

### Token and System Tasks

Use `design-system` for:

- primitive/semantic/component tokens
- CSS variable generation
- component specs and states
- slide strategy and layout databases

### Implementation Tasks

Use `nuxt-ui-styling` for:

- Vue component implementation
- existing vanilla CSS and design-token implementation
- dark mode and theme customization
- responsive component code

### Interface Direction

Use `ui-ux-pro-max` for:

- choosing style direction
- palette and typography selection
- UX and accessibility guidance

## Multi-Step Workflows

### New Project Setup

1. Use `brand` to define identity.
2. Use `design-system` to define tokens and specs.
3. Use `nuxt-ui-styling` to implement the UI.

### Brand Refresh

1. Use `brand` to audit the current identity.
2. Use `design-system` to formalize tokens.
3. Use `nuxt-ui-styling` to update the code.

### Visual Deliverables

1. Confirm the exact asset deliverable and whether it changes the brand.
2. Use `brand` when the output needs brand alignment.
3. Use `ui-ux-pro-max` when the layout or visual direction still needs selection.

## Example invocations

```text
$ui-ux-pro-max Compare two directions for a new NaturaBags section.
$nuxt-ui-styling Implement the approved option in Nuxt and verify it.
$imagegen Create the requested raster visual after its direction is approved.
```

## Rule Of Thumb

If the request changes how something looks, feels, moves, or is communicated visually, route it through this stack before implementation.
