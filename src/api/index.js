import axios from 'axios';
import Vue from 'vue';

Vue.use(axios)
const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 6000,

});

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {

        // 直接 返回 data 数据
        // console.log(response.data, 'shuj');
        return response.data;
    },
    // 当 错误 时的 回调
    function (error) {
        // console.log("响应错误");
        return Promise.reject(error);
    }
);

// 添加请求拦截器
instance.interceptors.request.use(
    // 发送 请求 前的回调 可以设置 响应头和一下操作
    function (config) {
        // config.request.status = 200;
        // console.log("请求拦截器");

        // 设置超时时间
        config.timeout = 10000;
        // 开启loading
        config.data = `{a:1}`
        return config;
    },
    // 当 错误 时的 回调
    function (error) {
        // console.log("请求错误");

        return Promise.reject(error);
    }
);

export default instance;