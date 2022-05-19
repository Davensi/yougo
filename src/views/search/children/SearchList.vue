<template>
  <div>
    <h1>我是傻鸟</h1>
    <h1>{{ $store.state.searchWord }}</h1>
  </div>
</template>

<script>
import { getWordGoods } from "../../../api/search";

export default {
  data() {
    return {
      GoodList: null,
    };
  },
  methods: {
    async _getWordGoods() {
      const data = await getWordGoods(this.$store.state.searchWord, 1, 5);
        console.log(data, "data");
    },
  },
  created() {
     
    this._getWordGoods();
    this.$store.commit("historyShow", false);
  },
  beforeRouteUpdate(to, from, next) {
     
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>