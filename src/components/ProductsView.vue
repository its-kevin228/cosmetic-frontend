<template>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl md:text-5xl font-black mb-8 text-gray-800">Featured Products</h1>

        <!-- Produit vedette -->
        <div v-if="featuredProduct" class="mb-12 bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 aspect-square overflow-hidden">
                    <img :src="featuredProduct.link" :alt="featuredProduct.nom"
                        class="w-full h-full object-cover">
                </div>
                <div class="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 class="text-2xl font-bold mb-4">{{ featuredProduct.nom }}</h2>
                    <p class="text-orange-500 text-xl font-bold mb-6">{{ featuredProduct.prix }}</p>
                    <button class="bg-black text-white px-6 py-3 rounded-full self-start hover:bg-gray-800 transition">
                        Voir le produit
                    </button>
                </div>
            </div>
        </div>

        <!-- Filtres (optionnel, à adapter selon vos catégories réelles) -->
        <div class="flex flex-wrap gap-4 mb-8">
            <button v-for="category in categories" :key="category"
                @click="selectedCategory = category === selectedCategory ? 'All Products' : category" :class="[
                    'px-4 py-2 rounded-full text-sm font-medium',
                    selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]">
                {{ category }}
            </button>
        </div>

        <!-- Grille de produits -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="product in displayedProducts" :key="product.id"
                class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="aspect-square overflow-hidden">
                    <img :src="product.link" :alt="product.nom"
                        class="w-full h-full object-cover transition-transform hover:scale-105">
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1">{{ product.nom }}</h3>
                    <div class="flex justify-between items-center mt-3">
                        <span class="text-orange-500 font-bold">{{ product.prix }}</span>
                        <button class="bg-black text-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bouton "Show all Products" -->
        <div class="mt-12 text-center">
            <button @click="showAll = !showAll" class="text-orange-500 font-medium hover:underline">
                {{ showAll ? 'Show less' : 'Show all Products' }} →
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import productsData from '../data/images.json';

// Produit vedette
const featuredProduct = ref(productsData.featured);

// Tous les produits
const allProducts = ref(productsData.products);

// Catégories (à adapter selon vos besoins)
const categories = ['All Products', 'Soins visage', 'Maquillage', 'Accessoires'];
const selectedCategory = ref('All Products');

// Affichage de tous les produits ou seulement 8
const showAll = ref(false);

// Produits à afficher
const displayedProducts = computed(() => {
    const products = selectedCategory.value === 'All Products' 
        ? allProducts.value 
        : allProducts.value.filter(p => p.category === selectedCategory.value);
    
    return showAll.value ? products : products.slice(0, 8);
});
</script>