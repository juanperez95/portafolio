import { createRouter, createWebHistory } from 'vue-router'
import SobreMi from '../views/SobreMi.Vue'
import MisHerramientas from '../views/MisHerramientas.vue'
import MisMetas from '../views/MisMetas.vue'

const routes = [
  {
    path: '/AboutMe',
    name: 'Home',
    component: SobreMi
  },
  {
    path: '/MisHerramientas',
    name: 'Herramientas',
    component: MisHerramientas
  },
  {
    path: '/MasSobreMi',
    name: 'MisMetas',
    component: MisMetas
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
