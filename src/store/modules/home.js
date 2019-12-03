import {getInfoAndListById,getImageList,getModelImageYearColor} from '@/services/index'

const state = {
    del: [],//汽车详情
    list:[],//汽车图片
    color:{},//汽车颜色
}

const mutations = {
    updateList(state, payload){
        state.del = payload;
    },
    uplist(state,payload){
        state.list=payload

    },
    upcolor(state,payload){
        console.log(payload)
        state.color=payload

    }
}

const actions = {
    async getInfoAndListById({commit}, payload){
        let res = await getInfoAndListById(payload);
     commit('updateList', res.data);
    },
    async getImageList({commit}, payload){
        let res = await getImageList(payload);
        // console.log('res...',res);
        commit('uplist', res.data);
    },
    async getModelImageYearColor({commit}, payload){
        console.log(111)
        let res = await getModelImageYearColor();
        console.log(res.data);
        commit('upcolor', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}