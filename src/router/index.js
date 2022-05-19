
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue');
const ShopCar = () => import('../views/shopcar/ShopCar.vue');
const User = () => import('../views/user/User.vue');
const Index = () => import('../views/Index.vue');
const GoodsDetail = () => import('../views/goods/GoodsDetail.vue');
const GoodList = () => import('../views/goods/GoodsList.vue');
const Search = () => import('../views/search/Search.vue');
const SearchList = () => import('../views/search/children/SearchList');

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home/index",
  },
  // 商品详情
  {
    path: "/goodsdetail/:id",
    // Goodsdetail
    component: GoodsDetail,
    meta: {
      title: "xxx商品",
      showNavBar: true,

    }
  },
  // 商品列表页
  {
    path: "/goodlist",
   
    component: GoodList,
    meta: {
      title: "欢迎抢购",
      showNavBar: true,

    }
  },
  {
    path: "/search",

    component: Search,
    meta: {
      title: "搜索",
      historyShow: true,

    },

    children: [
      {
        path: "list",
        component: SearchList,
        meta: {
          historyShow: true,
          title: "为您找到",
        },
      },

    ],
  },

  {
    path: "/home",
    component: Index,
    children: [
      {
        path: "index",
        component: Home,
        meta: {
          title: "我是首页 ",
          index: 0,
          showNavBar: false,

        }
      },
      {
        path: "shopcar",
        component: ShopCar,
        meta: {
          title: "我的购物车 ",
          index: 1,
          showNavBar: true,

        }
      },
      {
        path: "user",
        component: User,
        meta: {
          title: "我的",
          index: 2,

        }
      },
    ]
  },

]

const router = new VueRouter({
  routes
})
NProgress.configure({
  showSpinner: false
});

// 前守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});


// 后守卫
router.afterEach((to, from) => {
  NProgress.done();
})

export default router
