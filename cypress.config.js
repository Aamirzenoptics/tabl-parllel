const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "iahqbg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 3,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  }
});
