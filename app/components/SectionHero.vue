<template>
  <section id="hero" class="hero" aria-labelledby="hero-heading">
    <div class="hero__container container">
      <!-- Contenido textual (Columna izquierda) -->
      <div class="hero__content">
        <span class="hero__badge">
          <Icon name="lucide:leaf" class="hero__badge-icon" aria-hidden="true"></Icon>
          <span>100% NATURAL · LISTO PARA LICUAR</span>
        </span>
        
        <h1 id="hero-heading" class="display-lg hero__title">
          NaturaBags <br />
        </h1>
        <p class="display-lg hero__subtitle">Tus jugos saludables para toda la semana</p>
        
        <p class="body-lg hero__description">
          Bolsas de frutas y verduras frescas, picadas, desinfectadas y listas para licuar. Mantén tu energía alta y tu cuerpo sano sin perder tiempo. ¡Solo agrega agua o tu líquido favorito y listo!
        </p>
        
        <div class="hero__actions">
          <NuxtLink 
            :to="whatsappUrl" 
            class="btn btn--primary hero__btn"
            external
            target="_blank"
            rel="noopener noreferrer"
          >
          <Icon name="mdi:whatsapp" size="20" class="hero__btn-icon" aria-hidden="true" />
            Haz tu pedido por WhatsApp
          </NuxtLink>
          <NuxtLink 
            to="#catalogo" 
            class="btn btn--ghost hero__btn"
          >
            Ver catálogo
          </NuxtLink>
        </div>
        
        <!-- Beneficios rápidos -->
        <ul class="hero__benefits" role="list">
          <li class="hero__benefit-item">
            <Icon name="lucide:droplet" size="20" class="hero__benefit-icon" aria-hidden="true" />
            <span class="body-md">Solo agrega agua</span>
          </li>
          <li class="hero__benefit-item">
            <Icon name="lucide:hand-heart" size="20" class="hero__benefit-icon" aria-hidden="true" />
            <span class="body-md">Sin conservadores ni azúcares añadidos</span>
          </li>
          <li class="hero__benefit-item">
            <Icon name="lucide:snowflake" size="20" class="hero__benefit-icon" aria-hidden="true" />
            <span class="body-md">Congelado para conservar nutrientes</span>
          </li>
        </ul>
      </div>

      <!-- Imagen/Mockup (Columna derecha) -->
      <div class="hero__media">
        <!-- Contenedor placeholder visual según regla del usuario -->
        <div class="hero__image-placeholder">
          <div class="hero__placeholder-content">
            <span class="hero__placeholder-icon" aria-hidden="true">🥤</span>
            <p class="label-lg">Espacio para Imagen Principal</p>
            <p class="label-md hero__placeholder-desc">
              Recomendado: Bolsa de frutas de 600x600px (.webp transparente)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWhatsapp } from '~/composables/useWhatsapp'

const { getWhatsappUrl } = useWhatsapp()
const whatsappUrl = getWhatsappUrl('¡Hola! Me gustaría hacer un pedido del catálogo de jugos.')
</script>

<style scoped src="~/assets/css/components/hero.css"></style>
