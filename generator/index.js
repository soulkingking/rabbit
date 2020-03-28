module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "animate.css": "^3.7.2",
      "core-js": "^3.6.4",
      echarts: "^4.7.0",
      "element-ui": "^2.13.0",
      "v-charts": "^1.19.0",
      "vue-router": "^3.1.5",
      vuex: "^3.1.2"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-plugin-router": "~4.2.0",
      "@vue/cli-plugin-vuex": "~4.2.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.0.3",
      eslint: "^6.7.2",
      "eslint-plugin-prettier": "^3.1.1",
      "eslint-plugin-vue": "^6.1.2",
      prettier: "^1.19.1",
      axios: "^0.19.2",
      "style-resources-loader": "^1.3.3",
      "vue-cli-plugin-style-resources-loader": "~0.1.4"
    }
  });

  if (options.router) {
    console.log("router");
  }
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render("../template");
};
