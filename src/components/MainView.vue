<template>
  <div class="scroll-container">
    <section id="home" class="section" ref="homeSection">
      <HeroHome />
    </section>

    <section id="products" class="section" ref="productsSection">
      <ProductsView />
    </section>

    <section id="about" class="section" ref="aboutSection">
      <AboutView />
    </section>

    <section id="contact" class="section" ref="contactSection">
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

const router = useRouter();
const route = useRoute();

// Références aux sections avec typage correct
const homeSection = ref<HTMLElement | null>(null);
const productsSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);

// État pour éviter les boucles d'événements
let isScrollingProgrammatically = false;

// Fonction simple pour obtenir la section à partir du chemin
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
    
    // Réinitialiser l'état après l'animation
    setTimeout(() => {
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
    // Ne pas réagir si on est en train de défiler programmatiquement
    if (isScrollingProgrammatically) return;
    
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const sectionId = entry.target.id;
        const currentPath = sectionId === 'home' ? '/' : `/${sectionId}`;
        
        // Mettre à jour l'URL si nécessaire
        if (route.path !== currentPath) {
          router.push(currentPath).catch(() => {});
        }
        break; // Ne traiter que la première section visible
      }
    }
  }, { threshold: 0.5 });
  
  // Observer toutes les sections
  [homeSection.value, productsSection.value, aboutSection.value, contactSection.value]
    .filter(Boolean) // Éliminer les valeurs null/undefined
    .forEach(section => observer.observe(section as HTMLElement));
  
  return observer;
}

// Surveiller les changements de route
watch(() => route.path, (newPath) => {
  // Ne pas réagir aux changements d'URL pendant le défilement programmatique
  if (!isScrollingProgrammatically) {
    const sectionName = getSectionFromPath(newPath);
    scrollToSection(sectionName);
  }
});

// Variables pour stocker les références d'observateur et de surveillance
let observer: IntersectionObserver | undefined;

onMounted(() => {
  // Configurer l'observateur après que les éléments sont montés
  observer = setupIntersectionObserver();
  
  // Défiler vers la section initiale après un court délai
  setTimeout(() => {
    const initialSection = getSectionFromPath(route.path);
    scrollToSection(initialSection);
  }, 100);
});

onUnmounted(() => {
  // Nettoyer l'observateur à la démontage
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.section {
  min-height: 100vh;
  scroll-margin-top: 80px; /* Ajuster selon la hauteur de votre navbar */
  padding: 20px 0;
}

.scroll-container {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>