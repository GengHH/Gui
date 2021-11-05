/*
 * @Author: GengHH
 * @Date: 2021-11-04 17:01:17
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-05 13:21:32
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\packages\index.js
 */

import Button from './button';
import ImgBox from './imgBox';

const components = [Button, ImgBox];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Button,
};
