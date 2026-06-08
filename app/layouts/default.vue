<template>
  <div class="layout-wrapper">
    <!-- Componente Header auto-importado por Nuxt 4 -->
    <AppHeader />

    <!-- Contenido principal -->
    <main id="main-content" class="main-content">
      <slot />
    </main>

    <!-- Componente Footer auto-importado por Nuxt 4 -->
    <AppFooter />

    <!-- Botón flotante de WhatsApp auto-importado por Nuxt 4 -->
    <WhatsappFab />
  </div>
</template>

<script setup>
// En Nuxt 4, los componentes en la carpeta components/ se auto-importan,
// por lo que no es necesario importarlos aquí manualmente.
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}
</style>
