import { getDealerList } from '@/services/index'

const state = {
    // 经销商数据
    dealerList:[]
}

const mutations = {
    setDealerList(state, payload) {
        state.dealerList = payload;
    },

}

const actions = {
    async  getDealerList({ commit }, payload) {
        let res = await getDealerList(payload);
        commit('setDealerList', res.data.list);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}