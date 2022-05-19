<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <GoodsListItem :goods="goodsList" :bottom="true"> </GoodsListItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { askGoodsList } from "../../api/goods";
import GoodsListItem from "../home/children/GoodsListItem.vue";
export default {
  data() {
    return {
      goodsList: [],
      isLoading: false,
      loading: false,
      finished: false,
      limit: 8,
      page: 0,
      list: [],
    };
  },
  methods: {
    async _askGoodsList() {
      // 刷新时 赋值为空 再次请求
      if (this.isLoading) {
        this.goodsList = [];
        this.isLoading = false;
      }
      const data = await askGoodsList(this.page, this.limit);
      // 页面数据 旧加新
      this.goodsList = [...this.goodsList, ...data.message];
      //   加载完 load 为空
      this.loading = false;
      //   当数据为空时 不在 加载
      if (data.message.length === 0) {
        this.finished = true;
      }
    },
    onRefresh() {
      this.page = 0;
      this.finished = false;
      this.loading = true;
      // 当加载 页面时 刷新一次
      this.onLoad();
    },

    onLoad() {
      // 页码
      this.page++;
      this._askGoodsList();
    },
  },
  created() {},
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="scss" scoped>
</style>