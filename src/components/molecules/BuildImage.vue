<template>
  <div>
    <div v-for="(option, index) in step.options" :key="index" class="overlay" @click="growImage()" :class="step.selected == option.value ? 'showMe' : ''">
      <img class="card-img" :src="option.src ? `/dist/${option.src}` : `/dist/${option.value}.jpg`" :img-alt="step.selected">
      <div class="large-overlay" :class="{grow : growMe == true}">
        <div class="image-holder">
          <img class="card-img" :src="option.src ? `/dist/${option.src}` : `/dist/${option.value}.jpg`" :img-alt="option.value">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
var cursor = require("../../assets/x.svg");
var cursor2 = require("../../assets/x.png");
export default {
  props: ["step"],
  data() {
    return {
      grow: this.step.grow,
      cursor: cursor,
      customCursor: {
        cursor: `url(${cursor}),url(${cursor2}), pointer`
      }
    };
  },
  computed: {
    growMe() {
      let growMe = this.grow;
      return growMe;
    }
  },
  methods: {
    getImageSrc(image) {
      return `/dist/${image}.jpg`;
    },
    getThumbSrc(image) {
      return `/dist/thumbs - ${image}.jpg`;
    },
    growImage() {
      this.grow = !this.grow;
      console.log(this.step);
    }
  }
};
</script>
<style scoped lang="scss">
.overlay {
  display: none;
  &.showMe {
    display: block;
  }
  cursor: pointer;
  .card-img {
    border-radius: 0;
  }
}
.large-overlay {
  display: none;
  cursor: default;
}
.large-overlay.grow {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  .image-holder {
    position: relative;
    &:before {
      content: url("../../assets/x.svg");
      line-height: 1;
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      cursor: pointer;
      background: #dc3545;
    }
  }
  .card-img {
    @media (orientation: portrait) {
      width: 100%;
      height: auto;
    }
    @media (orientation: landscape) {
      width: auto;
      height: 90%;
      height: calc(100vh - 114px);
    }
  }
  .close-icon {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 100%);
  }
}
</style>