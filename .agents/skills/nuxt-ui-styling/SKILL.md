---
name: nuxt-ui-styling
description: Implement or review approved NaturaBags interfaces in Nuxt 4 and Vue 3 using the existing vanilla CSS tokens, scoped component styles, Nuxt Image, Nuxt Icon, responsive patterns, and accessibility conventions. Use for concrete component, page, styling, responsive, animation, or UI accessibility work; do not introduce Tailwind or a component library unless the user explicitly requests that architectural change.
---

# NaturaBags Nuxt UI Styling

Implement the requested visual outcome in the project's existing stack. Preserve unrelated work and avoid broad restyling unless it is part of the request.

## Project invariants

- Use Nuxt 4 and Vue 3 single-file components under `app/`.
- Keep shared design values in `app/assets/css/tokens.css` and shared primitives in `app/assets/css/base.css`.
- Keep component-specific rules in `app/assets/css/components/<component>.css`, loaded with a scoped `style` block when that is the established neighboring pattern.
- Prefer existing CSS custom properties over one-off colors, spacing, radii, or typography values.
- Use Nuxt component auto-imports, `<NuxtLink>`, Nuxt Image where appropriate, and `<Icon>` with the installed `lucide` or `mdi` collections.
- Do not add Tailwind, shadcn/ui, shadcn-vue, Reka UI, or another design dependency without an explicit architecture request.

## Workflow

1. Inspect the affected component, its stylesheet, neighboring patterns, live tokens, and the relevant part of `DESIGN.md`.
2. If the design direction is materially unclear, use `$ui-ux-pro-max`; otherwise infer the narrowest consistent implementation from the current interface.
3. Make the smallest coherent component, CSS, token, content, or asset change.
4. Check keyboard operation, focus visibility, semantic structure, contrast, alternative text, target size, responsive reflow, and reduced-motion behavior where relevant.
5. Run `pnpm build`. For layout-sensitive work, also inspect the rendered page at representative mobile and desktop widths when preview tooling is available.

When a token change affects multiple surfaces, identify those consumers before editing. When `DESIGN.md`, configured fonts, and live CSS disagree, report the drift and preserve current behavior unless the task explicitly resolves it.

Read [references/project-conventions.md](references/project-conventions.md) while implementing or reviewing UI for file routing, responsive expectations, and the pre-delivery checklist.
