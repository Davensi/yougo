
<template>
  <div class="swipe-content">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="200"
    >
      <van-swipe-item v-for="image in img" :key="image.img">
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swipemin",
  props: {
    img: {
      default() {
        return [1, 2, 3, 4];
      },
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
 
  width: 8rem;
  text-align: center;
  background-color: #39a9ed;
}
.swipe-content {
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
</style>