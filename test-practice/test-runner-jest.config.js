// test-runner-jest.config.js
const { getJestConfig } = require("@storybook/test-runner");

module.exports = {
  // Storybook test-runnerのデフォルト設定を継承
  ...getJestConfig(),
};
