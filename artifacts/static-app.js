(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://review.rickheffren.com/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(46);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(49);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(22);

var _helpers = __webpack_require__(50);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(22);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(47)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f30daf4734c5408868c4edd9687d9ed.png";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("short-id");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(3);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/App.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  /* @import url('https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap\" rel=\"stylesheet'); */\n  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300,700|Roboto:300&display=swap');\n\n  * {\n    scroll-behavior: smooth;\n  }\n  html {\n    font-size: 62.5%;\n  \n    body {\n      /* // font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; */\n\n      font-family: 'Alegreya Sans SC', sans-serif;\n\n      font-weight: 300;\n      line-height: 2.6rem;\n      letter-spacing: .1rem;\n      font-size: 16px;\n      margin: 0;\n      padding: 0;\n      color: black;\n      h1 {\n        font-weight: bold;\n        color: black;\n      }\n      p {\n        font-family: 'Roboto', sans-serif;\n        line-height: 2.6rem;\n\n      }\n    }\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var theme = {
  secondaryColour: 'purple',
  lineHeight: "2.6rem"
};
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["Router"], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(12);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);




















Object(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404 */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js';
var t_1 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about";
  }
}), universalOptions);
t_1.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js';
var t_2 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog";
  }
}), universalOptions);
t_2.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js';
var t_3 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact";
  }
}), universalOptions);
t_3.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js';
var t_4 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown";
  }
}), universalOptions);
t_4.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js';
var t_5 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index";
  }
}), universalOptions);
t_5.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js';
var t_6 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork";
  }
}), universalOptions);
t_6.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js';
var t_7 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services";
  }
}), universalOptions);
t_7.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js';
var t_8 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page";
  }
}), universalOptions);
t_8.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js': t_0,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js': t_1,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/blog.js': t_2,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js': t_3,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/drilldown.js': t_4,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js': t_5,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js': t_6,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/services.js': t_7,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/test-page.js': t_8
}); // Not Found Template

var notFoundTemplate = "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  object-fit: cover;\n  width: 15rem;\n  margin: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: 8rem 0 0;\n  h1 {\n    text-align: center;\n  }\n  p {\n    padding-top: 2rem;\n  }\n  b {\n    font-weight: 700;\n  }\n  &:last-child {\n    padding-bottom: 8rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 85%;\n  height: 100%;\n  margin: auto;\n  @media(min-width: 883px) {\n    width: 65%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var logo = __webpack_require__(15);

var vince = __webpack_require__(58); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), logo);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var Photo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject5());
function About() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Photo, {
    src: vince
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Story"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Countryside Landscape"), " was established in the spring of 2008 by owner John Wall on a small scale performing interlocking stone installations. The business saw rapid expansion to include excavations, demolitions, carpentry, concrete work, wood structures and pavilions as a result of high quality workmanship. Today we are a trusted landscape company with the experience, knowledge and staff to create your landscape dream or property improvement safely, efficiently and affordably. Our team has grown to include a strong, friendly and professional staff including most recently our own landscape designer Vincent Long. He brings years of passionate design experience working for a private residential landscape architecture firm in Ottawa.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Mission"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "At Countryside Landscape, we hire only the best employees and provide excellent service to our vast clientele. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project. We are confident that the design resolution will be unique to your property and incorporate your requirements in a seamless manner to allow you your own slice of paradise. Our mission then is to provide you an exciting & effortless experience throughout the planning & construction phases and get you outside enjoying your tailored garden.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Commitment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "It is imperative to provide safe working practices for our employees, and safe working environments for our clients. We endeavour to assemble a staff of sincere, hardworking individuals so that we may be accountable to each other and our clients. We know the importance of listening, understanding and the value of supporting each other through teamwork. We not only teach, but we learn from others \u2013 we build together.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Vision"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "To assemble a friendly, professional staff who will cater to our clients\u2019 needs by offering services and products that create beautiful outdoor living spaces.")));
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ken_burns_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _ken_burns_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ken_burns_css__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var slides = [{
  id: 0,
  url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i'
}, {
  id: 1,
  url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80'
}, {
  id: 2,
  url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80'
}, {
  id: 3,
  url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80'
}];

var Image = function Image(_ref) {
  var url = _ref.url,
      duration = _ref.duration;
  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      transform: 'scale(1) translateX(0%)'
    },
    to: {
      transform: 'scale(2) translateX(20%)'
    },
    config: {
      duration: duration + 1
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "bg",
    style: _objectSpread({}, props, {
      backgroundImage: url
    })
  });
};

