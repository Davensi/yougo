<template>
  <div>
    <van-cell :to="link">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <div class="right text">
          {{ rightText }}
          <van-icon :name="rightIocn" />
        </div>
      </template>
      <template #title>
        <div class="left text">
          <span class="info-ioc" :style="{ color: iocColor }">
            <van-icon :name="leftIocn" />
          </span>
          <span class="info-text">{{ leftText }}</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    leftIocn: {
      default: "search",
    },
    iocColor: {
      default: "red",
    },
    rightIocn: {
      default: "arrow",
    },
    rightText: {
      default: "",
    },
    leftText: {
      default: "text",
    },
    link: {
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.van-cell {
  margin-top: 5px;
  position: relative;
}
.van-cell::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 80%;
  height: 1px;
  transition:calc(0.5);
  background: #ccc;
}
.text,
.van-cell__title {
  display: flex;
  align-items: center;
}
.info-text {
  font-size: 0.5rem;
  margin-left: 10px;
}
.info-ioc {
  font-size: 1.5rem;
  color: pink;
}
.right {
  font-size: 0.8rem;
}
</style>