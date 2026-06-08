<template>
  <header class="header">
    <div class="header__container container">
      <!-- Logo -->
      <a href="#" class="header__logo-link" aria-label="Inicio - NaturaBags">
        <img src="/logonb.png" alt="Logo NaturaBags" class="header__logo" width="120" height="40" />
      </a>

      <!-- Desktop Nav -->
      <nav class="header__nav" aria-label="Navegación principal">
        <ul class="header__nav-list">
          <li><a href="#catalogo" class="header__nav-link">Catálogo</a></li>
          <li><a href="#mision" class="header__nav-link">Misión</a></li>
          <li><a href="#preguntas" class="header__nav-link">Preguntas</a></li>
        </ul>
      </nav>

      <!-- Desktop CTA -->
      <div class="header__actions">
        <a :href="whatsappUrl" class="btn btn--dark header__cta">
          Pedir ahora
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button 
        class="header__toggle" 
        :class="{ 'header__toggle--open': isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
      >
        <span class="header__toggle-bar"></span>
        <span class="header__toggle-bar"></span>
        <span class="header__toggle-bar"></span>
      </button>
    </div>

    <!-- Mobile Nav Menu -->
    <transition name="menu-slide">
      <div 
        v-if="isMenuOpen" 
        id="mobile-menu"
        class="header__mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <nav class="header__mobile-nav">
          <ul class="header__mobile-nav-list">
            <li>
              <a href="#catalogo" class="header__mobile-nav-link" @click="closeMenu">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#mision" class="header__mobile-nav-link" @click="closeMenu">
                Misión
              </a>
            </li>
            <li>
              <a href="#preguntas" class="header__mobile-nav-link" @click="closeMenu">
                Preguntas
              </a>
            </li>
            <li class="header__mobile-cta-item">
              <a :href="whatsappUrl" class="btn btn--primary header__mobile-cta" @click="closeMenu">
                Pedir ahora por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useWhatsapp } from '~/composables/useWhatsapp'

const { getWhatsappUrl } = useWhatsapp()
const whatsappUrl = getWhatsappUrl('¡Hola! Me gustaría hacer un pedido.')

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.classList.remove('no-scroll')
}
</script>

<style scoped src="~/assets/css/components/header.css"></style>
