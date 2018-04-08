const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  performance: {
    hints: false
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /style-loader/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
