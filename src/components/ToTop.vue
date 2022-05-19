<template>
  <div>
    <div class="gotuTop" @click="toTop" v-show="isShow">
      <!-- 定义具名插槽 -->
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToTop",
  props: {
    scroll: {
      default: 500,
      type: Number,
    },
  },

  data() {
    return {
      isShow: false,
      _this: this,
    };
  },
  methods: {
    toTop(e) {
      window.scroll(0, 0);
    },
    scrollCallBack() {
      if (window.pageYOffset >= this.scroll) {
        // console.log("那边");
        this.isShow = true;
      } else {
        this.isShow = false;
        // console.log("这边", this.scroll);
      }
    },
  },
  mounted() {
    const _this = this;
    document.addEventListener("scroll", this.scrollCallBack);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scrollCallBack);
  },
};
</script>
 
 <style scoped>
.gotuTop {
  position: fixed;
  top: 200px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 15px;
  
  background-color: #ccc;
  z-index: 80;
}

</style>