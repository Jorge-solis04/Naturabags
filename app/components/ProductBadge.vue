<template>
  <div v-if="badgeLabel" class="product-badge" role="status">
    <span class="product-badge__text">{{ badgeLabel }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  featured: {
    type: [Boolean, String],
    default: false
  }
})

const badgeLabel = computed(() => {
  if (typeof props.featured === 'string' && props.featured.trim() !== '') {
    return props.featured
  }
  if (props.featured === true) {
    return 'Destacado'
  }
  return null
})
</script>

<style scoped>
.product-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: linear-gradient(135deg, #FFB800 0%, #FF8A00 100%);
  color: #FFFFFF;
  font-family: var(--font-body, system-ui, -apple-system, sans-serif);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: var(--radius-full, 9999px);
  box-shadow: 0 4px 12px rgba(255, 138, 0, 0.35);
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .product-badge {
    top: 14px;
    left: 14px;
    padding: 5px 12px;
    font-size: 12px;
    gap: 5px;
  }
}

.product-badge__text {
  line-height: 1;
}
</style>
