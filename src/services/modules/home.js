import request from '@/utils/request';

//汽车详情
export let getInfoAndListById = (id)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID:id}})
}
//汽车图片
export let getImageList = ()=>{
    return request('/v2-car-getImageList.html?SerialID=2593')
}
//汽车颜色
export let getModelImageYearColor=()=>{
    return request('/v2-car-getModelImageYearColor.html?SerialID=2593')
}
//汽车车系
// export let getInfoAndListById=()=>{
//     return request('/v2-car-getInfoAndListById.html?SerialID=2593')
// }


