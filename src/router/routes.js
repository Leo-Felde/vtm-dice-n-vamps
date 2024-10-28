import HomeView from '../views/HomeView.vue'
import CriarView from '../views/CriarView.vue'
import DebugView from '../views/DebugView.vue'
import RolarView from '../views/RolagemView.vue'
import AboutView from '../views/AboutView.vue'
import FichaView from '@/views/FichaView.vue'

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
    path: '/ficha',
    name: 'Ficha',
    component: FichaView
  },
  {
    path: '/debug',
    name: 'Debugger',
    component: DebugView
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
