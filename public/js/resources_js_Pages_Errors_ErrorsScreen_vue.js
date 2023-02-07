"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Errors_ErrorsScreen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ErrorsScreen',
  props: {
    report: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var throwError = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.computed)({
      get: function get() {
        var errorMessage = "";
        switch (props.report.status) {
          case 503:
            errorMessage = "\n                    This service is unavailable at the moment. <br />\n                    If you tried many times and service is still unavailable please \n                    <a href=\"#\" class=\"text-blue\">report</a> it.\n                    ";
            break;
          case 500:
            errorMessage = "\n                    An internal server error occured.\n                    If you tried many times and you still receive this error, please \n                    <a href=\"#\" href=\"_blank\" class=\"text-blue\">report</a> it.\n                    ";
            break;
          case 404:
            errorMessage = "This page is unavailable.";
            break;
          case 403:
            errorMessage = "Unauthorized access.";
            break;
          default:
            errorMessage = "OOPS! Something went wrong! Please try again later.";
            break;
        }
        return errorMessage;
      }
    });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      store.dispatch('toggleDeleteModal', false);
      store.dispatch('fillContents', []);
      if (Object.keys((0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.errors).length > 0) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(props.report.page);
      }
    });
    var __returned__ = {
      props: props,
      store: store,
      throwError: throwError,
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia;
      },
      get usePage() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage;
      },
      get computed() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.computed;
      },
      get onMounted() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.onMounted;
      },
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "w-full h-full p-4 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-lg fixed top-0 left-0 z-[999]"
};
var _hoisted_2 = {
  "class": "w-full max-w-xl flex flex-col gap-0 rounded bg-white p-2 shadow-xl animate-fadeInBounce"
};
var _hoisted_3 = {
  "class": "w-full p-2 text-black font-semibold tracking-wider text-lg border-b border-black border-opacity-10"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = {
  "class": "w-full relative flex justify-end items-center p-2 mt-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return Object.keys(_ctx.$page.props.errors).length <= 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_3, " ERROR " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.report.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "w-full p-2 text-black font-normal tracking-wide text-md",
    innerHTML: $setup.throwError
  }, null, 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.report.page,
    "class": "no-highlight px-4 py-2 rounded bg-red text-white"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" OK ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/Pages/Errors/ErrorsScreen.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Errors/ErrorsScreen.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ErrorsScreen_vue_vue_type_template_id_b2ffff3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorsScreen.vue?vue&type=template&id=b2ffff3c */ "./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c");
/* harmony import */ var _ErrorsScreen_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorsScreen.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_GitHub_crm_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_GitHub_crm_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ErrorsScreen_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ErrorsScreen_vue_vue_type_template_id_b2ffff3c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Errors/ErrorsScreen.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorsScreen_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorsScreen_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorsScreen.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorsScreen_vue_vue_type_template_id_b2ffff3c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorsScreen_vue_vue_type_template_id_b2ffff3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorsScreen.vue?vue&type=template&id=b2ffff3c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Errors/ErrorsScreen.vue?vue&type=template&id=b2ffff3c");


/***/ })

}]);