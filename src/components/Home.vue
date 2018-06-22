
<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <app-home-body id="home"></app-home-body>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import HomeBody from "./sections/HomeBody.vue";
var logo = require("../assets/logoWhite.png");
var logoText = require("../assets/logoWhiteText.png");
var logoHead = require("../assets/logoWhiteHead.png");
var logoMountainsFront = require("../assets/logoWhiteMountainsFront.png");
var logoMountainsRear = require("../assets/logoWhiteMountainsRear.png");
var desktop = require("../assets/Yosemite-Cliff2.jpg");
var mobile = require("../assets/Yosemite-Cliff4.jpg");
export default {
  data() {
    return {
      hero: {
        logo: {
          flat: logo,
          head: logoHead,
          text: logoText,
          mountains: {
            front: logoMountainsFront,
            rear: logoMountainsRear
          }
        },
        desktop: desktop,
        mobile: mobile,
        class: "home",
        scrollTo: "#home"
      }
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appHomeBody: HomeBody
  }
};
</script>
