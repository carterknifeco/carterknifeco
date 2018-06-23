webpackJsonp([3],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Life_vue__ = __webpack_require__(500);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_928528d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Life_vue__ = __webpack_require__(593);
function injectStyle (ssrContext) {
  __webpack_require__(604)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-928528d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Life_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_928528d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Life_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_InstaLife_vue__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_InstaKnife_vue__ = __webpack_require__(581);
//
//
//
//
//
//
//




var logo = __webpack_require__(163);
// var desktop = require("../assets/busInterior.jpg");
// var mobile = require("../assets/busInterior.jpg");
var desktop = __webpack_require__(156);
var mobile = __webpack_require__(156);
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay knives",
        title: "knives",
        scrollTo: "#life"
      }
    };
  },
  components: {
    appJumbotron: __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__["a" /* default */],
    appInstaLife: __WEBPACK_IMPORTED_MODULE_1__sections_InstaLife_vue__["a" /* default */],
    appInstaKnife: __WEBPACK_IMPORTED_MODULE_2__sections_InstaKnife_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
  created: function () {
    this.$http.jsonp("search?access_token=" + this.token + "&q=" + this.account).then(response => {
      console.log(response);
      const returnObject = response.body.data[0];
      this.userId = returnObject.id;
      this.getFeed();
      this.noMoreFeed = false;
    }, response => {
      console.log(this.token, response.status);
    });
  },
  methods: {
    getFeed() {
      this.$http.jsonp(this.userId + "/media/recent?access_token=" + this.token + "&count=" + this.count).then(response => {
        const returnObject = response.body;
        console.log(response.body);
        this.feeds = returnObject;
        this.cards = returnObject.data;
        this.paginationUrl = returnObject.pagination.next_url;
      }, error => {
        console.log(error);
      });
    },
    getNextFeed() {
      if (this.noMoreFeed == false) {
        this.$http.jsonp(this.paginationUrl).then(response => {
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
        }, error => {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__molecules_InstaFeedCard_vue__ = __webpack_require__(512);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      token: "5931972678.97c04ed.2885623a31394fb78c7ea18491e1d6f1",
      account: "carterknife",
      count: 2
    };
  },
  components: {
    InstaFeedCard: __WEBPACK_IMPORTED_MODULE_0__molecules_InstaFeedCard_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__molecules_InstaFeedCard_vue__ = __webpack_require__(512);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      token: "2690419094.ffec7fc.4d49db51620343da9d3bd91206015c69",
      account: "carterknifeco",
      count: 2
    };
  },
  components: {
    InstaFeedCard: __WEBPACK_IMPORTED_MODULE_0__molecules_InstaFeedCard_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaFeedCard_vue__ = __webpack_require__(505);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7e7b616_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaFeedCard_vue__ = __webpack_require__(597);
function injectStyle (ssrContext) {
  __webpack_require__(607)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e7e7b616"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaFeedCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7e7b616_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaFeedCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "svg[data-v-928528d6]:not(:root){overflow:visible}.jumbotron[data-v-928528d6]{display:flex;align-items:center;background:transparent;overflow:hidden;position:relative}.jumbotron[data-v-928528d6]:before{position:absolute;content:\"\";z-index:1;height:15px;bottom:-15px;left:0;width:100%;-webkit-transform:scaleY(-1);transform:scaleY(-1);box-shadow:0 2px 10px 0 rgba(0,0,0,.035),0 3px 7px -2px rgba(0,0,0,.068),0 1px 12px 0 rgba(0,0,0,.07)}.jumbotron>div[data-v-928528d6]{display:flex;justify-content:center;align-items:center;flex-flow:column wrap}.jumbotron img[data-v-928528d6]:not(.bg){width:66vmin;min-width:320px}.jumbotron img.bg[data-v-928528d6]{z-index:-1;position:absolute;height:100%;width:100%;object-fit:cover;object-position:0 33%;left:0;top:0}", ""]);

// exports


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".spinner[data-v-e7e7b616]{position:relative;width:100px;height:100px;transform:translatey(-100vh);width:1px;height:1px;border:2px solid transparent;border-radius:5px;margin:2rem auto}.spinner[data-v-e7e7b616]:before{content:\"\";box-sizing:border-box;position:absolute;top:100vh;left:50%;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border-radius:50%;border-top:2px solid #07d;border-right:2px solid transparent;animation:spinner-data-v-e7e7b616 .6s linear infinite}@keyframes spinner-data-v-e7e7b616{to{transform:rotate(1turn)}}.loadMore[data-v-e7e7b616]{width:33%;width:calc(33% - 1.5rem);min-width:120px;margin:auto}.loadMore .disabled[data-v-e7e7b616]{cursor:not-allowed}@media (min-width:576px){.card-column[data-v-e7e7b616]{margin:auto;max-width:40rem}}.card-header[data-v-e7e7b616]{background:#fff}.card-title[data-v-e7e7b616]{text-transform:capitalize;margin:0}.overlay[data-v-e7e7b616]{height:100%;width:100%;position:absolute;background:rgba(0,0,0,.33);top:0}.fa-play-circle-o[data-v-e7e7b616],.fa-play-circle[data-v-e7e7b616],.fa-play[data-v-e7e7b616]{z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:hsla(0,0%,100%,.85);font-size:5rem}.card .card-body[data-v-e7e7b616]{min-height:0;padding:1.25rem}.card .card-footer p[data-v-e7e7b616]{color:initial;text-transform:capitalize;margin:0}", ""]);

// exports


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaKnife_vue__ = __webpack_require__(507);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_297c2e11_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaKnife_vue__ = __webpack_require__(586);
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaKnife_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_297c2e11_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaKnife_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaLife_vue__ = __webpack_require__(508);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_517c72bf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaLife_vue__ = __webpack_require__(589);
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstaLife_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_517c72bf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstaLife_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('insta-feed-card',{attrs:{"token":_vm.token,"account":_vm.account,"count":_vm.count}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('insta-feed-card',{attrs:{"token":_vm.token,"account":_vm.account,"count":_vm.count}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('app-insta-life',{attrs:{"id":"life"}}),_vm._v(" "),_c('app-insta-knife',{attrs:{"id":"knife"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"card-column"},_vm._l((_vm.cards),function(card,index){return (card.type == 'image' || card.type == 'video')?_c('a',{key:index,attrs:{"href":card.link,"target":"_blank"}},[_c('div',{staticClass:"card mb-4"},[_c('img',{staticClass:"card-img",attrs:{"src":card.images.standard_resolution.url}}),_vm._v(" "),(card.type=='video')?_c('i',{staticClass:"fa fa-play",attrs:{"aria-hidden":"true "}}):_vm._e(),_vm._v(" "),(card.type=='video')?_c('div',{staticClass:"overlay"}):_vm._e()])]):(card.type == 'carousel')?_c('a',{key:index,attrs:{"href":card.link,"target":"_blank"}},_vm._l((card.carousel_media),function(content,index){return (content.type != 'video')?_c('div',{key:index,staticClass:"card mb-4"},[_c('img',{staticClass:"card-img",attrs:{"src":content.images.standard_resolution.url}})]):_vm._e()})):_vm._e()})),_vm._v(" "),(!_vm.noMoreFeed)?_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.getNextFeed),expression:"getNextFeed"}],staticClass:"spinner"}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("77b6f7c2", content, true, {});

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("5672149a", content, true, {});

/***/ })

});
//# sourceMappingURL=3.build.js.map