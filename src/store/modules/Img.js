import { getImageList } from '@/services/index'

const state = {

    CarImg: {},
    colorId:"",
    carId:"",


}

const mutations = {
    setImg(state, payload) {
        state.CarImg = payload;
    },
    setColorId(state,payload){
        state.colorId=payload
    },
    setCarId(state,payload){
        state.carId=payload

    }

}

const actions = {
    async getImageList({ commit },payload){
     
        
        let params={SerialID:payload}
        // 判断是否选择颜色
        if(state.colorId){
            params.ColorID=state.colorId
        }
        //判断是否选择车款
        if(state.carId){
            params.CarId=state.carId

        }

        let res = await getImageList(params);
         console.log(res)
        commit('setImg', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}