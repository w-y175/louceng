import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Img from '../views/Img.vue'
import Colour from '../views/colour'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component: Home
  },
  {
    path:"/detail",
    component:()=>import('../views/detail')
  },
  {
    path:'/inquiryDetail',
    component:()=>import('../views/inquiryDetail/')
  },
  {
    path:'/city',
    component:()=>import('../views/city')
  },
  {
    path:'/img',
    component:Img
  },
  {
    path:"colour",
    component:Colour
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
