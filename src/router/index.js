
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue');
const ShopCar = () => import('../views/shopcar/ShopCar.vue');
const User = () => import('../views/user/User.vue');
const Login = () => import('../views/user/Login.vue');
const Register = () => import('../views/user/Register.vue');
const Site = () => import('../views/user/children/Site.vue');
const AddSite = () => import('../views/user/children/AddSite.vue');
const EditSite = () => import('../views/user/children/EditSite.vue');
const Index = () => import('../views/Index.vue');
const GoodsDetail = () => import('../views/goods/GoodsDetail.vue');
const GoodList = () => import('../views/goods/GoodsList.vue');
const Search = () => import('../views/search/Search.vue');
const SearchList = () => import('../views/search/children/SearchList');
import { Notify } from 'vant';


import store from '../state'
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
      loginPower: true,

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
    path: "/login",
    component: Login,
    meta: {
      title: "欢迎登录 ",
      showNavBar: true,
    }
  },
  {
    path: "/site",
    component: Site,
    meta: {
      title: "地址管理 ",
      showNavBar: true,
      loginPower: true,
    }
  },
  {
    path: "/addsite",
    component: AddSite,
    meta: {
      title: "地址管理",
      showNavBar: true,
      loginPower: true,

    }
  },
  {
    // 编辑地址
    path: "/site/:siteMsg",
    component: EditSite,
    meta: {
      title: "修改地址",
      showNavBar: true,
      loginPower: true,
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      title: "欢迎注册 ",
      showNavBar: true,
    }
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
  // loginPower
  if (to.meta.loginPower) {
    if (store.state.token) {
      // !store.state.token
      console.log('有的');
    } else {
      Notify({ type: 'success', message: '亲请先登录' });
      router.push("/login?redirect=" + to.fullPath)

    }

  } else {

  }

  next();
});


// 后守卫
router.afterEach((to, from) => {
  NProgress.done();
})

export default router
