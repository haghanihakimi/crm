"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Signup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Layouts_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layouts/GeneralLayout */ "./resources/js/Layouts/GeneralLayout.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Signup',
  props: {},
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var signUpForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      first_name: null,
      surname: null,
      email: null,
      password: null,
      remember: true
    });

    var signup = function signup() {
      if (!signUpForm.processing) {
        signUpForm.post(route('account.create'), {
          onSuccess: function onSuccess(response) {}
        });
      }
    };

    var __returned__ = {
      props: props,
      signUpForm: signUpForm,
      signup: signup,
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
      GeneralLayout: _Layouts_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full relative"
};
var _hoisted_2 = {
  "class": "relative m-0 p-0"
};
var _hoisted_3 = {
  "class": "px-6 py-12 bg-black bg-opacity-5 text-gray text-center lg:text-left"
};
var _hoisted_4 = {
  "class": "container mx-auto xl:px-0"
};
var _hoisted_5 = {
  "class": "grid lg:grid-cols-2 gap-12 flex items-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-12 lg:mt-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-2xl md:text-6xl xl:text-6xl text-black font-bold tracking-tight mb-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("The best solution "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-warm-blue"
}, "to manage your sales")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-black text-opacity-50"
}, " With a user-friendly interface, you have full control on customers, invoices and sales. ")], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mb-12 lg:mb-0"
};
var _hoisted_8 = {
  "class": "max-w-2xl mx-auto block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12"
};
var _hoisted_9 = ["onSubmit"];
var _hoisted_10 = {
  "class": "grid md:grid-cols-2 md:gap-6"
};
var _hoisted_11 = {
  "class": "mb-6"
};
var _hoisted_12 = {
  "class": "mb-6"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "data-mdb-ripple": "true",
  "data-mdb-ripple-color": "light",
  "class": "inline-block px-6 py-2.5 mb-6 w-full bg-warm-blue text-white font-medium text-sm leading-tight uppercase rounded transition duration-150 shadow-md hover:bg-blue hover:shadow-lg focus:outline-none focus:ring-0 ease-in-out"
}, "Sign up", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["GeneralLayout"], {
    title: 'Sign Up'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        action: "/",
        method: "POST",
        enctype: "multipart/form-data",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.signup, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        autocomplete: "false",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.signUpForm.first_name = $event;
        }),
        "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none",
        placeholder: "First name"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signUpForm.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        autocomplete: "false",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.signUpForm.surname = $event;
        }),
        "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none",
        placeholder: "Last name"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signUpForm.surname]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "email",
        autocomplete: "false",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.signUpForm.email = $event;
        }),
        "class": "form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none",
        placeholder: "Email address"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signUpForm.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        autocomplete: "false",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.signUpForm.password = $event;
        }),
        "class": "form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none",
        placeholder: "Password"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signUpForm.password]]), _hoisted_13], 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_9)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block ")])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Signup.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Auth/Signup.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signup_vue_vue_type_template_id_72ed34e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=72ed34e6 */ "./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6");
/* harmony import */ var _Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_GitHub_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_GitHub_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Signup_vue_vue_type_template_id_72ed34e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/Signup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signup.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_template_id_72ed34e6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_template_id_72ed34e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signup.vue?vue&type=template&id=72ed34e6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signup.vue?vue&type=template&id=72ed34e6");


/***/ })

}]);