webpackJsonp([0],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Build_vue__ = __webpack_require__(498);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cc1d645_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Build_vue__ = __webpack_require__(585);
function injectStyle (ssrContext) {
  __webpack_require__(601)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cc1d645"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Build_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cc1d645_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Build_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "x.svg?658f1a6dc795abba418d363e7f8abef6";

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_BuildKnife_vue__ = __webpack_require__(576);
//
//
//
//
//
//



var desktop = __webpack_require__(159);
var mobile = __webpack_require__(159);
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay knives build",
        title: "Build My Knife",
        scrollTo: "#knife-builder",
        cornerLogo: {
          text: "custom knife:",
          price: "$320"
        }
      }
    };
  },
  components: {
    appJumbotron: __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__["a" /* default */],
    appBuildKnife: __WEBPACK_IMPORTED_MODULE_1__sections_BuildKnife_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 504:
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

var cursor = __webpack_require__(491);
var cursor2 = __webpack_require__(570);
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["step"],
  data() {
    return {
      grow: this.step.grow,
      cursor: cursor,
      customCursor: {
        cursor: `url(${cursor}),url(${cursor2}), pointer`
      }
    };
  },
  computed: {
    growMe() {
      let growMe = this.grow;
      return growMe;
    }
  },
  methods: {
    getImageSrc(image) {
      return `/dist/${image}.jpg`;
    },
    getThumbSrc(image) {
      return `/dist/thumbs - ${image}.jpg`;
    },
    growImage() {
      this.grow = !this.grow;
    }
  }
});

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__molecules_BuildImage_vue__ = __webpack_require__(572);
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

