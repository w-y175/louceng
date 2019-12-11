import {getModelImageYearColor} from "@/services/index"
const state={
    colorList:{},
    list:[],
}
const mutations={
    setcolorList(state,payload){
        state.colorList=payload 
        let obj=JSON.parse(JSON.stringify(payload))
         let arr=Object.values(obj)
         state.list=arr
         console.log(arr)
    }
}
const actions={
   async getModelImageYearColor({commit},payload){
    let res=await getModelImageYearColor(payload)
    console.log(res.data)
    commit("setcolorList",res.data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}