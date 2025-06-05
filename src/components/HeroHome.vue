<template>
  <section class="w-full bg-white lg:bg-gradient-to-r lg:from-white lg:from-[60%] lg:to-orange-500 lg:to-[40%] overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative">
    <!-- Fond géométrique SVG -->
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="/images/patternimage.png" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 h-full relative z-10">
      <!-- Section gauche (contenu principal + petites images) -->
      <div class="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col">
        <!-- Contenu texte -->
        <div class="space-y-4 sm:space-y-5 md:space-y-6 mt-8 sm:mt-12 md:mt-16 lg:mt-24">
          <h1 class="text-5xl xs:text-6xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-tight">
            Des soins experts pour chaque type de peau.<br>
            <span class="cosmetics-reveal">Cosmetics</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-xl text-gray-600 max-w-md sm:max-w-lg">
            <i>Offrez à votre routine beauté la qualité qu'elle mérite.</i>
          </p>
          <router-link to="/products" class="bg-black text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full font-semibold inline-flex items-center w-fit hover:-translate-y-1 transition-transform duration-200 mt-4 sm:mt-6 text-lg sm:text-xl">
            Découvrez nos Produits <span class="ml-3">→</span>
          </router-link>
        </div>

        <!-- Petites images - Version desktop (toujours visible) -->
        <div class="hidden lg:grid grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 pt-8 md:pt-12 w-full max-w-sm md:max-w-md">
          <div v-for="(product, index) in displayedProducts" :key="product.id" class="flex flex-col">
            <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img :src="getImageUrl(product)" :alt="product.nom" class="w-full h-full object-cover">
            </div>
            <div class="flex gap-2 md:gap-3 mt-2 md:mt-3 items-center">
              <span class="text-gray-400 text-sm md:text-base">0{{ index + 1 }}</span>
              <span class="text-sm md:text-base font-medium truncate">{{ product.nom }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section droite (contenu mobile: petites images + vidéo) -->
      <div class="lg:hidden w-full flex flex-col mt-8">
        <!-- Petites images - Version mobile -->
        <div class="grid grid-cols-3 gap-4 sm:gap-5 w-full mb-8">
          <div v-for="(product, index) in displayedProducts" :key="product.id" class="flex flex-col">
            <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img :src="getImageUrl(product)" :alt="product.nom" class="w-full h-full object-cover">
            </div>
            <div class="flex gap-2 sm:gap-3 mt-2 sm:mt-3 items-center">
              <span class="text-gray-400 text-sm sm:text-base">0{{ index + 1 }}</span>
              <span class="text-sm sm:text-base font-medium truncate">{{ product.nom }}</span>
            </div>
          </div>
        </div>

        <!-- Vidéo mobile agrandie -->
        <div class="w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
          <video autoplay muted loop playsinline class="w-full h-full object-cover z-10 rounded-xl">
            <source src="/video/v2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <!-- Section droite (vidéo desktop) -->
      <div class="hidden lg:flex w-full lg:w-1/2 h-full items-center justify-center lg:justify-end">
        <div class="w-full h-[450px] lg:h-[500px] xl:h-full flex items-center justify-center">
          <video autoplay muted loop playsinline class="max-w-full max-h-full object-contain z-10">
            <source src="/video/v2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import productData from '../data/images.json';
import { useRouter } from 'vue-router';

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