<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <app-story id="story"></app-story>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import Story from "./sections/Story.vue";
var roo = require("../assets/roo.jpg");
export default {
  data() {
    return {
      hero: {
        desktop: roo,
        mobile: roo,
        class: "overlay align-middle",
        title: "About",
        scrollTo: "#story"
      }
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appStory: Story
  }
};
</script>
