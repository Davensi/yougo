
<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :width="400" height="200">
      <van-swipe-item v-for="(image) in img" :key="image.image">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swipemin",
  props: {
    img: {
      default: [1, 2, 3, 4],
    },
  },
};
</script>

<style scoped>

 
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img{
    width: 100%;
    height: 100%;
}
</style>