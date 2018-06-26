<template>
  <b-container fluid>
    <b-row>
      <b-col v-for="(card, key) in cardGroup" :key="card.title" class="col-12 col-md-6 col-lg-4 mb-4">
        <app-card :card="card"></app-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Card from "../molecules/Card.vue";
var img0 = require("../../assets/process/0.jpg");
var busFront = require("../../assets/busFrontCropped.jpg");
var busInterior = require("../../assets/busInterior.jpg");
var busGrind = require("../../assets/busGrind.jpg");
var drawer = require("../../assets/drawer.jpg");
var busBikes = require("../../assets/busBikes.jpg");
var flag = require("../../assets/flag.jpg");
var knives = require("../../assets/knives.jpg");
var knives2 = require("../../assets/knives2.jpg");
var knifeInHand = require("../../assets/knifeInHand.jpg");
var handyMan = require("../../assets/handyMan.jpg");
var knivesRaw = require("../../assets/rawKnives.jpg");
var roo = require("../../assets/roo2.jpg");
var bend = require("../../assets/bend.jpg");
export default {
  data() {
    return {
      cardGroup: [
        {
          image: knives2,
          title: "Custom Knives",
          path: "/knives",
          modal: false,
          button: "View Knives",
          content: "All of my knives are custom made to your order."
        },
        {
          image: knifeInHand,
          title: "hand crafted",
          path: "/process",
          modal: false,
          button: "See The Process",
          content: "Visit my process gallery to see my crafting process."
        },
        {
          image: knives,
          title: "Available to Order",
          path: "/build",
          //modal: 'myModal',
          modal: false,
          button: "Build My Knife",
          content: "Build your custom knife and contact me to order it today!",
          class: "warning"
        },
        {
          image: bend,
          title: "Available Locally in Bend, OR",
          path: "/local",
          modal: false,
          button: "Find Local Sellers",
          content:
            "View a map of Bend, Oregon to find partners selling my knives."
        },
        {
          image: busFront,
          title: "Know Your Knife Maker",
          path: "/about",
          modal: false,
          button: "Read On!",
          content:
            "I'm Matthew Carter, and I handmake knives. Wanna know more about how I got started?"
        },
        {
          image: busBikes,
          title: "Culture",
          path: "https://www.instagram.com/carterknifeco/",
          modal: false,
          button: "Instagram Gallery",
          content:
            "Curious about what a wandering knife maker gets up to? Check out my Instagram feed.",
          isLink: true
        }
      ]
    };
  },
  components: {
    appCard: Card
  }
};
</script>
<style lang="scss" scoped>
.row {
  align-items: stretch;
  .card {
    height: 100%;
  }
}
</style>