function App() {
  var duration = 5000;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      index = _useState2[0],
      set = _useState2[1];

  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"])(slides[index], function (item) {
    return item.id;
  }, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_3__["config"].molasses
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return void setInterval(function () {
      return set(function (state) {
        return (state + 1) % 4;
      });
    }, duration);
  }, []);
  return transitions.map(function (_ref2) {
    var item = _ref2.item,
        props = _ref2.props,
        key = _ref2.key;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
      key: key,
      style: _objectSpread({}, props)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
      url: "url(https://images.unsplash.com/".concat(item.url, "&auto=format&fit=crop)"),
      duration: duration
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    will-change: opacity;\n  }\n  ", ""]);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_artibot_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _containers_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_containers_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-family: 'Roboto', sans-serif;\n  h2, a { \n    color: #FFFFFFFF; \n    font-size: 2rem;\n  }\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 35rem;\n  text-align: center;\n  bottom: 6rem;\n  \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: #93D409;\n  border: none;\n  border-radius: 4px;\n  margin-top: 2rem;\n  box-shadow: 1px 1px 5px 2px rgba(0,0,0, .3);\n  font-size: 1.75rem;\n  z-index: 200;\n  width: 14rem;\n  height: 4rem;\n  @media( min-width: 582px ) {\n    width: 20rem;\n    height: 8rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  left: calc(50% - 1rem);\n  transform: translateX(-50%);\n  margin:  1rem 0 1rem;\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 20rem;\n  /* background-color: rgba( 0, 0, 0, .7); */\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  top: 10rem;\n  width: 100%;\n  p {\n      color: #fff;\n      font-weight: 300;\n      font-size: 2.25rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-image: url(", ");\n    background-size: cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var logo = __webpack_require__(34);

var map = __webpack_require__(61); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), map);
var HeaderTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var BannerOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5(), logo); // const FormContainer = styled.div`
//   position: absolute;
//   top: 25rem !important;
//   width: 95%;
//   left: 50%;
//   transform: translateX(-50%);
// `

var ContactButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject6());
var FooterTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7());
function Contact() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.id = "artibot";
    script.setAttribute('crossorigin', 'SameSite=None');
    script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'31743cbc-72f3-4c39-91de-9447c14185d7'});a=!0}}}(window,document);";
    document.body.appendChild(script); // return () => script.parentNode.removeChild( script );
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MapContainer, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerOverlay, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderTextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Let's make your vision a reality"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactButton, {
    className: "artibot-button-expand"
  }, "GET A QUOTE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterTextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      fontSize: "2.5rem"
    }
  }, "505 Talbot St. E.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " Aylmer, ON"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "75%",
      margin: "auto",
      paddingBottom: "2rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "JOHN", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel: 519-619-9593",
    style: {
      "float": "right"
    }
  }, "(519) 619-9593")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "VINCE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel: 519-619-9593",
    style: {
      "float": "right"
    }
  }, "(519) 619-9593")))));
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);



function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  /* min-height: 100vh; */\n  object-fit: cover;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  text-align: center;\n  h2 { font-family: 'Roboto', sans-serif; font-size: 1.75rem }\n  height: auto;\n  padding: 2rem 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  right: 10px;\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 85%;\n  height: 100%;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ids = __webpack_require__(16);

var logo = __webpack_require__(15); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3(), logo);
var DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject5());
function About() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])(),
      workImages = _useRouteData.workImages;

  var service;
  var individualItems;
  var slider;

  if (workImages) {
    service = workImages.copy;
    individualItems = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, service, workImages.items);
    var settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      pauseOnFocus: false,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      touchMove: false,
      useTransforms: false
    };
    slider = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, settings, individualItems[workImages.copy].map(function (post) {
      var mobileImg = post.full1920x1280 ? "".concat(post.full1920x1280.fields.file.url, " 768w, ").concat(post.full1920x1280.fields.file.url, " 2048w") : "".concat(post.full1920x1280.fields.file.url, " 2048w");
      var sourceSet = post.full1920x1280 ? "".concat(post.full1920x1280.fields.file.url, " 768w, ").concat(post.full1920x1280.fields.file.url, " 2048w") : "".concat(post.full1920x1280.fields.file.url, " 2048w");
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        key: ids.generate()
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: ids.generate(),
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")));
    }));
  } else {
    console.log('no items found');
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, service), slider);
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8="

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);



function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  /* min-height: 100vh; */\n  object-fit: cover;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  text-align: center;\n  h2 { font-family: 'Roboto', sans-serif; font-size: 1.75rem }\n  height: auto;\n  padding: 2rem 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  right: 10px;\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 85%;\n  height: 100%;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ids = __webpack_require__(16);

