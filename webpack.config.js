const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'crypto-html'),
    filename: 'index.js',
    library: "CryptoHTML"
  },
};