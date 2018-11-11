webpackJsonp([2],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Build_vue__ = __webpack_require__(498);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3af63d96_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Build_vue__ = __webpack_require__(561);
function injectStyle (ssrContext) {
  __webpack_require__(577)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3af63d96"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Build_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3af63d96_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Build_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_BuildKnife_vue__ = __webpack_require__(551);
//
//
//
//
//
//



var desktop = __webpack_require__(159);
var mobile = __webpack_require__(159);
const custom = window.custom;
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
          price: custom.price
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
//
//
//
//
//
//

var cursor = __webpack_require__(491);
var cursor2 = __webpack_require__(545);
/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    console.log(this.step);
  },
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
    },
    selected() {
      return this.step.selected;
    }
  },
  methods: {
    extractFileFromPath(fullPath) {
      if (fullPath) {
        var startIndex = fullPath.indexOf("\\") >= 0 ? fullPath.lastIndexOf("\\") : fullPath.lastIndexOf("/");
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
          filename = filename.substring(1);
        }
        return filename;
      }
    },
    getThumb(image) {
      const fileName = this.extractFileFromPath(image);
      console.log(fileName);
      return `/assets/resized/${fileName}`;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__molecules_BuildImage_vue__ = __webpack_require__(547);
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

let buildOptions = window.custom.build_options.map(category => {
  category.selected = category.options[0].title;
  category.options.map(option => {
    option.value = option.title;
    option.text = option.title;
    return option;
  });
  category.grow = false;
  return category;
});
buildOptions = JSON.parse(JSON.stringify(buildOptions));



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
      buildSteps: buildOptions
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
exports.push([module.i, ".overlay[data-v-02d61435]{display:none;cursor:pointer}.overlay.showMe[data-v-02d61435]{display:block}.overlay .card-img[data-v-02d61435]{border-radius:0}.large-overlay[data-v-02d61435]{display:none;cursor:default}.large-overlay.grow[data-v-02d61435]{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5)}.large-overlay.grow .image-holder[data-v-02d61435]{position:relative}.large-overlay.grow .image-holder[data-v-02d61435]:before{content:url(" + escape(__webpack_require__(491)) + ");line-height:1;position:absolute;top:0;right:0;color:#fff;cursor:pointer;background:#dc3545}@media (orientation:portrait){.large-overlay.grow .card-img[data-v-02d61435]{width:100%;height:auto}}@media (orientation:landscape){.large-overlay.grow .card-img[data-v-02d61435]{width:auto;height:90%;height:100vh}}.large-overlay.grow .close-icon[data-v-02d61435]{position:absolute;right:0;top:0;transform:translate(-100%,100%)}", ""]);

// exports


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".form-holder label[data-v-077f1704]{margin-left:.5rem;margin-right:.5rem}.form-holder .form-text[data-v-077f1704]{margin:0}.form-holder input[data-v-077f1704],.form-holder select[data-v-077f1704],.form-holder textarea[data-v-077f1704]{padding-top:1rem;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09);max-height:calc(100vh - 230px);transition:all .3s cubic-bezier(.68,-.1,.265,1.55)}@media (min-width:768px){.form-holder input[data-v-077f1704]:focus,.form-holder select[data-v-077f1704]:focus,.form-holder textarea[data-v-077f1704]:focus{border-color:#80bdff}}.form-holder input[data-v-077f1704],.form-holder select[data-v-077f1704]{font-weight:400;padding-top:.5rem}@media (min-width:768px){.form-holder select[data-v-077f1704]:focus{transform:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09)}}.form-holder .btn[data-v-077f1704]{width:100%}.form-holder .form-control[data-v-077f1704]{border:1px solid transparent}.container-fluid[data-v-077f1704]{display:flex;flex-flow:column wrap;padding-bottom:4.5rem}.row[data-v-077f1704]{align-items:stretch;padding:0}.row .card[data-v-077f1704]{height:100%}.card[data-v-077f1704]{cursor:auto;box-shadow:none}.card[data-v-077f1704]:hover{transform:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09);box-shadow:none}.card:hover .card-title-strip[data-v-077f1704]{background-color:#007bff}.card select[data-v-077f1704]{width:100%;cursor:pointer}.card .card-body[data-v-077f1704]{min-height:0;padding-bottom:0}.card .card-title-strip[data-v-077f1704]{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card .card-img[data-v-077f1704]{border-radius:0}.sidebar[data-v-077f1704]{width:100%}@media screen and (min-width:768px){.sticky[data-v-077f1704]{position:-webkit-sticky;position:sticky;top:0;padding-top:70px;margin-top:-70px}}.overlay[data-v-077f1704]{background:rgba(0,0,0,.2);position:relative}.overlay h4[data-v-077f1704]{left:50%;top:50%;transform:translate(-50%,-50%);position:absolute;color:#fff;width:100%;text-align:center}.margin-top[data-v-077f1704]{margin-top:1.5rem}.margin-top[data-v-077f1704]:first-of-type{margin-top:0}@media screen and (min-width:768px){.margin-top[data-v-077f1704]:first-of-type{margin-top:1.5rem}}.margin-top.half[data-v-077f1704]{margin-top:.75rem}@media screen and (min-width:992px){.margin-top.half.half-to-full[data-v-077f1704]{margin-top:1.5rem}}.margin-top[data-v-077f1704]:last-of-type{margin-bottom:1.5rem}@media screen and (min-width:768px){.margin-top[data-v-077f1704]:last-of-type{margin-bottom:0}}@media screen and (min-width:992px){.margin-top[data-v-077f1704]:first-of-type,.margin-top[data-v-077f1704]:nth-of-type(2){margin-top:35px}}.top-spacing[data-v-077f1704]{margin:0}.price[data-v-077f1704]{letter-spacing:-1px}@media (min-width:769px){.price[data-v-077f1704]{margin-bottom:0;transform:translateY(-25%)}}small[data-v-077f1704]{vertical-align:top;margin-left:-.6rem}", ""]);

