import request from '@/utils/request';

export let getImageList = (id) => {
    console.log(id)
    return request('/v2-car-getImageList.html',{ params: { SerialID: id } })
}
