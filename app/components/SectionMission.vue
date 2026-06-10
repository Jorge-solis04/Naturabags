<template>
  <section id="mision" class="mission" aria-labelledby="mission-heading">
    <div class="mission__container container">
      <div class="mission__card">
        <!-- Icono de Hoja -->
        <div class="mission__icon-wrapper">
          <Icon name="lucide:leaf" class="mission__icon" aria-hidden="true" />
        </div>
        
        <!-- Etiqueta de Sección -->
        <span class="mission__label">NUESTRA MISIÓN</span>
        
        <!-- Título Destacado -->
        <h2 id="mission-heading" class="mission__title">
          En NaturaBags creemos que cuidar tu salud debe ser <span class="text-highlight">simple, delicioso y accesible</span>.
        </h2>
        
        <!-- Descripción -->
        <p class="body-lg mission__description">
          Por eso preparamos bolsas con frutas y verduras frescas, lavadas y picadas, listas para licuar. Queremos que más personas incorporen lo natural a su día sin complicaciones, ahorrando tiempo y sin desperdicio. Nuestro compromiso es con tu bienestar y con un estilo de vida saludable, un jugo a la vez.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente estático, no requiere lógica reactiva adicional
</script>

<style scoped src="~/assets/css/components/mission.css"></style>