// exports


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "svg[data-v-3af63d96]:not(:root){overflow:visible}.jumbotron[data-v-3af63d96]{display:flex;align-items:center;background:transparent;overflow:hidden;position:relative}.jumbotron[data-v-3af63d96]:before{position:absolute;content:\"\";z-index:1;height:15px;bottom:-15px;left:0;width:100%;-webkit-transform:scaleY(-1);transform:scaleY(-1);box-shadow:0 2px 10px 0 rgba(0,0,0,.035),0 3px 7px -2px rgba(0,0,0,.068),0 1px 12px 0 rgba(0,0,0,.07)}.jumbotron>div[data-v-3af63d96]{display:flex;justify-content:center;align-items:center;flex-flow:column wrap}.jumbotron img[data-v-3af63d96]:not(.bg){width:66vmin;min-width:320px}.jumbotron img.bg[data-v-3af63d96]{z-index:-1;position:absolute;height:100%;width:100%;object-fit:cover;object-position:0 33%;left:0;top:0}#knife-builder[data-v-3af63d96]{min-height:100vh;min-height:calc(100vh - 83px - 57px)}", ""]);

// exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "x.png?c47d36bc5902bcbe3d6143b192aa7019";

/***/ }),

/***/ 546:
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

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildImage_vue__ = __webpack_require__(504);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02d61435_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildImage_vue__ = __webpack_require__(556);
function injectStyle (ssrContext) {
  __webpack_require__(573)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02d61435"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02d61435_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildImage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildKnife_vue__ = __webpack_require__(509);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_077f1704_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildKnife_vue__ = __webpack_require__(558);
function injectStyle (ssrContext) {
  __webpack_require__(575)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-077f1704"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuildKnife_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_077f1704_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuildKnife_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.step.options),function(option,index){return _c('div',{key:index,staticClass:"overlay",class:_vm.step.selected == option.value ? 'showMe' : '',on:{"click":function($event){_vm.growImage()}}},[_c('img',{staticClass:"card-img",attrs:{"src":_vm.getThumb(option.image_path),"img-alt":_vm.step.selected}}),_vm._v(" "),_c('div',{staticClass:"large-overlay",class:{grow : _vm.growMe == true}},[_c('div',{staticClass:"image-holder"},[_c('img',{staticClass:"card-img",attrs:{"src":option.image_path,"img-alt":option.value}})])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"form-holder"},[_c('b-row',[_c('div',{staticClass:"col-md-6 col-lg-8 row top-spacing"},[_vm._l((_vm.buildSteps),function(step,index){return _c('b-col',{key:index,staticClass:"col-12 col-md-12 col-lg-6 margin-top"},[_c('div',{staticClass:"card",on:{"click":_vm.openSelection}},[_c('h4',{staticClass:"card-title-strip mb-0"},[_vm._v(_vm._s(step.title))]),_vm._v(" "),_c('app-build-image',{attrs:{"step":step}}),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('b-form-select',{attrs:{"options":step.options},model:{value:(step.selected),callback:function ($$v) {_vm.$set(step, "selected", $$v)},expression:"step.selected"}})],1)],1)])}),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half half-to-full"},[_c('label',[_vm._v("Name:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"Enter name"},model:{value:(_vm.user.name),callback:function ($$v) {_vm.$set(_vm.user, "name", $$v)},expression:"user.name"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half half-to-full"},[_c('label',[_vm._v("Phone Number:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"tel","placeholder":"Enter telephone number"},model:{value:(_vm.user.number),callback:function ($$v) {_vm.$set(_vm.user, "number", $$v)},expression:"user.number"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("Address:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"Street address"},model:{value:(_vm.user.address),callback:function ($$v) {_vm.$set(_vm.user, "address", $$v)},expression:"user.address"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("City:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"City"},model:{value:(_vm.user.city),callback:function ($$v) {_vm.$set(_vm.user, "city", $$v)},expression:"user.city"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("State:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","placeholder":"State"},model:{value:(_vm.user.state),callback:function ($$v) {_vm.$set(_vm.user, "state", $$v)},expression:"user.state"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-12 col-lg-6 margin-top half"},[_c('label',[_vm._v("Zip:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"number","placeholder":"Zip or postal code"},model:{value:(_vm.user.zip),callback:function ($$v) {_vm.$set(_vm.user, "zip", $$v)},expression:"user.zip"}})],1)],2),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 row",staticStyle:{"margin":"0","display":"block"}},[_c('div',{staticClass:"order-form col-md-12 sticky"},[_c('div',[_c('label',{staticClass:"my-order",attrs:{"for":"receipt"}},[_c('span',[_vm._v("My Order:")])]),_vm._v(" "),_c('div',{staticClass:"input-group"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.totalOrder),expression:"totalOrder"}],ref:"orderInput",staticClass:"form-control",attrs:{"rows":_vm.textareaRows,"id":"receipt","type":"text"},domProps:{"value":(_vm.totalOrder)},on:{"input":function($event){if($event.target.composing){ return; }_vm.totalOrder=$event.target.value}}})]),_vm._v(" "),_c('button',{directives:[{name:"b-popover",rawName:"v-b-popover",value:('Copied!'),expression:"'Copied!'"},{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.closePopOver),expression:"closePopOver"}],ref:"popover",staticClass:"btn btn-warning mt-3",on:{"click":_vm.selectAndCopy}},[_c('i',{staticClass:"fa fa-clipboard mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Copy My Order\n            ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary mt-3",attrs:{"id":"mailOrder","href":_vm.mailToBody,"target":"_blank"}},[_c('i',{staticClass:"fa fa-envelope mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Email My Order\n            ")]),_vm._v(" "),_c('label',{staticClass:"mt-3 mb-0"},[_vm._v("Each blade is hand shaped and beveled, and given a unique piece of wood for the handle.")])])])])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('app-build-knife',{attrs:{"id":"knife-builder"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("a14487b8", content, true, {});

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("0dd07910", content, true, {});

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("30397efe", content, true, {});

/***/ })

});
//# sourceMappingURL=2.build.js.map