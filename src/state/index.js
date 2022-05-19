import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchWordHistory: [

        ],
        searchWord: '123',
        cpn: "SearchHisory",
        historyShow: true,
    },
    mutations: {
        // 添加关键字
        pushWord(state, text) {
            state.searchWord = text;
            // console.log('传入文字', text);
        },
        // 添加历史
        pushHistory(state, text) {
            state.searchWordHistory.push(text)
            // console.log('传入历史', text);
        },
        // 切换组件
        setCpn(state, text) {
            state.cpn = (text)
            // console.log('传入历史', text);
        },
        historyShow(state, value) {
            state.historyShow = value
            // console.log('是否异常', value);
        },
        delWord(state) {
            state.searchWordHistory = [];
            if (state.searchWordHistory) {
                // state.searchWordHistory.push('空')
            }
        }
    },
    getters: {},
    actions: {},
    modules: {},
    plugins: [createPersistedState()]
})
export default store;