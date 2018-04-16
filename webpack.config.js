const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react'],
            },
          },
        ]
      },
    ],
  },
};
