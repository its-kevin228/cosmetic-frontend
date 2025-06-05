<template>
    <nav class="fixed top-0 w-full bg-white z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">

                <!-- Logo -->
                <div class="flex-1 flex items-center">
                    <SparklesIcon class="text-orange-500 h-8 w-8 mr-3" />
                    <span class="text-4xl sm:text-5xl font-bold text-orange-500 font-[Festive]">Cosmetics</span>
                </div>

                <!-- Barre de recherche (mobile) -->
                <div class="sm:hidden flex-1 mx-4">
                    <button @click="toggleSearch" class="text-gray-500 hover:text-orange-500 p-2">
                        <MagnifyingGlassIcon class="h-6 w-6 text-orange-500" />
                    </button>
                </div>

                <!-- Navigation centrale -->
                <div class="hidden sm:flex flex-1 justify-center space-x-10 text-lg font-semibold">
                    <router-Link to="/"
                        class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <HomeIcon class="mr-2 h-5 w-5 text-orange-500" />
                        Accueil
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </router-Link>
                    <router-link to="/products"
                        class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <ShoppingBagIcon class="mr-2 h-5 w-5 text-orange-500" />
                        Produits
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </router-link>
                    <router-link to="/about"
                        class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <InformationCircleIcon class="mr-2 h-5 w-5 text-orange-500" />
                        À propos
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </router-link>
                </div>

                <!-- Barre de recherche (desktop) et bouton contact -->
                <div class="hidden sm:flex flex-1 justify-end items-center space-x-5">
                    <div class="relative">
                        <input v-model="searchQuery" type="text" placeholder="Rechercher..."
                            class="pl-11 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-base w-56 transition-all duration-300"
                            :class="{ 'w-72': isSearchFocused }" @focus="isSearchFocused = true"
                            @blur="handleSearchBlur" @keyup.enter="performSearch"
                            @keyup="updateSearchResults">
                        <MagnifyingGlassIcon class="absolute left-4 top-3.5 h-5 w-5 text-orange-500" />
                        
                        <!-- Résultats de recherche (desktop) -->
                        <transition name="fade">
                            <div v-if="showSearchResults && filteredProducts.length > 0" 
                                 class="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
                                <div class="p-3 border-b border-gray-100">
                                    <p class="text-sm text-gray-500">{{ filteredProducts.length }} résultat(s)</p>
                                </div>
                                <div class="divide-y divide-gray-100">
                                    <router-link v-for="product in filteredProducts" :key="product.id" 
                                        :to="`/products?search=${encodeURIComponent(product.nom)}`"
                                        class="flex items-center p-3 hover:bg-orange-50 transition duration-200"
                                        @click="clearSearch">
                                        <div class="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img :src="product.link" :alt="product.nom" class="h-full w-full object-cover">
                                        </div>
                                        <div class="ml-3 flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-800 truncate">{{ product.nom }}</p>
                                            <p class="text-sm text-orange-500">{{ product.prix }}</p>
                                        </div>
                                        <div class="ml-2 flex-shrink-0 text-xs rounded-full px-2 py-1" 
                                             :class="getCategoryClass(product.category)">
                                            {{ product.category }}
                                        </div>
                                    </router-link>
                                </div>
                                <div v-if="filteredProducts.length > 5" class="p-3 border-t border-gray-100 text-center">
                                    <router-link to="/products" 
                                        class="text-orange-500 hover:text-orange-600 text-sm font-medium"
                                        @click="clearSearch">
                                        Voir tous les résultats
                                    </router-link>
                                </div>
                            </div>
                        </transition>
                        
                        <!-- Message "aucun résultat" -->
                        <transition name="fade">
                            <div v-if="showSearchResults && searchQuery && filteredProducts.length === 0" 
                                 class="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-50">
                                <p class="text-gray-500">Aucun résultat pour <span class="font-medium">"{{ searchQuery }}"</span></p>
                            </div>
                        </transition>
                    </div>
                    <router-link to="/contact"
                        class="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-400 transition duration-300 flex items-center text-base font-semibold">
                        <EnvelopeIcon class="mr-2 h-5 w-5 text-white" />
                        Contact
                    </router-link>
                </div>

                <!-- Menu burger mobile -->
                <div class="sm:hidden flex items-center">
                    <button @click="toggleMenu" class="text-orange-500 focus:outline-none p-2">
                        <Bars3Icon v-if="!isMenuOpen" class="h-8 w-8 text-orange-500" />
                        <XMarkIcon v-else class="h-8 w-8 text-orange-500" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Barre de recherche mobile (slide down) -->
        <transition name="slide-down">
            <div v-if="isSearchOpen" class="sm:hidden bg-white px-4 py-4 shadow-md">
                <div class="relative">
                    <input v-model="mobileSearchQuery" type="text" placeholder="Rechercher des produits..."
                        class="w-full pl-11 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-base"
                        @keyup.enter="performMobileSearch"
                        @keyup="updateMobileSearchResults">
                    <MagnifyingGlassIcon class="absolute left-4 top-3.5 h-5 w-5 text-orange-500" />
                    
                    <!-- Résultats de recherche mobile -->
                    <transition name="fade">
                        <div v-if="showMobileSearchResults && filteredMobileProducts.length > 0" 
                             class="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
                            <div class="divide-y divide-gray-100">
                                <router-link v-for="product in filteredMobileProducts" :key="product.id" 
                                    :to="`/products?search=${encodeURIComponent(product.nom)}`"
                                    class="flex items-center p-3 hover:bg-orange-50 transition duration-200"
                                    @click="clearMobileSearch">
                                    <div class="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                        <img :src="product.link" :alt="product.nom" class="h-full w-full object-cover">
                                    </div>
                                    <div class="ml-3 flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-800 truncate">{{ product.nom }}</p>
                                        <p class="text-sm text-orange-500">{{ product.prix }}</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </transition>
                    
                    <!-- Message "aucun résultat" mobile -->
                    <transition name="fade">
                        <div v-if="showMobileSearchResults && mobileSearchQuery && filteredMobileProducts.length === 0" 
                             class="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-50">
                            <p class="text-gray-500">Aucun résultat pour <span class="font-medium">"{{ mobileSearchQuery }}"</span></p>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>

        <!-- Menu mobile avec animation -->
        <transition name="fade-slide">
            <div v-if="isMenuOpen" class="sm:hidden bg-white px-4 pb-4 space-y-4 font-semibold shadow-md text-lg">
                <router-link to="/"
                    class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center"
                    @click="closeMenu">
                    <HomeIcon class="mr-3 h-5 w-5 text-orange-500" />
                    Accueil
                </router-link>
                <router-link to="/products"
                    class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center"
                    @click="closeMenu">
                    <ShoppingBagIcon class="mr-3 h-5 w-5 text-orange-500" />
                    Produits
                </router-link>
                <router-link to="/about"
                    class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center"
                    @click="closeMenu">
                    <InformationCircleIcon class="mr-3 h-5 w-5 text-orange-500" />
                    À propos
                </router-link>
                <router-link to="/contact" 
                    class="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition duration-300 flex items-center justify-center font-semibold text-base mt-2"
                    @click="closeMenu">
                    <EnvelopeIcon class="mr-2 h-5 w-5 text-white" />
                    Contact
                </router-link>
            </div>
        </transition>
    </nav>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
    SparklesIcon,
    MagnifyingGlassIcon,
    HomeIcon,
    ShoppingBagIcon,
    InformationCircleIcon,
    EnvelopeIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/vue/24/outline'
