
import request from "@/utils/request"
//获取汽车颜色列表
export let getModelImageYearColor=()=>{
    return request("/v2-car-getModelImageYearColor.html?SerialID="+2593)
}