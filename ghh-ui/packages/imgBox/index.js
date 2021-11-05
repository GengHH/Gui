/*
 * @Author: GengHH
 * @Date: 2021-11-05 10:49:36
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-05 13:23:39
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\packages\imgBox\index.js
 */

import ImgBox from './src/imgBox.vue';

ImgBox.install = function (Vue) {
  Vue.component(ImgBox.name, ImgBox);
};

export default ImgBox;
