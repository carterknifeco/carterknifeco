webpackJsonp([1],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__ = __webpack_require__(499);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15de73c4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__ = __webpack_require__(585);
function injectStyle (ssrContext) {
  __webpack_require__(599)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15de73c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15de73c4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_KnifeGrid_vue__ = __webpack_require__(583);
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
        scrollTo: "#knives"
      },
      cards: []
    };
  },
  components: {
    appJumbotron: __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__["a" /* default */],
    appKnifeCard: __WEBPACK_IMPORTED_MODULE_1__sections_KnifeGrid_vue__["a" /* default */]
  },
  computed: {
    knives() {
      return this.$root.$data.knives;
    }
  },
  mounted() {
    for (let i = 0; i < this.knives.length; i++) {
      let image = __webpack_require__(609)(`./${i + 1}a.jpg`);
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

/***/ 509:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["card"],
  computed: {
    cardBody() {
      return `Hello Mathhew! I'd like to order the following knife from you:\n \n${this.card.content}`;
    },
    mailToBody() {
      let mailToHref = `mailto:carterknifeco@gmail.com?subject=Custom, ready-to-order knife purchase from carterknifeco.com&body=${this.cardBody}`;
      return mailToHref;
    }
  }
});

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".container-fluid[data-v-15de73c4]{padding-bottom:4rem}", ""]);

// exports


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".card[data-v-c4b55964]{cursor:default;box-shadow:none}.card h3[data-v-c4b55964],.card h4[data-v-c4b55964]{margin:0}.card[data-v-c4b55964]:hover{transform:none;box-shadow:none}.card-body[data-v-c4b55964]{min-height:0;padding:1rem 1.25rem;padding-bottom:0}.card-body p[data-v-c4b55964]{font-family:Open Sans;margin-bottom:0}.card-img[data-v-c4b55964]{border-radius:0}.card-header[data-v-c4b55964]{display:flex;justify-content:space-between;align-items:center}", ""]);

// exports


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10a.jpg?178d607f3cb4e97e39287e4c9601ab6a";

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11a.jpg?b39279a72ea3b70b9c0f17c3769f6d2f";

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12a.jpg?fc62370cf9745ad7c7cd185e860327d4";

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a.jpg?16cbfb7cd84e1bb0ea8d876e311b34d5";

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a.jpg?c74abccb8d7c4688013b93c3770d408c";

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a.jpg?f6a0c71ec41c09e0416b76097ca015d6";

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a.jpg?d633c99b22ce57fcbfe2fce9efc50eab";

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a.jpg?c8fda0bb58f10e1b0a0eef8e7d167eee";

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a.jpg?7e2a963bf211a29734acc2d869dccc57";

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a.jpg?ccc6a44acd073b26189adea833a19028";

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a.jpg?8d8b73955215275d4e47d176d30644ae";

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a.jpg?633737a2286b9e38b6ae4291bc4fdf40";

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeGrid_vue__ = __webpack_require__(509);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4b55964_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__ = __webpack_require__(595);
function injectStyle (ssrContext) {
  __webpack_require__(606)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c4b55964"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeGrid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4b55964_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('b-container',{attrs:{"fluid":"","id":"knives"}},[_c('b-card-group',{attrs:{"columns":""}},_vm._l((_vm.cards),function(card,index){return _c('app-knife-card',{key:index,attrs:{"card":card,"index":index}})}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.card.for_sale)?_c('b-card',{attrs:{"img-src":_vm.card.image,"img-fluid":"","alt":"a picture of a custom made knife","img-top":""}},[_c('blockquote',{staticClass:"card-blockquote"},[_c('p',{staticClass:"card-text"},[_vm._v("\n      "+_vm._s(_vm.card.content)+"\n    ")])])]):_c('div',{staticClass:"card bg-dark text-white"},[_c('div',{staticClass:"card-header"},[_c('h3',{staticClass:"text-warning"},[_vm._v("For Sale\n      "),(_vm.card.price)?_c('span',[_vm._v(":")]):_vm._e()]),_vm._v(" "),_c('h3',{staticClass:"text-warning"},[(_vm.card.price)?_c('span',[_vm._v("$")]):_vm._e(),_vm._v(_vm._s(_vm.card.price))])]),_vm._v(" "),_c('img',{staticClass:"card-img",attrs:{"src":_vm.card.image,"alt":"a picture of a custom made knife"}}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('blockquote',[_c('p',{staticClass:"card-text"},[_vm._v(_vm._s(_vm.card.content))]),_vm._v(" "),_c('a',{staticClass:"btn btn-warning card-btn mt-3 mb-1",attrs:{"href":_vm.mailToBody,"target":"_blank"}},[_c('i',{staticClass:"fa fa-envelope mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Order My Knife")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(515);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("c086e242", content, true, {});

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("ad7936dc", content, true, {});

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./10a.jpg": 555,
	"./11a.jpg": 556,
	"./12a.jpg": 557,
	"./1a.jpg": 558,
	"./2a.jpg": 559,
	"./3a.jpg": 560,
	"./4a.jpg": 561,
	"./5a.jpg": 562,
	"./6a.jpg": 563,
	"./7a.jpg": 564,
	"./8a.jpg": 565,
	"./9a.jpg": 566
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
webpackContext.id = 609;

/***/ })

});
//# sourceMappingURL=1.build.js.map