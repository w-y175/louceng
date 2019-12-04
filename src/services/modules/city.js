import request from '@/utils/request';

// 省市
export let setList = ()=>{
    return request('/v1-city-alllist.html')
}
// 城市
export let setcityIndex = (id)=>{
    return request('/v1-city-alllist.html',{params:{provinceid:id}})
}


