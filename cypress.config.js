<<<<<<< Updated upstream
// cypress.config.js
=======
>>>>>>> Stashed changes
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< Updated upstream
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: true, // <-- here, NOT inside setupNodeEvents
    setupNodeEvents(on, config) {
      // your node event listeners go here if needed
=======
    setupNodeEvents(on, config) {
      // implement node event listeners here
>>>>>>> Stashed changes
    },
  },
});
