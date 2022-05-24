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
        <!-- <p>{{ detali.zhaiyao }}</p> -->
        <div v-html="detali.content" class="datail-content"></div>
      </div>
    </div>
    <!-- sku -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="detali.id"
      :hide-stock="sku.hide_stock"
      :reset-stepper-on-hide="true"
      :show-add-cart-btn="showAddCartBtn"
      @add-cart="skuAddCart"
      @buy-clicked="skuBuy"
      :quota="10"
    >
      <template #sku-messages>
        <div class="card">
          <van-divider>商品信息</van-divider>
          <div>货号: {{ detali.goods_no }}</div>
          <div>商品库存:{{ detali.stock_quantity }}</div>
          <div>上线时间:{{ detali.add_time }}</div>
        </div>
      </template>
    </van-sku>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickIcon"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="buyBtnClick"
      />
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
      show: false,
      showAddCartBtn: true,
      sku: {
        // 数据结构见下方文档
        tree: [],
        price: "8119.00", // 默认价格（单位元）
        stock_num: 18, // 商品总库存
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: "",
        price: "1256",
      },
    };
  },
  methods: {
    async _askGoodsDetailImg() {
      const { message } = await askGoodsDetailImg(this.id);
      this.swipe = message;
      this.img = message.map(({ src }) => src);
      // 商品描述 信息 赋值
      this.goods.picture = message.length && message[0].src;
    },
    async _askGoodsDetail() {
      const { message } = await askGoodsDetail(this.id);
      this.detali = message;
      // 修改当前详情的 标题
      document.title = this.detali.title;
      // 把当前价格赋值 给商品信息
      this.sku.price = this.detali.market_price;
      // 赋值 商品信息的库存
      this.sku.stock_num = this.detali.stock_quantity;
    },
    imgDetail(index) {
      // 点击时预览对应的 img
      ImagePreview({ images: this.img, startPosition: index });
    },
    onClickIcon() {
 
      this.show = true;
      this.showAddCartBtn = true;
    },
    skuAddCart(skuObj) {
      const { goodsId, selectedNum } = skuObj;
      const { title, sell_price } = this.detali;
      const goodsSrc = this.img[0];
      // 加入购物车
      this.$store.commit('addGoodsCar',{
        goodsId,selectedNum,
        title,sell_price,goodsSrc,
        check:true,
        })
      this.show = false;
    },
    skuBuy(skuObj) {
      // DO。。。。
      //  console.log('去结算');
      this.show = false;
    },
    buyBtnClick() {
      // console.log("黑人？？？");
      this.show = true;
      this.showAddCartBtn = false;
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
      font-size: 12px;
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
    font-size: 0.6rem;
    color: rgb(0, 0, 0);
    width: 320px;
  }

  .datail-content {
    margin-bottom: 55px;
    width: 90vw;
    ::v-deep img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>