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
      token: "5931972678.97c04ed.2885623a31394fb78c7ea18491e1d6f1",
      account: "carterknife",
      count: 2
    };
  },
  components: {
    InstaFeedCard
  }
};
</script>
