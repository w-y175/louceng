import { getImageList } from '@/services/index'

const state = {

    CarImg: {},
    // colorId:"",
    // carId:"",


}

const mutations = {
    setImg(state, payload) {
        state.CarImg = payload;
    },
    // setColorId(state,payload){
    //     state.colorId=payload
    // },
    // setCarId(state,payload){
    //     state.carId=payload

    // }

}

const actions = {
    async getImageList({ commit },payload){
        let res = await getImageList(payload);
        commit('setImg', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}