import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TrackerList from '../views/TrackerList.vue'
import TrackerDetail from '../views/TrackerDetail.vue'
import About from '../views/About.vue'
import Authenticate from '../views/Authenticate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/trackers/',
    name: 'TrackerList',
    component: TrackerList,
  },
  {
    path: '/trackers/:id',
    name: 'TrackerDetail',
    props: true,
    component: TrackerDetail,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/authenticate',
    name: 'authenticate',
    component: Authenticate,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // redirect to login page if user is not logged in and trying to access a restricted page
  const publicPages = ['/authenticate', '/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/authenticate')
  }

  next()
})

export default router
