'use strict';

const path = require('path');
const { BabelMultiTargetPlugin } = require('webpack-babel-multi-target-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve('src')
  },
  externals: {
    'ace-builds/src-noconflict/ace.js': 'ace'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          BabelMultiTargetPlugin.loader()
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'ace-builds',
          path: 'src-noconflict/ace.js'
        },
        {
          name: 'ace-builds',
          path: 'src-noconflict/ext-searchbox.js'
        },
        {
          name: 'ace-builds',
          path: 'src-noconflict/ext-beautify.js'
        }
      ],
      publicPath: '/node_modules'
    }),
    // Babel configuration for multiple output bundles targeting different sets
    // of browsers
    new BabelMultiTargetPlugin({
      babel: {
        // @babel/preset-env options common for all bundles
        presetOptions: {
          useBuiltIns: false
        }
      },

      // Target browsers with and without ES modules support
      targets: {
        es6: {
          browsers: [
            // Ensure tagged literals are not transpiled to ES5
            'last 2 Chrome major versions'
          ],
          tagAssetsWithKey: false, // don’t append a suffix to the file name
          esModule: true // marks the bundle used with <script type="module">
        },
        es5: {
          browsers: ['ie 11'],
          tagAssetsWithKey: true, // append a suffix to the file name
          noModule: true // marks the bundle included without `type="module"`
        }
      }
    })
  ],

  devServer: {
    compress: true,
    overlay: true,
    port: 3000,
    host: '0.0.0.0'
  }
};
