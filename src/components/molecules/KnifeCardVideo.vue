<template>
  <div class="card" :class="{ 'bg-dark': card.for_sale,  'text-white': card.for_sale}">
    <div class="card-header" v-if="card.for_sale">
      <h3 class="text-warning">For Sale
        <span v-if="card.price">:</span>
      </h3>
      <h3 class="text-warning">
        <span v-if="card.price">$</span>{{card.price}}</h3>
    </div>
    <div class="image-video-toggle" :class="{playing: playing}" @click="playVideo">
      <i class="fa fa-play"></i>
      <img ref="imageCard" class="card-img" :src="card.image" alt="a picture of a custom made knife">
      <div class="embed-responsive" :style="videoHeight">
        <iframe class="embed-responsive-item" :src="videoSource" allowfullscreen allow="autoplay"></iframe>
      </div>
    </div>
    <div class="card-body">
      <blockquote>
        <p class="card-text">{{card.content}}</p>
        <a v-if="card.for_sale" :href="mailToBody" target="_blank" class="btn btn-warning card-btn mt-3 mb-1">
          <i class="fa fa-envelope mr-2" aria-hidden="true"></i>Order My Knife</a>
      </blockquote>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playing: false,
      videoHeight: {
        height: "0px"
      }
    };
  },
  props: ["card", "cardBody", "mailToBody"],
  computed: {
    videoSource() {
      var src = this.netNewUrl(this.card.video);
      if (this.playing) {
        src += "?rel=0&autoplay=1";
      }
      return src;
    }
  },
  methods: {
    playVideo() {
      this.playing = true;
      this.videoHeight.height = `${this.$refs.imageCard.height}px`;
    },
    netNewUrl(url) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        return `https://www.youtube.com/embed/${match[2]}`; //change the video source if needed
      } else {
        return url; //return the original source if not
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.embed-responsive {
  &:before {
    display: none;
  }
}
.image-video-toggle {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.33);
  }
  .embed-responsive {
    display: none;
  }
  .fa-play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
  }
  &.playing {
    .embed-responsive {
      display: block;
    }
    &:before,
    .fa-play,
    .card-img {
      display: none;
    }
  }
}
</style>