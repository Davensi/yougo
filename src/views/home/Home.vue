<template>
  <div>
    <van-search
      v-model="value"
      show-action
      shape="round"
      background="#f2f2f2"
      placeholder="大家都在搜:"
      @focus="toSearch"
    >
      <template #left>
          <img src="../../assets/ioc.jpg"   @click="$router.go(0)"  class="ioc" alt="" />
      </template>
      <template #action>
        <router-link to="/home/user">
          <van-icon name="manager-o" color="#9b9b9b" size="1rem" />
        </router-link>
      </template>
    </van-search>
    <Swipemin/>
    <router-link to="/Goodsdetail">商品详情</router-link>
  </div>
</template>

<script>
import Swipemin from "./children/Swipemin.vue";
export default {
  data() {
    return {
      active: 1,
      value: "",
    };
  },
  watch: {
    // 监听路由
    // $route:{
    //   handler:function(newR,lodR){
    //     console.log(newR,'讲台');
    //     const {title} = newR.meta
    //     document.title = title
    //   },
    //   immediate:true
    // }
  },
  methods: {
    toSearch() {
      console.log("跳搜索页");
      this.$router.push("/search");
    },
  },
  components:{
    Swipemin
  }
};
</script>

<style lang="scss" scoped>
.ioc {
  width: 30px;
  border-radius: 35%;
  margin-right: 5px;
}
</style>