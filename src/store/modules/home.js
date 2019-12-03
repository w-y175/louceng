import {setList,setcityIndex} from '@/services/index';

const state = {
     // 省市列表
    cityList:[],
    //  省市id
    id:'',
    // 城市数据
    cityIndex:[],
    // 车系ID
    carID:'',
    titleEle:'北京'
}   

const mutations = {
    // 省市列表
    getList(pay,load){
        pay.cityList = load;
        // console.log(pay.cityList)
    },
        // 获取对应城市
    getcityIndex(pay,load){
      pay.cityIndex = load
    },
    // 获取省市ID
    getId(pay,load){
        pay.id = load;
        // console.log(pay.id)
    },
      // 切换城市
      getTitle(pay,load){
        pay.titleEle = load;
    },
      // 获取车系ID
      getcarID(pay,load){
        pay.carID = load;
    }
}

const actions = {
    async setList({commit}){
        let res = await setList()
          commit('getList',res.data.data);
    },
    async setcityIndex({commit},payload){
        let res = await setcityIndex()
        let id = this.state.id;
            commit('getcityIndex',res.data.data);
      }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}