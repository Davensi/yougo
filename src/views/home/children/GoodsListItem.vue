<template>
  <div>
    <ul class="item">
      <!-- <li class="header">
        <div class="goods-img-content">
          <img
            style="width: 120px"
            src="https://img.alicdn.com/bao/uploaded/i2/858355019/TB2Ee9ylMJlpuFjSspjXXcT.pXa_!!858355019.png_200x200q90.jpg_.webp"
            alt=""
          />
        </div>
        <div class="goods-text">
          <i class="iconfont icon-ziying1"></i>
          <span class="text">
            六寸手绘创意陶瓷家用小盘子可爱清新吐骨碟子糖果蛋糕点</span
          >
        </div>
        <div class="goods-price-wrap">
          <div class="goods-price goods-buy">¥<a>13.9</a></div>
          <a id="acolor" href="">9人购买</a>
        </div>
      </li> -->

      <li class="header" v-for="item in goods" :key="item.id">
        <div class="goods-img-content">
          <img :src="item.img_url" alt="" />
        </div>
        <div class="goods-text">
          <i class="iconfont icon-ziying1"></i>
          <span class="text"> {{ item.title }}</span>
        </div>
        <div class="goods-price-wrap">
          <div class="goods-price goods-buy">
            ¥<a>{{ item.sell_price }}</a>
          </div>
          <a id="acolor" href="">{{ item.market_price }}人购买</a>
        </div>
      </li>
    </ul>
    <!--

      add_time: (...)
buy: (...)
category_id: (...)
channel_id: (...)
click: (...)
content: (...)
id: (...)
img_url: (...)
likes: (...)
market_price: (...)
sell_price: (...)
title: (...)
user_name: (...)
zhaiyao: (...)
      -->
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "css/rem.scss";
li {
  list-style: none;
}

.item {
  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 20px;
  width: rem(704);
   box-sizing: border-box;
  background: #f7f6f6;
}

.header {
 
  margin-top: 20px;
  width: 48%;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  border-radius: 2%;
}

#acolor {
  color: #999999;
  font-size: 12px;
}

.goods-price {
  font-size: 18px;
  color: #e1251b;
  font-weight: 700;
  height: 22px;
}

.goods-price::after {
  content: "";
  color: #999;
  font-size: 14px;
}

.goods-buy::after {
  content: "";
  color: #999;
  font-size: 14px;
}

.buylist2::after {
  content: "";
  color: #999;
  font-size: 14px;
}

.goods-img-content {
  width: 100%;
  height: 128px;
  margin: auto;
  transform: scale(0.9);
}
.goods-img-content img {
  border-radius: 10px;
  width: rem(188);
}

.goods-text {
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 37px;
  width: 160px;
  font-size: 14px;
  -webkit-line-clamp: 1;
  color: #000;
}

body {
  background: #ccc;
}

.aover {
  background: #e1251b;
}
.icon-ziying1 {
  font-size: 16px;
  color: red;
}
.goods-price-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>