<template>
  <footer class="footer">
    <div class="footer__container container">
      <!-- Sección Logo & Descripción -->
      <div class="footer__brand">
        <img src="/logonb.png" alt="Logo NaturaBags" class="footer__logo" width="120" height="40" />
        <p class="body-md footer__description">
          Bolsas de frutas y verduras picadas, desinfectadas y listas para licuar. Tu porción diaria de bienestar desde Salamanca, Guanajuato.
        </p>
        <div class="footer__socials">
          <a href="https://www.facebook.com/share/18nD6grSEg/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook">
            <Icon name="mdi:facebook" size="24" />
          </a>
          <a href="https://www.instagram.com/naturabags_mx?igsh=MXdiaHQ2ZHhoZ2xyOA==" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">
            <Icon name="mdi:instagram" size="24" />
          </a>
        </div>
      </div>

      <!-- Links de Navegación -->
      <div class="footer__links">
        <h3 class="label-lg footer__title">Navegación</h3>
        <ul class="footer__list" role="list">
          <li><a href="#catalogo" class="footer__link">Catálogo</a></li>
          <li><a href="#mision" class="footer__link">Nuestra Misión</a></li>
          <li><a href="#preguntas" class="footer__link">Preguntas Frecuentes</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer__contact">
        <h3 class="label-lg footer__title">Contacto</h3>
        <ul class="footer__list" role="list">
          <li class="footer__contact-item">
            <span class="body-md">
              
              <Icon name="mdi:whatsapp" size="20" class="footer__contact-icon" aria-hidden="true" />
               464 652 6465


            </span>
          </li>
          <li class="footer__contact-item">

            <Icon name="lucide:map" size="20" class="footer__contact-icon" aria-hidden="true" />

            <span class="body-md"> Salamanca, Gto.</span>
          </li>
          <li class="footer__contact-item footer__cta-wrapper">
            <a :href="whatsappUrl" class="btn btn--primary footer__cta">
              Chatea con nosotros
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Derechos Reservados -->
    <div class="footer__bottom">
      <div class="footer__bottom-container container">
        <p class="label-md footer__copyright">
          &copy; {{ currentYear }} NaturaBags. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useWhatsapp } from '~/composables/useWhatsapp'

const currentYear = new Date().getFullYear()
const { getWhatsappUrl } = useWhatsapp()
const whatsappUrl = getWhatsappUrl('¡Hola! Me gustaría más información sobre NaturaBags.')
</script>

<style scoped src="~/assets/css/components/footer.css"></style>
