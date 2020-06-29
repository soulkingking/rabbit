<template>
  <el-container>
    <el-header>
      <el-row :gutter="0">
        <el-col :span="3" :offset="3">
          <div class="logo">logo</div>
        </el-col>
        <el-col :span="15">
          <el-row type="flex" justify="end" align="center">
            <el-col :span="20" class="menu">
              <el-menu mode="horizontal" :router="true" :default-active="$route.path">
                <el-menu-item :index="'/webside'+menu.path" v-for="menu in menus" :key="menu.path">
                  <span class="menu-title">{{menu.title}}</span>
                </el-menu-item>
              </el-menu>
            </el-col>

            <el-col :span="4" class="user">
              <el-dropdown @command="handleCommand">
                <el-avatar :src="user.icon"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">个人中心</el-dropdown-item>
                  <el-dropdown-item divided command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-container  style="padding-top:60px">
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>

  </el-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OfficialWebSideLayout",
  data() {
    return {
      activeIndex: "1"
    };
  },
  watch: {},
  computed: {
    ...mapState({
      menus: state => state.setting.menus,
      user: state => state.user.user
    })
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          break;
        case "b":
          this.loginOut();
          break;
      }
    },
    loginOut() {
      this.$router.replace({ path: "/passport/login" });
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  background: @blue-6;
  text-align: center;
  box-shadow: 0 0.0625rem 0.125rem 0 #0000001a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.logo {
  height: 3.75rem;
  line-height: 3.75rem;
//   width: 12.5rem;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.el-menu {
  background: @blue-6;
  color: #ffffff;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  color: #fff;
  border: none !important;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  transform: skew(-30deg);
  -webkit-transform: skew(-30deg);
  -moz-transform: skew(-30deg);
  -o-transform: skew(-30deg);
  -ms-transform: skew(-30deg);
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: #fff;
  //   border: .0625rem solid #fff !important;
  border: none !important;
  background: @blue-5;
  transition: 0.5s;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #ffffff;
  //   border: .0625rem solid #fff !important;
  border: none !important;
  background: @blue-5;
  transition: 0.5s;
}

.menu {
  display: flex;
  align-items: center;
}
.menu-title {
  display: inline-block;
  transform: skew(30deg);
  -webkit-transform: skew(30deg);
  -moz-transform: skew(30deg);
  -o-transform: skew(30deg);
  -ms-transform: skew(30deg);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user {
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>