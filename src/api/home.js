import instance from './index';

export function askSwipe(){
    return instance.get('api/getlunbo')
}
export function askGoods(page,limit){
    return instance.get(`/api/recommend?page=${page}&limit=${limit}`)
}