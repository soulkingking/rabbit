import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import 'element-ui/lib/theme-chalk/base.css';
import animated from 'animate.css';

import VCharts from "v-charts";
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
