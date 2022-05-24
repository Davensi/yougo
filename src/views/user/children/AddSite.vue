<template>
  <div>
    <van-address-edit
      :show-postal="false"
      :area-list="areaList"
      :show-delete="false"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-area="onChangeArea"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { askAddSite } from "ajax/user.js";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      areaCode: "",
      userId: this.$store.state.userInfo.id,
    };
  },
  methods: {
    async onSave(obj) {
      // 对 编辑后的数据 统一处理 达到数据库需要的 格式
      obj.areaCode = this.areaCode;
      obj.postalCode = this.areaCode;
      obj.country = obj.county;
      obj.isDefault = obj.isDefault ? 1 : 0;

      const newSite = {
        ...obj,
      };
      console.log(this.$store.state.userInfo.id);
      console.log(newSite);
      const { status, message } = await askAddSite(this.userId, newSite);

      this.$notify({ type: "primary", message });
      this.$router.replace("/site");
    },

    onChangeArea(val) {
      // 当省市区联动时 将地址编码 切割值所需的参数

      this.areaCode = val.map((item) => item.code).join("-");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>