var logo = __webpack_require__(15); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3(), logo);
var DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject5());
function About() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])(),
      workImages = _useRouteData.workImages;

  var service;
  var individualItems;
  var slider;

  if (workImages) {
    service = workImages.copy;
    individualItems = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, service, workImages.items);
    var settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      pauseOnFocus: false,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      touchMove: false,
      useTransforms: false
    };
    slider = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, settings, individualItems[workImages.copy].map(function (post) {
      var mobileImg = post.full1920x1280 ? "".concat(post.full1920x1280.fields.file.url, " 768w, ").concat(post.full1920x1280.fields.file.url, " 2048w") : "".concat(post.full1920x1280.fields.file.url, " 2048w");
      var sourceSet = post.full1920x1280 ? "".concat(post.full1920x1280.fields.file.url, " 768w, ").concat(post.full1920x1280.fields.file.url, " 2048w") : "".concat(post.full1920x1280.fields.file.url, " 2048w");
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        key: ids.generate()
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 1,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 2,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 3,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 4,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 5,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/".concat(service, "/single")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slide, {
        key: 6,
        srcSet: sourceSet,
        sizes: "100vw",
        src: mobileImg
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DescriptionContainer, {
        key: ids.generate()
      }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Small writup here...")));
    }));
  } else {
    console.log('no items found');
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, service), slider);
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ken_burns_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _ken_burns_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ken_burns_css__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var slides = [{
  id: 0,
  url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i'
}, {
  id: 1,
  url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80'
}, {
  id: 2,
  url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80'
}, {
  id: 3,
  url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80'
}];

var Image = function Image(_ref) {
  var url = _ref.url,
      duration = _ref.duration;
  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      transform: 'scale(1) translateX(0%)'
    },
    to: {
      transform: 'scale(2) translateX(20%)'
    },
    config: {
      duration: duration + 1
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "bg",
    style: _objectSpread({}, props, {
      backgroundImage: url
    })
  });
};

