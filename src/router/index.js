
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue');
const ShopCar = () => import('../views/shopcar/ShopCar.vue');
const User = () => import('../views/user/User.vue');
const Index = () => import('../views/Index.vue');
const Goodsdetail = () => import('../views/goods/GoodsDetail.vue');
const Search = () => import('../views/search/Search.vue');
const SearchList = () => import('../views/search/children/SearchList');

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home/index",
  },
  {
    path: "/goodsdetail",
    // Goodsdetail
    component: Goodsdetail,
    meta: {
      title: "xxx商品",
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

export default router
