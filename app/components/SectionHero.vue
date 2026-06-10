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
      <!-- Columna derecha: Presentación visual del concepto -->
      <div class="hero__media">
        <div class="hero__preview-card">
          <div class="preview-card__header">
            <span class="preview-card__tag">Tu dosis diaria</span>
            <h2 class="preview-card__title">¿Qué contiene cada bolsa?</h2>
          </div>
          <div class="preview-card__body">
            <div class="preview-item">
              <div class="preview-item__icon-wrapper">
                <Icon name="lucide:apple" size="24" class="preview-item__icon" aria-hidden="true" />
              </div>
              <div class="preview-item__text">
                <h3 class="preview-item__title">Fruta y verdura picada</h3>
                <p class="preview-item__desc">Porciones exactas desinfectadas y listas para usar.</p>
              </div>
            </div>
            <div class="preview-item">
              <div class="preview-item__icon-wrapper">
                <Icon name="lucide:snowflake" size="24" class="preview-item__icon" aria-hidden="true" />
              </div>
              <div class="preview-item__text">
                <h3 class="preview-item__title">Congelación rápida (IQF)</h3>
                <p class="preview-item__desc">Mantiene el 100% de los nutrientes y sabor natural.</p>
              </div>
            </div>
            <div class="preview-item">
              <div class="preview-item__icon-wrapper">
                <Icon name="lucide:heart" size="24" class="preview-item__icon" aria-hidden="true" />
              </div>
              <div class="preview-item__text">
                <h3 class="preview-item__title">Sin aditivos ni conservadores</h3>
                <p class="preview-item__desc">0% azúcares añadidos, 0% conservadores. 100% natural.</p>
              </div>
            </div>
          </div>
          <div class="preview-card__footer">
            <span class="preview-card__footer-text"> Envasado higiénicamente en Salamanca, Guanajuato, México.</span>
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
