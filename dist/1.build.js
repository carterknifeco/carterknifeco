webpackJsonp([1],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__ = __webpack_require__(499);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9e4cb30_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__ = __webpack_require__(598);
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
var __vue_scopeId__ = "data-v-f9e4cb30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Knives_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9e4cb30_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Knives_vue__["a" /* default */],
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
        content: this.knives[i].description_text
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["card"],
  computed: {
    source() {
      return `../../assets/knives/${this.index}.jpg`;
    }
  }
});

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".card[data-v-af8b52ca]{cursor:default;box-shadow:none}.card[data-v-af8b52ca]:hover{transform:none;box-shadow:none}.card-body[data-v-af8b52ca]{min-height:0;padding:1.25rem;padding-bottom:0}", ""]);

// exports


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".container-fluid[data-v-f9e4cb30]{padding-bottom:4rem}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af8b52ca_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__ = __webpack_require__(594);
function injectStyle (ssrContext) {
  __webpack_require__(605)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-af8b52ca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KnifeGrid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af8b52ca_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KnifeGrid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-card',{attrs:{"img-src":_vm.card.image,"img-fluid":"","img-alt":"image","img-top":""}},[_c('blockquote',{staticClass:"card-blockquote"},[_c('p',{staticClass:"card-text"},[_vm._v("\n            "+_vm._s(_vm.card.content)+"\n        ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('b-container',{attrs:{"fluid":"","id":"knives"}},[_c('b-card-group',{attrs:{"columns":""}},_vm._l((_vm.cards),function(card,index){return _c('app-knife-card',{key:index,attrs:{"card":card,"index":index}})}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("7f564d14", content, true, {});

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("5d492153", content, true, {});

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