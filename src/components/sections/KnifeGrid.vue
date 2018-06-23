<template>
  <b-card v-if="!card.for_sale" :img-src="card.image" img-fluid alt="a picture of a custom made knife" img-top>
    <blockquote class="card-blockquote">
      <p class="card-text">
        {{card.content}}
      </p>
    </blockquote>
  </b-card>
  <div v-else class="card bg-dark text-white">
    <div class="card-header">
      <h3 class="text-warning">For Sale
        <span v-if="card.price">:</span>
      </h3>
      <h3 class="text-warning">
        <span v-if="card.price">$</span>{{card.price}}</h3>
    </div>
    <img class="card-img" :src="card.image" alt="a picture of a custom made knife">
    <div class="card-body">
      <blockquote>
        <p class="card-text">{{card.content}}</p>
        <a :href="mailToBody" target="_blank" class="btn btn-warning card-btn mt-3 mb-1">
          <i class="fa fa-envelope mr-2" aria-hidden="true"></i>Order My Knife</a>
      </blockquote>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
  computed: {
    cardBody() {
      return `Hello Mathhew! I'd like to order the following knife from you:\n \n${
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
<style lang="scss" scoped>
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
</style>