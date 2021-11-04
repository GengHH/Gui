/*
 * @Author: GengHH
 * @Date: 2021-11-04 15:10:54
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-04 15:36:06
 * @Description: file content
 * @FilePath: \Gui\mc-ui\vue.config.js
 */
const path = require('path');
module.exports = {
  pages: {
    index: {
      entry: 'test/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      });
  }
};
