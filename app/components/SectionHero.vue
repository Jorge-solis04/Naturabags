<template>
  <section id="hero" class="hero" aria-labelledby="hero-heading">
    <div class="hero__container container">
      <div class="hero__intro">
        <span class="hero__eyebrow">
          <Icon name="lucide:leaf" class="hero__eyebrow-icon" aria-hidden="true" />
          Preparado en Salamanca, Guanajuato
        </span>

        <h1 id="hero-heading" class="hero__title">
          Cinco porciones para una semana más simple.
        </h1>

        <p class="body-lg hero__description">
          Frutas y verduras reales, picadas y desinfectadas, listas para licuar en menos de un minuto.
        </p>

        <div class="hero__actions">
          <NuxtLink
            :to="whatsappUrl"
            class="btn btn--primary hero__primary-action"
            external
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mdi:whatsapp" size="20" aria-hidden="true" />
            Elegir mi mix por WhatsApp
          </NuxtLink>

          <NuxtLink to="#catalogo" class="hero__secondary-action">
            Ver todos los mixes
            <Icon name="lucide:arrow-down" size="18" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <div class="hero__showcase">
        <div class="hero__image-frame">
          <NuxtImg
            src="/img/kit_jugo_verde.jpeg"
            alt="Kit NaturaBags de Jugo Verde con cinco porciones de frutas y verduras listas para licuar"
            class="hero__image"
            width="1024"
            height="1024"
            sizes="xs:335px sm:600px md:728px lg:944px xl:1120px"
            format="webp"
            preload
          />
          <span class="hero__image-label">5 porciones en el kit mostrado</span>
        </div>

        <ol class="hero__process" aria-label="Preparación en tres pasos">
          <li class="hero__process-step">
            <span class="hero__process-number" aria-hidden="true">1</span>
            <span>Abre</span>
          </li>
          <li class="hero__process-step">
            <span class="hero__process-number" aria-hidden="true">2</span>
            <span>Agrega agua</span>
          </li>
          <li class="hero__process-step">
            <span class="hero__process-number" aria-hidden="true">3</span>
            <span>Licúa</span>
          </li>
        </ol>
      </div>

      <ul class="hero__trust" aria-label="Características de NaturaBags">
        <li class="hero__trust-item">
          <Icon name="lucide:leaf" size="18" aria-hidden="true" />
          Producto local de Salamanca, Gto.
        </li>
        <li class="hero__trust-item">
          <Icon name="lucide:apple" size="18" aria-hidden="true" />
          Fruta y verdura picada y desinfectada
        </li>
        <li class="hero__trust-item">
          <Icon name="mdi:whatsapp" size="18" aria-hidden="true" />
          Compra directa por WhatsApp
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useWhatsapp } from '~/composables/useWhatsapp'

const { getWhatsappUrl } = useWhatsapp()
const whatsappUrl = getWhatsappUrl('¡Hola! Quiero elegir mi mix de NaturaBags para la semana.')
</script>

<style scoped src="~/assets/css/components/hero.css"></style>
