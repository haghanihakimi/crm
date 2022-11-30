"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_ViewChangeDefaultPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_GeneralLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/GeneralLayout.vue */ "./resources/js/Layouts/GeneralLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ViewChangeDefaultPassword',
  props: {
    auth: Object,
    flash: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var defaultPasswordForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      password: null
    });

    var changeDefaultPassword = function changeDefaultPassword() {
      if (!defaultPasswordForm.processing) {
        defaultPasswordForm.post('signin', {
          onSuccess: function onSuccess() {
            store.dispatch('toggleSignedIn', true);
            store.dispatch('toggleSignedOut', false);
          }
        });
      }
    };

    var __returned__ = {
      props: props,
      store: store,
      defaultPasswordForm: defaultPasswordForm,
      changeDefaultPassword: changeDefaultPassword,
      GeneralLayout: _Layouts_GeneralLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full relative flex justify-center items-center py-14 px-6"
};
var _hoisted_2 = ["onSubmit"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "w-full text-base text-center font-semibold tracking-wider text-black flex flex-col"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Your Default Password "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm text-black text-opacity-60"
}, " Please change your default password to make your account secure. ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "select-none relative w-full group"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password",
  "class": "w-full px-2 capitalize peer-focus:font-medium absolute text-sm text-smooth-black duration-200 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
}, " password ", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "select-none w-full relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  role: "button",
  "class": "text-base font-medium tracking-wide text-white bg-warm-blue p-2 rounded flex justify-center items-center cursor-pointer w-full capitalize transition duration-150 hover:bg-blue"
}, " Set Password ")], -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 0,
  "class": "w-full relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["GeneralLayout"], {
    title: 'Change Password',
    auth: $props.auth
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        action: "/",
        method: "POST",
        enctype: "multipart/form-data",
        "class": "w-full max-w-md flex flex-col gap-6",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.changeDefaultPassword, ["prevent"])
      }, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" password input box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        name: "password",
        id: "password",
        autocomplete: "false",
        autofocus: "false",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.defaultPasswordForm.password = $event;
        }),
        "class": "block py-2.5 px-2 w-full text-sm text-smooth-black bg-transparent rounded border border-thick-black appearance-none focus:outline-none focus:ring-0 focus:border-thick-black peer",
        placeholder: " ",
        required: ""
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.defaultPasswordForm.password]]), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" sign in button "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Form submission output reports "), $setup.defaultPasswordForm.hasErrors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.defaultPasswordForm.errors, function (message, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: i,
          "class": "text-red text-sm tracking-wider font-normal"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message), 1
        /* TEXT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_2)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["auth"]);
}

/***/ }),

/***/ "./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewChangeDefaultPassword_vue_vue_type_template_id_6f3362a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9 */ "./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9");
/* harmony import */ var _ViewChangeDefaultPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ViewChangeDefaultPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ViewChangeDefaultPassword_vue_vue_type_template_id_6f3362a9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/ViewChangeDefaultPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewChangeDefaultPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewChangeDefaultPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewChangeDefaultPassword_vue_vue_type_template_id_6f3362a9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewChangeDefaultPassword_vue_vue_type_template_id_6f3362a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ViewChangeDefaultPassword.vue?vue&type=template&id=6f3362a9");


/***/ })

}]);