import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { BASE_NAME } from "@/config";
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
  },
  plugins: [
    createPersistedState({
      key: BASE_NAME,
      reducer(state, paths) {
        return {};
      }
    })
  ]
});
