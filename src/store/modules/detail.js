import { getInfoAndListById } from '@/services/index'

const state = {
    del: [],//汽车详情
}


const mutations = {
    updateList(state, payload) {
       state.del=payload;
    },
}

const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload);
        // console.log(res.data)
        commit('updateList', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}