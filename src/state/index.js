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
        goods: [],
        checkAll: false,
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
        // 购物车 增加
        addGoodsCar(state, goods) {
            const index = state.goods.findIndex(item => item.goodsId == goods.goodsId);
            // 判断商品是否存在 存在则加数量 没则添加

            if (index === -1) {
                state.goods.push(goods)

            } else {
                state.goods[index].selectedNum += goods.selectedNum;

            }

            // console.log(goods, '增加商品');
        },
        // 当前关键字
        historyShow(state, value) {
            state.historyShow = value
            // console.log('是否异常', value);
        },
        // 删除历史记录
        delWord(state) {
            state.searchWordHistory = [];
            if (state.searchWordHistory) {
                // state.searchWordHistory.push('空')
            }
        },
        // 购物车 选中状态
        setCheck(state, { val, index }) {
            state.goods[index].check = !state.goods[index].check;
            const sattus = state.goods.every(({ check }) => check);
            state.checkAll = sattus;

        },
        // 增加购买数量
        setNum(state, { val, index }) {
            // 添加 数量
            state.goods[index].selectedNum = val;

        },
        // 全选 反选
        setAllCheck(state) {
            state.checkAll = !state.checkAll;
            state.goods.forEach(item => {
                item.check = state.checkAll
                // console.log(item.check,'item.check');
            })
            // console.log('setAllCheck却反', state.checkAll);
        },
        // 删除一个商品  splice
        delGoodsItem(state, index) {
            state.goods.splice(index, 1)
        }

    },
    getters: {
        ownGoodsNum(state) {
            const nmus = {};
            state.goods.forEach((item, i) => {
                nmus[i] = item.selectedNum;
            });
            console.log(nmus);
            return nmus;
        },
        // 展示的所有 商品选中状态
        ownCheck(state) {
            const checkObj = {};
            state.goods.forEach(({ goodsId, check }, i) => {
                // console.log('赋值', status);
                checkObj[i] = check
            });

            return checkObj
        },
        ownCheckAll(state) {
            const ALL = state.checkAll;
            console.log(ALL, 'ALL');
            return { ALL };
        },
        priceAll(state) {
            const nmu = 100 * 100;
            state.goods.forEach(({ goodsId, check }, i) => {

            });
            return nmu;
        },
        // 计算总价
        ownPrice(state) {
            let inNmu = 0;
            let new$ = 0;
            state.goods.forEach(item => {
                const { selectedNum, sell_price, check, } = item;

                if (check) {
                    new$ = parseInt(selectedNum) * 100;
                    inNmu += sell_price * new$;
                }
            })
            inNmu = inNmu / 100;

            return inNmu;
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()]
})
export default store;