const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const paths = {
//   DIST: path.resolve(__dirname, "lib"),
// };


var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  // externals: {
  //   moment: 'moment'
  // },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin( {
  //     minimize : true,
  //     sourceMap : false,
  //     mangle: true,
  //     compress: {
  //       warnings: false
  //     }
  //   } )
  // ]
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'bundle.min.js',
      libraryTarget: 'commonjs2',
      library: 'StyledButton',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/StyledButton.vue'),
    output: {
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'vue-test-btn',
      umdNamedDefine: true
    }
  })
];