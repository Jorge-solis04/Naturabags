# Guía de skills de diseño para Codex

Este repositorio incluye tres skills locales en `.agents/skills`. Codex puede seleccionarlas automáticamente por la descripción de la tarea o puedes invocarlas explícitamente con `$nombre-de-skill`.

## `$design`

Coordina solicitudes que mezclan dirección visual, assets, tokens e implementación.

```text
$design Planea y ejecuta una renovación del hero y el catálogo sin perder la identidad Organic Vitality.
```

Para un cambio pequeño de un solo componente, usa directamente la skill especializada.

## `$ui-ux-pro-max`

Ayuda a elegir o justificar la dirección antes de escribir código. Primero revisa `DESIGN.md`, tokens y componentes existentes; después puede consultar su base local de patrones UI/UX.

```text
$ui-ux-pro-max Revisa la jerarquía y conversión del hero móvil. Dame hallazgos priorizados, sin modificar archivos.
```

```text
$ui-ux-pro-max Compara dos direcciones para una nueva página de paquetes semanales y recomienda una.
```

Sus resultados de búsqueda son evidencia secundaria. La marca y la implementación actual tienen prioridad. La skill no debe crear archivos mediante `--persist` salvo que lo pidas explícitamente.

## `$nuxt-ui-styling`

Implementa una dirección ya decidida en Nuxt 4, Vue 3 y CSS vanilla utilizando los tokens existentes.

```text
$nuxt-ui-styling Haz que el catálogo funcione mejor en móvil y agrega estados de foco accesibles. Conserva la dirección visual actual.
```

```text
$nuxt-ui-styling Implementa esta captura en SectionHero.vue y verifica el build.
```

Esta skill no debe añadir Tailwind, shadcn ni otra biblioteca de componentes a menos que lo solicites expresamente.

## Flujo recomendado

Para una funcionalidad nueva con dirección todavía abierta:

```text
1. $ui-ux-pro-max define la dirección.
2. Tú confirmas cualquier decisión que cambie materialmente la marca.
3. $nuxt-ui-styling implementa y ejecuta el build.
```

Para una solicitud amplia, invoca `$design`. Para una corrección concreta con dirección conocida, invoca `$nuxt-ui-styling` directamente.

## Ejemplos completos

Revisión sin cambios:

```text
$ui-ux-pro-max Audita la landing de NaturaBags en móvil: jerarquía, claridad del CTA, accesibilidad y confianza. No cambies archivos.
```

Diseño e implementación:

```text
$design Quiero una nueva sección de paquetes semanales. Define la dirección con Organic Vitality, implementa la opción más coherente en Nuxt y verifica el build.
```

Implementación controlada:

```text
$nuxt-ui-styling Ajusta el menú móvil para gestionar foco y Escape correctamente. No cambies su apariencia fuera de lo necesario.
```

## Fuentes de verdad

Codex debe aplicar esta prioridad:

1. Tu petición actual.
2. El código y los tokens activos.
3. La intención documentada en `DESIGN.md`.
4. Las recomendaciones genéricas de la base UI/UX.

Actualmente existen diferencias entre las fuentes configuradas en `nuxt.config.ts`, los tokens CSS y `DESIGN.md`. Las skills deben señalar esa diferencia cuando afecte una tarea, no resolverla silenciosamente.

## Mantenimiento y validación

Después de editar una skill, valida su carpeta con:

```bash
python ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/<nombre>
```

Después de cambios en la interfaz, ejecuta `pnpm build`.

Codex detecta normalmente las skills del repositorio de forma automática. Si una skill recién instalada no aparece en el selector, inicia una sesión nueva o reinicia Codex.
