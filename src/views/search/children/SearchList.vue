<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <GoodsListItem :goods="goodsList" />
  </div>
</template>

<script>
import { getWordGoods } from "../../../api/search";
import GoodsListItem from "../../home/children/GoodsListItem.vue";
export default {
  data() {
    return {
      goodsList: null,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  methods: {
    async _getWordGoods() {
      const data = await getWordGoods(this.$store.state.searchWord, 1, 5);
      console.log(data, "data");
      this.goodsList = data;
    },
  },
  created() {
    this._getWordGoods();
    if (this.$route.fullPath == "/search/list") {
      // this.value = this.$store.state.searchWord;
      this.$bus.$emit("getWord", this.$store.state.searchWord);
      console.log("应该的", this.$bus);
    }
    this.$store.commit("historyShow", false);
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  components: { GoodsListItem },
};
</script>

<style lang="scss" scoped>
</style>