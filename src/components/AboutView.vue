<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-12">About us →</h1>

    <div class="flex flex-col lg:flex-row gap-12 items-start">
      <!-- Colonne de gauche - Image -->
      <div class="lg:w-1/2">
        <img src="/images/aboutimage.jpeg" alt="Cosmetic products" class="w-full h-auto rounded-lg shadow-md">
      </div>

      <!-- Colonne de droite - Cartes HORIZONTALES -->
      <div class="lg:w-1/2">
        <div class="grid grid-cols-3 gap-6">
          <!-- Carte 1 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80">
            <div>
              <div class="text-orange-500 text-5xl font-bold mb-2">100%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Sans cruauté</div>
            </div>
            <p class="text-gray-600 text-sm">Aucun test sur les animaux à aucune étape de la production</p>
          </div>




          <!-- Carte 2 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80">
            <div>
              <div class="text-orange-500 text-5xl font-bold mb-2">90%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Naturel</div>
            </div>
            <p class="text-gray-600 text-sm">Ingrédients d'origine naturelle issus de sources durables</p>
          </div>


          <!-- Carte 3 -->
          <div class="border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-80">
            <div>
              <div class="text-orange-500 text-5xl font-bold mb-2">95%</div>
              <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Satisfaction</div>
            </div>
            <p class="text-gray-600 text-sm">Les clients se disent très satisfaits</p>
          </div>

        </div>
<!-- Texte supplémentaire sous les cartes -->
<div class="mt-8 space-y-4 text-gray-700 text-center">
  <h2 class="text-2xl font-bold text-gray-900">Notre Engagement pour la Beauté Éthique</h2>

  <p>Nous sommes une marque de cosmétiques passionnée, dédiée à offrir des produits de beauté de haute qualité, inspirés par la nature.</p>

  <p>Chez nous, aucun test sur les animaux — parce que la beauté doit rimer avec respect et compassion.</p>

  <p>Nos formules sont conçues avec des ingrédients approuvés par des dermatologues, sans parabènes ni substances controversées.</p>

  <p>Nous croyons en une beauté consciente, durable et accessible à toutes les peaux.</p>

  <p class="italic text-orange-500 font-medium">Sentez-vous belle. Soyez éthique. Rayonnez naturellement.</p>
</div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>