<template>
  <div>
    <van-cell title="登录享优惠" is-link value="去登录" to="index" />

     
    <van-swipe-cell v-for="(item,index) in $store.state.goods" :key="item.goodsId">
      <!-- 商品卡片 -->
      <van-card
        :num="item.selectedNum"
        :price="item.sell_price"
        :desc="`售价:${item.sell_price}`"
        :title="item.title"
        class="goods-card"
        :thumb="item.goodsSrc"
      >
        <!-- 选中  -->
        <template #tag>
          <van-checkbox v-model="$store.getters.ownCheck[index]" @click="checkChange(index,$store.getters.ownCheck[index])"></van-checkbox>
        </template>
        <!-- 计算数量 -->
        <template #tags>
          <van-stepper v-model="$store.getters.ownGoodsNum[index]" @change="numChange(index,$store.getters.ownGoodsNum[index])" />
        </template>
        <!-- 删除按钮 -->
        <template #footer>
          <van-button
            size="mini"
            square
            icon="delete"
            @click="delGoodsClick(index)"
          ></van-button>
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="delGoodsClick(index)"
        />
      </template>
    </van-swipe-cell>

    <van-submit-bar :price="$store.getters.ownPrice * 100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="$store.getters.ownCheckAll['ALL']" @click="checkAll($store.getters.ownCheckAll)">全选</van-checkbox>
      <template #tip>
          
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      value: 1,
    };
  },
  methods: {
    onClickEditAddress() {
      console.log("修改地址");
    },
    // 提交订单
    onSubmit() {
      console.log("提交订单");
    },
    // 删除商品
    delGoodsClick(index) {
      this.$store.commit('delGoodsItem',index)
      console.log("删除",index);
    },
    // 计步器事件
    numChange(index,val) {
        // setNum
         this.$store.commit('setNum',{val,index})
    //    console.log("几步器",{val,index});
    },
    // 单个商品 复选框事件
    checkChange(index,val) {
        this.$store.commit('setCheck',{val,index})
    //   console.log("更改是否选中",{val,index});
    },
    // 全选 反选
    checkAll() {
        this.$store.commit('setAllCheck')
    //   console.log("全选");
    },
  },
};
</script>

<style lang="scss" scoped>
.van-cell__value {
  line-height: 15px;
}
.goods-card {
  margin: 0;
  //   background-color: red;
}

.delete-button {
  height: 100%;
}
.van-submit-bar{
    bottom: 50px;
}
</style>