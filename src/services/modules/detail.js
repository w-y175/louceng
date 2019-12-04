import request from '@/utils/request';

//汽车详情
export let getInfoAndListById = (id) => {
    return request('/v2-car-getInfoAndListById.html', { params: { SerialID: id } })
}



