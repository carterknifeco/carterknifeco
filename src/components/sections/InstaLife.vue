<template>
<div class="container-fluid">
  <insta-feed-card :token="token" :account="account" :count="count"></insta-feed-card>
</div>
</template>
<script>
import InstaFeedCard from "../molecules/InstaFeedCard.vue";
export default {
  data() {
    return {
      token: "2690419094.ffec7fc.4d49db51620343da9d3bd91206015c69",
      account: "carterknifeco",
      count: 2
    };
  },
  components: {
    InstaFeedCard
  }
};
</script>
