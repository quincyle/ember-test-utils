var Reporter = require('./reporter')

module.exports = {
  framework: 'mocha',
  test_page: 'tests/index.html?hidepassed&coverage',
  disable_watching: true,
  launch_in_ci: [
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  reporter: new Reporter()
}
