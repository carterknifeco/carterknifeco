<template>
    <div class="overlay" @click="growImage()">
        <img class="card-img" :src="image" alt="a picture of a custom made knife">
        <div class="large-overlay" :class="{grow : grow}">
            <div class="image-holder">
                <img class="card-img" :src="image" img-alt="a picture of a custom made knife">
            </div>
        </div>
    </div>
</template>


<script>
export default {
  props: ["image"],
  data() {
    return {
      grow: false
    };
  },
  methods: {
    growImage() {
      this.grow = !this.grow;
    }
  }
};
</script>
<style scoped lang="scss">
.overlay {
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