<template>
  <section id="preguntas" class="faq" aria-labelledby="faq-heading">
    <div class="faq__container container">
      <!-- Encabezado de la Sección -->
      <div class="faq__header">
        <span class="faq__subtitle">PREGUNTAS FRECUENTES</span>
        <h2 id="faq-heading" class="faq__title">Todo lo que necesitas saber</h2>
      </div>

      <!-- Acordeón de Preguntas -->
      <div class="faq__accordion">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === index }"
        >
          <!-- Cabecera / Botón de Pregunta -->
          <button 
            class="faq__question-btn"
            @click="toggleFaq(index)"
            :aria-expanded="openIndex === index ? 'true' : 'false'"
            :aria-controls="'faq-answer-' + index"
          >
            <span class="faq__question">{{ item.question }}</span>
            <span class="faq__icon-wrapper">
              <Icon 
                name="lucide:chevron-down" 
                class="faq__icon" 
                aria-hidden="true" 
              />
            </span>
          </button>

          <!-- Contenido Desplegable (Respuesta) -->
          <div 
            :id="'faq-answer-' + index"
            class="faq__answer-wrapper"
            :class="{ 'faq__answer-wrapper--open': openIndex === index }"
            role="region"
            :aria-hidden="openIndex === index ? 'false' : 'true'"
          >
            <div class="faq__answer-inner">
              <p class="faq__answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Estado reactivo para rastrear qué pregunta está abierta (null = todas cerradas)
const openIndex = ref(null)

const toggleFaq = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null // Cierra si se hace clic en la misma
  } else {
    openIndex.value = index // Abre la nueva y cierra la anterior
  }
}

// Array de preguntas y respuestas. Puedes añadir más objetos aquí fácilmente.
const faqItems = ref([
  {
    question: '¿Cómo preparo mi jugo NaturaBags?',
    answer: 'Muy fácil: vacía el contenido de la bolsa en tu licuadora, agrega entre 1 y 2 vasos de agua (o el líquido de tu preferencia), licúa por unos segundos y ¡listo! Disfruta tu jugo natural recién hecho.'
  },
  {
    question: '¿Las frutas y verduras están lavadas y desinfectadas?',
    answer: '¡Sí, al 100%! Todos nuestros ingredientes pasan por un estricto proceso de selección, lavado, picado y desinfección profunda antes de ser empacados e individualmente congelados. No tienes que lavar nada, solo vaciar y licuar.'
  },
  {
    question: '¿Cuánto duran las bolsas y cómo debo conservarlas?',
    answer: 'Debes mantener las bolsas en el congelador. Gracias a nuestro proceso de congelación rápida, se conservan en perfecto estado manteniendo todas sus vitaminas, minerales y sabor natural por hasta 8 meses.'
  },
  {
    question: '¿Hacen entregas a domicilio?',
    answer: 'Sí, realizamos entregas a domicilio en Salamanca, Gto. Puedes hacer tu pedido por WhatsApp y te lo llevamos directamente a tu puerta. Costo de entrega: $50.'
  },
  {
    question: '¿Qué días son las entregas?',
    answer: 'Realizamos entregas todos los días a excepción del sábado. Pedidos realizados después del mediodía se entregarán el siguiente día de entrega programado.'
  },
  {
    question: '¿Puedo personalizar mi pedido?',
    answer: 'Sí, ofrecemos opciones de personalización. Puedes elegir entre nuestras combinaciones predefinidas o solicitar una mezcla personalizada con tus frutas y verduras favoritas. Solo háznoslo saber al hacer tu pedido por WhatsApp.'
  },
  


])
</script>

<style scoped src="~/assets/css/components/faq.css"></style>
