<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <app-map></app-map>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import MapVue from "./sections/Map.vue";
var desktop = require("../assets/busBikes.jpg");
var mobile = require("../assets/busBikes.jpg");
var bend = require("../assets/bend.png");
var bendRing = require("../assets/bendRing.png");
var bendText = require("../assets/bendText.png");
var bendTextInner = require("../assets/bendTextInner.png");
var bendTextOuter = require("../assets/bendTextOuter.png");
export default {
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay bus",
        title: "buy locally",
        subtitle: "in Bend, OR",
        smallLogo: {
          ring: bendRing,
          text: {
            whole: bendText,
            inner: bendTextInner,
            outer: bendTextOuter
          },
          background: bend
        },
        subtitleClass: "bend",
        scrollTo: "#map"
      }
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appMap: MapVue
  }
};
</script>
<style lang="scss" scoped>
svg:not(:root) {
  overflow: visible;
}
</style>
