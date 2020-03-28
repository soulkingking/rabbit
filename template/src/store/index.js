import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import setting from "./model/setting";
import user from "./model/user";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    setting,
    user
  }
});
