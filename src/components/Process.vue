<template>
  <div>
    <app-jumbotron v-for="(heroSection, index) in process" :hero="heroSection" :key="index"></app-jumbotron>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
var img0 = require("../assets/process/0.jpg");
var img1 = require("../assets/process/1.jpg");
var img2 = require("../assets/process/2.jpg");
var img3 = require("../assets/busInterior.jpg");
var img4 = require("../assets/process/4.jpg");
var img5 = require("../assets/process/5.jpg");
var img6 = require("../assets/process/6.jpg");
var img7 = require("../assets/process/7.jpg");
var img8 = require("../assets/process/8.jpg");
var img9 = require("../assets/process/9.jpg");
var img10 = require("../assets/process/10.jpg");
var imgAlt = require("../assets/knifeInHand.jpg");
var busGrind = require("../assets/busGrind.jpg");
export default {
  data() {
    return {
      process: [
        {
          desktop: busGrind,
          mobile: busGrind,
          class: "knives overlay",
          title: "process",
          id: "zero",
          scrollTo: "#one"
        },
        {
          desktop: img1,
          mobile: img1,
          class: "process text-small",
          title: "measure the knife",
          id: "one",
          scrollTo: "#two"
        },
        {
          desktop: img2,
          mobile: img2,
          class: "process text-small",
          title: "shape the style",
          id: "two",
          scrollTo: "#three"
        },
        {
          desktop: img3,
          mobile: img3,
          class: "process text-small",
          title: "a happy carter",
          id: "three",
          scrollTo: "#four"
        },
        {
          desktop: img10,
          mobile: img10,
          class: "process text-small",
          title: "grind with the bevel",
          id: "four",
          scrollTo: "#five"
        },
        {
          desktop: img4,
          mobile: img4,
          class: "process text-small",
          title: "work the bevel in",
          id: "five",
          scrollTo: "#six"
        },
        {
          desktop: img6,
          mobile: img6,
          class: "process text-small",
          title: "cut and file the brass",
          id: "six",
          scrollTo: "#seven"
        },
        {
          desktop: img7,
          mobile: img7,
          class: "process text-small",
          title: "epoxy handle and shape",
          id: "seven",
          scrollTo: "#eight"
        },
        {
          desktop: imgAlt,
          mobile: imgAlt,
          class: "process text-small",
          title: "hand sand and finish the handle",
          id: "eight",
          scrollTo: "#nine"
        },
        {
          desktop: img9,
          mobile: img9,
          class: "process text-small",
          title: "hand stitch custom sheath",
          id: "nine",
          scrollTo: "#zero",
          flipCursor: true
        }
      ]
    };
  },
  components: {
    appJumbotron: Jumbotron
  }
};
</script>
<style lang="scss" scoped>
svg:not(:root) {
  overflow: visible;
}
</style>
