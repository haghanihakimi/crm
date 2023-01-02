"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Signin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_GeneralLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/GeneralLayout.vue */ "./resources/js/Layouts/GeneralLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _heroicons_vue_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/24/outline */ "./node_modules/@heroicons/vue/24/outline/esm/ExclamationTriangleIcon.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Signin',
  props: {
    auth: Object,
    flash: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.reactive)({
      caps: false
    });
    var signinForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      email: null,
      password: null,
      remember: true
    });

    var capLock = function capLock(event) {
      data.caps = event.getModifierState && event.getModifierState('CapsLock');
    };

    var signin = function signin() {
      if (!signinForm.processing) {
        signinForm.post(route('signin'), {
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
      data: data,
      signinForm: signinForm,
      capLock: capLock,
      signin: signin,
      GeneralLayout: _Layouts_GeneralLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore,
      reactive: _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.reactive,
      Warning: _heroicons_vue_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = {
  "class": "select-none relative w-full group"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "w-full px-2 capitalize peer-focus:font-medium absolute text-sm text-smooth-black duration-200 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
}, " Email address ", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "select-none relative w-full group"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password",
  "class": "w-full px-2 capitalize peer-focus:font-medium absolute text-sm text-smooth-black duration-200 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
}, " password ", -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 0,
  "class": "w-full flex flex-row gap-1 text-orange text-sm py-2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Caps Lock is on! ");

var _hoisted_9 = {
  "class": "select-none flex justify-between items-center"
};
var _hoisted_10 = {
  "class": "flex items-center"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "checked-checkbox",
  "class": "ml-2 text-sm font-medium text-smooth-black cursor-pointer"
}, " Remember me ", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" forgotten account ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "select-none w-full relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  role: "button",
  "class": "text-base font-medium tracking-wide text-white bg-warm-blue p-2 rounded flex justify-center items-center cursor-pointer w-full capitalize transition duration-150 hover:bg-blue"
}, " sign in ")], -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0,
  "class": "w-full relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["GeneralLayout"], {
    title: 'Sign In',
    auth: $props.auth
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        action: "/",
        method: "POST",
        enctype: "multipart/form-data",
        "class": "w-full max-w-md flex flex-col gap-6",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.signin, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" email/username input box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "email",
        name: "email",
        id: "email",
        autocomplete: "true",
        autofocus: "false",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.signinForm.email = $event;
        }),
        "class": "block py-2.5 px-2 w-full text-sm text-smooth-black bg-transparent rounded border border-thick-black appearance-none focus:outline-none focus:ring-0 focus:border-thick-black peer",
        placeholder: " ",
        required: ""
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signinForm.email]]), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" password input box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "password",
        name: "password",
        id: "password",
        onKeydown: _cache[1] || (_cache[1] = function ($event) {
          return $setup.capLock($event);
        }),
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.capLock($event);
        }),
        autocomplete: "false",
        autofocus: "false",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.signinForm.password = $event;
        }),
        "class": "block py-2.5 px-2 w-full text-sm text-smooth-black bg-transparent rounded border border-thick-black appearance-none focus:outline-none focus:ring-0 focus:border-thick-black peer",
        placeholder: " ",
        required: ""
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.signinForm.password]]), _hoisted_6, $setup.data.caps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Warning"], {
        "class": "text-orange w-5 h-5"
      }), _hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" remember me checkbox "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: "checked-checkbox",
        type: "checkbox",
        name: "remember_me",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.signinForm.remember = $event;
        }),
        "class": "w-4 h-4 text-blue cursor-pointer rounded border-thick-black focus:border-thick-black focus:ring-0"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.signinForm.remember]]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: _ctx.route('forgotten.account'),
        "class": "text-[13px] font-[600] capitalize text-blue tracking-wide"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_12];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" sign in button "), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Form submission output reports "), $setup.signinForm.hasErrors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.signinForm.errors, function (message, i) {
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

/***/ "./resources/js/Pages/Auth/Signin.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Auth/Signin.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signin_vue_vue_type_template_id_5e56de70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signin.vue?vue&type=template&id=5e56de70 */ "./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70");
/* harmony import */ var _Signin_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signin.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_GitHub_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_GitHub_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Signin_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Signin_vue_vue_type_template_id_5e56de70__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/Signin.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signin_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signin_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signin.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signin_vue_vue_type_template_id_5e56de70__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signin_vue_vue_type_template_id_5e56de70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signin.vue?vue&type=template&id=5e56de70 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Signin.vue?vue&type=template&id=5e56de70");


/***/ })

}]);