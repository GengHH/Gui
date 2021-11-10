<!--
 * @Author: GengHH
 * @Date: 2021-11-04 14:47:35
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-10 12:13:46
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\src\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Parallaxy />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Parallaxy from './components/Parallaxy.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallaxy,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
