import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Rentals from './components/Rentals.vue'
import Services from './components/Services.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: Rentals
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    }
  ]
})