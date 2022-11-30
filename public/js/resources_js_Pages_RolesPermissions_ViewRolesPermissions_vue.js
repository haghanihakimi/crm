(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RolesPermissions_ViewRolesPermissions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/vue-loader/dist/index.js):\nTypeError: Cannot read properties of null (reading 'content')\n    at selectBlock (C:\\xampp\\htdocs\\crm\\node_modules\\vue-loader\\dist\\select.js:23:45)\n    at Object.loader (C:\\xampp\\htdocs\\crm\\node_modules\\vue-loader\\dist\\index.js:67:41)");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full h-auto relative m-auto px-4"
};
var _hoisted_2 = {
  "class": "w-full h-auto max-w-xl bg-white m-auto my-4 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10 z-0"
};
var _hoisted_3 = {
  "class": "w-full h-auto flex flex-col gap-4 relative px-4 py-2"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "w-full text-center font-semibold tracking-wider text-lg py-2"
}, " Roles & Permissions ", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-left text-md font-medium text-black"
}, " Roles ", -1
/* HOISTED */
);

var _hoisted_6 = ["value"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-left text-md font-medium text-black"
}, " Permissions ", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "text-center capitalize"
};
var _hoisted_9 = {
  "class": "w-full flex flex-row gap-2 select-none"
};
var _hoisted_10 = ["disabled"];
var _hoisted_11 = {
  key: 0,
  "class": "text-green font-semibold tracking-wider text-md"
};
function render(_ctx, _cache) {
  var _component_v_scroll_y_transition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-scroll-y-transition");

  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");

  var _component_v_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-item");

  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");

  var _component_v_item_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-item-group");

  var _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, {
    title: 'Roles & Permission',
    auth: _ctx.auth
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        name: "permissions",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.rolesPermissionForm.role = $event;
        }),
        "class": "w-full p-2 rounded border border-black border-opacity-10 capitalize shadow-md cursor-pointer"
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.roles, function (role, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: i,
          value: role.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(role.name), 9
        /* TEXT, PROPS */
        , _hoisted_6);
      }), 128
      /* KEYED_FRAGMENT */
      ))], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.rolesPermissionForm.role]]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_item_group, {
        multiple: "",
        modelValue: _ctx.rolesPermissionForm.permission,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.rolesPermissionForm.permission = $event;
        }),
        "class": "select-none p-0 m-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
            "class": "flex flex-row flex-wrap gap-4 p-0 m-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.permissions, function (permission, i) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_item, {
                  key: i,
                  value: permission.value
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                    var isSelected = _ref.isSelected,
                        toggle = _ref.toggle;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([isSelected ? 'bg-green' : 'bg-blue', 'w-auto px-6 py-2 rounded-full text-white color-transparent hover:bg-red']),
                      onClick: toggle
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_scroll_y_transition, null, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(permission.label), 1
                            /* TEXT */
                            )];
                          }),
                          _: 2
                          /* DYNAMIC */

                        }, 1024
                        /* DYNAMIC_SLOTS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */

                    }, 1032
                    /* PROPS, DYNAMIC_SLOTS */
                    , ["class", "onClick"])];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["value"]);
              }), 128
              /* KEYED_FRAGMENT */
              ))];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"w-full min-h-[48px] relative\">\r\n                        <Multiselect\r\n                            v-model=\"rolesPermissionForm.permission\"\r\n                            v-bind=\"permissionsTags\"\r\n                            class=\"capitalize ring-0 outline-0 focus:ring-1 focus:ring-blue\"\r\n                        ></Multiselect>\r\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_ctx.rolesPermissionForm.isDirty ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        disabled: _ctx.rolesPermissionForm.processing || !_ctx.rolesPermissionForm.isDirty,
        type: "submit",
        role: "button",
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.saveChanges && _ctx.saveChanges.apply(_ctx, arguments);
        }),
        "class": "w-full mx-auto px-4 py-2 rounded bg-warm-blue text-white text-base font-medium tracking-wider transition duration-150 hover:bg-blue"
      }, " Save ", 8
      /* PROPS */
      , _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Errors and messages "), _ctx.flash.message && _ctx.flash.message.role_permissions_saved ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.flash.message.role_permissions_saved), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["auth"]);
}

/***/ }),

/***/ "./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewRolesPermissions_vue_vue_type_template_id_14b45fca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewRolesPermissions.vue?vue&type=template&id=14b45fca */ "./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca");
/* harmony import */ var _ViewRolesPermissions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_crm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ViewRolesPermissions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ViewRolesPermissions_vue_vue_type_template_id_14b45fca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewRolesPermissions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewRolesPermissions_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewRolesPermissions_vue_vue_type_template_id_14b45fca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewRolesPermissions_vue_vue_type_template_id_14b45fca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewRolesPermissions.vue?vue&type=template&id=14b45fca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RolesPermissions/ViewRolesPermissions.vue?vue&type=template&id=14b45fca");


/***/ })

}]);