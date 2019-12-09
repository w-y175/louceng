import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component:()=>import('../views/Img')
  },
  {
    path:"/colour",
    component:()=>import('../views/colour')
  },
  {
    path:'/carstyle',
    component:()=>import('../views/CarStyle')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
