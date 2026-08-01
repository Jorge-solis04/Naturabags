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
          <!-- Botón CTA Cupón de Descuento con Animación (Primero) -->
          <button
            type="button"
            class="btn hero__btn hero__btn--coupon"
            @click="openCouponModal"
          >
            <span class="hero__btn-gift-wrapper" aria-hidden="true">
              <Icon name="lucide:gift" size="28" class="hero__btn-gift" />
            </span>
            <span class="hero__btn-cta-text">¡15% de Descuento! Reclamar cupón</span>
            <span class="hero__btn-sparkle-badge" aria-hidden="true">
              <Icon name="lucide:sparkles" size="20" />
            </span>
          </button>

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
            class="btn hero__btn hero__btn--cta-catalog"
          >
            <span class="hero__btn-leaves-wrapper" aria-hidden="true">
              <Icon name="lucide:leaf" size="18" class="hero__btn-leaf hero__btn-leaf--1" />
            </span>
            <span class="hero__btn-cta-text">Ver catálogo</span>
            <Icon name="lucide:arrow-down" size="18" class="hero__btn-arrow" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <!-- Columna derecha: Presentación visual del concepto -->
      <div class="hero__media">
        <span class="hero__media-overline">Un vaso de jugo al día hace toda la diferencia</span>
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
                <h3 class="preview-item__title">Congelación rápida </h3>
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

    <!-- Modal del Cupón de Descuento -->
    <Teleport to="body">
      <Transition name="fade-modal">
        <div 
          v-if="showCouponModal" 
          class="coupon-modal__backdrop" 
          @click.self="closeCouponModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-coupon-title"
        >
          <div class="coupon-modal__card">
            <button 
              type="button" 
              class="coupon-modal__close" 
              @click="closeCouponModal" 
              aria-label="Cerrar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="coupon-modal__close-icon">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div class="coupon-modal__header">
              <div class="coupon-modal__badge">
                <Icon name="lucide:gift" size="18" />
                <span>OFERTA DE LA SEMANA</span>
              </div>
              <h2 id="modal-coupon-title" class="coupon-modal__title">
                ¡Tienes 15% de descuento!
              </h2>
              <p class="coupon-modal__desc">
                Usa tu código único al realizar tu pedido por WhatsApp y aplica tu descuento especial.
              </p>
            </div>

            <div class="coupon-modal__code-wrapper">
              <span class="coupon-modal__code-label">Tu código promocional:</span>
              <div class="coupon-modal__code-box">
                <span class="coupon-modal__code">{{ couponCode }}</span>
                <button 
                  type="button" 
                  class="btn-copy" 
                  @click="copyCoupon"
                  :class="{ 'btn-copy--copied': copied }"
                >
                  <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" size="16" />
                  <span>{{ copied ? '¡Copiado!' : 'Copiar' }}</span>
                </button>
              </div>
            </div>

            <div class="coupon-modal__actions">
              <button 
                type="button" 
                class="btn btn--primary coupon-modal__btn-wa" 
                @click="openWhatsappWithCoupon"
              >
                <Icon name="mdi:whatsapp" size="20" />
                <span>Pedir por WhatsApp con mi 15% de descuento</span>
              </button>
            </div>

            <p class="coupon-modal__footer-note">
              <Icon name="lucide:shield-check" size="14" />
              <span>Válido 1 cupón por número de WhatsApp al hacer tu pedido.</span>
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useWhatsapp } from '~/composables/useWhatsapp'

const { getWhatsappUrl } = useWhatsapp()
const whatsappUrl = getWhatsappUrl('¡Hola! Me gustaría hacer un pedido del catálogo de jugos.')

const STORAGE_KEY = 'naturabags_promo_coupon_15'
const showCouponModal = ref(false)
const couponCode = ref('')
const copied = ref(false)

const generateRandomCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return `NATURABAGS-${result}`
}

const generateOrGetCoupon = () => {
  if (typeof window === 'undefined') return ''
  let existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    existing = generateRandomCode()
    localStorage.setItem(STORAGE_KEY, existing)
  }
  couponCode.value = existing
  return existing
}

const openCouponModal = () => {
  generateOrGetCoupon()
  showCouponModal.value = true
}

const closeCouponModal = () => {
  showCouponModal.value = false
  copied.value = false
}

const copyCoupon = async () => {
  if (!couponCode.value) return
  try {
    await navigator.clipboard.writeText(couponCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (e) {
    console.error('Error al copiar código:', e)
  }
}

const openWhatsappWithCoupon = () => {
  const message = `¡Hola! Me gustaría realizar un pedido y aplicar mi cupón de 15% de descuento: ${couponCode.value}`
  const url = getWhatsappUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem(STORAGE_KEY)
    if (existing) {
      couponCode.value = existing
    }
  }
})
</script>

<style scoped src="~/assets/css/components/hero.css"></style>
