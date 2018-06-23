webpackJsonp([2],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Local_vue__ = __webpack_require__(501);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39fd612c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Local_vue__ = __webpack_require__(587);
function injectStyle (ssrContext) {
  __webpack_require__(600)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39fd612c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Local_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39fd612c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Local_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sections_Map_vue__ = __webpack_require__(584);
//
//
//
//
//
//



var desktop = __webpack_require__(157);
var mobile = __webpack_require__(157);
var bend = __webpack_require__(525);
var bendRing = __webpack_require__(526);
var bendText = __webpack_require__(527);
var bendTextInner = __webpack_require__(528);
var bendTextOuter = __webpack_require__(529);
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      hero: {
        desktop: desktop,
        mobile: mobile,
        class: "overlay bus",
        title: "buy locally",
        subtitle: "in Bend, OR",
        smallLogo: {
          ring: bendRing,
          text: {
            whole: bendText,
            inner: bendTextInner,
            outer: bendTextOuter
          },
          background: bend
        },
        subtitleClass: "bend",
        scrollTo: "#map"
      }
    };
  },
  components: {
    appJumbotron: __WEBPACK_IMPORTED_MODULE_0__sections_Jumbotron_vue__["a" /* default */],
    appMap: __WEBPACK_IMPORTED_MODULE_1__sections_Map_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapStyles__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapMarkers__ = __webpack_require__(513);
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





var infoWindowIcon = __webpack_require__(567);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__, {
  load: {
    key: "AIzaSyB-hzCedQopupNEWRNzGCPufWStmEgH0Yo",
    v: "OPTIONAL VERSION NUMBER"
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      icon: "//maps.google.com/mapfiles/ms/icons/red.png",
      infoWindowLogo: infoWindowIcon,
      infoContent: "",
      infoSubContent: "",
      business: "",
      mapLink: "",
      webLink: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: {
        lat: 44.0508424,
        lng: -121.3125494
      },
      markers: __WEBPACK_IMPORTED_MODULE_3__mapMarkers__["a" /* default */],
      styles: __WEBPACK_IMPORTED_MODULE_2__mapStyles__["a" /* default */]
    };
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.$refs.map.panTo(marker.position);
      this.$refs.mapContainer.scrollIntoView();
      this.infoContent = marker.infoText;
      this.infoSubContent = marker.infoSubText;
      this.mapLink = marker.mapLink;
      this.webLink = marker.webLink;
      this.business = marker.business;
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
});

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    position: {
        lat: 44.0508424,
        lng: -121.3125494
    },
    mapLink: "https://goo.gl/maps/tggfvP6J24u",
    webLink: "https://spokenmoto.com/",
    business: "Spoken Moto",
    infoText: "310 SW Industrial Way,",
    infoSubText: "Bend, OR 97702"
}, {
    position: {
        lat: 44.369298,
        lng: -121.344898
    },
    mapLink: "https://goo.gl/maps/zL84wj7WE2q",
    webLink: "http://www.rainshadoworganics.com/",
    business: "Rainshadow Organics Country Store",
    infoText: "71290 Holmes Road,",
    infoSubText: "Sisters, Oregon 97759"
}]);

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  elementType: "geometry",
  stylers: [{
    color: "#f5f5f5"
  }]
}, {
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  elementType: "labels.text.fill",
  stylers: [{
    color: "#616161"
  }]
}, {
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#f5f5f5"
  }]
}, {
  featureType: "administrative.land_parcel",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#bdbdbd"
  }]
}, {
  featureType: "administrative.neighborhood",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#eeeeee"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{
    color: "#e5e5e5"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "road",
  elementType: "labels",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{
    color: "#dadada"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#616161"
  }]
}, {
  featureType: "road.local",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}, {
  featureType: "transit.line",
  elementType: "geometry",
  stylers: [{
    color: "#e5e5e5"
  }]
}, {
  featureType: "transit.station",
  elementType: "geometry",
  stylers: [{
    color: "#eeeeee"
  }]
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#c9c9c9"
  }]
}, {
  featureType: "water",
  elementType: "labels.text",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}]);

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "svg[data-v-39fd612c]:not(:root){overflow:visible}", ""]);

// exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".card .card-header[data-v-60d36b43],.card a[data-v-60d36b43]{display:flex;align-items:center}.card .card-header:hover b[data-v-60d36b43],.card a:hover b[data-v-60d36b43]{text-decoration:underline}.card a[data-v-60d36b43]{color:#007bff}.card a[data-v-60d36b43]:hover{color:#0056b3;text-decoration:underline}.card[data-v-60d36b43]:hover{transform:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09)}.infoWindow[data-v-60d36b43]{display:flex;flex-flow:row wrap;flex-direction:row;justify-content:flex-start;align-items:center}.carterknifecoLogo[data-v-60d36b43]{width:50px;margin:1rem;margin-left:.33rem}@media (max-width:769px){.carterknifecoLogo[data-v-60d36b43]{display:none}}#map[data-v-60d36b43]{position:absolute;top:-62px}.vue-map-container[data-v-60d36b43]{height:100vh;height:calc(101vh - 50px);height:calc(100vh - 85px);margin:0 0 57px;padding:0;box-shadow:0 2px 10px 0 rgba(0,0,0,.05),0 3px 7px -2px rgba(0,0,0,.08),0 1px 12px 0 rgba(0,0,0,.09)}@media (max-width:769px){.vue-map-container[data-v-60d36b43]{margin:0 0 2rem}}.vue-map p[data-v-60d36b43]{margin:.5rem 0;font-size:1rem}.location-boxes[data-v-60d36b43]{line-height:1.35}@media screen and (min-width:768px){.location-boxes[data-v-60d36b43]{position:-webkit-sticky;position:sticky;top:0;padding-top:60px;margin-top:-60px}}", ""]);

// exports


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bend.png?2159efdf1c68421cea698196e213d135";

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bendRing.png?d67349f835837d7d85a1625f074cfd5f";

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bendText.png?11d0eb0c0c891850985ad72905bc7c74";

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bendTextInner.png?0ca505a7571ae825bb2fd71801afa50f";

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bendTextOuter.png?18f0efb4251d11fc1a6fae589146d715";

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logoBlackFullSmall.png?9ffb45e3c88a89c4142be09862d948ff";

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__ = __webpack_require__(510);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60d36b43_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__ = __webpack_require__(591);
function injectStyle (ssrContext) {
  __webpack_require__(602)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60d36b43"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60d36b43_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-jumbotron',{attrs:{"hero":_vm.hero}}),_vm._v(" "),_c('app-map')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"col-12 col-md-8 col-lg-9"},[_c('span',{ref:"mapContainer",attrs:{"id":"map"}}),_vm._v(" "),_c('gmap-map',{ref:"map",attrs:{"center":_vm.center,"options":{styles: _vm.styles},"zoom":15}},[_c('gmap-info-window',{attrs:{"options":_vm.infoOptions,"position":_vm.infoWindowPos,"opened":_vm.infoWinOpen},on:{"closeclick":function($event){_vm.infoWinOpen=false}}},[_c('div',{staticClass:"infoWindow"},[_c('div',[_c('img',{staticClass:"carterknifecoLogo",attrs:{"src":_vm.infoWindowLogo}})]),_vm._v(" "),_c('div',[_c('p',[_c('a',{attrs:{"href":_vm.webLink,"target":"_blank "}},[_vm._v(_vm._s(_vm.business)+"\n                  "),(_vm.webLink)?_c('i',{staticClass:"fa fa-external-link ml-2 ",attrs:{"aria-hidden":"true "}}):_vm._e()])]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":_vm.mapLink,"target":"_blank "}},[_vm._v(_vm._s(_vm.infoContent)),_c('br'),_vm._v(_vm._s(_vm.infoSubContent)+"\n                  "),_c('i',{staticClass:"fa fa-map-marker ml-2 ",attrs:{"aria-hidden":"true "}})])])])])]),_vm._v(" "),_vm._l((_vm.markers),function(m,i){return _c('gmap-marker',{key:i,attrs:{"position":m.position,"clickable":true,"draggable":false,"icon":_vm.icon},on:{"click":function($event){_vm.toggleInfoWindow(m,i) }}})})],2)],1),_vm._v(" "),_c('b-col',{staticClass:"col-12 col-md-4 col-lg-3"},[_c('div',{staticClass:"location-boxes"},_vm._l((_vm.markers),function(m,i){return _c('div',{key:i},[_c('div',{staticClass:"card mb-3",on:{"click":function($event){_vm.toggleInfoWindow(m,i)}}},[_c('div',{staticClass:"card-header"},[_c('i',{staticClass:"text-danger fa fa-map-marker mr-3 ",attrs:{"aria-hidden":"true "}}),_vm._v("\n              "+_vm._s(m.business)+"\n            ")]),_vm._v(" "),_c('ul',{staticClass:"list-group list-group-flush "},[_c('li',{staticClass:"list-group-item "},[_c('a',{attrs:{"href":m.mapLink,"target":"_blank "}},[_c('i',{staticClass:"fa fa-car mr-3 ",attrs:{"aria-hidden":"true "}}),_vm._v(_vm._s(m.infoText)),_c('br'),_vm._v(_vm._s(m.infoSubText)+"\n                ")])]),_vm._v(" "),(m.webLink )?_c('li',{staticClass:"list-group-item "},[_c('a',{attrs:{"href":m.webLink,"target":"_blank "}},[_c('i',{staticClass:"fa fa-external-link mr-3 ",attrs:{"aria-hidden":"true "}}),_vm._v("\n                  Website\n                ")])]):_vm._e()])])])}))])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1f3d9f46", content, true, {});

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(518);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("00b57f02", content, true, {});

/***/ })

});
//# sourceMappingURL=2.build.js.map