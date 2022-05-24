<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :show-postal="false"
      :addressInfo="editAddressInfo"
      show-delete
      @change-area="changeArea"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    >
    </van-address-edit>
  </div>
</template>

<script>
 
// 地区选择
import { areaList } from "@vant/area-data";
import { askEditSite, askDelSite } from "ajax/user";

export default {
  data() {
    return {
      areaList,
      searchResult: [],
      editAddressInfo: {},
    };
  },
  methods: {
    async onSave(obj) {
      // 对 编辑后的数据 统一处理 达到数据库需要的 格式
      obj.areaCode = obj.fullAreaCode;
      obj.country = obj.county;
      obj.isDefault = obj.isDefault ? 1 : 0;
      const newSite = {
        ...obj,
      };
      const { status, message } = await askEditSite(obj.id, newSite);
      this.$router.push("/site");
      this.$notify({ type: "primary", message });
    },
    async onDelete({ id }) {
      // askDelSite
      let thia = this;
      const { status, message } = await askDelSite(id);
      

      this.$notify({ type: "primary", message:"删除成功" });

      this.$router.replace("/site");
    },
    onChangeDetail(val) {},
    changeArea() {
      // console.log("改变地址");
    },
  },
  created() {
    const siteInfo = JSON.parse(this.$route.params.siteMsg);
    this.editAddressInfo = siteInfo;
  },
};
</script>

<style lang="scss" scoped>
</style>