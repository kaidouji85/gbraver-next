/**
 * プロダクションビルドの設定
 *
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './public/'
  },
  devtool: 'inline-source-map',
  cache: true
};