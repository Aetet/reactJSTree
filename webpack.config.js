var webpack = require('webpack');
var path = require('path');

var cwd = __dirname;
var pask = path.join(cwd, 'client', 'js', 'app.js');
var config = {
  entry: path.join(cwd, 'client', 'js', 'app.js'),
  output: {
    path: path.join(cwd, 'public', 'js'),
    outFileName: '[name].js',
    publicPath: '/js/',
  },
  debug: true,
  devtool: 'eval',
  watch: true,
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6.js'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel?stage=1&optional=bluebirdCoroutines&optional=runtime'
      }
    ]
  }
};

webpack(config).watch({colors: true}, function (err, stats) {
  console.log(stats.toString());
});

module.exports = config;
