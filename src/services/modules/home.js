import request from '@/utils/request';

export let setList = ()=>{
    return request('/v1-city-alllist.html')
}
export let setcityIndex = (id)=>{
    return request('/v1-city-alllist.html',{params:{provinceid:id}})
}