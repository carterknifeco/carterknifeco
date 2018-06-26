<template>
  <app-knife-card-with-video v-if="card.video" :card="card" :cardBody="cardBody" :mailToBody="mailToBody"></app-knife-card-with-video>
  <app-knife-card-with-image v-else :card="card" :cardBody="cardBody" :mailToBody="mailToBody"></app-knife-card-with-image>
</template>
<script>
import knifeCardImage from "../molecules/KnifeCardImage.vue";
import knifeCardVideo from "../molecules/KnifeCardVideo.vue";
export default {
  components: {
    appKnifeCardWithImage: knifeCardImage,
    appKnifeCardWithVideo: knifeCardVideo
  },
  props: ["card"],
  computed: {
    cardBody() {
      return `Hello Mathhew! I'd like to order the following knife from you:%0D%0A%0D%0A${
        this.card.content
      }`;
    },
    mailToBody() {
      let mailToHref = `mailto:carterknifeco@gmail.com?subject=Custom, ready-to-order knife purchase from carterknifeco.com&body=${
        this.cardBody
      }`;
      return mailToHref;
    }
  }
};
</script>
<style lang="scss">
#knives {
  .card {
    h3,
    h4 {
      margin: 0;
    }
    cursor: default;
    box-shadow: initial;
    &:hover {
      transform: none;
      box-shadow: initial;
    }
  }
  .card-body {
    min-height: 0;
    padding: 1rem 1.25rem;
    padding-bottom: 0;
    p {
      font-family: "Open Sans";
      margin-bottom: 0;
    }
  }
  .card-img {
    border-radius: 0;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>