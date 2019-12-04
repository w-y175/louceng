import { getModelImageYearColor } from '@/services/index'

const state = {

    color: {},//汽车颜色
}

const mutations = {
    upColor(state, payload) {
        state.color = payload;
    },

}

const actions = {
    async  getModelImageYearColor({ commit }, payload) {
        let res = await getModelImageYearColor();
        commit('upColor', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}