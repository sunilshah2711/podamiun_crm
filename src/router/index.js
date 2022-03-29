import { createRouter, createWebHistory } from 'vue-router'
import Dashbord from '../pages/Dashbord.vue'
import Login from '../pages/Login.vue'
import Workspace from '../pages/Workspace.vue'
import Campaigns from '../pages/Campaigns.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashbord',
      component: Dashbord
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: Workspace
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: Campaigns
    },
  ]
})

export default router
