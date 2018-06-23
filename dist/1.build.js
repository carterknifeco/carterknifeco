webpackJsonp([1],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__ = __webpack_require__(500);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_707dd80a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__ = __webpack_require__(598);
function injectStyle (ssrContext) {
  __webpack_require__(610)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-707dd80a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_707dd80a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "x.svg?658f1a6dc795abba418d363e7f8abef6";

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_KnifeGrid_vue__ = __webpack_require__(586);
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

// import Jumbotron from "./sections/Jumbotron.vue";

// var desktop = require("../assets/knives.jpg");
// var mobile = require("../assets/knives.jpg");
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      hero: {
        // desktop: desktop,
        // mobile: mobile,
        class: "overlay knives",
        title: "knives",
        scrollTo: "#knives"
      },
      cards: []
    };
  },
  components: {
    // appJumbotron: Jumbotron,
    appKnifeCard: __WEBPACK_IMPORTED_MODULE_0__sections_KnifeGrid_vue__["a" /* default */]
  },
  computed: {
    knives() {
      return this.$root.$data.knives;
    }
  },
  mounted() {
    for (let i = 0; i < this.knives.length; i++) {
      let image = __webpack_require__(614)(`./${i + 1}a.jpg`);
      let cardObject = {
        //image: image,
        image: this.knives[i].image_path,
        content: this.knives[i].description_text,
        for_sale: this.knives[i].for_sale,
        price: this.knives[i].price
      };
      this.cards.push(cardObject);
    }
  }
});

/***/ }),

/***/ 507:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["image"],
  data() {
    return {
      grow: false
    };
  },
  methods: {
    growImage() {
      this.grow = !this.grow;
    }
  }
});

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__molecules_KnifeImage_vue__ = __webpack_require__(582);
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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: { appKnifeImage: __WEBPACK_IMPORTED_MODULE_0__molecules_KnifeImage_vue__["a" /* default */] },
  props: ["card"],
  computed: {
    cardBody() {
      return `Hello Mathhew! I'd like to order the following knife from you:%0D%0A%0D%0A${this.card.content}`;
    },
    mailToBody() {
      let mailToHref = `mailto:carterknifeco@gmail.com?subject=Custom, ready-to-order knife purchase from carterknifeco.com&body=${this.cardBody}`;
      return mailToHref;
    }
  }
});

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".card[data-v-57761dda]{cursor:default;box-shadow:none}.card h3[data-v-57761dda],.card h4[data-v-57761dda]{margin:0}.card[data-v-57761dda]:hover{transform:none;box-shadow:none}.card-body[data-v-57761dda]{min-height:0;padding:1rem 1.25rem;padding-bottom:0}.card-body p[data-v-57761dda]{font-family:Open Sans;margin-bottom:0}.card-img[data-v-57761dda]{border-radius:0}.card-header[data-v-57761dda]{display:flex;justify-content:space-between;align-items:center}", ""]);

// exports


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(156);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".overlay[data-v-5d843f9d]{cursor:pointer}.overlay.showMe[data-v-5d843f9d]{display:block}.overlay .card-img[data-v-5d843f9d]{border-radius:0}.large-overlay[data-v-5d843f9d]{display:none;cursor:default}.large-overlay.grow[data-v-5d843f9d]{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5)}.large-overlay.grow .image-holder[data-v-5d843f9d]{position:relative}.large-overlay.grow .image-holder[data-v-5d843f9d]:before{content:url(" + escape(__webpack_require__(492)) + ");line-height:1;position:absolute;top:0;right:0;color:#fff;cursor:pointer;background:#dc3545}@media (orientation:portrait){.large-overlay.grow .card-img[data-v-5d843f9d]{width:100%;height:auto}}@media (orientation:landscape){.large-overlay.grow .card-img[data-v-5d843f9d]{width:auto;height:90%;height:100vh}}.large-overlay.grow .close-icon[data-v-5d843f9d]{position:absolute;right:0;top:0;transform:translate(-100%,100%)}", ""]);

