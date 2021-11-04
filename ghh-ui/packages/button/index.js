/*
 * @Author: GengHH
 * @Date: 2021-11-04 15:40:41
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-04 16:36:57
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\packages\buttom\index.js
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
