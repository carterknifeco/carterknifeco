<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <app-insta-life id="life"></app-insta-life>
    <app-insta-knife id="knife"></app-insta-knife>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import InstaLife from "./sections/InstaLife.vue";
import InstaKnife from "./sections/InstaKnife.vue";
var logo = require("../assets/logoWhite.png");
// var desktop = require("../assets/busInterior.jpg");
// var mobile = require("../assets/busInterior.jpg");
var desktop = require("../assets/knives.jpg");
var mobile = require("../assets/knives.jpg");
export default {
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay knives",
        title: "knives",
        scrollTo: "#life"
      }
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appInstaLife: InstaLife,
    appInstaKnife: InstaKnife
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
</style>
