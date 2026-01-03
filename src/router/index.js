import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const supportedLangs = ['en', 'ar', 'dv']

const routes = [
  {
    path: '/',
    redirect: '/en'
  },
  {
    path: '/:lang',
    name: 'home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      const lang = to.params.lang
      if (supportedLangs.includes(lang)) {
        next()
      } else {
        next('/en')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
