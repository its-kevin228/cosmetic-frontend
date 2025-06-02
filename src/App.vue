<template>
  <div class="font-sans">
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
    <Transition name="fade-in" appear>
      <div v-if="!isLoading" class="page-content">
        <AppNavbar />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import AppNavbar from './components/AppNavbar.vue';
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Simuler un délai de chargement ou attendre que des ressources soient chargées
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); 
});
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 9999;
}

.loader {
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
}

.loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

.loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}

/* Animation de transition */
.fade-in-enter-active {
  transition: all 0.8s ease;
}

.fade-in-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Style optionnel pour le contenu de la page */
.page-content {
  min-height: 100vh;
  width: 100%;
}
</style>