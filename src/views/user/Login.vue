<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="upUser"
          >提交</van-button
        >
      </div>
    </van-form>
    <router-link
      tag="div"
      :to="{ path: '/register' }"
      class="text-center text-gray-color"
      >没有账号？去注册</router-link
    >
  </div>
</template>

<script>
import { askLogin } from "ajax/user.js";

 
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      let { status, message, token, userInfo } = await askLogin(values);
      //  登录状态是否 为成功
      if (status === 0) {
        // 判断用户是从哪来来的 如果是 有记录的那么就返回置 当前浏览的路由位置
        
        this.$notify({ type: "primary", message: "欢迎"  });
        if (this.$route.query.redirect && !this.$store.state.token) {
          this.$router.replace(this.$route.query.redirect);
        } else {
          this.$router.push("/home/user");
        }
        this.$store.commit("setToken", token);
        this.$store.commit("setUserInfo", userInfo);
      } else {
        this.$store.commit("clearUserInfo");
      }
    },
    upUser() {},
  },
};
</script>

<style lang="scss" scoped>
.text-gray-color {
  color: #ccc !important;
  font-size: 0.6rem;
}
.text-center {
  text-align: center !important;
}
</style>