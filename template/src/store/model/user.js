export default {
  namespace: true,
  namespaced: true,
  state: {
    user: {
      name: "管理员",
      icon:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {}
};
