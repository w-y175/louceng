import request from '@/utils/request';

// 省市
export let setList = ()=>{
    return request('/v1-city-alllist.html')
}
// 城市
export let setcityIndex = (id)=>{
    return request('/v1-city-alllist.html',{params:{provinceid:id}})
}

 //首页车系
export let getCarlist = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}

// 对应车款
export let getCarIndexlist = (id)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID:id}})
}

 //询问低价
 export let getInquiryDetailList = (id)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID:id}})
}
