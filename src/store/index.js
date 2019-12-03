import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';
import Home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   // 省市列表
  //   cityList:[],
  //   //  省市id
  //   id:'',
  //   // 城市数据
  //   cityIndex:[],
  //   // 车系ID
  //   carID:'',
  //   titleEle:'北京'
  // },
  // mutations: {
  //    // 省市列表
  //   getList(pay,load){
  //     pay.cityList = load;
  //     // console.log(pay.cityList)
  //   },
  //   // 获取对应城市
  //   getcityIndex(pay,load){
  //     pay.cityIndex = load
  //   },
  //   // 切换城市
  //   getTitle(pay,load){
  //     pay.titleEle = load;
  //   },
  //   // 获取车系ID
  //   getcarID(pay,load){
  //     pay.carID = load;
  //   }
  // },
  // actions: {
  //   setList({commit}){
  //       axios.get('https://baojia.chelun.com/v1-city-alllist.html').then(res=>{
  //         commit('getList',res.data.data);
  //     })
  //   },
  //   setcityIndex({commit}){
  //     let id = this.state.id;
  //     axios.get('https://baojia.chelun.com/v1-city-alllist.html',{params:{provinceid:id}}).then(res=>{
  //         commit('getcityIndex',res.data.data);
  //     })
  //   }
  // },
  modules: {
    Home
  },
  plugins:[createLogger()]
})
