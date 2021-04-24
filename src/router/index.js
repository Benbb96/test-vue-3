import { createRouter, createWebHistory } from 'vue-router'
import TrackerList from '../views/TrackerList.vue'
import TrackerDetail from '../views/TrackerDetail.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'TrackerList',
    component: TrackerList,
  },
  {
    path: '/tracker/:id',
    name: 'TrackerDetail',
    props: true,
    component: TrackerDetail,
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
