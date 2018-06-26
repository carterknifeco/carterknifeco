<template>
  <router-link v-if="!card.isLink" tag="div" v-bind:to="card.path" v-b-modal="card.modal" class="card" :class="card.class">
    <a>
      <img class="card-img-top" :src="imageSource" :alt="card.title">
      <h4 class="card-title-strip" :class="card.class">{{card.title}}</h4>
      <div class="card-body">
        <p class="card-text">{{card.content}}</p>
        <button class="btn btn-primary" :class="'btn-' + card.class">{{card.button}}</button>
      </div>
    </a>
  </router-link>
  <div v-else-if="card.isLink" tag="div" class="card" :class="card.class">
    <a target="_blank" :href="card.path">
      <img class="card-img-top" :src="imageSource" :alt="card.title">
      <h4 class="card-title-strip" :class="card.class">{{card.title}}</h4>
      <div class="card-body">
        <p class="card-text">{{card.content}}</p>
        <button class="btn btn-primary" :class="'btn-' + card.class">{{card.button}}</button>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["card"],
  computed: {
    imageSource() {
      return this.card.image;
    }
  }
};
</script>
