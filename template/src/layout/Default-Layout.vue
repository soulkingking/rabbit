<template>
  <el-container>
    <el-header>
      <el-row :gutter="0">
        <el-col :span="6" :sm="8" v-if="screenWidth > 768">
          <div
            class="logo"
            :style="{ width: isCollapse ? '4.0625rem' : '12.5rem' }"
          >
            logo
          </div>
          <el-row>
            <el-col :span="2">
              <i
                class="fold"
                @click="handleCollapse"
                :class="isCollapse ? 'el-icon-s-fold' : ' el-icon-s-unfold'"
              ></i>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4" v-else>
          <i
            class="fold"
            @click="handleCollapse"
            :class="isCollapse ? 'el-icon-s-fold' : ' el-icon-s-unfold'"
          ></i>
        </el-col>
        <el-col :span="18" :sm="16" :xs="20">
          <el-row type="flex" justify="end" align="center">
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6" class="user">
              <el-dropdown @command="handleCommand">
                <el-avatar :src="user.icon"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">个人中心</el-dropdown-item>
                  <el-dropdown-item divided command="b"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="padding-top:60px">
      <el-aside style="width:auto" v-if="screenWidth > 768">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleCollapse"
          @close="handleCollapse"
          :collapse="isCollapse"
          :router="true"
        >
          <el-menu-item
            :index="menu.path"
            v-for="menu in menus"
            :key="menu.path"
          >
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-drawer
        v-else
        :visible.sync="isCollapse"
        direction="ltr"
        :before-close="handleCollapse"
        :show-close="false"
        size="200px"
      >
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :collapse="false"
          :router="true"
          @select="handleSelect"
        >
          <el-menu-item
            :index="menu.path"
            v-for="menu in menus"
            :key="menu.path"
          >
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-drawer>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      isCollapse: document.body.clientWidth > 768 ? true : false
    };
  },
  watch: {
    screenWidth(value) {
      if (value > 768) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
      this.screenWidth = value;
    }
  },
  computed: {
    ...mapState({
      menus: state => state.setting.menus,
      user: state => state.user.user
    })
  },
  methods: {
    handleCollapse(e) {
      this.isCollapse = !this.isCollapse;
      if (this.screenWidth < 768 && !this.isCollapse) {
        e();
      }
    },
    handleSelect() {
      this.isCollapse = false;
    },
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
  mounted() {
    window.onresize = () => {
      this.$nextTick(() => {
        this.screenWidth = document.body.clientWidth;
      });
    };
  }
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
  width: 12.5rem;
  position: relative;
  transition: all 0.3s ease-in-out;

  float: left;
  &::after {
    content: "";
    width: 0.0625rem;
    height: 1.75rem;
    margin: 1rem 0;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fold:hover {
  background: rgba(0, 0, 0, 0.025);
}
.fold {
  line-height: 3.75rem !important;
  width: 3.75rem;
  font-size: 1.5rem;
  color: #fff;
  transition: 0.3s;
}
.el-menu {
  height: 100%;
  overflow: scroll;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 12.4375rem;
  height: 100%;
}

.user {
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
}
</style>
