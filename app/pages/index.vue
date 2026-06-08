<template>
  <div class="landing-page">
    <SectionHero />
    <SectionInstructions />
  </div>
</template>


<script setup>
// Registro de metadatos SEO específicos de la página
useSeoMeta({
  title: 'NaturaBags — Jugos Naturales Listos para Licuar | Salamanca',
  description: 'Bolsas de frutas y verduras frescas picadas y desinfectadas listas para licuar. Entrega a domicilio en Salamanca, Gto. 100% natural, sin conservadores.',
  ogTitle: 'NaturaBags — Jugos Naturales Listos para Licuar',
  ogDescription: 'Bolsas de frutas y verduras frescas picadas y desinfectadas listas para licuar. Entrega a domicilio en Salamanca, Gto.',
  ogType: 'website',
  ogLocale: 'es_MX'
})
</script>

<style scoped>
.welcome {
  padding-block: var(--space-10);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}
</style>
