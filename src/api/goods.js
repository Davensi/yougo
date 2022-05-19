import instance from './index';

export function askGoodsList(page = 1, limit = 4) {
    // http://api.w0824.com/api/getgoods?pageindex=1&pagesize=6
    return instance.get(`/api/getgoods?pageindex=${page}&pagesize=${limit}`)
}

// 详情
export function askGoodsDetail(id = 88) {
    // /api/getgoodsinfo/87
    return instance.get(` /api/getgoodsinfo/${id}`)
}
// 轮播图
export function askGoodsDetailImg(id = 88) {
    // /api/getthumbimages/87
    return instance.get(`/api/getthumbimages/${id}`)
}