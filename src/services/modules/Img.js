import request from '@/utils/request';

export let getImageList = (params) => {
    return request('/v2-car-getImageList.html',{ params})
}

export let getPictureList = (params) => {
    return request('/v2-car-getCategoryImageList.html',{ params})
}
