/*
 * @Author: GengHH
 * @Date: 2021-11-04 17:01:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-11 21:44:47
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\packages\index.js
 */

import Button from './button';
import ImgBox from './imgBox';
import PhotoWall from './photoWall';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const components = [Button, ImgBox, PhotoWall];
const install = function (Vue) {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ImgBox,
  Button,
  PhotoWall,
};
