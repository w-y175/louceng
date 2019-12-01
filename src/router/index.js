import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Del from '../views/del.vue'
import Input from '../views/Input.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