import productData from '../data/images.json'

const router = useRouter()
const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isSearchFocused = ref(false)
const searchQuery = ref('')
const mobileSearchQuery = ref('')
const showSearchResults = ref(false)
const showMobileSearchResults = ref(false)
const searchDebounceTimeout = ref<number | null>(null)
const mobileSearchDebounceTimeout = ref<number | null>(null)

// Données des produits
const allProducts = [...productData.featured, ...productData.products]

// Fonctions de recherche
const filteredProducts = computed(() => {
    if (!searchQuery.value) return []
    
    const query = searchQuery.value.toLowerCase().trim()
    return allProducts.filter(product => {
        return product.nom.toLowerCase().includes(query) ||
               (product.category && product.category.toLowerCase().includes(query))
    }).slice(0, 8) // Limiter à 8 résultats pour l'affichage
})

const filteredMobileProducts = computed(() => {
    if (!mobileSearchQuery.value) return []
    
    const query = mobileSearchQuery.value.toLowerCase().trim()
    return allProducts.filter(product => {
        return product.nom.toLowerCase().includes(query) ||
               (product.category && product.category.toLowerCase().includes(query))
    }).slice(0, 5) // Limiter à 5 résultats pour mobile
})

// Gestion des classes pour les catégories
function getCategoryClass(category: string) {
    if (category === 'Soins visage') return 'bg-blue-100 text-blue-800'
    if (category === 'Maquillage') return 'bg-pink-100 text-pink-800'
    if (category === 'Accessoires') return 'bg-green-100 text-green-800'
    return 'bg-gray-100 text-gray-800'
}

