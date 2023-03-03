const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: "iahqbg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //experimentalRunAllSpecs : true
  },


  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 2
  },
  //defaultCommandTimeout: 100000,

  defaultCommandTimeout: 120000,
  

  viewportWidth: 1366,
  viewportHeight: 768,



  

});
