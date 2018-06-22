<template>
    <b-card :img-src="card.image" img-fluid img-alt="image" img-top>
        <blockquote class="card-blockquote">
            <p class="card-text">
                {{card.content}}
            </p>
        </blockquote>
    </b-card>
</template>
<script>
export default {
  props: ["card"],
  computed: {
    source() {
      return `../../assets/knives/${this.index}.jpg`;
    }
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