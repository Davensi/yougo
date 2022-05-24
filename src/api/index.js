import axios from 'axios';

import {
    Toast
} from "vant";
import router from '../router'
import store from '../state';

const instance = axios.create({
    baseURL: 'http://api.w0824.com',
    timeout: 6000,
});

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        Toast.clear()
        // 如果 token 验证失败 返回40001
        if (response.data.status === 40001) {
            console.log('是时候打回去了');

            store.commit('clearUserInfo')
            // router.replace({
            //     path: "/login",
            //     query: {
            //         // 拿到被拦截的 页面方便 跳回去
            //         redirect: router.currentRoute.fullPath
            //     }
            // });
            return;
        }
        // 直接 返回 data 数据
        return response.data;
    },
    // 当 错误 时的 回调
    function (error) {
        Toast.clear()
        // console.log("响应错误");
        return Promise.reject(error);
    }
);

// 添加请求拦截器
instance.interceptors.request.use(
    // 发送 请求 前的回调 可以设置 响应头和一下操作
    function (config) {
        //设置请求头，告诉服务端不要缓存，获取最新数据
        config.headers['If-Modified-Since'] = 0;
        // config.request.status = 200;
        // 开启loading
        Toast.loading({
            message: "加载中",
            forbidClick: true
        });
        // 设置超时时间
        config.timeout = 10000;

        if (store.state.token) {
            // 设置响应头 交给 服务器校验 token 是否正确
            config.headers['token'] = store.state.token;
            // console.log('很好你有 设置比对');
        }
        return config;
    },
    // 当 错误 时的 回调
    function (error) {
        // console.log("请求错误");

        return Promise.reject(error);
    }
);

export default instance;