<template>
  <b-card v-if="!card.for_sale" :img-src="card.image" img-fluid img-alt="image" img-top>
    <blockquote class="card-blockquote">
      <p class="card-text">
        {{card.content}}
      </p>
    </blockquote>
  </b-card>
  <b-card v-else border-variant="primary" header="For Sale!" header-bg-variant="primary" footer-bg-variant="primary" header-text-variant="white" :img-src="card.image" img-fluid img-alt="image" img-top>
    <blockquote class="card-blockquote">
      <p class="card-text">
        {{card.content}}
      </p>
    </blockquote>
    <div v-if="card.price" slot="footer" class="bg-primary text-white">
      Price: ${{card.price}}
    </div>
  </b-card>
</template>
<script>
export default {
  props: ["card"],
  created() {
    console.log(this.card);
  }
};
</script>
<style lang="scss" scoped>
.card {
  cursor: default;
  box-shadow: initial;
  &:hover {
    transform: none;
    box-shadow: initial;
  }
}
.card-body {
  min-height: 0;
  padding: 1.25rem;
  padding-bottom: 0;
}
</style>