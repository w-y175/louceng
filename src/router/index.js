import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
=======
import Del from '../views/del.vue'
import Input from '../views/Input.vue'
import Img from '../views/Img.vue'

>>>>>>> 371b32144195f89badabbabf992edb9289601a84
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component: Home
  },
  {
<<<<<<< HEAD
    path:"/detail",
    component:()=>import('../views/detail')
  },
  {
    path:'/inquiryDetail',
    component:()=>import('../views/inquiryDetail/')
=======
    path:"/del",
    component:Del
  },
  {
    path:"/input",
    component:Input
  },
  {
    path:"/img",
    component:Img
>>>>>>> 371b32144195f89badabbabf992edb9289601a84
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
