import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import VueParallaxJs from "vue-parallax-js";
import VueResource from "vue-resource";
import VueObserveVisibility from "vue-observe-visibility";
import VueClipboards from "vue-clipboards";
import VueInstagram from "vue-instagram";
import { routes } from "./routes";
import VueAnalytics from "vue-analytics";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const VueGoogleMaps = require("vue2-google-maps");
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueClipboards);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueParallaxJs);
Vue.use(VueInstagram);
Vue.use(VueResource);
Vue.use(VueObserveVisibility);

Vue.http.options.root = "https://api.instagram.com/v1/users/";

const router = new VueRouter({
  //mode: 'history', //no hashes
  routes
});
Vue.use(VueAnalytics, {
  id: "UA-107179436-1",
  router
});
router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});

let knives = window.knives;

let data = { knives };

new Vue({
  el: "#app",
  router,
  data: data,
  render: h => h(App)
});
