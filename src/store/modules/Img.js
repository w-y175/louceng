import {getImageList,getPictureList} from "@/services/index"
const state={
    allcarimgList:{},
    colorId:"",
    carId:"",
    SerialID:"",//车系id
    ImageID:6,//图片id
    Page:1,//第几页
    PageSize:30,//每页条数
    current:'',
    imageList:[],
    count:''
    
}
const mutations={
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    },
    setColorId(state, payload){
        state.colorId = payload;
    },
    setCarId(state, payload){
      state.carId = payload;
    },
    setImageId(state, payload){
      state.ImageID = payload;
      console.log(state.ImageID)
     },
     setImageList(state, payload){
            state.count = payload.Count;
            payload.ImageID && (state.ImageID = payload.ImageID);
            // 实现上拉加载
            if (state.page == 1){
                state.imageList = payload.List;
            }else{
                state.imageList = state.imageList.concat(payload.List);
            }
            // console.log(state.imageList)
        },
        // 修改当前分页
        setPage(state, payload){
            state.page = payload;
        },
        // 设置当前轮播的图片下标
        setCurrent(state, payload){
            state.current = payload;
        },
        
       
}
const actions={
    async getImageList({commit,state},payload){
        state.SerialID = payload
        
        let params = {SerialID:payload};
        // 判断是否选择颜色
        if (state.colorId){
          params.ColorID = state.colorId;
        }
        // 判断是否选择车款
        if (state.carId){
          params.CarId = state.carId;
        }
        let res=await getImageList(params);
        commit("setAllcarimgList",res.data);
    },
    
    async getPictureList({commit, state}, payload){
        console.log(payload)
        if (payload){
            commit('setPage', payload);
        }

        let params = {
            SerialID: state.SerialID,
            ImageID: state.ImageID,
            Page: state.Page,
            PageSize: state.PageSize
        }
        console.log(params)

        let res = await getPictureList(params);
        console.log("res",res.data)
        let {Count, List} = res.data;
        commit('setImageList', {Count, List});
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}