function App() {
  var duration = 5000;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      index = _useState2[0],
      set = _useState2[1];

  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"])(slides[index], function (item) {
    return item.id;
  }, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_3__["config"].molasses
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return void setInterval(function () {
      return set(function (state) {
        return (state + 1) % 4;
      });
    }, duration);
  }, []);
  return transitions.map(function (_ref2) {
    var item = _ref2.item,
        props = _ref2.props,
        key = _ref2.key;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
      key: key,
      style: _objectSpread({}, props)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
      url: "url(https://images.unsplash.com/".concat(item.url, "&auto=format&fit=crop)"),
      duration: duration
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(63);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(64);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(3);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/instagramCode.js
function instagramCode() {
  var code = '<blockquote id="instagram-feed" class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B7CV6NBHBiX/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B7CV6NBHBiX/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B7CV6NBHBiX/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">When you’re politely asked to stop working for the day</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/countrysidelandscapeaylmer/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Countryside Landscape</a> (@countrysidelandscapeaylmer) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-01-07T23:18:26+00:00">Jan 7, 2020 at 3:18pm PST</time></p></div></blockquote>';
  return code;
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(17);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/carousel/AsForNav.js




function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  z-index: 200;\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  bottom: 55%;\n  transform: translateY(50%);\n  left: ", ";\n  right: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  height: 40rem;\n  width: 100%;\n  object-fit: cover;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(70%);\n \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var leftArrow = __webpack_require__(70);

var rightArrow = __webpack_require__(71);

var ids = __webpack_require__(16); // Styles


var SmallSlideContainer = external_styled_components_default.a.div(_templateObject());
var SmallSlide = external_styled_components_default.a.img(_templateObject2());
var LargeSlideContainer = external_styled_components_default.a.div(_templateObject3());
var LargeSlide = external_styled_components_default.a.img(_templateObject4());
var Arrow = external_styled_components_default.a.img(_templateObject5(), function (props) {
  return props.left ? "1rem" : "unset";
}, function (props) {
  return props.right ? "1rem" : "unset";
});
function AsNavFor(props) {
  // Set State Properties
  var _useState = Object(external_react_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      nav1 = _useState2[0],
      setNav1 = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      nav2 = _useState4[0],
      setNav2 = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(null),
      _useState6 = slicedToArray_default()(_useState5, 2),
      slider1 = _useState6[0],
      setSlider1 = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(null),
      _useState8 = slicedToArray_default()(_useState7, 2),
      slider2 = _useState8[0],
      setSlider2 = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);
  var settingsSmall = {
    arrows: false,
    centerMode: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }],
    useTransform: false
  };
  var settingsLarge = {
    arrows: false
  }; // make one array of all types of work

  var urls = [];

  if (props.images) {
    Object.keys(props.images).forEach(function (key) {
      var item = {};
      item.title = key;
      props.images[key].forEach(function (each) {
        item.url = each.full1920x1280.fields.file.url; // urls.push(each.full1920x1280.fields.file.url)

        urls.push(item);
      });
    });
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(SmallSlideContainer, null, external_react_default.a.createElement(Arrow, {
    key: ids.generate(),
    left: true,
    src: leftArrow,
    alt: ""
  }), external_react_default.a.createElement(Arrow, {
    key: ids.generate(),
    right: true,
    src: rightArrow,
    alt: ""
  }), external_react_default.a.createElement(external_react_slick_default.a, extends_default()({}, settingsSmall, {
    style: {
      position: "relative"
    },
    asNavFor: nav1,
    ref: function ref(slider) {
      return setSlider2(slider);
    },
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true
  }), urls.map(function (urls) {
    return external_react_default.a.createElement(SmallSlide, {
      key: ids.generate(),
      src: urls.url
    });
  }))), external_react_default.a.createElement(external_react_slick_default.a, extends_default()({}, settingsLarge, {
    asNavFor: nav2,
    ref: function ref(slider) {
      return setSlider1(slider);
    }
  }), urls.map(function (urls) {
    return external_react_default.a.createElement(Router["Link"], {
      key: ids.generate(),
      to: "/".concat(urls.title)
    }, external_react_default.a.createElement(LargeSlideContainer, null, external_react_default.a.createElement(LargeSlide, {
      src: urls.url
    }), external_react_default.a.createElement("h1", null, urls.title)));
  })));
}
// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/ourWork.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ourWork_AsNavFor; });


function ourWork_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    padding-top: 1rem;\n    p { padding-top: 1rem; }\n    h2 { padding-top: 2rem; }\n"]);

  ourWork_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ourWork_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  right: 10px;\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  ourWork_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ourWork_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  ourWork_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ourWork_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 95%;\n  height: 100%;\n  margin: auto;\n  @media(min-width: 883px) {\n    width: 65%;\n  }\n"]);

  ourWork_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var logo = __webpack_require__(15); // Styles


var PageContainer = external_styled_components_default.a.div(ourWork_templateObject());
var HeaderContainer = external_styled_components_default.a.div(ourWork_templateObject2());
var Logo = external_styled_components_default.a.div(ourWork_templateObject3(), logo);
var TextContainer = external_styled_components_default.a.div(ourWork_templateObject4());
function ourWork_AsNavFor() {
  Object(external_react_["useEffect"])(function () {
    var div = document.createElement("div");
    div.innerHTML = instagramCode();
    var container = document.getElementById("text-container");
    container.insertBefore(div, container.childNodes[0]);

    function loadScript(url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";

      if (script.readyState) {
        // only required for IE <9
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        //Others
        script.onload = function () {
          callback();
        };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    } // call the function...


    loadScript("http://www.instagram.com/embed.js", function () {
      window.instgrm.Embeds.process();
    });
  }, []); // Get static assets from routes

  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      contentfulImages = _useRouteData.contentfulImages;

  var nav;

  if (contentfulImages) {
    nav = external_react_default.a.createElement(AsNavFor, {
      images: contentfulImages
    });
  } else {
    console.log('no pools');
  }

  return external_react_default.a.createElement(PageContainer, null, external_react_default.a.createElement(HeaderContainer, null, external_react_default.a.createElement(Router["Link"], {
    to: "/"
  }, external_react_default.a.createElement(Logo, null))), external_react_default.a.createElement("h1", null, "What we do"), nav, external_react_default.a.createElement(TextContainer, {
    id: "text-container"
  }, external_react_default.a.createElement("h1", null, "Method"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "At Countryside Landscape"), " we work with you from the initial consultation through to the final approval to make sure you are 100% satisfied with your landscape project. "), external_react_default.a.createElement("h2", null, "THE CONSULTATION: "), external_react_default.a.createElement("p", null, "The process starts with a free consultation at your property with our landscape designer. We will review your property and discuss your goals for the project. During this initial consultation we will discuss your personal style and talk about any problem areas you would like fixed including what areas of the property we will focus on. After this meeting I will generate a Conceptual Plan with the first impressions of what would work best. This will give an idea of the direction towards a Master Plan package. "), external_react_default.a.createElement("h2", null, "THE DESIGN AND QUOTATION: "), external_react_default.a.createElement("p", null, "The next time we meet I will have a Master Plan and any supporting photos or sketches to ensure the design is clearly communicated. After going through this design, I will take an opportunity to make any revisions in order to proceed to a formal quote. The presentation of our quotation will occur shortly after and will be itemized into tasks or areas so that we clearly communicate the cost of individual items within your project. By doing this, we can work with you to complete the entire project in one phase, or we are happy to complete it by phasing things in over a few years. We are even happy to work with you if you would like to tackle a few elements on your own. "), external_react_default.a.createElement("h2", null, "CONSTRUCTION: "), external_react_default.a.createElement("p", null, "After we have agreed on a plan of action including a schedule, we begin construction. All public utility locates and permits are taken care of by Countryside Landscape and we will also ensure your site safety is maintained throughout the project. Our professional team will make sure your project reaches completion in a timely manner for minimal disruption. During construction we will always keep you informed and welcome any questions or concerns you might have about the process. "), external_react_default.a.createElement("h2", null, "FINAL SIGN OFF: "), external_react_default.a.createElement("p", null, "Now that construction is complete, we will walk through the entire project with you to ensure 100% satisfaction. All that is left is the enjoyment of your custom landscape. ")));
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(18);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/home/BannerNav.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin-bottom: -4rem;\n    padding: 0;\n    padding-top: ", ";\n    display: flex;\n    justify-content: center;\n    li {\n        a { color: ", "; }\n        font-size: 1.3rem;\n        list-style-type:none;\n        display: inline-block;\n        padding: 0 .8rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Link = __webpack_require__(3).Link;

var NavList = external_styled_components_default.a.ul(_templateObject(), function (props) {
  return props.secondary ? "0" : "1.2rem";
}, function (props) {
  return props.secondary ? "#93D409" : "white";
});
function BannerNav(props) {
  return external_react_default.a.createElement(NavList, {
    secondary: props.secondary
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(Link, {
    to: "/about"
  }, "ABOUT US")), external_react_default.a.createElement("li", {
    style: {
      fontSize: "1.7rem",
      marginTop: "-.1rem",
      color: "#93D409",
      fontWeight: "bold"
    }
  }, external_react_default.a.createElement(Link, {
    to: "/our-work",
    style: {
      color: "#93D409"
    }
  }, "OUR WORK")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(Link, {
    to: "/contact"
  }, "CONTACT")));
}
// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/home/BannerText.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    margin: 0 auto 1rem;\n    right: 1rem;\n    width: 23rem;\n    min-height: 7rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function BannerText_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    color: white;\n    z-index: 2;\n    width: 85%;\n\n    position: absolute;\n    top: ", ";\n    left: 50%;\n    transform: translate(-50%, -100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    h1 {\n        margin-bottom: 0;\n        width: 100%;\n        font-size: 3rem;\n        font-weight: 300 !important;\n        text-align: center;\n    }\n"]);

  BannerText_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var logo = __webpack_require__(34); // styles


var TextContainer = external_styled_components_default.a.div(BannerText_templateObject(), function (props) {
  return props.secondary ? "0" : "50%";
});
var Logo = external_styled_components_default.a.div(_templateObject2(), logo);
function Banner(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(TextContainer, null, external_react_default.a.createElement(Logo, null), external_react_default.a.createElement("h1", null, "It's your space"), external_react_default.a.createElement(BannerNav, null)));
}
// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/carousel.css
var carousel = __webpack_require__(62);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });


