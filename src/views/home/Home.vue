<template>
  <div class="home">
    <van-search
      v-model="value"
      show-action
      shape="round"
      background="#f2f2f2"
      placeholder="大家都在搜:"
      @focus="toSearch"
    >
      <template #left>
        <img
          src="../../assets/ioc.jpg"
          @click="$router.go(0)"
          class="ioc"
          alt=""
        />
      </template>
      <template #action>
        <router-link to="/home/user">
          <van-icon name="manager-o" color="#9b9b9b" size="1rem" />
        </router-link>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <Swipemin :img="swipe" />
    <!-- 九宫格 -->
    <van-grid :gutter="4">
      <van-grid-item v-for="item in img" :key="item.img">
        <div class="item">
          <img :src="item.img" />
          <div class="text">{{ item.text }}</div>
        </div>
      </van-grid-item>
    </van-grid>
   <ToTop :scroll="100">
     <img src="https://t8.baidu.com/it/u=588276543,27586274&fm=199&app=68&size=f242,150&n=0&g=0n&f=JPEG&fmt=auto?s=EF84C4000E7F3D8E621754C8030090B2&sec=1652979600&t=532b5eb83aedc4badc6835e49e24ea1b" alt="">
   </ToTop>
    <!-- 商品列表 -->
    <GoodsListItem :goods="goods" />
    <GoodsListItem :goods="goods" />
    <GoodsListItem :goods="goods" />
  </div>
</template>

<script>
import Swipemin from "./children/Swipemin.vue";
import GoodsListItem from "./children/GoodsListItem.vue";
import ToTop from "components/ToTop.vue";
import img from "./grid";

import { askSwipe, askGoods } from "../../api/home";
export default {
  data() {
    return {
      active: 1,
      value: "",
      swipe: null,
      goods: null,
      page: 1,
      limit: 6,
      img,
    };
  },
  watch: {
    // $route:{handler:function(newR,lodR){},  immediate:true  }
  },
  methods: {
    toSearch() {
      console.log("跳搜索页");
      this.$router.push("/search");
    },
    async _askSwipe() {
      const { message } = await askSwipe();
      this.swipe = message;
      // console.log(message, "res");
    },
    async _askGoods() {
      const { message } = await askGoods(this.page, this.limit);
      this.goods = message;
      // console.log(message, "res33");
    },
  },
  created() {
    this._askSwipe();
    this._askGoods();
    console.log("开始调用", this.img);
  },

  components: {
    Swipemin,
    GoodsListItem,
    ToTop,
  },
};
</script>

<style lang="scss" scoped>
.ioc {
  width: 30px;
  border-radius: 35%;
  margin-right: 5px;
}
.home {
  background: #f7f6f6;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666;
  width: 70%;
  height: 70%;
  .text {
    margin-top: 6px;
  }

  img {
    width: 50%;
  }
}
</style>