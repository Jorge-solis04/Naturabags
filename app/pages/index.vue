<template>
  <div class="landing-page">
    <SectionHero />
    <SectionInstructions />
    <SectionCatalog />
    <SectionMission />
    <SectionFaq />
  </div>
</template>


<script setup>
// El grafo JSON-LD para desambiguar la entidad local frente a la marca de empaques global
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FoodDeliveryService",
      "@id": "https://naturabags.com.mx/#delivery-service",
      "name": "Naturabags Jugos Detox",
      "url": "https://naturabags.com.mx",
      "logo": "https://naturabags.com.mx/logonb.png", // Apuntando al archivo real logonb.png
      "image": "https://naturabags.com.mx/hero-jugos.jpg",
      "telephone": "+524646526465",
      "priceRange": "$$",
      "description": "Servicio local en Salamanca de preparación y entrega a domicilio de fruta picada lista para licuar.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Naturabags",
        "telephone": "+524646526465",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Salamanca",
          "addressRegion": "Guanajuato",
          "addressCountry": "MX"
        }
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Salamanca",
          "sameAs": "https://es.wikipedia.org/wiki/Salamanca_(Guanajuato)"
        }
      ]
    }
  ]
};

// Registro de metadatos SEO específicos de la página (Open Graph y Twitter Cards)
useSeoMeta({
  title: 'Naturabags | Jugos Detox y Fruta Lista para Licuar en Salamanca',
  description: 'Prepara tus jugos detox en segundos. Entregamos paquetes de fruta picada e higienizada a domicilio en Salamanca, Gto.',
  ogTitle: 'Naturabags | Jugos Detox a Domicilio',
  ogDescription: 'Fruta picada, desinfectada y congelada lista para tu licuadora. Pide por la mañana, recibe por la tarde en Salamanca.',
  ogImage: 'https://naturabags.com.mx/og-share-image.jpg',
  ogUrl: 'https://naturabags.com.mx',
  ogType: 'website',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Naturabags | Jugos Detox',
  twitterDescription: 'Paquetes de fruta listos para licuar a domicilio.'
})

// Inyección perimetral en el HEAD del documento HTML para el JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaOrg)
    }
  ]
})
</script>

<style scoped>
.welcome {
  padding-block: var(--space-10);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}
</style>
