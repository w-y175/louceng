import request from '@/utils/request';

export let getImageList = (params) => {
    return request('/v2-car-getImageList.html',{params})
}
