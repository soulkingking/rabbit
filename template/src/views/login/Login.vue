<template>
  <el-row type="flex" justify="center" class="login_page">
    <el-col :span="8" :xs="24" :sm="18" :md="8">
      <el-card class="login_form">
        <div class="login_logo">logo</div>
        <h2 class="title">{{ title }}</h2>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <el-form
              :model="loginForm"
              class="animated fadeInLeft"
              :rules="rules"
              status-icon
              ref="login"
            >
              <el-form-item prop="username">
                <el-input
                  v-model="loginForm.username"
                  placeholder="用户名"
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  placeholder="密码"
                  type="password"
                  prefix-icon="el-icon-lock"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onLogin" class="login_btn"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form
              :model="registerForm"
              class="animated fadeInRight"
              :rules="rules"
              ref="register"
              status-icon
            >
              <el-form-item prop="username">
                <el-input
                  v-model="registerForm.username"
                  placeholder="用户名"
                  prefix-icon="el-icon-user"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input
                  v-model="registerForm.email"
                  placeholder="邮箱"
                  prefix-icon="el-icon-message"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="registerForm.password"
                  placeholder="密码"
                  type="password"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <el-input
                  v-model="registerForm.confirmPassword"
                  placeholder="确认密码"
                  type="password"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onRegister" class="login_btn"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { validateEmail } from "@/utils/custom-validate";
export default {
  name: "Login",
  data() {
    // 验证两次输入的密码
    let validateConfirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      title: "可视化系统",
      activeName: "login",
      loginForm: {
        username: "",
        password: ""
      },
      registerForm: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" }
        ],
        email: [{ validator: validateEmail, trigger: "blur" }],
        confirmPassword: [
          { validator: validateConfirmPassword, trigger: "blur" }
        ]
      }
    };
  },
  computed: {},
  methods: {
    handleClick(tab) {
      this.$refs[tab.paneName].resetFields();
    },
    // 登录
    onLogin() {
      this.$refs["login"].validate(valid => {
        if (valid) {
          if (
            this.loginForm.username == "admin" &&
            this.loginForm.password == "admin"
          ) {
            this.$router.replace({ path: "/rectemplate" });
          } else {
            this.$message.error("用户名密码错误");
          }
        } else {
          return false;
        }
      });
    },
    // 注册
    onRegister() {
      this.$refs["register"].validate(valid => {
        if (valid) {
          this.$router.replace({ path: "/rectemplate" });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_page {
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 6.875rem;
  background-size: 100%;
  height: 100vh;
}

.login_logo {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 100000;
  padding: 1rem;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background: @blue-6;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  line-height: 6.25rem;
  font-weight: 600;
  font-size: 1.75rem;
  color: #fff;
}

.logo {
  width: 6.25rem;
  height: 6.25rem;
}

.title {
  margin: 0;
  text-align: center;
  padding-top: 3.125rem;
  font-size: 1.75rem;
  // font-weight: 800;
}

.el-card {
  border-radius: 0.5rem;
  position: relative;
  overflow: initial;
}

.login_form {
  width: 100%;
  @media screen {
    margin-top: 12.5rem;
    @media (max-width: 48rem) {
      margin-top: 6.25rem;
      box-shadow: none;
      border: none;
    }
  }
}

.fadeInLeft {
  animation-duration: 0.5s;
}
.fadeInRight {
  animation-duration: 0.5s;
}

.login_btn {
  width: 100%;
}
</style>
