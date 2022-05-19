<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="8000" indicator-color="white">
      <van-swipe-item v-for="item in swipe" :key="item.src">
      <img :src="item.src" alt="">
      </van-swipe-item>
     
    </van-swipe>
    <h1>{{ $route.params.id }}</h1>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { askGoodsDetailImg, askGoodsDetail } from "../../api/goods";

export default {
  data() {
    return {
      active: 1,
      id: this.$route.params.id,
      swipe: [],
    };
  },
  methods: {
    _askGoodsDetail() {},
    async _askGoodsDetailImg() {
      const { message } = await askGoodsDetailImg();
      this.swipe = message;
      console.log(message, "img");
    },
  },
  created() {
    this._askGoodsDetail();
    this._askGoodsDetailImg();
  },
};
</script>

<style lang="scss" scoped>
.van-goods-action {
  position: fixed;
  bottom: 0;
  left: 0;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  // background-color: #39a9ed;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>