import {getImageList,getCategoryImageList} from "@/services/index"
const state={
    allcarimgList:{},
    colorId:"",
    carId:"",
    imgeList:[],//分类图片列表
    SerialID:'',//车系ID
    ImageID:'',//分类id
    count:'',//当前分类图片总数
    page:1,//当前分页
    pageSize:30//每页数量
}
const mutations={
  //改变seriaiId
  setSerialId(state,payload){
    state.SerialID=payload

  },//详情数据
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    },
    //汽车颜色
    setColorId(state, payload){
        state.colorId = payload;
      },
      //汽车车款
      setCarId(state, payload){
        state.carId = payload;
      },
      //图片分类
      setImageId(state,payload){
        state.ImageID=payload

      },
      //修改当前分类图片列表和总数
      setImageList(state,payload){
        state.count=payload.Count
        state.imgeList=payload.List
        
      },
      //当前分页
      setPage(state,payload){
        state.page=payload
        
      }

}
const actions={
    async getImageList({commit},payload){
        let params = {SerialID:payload};
        // 判断是否选择颜色
        if (state.colorId){
          params.ColorID = state.colorId;
        }
        // 判断是否选择车款
        if (state.carId){
          params.CarId = state.carId;
        }
        let res=await getImageList(params)
      
        commit("setAllcarimgList",res.data)
    },
    //图片分类列表
    async getCategoryImageList({commit,state}){
      
      let params={
        SerialID:state.SerialID,
        ImageID:state.ImageID,
        page:state.page,
        pageSize:state.pageSize
        
      }
      let res=await getCategoryImageList(params)
      console.log(res)
let {Count,List}=res.data
commit('setImageList',{Count,List})
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}