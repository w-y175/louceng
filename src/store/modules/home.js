import {getInfoAndListById,getImageList} from '@/services/index'

const state = {
    del: [],
    list:[]
}

const mutations = {
    updateList(state, payload){
        state.del = payload;
    },
    uplist(state,payload){
        state.list=payload

    }
}

const actions = {
    async getInfoAndListById({commit}, payload){
        let res = await getInfoAndListById(payload);
     commit('updateList', res.data);
    },
    async getImageList({commit}, payload){
        let res = await getImageList(payload);
        console.log('res...',res);
        commit('uplist', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}