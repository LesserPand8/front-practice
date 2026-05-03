// test-runner-jest.config.js
const { getJestConfig } = require("@storybook/test-runner");

module.exports = {
  // Storybook test-runnerのデフォルト設定を継承
  ...getJestConfig(),
  // ここで必要に応じて設定を上書きできる
  testMatch: ["**/vrt.test.js"],
};
