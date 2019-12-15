import { setList,setcityIndex } from '@/services/index'

const state = {
    // 省市列表
  cityList: [],
    // 城市数据
  cityIndex: [],
  // 默认北京id
  cityCurrentId:'201'
}

const mutations = {
    // 省市列表
  getList(pay, load) {
    pay.cityList = load;
  },
  // 获取对应城市
  getcityIndex(pay, load) {
    pay.cityIndex = load
  },
}

const actions = {
    async setList({commit}) {
        let res = await setList();
        commit('getList', res.data);
      },
      async setcityIndex({commit}, payload) {
        let res = await setcityIndex(payload);
        commit('getcityIndex', res.data);
      },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}