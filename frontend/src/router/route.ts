import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../components/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/products',
    name: 'products',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    component: MainView
  },
  {
    path: '/contact',
    name: 'contact',
    component: MainView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return false;
  },
});

export default router;