var placeholder = __webpack_require__(538);
var placeholder = __webpack_require__(546);
var placeholder = __webpack_require__(544);
var placeholder = __webpack_require__(537);
var placeholder = __webpack_require__(551);
var placeholder = __webpack_require__(541);
var placeholder = __webpack_require__(557);
var placeholder = __webpack_require__(550);
var placeholder = __webpack_require__(539);
var placeholder = __webpack_require__(552);
var placeholder = __webpack_require__(543);
var placeholder = __webpack_require__(545);
var placeholder = __webpack_require__(556);
var placeholder = __webpack_require__(558);
var placeholder = __webpack_require__(534);
var placeholder = __webpack_require__(535);
var placeholder = __webpack_require__(548);
var placeholder = __webpack_require__(540);
var placeholder = __webpack_require__(542);
var placeholder = __webpack_require__(547);
var placeholder = __webpack_require__(555);
var placeholder = __webpack_require__(536);
var placeholder = __webpack_require__(549);
var placeholder = __webpack_require__(553);
var placeholder = __webpack_require__(554);



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    appBuildImage: __WEBPACK_IMPORTED_MODULE_1__molecules_BuildImage_vue__["a" /* default */]
  },
  data() {
    return {
      user: {
        name: "",
        number: "",
        state: "",
        city: "",
        address: "",
        zip: ""
      },
      buildSteps: [{
        grow: false,
        title: "Blade Shape",
        selected: "Drop Point",
        options: [{ value: "Bowie", text: "Bowie" }, { value: "Fighter", text: "Fighter" }, { value: "Drop Point", text: "Drop Point" }, { value: "Boot Knife", text: "Boot Knife" }]
      }, {
        grow: false,
        title: "Finish Style",
        selected: "Rough Grind",
        options: [{ value: "Buffed Grind", text: "Buffed Grind" }, { value: "Rough Grind", text: "Rough Grind" }, { value: "Forge Mark", text: "Forge Mark" }, { value: "Grey Etched", text: "Grey Etched" }]
      }, {
        grow: false,
        title: "Blade Length",
        selected: "Medium (4 - 4.25”)",
        options: [{
          src: "Blade.jpg",
          value: "Small (3.5 - 4”)",
          text: "Small (3.5 - 4”)"
        }, {
          src: "Blade.jpg",
          value: "Medium (4 - 4.25”)",
          text: "Medium (4 - 4.25”)"
        }, {
          src: "Blade.jpg",
          value: "Large (4.25 - 4.75”)",
          text: "Large (4.25 - 4.75”)"
        }]
      }, {
        grow: false,
        title: "Handle Length",
        selected: "Medium (4 - 4.25”)",
        options: [{
          src: "Handle.jpg",
          value: "Small (3.75 - 4”)",
          text: "Small (3.75 - 4”)"
        }, {
          src: "Handle.jpg",
          value: "Medium (4 - 4.25”)",
          text: "Medium (4 - 4.25”)"
        }, {
          src: "Handle.jpg",
          value: "Large (4.25 - 4.75”)",
          text: "Large (4.25 - 4.75”)"
        }]
      }, {
        grow: false,
        title: "Handle Material",
        selected: "Maple",
        options: [{ value: "Maple", text: "Maple" }, { value: "Buckeye", text: "Buckeye" }, { value: "Ironwood", text: "Ironwood" }, { value: "Walnut", text: "Walnut" }]
      }, {
        grow: false,
        title: "Finger Guard",
        selected: "Brass",
        options: [{ value: "Brass", text: "Brass" }, { value: "Nickel Silver", text: "Nickel Silver" }, { value: "Copper", text: "Copper" }]
      }, {
        grow: false,
        title: "Pin Design",
        selected: "Elk",
        options: [{ src: "Pin.jpg", value: "Elk", text: "Elk" }, { src: "Pin.jpg", value: "Tree", text: "Tree" }, { src: "Pin.jpg", value: "Wolf", text: "Wolf" }, { src: "Pin.jpg", value: "Arrows", text: "Arrows" }, { src: "PinAlt.jpg", value: "Maple Leaf", text: "Maple Leaf" }]
      }, {
        grow: false,
        title: "Leather",
        selected: "Black",
        options: [{ value: "Black", text: "Black" }, { value: "Brown", text: "Brown" }]
      }]
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__["mixin"]],
  methods: {
    closePopOver() {
      this.$root.$emit("bv::hide::popover");
    },
    openSelection(e) {
      let el = e.currentTarget;
      let selection = el.querySelector(".custom-select");
      selection.click();
    },
    getImageSrc(image) {
      return `/dist/${image}.jpg`;
    },
    selectAndCopy() {
      this.$refs.orderInput.select();
      document.execCommand("copy");
    }
  },
  computed: {
    textareaRows() {
      let rows = 22;
      if (this.user.number.length > 0) {
        rows += 2;
      } else {
        rows += 0;
      }
      if (this.user.address.length > 0 && this.user.city.length > 0 && this.user.state.length > 0 && this.user.zip.length > 0) {
        rows += 5;
      } else {
        rows += 0;
      }
      return rows;
    },
    totalOrder() {
      let options = this.buildSteps;
      let allOrderItems = `carterknifeco@gmail.co`;
      if (this.user.name.length > 0) {
        allOrderItems += `\n \nHello, Matthew, my name is ${this.user.name}!`;
      } else {
        allOrderItems += `\n \nHello Matthew!`;
      }
      if (this.user.number.length > 0) {
        allOrderItems += `\n \nMy phone number is ${this.user.number}.`;
      }
      allOrderItems += `\n \nPlease prepare the following order:`;
      for (let i = 0; i < options.length; i++) {
        let currentOrder = {};
        allOrderItems += "\n" + "\n" + options[i].title + ": " + options[i].selected;
      }
      if (this.user.address.length > 0 && this.user.city.length > 0 && this.user.state.length > 0 && this.user.zip.length > 0) {
        allOrderItems += `\n \nTo be shipped to:\n${this.user.address}\n${this.user.city}, ${this.user.state}\n${this.user.zip}`;
      }
      return allOrderItems;
    },
    totalOrderMailTo() {
      let options = this.buildSteps;
      let allOrderItems = "";
      if (this.user.name.length > 0) {
        allOrderItems += `Hello Matthew, my name is ${this.user.name}!`;
      } else {
        allOrderItems += `Hello Matthew!`;
      }
      if (this.user.number.length > 0) {
        allOrderItems += `%0D%0A %0D%0AMy phone number is ${this.user.number}.`;
      }
      allOrderItems += `%0D%0A %0D%0APlease prepare the following order:`;
      for (let i = 0; i < options.length; i++) {
        let currentOrder = {};
        allOrderItems += "%0D%0A" + "%0D%0A" + options[i].title + ": " + options[i].selected;
      }
      if (this.user.address.length > 0 && this.user.city.length > 0 && this.user.state.length > 0 && this.user.zip.length > 0) {
        allOrderItems += `%0D%0A %0D%0ATo be shipped to:%0D%0A${this.user.address}%0D%0A${this.user.city}, ${this.user.state}%0D%0A${this.user.zip}`;
      }
      allOrderItems += "%0D%0A" + "%0D%0A";
      return allOrderItems;
    },
    mailToBody() {
      let mailToHref = `mailto:carterknifeco@gmail.com?subject=Custom knife order from carterknifeco.com&body=${this.totalOrderMailTo}`;
      return mailToHref;
    }
  }
});

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(156);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".overlay[data-v-005f7bc2]{display:none;cursor:pointer}.overlay.showMe[data-v-005f7bc2]{display:block}.overlay .card-img[data-v-005f7bc2]{border-radius:0}.large-overlay[data-v-005f7bc2]{display:none;cursor:default}.large-overlay.grow[data-v-005f7bc2]{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5)}.large-overlay.grow .image-holder[data-v-005f7bc2]{position:relative}.large-overlay.grow .image-holder[data-v-005f7bc2]:before{content:url(" + escape(__webpack_require__(491)) + ");line-height:1;position:absolute;top:0;right:0;color:#fff;cursor:pointer;background:#dc3545}@media (orientation:portrait){.large-overlay.grow .card-img[data-v-005f7bc2]{width:100%;height:auto}}@media (orientation:landscape){.large-overlay.grow .card-img[data-v-005f7bc2]{width:auto;height:90%;height:100vh}}.large-overlay.grow .close-icon[data-v-005f7bc2]{position:absolute;right:0;top:0;transform:translate(-100%,100%)}", ""]);

// exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".form-holder label[data-v-0284e782]{margin-left:.5rem;margin-right:.5rem}.form-holder .form-text[data-v-0284e782]{margin:0}.form-holder input[data-v-0284e782],.form-holder select[data-v-0284e782],.form-holder textarea[data-v-0284e782]{padding-top:1rem;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09);max-height:calc(100vh - 230px);transition:all .3s cubic-bezier(.68,-.1,.265,1.55)}@media (min-width:768px){.form-holder input[data-v-0284e782]:focus,.form-holder select[data-v-0284e782]:focus,.form-holder textarea[data-v-0284e782]:focus{border-color:#80bdff}}.form-holder input[data-v-0284e782],.form-holder select[data-v-0284e782]{font-weight:400;padding-top:.5rem}@media (min-width:768px){.form-holder select[data-v-0284e782]:focus{transform:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09)}}.form-holder .btn[data-v-0284e782]{width:100%}.form-holder .form-control[data-v-0284e782]{border:1px solid transparent}.container-fluid[data-v-0284e782]{display:flex;flex-flow:column wrap;padding-bottom:4.5rem}.row[data-v-0284e782]{align-items:stretch;padding:0}.row .card[data-v-0284e782]{height:100%}.card[data-v-0284e782]{cursor:auto;box-shadow:none}.card[data-v-0284e782]:hover{transform:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09);box-shadow:none}.card:hover .card-title-strip[data-v-0284e782]{background-color:#007bff}.card select[data-v-0284e782]{width:100%;cursor:pointer}.card .card-body[data-v-0284e782]{min-height:0;padding-bottom:0}.card .card-title-strip[data-v-0284e782]{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card .card-img[data-v-0284e782]{border-radius:0}.sidebar[data-v-0284e782]{width:100%}@media screen and (min-width:768px){.sticky[data-v-0284e782]{position:-webkit-sticky;position:sticky;top:0;padding-top:70px;margin-top:-70px}}.overlay[data-v-0284e782]{background:rgba(0,0,0,.2);position:relative}.overlay h4[data-v-0284e782]{left:50%;top:50%;transform:translate(-50%,-50%);position:absolute;color:#fff;width:100%;text-align:center}.margin-top[data-v-0284e782]{margin-top:1.5rem}.margin-top[data-v-0284e782]:first-of-type{margin-top:0}@media screen and (min-width:768px){.margin-top[data-v-0284e782]:first-of-type{margin-top:1.5rem}}.margin-top.half[data-v-0284e782]{margin-top:.75rem}@media screen and (min-width:992px){.margin-top.half.half-to-full[data-v-0284e782]{margin-top:1.5rem}}.margin-top[data-v-0284e782]:last-of-type{margin-bottom:1.5rem}@media screen and (min-width:768px){.margin-top[data-v-0284e782]:last-of-type{margin-bottom:0}}@media screen and (min-width:992px){.margin-top[data-v-0284e782]:first-of-type,.margin-top[data-v-0284e782]:nth-of-type(2){margin-top:35px}}.top-spacing[data-v-0284e782]{margin:0}.price[data-v-0284e782]{letter-spacing:-1px}@media (min-width:769px){.price[data-v-0284e782]{margin-bottom:0;transform:translateY(-25%)}}small[data-v-0284e782]{vertical-align:top;margin-left:-.6rem}", ""]);

// exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "svg[data-v-3cc1d645]:not(:root){overflow:visible}.jumbotron[data-v-3cc1d645]{display:flex;align-items:center;background:transparent;overflow:hidden;position:relative}.jumbotron[data-v-3cc1d645]:before{position:absolute;content:\"\";z-index:1;height:15px;bottom:-15px;left:0;width:100%;-webkit-transform:scaleY(-1);transform:scaleY(-1);box-shadow:0 2px 10px 0 rgba(0,0,0,.035),0 3px 7px -2px rgba(0,0,0,.068),0 1px 12px 0 rgba(0,0,0,.07)}.jumbotron>div[data-v-3cc1d645]{display:flex;justify-content:center;align-items:center;flex-flow:column wrap}.jumbotron img[data-v-3cc1d645]:not(.bg){width:66vmin;min-width:320px}.jumbotron img.bg[data-v-3cc1d645]{z-index:-1;position:absolute;height:100%;width:100%;object-fit:cover;object-position:0 33%;left:0;top:0}#knife-builder[data-v-3cc1d645]{min-height:100vh;min-height:calc(100vh - 83px - 57px)}", ""]);

// exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Arrows.jpg?28cb32b5e4b4dc36225a5061a9bcfecb";

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Black.jpg?ab7847e4bd19bfe587fb2538cfedf6f5";

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Blade.jpg?f9ac2b39ce9d775f315ac1ab5dbf8ca7";

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Boot Knife.jpg?da7c25ae95e36cceee4172278908318a";

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Bowie.jpg?624fd20a042575d666a6754f20a2c5a4";

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Brass.jpg?270359330fb3ae3b621b086366be978d";

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Brown.jpg?40f9023b038cc0feceb4ef02a51d8818";

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Buckeye.jpg?ecdf74c7e656603125c0c916f1c40c57";

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Buffed Grind.jpg?158b7e13f6b85b830b014646aa5ebb50";

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Copper.jpg?6f5220a0b06a7e20cafc42aae474dd45";

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Drop Point.jpg?0daf3ecbb9e75e83b9a5b91bf3686f7e";

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Elk.jpg?28cb32b5e4b4dc36225a5061a9bcfecb";

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Fighter.jpg?eb5486d9d83b8f83ecba004619f28d45";

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Forge Mark.jpg?2e6397acd6757dfcd8712432d1644373";

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Grey Etched.jpg?8ec30ef4703703d7f8ebb9c35e82251c";

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Handle.jpg?f05af72291efed40baa972f325f906bc";

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Ironwood.jpg?33fa1384c04dd117621e1042feb7b35f";

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Maple.jpg?52c85fd1ac8a58c1b468e56fe3791f54";

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Nickel Silver.jpg?b6141355fe2884a4488720d0aaf075c5";

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pin.jpg?28cb32b5e4b4dc36225a5061a9bcfecb";

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "PinAlt.jpg?53f5e0f3545e8eda07f82ce9b6d6b156";

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rough Grind.jpg?c559c903a7613d2b5e38ba79f729321b";

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Tree.jpg?28cb32b5e4b4dc36225a5061a9bcfecb";

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Walnut.jpg?6a96846f977ef1356e83896b8e4643b7";

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Wolf.jpg?28cb32b5e4b4dc36225a5061a9bcfecb";

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "x.png?c47d36bc5902bcbe3d6143b192aa7019";

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(67);
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.1.0';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding) {
  unbind(el);

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (false) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: IE 5.0+
    // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
    if (initialMacrotaskEnded && !el.contains(ev.target)) {
      return callback(ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildImage_vue__ = __webpack_require__(504);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_005f7bc2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildImage_vue__ = __webpack_require__(581);
function injectStyle (ssrContext) {
  __webpack_require__(598)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-005f7bc2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_005f7bc2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildImage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildKnife_vue__ = __webpack_require__(509);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0284e782_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildKnife_vue__ = __webpack_require__(582);
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
var __vue_scopeId__ = "data-v-0284e782"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildKnife_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0284e782_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildKnife_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.step.options),function(option,index){return _c('div',{key:index,staticClass:"overlay",class:_vm.step.selected == option.value ? 'showMe' : '',on:{"click":function($event){_vm.growImage()}}},[_c('img',{staticClass:"card-img",attrs:{"src":option.src ? ("/dist/" + (option.src)) : ("/dist/" + (option.value) + ".jpg"),"img-alt":_vm.step.selected}}),_vm._v(" "),_c('div',{staticClass:"large-overlay",class:{grow : _vm.growMe == true}},[_c('div',{staticClass:"image-holder"},[_c('img',{staticClass:"card-img",attrs:{"src":option.src ? ("/dist/" + (option.src)) : ("/dist/" + (option.value) + ".jpg"),"img-alt":option.value}})])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"form-holder"},[_c('b-row',[_c('div',{staticClass:"col-md-6 col-lg-8 row top-spacing"},[_vm._l((_vm.buildSteps),function(step,index){return _c('b-col',{key:index,staticClass:"col-12 col-md-12 col-lg-6 margin-top"},[_c('div',{staticClass:"card",on:{"click":_vm.openSelection}},[_c('h4',{staticClass:"card-title-strip mb-0"},[_vm._v(_vm._s(step.title))]),_vm._v(" "),_c('app-build-image',{attrs:{"step":step}}),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('b-form-select',{attrs:{"options":step.options},model:{value:(step.selected),callback:function ($$v) {_vm.$set(step, "selected", $$v)},expression:"step.selected"}})],1)],1)])}),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half half-to-full"},[_c('label',[_vm._v("Name:\n          ")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"Enter name"},model:{value:(_vm.user.name),callback:function ($$v) {_vm.$set(_vm.user, "name", $$v)},expression:"user.name"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half half-to-full"},[_c('label',[_vm._v("Phone Number:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"tel","placeholder":"Enter telephone number"},model:{value:(_vm.user.number),callback:function ($$v) {_vm.$set(_vm.user, "number", $$v)},expression:"user.number"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("Address:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"Street address"},model:{value:(_vm.user.address),callback:function ($$v) {_vm.$set(_vm.user, "address", $$v)},expression:"user.address"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("City:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"City"},model:{value:(_vm.user.city),callback:function ($$v) {_vm.$set(_vm.user, "city", $$v)},expression:"user.city"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("State:\n          ")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"State"},model:{value:(_vm.user.state),callback:function ($$v) {_vm.$set(_vm.user, "state", $$v)},expression:"user.state"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("Zip:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"number","placeholder":"Zip or postal code"},model:{value:(_vm.user.zip),callback:function ($$v) {_vm.$set(_vm.user, "zip", $$v)},expression:"user.zip"}})],1)],2),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 row",staticStyle:{"margin":"0","display":"block"}},[_c('div',{staticClass:"order-form col-md-12 sticky"},[_c('div',[_c('label',{staticClass:"my-order",attrs:{"for":"receipt"}},[_c('span',[_vm._v("My Order:")])]),_vm._v(" "),_c('div',{staticClass:"input-group"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.totalOrder),expression:"totalOrder"}],ref:"orderInput",staticClass:"form-control",attrs:{"rows":_vm.textareaRows,"id":"receipt","type":"text"},domProps:{"value":(_vm.totalOrder)},on:{"input":function($event){if($event.target.composing){ return; }_vm.totalOrder=$event.target.value}}})]),_vm._v(" "),_c('button',{directives:[{name:"b-popover",rawName:"v-b-popover",value:('Copied!'),expression:"'Copied!'"},{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.closePopOver),expression:"closePopOver"}],ref:"popover",staticClass:"btn btn-warning mt-3",on:{"click":_vm.selectAndCopy}},[_c('i',{staticClass:"fa fa-clipboard mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Copy My Order")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary mt-3",attrs:{"id":"mailOrder","href":_vm.mailToBody,"target":"_blank"}},[_c('i',{staticClass:"fa fa-envelope mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Email My Order\n            ")]),_vm._v(" "),_c('label',{staticClass:"mt-3 mb-0"},[_vm._v("Each blade is hand shaped and beveled, and given a unique piece of wood for the handle.")])])])])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('app-build-knife',{attrs:{"id":"knife-builder"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("77197d9c", content, true, {});

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(518);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("7b5c1e7a", content, true, {});

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("be2dee48", content, true, {});

/***/ })

});
//# sourceMappingURL=0.build.js.map