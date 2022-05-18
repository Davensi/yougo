<template>
  <div class="content">
    <van-skeleton title :row="7" :loading="false"> 
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home/index">HOME</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/home/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/home/user">我的</van-tabbar-item>
    </van-tabbar>
    </van-skeleton>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 1,
    };
  },
  watch: {
    // 监听路由
    $route: {
      handler: function (newR, lodR) {
        // console.log(newR, "讲台");
        const { title, index } = newR.meta;
        //
        document.title = title;
        this.active = index;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  position: fixed;
}
// .content{
//  width: 100vw;
// }
</style>