const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    //create video as evidence 
    // video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
