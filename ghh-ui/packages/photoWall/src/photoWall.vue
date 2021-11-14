<!--
 * @Author: your name
 * @Date: 2021-11-11 21:40:26
 * @LastEditTime: 2021-11-14 22:07:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Gui\ghh-ui\packages\photoWall\src\photoWall.vue
-->
<template>
  <div>
    <p v-if="imgArray.length">this is photo wall,but not images!</p>
    <div v-else class="main">
      <div class="box" v-for="(item, idx) in imgArray" :key="idx">
        <img :src="item.path" alt="未加载" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photoWall',
  props: {
    imgArray: {
      type: Array,
      default: () => [
        { path: 'https://picsum.photos/200/360/?image=12' },
        { path: 'https://picsum.photos/200/360/?image=12' },
        { path: 'https://picsum.photos/200/360/?image=12' },
        { path: 'https://picsum.photos/200/360/?image=12' },
      ],
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.main {
  column-count: 6;
}
</style>