// Debounce pour la recherche (desktop)
function updateSearchResults() {
    if (searchDebounceTimeout.value) {
        clearTimeout(searchDebounceTimeout.value)
    }
    
    searchDebounceTimeout.value = setTimeout(() => {
        showSearchResults.value = searchQuery.value.length > 0
    }, 300)
}

// Debounce pour la recherche (mobile)
function updateMobileSearchResults() {
    if (mobileSearchDebounceTimeout.value) {
        clearTimeout(mobileSearchDebounceTimeout.value)
    }
    
    mobileSearchDebounceTimeout.value = setTimeout(() => {
        showMobileSearchResults.value = mobileSearchQuery.value.length > 0
    }, 300)
}

// Exécuter la recherche (desktop)
function performSearch() {
    if (searchQuery.value.trim() === '') return
    router.push(`/products?search=${encodeURIComponent(searchQuery.value)}`)
    clearSearch()
}

// Exécuter la recherche (mobile)
function performMobileSearch() {
    if (mobileSearchQuery.value.trim() === '') return
    router.push(`/products?search=${encodeURIComponent(mobileSearchQuery.value)}`)
    clearMobileSearch()
    isSearchOpen.value = false
}

// Gérer le blur du champ de recherche
function handleSearchBlur() {
    isSearchFocused.value = false
    // Attendre un peu avant de masquer les résultats (pour gérer les clics sur les résultats)
    setTimeout(() => {
        showSearchResults.value = false
    }, 200)
}

// Effacer la recherche (desktop)
function clearSearch() {
    searchQuery.value = ''
    showSearchResults.value = false
}

// Effacer la recherche (mobile)
function clearMobileSearch() {
    mobileSearchQuery.value = ''
    showMobileSearchResults.value = false
    isSearchOpen.value = false
}

// Toggle menu mobile
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    if (isSearchOpen.value) isSearchOpen.value = false
}

// Toggle recherche mobile
function toggleSearch() {
    isSearchOpen.value = !isSearchOpen.value
    if (isMenuOpen.value) isMenuOpen.value = false
}

// Fermer le menu mobile
function closeMenu() {
    isMenuOpen.value = false
}

// Nettoyage des timeouts
watch(() => searchQuery.value, (newVal) => {
    if (newVal === '') {
        showSearchResults.value = false
    }
})

watch(() => mobileSearchQuery.value, (newVal) => {
    if (newVal === '') {
        showMobileSearchResults.value = false
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(5px);
}
</style>