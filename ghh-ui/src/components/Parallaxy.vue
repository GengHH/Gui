<!--
 * @Author: GengHH
 * @Date: 2021-11-10 12:11:33
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-10 12:25:33
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\src\components\Parallaxy.vue
-->
<template>
  <div id="parallax">
    <div style="background-color: #fff; height: 100vh">
      <h1 style="margin-top: 0; padding-top: 20px">Scroll down ⬇</h1>
    </div>
    <div style="position: relative; z-index: 9999; background-color: #fff">
      <h1 style="margin: 0">Parallax Effect</h1>
      <parallax>
        <img
          src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg"
        />
      </parallax>
    </div>
    <div style="background-color: #fff; height: 100vh"></div>
    <h1>Parallax fixed position</h1>

    <div style="position: relative">
      <parallax :fixed="true">
        <img
          src="https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg"
        />
      </parallax>
    </div>

    <div style="background-color: #fff; height: 100vh"></div>
  </div>
</template>

<script>
import parallax from 'vue-parallaxy';

export default {
  name: 'MyParallaxy',
  components: {
    parallax,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
