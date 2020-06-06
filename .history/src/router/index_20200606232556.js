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
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
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
router.beforeEach((to,form,next)=>{
  if(to.path=='/login'){
    sessionStorage.removeItem("user");
  }
  let user = JSON.parse(sessionStorage.getItem("user"));
  if(!user&&to.path!='/login'){
    next({path:'/login'})
  }else{
    next();
  }
})

export default router
