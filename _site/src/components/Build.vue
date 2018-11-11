<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <app-build-knife id="knife-builder"></app-build-knife>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import BuildKnife from "./sections/BuildKnife.vue";
var desktop = require("../assets/knives2.jpg");
var mobile = require("../assets/knives2.jpg");
const custom = window.custom;
export default {
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay knives build",
        title: "Build My Knife",
        scrollTo: "#knife-builder",
        cornerLogo: {
          text: "custom knife:",
          price: custom.price
        }
      }
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appBuildKnife: BuildKnife
  }
};
</script>
<style lang="scss" scoped>
svg:not(:root) {
  overflow: visible;
}

.jumbotron {
  display: flex;
  align-items: center;
  background: transparent;
  overflow: hidden;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    z-index: 1;
    height: 15px;
    bottom: -15px;
    left: 0;
    width: 100%;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.035),
      0 3px 7px -2px rgba(0, 0, 0, 0.068), 0 1px 12px 0 rgba(0, 0, 0, 0.07);
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
  img:not(.bg) {
    width: 66vmin;
    min-width: 320px;
  }
  img.bg {
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 33%;
    left: 0;
    top: 0;
  }
}
#knife-builder {
  min-height: 100vh;
  min-height: calc(100vh - 83px - 57px);
}
</style>
