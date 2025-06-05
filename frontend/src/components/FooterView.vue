<template>
    <footer class="bg-gradient-to-b from-transparent to-gray-50 py-12 relative overflow-hidden">
        <!-- Bulles décoratives -->
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div
                class="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-orange-400 opacity-20 blur-xl animate-float-slow">
            </div>
            <div
                class="absolute bottom-1/4 right-[15%] w-24 h-24 rounded-full bg-orange-300 opacity-15 blur-xl animate-float-medium">
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Logo et slogan -->
            <div class="flex flex-col items-center mb-8">
                <span class="text-4xl font-serif italic text-orange-600 mb-2">Cosmetics</span>
                <p class="text-gray-500 text-sm max-w-md text-center">Redéfinissez votre beauté avec nos produits
                    d'exception</p>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex justify-center space-x-6 mb-8">
                <a v-for="(social, index) in socials" :key="index" :href="social.link"
                    class="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md text-gray-700 transition-all duration-300 ease-out relative"
                    :data-network="social.name.toLowerCase()" @mouseenter="hoverEffect($event)">
                    <i :class="social.icon"></i>
                    <span
                        class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity duration-200">{{
                        social.name }}</span>
                </a>
            </div>

            <!-- Navigation -->
            <nav class="mb-8">
                <ul class="flex flex-wrap justify-center gap-6">
                    <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.link"
                            class="text-gray-600 hover:text-orange-600 transition-colors duration-200 relative pb-1"
                            @mouseenter="animateLink($event)">
                            {{ item.text }}
                            <span
                                class="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 ease-out"></span>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Copyright -->
            <div class="text-center text-xs text-gray-400">
                <p>&copy; {{ new Date().getFullYear() }} Cosmetics. Tous droits réservés.</p>
                <div class="mt-2">
                    <a href="#" class="hover:text-orange-500 transition">Mentions légales</a>
                    <span class="mx-2">•</span>
                    <a href="#" class="hover:text-orange-500 transition">Politique de confidentialité</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ModernCosmeticFooter',
    data() {
        return {
            socials: [
                { name: 'TikTok', icon: 'fab fa-tiktok', link: '#' },
                { name: 'Facebook', icon: 'fab fa-facebook-f', link: '#' },
                { name: 'Instagram', icon: 'fab fa-instagram', link: '#' },
                { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: '#' }
            ],
            navItems: [
                { text: 'Accueil', link: '#' },
                { text: 'Produits', link: '#' },
                { text: 'À propos', link: '#' },
                { text: 'Contact', link: '#' }
            ]
        }
    },
    methods: {
        hoverEffect(event) {
            const icons = event.currentTarget.parentElement.children;
            Array.from(icons).forEach(icon => {
                icon.style.transform = 'scale(0.9)';
                icon.style.opacity = '0.7';
            });
            event.currentTarget.style.transform = 'scale(1.1)';
            event.currentTarget.style.opacity = '1';

            setTimeout(() => {
                Array.from(icons).forEach(icon => {
                    icon.style.transform = '';
                    icon.style.opacity = '';
                });
            }, 300);
        },
        animateLink(event) {
            const underline = event.currentTarget.querySelector('span');
            underline.style.width = '100%';
            event.currentTarget.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                event.currentTarget.style.transform = '';
            }, 200);
        }
    }
}
</script>

<style>
@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(2deg);
    }
}

@keyframes float-medium {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-15px) rotate(-2deg);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
}

/* Couleurs des réseaux sociaux au survol */
a[data-network="tiktok"]:hover {
    color: white !important;
    background-color: #EE1D52 !important;
}

a[data-network="facebook"]:hover {
    color: white !important;
    background-color: #1877F2 !important;
}

a[data-network="instagram"]:hover {
    color: white !important;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
}

a[data-network="whatsapp"]:hover {
    color: white !important;
    background-color: #25D366 !important;
}

a:hover span {
    opacity: 1 !important;
}
</style>