# NaturaBags frontend conventions

Read this reference while implementing or reviewing user-interface changes.

## File routing

| Concern | Location |
| --- | --- |
| Runtime design tokens | `app/assets/css/tokens.css` |
| Reset, typography utilities, container, buttons | `app/assets/css/base.css` |
| Component markup and behavior | `app/components/*.vue` |
| Component-specific styling | `app/assets/css/components/*.css` |
| Page composition | `app/pages/*.vue` |
| Shared shell | `app/layouts/default.vue` |
| Fonts, images, icons, global CSS | `nuxt.config.ts` |
| Intended visual language | `DESIGN.md` |

## Styling

- Follow the existing mobile-first CSS approach.
- Existing primary breakpoints are 768px and 1024px; add another only when the content demonstrates a real need.
- Respect `--container-max`, mobile/desktop margins, and the 8px spacing scale.
- Use tonal surfaces and low-contrast borders. Keep shadows subtle and primarily interactive.
- Avoid introducing gradients as general decoration because `DESIGN.md` specifies solid color blocks. If an existing isolated gradient is outside the task, leave it untouched and report the drift only when relevant.
- Prefer logical properties such as `margin-inline` and `padding-block` when they improve layout behavior.

## Vue and Nuxt

- Keep component state in `<script setup>` and use composables for reusable behavior.
- Components under `app/components` are auto-imported.
- Use semantic HTML before adding ARIA. Keep ARIA state synchronized with Vue state.
- Use Nuxt Icon rather than emoji or hand-authored UI SVGs when an installed icon exists.
- Preserve SSR safety: browser globals such as `document` and `window` must only be touched in client-side event handlers or lifecycle code.
- Use optimized images and explicit dimensions where practical to reduce layout shift.

## Accessibility and motion

- Interactive controls must be keyboard reachable and have visible `:focus-visible` treatment.
- Icon-only controls require an accessible name; decorative icons should be hidden from assistive technology.
- Check normal text contrast against WCAG AA and do not rely on color alone to communicate state.
- Keep touch targets comfortable on mobile.
- Add a `prefers-reduced-motion: reduce` fallback for nonessential animation.
- Dialog-like mobile navigation must manage focus and Escape behavior if it behaves as a modal; do not add `role="dialog"` or `aria-modal="true"` without implementing the associated interaction model.

## Verification

1. Run `pnpm build` after code changes.
2. Verify at approximately 375px, 768px, 1024px, and a wide desktop viewport for layout-sensitive work.
3. Exercise hover, focus, active, open/closed, loading, and error states that the changed component supports.
4. Check the browser console and confirm that internal links, external WhatsApp links, images, and icons still work.
