const path = require("path");
// your app's webpack.config.js
const custom = require("../webpack.config.js");

module.exports = async ({ config, mode }) => {
  return { ...config, module: custom.module, resolve: custom.resolve };
};
