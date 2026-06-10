<template>
  <section id="instrucciones" class="instructions" aria-labelledby="instructions-heading">
    <div class="instructions__container container">
      <!-- Cabecera de la sección -->
      <div class="instructions__header">
        <span class="section-overline">¿Cómo funciona?</span>
        <h2 id="instructions-heading" class="headline-lg">
          Tan fácil como solos 3 pasos
        </h2>
      </div>

      <!-- Línea del tiempo de 3 pasos -->
      <div class="instructions__timeline">
        <!-- Paso 1 -->
        <div class="instructions__step">
          <div class="instructions__icon-wrapper">
            <Icon name="mdi:food-apple-outline" class="instructions__icon" aria-hidden="true" />
          </div>
          <div class="instructions__step-content">
            <h3 class="headline-md instructions__step-title">1. Abre tu bolsa</h3>
            <p class="body-md instructions__step-desc">
              Vacía el contenido fresco en tu licuadora.
            </p>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="instructions__step">
          <div class="instructions__icon-wrapper">
            <Icon name="mdi:blender" class="instructions__icon" aria-hidden="true" />
          </div>
          <div class="instructions__step-content">
            <h3 class="headline-md instructions__step-title">2. Agrega medio litro de agua</h3>
            <p class="body-md instructions__step-desc">
              Añade agua y licúa.
            </p>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="instructions__step">
          <div class="instructions__icon-wrapper">
            <Icon name="mdi:glass-cocktail" class="instructions__icon" aria-hidden="true" />
          </div>
          <div class="instructions__step-content">
            <h3 class="headline-md instructions__step-title">3. ¡Listo, disfruta!</h3>
            <p class="body-md instructions__step-desc">
              Sirve tu jugo natural y disfruta.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="~/assets/css/components/instructions.css"></style>
