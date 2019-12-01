import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Del from '../views/del.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:"/del",
    component:Del
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
