const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  }
}