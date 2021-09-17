import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagos from '../views/Pagos.vue'
import Pagos_movil from '../views/Pagos-movil.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pagos',
    component: Pagos
  },
  {
    path: '/movil',
    name: 'Pagos-movil',
    component: Pagos_movil
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
