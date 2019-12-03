import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import home from './modules/home'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 省市列表数据
    cityList:[],
    cityIndex:[]
  },
  mutations: {
    getList(pay,load){
      // 省市列表数据
      pay.cityList = load;
      console.log(pay.cityList)
    },
    getCityIndex(pay,load){
      
    }
  },
  actions: {
    setList({commit}){
      axios.get('https://baojia.chelun.com/v1-city-alllist.html').then(res=>{
        commit('getList',res.data.data);
    })
    }
  },
  modules: {
    home
  },
  plugins: [creareLogger()]
})
