<template>
    <nav class="fixed top-0 w-full bg-white z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">

                <!-- Logo -->
                <div class="flex-1 flex items-center">
                    <SparklesIcon class="text-orange-500 h-8 w-8 mr-3"/>
                    <span class="text-4xl sm:text-5xl font-bold text-orange-500 font-[Festive]">Cosmetics</span>
                </div>

                <!-- Barre de recherche (mobile) -->
                <div class="sm:hidden flex-1 mx-4">
                    <button @click="toggleSearch" class="text-gray-500 hover:text-orange-500 p-2">
                        <MagnifyingGlassIcon class="h-6 w-6 text-orange-500"/>
                    </button>
                </div>

                <!-- Navigation centrale -->
                <div class="hidden sm:flex flex-1 justify-center space-x-10 text-lg font-semibold">
                    <router-Link to="/" class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <HomeIcon class="mr-2 h-5 w-5 text-orange-500"/>
                        Accueil
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </ router-Link>
                    <router-link to="/products" class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <ShoppingBagIcon class="mr-2 h-5 w-5 text-orange-500"/>
                        Produits
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </router-link>
                    <router-link to="/about" class="relative group flex items-center transition duration-300 hover:text-orange-500 hover:scale-105 py-2">
                        <InformationCircleIcon class="mr-2 h-5 w-5 text-orange-500"/>
                        À propos
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </router-link>
                </div>

                <!-- Barre de recherche (desktop) et bouton contact -->
                <div class="hidden sm:flex flex-1 justify-end items-center space-x-5">
                    <div class="relative">
                        <input 
                            v-model="searchQuery"
                            type="text" 
                            placeholder="Rechercher..." 
                            class="pl-11 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-base w-56 transition-all duration-300"
                            :class="{'w-72': isSearchFocused}"
                            @focus="isSearchFocused = true"
                            @blur="isSearchFocused = false"
                        >
                        <MagnifyingGlassIcon class="absolute left-4 top-3.5 h-5 w-5 text-orange-500"/>
                    </div>
                    <router-link to="/contact" class="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-400 transition duration-300 flex items-center text-base font-semibold">
                        <EnvelopeIcon class="mr-2 h-5 w-5 text-white"/>
                        Contact
                    </router-link>
                </div>

                <!-- Menu burger mobile -->
                <div class="sm:hidden flex items-center">
                    <button @click="toggleMenu" class="text-orange-500 focus:outline-none p-2">
                        <Bars3Icon v-if="!isMenuOpen" class="h-8 w-8 text-orange-500"/>
                        <XMarkIcon v-else class="h-8 w-8 text-orange-500"/>
                    </button>
                </div>
            </div>
        </div>

        <!-- Barre de recherche mobile (slide down) -->
        <transition name="slide-down">
            <div v-if="isSearchOpen" class="sm:hidden bg-white px-4 py-4 shadow-md">
                <div class="relative">
                    <input 
                        type="text" 
                        placeholder="Rechercher des produits..." 
                        class="w-full pl-11 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-base"
                    >
                    <MagnifyingGlassIcon class="absolute left-4 top-3.5 h-5 w-5 text-orange-500"/>
                </div>
            </div>
        </transition>

        <!-- Menu mobile avec animation -->
        <transition name="fade-slide">
            <div v-if="isMenuOpen" class="sm:hidden bg-white px-4 pb-4 space-y-4 font-semibold shadow-md text-lg">
                <a href="#" class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center">
                    <HomeIcon class="mr-3 h-5 w-5 text-orange-500"/>
                    Accueil
                </a>
                <a href="#" class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center">
                    <ShoppingBagIcon class="mr-3 h-5 w-5 text-orange-500"/>
                    Produits
                </a>
                <a href="#" class="block py-3 text-gray-800 hover:text-orange-500 transition hover:pl-2 flex items-center">
                    <InformationCircleIcon class="mr-3 h-5 w-5 text-orange-500"/>
                    À propos
                </a>
                <button class="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition duration-300 flex items-center justify-center font-semibold text-base mt-2">
                    <EnvelopeIcon class="mr-2 h-5 w-5 text-white"/>
                    Contact
                </button>
            </div>
        </transition>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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

const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isSearchFocused = ref(false)
const searchQuery = ref('')

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    // Ferme la recherche si ouverte
    if(isSearchOpen.value) isSearchOpen.value = false
}

function toggleSearch() {
    isSearchOpen.value = !isSearchOpen.value
    // Ferme le menu si ouvert
    if(isMenuOpen.value) isMenuOpen.value = false
}
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
</style>