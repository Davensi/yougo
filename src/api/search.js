import instance from './index';

export function getWordGoods(k, page = 1, limit = 6) {
    // /api/search?value=苹果&sort=buy&page=1&pagesize=10


    return instance.get(`/api/search?value=${k}&sort=buy&page=${page}&pagesize=${limit}`)
}