import { createRouter, createWebHistory } from 'vue-router'
import TrackerList from '../views/TrackerList.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'TrackerList',
    component: TrackerList,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
