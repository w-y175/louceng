import { getImageList } from '@/services/index'

const state = {

    CarImg: {},
}

const mutations = {
    setImg(state, payload) {
        state.CarImg = payload;
    },

}

const actions = {
    async getImageList({ commit },payload){
        let res = await getImageList();
        commit('setImg', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}