function pages_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  filter: brightness(7%) saturate(50%); \n  transform: scale(1.1);\n  // width: 100%;\n  min-height: 100vh;\n  object-fit: cover;\n"]);

  pages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pages_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  h1 { color: white; }\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ids = __webpack_require__(16); // Styles


var Container = external_styled_components_default.a.div(pages_templateObject());
var Slide = external_styled_components_default.a.img(pages_templateObject2()); // Takes in mutationObserver and checks all slides for changes

var observeChecker = function observeChecker(nodes, observer) {
  for (var i = 0; i < nodes.length; i++) {
    observer.observe(nodes[i], {
      attributes: true
    });
  }
};

function Home() {
  Object(external_react_["useEffect"])(function () {
    document.body.classList.add('js-loading');
    var slider = document.getElementsByClassName('slick-slide');

    function callback() {
      var slider = external_jquery_default()('.slick-active');
      slider.addClass('zoom');
    }

    var mutationObserver = new MutationObserver(callback);
    observeChecker(slider, mutationObserver);
    external_jquery_default()(document).ready(function () {
      document.body.classList.remove('js-loading');
      external_jquery_default()('.slick-slider').addClass('no-pointer');
    });
  }, []);

  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      images = _useRouteData.images;

  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    draggable: false,
    fade: true,
    infinite: true,
    pauseOnFocus: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false,
    useTransforms: false
  };
  return external_react_default.a.createElement(Container, null, external_react_default.a.createElement(external_react_slick_default.a, settings, images.map(function (post) {
    var mobileImg = post.backgroundImageMobile ? "".concat(post.backgroundImageMobile.fields.file.url) : "".concat(post.backgroundImage.fields.file.url, " 2048w");
    var sourceSet = post.backgroundImageMobile ? "".concat(post.backgroundImageMobile.fields.file.url, " 768w, ").concat(post.backgroundImage.fields.file.url, " 2048w") : "".concat(post.backgroundImage.fields.file.url, " 2048w");
    return external_react_default.a.createElement(Slide, {
      key: ids.generate(),
      srcSet: sourceSet,
      sizes: "100vw",
      src: mobileImg
    });
  })), external_react_default.a.createElement(Banner, null));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(6);

var _router = __webpack_require__(14);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(45);
module.exports = __webpack_require__(51);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(24)["default"];

var _require = __webpack_require__(25),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(24)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(25),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(26),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(26),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(22);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 47;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(52);

var _interopRequireDefault = __webpack_require__(53);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(17));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(54));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(55);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(56)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "95ec78e7eaf6ec929481d8789d7e1789.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "/* button.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    position: absolute !important;\n    left: 50% !important;\n    transform: translateX(-50%) !important;\n    top: 30rem !important;\n}\n\n.artibot-wrapper--19YJW.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    top: 30rem !important;\n\n} */", ""]);



