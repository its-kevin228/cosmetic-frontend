<template>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl md:text-5xl font-black mb-8 text-gray-800">Nos Produits</h1>

        <!-- Filtres -->
        <div class="flex flex-wrap gap-4 mb-8">
            <button v-for="category in categories" :key="category"
                @click="selectedCategory = category === selectedCategory ? 'Tous' : category" :class="[
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
            <div v-for="product in filteredProducts" :key="product.id"
                class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div class="aspect-square overflow-hidden">
                    <img :src="product.image || 'https://placehold.co/300x300?text=Produit'" :alt="product.name"
                        class="w-full h-full object-cover transition-transform hover:scale-105">
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1">{{ product.name }}</h3>
                    <p class="text-gray-500 text-sm mb-3">{{ product.category }}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-orange-500 font-bold">{{ product.price }}€</span>
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
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Données de démonstration
const products = ref([
    { id: 1, name: 'Crème hydratante', category: 'Visage', price: '24.99', image: 'https://placehold.co/300x300?text=Hydratant' },
    { id: 2, name: 'Sérum anti-âge', category: 'Visage', price: '34.99', image: 'https://placehold.co/300x300?text=Sérum' },
    { id: 3, name: 'Gommage corps', category: 'Corps', price: '19.99', image: 'https://placehold.co/300x300?text=Gommage' },
    { id: 4, name: 'Huile de massage', category: 'Corps', price: '29.99', image: 'https://placehold.co/300x300?text=Huile' },
    { id: 5, name: 'Masque purifiant', category: 'Visage', price: '15.99', image: 'https://placehold.co/300x300?text=Masque' },
    { id: 6, name: 'Shampoing nourrissant', category: 'Cheveux', price: '12.99', image: 'https://placehold.co/300x300?text=Shampoing' },
    { id: 7, name: 'Après-shampoing', category: 'Cheveux', price: '14.99', image: 'https://placehold.co/300x300?text=Après-shampoing' },
    { id: 8, name: 'Lotion tonique', category: 'Visage', price: '18.99', image: 'https://placehold.co/300x300?text=Lotion' }
]);

// Catégories
const categories = ['Tous', 'Visage', 'Corps', 'Cheveux'];
const selectedCategory = ref('Tous');

// Filtrage des produits
const filteredProducts = computed(() => {
    if (selectedCategory.value === 'Tous') {
        return products.value;
    }
    return products.value.filter(product => product.category === selectedCategory.value);
});
</script>