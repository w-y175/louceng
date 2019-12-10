import { getImageList } from '@/services/index'

const state = {
 CarImg: [],
    colorId:"",
    carId:"",
   


}

const mutations = {
    setImg(state, payload){
        state.CarImg = payload;
    },
    //颜色
    setColorId(state,payload){
        state.colorId=payload
    },
    //车款
    setCarId(state,payload){
        state.carId=payload

    },
    

}

const actions = {
    async getImageList({ commit,state },payload){
        let params={SerialID:payload}
        //判断颜色
        if(state.ColorID){
            params.ColorID=state.ColorID
        }
let res = await getImageList(params);

        commit('setImg', res.data);
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}