// exports


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".container-fluid[data-v-707dd80a]{padding-bottom:4rem}", ""]);

// exports


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10a.jpg?178d607f3cb4e97e39287e4c9601ab6a";

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11a.jpg?b39279a72ea3b70b9c0f17c3769f6d2f";

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12a.jpg?fc62370cf9745ad7c7cd185e860327d4";

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a.jpg?16cbfb7cd84e1bb0ea8d876e311b34d5";

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a.jpg?c74abccb8d7c4688013b93c3770d408c";

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a.jpg?f6a0c71ec41c09e0416b76097ca015d6";

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a.jpg?d633c99b22ce57fcbfe2fce9efc50eab";

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a.jpg?c8fda0bb58f10e1b0a0eef8e7d167eee";

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a.jpg?7e2a963bf211a29734acc2d869dccc57";

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a.jpg?ccc6a44acd073b26189adea833a19028";

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a.jpg?8d8b73955215275d4e47d176d30644ae";

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a.jpg?633737a2286b9e38b6ae4291bc4fdf40";

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeImage_vue__ = __webpack_require__(507);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d843f9d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeImage_vue__ = __webpack_require__(597);
function injectStyle (ssrContext) {
  __webpack_require__(609)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d843f9d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d843f9d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeImage_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeGrid_vue__ = __webpack_require__(511);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57761dda_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__ = __webpack_require__(595);
function injectStyle (ssrContext) {
  __webpack_require__(608)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57761dda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeGrid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57761dda_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.card.for_sale)?_c('div',{staticClass:"card"},[_c('app-knife-image',{attrs:{"image":_vm.card.image}}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('blockquote',[_c('p',{staticClass:"card-text"},[_vm._v(_vm._s(_vm.card.content))])])])],1):_c('div',{staticClass:"card bg-dark text-white"},[_c('div',{staticClass:"card-header"},[_c('h3',{staticClass:"text-warning"},[_vm._v("For Sale\n      "),(_vm.card.price)?_c('span',[_vm._v(":")]):_vm._e()]),_vm._v(" "),_c('h3',{staticClass:"text-warning"},[(_vm.card.price)?_c('span',[_vm._v("$")]):_vm._e(),_vm._v(_vm._s(_vm.card.price))])]),_vm._v(" "),_c('app-knife-image',{attrs:{"image":_vm.card.image}}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('blockquote',[_c('p',{staticClass:"card-text"},[_vm._v(_vm._s(_vm.card.content))]),_vm._v(" "),_c('a',{staticClass:"btn btn-warning card-btn mt-3 mb-1",attrs:{"href":_vm.mailToBody,"target":"_blank"}},[_c('i',{staticClass:"fa fa-envelope mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Order My Knife")])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overlay",on:{"click":function($event){_vm.growImage()}}},[_c('img',{staticClass:"card-img",attrs:{"src":_vm.image,"alt":"a picture of a custom made knife"}}),_vm._v(" "),_c('div',{staticClass:"large-overlay",class:{grow : _vm.grow}},[_c('div',{staticClass:"image-holder"},[_c('img',{staticClass:"card-img",attrs:{"src":_vm.image,"img-alt":"a picture of a custom made knife"}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding-top":"60px"}},[_c('b-container',{attrs:{"fluid":"","id":"knives"}},[_c('b-card-group',{attrs:{"columns":""}},_vm._l((_vm.cards),function(card,index){return _c('app-knife-card',{key:index,attrs:{"card":card,"index":index}})}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("9faaa906", content, true, {});

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1e5f63a6", content, true, {});

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("22527406", content, true, {});

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./10a.jpg": 557,
	"./11a.jpg": 558,
	"./12a.jpg": 559,
	"./1a.jpg": 560,
	"./2a.jpg": 561,
	"./3a.jpg": 562,
	"./4a.jpg": 563,
	"./5a.jpg": 564,
	"./6a.jpg": 565,
	"./7a.jpg": 566,
	"./8a.jpg": 567,
	"./9a.jpg": 568
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 614;

/***/ })

});
//# sourceMappingURL=1.build.js.map