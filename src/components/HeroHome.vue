<template>
  <section
    class="w-full bg-gradient-to-r from-white from-[60%] to-orange-500 to-[40%] sm:from-60% sm:to-40% overflow-hidden min-h-[500px] md:min-h-[600px]">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 sm:p-6 md:p-8">
      <!-- Section gauche avec texte -->
      <div class="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-center mb-8 lg:mb-0">

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2 sm:mb-4">
          Des soins experts pour chaque type de peau.<br>
          <span class="cosmetics-reveal">Cosmetics</span>
        </h1>
        <p class="text-base text-semibold sm:text-lg text-gray-600 mb-6 sm:mb-8">
          <i>Offrez à votre routine beauté la qualité qu’elle mérite.</i>
        </p>
        <button
          class="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold inline-flex items-center w-fit hover:-translate-y-1 transition-transform duration-200">
          Shop Now <span class="ml-2">→</span>
        </button>

        <!-- Petites images en bas -->
        <div class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 md:mt-16 max-w-md">
          <div v-for="(product, index) in displayedProducts" :key="product.id" class="flex flex-col">
            <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img :src="getImageUrl(product)" :alt="product.nom" class="w-full h-full object-cover">
            </div>
            <div class="flex gap-1 sm:gap-2 mt-2 items-center">
              <span class="text-gray-400 text-xs sm:text-sm">0{{ index + 1 }}</span>
              <span class="text-xs sm:text-sm font-medium">{{ product.nom }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section droite avec image principale -->
      <div class="w-full lg:w-1/2 relative">
        <div class="flex items-center justify-center lg:justify-end h-[250px] sm:h-[350px] md:h-[400px] lg:h-full">
          <video autoplay muted loop playsinline class="max-w-full max-h-full object-contain z-10">
            <source src="/video/v2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </div>*
  </section>
</template>

<script>
// Importation directe du fichier de données
import productData from '../data/images.json';

export default {
  name: 'HeroHome',
  data() {
    return {
      imagesData: productData,
      displayedProducts: []
    }
  },
  computed: {
    featuredProduct() {
      return this.imagesData.featured || {};
    }
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      // Sélection des 3 premiers produits pour les thumbnails
      this.displayedProducts = this.imagesData.products.slice(0, 3);
    },
    getImageUrl(product) {
      if (!product || !product.link) {
        return `https://placehold.co/600x400?text=${encodeURIComponent(product?.nom || 'Produit')}`;
      }

      return product.link;
    }

  }
}
</script>
<style>
@keyframes revealText {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }

  20% {
    opacity: 1;
    transform: translateY(0);
  }

  80% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
}

.cosmetics-reveal {
  display: inline-block;
  animation: revealText 3s ease-in-out infinite;
  color: #fb923c;
  font-style: italic;
  letter-spacing: 1px;
  position: relative;
}

.cosmetics-reveal::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #fb923c, transparent);
  animation: pulseLine 3s ease-in-out infinite;
}

@keyframes pulseLine {

  0%,
  100% {
    opacity: 0;
    transform: scaleX(0.3);
  }

  50% {
    opacity: 0.7;
    transform: scaleX(1);
  }
}
</style>