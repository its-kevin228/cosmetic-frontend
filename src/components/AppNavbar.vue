<template>
    <nav class="bg-white fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">

                <div class="flex-1">
                    <span class="text-3xl sm:text-4xl font-bold text-orange-500 font-[Festive]">Cosmetics</span>
                </div>


                <div class="hidden sm:flex flex-1 justify-center space-x-8 font-semibold">
                    <a href="#" class="relative group transition duration-300 hover:text-orange-500 hover:scale-105">
                        Accueil
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" class="relative group transition duration-300 hover:text-orange-500 hover:scale-105">
                        Produits
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" class="relative group transition duration-300 hover:text-orange-500 hover:scale-105">
                        A-propos
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>


                <div class="hidden sm:flex flex-1 justify-end">
                    <button
                        class="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-400 transition duration-300">
                        Contact
                    </button>
                </div>

                <div class="sm:hidden">
                    <button @click="toggleMenu" class="text-orange-500 focus:outline-none">
                        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Menu mobile avec animation -->
        <transition name="fade-slide">
            <div v-if="isMenuOpen" class="sm:hidden bg-white px-4 pb-4 space-y-3 font-semibold shadow-md">
                <a href="#" class="block py-2 text-gray-800 hover:text-orange-500 transition hover:pl-2">Accueil</a>
                <a href="#" class="block py-2 text-gray-800 hover:text-orange-500 transition hover:pl-2">Produits</a>
                <a href="#" class="block py-2 text-gray-800 hover:text-orange-500 transition hover:pl-2">À propos</a>
                <button
                    class="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition duration-300">
                    Contact
                </button>
            </div>
        </transition>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
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
</style>
