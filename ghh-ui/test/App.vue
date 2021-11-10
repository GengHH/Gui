<!--
 * @Author: GengHH
 * @Date: 2021-11-04 16:38:26
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-10 15:26:57
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\test\App.vue
-->
<template>
  <div id="box">
    <div ref="btn">1234</div>
    <ghh-button ref="btn2" :type="type"></ghh-button>
    <ghh-img-box :paths="paths" isPreview></ghh-img-box>

    <p>Using stand-alone:</p>
    <p />
    <div class="mb-4">
      <b-avatar></b-avatar>
      <b-avatar variant="primary" text="BV"></b-avatar>
      <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      <b-avatar variant="success" icon="people-fill"></b-avatar>
    </div>
    <p>Using in components (list group) example:</p>
    <p />
    <b-list-group style="max-width: 300px">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
        <span class="mr-auto">BootstrapVue</span>
        <b-badge>12</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto">Super Kitty</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
        <span class="mr-auto">ACME group</span>
        <b-badge>7</b-badge>
      </b-list-group-item>
    </b-list-group>
    <MyParallaxy></MyParallaxy>
  </div>
</template>

<script>
import MyParallaxy from '../src/components/Parallaxy.vue';
import { gsap } from 'gsap';
export default {
  name: 'app',
  components: { MyParallaxy },
  data() {
    return {
      type: 'primary',
      paths: [
        'https://picsum.photos/250/250/?image=11',
        'https://picsum.photos/250/250/?image=58',
        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=11',

        'https://picsum.photos/250/250/?image=58',
        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=11',
        'https://picsum.photos/250/250/?image=58',

        'https://picsum.photos/250/250/?image=59',
        'https://picsum.photos/250/250/?image=11',
        'https://picsum.photos/250/250/?image=58',
        'https://picsum.photos/250/250/?image=59',
      ],
    };
  },
  mounted() {
    const { btn, btn2 } = this.$refs;
    console.log(
      '%c 🍨 btn2: ',
      'font-size:20px;background-color: #F5CE50;color:#fff;',
      btn2
    );
    console.log(
      '%c 🦑 btn: ',
      'font-size:20px;background-color: #4b4b4b;color:#fff;',
      btn
    );
    // const timeline = new TimelineLite();

    gsap.to(btn, { x: 100, duration: 1 });
    gsap.to(btn2.$el, { rotation: 27, duration: 1 });
  },
};
</script>

<style></style>