/***/ }),
/* 60 */
/***/ (function(module, exports) {

// import React from "react";
// import styled from 'styled-components'
// // import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import './contactForm.css'
// export default function ContactForm() {
//     return (
//       <Form>
//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Input type="email" name="email" id="name" placeholder="Your Name" />
//           </FormGroup>
//         </Col>
//         <Col md={6}>
//           <FormGroup>
//             <Input type="password" name="password" id="phone" placeholder="Your Phone" />
//           </FormGroup>
//         </Col>
//       </Row>
//       <FormGroup>
//         <Input type="text" name="address" id="email" placeholder="Your Email"/>
//       </FormGroup>
//       <FormGroup>
//         <Input type="textarea" name="address" id="message" placeholder="Message"/>
//       </FormGroup>
//       <Button
//         style={{ 
//           backgroundColor: "#FDBB31",
//           border: "none",
//           width: "10rem",
//           height: "4rem" 
//           }}>
//             Submit
//       </Button>
//     </Form>
//     )
// }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7f726b31f7786ea15f64a9faf3726c4.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "\n  .js-loading *,\n  .js-loading *:before,\n  .js-loading *:after {\n    -webkit-animation-play-state: paused !important;\n            animation-play-state: paused !important;\n  }\n\n  .no-pointer {\n    pointer-events: none;\n  }\n  .slick-active.zoom img {\n      -webkit-animation: fadeZoom 10000ms  300ms;\n              animation: fadeZoom 10000ms  300ms;\n  }\n  @-webkit-keyframes fadeZoom {\n    0% { \n      -webkit-filter: brightness(7%) saturate(50%); \n              filter: brightness(7%) saturate(50%); \n      -webkit-transform: scale(1.1); \n              transform: scale(1.1);\n    }\n    5% { -webkit-filter: brightness(85%) saturate(50%); filter: brightness(85%) saturate(50%); }\n    95% { -webkit-filter: brightness(85%) saturate(50%); filter: brightness(85%) saturate(50%); }\n    100% { \n      -webkit-filter: brightness(7%) saturate(50%); \n              filter: brightness(7%) saturate(50%);\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  @keyframes fadeZoom {\n    0% { \n      -webkit-filter: brightness(7%) saturate(50%); \n              filter: brightness(7%) saturate(50%); \n      -webkit-transform: scale(1.1); \n              transform: scale(1.1);\n    }\n    5% { -webkit-filter: brightness(85%) saturate(50%); filter: brightness(85%) saturate(50%); }\n    95% { -webkit-filter: brightness(85%) saturate(50%); filter: brightness(85%) saturate(50%); }\n    100% { \n      -webkit-filter: brightness(7%) saturate(50%); \n              filter: brightness(7%) saturate(50%);\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n ", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Imports
var urlEscape = __webpack_require__(65);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(66));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(36));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(36) + "?#iefix");
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(67));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(68));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(69) + "#slick");

