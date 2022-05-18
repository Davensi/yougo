<template>
  <div id="app">
    <van-nav-bar
      v-show="showNavBar"
      :title="title"
      left-text=""
      left-arrow
      @click-left="$router.back()"
    >
    </van-nav-bar>
    <router-view />
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNavBar: false,
      title: "",
    };
  },
  watch: {
    // 监听路由
    $route: {
      handler: function (newR, lodR) {
        console.log(newR, "讲台");
        const { title, showNavBar } = newR.meta;
        //
        document.title = title;
        this.title = title;
        this.showNavBar = showNavBar;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
 
@import "css/rem.scss";
#app {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  width: 100vw;
}
body {
  // background: #7c7c7c;
}
 
</style>
