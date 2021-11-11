/*
 * @Author: your name
 * @Date: 2021-11-11 21:39:57
 * @LastEditTime: 2021-11-11 21:43:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Gui\ghh-ui\packages\photoWall\index.js
 */
import PhotoWall from './src/photoWall.vue';
PhotoWall.install = function (Vue) {
  Vue.component(PhotoWall.name, PhotoWall);
};

export default PhotoWall;
