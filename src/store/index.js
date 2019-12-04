import Vue from 'vue'
import Vuex from 'vuex'
import detail from './modules/detail'
import color from './modules/color'
import Home from './modules/home'
import city from './modules/city'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Home,
    detail,
    color,
    city
  },
  plugins: [creareLogger()]
})