<template>
  <div>
    <van-search
      v-model="value"
      show-action
      shape="round"
      background="#f2f2f2"
      placeholder="搜索名称"
      @focus="1 + 1"
      autofocus
    >
      <template #left>
        <van-icon name="arrow-left" color="#9b9b9b" size="1rem" @click="back" />
      </template>
      <template #action>
        <van-icon
          name="search"
          color="#9b9b9b"
          size="1rem"
          tag="div"
          @click="search"
        />
      </template>
    </van-search>

    <SearchHisory v-show="$store.state.historyShow"> </SearchHisory>

    <router-view></router-view>
  </div>
</template>

<script>
import SearchHisory from "./children/SearchHisory";
import SearchList from "./children/SearchList.vue";

export default {
  data() {
    return {
      value: "",
      show: true,
      goodsList: [],
    };
  },
  methods: {
    // 关键字存入 vue 中 跳转 路由
    search() {
      const keyWord = !this.value ? "牛掰" : this.value;

      // 传入 关键字
      this.$store.commit("pushWord", keyWord);
      // 增加历史记录
      this.$store.commit("pushHistory", keyWord);
      // 是否 隐藏
      this.$store.commit("historyShow", this.$store.state.historyShow);
      //  再次搜索时再次 刷新页面
      if (this.$route.fullPath == "/search/list") {
        this.$store.commit("historyShow", true);
        this.$router.back(0);
        console.log("让你显示11");
      } else {
        // 当是 有在搜索 跳到搜索页
        this.$router.push("/search/list");
      }
    },
    back() {
      this.$router.back();
      if (this.$route.fullPath == "/search/list") {
        console.log("让你显示");
        this.$store.commit("historyShow", true);
      }
    },
  },
  created() {},
  components: {
    SearchHisory,
    SearchList,
  },
};
</script>

<style lang="scss" scoped>
.van-search__action {
  box-sizing: border-box;
  padding-top: 8px;
}
</style>