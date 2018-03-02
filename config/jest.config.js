const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..', 'src'),
  testPathIgnorePatterns: ['/node_modules/', '.eslintrc.js'],
  setupTestFrameworkScriptFile: path.join(__dirname, 'setupJest.js'),
}
