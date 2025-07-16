// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: true, // <-- here, NOT inside setupNodeEvents
    setupNodeEvents(on, config) {
      // your node event listeners go here if needed
    },
  },
});
