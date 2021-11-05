<!--
 * @Author: GengHH
 * @Date: 2021-11-05 10:49:28
 * @LastEditors: GengHH
 * @LastEditTime: 2021-11-05 17:02:58
 * @Description: file content
 * @FilePath: \Gui\ghh-ui\packages\imgBox\src\imgBox.vue
-->

<template>
  <div>
    <b-container
      id="imgBox"
      fluid
      class="p-4 bg-dark"
      v-if="paths && paths.length"
    >
      <b-row v-for="idx in rowNum" :key="'row' + idx">
        <b-col v-for="index in colNum" :key="idx + 'col' + index">
          <b-img
            thumbnail
            fluid
            :src="paths[idx * 4 - 5 + index]"
            alt="Image"
            @click="handleClick"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <!-- 显示预览的功能 -->
    <div id="previewBox">
      <!-- 模态框 -->
      <div v-if="isPreview" id="mask">
        <a class="previous" href="###">&lt;</a>
        <img id="previewImg" src="${imgs[selected].src}" />
        <a class="next" href="###">&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GhhImgBox',
  props: {
    isPreview: {
      type: Boolean,
      default: false,
    },
    colNum: {
      type: Number,
      default: 4,
    },
    animationType: {
      type: String,
      default: '',
    },
    paths: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    rowNum() {
      return (
        parseInt(this.paths.length / this.colNum) +
        (this.paths.length % this.colNum > 0 ? 1 : 0)
      );
    },
  },
  data() {
    return {
      preview: () => {},
      imgs: [],
      selected: null,
      // paths: [
      //   'https://picsum.photos/250/250/?image=11',
      //   'https://picsum.photos/250/250/?image=58',
      //   'https://picsum.photos/250/250/?image=59',
      //   'https://picsum.photos/250/250/?image=11',

      //   'https://picsum.photos/250/250/?image=58',
      //   'https://picsum.photos/250/250/?image=59',
      //   'https://picsum.photos/250/250/?image=11',
      //   'https://picsum.photos/250/250/?image=58',

      //   'https://picsum.photos/250/250/?image=59',
      //   'https://picsum.photos/250/250/?image=11',
      //   'https://picsum.photos/250/250/?image=58',
      //   'https://picsum.photos/250/250/?image=59',
      // ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化容器绑定点击事件
    init() {
      if (!this.isPreview) {
        console.log('不进行预览');
        return;
      }
      let imgBox = document.getElementById('imgBox');
      //利用工厂函数生成事件
      this.intiPreview();
      //监听图片的点击事件
      imgBox.addEventListener('click', (evt) => {
        const target = evt.target;
        if (target.tagName === 'IMG') {
          // 如果是点击的图片，则实现图片预览功能
          this.preview(imgBox, target);
        }
      });
    },
    // 抽象出来的用户行为(类似于工厂函数)，并初始化生成preview预览事件
    userBehavior(context) {
      const { type, getDetail } = context;
      return function (subject, target) {
        const event = new CustomEvent(type, {
          bubbles: true,
          detail: getDetail.call(context, subject, target),
        });
        target.dispatchEvent(event);
      };
    },
    // 初始化预览preview事件，实现图片预览功能
    intiPreview() {
      let that = this;
      that.preview = new that.userBehavior({
        type: 'preview',
        getDetail: function (subject, target) {
          that.imgs = Array.from(subject.querySelectorAll('img')) || [];
          if (!that.imgs.length && that.isPreview) {
            alert('无法事项图片预览功能');
            return {};
          }
          that.selected = that.imgs.indexOf(target);
          let mask = document.getElementById('mask');
          if (!mask) {
            //TODO 创建mask用于显示图片
          }
          //选中的图片索引
          let idx = that.selected;
          //初始化预览框的点击事件
          mask.addEventListener('click', (evt) => {
            const target = evt.target;
            if (target === mask) {
              mask.style.display = 'none';
            } else if (target.className === 'previous') {
              update(--idx);
            } else if (target.className === 'next') {
              update(++idx);
            }
          });
          // 更新和显示图片
          function update(idx) {
            //上下翻页并显示
            const [previous, next] = [...mask.querySelectorAll('a')];
            previous.style.visibility = idx ? 'visible' : 'hidden';
            next.style.visibility =
              idx < that.imgs.length - 1 ? 'visible' : 'hidden';
            const img = mask.querySelector('img');
            img.src = that.imgs[idx].src;
          }
          // 返回事件默认的出参：detials
          return {
            showmask() {
              mask.style.display = 'flex';
              update(that.selected);
            },
          };
        },
      });
    },
    handleClick(e) {
      if (!this.isPreview) {
        this.$emit('click', e);
      } else {
        let imgBox = document.getElementById('imgBox');
        //监听图片box的预览事件
        imgBox.addEventListener('preview', ({ detail }) => {
          detail.showmask();
        });
      }
    },
  },
};
</script>

<style lang="scss">
.col {
  padding: 10px 0;
  text-align: center;
}

#mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: space-between;
  #previewImg {
    height: 60%;
  }
  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    background-color: #aaa;
  }
}
</style>
