import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Del from '../views/del.vue'
import Input from '../views/Input.vue'
import Img from '../views/Img.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
