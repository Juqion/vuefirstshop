<template>
  <div class="login_container">
    <el-row>
      <el-col :span = "12" :xs = "0"></el-col>
      <el-col :span = "12" :xs = "24">
        <el-form class="login_form" :model="loginForm">
          <h1>登录</h1>
          <h2>欢迎来到居其商城</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_button" @click="userLoginEvent">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {User, Lock} from '@element-plus/icons-vue'
import {reactive} from "vue";
import userStore from "@/store/modules/user";
import $router from "@/router"
import {ElNotification} from "element-plus";

let loginForm = reactive({username: 'admin', password: '111111'});
let loginStore = userStore()
const userLoginEvent = async () => {
  try {
    await loginStore.userLogin(loginForm);
    await $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功'
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error.message
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_button {
      width: 100%;
      background: dodgerblue;
      color: white;
      border: 0;
    }
  }
}
</style>
