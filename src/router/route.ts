import { createRouter, createWebHistory } from 'vue-router';
import HeroHome from '../components/HeroHome.vue';
import AboutView from '../components/AboutView.vue';
import ProductsView from '../components/ProductsView.vue';
import ContactView from '../components/ContactView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroHome
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Toujours défiler vers le haut lors du changement de page
    return { top: 0 }
  },
});

export default router;