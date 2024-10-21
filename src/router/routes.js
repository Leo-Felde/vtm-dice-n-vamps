import HomeView from '../views/HomeView.vue'
import CriarView from '../views/CriarView.vue'
import RolarView from '../views/RolagemView.vue'
import AboutView from '../views/AboutView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/criar',
    name: 'CriarVampiro',
    component: CriarView
  },
  {
    path: '/rolar',
    name: 'RolarDados',
    component: RolarView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]
