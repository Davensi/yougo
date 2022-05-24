<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :item-bottom="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="selectSite"
      :show-delete="true"
    >
    </van-address-list>
  </div>
</template>

<script>
import { askGetSite } from "ajax/user";

 
export default {
  data() {
    return {
      chosenAddressId: "",
      list: [],
      k: 0,
    };
  },
  methods: {
    onAdd() {
      
      this.$router.push("/addsite");
    },
    onEdit(item, index) {
      this.$router.push("/site/" + JSON.stringify(this.list[index]));
     
    },
    selectSite(item) {
      console.log(item);
    },
    async _getSite() {
      let data = await askGetSite(this.$store.state.userInfo.id);
      const thia = this;
      data = data.map((item) => {
        item.fullAreaCode = item.areaCode;
        // item.isDefault = item.isDefault === 0 ? true : false;
        // 获得地区 编码  通过地区编码来改变
        item.areaCode = item.areaCode.split("-")[2];
        // 地址 列表下的 详情的地址
        let detailSite = `${item.country}:${item.addressDetail}`;
        item.address = detailSite;
        // 显示默认 文字
        if (item.isDefault) {
          item.isDefault = true;
          // 默认的id 项为 选择
          thia.chosenAddressId = item.id;
          console.log(this.chosenAddressId);
        } else {
          item.isDefault = false;
        };
       
        return item;
      });
     
      this.list = data;
    },
  },
  created() {
    //  location.reload();
    this._getSite();
  },
  computed: {
    bottomText() {},
  },
};
</script>

<style lang="scss" scoped>
.van-icon-edit {
  background: red;
  position: relative;
}
.van-icon-edit::before {
  color: #000;
  content: "编辑";
  height: 1rem;
  width: 1rem;
  position: absolute;
  top: 57%;
  left: 0px;
}
.buttom-text {
  font-size: 0.5rem;
}
</style>