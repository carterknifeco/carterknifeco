<template>
  <div>
    <app-jumbotron :hero="hero"></app-jumbotron>
    <b-container fluid id="knives">
      <b-card-group columns>
        <app-knife-card v-for="(card, index) in cards" :key="index" :card="card" :index="index"></app-knife-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import Jumbotron from "./sections/Jumbotron.vue";
import KnifeGrid from "./sections/KnifeGrid.vue";
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
        scrollTo: "#knives"
      },
      cards: []
    };
  },
  components: {
    appJumbotron: Jumbotron,
    appKnifeCard: KnifeGrid
  },
  computed: {
    knives() {
      return this.$root.$data.knives;
    }
  },
  mounted() {
    for (let i = 0; i < this.knives.length; i++) {
      let image = require(`../assets/knives/${i + 1}a.jpg`);
      let cardObject = {
        //image: image,
        image: this.knives[i].image_path,
        content: this.knives[i].description_text
      };
      this.cards.push(cardObject);
    }
  }
};
</script>
<style lang="scss" scoped>
.container-fluid {
  padding-bottom: 4rem;
}
</style>
