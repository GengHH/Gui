<!--
 * @Author: GengHH
 * @Date: 2021-11-04 16:38:26
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-04 18:10:07
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\test\App.vue
-->
<template>
  <ghh-button :type="type"></ghh-button>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      type: 'primary',
    };
  },
};
</script>

<style></style>
