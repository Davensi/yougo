<template>
  <div>
    <div class="user-info flex-c-d">
      <div class="user-img-wrap" @click="setHeadImg">
        <img class="user-img" :src="imgLink" alt="" />
        <input
          type="file"
          name=""
          id=""
          v-show="false"
          ref="upload"
          @change="upHeadImg"
        />
      </div>
      <div class="user-info-text" @click="login">{{ isLoginText }}</div>
    </div>

    <van-cell title="我的订单" is-link value="" />
    <div class="order flex-c-d">
      <div class="order-from">
        <van-icon name="pending-payment" size="1.5rem" />
        <div class="order-msg-text">呆付款</div>
      </div>
      <div class="order-from">
        <van-icon name="logistics" size="1.5rem" />
        <div class="order-msg-text">呆收货</div>
      </div>
      <div class="order-from">
        <van-icon name="sign" size="1.5rem" />
        <div class="order-msg-text">退换修</div>
      </div>
    </div>
    <OrderCell leftIocn="vip-card-o" leftText="会员中心" iocColor="pink" />

    <OrderCell leftIocn="gold-coin-o" leftText="我的优币" iocColor="red" />

    <OrderCell leftIocn="smile-comment-o" leftText="服务中心" iocColor="pink" />

    <OrderCell
      leftIocn="gift-card-o"
      leftText="地址管理"
      link="/site"
      iocColor="red"
    />

    <OrderCell leftIocn="setting" leftText="设置" iocColor="#ccc" />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit" @click="outLogin"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import OrderCell from "../../components/OrderCell.vue";
import { askSetHaderImg } from "ajax/user.js";
import { Dialog } from "vant";
import { Notify } from "vant";
const src =
  "https://img1.baidu.com/it/u=722430420,1974228945&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500";
export default {
  data() {
    return {
      imgLink: src,
    };
  },
  components: {
    OrderCell,
    //
  },
  methods: {
    // 点击登录
    login() {
      // 判断是否登录了 登录了 就不去登录页 不弹出服务条款
      if (!this.$store.state.userInfo) {
        Dialog.confirm({
          title: "服务条款",
          message: "案号12313 优购服务条款",
        }).then(() => {
          this.$router.push("/login");
        });
      }
    },
    outLogin() {
      // 是否 退出 退出 时清空 用户信息
      Dialog.confirm({
        title: "是否退出登录",
      }).then(() => {
        this.imgLink = src;
        Notify({ type: "success", message: "退出成功" });
        this.$store.commit("clearUserInfo");
      });

      // console.log("退出登录");
    },
    setHeadImg() {
      const fileIpt = this.$refs.upload;
      if (this.$store.state.userInfo) {
        fileIpt.click();
      }
      // fileIpt.files[0]
    },
    async upHeadImg() {
      // id

      // 拿到 文件
      const file = this.$refs.upload.files[0];
      let formData = new FormData();
      const id = this.$store.state.userInfo.id;

      formData.append("user_id", id);
      formData.append("file", file);
      // askSetHaderImg
      const { src,message} = await askSetHaderImg(formData);
      this.$notify({ type: "primary", message, });
      this.$store.commit("setHarderImg",src);
      this.imgLink = `http://api.w0824.com/${src}`;
    },
  },
  computed: {
    isLoginText() {
      // console.log("吗");
      if (!this.$store.state.userInfo) {
        return "登录/注册";
      } else {
        //  判断 用户是否 有自己的图片 没有就显示默认图
        if (this.$store.state.userInfo.avatar) {
          this.imgLink =
            "http://api.w0824.com/" + this.$store.state.userInfo.avatar;
        }

        return this.$store.state.userInfo.username;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/maxin.scss";
.user-info {
  background: #4823;
  height: 100px;
  padding: 0 20px;
  .user-info-text {
    padding: 10px;
    color: #a5a5a5;
    font-size: 0.5rem;
  }
  .user-img-wrap {
    width: 2rem;
    height: 2rem;
    .user-img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
}
.order {
  justify-content: space-between;
  padding: 10px 50px;
  .order-from {
    font-size: 0.5rem;
  }
}
.set {
}
</style>