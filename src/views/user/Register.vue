<template>
  <div>
    <h1>欢迎注册</h1>
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
      <van-field
        v-model="twoPassword"
        type="password"
        name="twoPassword"
        label="二次密码"
        placeholder="密码"
        :rules="[{ required: true, message: '填写的二次密码请保持一直' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { askRegister } from "ajax/user.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      twoPassword: "",
    };
  },
  methods: {
    async onSubmit(value) {
      // 验证 两次 密码是否一致
      if (value.password !== value.twoPassword) {
        Toast({
          message: "两次密码不一置",
          position: "top",
        });
      } else {
        let { status, message } = await askRegister(value);
        this.$notify({ type: "primary", message });
        if (status === 0) {
          this.$router.push("/login");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>