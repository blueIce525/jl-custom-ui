const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理文件夹
const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');

const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (const file of files) {
    const output = file.split(/[/.]/)[2];
    list[output] = `./${file}`;
  }
}

makeList('components/lib', list);

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      { test: /\.css$/, use: ['css-loader'] },
      { test: /\.scss$/, use: ['css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
    ],
  },
};
