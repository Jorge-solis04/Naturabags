---
name: design
description: Coordinate broad NaturaBags design work across visual direction, brand assets, design tokens, and Nuxt UI implementation. Use when a request spans multiple design domains or the correct specialized workflow is unclear; use a narrower skill directly for a single UI decision or implementation task.
---

# Design

## NaturaBags source-of-truth override

For this repository, apply this priority before the generic routing below:

1. The user's current request.
2. `app/assets/css/tokens.css`, `nuxt.config.ts`, and affected Vue/CSS files for live behavior.
3. `DESIGN.md` for the intended Organic Vitality system.
4. `$ui-ux-pro-max` search results as optional evidence, never brand authority.

If the implementation and `DESIGN.md` disagree, disclose meaningful drift instead of silently restyling unrelated surfaces.

Route settled implementation work to `$nuxt-ui-styling`. Use `$imagegen` for requested raster assets when available. Preserve the current NaturaBags logo unless the user explicitly requests a redesign, and prefer the installed `lucide` or `mdi` Nuxt Icon collections for interface icons.

Do not execute `scripts/logo/generate.py`, `scripts/cip/generate.py`, or `scripts/icon/generate.py`; they depend on unconfigured third-party Gemini credentials. The inherited resources remain reference material only.

## Overview

Use this skill as the top-level design router. Start here only when the request spans multiple design domains or the right specialized skill is not obvious:

- brand voice or visual identity
- design tokens or component specs
- UI implementation
- logo, icon, banner, social photo, CIP, or slide generation

## Typical Triggers

Use this skill when requests sound like:

- "This request spans brand, UI, and creative deliverables; help me plan it"
- "I am not sure whether to start with brand, design system, or implementation"
- "Help me unify the logo, banner, slides, and interface direction"
- "Give me a full design execution path, not just a single page"
- "Break this design request into the right specialized skills"

Route implementation work to these skills first:

- `$brand` for identity, voice, assets, and palette rules
- `$design-system` for tokens, component specs, and slide decision systems
- `$nuxt-ui-styling` for Nuxt 4, Vue 3, and vanilla CSS implementation
- `$ui-ux-pro-max` for style, palette, typography, UX, and layout decisions

## Router Rules

- prefer `$brand` for identity, voice, palette governance, and brand-source-of-truth work
- prefer `$ui-ux-pro-max` for choosing interface direction before implementation
- prefer `$design-system` for token architecture, specs, and systematic slide search
- prefer `$nuxt-ui-styling` for concrete frontend implementation
- prefer `$slides` for deck-specific narrative and slide authoring
- prefer `$banner-design` for banner-specific sizing, safe zones, and composition
- stay in `$design` only when multiple of the above must be coordinated together

## Quick Start

Choose a specialized workflow rather than executing inherited generators:

```text
$ui-ux-pro-max Review the mobile hierarchy and recommend a coherent direction without changing files.
$nuxt-ui-styling Implement the approved hero direction and verify the build.
$imagegen Create the approved raster product illustration for the hero.
```

## Routing

### Brand Work

Use `$brand` when the task is about voice, palette, typography, asset governance, or brand-token sync.

### Tokens and System Design

Use `$design-system` when the task is about token architecture, component states, or slide strategy/layout/copy/chart decisions.

### UI Implementation

Use `$nuxt-ui-styling` when the task needs Vue components, token-based CSS, responsive layout, or accessibility-aware implementation.

### Interface Direction

Use `$ui-ux-pro-max` when the task still needs the visual direction chosen before implementation.

### Asset Deliverables

Use `$imagegen` for raster imagery. Use Nuxt Icon for interface icons. Treat logo replacement, CIP work, slides, and banners as separate deliverables that require an explicit request and the matching available skill or tool.

Read the matching reference file before editing or extending a workflow.

## References

- `references/design-routing.md` for the routing map
- `references/logo-design.md` for logo workflow and styles
- `references/cip-design.md` for corporate identity programs
- `references/slides-create.md` for slide workflow
- `references/banner-sizes-and-styles.md` for banner sizes and styles
- `references/social-photos-design.md` for social image workflow
- `references/icon-design.md` for SVG icon generation

## Resources

### `scripts/`

- `logo/search.py`
- `logo/generate.py`
- `logo/core.py`
- `cip/search.py`
- `cip/generate.py`
- `cip/render-html.py`
- `cip/core.py`
- `icon/generate.py`

### `data/`

The CSV files under `data/` are the knowledge base for logo, CIP, and icon workflows.
