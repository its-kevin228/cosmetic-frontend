<template>
    <div class="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-8">
        <!-- Titre et description -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 class="text-4xl md:text-5xl font-black text-gray-800 mb-4 md:mb-0">Produits Phares</h1>
            <p class="text-gray-600 max-w-md text-right">
                Laissez éclater votre beauté avec nos trésors incontournables ! Des rouges à lèvres vibrants aux soins
                délicieusement sensoriels.
            </p>
        </div>

        <!-- Produits vedettes - Boucle sur les 3 premiers produits (sans bouton) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div v-for="(product, index) in featuredProducts" :key="product.id"
                class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div class="aspect-square overflow-hidden relative">
                    <img :src="product.link" :alt="product.nom"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </div>
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-200">{{
                        product.nom }}</h2>
                    <p class="text-orange-500 font-bold">{{ product.prix }}</p>
                </div>
            </div>
        </div>

        <!-- Filtres (optionnel, à adapter selon vos catégories réelles) -->
        <div class="flex flex-wrap gap-4 mb-8">
            <button v-for="category in categories" :key="category"
                @click="selectedCategory = category === selectedCategory ? 'Tous les produits' : category" :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    selectedCategory === category
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                ]">
                {{ category }}
                <span v-if="getCategoryCount(category) > 0" :class="[
                    'ml-2 text-xs rounded-full px-2 py-1 transition-colors duration-200',
                    selectedCategory === category
                        ? 'bg-white/30 text-white'
                        : 'bg-gray-200 text-gray-700'
                ]">
                    {{ getCategoryCount(category) }}
                </span>
            </button>
        </div>

        <!-- Grille de produits (sans icône panier) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="product in displayedProducts" :key="product.id"
                class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div class="aspect-square overflow-hidden relative">
                    <img :src="product.link" :alt="product.nom"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1 group-hover:text-orange-500 transition-colors duration-200">{{
                        product.nom }}</h3>
                    <p class="text-orange-500 font-bold mt-3">{{ product.prix }}</p>
                </div>
            </div>
        </div>

        <!-- Bouton "Show all Products" -->
        <div class="mt-12 text-center">
            <button @click="showAll = !showAll"
                class="text-orange-500 font-medium hover:underline transition-all duration-300 transform hover:translate-x-1 inline-flex items-center">
                {{ showAll ? 'Show less' : 'voir tous les produits' }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transition-transform duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import productsData from '../data/images.json';

// Produit vedette
const featuredProducts = ref(productsData.featured);

// Tous les produits
const allProducts = ref(productsData.products);

// Catégories (à adapter selon vos besoins)
const categories = ['Tous les produits', 'Soins visage', 'Maquillage', 'Accessoires'];
const selectedCategory = ref('Tous les produits');

// Affichage de tous les produits ou seulement 8
const showAll = ref(false);

// Produits à afficher
const displayedProducts = computed(() => {
    const products = selectedCategory.value === 'Tous les produits'
        ? allProducts.value
        : allProducts.value.filter(p => p.category === selectedCategory.value);

    return showAll.value ? products : products.slice(0, 8);
});

// Fonction pour compter les produits par catégorie
function getCategoryCount(category) {
    if (category === 'Tous les produits') {
        return allProducts.value.length;
    }
    return allProducts.value.filter(product => product.category === category).length;
}
</script>