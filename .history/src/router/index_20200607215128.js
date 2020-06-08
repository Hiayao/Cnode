import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/detail/${id}',
        name: 'Detail',
        component: () => import('../views/Layout/Detail')
      }
    ]
  },
  {
    path: '*',
    name: 'Err',
    component: () => import('../views/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
