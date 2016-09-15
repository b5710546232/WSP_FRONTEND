const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    './ui/index.js'
  ],
  output: {
    publicPath: "/static/",
    path: path.join(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    loaders:[
      // {
      //   test: /\.js$/,
      //   loaders: ['babel?cacheDirectory'],
      //   exclude: /(node_modules|bower_components)/,
      // },
      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss'],
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss', 'sass'],
      // },
      // {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      // {test: /\.html$/, loader: 'raw',exclude: /node_modules/},
      // {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'},
      // { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      {test: /\.js$/,loaders: ['babel?cacheDirectory'],exclude: /(node_modules|bower_components)/,},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: 'json-loader'},
      {test: /\.scss$/,loaders: ['style', 'css', 'sass']}
      // { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
      // { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240'}

    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
],
  postcss:function () {
    return [autoprefixer];
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000'
      }
    }
  },
};
