<template>
  <div>
    <div class="card-column">
      <a v-for="(card, index) in cards" :key='index' v-if="card.type == 'image' || card.type == 'video'" :href="card.link" target="_blank">
        <div class="card mb-4">
          <img class="card-img" :src="card.images.standard_resolution.url">
          <i class="fa fa-play" aria-hidden="true " v-if="card.type=='video'"></i>
          <div class="overlay" v-if="card.type=='video'"></div>
        </div>
      </a>
      <a v-else-if="card.type == 'carousel'" :key='index' :href="card.link" target="_blank">
        <div class="card mb-4" v-for="(content, index) in card.carousel_media" :key='index' v-if="content.type != 'video'">
          <img class="card-img" :src="content.images.standard_resolution.url">
        </div>
      </a>
    </div>
    <div v-if="!noMoreFeed" class="spinner" v-observe-visibility="getNextFeed"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "",
      feeds: [],
      cards: [],
      paginationUrl: "",
      noMoreFeed: null
    };
  },
  props: ["token", "account", "count"],
  computed: {
    feedsComputed() {
      return this.feeds.data;
    },
    paginationUrlComputed() {
      return this.paginationUrl;
    }
  },
  created: function() {
    this.$http
      .jsonp("search?access_token=" + this.token + "&q=" + this.account)
      .then(
        response => {
          console.log(response);
          const returnObject = response.body.data[0];
          this.userId = returnObject.id;
          this.getFeed();
          this.noMoreFeed = false;
        },
        response => {
          console.log(this.token, response.status);
        }
      );
  },
  methods: {
    getFeed() {
      this.$http
        .jsonp(
          this.userId +
            "/media/recent?access_token=" +
            this.token +
            "&count=" +
            this.count
        )
        .then(
          response => {
            const returnObject = response.body;
            console.log(response.body);
            this.feeds = returnObject;
            this.cards = returnObject.data;
            this.paginationUrl = returnObject.pagination.next_url;
          },
          error => {
            console.log(error);
          }
        );
    },
    getNextFeed() {
      if (this.noMoreFeed == false) {
        this.$http.jsonp(this.paginationUrl).then(
          response => {
            const returnObject = response.body;
            console.log(response.body);
            const newFeeds = returnObject.data;
            const newUrl = returnObject.pagination.next_url;
            Array.prototype.push.apply(this.cards, newFeeds); //merge the feed arrays
            if (newUrl) {
              this.paginationUrl = newUrl;
              this.$forceUpdate();
            } else {
              this.noMoreFeed = true;
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>

<style scoped lang="scss">
.spinner {
  position: relative;
  width: 100px;
  height: 100px;
  transform: translatey(-100vh);
  width: 1px;
  height: 1px;
  border: 2px solid transparent;
  border-radius: 5px;
  margin: 2rem auto;
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 100vh;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    border-radius: 50%;
    border-top: 2px solid #07d;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loadMore {
  width: 33%;
  width: calc(33% - 1.5rem);
  min-width: 120px;
  margin: auto;
  .disabled {
    cursor: not-allowed;
  }
}

.card-column {
  @media (min-width: 576px) {
    margin: auto;
    max-width: 40rem;
  }
}

.card-header {
  background: white;
}

.card-title {
  text-transform: capitalize;
  margin: 0;
}
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.33);
  top: 0;
}
.fa-play,
.fa-play-circle,
.fa-play-circle-o {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.85);
  font-size: 5rem;
}

.card {
  .card-body {
    min-height: 0;
    padding: 1.25rem;
  }
  .card-footer p {
    color: initial;
    text-transform: capitalize;
    margin: 0;
  }
}
</style>
