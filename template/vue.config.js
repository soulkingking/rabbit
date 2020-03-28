const path = require("path");
module.exports = {
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/styles/variable.less")]
    }
  }
};
