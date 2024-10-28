import RolarView from '../views/RolagemView.vue'
import AboutView from '../views/AboutView.vue'
import FichaView from '@/views/FichaView.vue'

export const routes = [
  {
    path: '/',
    name: 'RolarDados',
    component: RolarView
  },
  {
    path: '/ficha',
    name: 'Ficha',
    component: FichaView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]
