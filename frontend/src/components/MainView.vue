<template>
  <div class="scroll-container">
    <section id="home" class="section" ref="homeSection" data-aos="fade-up">
      <HeroHome />
    </section>

    <section id="products" class="section" ref="productsSection" data-aos="fade-up" data-aos-delay="100">
      <ProductsView />
    </section>

    <section id="about" class="section" ref="aboutSection" data-aos="fade-up" data-aos-delay="100">
      <AboutView />
    </section>

    <section id="contact" class="section" ref="contactSection" data-aos="fade-up" data-aos-delay="100">
      <ContactView />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import HeroHome from './HeroHome.vue';
import ProductsView from './ProductsView.vue';
import AboutView from './AboutView.vue';
import ContactView from './ContactView.vue';
import AOS from 'aos';

const router = useRouter();
const route = useRoute();

// Références aux sections avec typage correct
const homeSection = ref<HTMLElement | null>(null);
const productsSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);

// État pour éviter les boucles d'événements
let isScrollingProgrammatically = false;

// Fonction pour obtenir la section à partir du chemin
function getSectionFromPath(path: string) {
  if (path === '/') return 'home';
  return path.substring(1); // Enlever le slash initial
}

// Fonction pour défiler vers une section spécifique
function scrollToSection(sectionName: string) {
  isScrollingProgrammatically = true;
  
  let targetElement: HTMLElement | null = null;
  
  // Obtenir la référence à la section cible
  switch (sectionName) {
    case 'home':
      targetElement = homeSection.value;
      break;
    case 'products':
      targetElement = productsSection.value;
      break;
    case 'about':
      targetElement = aboutSection.value;
      break;
    case 'contact':
      targetElement = contactSection.value;
      break;
  }
  
  // Défiler vers la section si elle existe
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    
    // Réinitialiser l'état et rafraîchir AOS après l'animation
    setTimeout(() => {
      AOS.refresh(); // Rafraîchir les animations AOS
      isScrollingProgrammatically = false;
    }, 1000);
  } else {
    console.warn(`Section ${sectionName} non trouvée`);
    isScrollingProgrammatically = false;
  }
}

// Observer pour détecter quelle section est visible
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    if (isScrollingProgrammatically) return;
    
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const sectionId = entry.target.id;
        const currentPath = sectionId === 'home' ? '/' : `/${sectionId}`;
        
        if (route.path !== currentPath) {
          router.push(currentPath).catch(() => {});
          
          // Rafraîchir AOS pour les nouveaux éléments visibles
          setTimeout(() => {
            AOS.refresh();
          }, 100);
        }
        break;
      }
    }
  }, { threshold: 0.5 });
  
  [homeSection.value, productsSection.value, aboutSection.value, contactSection.value]
    .filter(Boolean)
    .forEach(section => observer.observe(section as HTMLElement));
  
  return observer;
}

// Surveiller les changements de route
watch(() => route.path, (newPath) => {
  if (!isScrollingProgrammatically) {
    const sectionName = getSectionFromPath(newPath);
    scrollToSection(sectionName);
  }
});

let observer: IntersectionObserver | undefined;

onMounted(() => {
  // Initialiser AOS si ce n'est pas déjà fait dans App.vue
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: false, // Permet aux animations de se répéter à chaque scroll
    mirror: true, // Animations en sortant du viewport aussi
  });
  
  observer = setupIntersectionObserver();
  
  // Défiler vers la section initiale après un court délai
  setTimeout(() => {
    const initialSection = getSectionFromPath(route.path);
    scrollToSection(initialSection);
  }, 300);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.section {
  min-height: 100vh;
  scroll-margin-top: 80px;
  padding: 20px 0;
}

.scroll-container {
  scroll-behavior: smooth;
  overflow : visible;
  position: relative;
  width: 100%;
}

html, body {
 overflow-x: hidden;
 overflow-y: auto;
}
</style>