import request from '@/utils/request';

export let getImageList = () => {
    return request('/v2-car-getImageList.html?SerialID=2593')
}
