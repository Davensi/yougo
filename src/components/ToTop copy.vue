<template>
  <div>
    <div class="gotuTop" @click="toTop" v-show="isShow">
     <!-- 定义具名插槽 -->
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToTop",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toTop(e) {
      window.scroll(0, 0);
    },
  },
  mounted() {
    const _this = this;
    document.addEventListener("scroll", function (e) {
      if (window.pageYOffset >= 700) {
        _this.isShow = true;
      } else {
        _this.isShow = false;
      }
    });
  },
};
</script>
 
 <style scoped>


* {
  padding: 0;
  margin: 0;
}

.boy {
  width: 100%;
  height: 120px;
  background: red;
}

.box {
  width: 1200px;
  height: 700px;
  margin: 0 auto;
  background: yellow;
}

.gotuTop {
  position: fixed;
  top: 200px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  
  background-color: #ccc;
}

.gotuTop div {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 60px;
}

.gotuTop div i {
  font-size: 30px;
}
.gotuTop p {
  text-align: center;
}
</style>