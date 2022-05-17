<template>
  <div id="app">
    <van-nav-bar
      v-show="showNavBar"
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
    />
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNavBar: false,
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
        this.showNavBar = showNavBar;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
#app {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
}
</style>
