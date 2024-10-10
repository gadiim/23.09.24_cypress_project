const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    retries: 1,
    screenshotOnRunFailure: true,
  },
});
