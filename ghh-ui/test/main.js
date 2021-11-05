/*
 * @Author: GengHH
 * @Date: 2021-11-04 16:46:59
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-05 13:26:14
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\test\main.js
 */

import Vue from 'vue';
import App from './App.vue';
import GhhUI from '../packages';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.use(GhhUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
