<template>
  <section id="instrucciones" class="instructions" aria-labelledby="instructions-heading">
    <div class="instructions__container container">
      <!-- Cabecera de la sección -->
      <div class="instructions__header">
        <span class="section-overline">¿Cómo funciona?</span>
        <h2 id="instructions-heading" class="headline-lg">
          Tan fácil como <span class="text-accent">1, 2, 3</span>
        </h2>
        <p class="body-lg instructions__subtitle">
          Prepara tu jugo saludable favorito en menos de un minuto con nuestro método sencillo.
        </p>
      </div>

      <!-- Grid de 3 pasos -->
      <div class="instructions__grid">
        <!-- Paso 1 -->
        <div class="instructions__step-card">
          <div class="instructions__step-num">1</div>
          <h3 class="headline-md instructions__step-title">Elige tu bolsa</h3>
          <p class="body-md instructions__step-desc">
            Selecciona de nuestro catálogo de combinaciones naturales de frutas y verduras frescas, picadas y desinfectadas.
          </p>
        </div>

        <!-- Paso 2 -->
        <div class="instructions__step-card">
          <div class="instructions__step-num">2</div>
          <h3 class="headline-md instructions__step-title">Agrega tu líquido</h3>
          <p class="body-md instructions__step-desc">
            Vierte el contenido de la bolsa directamente en tu licuadora y añade agua, leche, jugo o yogur a tu elección.
          </p>
        </div>

        <!-- Paso 3 -->
        <div class="instructions__step-card">
          <div class="instructions__step-num">3</div>
          <h3 class="headline-md instructions__step-title">Licúa y disfruta</h3>
          <p class="body-md instructions__step-desc">
            Licúa durante 45 segundos hasta obtener la textura perfecta. ¡Sirve al instante y disfruta de tu shot de nutrientes!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="~/assets/css/components/instructions.css"></style>
