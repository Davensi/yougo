import instance from './index';
export function askLogin(formData) {
    console.log('登录开始');
    return instance.post('/api/login/',formData)
}

export function askRegister(formData) {
    return instance.post('/api/register/',formData)
}
// /api/getaddress/454 获取用户地址
export function askGetSite(id) {

    return instance.get(`/api/getaddress/${id}/`)
} 
// http://api.w0824.com/api/updateaddress/3 编辑 用户地址
export function askEditSite(id,formData) {
 
    return instance.post(`/api/updateaddress/${id}/`,formData)
}
// 删除 地址
export function askDelSite(id) {
    console.log(id);
    // http://api.w0824.com/api/deladdress/2
    return instance.post(`/api/deladdress/${id}/`)
}
// 增加 地址 
export function askAddSite(id,formData) {
    // http://api.w0824.com/api/addaddress/3
    return instance.post(`/api/addaddress/${id}/`,formData)
}
// 编辑 头发
export function askSetHaderImg(formData) {
    // http://api.w0824.com/api/upload
    return instance.post(`/api/upload/`,formData)
}
 