// Module
exports.push([module.i, "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url(" + ___CSS_LOADER_URL___0___ + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url(" + ___CSS_LOADER_URL___1___ + ");\n    src: url(" + ___CSS_LOADER_URL___2___ + ") format('embedded-opentype'), url(" + ___CSS_LOADER_URL___3___ + ") format('woff'), url(" + ___CSS_LOADER_URL___4___ + ") format('truetype'), url(" + ___CSS_LOADER_URL___5___ + ") format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRk9UVE8AAAVkAAsAAAAAB1wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAi4AAAKbH/pWDkZGVE0AAAM4AAAAGgAAABxt0civR0RFRgAAA1QAAAAcAAAAIAAyAARPUy8yAAADcAAAAFIAAABgUBj/rmNtYXAAAAPEAAAAUAAAAWIiC0SwaGVhZAAABBQAAAAuAAAANgABMftoaGVhAAAERAAAABwAAAAkA+UCA2htdHgAAARgAAAADgAAAA4ESgBKbWF4cAAABHAAAAAGAAAABgAFUABuYW1lAAAEeAAAANwAAAFuBSeBwnBvc3QAAAVUAAAAEAAAACAAAwABeJw9ks9vEkEUx2cpWyeUoFYgNkHi2Wt7N3rVm3cTs3UVLC4LxIWEQvi1P3i7O1tYLJDAmlgKGEhQrsajf0j7J3jYTXrQWUrMJG+++b55n5e8NwwKBhHDMLv5kxT3ATEBxKBn3qOAl9zxHgb1MAPhHQgHkyF08Gr/L8B/Eb6zWnmCJ7AJVLubQOheArXvJ1A4EXi6j4I+Zg9F0QFKvsnlBCmXeve+sFEnb/nCptdtQ4QYhVFRAT1HrF8UQK/RL/SbmUbclsvGVFXRZKDHUE38cc4qpkbAAsuwiImvro+ufcfaOIQ6szlrmjRJDaKZKnbjN3GWKIbiIzRFUfCffuxxKOL+3LDlDVvx2TdxN84qZEsnhNBa6pgm2dAsnzbLsETdsmRFxUeHV4e+I2/ptN8TyqV8T3Dt29t7EYOuajVIw2y1Wy3M86w0zg/Fz2IvawmQAUHOVrPVfLkoScVynsqsTG0MGUs4z55nh3mnOJa+li+rl9WpPIcFfDubDeaDC+fLBdYN3QADzLauGfj4B6sZmq6CCpqmtSvF0qlUl2qf5AJIUCSlTqlb7lUG+LRfGzZGzZEyBgccMu6MuqPecNDvD4Y9Kjtj4gD+DsvKVMTcMdtqtZtmkzQstQvYje7Syep0PDSAhSOeHYXYWThEF//A/0YvYV1fSQtpKU5STtrhbQ444OtpKSWJIg3pOg8cBs7maTY1EZf07aq+hjWs7IWzdCYTGhb2CtZ47x+Uhx28AAB4nGNgYGBkAIJz765vANHnCyvqYTQAWnkHswAAeJxjYGRgYOADYgkGEGBiYARCFjAG8RgABHYAN3icY2BmYmCcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwcjKAQQMDAyOQUmCAgoA01xQGB4ZExUmMD/4/YNBjvP3/NgNEDQPjbbBKBQZGADfLDgsAAHicY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQzMCQqKClOUJz0/z9YHRLv/+L7D+8V3cuHmgAHjGwM6ELUByxUMIOZCmbgAAA5LQ8XeJxjYGRgYABiO68w73h+m68M3EwMIHC+sKIeTqsyqDLeZrwN5HIwgKUB/aYJUgAAeJxjYGRgYLzNwMCgx8QAAkA2IwMqYAIAMGIB7QIAAAACAAAlACUAJQAlAAAAAFAAAAUAAHicbY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV4nGNgZkAGjAxoAAAAjgAF"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5HZW5lcmF0ZWQgYnkgRm9udGFzdGljLm1lPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJzbGljayIgaG9yaXotYWR2LXg9IjUxMiI+Cjxmb250LWZhY2UgZm9udC1mYW1pbHk9InNsaWNrIiB1bml0cy1wZXItZW09IjUxMiIgYXNjZW50PSI0ODAiIGRlc2NlbnQ9Ii0zMiIvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iNTEyIiAvPgoKPGdseXBoIHVuaWNvZGU9IiYjODU5NDsiIGQ9Ik0yNDEgMTEzbDEzMCAxMzBjNCA0IDYgOCA2IDEzIDAgNS0yIDktNiAxM2wtMTMwIDEzMGMtMyAzLTcgNS0xMiA1LTUgMC0xMC0yLTEzLTVsLTI5LTMwYy00LTMtNi03LTYtMTIgMC01IDItMTAgNi0xM2w4Ny04OC04Ny04OGMtNC0zLTYtOC02LTEzIDAtNSAyLTkgNi0xMmwyOS0zMGMzLTMgOC01IDEzLTUgNSAwIDkgMiAxMiA1eiBtMjM0IDE0M2MwLTQwLTktNzctMjktMTEwLTIwLTM0LTQ2LTYwLTgwLTgwLTMzLTIwLTcwLTI5LTExMC0yOS00MCAwLTc3IDktMTEwIDI5LTM0IDIwLTYwIDQ2LTgwIDgwLTIwIDMzLTI5IDcwLTI5IDExMCAwIDQwIDkgNzcgMjkgMTEwIDIwIDM0IDQ2IDYwIDgwIDgwIDMzIDIwIDcwIDI5IDExMCAyOSA0MCAwIDc3LTkgMTEwLTI5IDM0LTIwIDYwLTQ2IDgwLTgwIDIwLTMzIDI5LTcwIDI5LTExMHoiLz4KPGdseXBoIHVuaWNvZGU9IiYjODU5MjsiIGQ9Ik0yOTYgMTEzbDI5IDMwYzQgMyA2IDcgNiAxMiAwIDUtMiAxMC02IDEzbC04NyA4OCA4NyA4OGM0IDMgNiA4IDYgMTMgMCA1LTIgOS02IDEybC0yOSAzMGMtMyAzLTggNS0xMyA1LTUgMC05LTItMTItNWwtMTMwLTEzMGMtNC00LTYtOC02LTEzIDAtNSAyLTkgNi0xM2wxMzAtMTMwYzMtMyA3LTUgMTItNSA1IDAgMTAgMiAxMyA1eiBtMTc5IDE0M2MwLTQwLTktNzctMjktMTEwLTIwLTM0LTQ2LTYwLTgwLTgwLTMzLTIwLTcwLTI5LTExMC0yOS00MCAwLTc3IDktMTEwIDI5LTM0IDIwLTYwIDQ2LTgwIDgwLTIwIDMzLTI5IDcwLTI5IDExMCAwIDQwIDkgNzcgMjkgMTEwIDIwIDM0IDQ2IDYwIDgwIDgwIDMzIDIwIDcwIDI5IDExMCAyOSA0MCAwIDc3LTkgMTEwLTI5IDM0LTIwIDYwLTQ2IDgwLTgwIDIwLTMzIDI5LTcwIDI5LTExMHoiLz4KPGdseXBoIHVuaWNvZGU9IiYjODIyNjsiIGQ9Ik00NzUgMjU2YzAtNDAtOS03Ny0yOS0xMTAtMjAtMzQtNDYtNjAtODAtODAtMzMtMjAtNzAtMjktMTEwLTI5LTQwIDAtNzcgOS0xMTAgMjktMzQgMjAtNjAgNDYtODAgODAtMjAgMzMtMjkgNzAtMjkgMTEwIDAgNDAgOSA3NyAyOSAxMTAgMjAgMzQgNDYgNjAgODAgODAgMzMgMjAgNzAgMjkgMTEwIDI5IDQwIDAgNzctOSAxMTAtMjkgMzQtMjAgNjAtNDYgODAtODAgMjAtMzMgMjktNzAgMjktMTEweiIvPgo8Z2x5cGggdW5pY29kZT0iJiM5NzsiIGQ9Ik00NzUgNDM5bDAtMTI4YzAtNS0xLTktNS0xMy00LTQtOC01LTEzLTVsLTEyOCAwYy04IDAtMTMgMy0xNyAxMS0zIDctMiAxNCA0IDIwbDQwIDM5Yy0yOCAyNi02MiAzOS0xMDAgMzktMjAgMC0zOS00LTU3LTExLTE4LTgtMzMtMTgtNDYtMzItMTQtMTMtMjQtMjgtMzItNDYtNy0xOC0xMS0zNy0xMS01NyAwLTIwIDQtMzkgMTEtNTcgOC0xOCAxOC0zMyAzMi00NiAxMy0xNCAyOC0yNCA0Ni0zMiAxOC03IDM3LTExIDU3LTExIDIzIDAgNDQgNSA2NCAxNSAyMCA5IDM4IDIzIDUxIDQyIDIgMSA0IDMgNyAzIDMgMCA1LTEgNy0zbDM5LTM5YzItMiAzLTMgMy02IDAtMi0xLTQtMi02LTIxLTI1LTQ2LTQ1LTc2LTU5LTI5LTE0LTYwLTIwLTkzLTIwLTMwIDAtNTggNS04NSAxNy0yNyAxMi01MSAyNy03MCA0Ny0yMCAxOS0zNSA0My00NyA3MC0xMiAyNy0xNyA1NS0xNyA4NSAwIDMwIDUgNTggMTcgODUgMTIgMjcgMjcgNTEgNDcgNzAgMTkgMjAgNDMgMzUgNzAgNDcgMjcgMTIgNTUgMTcgODUgMTcgMjggMCA1NS01IDgxLTE1IDI2LTExIDUwLTI2IDcwLTQ1bDM3IDM3YzYgNiAxMiA3IDIwIDQgOC00IDExLTkgMTEtMTd6Ii8+CjwvZm9udD48L2RlZnM+PC9zdmc+Cg=="

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDggNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTcuNSw0NDUuMWwtMjIuMiwyMi4yYy05LjQsOS40LTI0LjYsOS40LTMzLjksMEw3LDI3M2MtOS40LTkuNC05LjQtMjQuNiwwLTMzLjlMMjAxLjQsNDQuNwoJYzkuNC05LjQsMjQuNi05LjQsMzMuOSwwbDIyLjIsMjIuMmM5LjUsOS41LDkuMywyNS0wLjQsMzQuM0wxMzYuNiwyMTZINDI0YzEzLjMsMCwyNCwxMC43LDI0LDI0djMyYzAsMTMuMy0xMC43LDI0LTI0LDI0SDEzNi42CglsMTIwLjUsMTE0LjhDMjY2LjksNDIwLjEsMjY3LjEsNDM1LjYsMjU3LjUsNDQ1LjFMMjU3LjUsNDQ1LjF6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDggNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOTAuNSw2Ni45bDIyLjItMjIuMmM5LjQtOS40LDI0LjYtOS40LDMzLjksMEw0NDEsMjM5YzkuNCw5LjQsOS40LDI0LjYsMCwzMy45TDI0Ni42LDQ2Ny4zCgljLTkuNCw5LjQtMjQuNiw5LjQtMzMuOSwwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1LDAuNC0zNC4zTDMxMS40LDI5NkgyNGMtMTMuMywwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMywxMC43LTI0LDI0LTI0aDI4Ny40CglMMTkwLjksMTAxLjJDMTgxLjEsOTEuOSwxODAuOSw3Ni40LDE5MC41LDY2Ljl6Ii8+Cjwvc3ZnPgo="

/***/ })
/******/ ]);
});