const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 1000000,
    responseTimeout: 1000000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
