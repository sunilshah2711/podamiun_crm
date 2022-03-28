import { createRouter, createWebHistory } from 'vue-router'
import Dashbord from '../pages/Dashbord.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashbord',
      component: Dashbord
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
