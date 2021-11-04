/*
 * @Author: GengHH
 * @Date: 2021-11-04 16:46:59
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-04 18:07:40
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\test\main.js
 */

import Vue from 'vue';
import App from './App.vue';
import GhhUI from '../packages/button';

Vue.config.productionTip = false;
Vue.use(GhhUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
