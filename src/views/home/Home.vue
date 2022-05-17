<template>
  <div>
    <h1>我是首页121</h1>
      <router-link to="/Goodsdetail">商品详情</router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active:1,
        }
    },
    watch:{
      // 监听路由
      // $route:{
      //   handler:function(newR,lodR){
      //     console.log(newR,'讲台');
      //     const {title} = newR.meta
      //     document.title = title
      //   },
      //   immediate:true
      // }
    }
};
</script>

<style lang="scss" scoped>
</style>