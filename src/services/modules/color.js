
import request from '@/utils/request'; 
//汽车颜色
export let getModelImageYearColor=()=>{
   
    return request('/v2-car-getModelImageYearColor.html?SerialID=2593')
}