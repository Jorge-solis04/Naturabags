<template>
  <section id="catalogo" class="catalog" aria-labelledby="catalog-heading">
    <div class="catalog__container">
      <!-- Cabecera de la sección -->
      <div class="catalog__header">
        <span class="section-overline">Nuestro Catálogo</span>
        <h2 id="catalog-heading" class="catalog__title">
          Elige tu bolsa lista para licuar
        </h2>
        <p class="catalog__subtitle">
          Cada bolsa trae frutas y verduras frescas picadas y desinfectadas. Toca "Ver beneficios" para conocer qué hace cada una por tu cuerpo.
        </p>
      </div>

      <!-- Grid de productos -->
      <div class="catalog__grid">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="product-card"
          :style="{ '--theme-color': product.colorTheme }"
        >
          <!-- Contenedor de Imagen y Precio -->
          <div class="product-card__image-wrapper">
            <img 
              :src="product.image" 
              :alt="`Bolsa lista para licuar sabor ${product.name}`" 
              class="product-card__image"
              loading="lazy"
              width="400"
              height="400"
            />
            <span class="product-card__price">${{ product.price }}</span>
          </div>

          <!-- Información del Producto -->
          <div class="product-card__info">
            <h3 class="product-card__title">{{ product.name }}</h3>

            <!-- Ingredientes -->
            <div class="product-card__ingredients">
              <span class="product-card__ingredients-label">Ingredientes</span>
              <div class="product-card__chips">
                <span 
                  v-for="ingredient in product.ingredients" 
                  :key="ingredient"
                  class="product-card__chip"
                >
                  {{ ingredient }}
                </span>
              </div>
            </div>

            <!-- Acordeón de Beneficios -->
            <button 
              class="product-card__benefits-toggle"
              :class="{ 'product-card__benefits-toggle--active': expandedProducts[product.id] }"
              @click="toggleBenefits(product.id)"
              :aria-expanded="expandedProducts[product.id] ? 'true' : 'false'"
              :aria-controls="'benefits-content-' + product.id"
            >
              <span>Ver beneficios</span>
              <Icon 
                name="lucide:chevron-down" 
                size="16" 
                class="product-card__benefits-icon" 
                aria-hidden="true" 
              />
            </button>

            <!-- Contenido del Acordeón -->
            <div 
              class="product-card__benefits-wrapper"
              :class="{ 'product-card__benefits-wrapper--expanded': expandedProducts[product.id] }"
              :id="'benefits-content-' + product.id"
            >
              <div class="product-card__benefits-inner">
                <ul class="product-card__benefits-list" role="list">
                  <li 
                    v-for="(benefit, index) in product.benefits" 
                    :key="index"
                    class="product-card__benefit-item"
                  >
                    <Icon 
                      name="lucide:check" 
                      size="14" 
                      class="product-card__benefit-icon" 
                      aria-hidden="true"
                    />
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Botón WhatsApp -->
            <div class="product-card__actions">
              <NuxtLink
                :to="getWhatsappUrl(product.whatsappMsg)"
                class="product-card__order-btn"
                external
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="mdi:whatsapp" size="18" aria-hidden="true" />
                Pedir 
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { products } from '~/data/products'
import { useWhatsapp } from '~/composables/useWhatsapp'

const { getWhatsappUrl } = useWhatsapp()

// Estado reactivo para controlar qué acordeones de beneficios están abiertos
const expandedProducts = ref({})

const toggleBenefits = (productId) => {
  expandedProducts.value[productId] = !expandedProducts.value[productId]
}
</script>

<style scoped src="~/assets/css/components/catalog.css"></style>
