import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portfolio', name: 'porfolio', component: PortfolioView },
    { path: '/contact', name: 'contact', component: ContactView },
  ]

  export default router