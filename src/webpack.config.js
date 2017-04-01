var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname,'bin'),
    filename: 'app.min.js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\css$/,
        use: ["style-loader","css-loader","less-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: []
}