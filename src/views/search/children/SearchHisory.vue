<template>
  <div>
    <van-cell>
      <template #title>历史记录</template>
      <template #right-icon>
        <van-icon
          name="delete-o"
          color="#9b9b9b"
          size="1rem"
          @click="delHistory"
        />
      </template>
      <template #label>
        <div id="history">
          <p
            @click="toHisory(item)"
            class="text"
            v-for="item in $store.state.searchWordHistory"
            :key="item + '-' + Math.random()"
          >
            {{ item }}
          </p>
        </div>
      </template>
    </van-cell>
    <van-cell>
      <template #title>搜索发现</template>
      <template #label>
        <div id="find">
          <p class="text">苹果发布 15</p>
          <p class="text">有大病</p>
          <p class="text">11111231</p>
          <p class="text">1112311</p>
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      GoodList: null,
      show: true,
    };
  },
  methods: {
    delHistory() {
   
      this.$dialog
        .confirm({
          title: "是否删除历史",
        })
        .then(() => {
          console.log("走了");
          this.$store.commit("delWord");
        });
    },
    toHisory(text) {
      console.log(text);
      this.$store.commit("pushWord", text);
      this.$store.commit("historyShow", false);
      this.$router.push("/search/list");
    },
  },
  created() {
    console.log("使用我");
    //   /search/list

    console.log(this.$store.state.historyShow, "芭比Q  ");
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#history {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .text {
    margin: 5px 10px;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
    background: #f5f5f5;
    border-radius: 0.54rem;
  }
}

#find {
  width: 14rem;
  display: flex;
  flex-wrap: wrap;
  .text {
    display: inline-flex;
    align-items: center;
    width: 50%;
    margin-bottom: 0.35rem;
    font-size: 0.3rem;
  }
}
</style>