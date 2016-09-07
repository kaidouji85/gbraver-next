const glob = require('glob');

const phinaClassPathList = glob.sync('./phina-class/**/*.js');


/**
 * プロダクションビルドの設定
 *
 */
module.exports = {
  entry: ['./src/index.js'].concat(phinaClassPathList),
  output: {
    filename: 'index.js',
    path: './public/javascripts'
  },
  devtool: 'inline-source-map',
  cache: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};