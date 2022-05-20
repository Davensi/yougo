<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="8000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipe" :key="item.src">
        <van-image
          height="17rem"
          lazy-load
          :src="item.src"
          @click="imgDetail(index)"
        />
      </van-swipe-item>
    </van-swipe>

    <div class="datail">
      <div class="title">
        <span class="price-ioc">¥</span>
        <div class="price">{{ detali.market_price }}</div>
      </div>
      <div class="activity">
        <div class="text">预计获得200优币</div>
        <div class="look">查看</div>
      </div>
      <van-divider />
      <div class="datail-title">{{ detali.title }}</div>
      <van-divider dashed>描述</van-divider>
      <div class="datail-text">
        <p>{{ detali.zhaiyao }}</p>
        <div v-html="detali.content" class="datail-content"></div>
      </div>
    </div>
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
import { ImagePreview } from "vant";
import Vue from "vue";
Vue.use(ImagePreview);

export default {
  data() {
    return {
      active: 1,
      id: this.$route.params.id,
      swipe: [],
      detali: [],
      img: [],
    };
  },
  methods: {
    _askGoodsDetail() {},
    async _askGoodsDetailImg() {
      const { message } = await askGoodsDetailImg(this.id);
      this.swipe = message;
      this.img = message.map(({ src }) => src);
      
    },
    async _askGoodsDetail() {
      const { message } = await askGoodsDetail(this.id);
      this.detali = message;
      document.title = this.detali.title;
      // console.log(this.detali, "详情");
    },
    imgDetail(src) {
      // console.log("77", src);
      ImagePreview({ images: this.img, startPosition: src });
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
  right: 0;
  bottom: 0;
  left: 0;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  // background-color: #39a9ed;
}
.datail {
  margin-top: 10px;
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100vw;
  overflow: hidden;
  .title {
    display: flex;
    font-size: 16px;
    margin: 5px 0px;
    .price {
      font-size: 20px;
      color: red;
      font-weight: 600;
    }
    .price-ioc {
      color: rgb(183, 19, 19);
    }
  }
  .activity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    height: 35px;
    background: #fff0e5;
    border-radius: 5px;
    margin: 12px 0px;
    .text {
      padding: 0px 4px;
      font-size: 14px;
      color: #ff6900;
      border-radius: 5px;
      border: 1px solid #ff6900;
      border-radius: 2px;
    }
    .look {
      padding: 2px 6px;
      align-content: center;
      background: #ff6900;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
    }
  }
  .datail-title {
    font-weight: 700;
    font-size: 0.8rem;
  }
  .datail-text {
    text-align: center;
    font-size: 0.6rem;
    color: rgb(0, 0, 0);
    width: 320px;
  }

  .datail-content {
    width: 90vw;
    ::v-deep img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>