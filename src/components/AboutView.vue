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
          <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
            <div class="text-orange-500 text-5xl font-bold mb-2">100%</div>
            <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Cruelty-Free</div>
            <p class="text-gray-600 mt-3 text-sm">No animal testing at any production stage</p>
          </div>
          
          <!-- Carte 2 -->
          <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
            <div class="text-orange-500 text-5xl font-bold mb-2">90%</div>
            <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Natural</div>
            <p class="text-gray-600 mt-3 text-sm">Naturally-derived ingredients from sustainable sources</p>
          </div>
          
          <!-- Carte 3 -->
          <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
            <div class="text-orange-500 text-5xl font-bold mb-2">95%</div>
            <div class="text-gray-800 font-medium uppercase text-sm tracking-wide">Satisfaction</div>
            <p class="text-gray-600 mt-3 text-sm">Customers report being highly satisfied</p>
          </div>
        </div>
        
        <!-- Texte supplémentaire sous les cartes -->
        <div class="mt-8 space-y-4 text-gray-700">
          <p>We are a passionate cosmetics retailer dedicated to providing high-quality beauty products.</p>
          <p>We never test on animals because beauty should be ethical and kind.</p>
          <p>Made with dermatologist-approved, paraben-free ingredients.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>