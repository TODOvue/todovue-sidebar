/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/89: /***/function (__unused_webpack_module, exports) {
      var __webpack_unused_export__;
      __webpack_unused_export__ = {
        value: true
      };
      // runtime helper for setting properties on components
      // in a tree-shakable way
      exports.Z = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_820__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_820__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_820__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_820__.o(definition, key) && !__nested_webpack_require_820__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.p = "";
    /******/
  }();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    // EXPORTS
    __nested_webpack_require_820__.d(__webpack_exports__, {
      "default": function () {
        return (/* binding */entry_lib
        );
      }
    });
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    /* eslint-disable no-var */
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var currentScript = window.document.currentScript;
      if (false) { var getCurrentScript; }
      var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
      if (src) {
        __nested_webpack_require_820__.p = src[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */
    var setPublicPath = null;
    ; // CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = __webpack_require__(797);
    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvLabel.vue?vue&type=template&id=29d1f26d&scoped=true

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
        class: "label",
        style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
          backgroundColor: $options.colorWithOpacity,
          border: `2px solid ${$props.color}`
        }),
        onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('handleClick'))
      }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, undefined, true), $props.isEdit || $props.isRemove ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
        key: 0,
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(`icon-${$props.isEdit ? 'edit' : 'remove'}`)
      }, null, 2)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 4);
    }
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue?vue&type=template&id=29d1f26d&scoped=true

    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvLabel.vue?vue&type=script&lang=js
    /* harmony default export */
    var TvLabelvue_type_script_lang_js = {
      name: "TvLabel",
      props: {
        color: {
          type: String,
          default: ""
        },
        isEdit: {
          type: Boolean,
          default: false
        },
        isRemove: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        colorWithOpacity() {
          if (!this.color) {
            return "";
          }
          const color = this.color.substring(1);
          return `rgba(${parseInt(color.substring(0, 2), 16)}, ${parseInt(color.substring(2, 4), 16)}, ${parseInt(color.substring(4, 6), 16)}, 0.4)`;
        }
      }
    };
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue?vue&type=script&lang=js

    ; // CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvLabel.vue?vue&type=style&index=0&id=29d1f26d&scoped=true&lang=css
    // extracted by mini-css-extract-plugin

    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue?vue&type=style&index=0&id=29d1f26d&scoped=true&lang=css

    // EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __nested_webpack_require_820__(89);
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue

    ;
    const __exports__ = /*#__PURE__*/(0, exportHelper /* default */.Z)(TvLabelvue_type_script_lang_js, [['render', render], ['__scopeId', "data-v-29d1f26d"]]);

    /* harmony default export */
    var TvLabel = __exports__;
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

    /* harmony default export */
    var entry_lib = TvLabel;
  }();
  module.exports = __webpack_exports__["default"];
  /******/
})();

/***/ }),

/***/ 89:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 797:
/***/ (function(module) {

"use strict";
module.exports = require("vue");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(797);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvSidebar.vue?vue&type=template&id=62902d74&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-62902d74"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  class: "sidebar"
};
const _hoisted_3 = {
  class: "sidebar-title"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "sidebar-title_separator"
}, null, -1));
const _hoisted_5 = {
  class: "sidebar-content"
};
const _hoisted_6 = {
  class: "sidebar-content_li"
};
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
  class: "sidebar-title"
};
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "sidebar-title_separator"
}, null, -1));
const _hoisted_11 = {
  class: "sidebar-content-label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tv_label = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("tv-label");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [$props.isList ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 0
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.data.title), 1), _hoisted_4]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.data.list, (item, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("ol", {
      class: "sidebar-content_ol",
      key: item.id
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", _hoisted_6, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($options.linkComponent), {
      to: item.link,
      class: "pointer"
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(index + 1) + ".", 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.title), 1)]),
      _: 2
    }, 1032, ["to"]))])]);
  }), 128))])], 64)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.isImage ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 1
  }, [$props.data.image.clickable ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($options.linkComponent), {
    key: 0,
    to: $props.data.image.link
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
      src: $props.data.image.src,
      alt: $props.data.image.name,
      class: "pointer"
    }, null, 8, _hoisted_7)]),
    _: 1
  }, 8, ["to"])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("img", {
    key: 1,
    src: $props.data.image.src,
    alt: $props.data.image.name
  }, null, 8, _hoisted_8))], 64)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.isLabel ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 2
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.data.title), 1), _hoisted_10]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_11, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.data.labels, label => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_tv_label, {
      key: label.id,
      color: label.color,
      onClick: $event => $options.clickLabel(label)
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(label.name), 1)]),
      _: 2
    }, 1032, ["color", "onClick"]);
  }), 128))])], 64)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)])]);
}
;// CONCATENATED MODULE: ./src/component/TvSidebar.vue?vue&type=template&id=62902d74&scoped=true

// EXTERNAL MODULE: ./node_modules/todovue-label/dist/tvlabel.common.js
var tvlabel_common = __webpack_require__(346);
var tvlabel_common_default = /*#__PURE__*/__webpack_require__.n(tvlabel_common);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvSidebar.vue?vue&type=script&lang=js

/* harmony default export */ var TvSidebarvue_type_script_lang_js = ({
  name: "TvSidebar",
  props: {
    isList: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    linkTag: {
      type: String,
      default: "router-link"
    },
    isImage: {
      type: Boolean,
      default: false
    },
    isLabel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TvLabel: (tvlabel_common_default())
  },
  computed: {
    linkComponent() {
      return this.linkTag === "nuxt-link" ? "nuxt-link" : "router-link";
    }
  },
  methods: {
    clickLabel(label) {
      this.$emit("clickLabel", label);
    }
  }
});
;// CONCATENATED MODULE: ./src/component/TvSidebar.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvSidebar.vue?vue&type=style&index=0&id=62902d74&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/component/TvSidebar.vue?vue&type=style&index=0&id=62902d74&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/component/TvSidebar.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TvSidebarvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-62902d74"]])

/* harmony default export */ var TvSidebar = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (TvSidebar);


}();
module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=tvsidebar.common.js.map