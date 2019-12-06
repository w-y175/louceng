
import request from '@/utils/request'; 
//经销商数据
export let getDealerList=({idi,cityCurrentId})=>{
    return request('/v2-dealer-alllist.html',{params:{carId:idi,cityId:cityCurrentId}})
}