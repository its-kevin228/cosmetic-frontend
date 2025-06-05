<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Titre avec animation -->
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 group">
      <span class="inline-block transition-transform duration-300 group-hover:translate-x-2">About us</span>
      <span class="text-orange-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">→</span>
    </h1>

    <div class="flex flex-col lg:flex-row gap-12 items-start">
      <!-- Colonne de gauche - Image avec effet de zoom -->
      <div class="lg:w-1/2 overflow-hidden rounded-xl shadow-xl">
        <img src="/images/aboutimage.jpeg" alt="Cosmetic products"
          class="w-full h-auto rounded-xl transition-transform duration-700 hover:scale-105">
      </div>

      <!-- Colonne de droite - Cartes avec animations -->
      <div class="lg:w-1/2">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <!-- Carte 1 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80 
                     hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white group">
            <div>
              <div
                class="text-orange-500 text-5xl font-bold mb-2 transition-colors duration-300 group-hover:text-orange-600">
                100%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Sans cruauté</div>
            </div>
            <p class="text-gray-600 text-sm">Aucun test sur les animaux à aucune étape de la production</p>
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <!-- Carte 2 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80 
                     hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white group">
            <div>
              <div
                class="text-orange-500 text-5xl font-bold mb-2 transition-colors duration-300 group-hover:text-orange-600">
                90%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Naturel</div>
            </div>
            <p class="text-gray-600 text-sm">Ingrédients d'origine naturelle issus de sources durables</p>
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <!-- Carte 3 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80 
                     hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white group">
            <div>
              <div
                class="text-orange-500 text-5xl font-bold mb-2 transition-colors duration-300 group-hover:text-orange-600">
                95%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Satisfaction</div>
            </div>
            <p class="text-gray-600 text-sm">Les clients se disent très satisfaits</p>
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Texte supplémentaire avec apparition progressive -->
        <div class="mt-8 space-y-4 text-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 animate-fadeIn">Notre Engagement pour la Beauté Éthique</h2>

          <p class="animate-fadeIn delay-100">Nous sommes une marque de cosmétiques passionnée, dédiée à offrir des
            produits de beauté de haute qualité, inspirés par la nature.</p>

          <p class="animate-fadeIn delay-200">Chez nous, aucun test sur les animaux — parce que la beauté doit rimer
            avec respect et compassion.</p>

          <p class="animate-fadeIn delay-300">Nos formules sont conçues avec des ingrédients approuvés par des
            dermatologues, sans parabènes ni substances controversées.</p>

          <p class="animate-fadeIn delay-400">Nous croyons en une beauté consciente, durable et accessible à toutes les
            peaux.</p>

          <p class="italic text-orange-500 font-medium animate-fadeIn delay-500">Sentez-vous belle. Soyez éthique.
            Rayonnez naturellement.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* Animation personnalisée */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>