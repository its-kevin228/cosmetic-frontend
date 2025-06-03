<template>
  <section
    class="w-full bg-gradient-to-r from-white from-[60%] to-orange-500 to-[40%] sm:from-white sm:from-60% sm:to-orange-500 sm:to-40% overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative">
    <!-- Fond géométrique SVG -->
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="/images/patternimage.png" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 h-full relative z-10">
      <!-- Section gauche avec texte - Hauteur augmentée -->
      <div
        class="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-center mt-16 sm:mt-20 md:mt-24 mb-8 lg:mb-0 min-h-[400px] sm:min-h-[450px] md:min-h-[550px]">

        <div class="space-y-3 sm:space-y-4 md:space-y-6">
          <h1 class="text-4xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Des soins experts pour chaque type de peau.<br>
            <span class="cosmetics-reveal">Cosmetics</span>
          </h1>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-lg">
            <i>Offrez à votre routine beauté la qualité qu'elle mérite.</i>
          </p>
          <button
            class="bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold inline-flex items-center w-fit hover:-translate-y-1 transition-transform duration-200 mt-2 sm:mt-4 text-sm sm:text-base">
            Découvrez nos Produits <span class="ml-2">→</span>
          </button>
        </div>

        <!-- Petites images positionnées en bas absolu -->
        <div
          class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-auto pt-6 sm:pt-8 md:pt-10 max-w-xs sm:max-w-md">
          <div v-for="(product, index) in displayedProducts" :key="product.id" class="flex flex-col">
            <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img :src="getImageUrl(product)" :alt="product.nom" class="w-full h-full object-cover">
            </div>
            <div class="flex gap-1 sm:gap-2 mt-1 sm:mt-2 items-center">
              <span class="text-gray-400 text-xs sm:text-sm">0{{ index + 1 }}</span>
              <span class="text-xs sm:text-sm font-medium truncate">{{ product.nom }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section droite avec image principale -->
      <div class="w-full lg:w-1/2 relative flex items-center mt-6 sm:mt-8 md:mt-0">
        <div
          class="w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-full flex items-center justify-center lg:justify-end">
          <video autoplay muted loop playsinline class="max-w-full max-h-full object-contain z-10">
            <source src="/video/v2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productData from '../data/images.json';

export default {
  name: 'HeroHome',
  data() {
    return {
      imagesData: productData,
      displayedProducts: []
    }
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.displayedProducts = this.imagesData.products.slice(0, 3);
    },
    getImageUrl(product) {
      return product?.link || `https://placehold.co/600x400?text=${encodeURIComponent(product?.nom || 'Produit')}`;
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