import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue'
// import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'

const router = [
    { path: '/', name: 'home', component: AppHome },
    // { path: '/portfolio', name: 'porfolio', component: PortfolioView },
    { path: '/contact', name: 'contact', component: AppContact },
  ]

export default router