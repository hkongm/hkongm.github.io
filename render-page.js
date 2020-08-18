(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/caichao/Code/git/gastby-blog/node_modules/@reach/router/index.js"), require("/Users/caichao/Code/git/gastby-blog/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/Users/caichao/Code/git/gastby-blog/node_modules/lodash/lodash.js"), require("/Users/caichao/Code/git/gastby-blog/node_modules/lodash/kebabCase.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/caichao/Code/git/gastby-blog/node_modules/@reach/router/index.js", "/Users/caichao/Code/git/gastby-blog/node_modules/core-js/modules/web.dom.iterable.js", "fs", "/Users/caichao/Code/git/gastby-blog/node_modules/lodash/lodash.js", "/Users/caichao/Code/git/gastby-blog/node_modules/lodash/kebabCase.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/caichao/Code/git/gastby-blog/node_modules/@reach/router/index.js"), require("/Users/caichao/Code/git/gastby-blog/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/Users/caichao/Code/git/gastby-blog/node_modules/lodash/lodash.js"), require("/Users/caichao/Code/git/gastby-blog/node_modules/lodash/kebabCase.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/caichao/Code/git/gastby-blog/node_modules/@reach/router/index.js"], root["/Users/caichao/Code/git/gastby-blog/node_modules/core-js/modules/web.dom.iterable.js"], root["fs"], root["/Users/caichao/Code/git/gastby-blog/node_modules/lodash/lodash.js"], root["/Users/caichao/Code/git/gastby-blog/node_modules/lodash/kebabCase.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_kebabCase__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-feed/gatsby-ssr */ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js"),options:{"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                site_url: url\n                title\n                description: subtitle\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                  filter: { frontmatter: { template: { eq: \"post\" }, draft: { ne: true } } }\n                ) {\n                  edges {\n                    node {\n                      html\n                      fields {\n                        slug\n                      }\n                      frontmatter {\n                        title\n                        date\n                        template\n                        draft\n                        description\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"灯盏细辛 Blog"}]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr */ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-google-gtag/gatsby-ssr */ "./node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js"),options:{"plugins":[],"trackingIds":["UA-51018210-1"],"pluginConfig":{"head":true}}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),options:{"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl: url\n              }\n            }\n            allSitePage(\n              filter: {\n                path: { regex: \"/^(?!/404/|/404.html|/dev-404-page/)/\" }\n              }\n            ) {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n          }\n        ","output":"/sitemap.xml"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),options:{"plugins":[],"name":"灯盏细辛 Blog","short_name":"灯盏细辛 Blog","start_url":"/","background_color":"#FFF","theme_color":"#F7A046","display":"standalone","icon":"static/avatar.jpg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"dcda4d7a28e4c1b9f288dcf31426c55a"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/gatsby-ssr */ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./gatsby-ssr */ "./gatsby-ssr.js"),options:{"plugins":[]}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-offline/app-shell.js":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-offline/app-shell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var AppShell=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(AppShell,_React$Component);function AppShell(){return _React$Component.apply(this,arguments)||this;}var _proto=AppShell.prototype;_proto.render=function render(){return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null);};return AppShell;}(_react.default.Component);var _default=AppShell;exports.default=_default;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(response=>{this.inFlightDb.delete(pagePath);return response;}).catch(err=>{this.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}loadAppData(retries=0){return doFetch(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(()=>null):Promise.resolve();super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat,memoize}=__webpack_require__(/*! lodash */ "lodash");const{RouteAnnouncerProps}=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageData=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const absolutePageDataPath=join(process.cwd(),`public`,pageDataPath);const pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};const appDataPath=join(`page-data`,`app-data.json`);const getAppDataUrl=memoize(()=>{let appData;try{const absoluteAppDataPath=join(process.cwd(),`public`,appDataPath);const appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return`${""}/${appDataPath}`;});const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(undefined&&component.props.rel===`manifest`){return React.cloneElement(component,{href:replace(component.props.href,undefined,``)});}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageData=getPageData(pagePath);const pageDataUrl=getPageDataUrl(pagePath);const appDataUrl=getAppDataUrl();const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);const namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(!prefix){return str;}prefix+=`/`;if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---cache-caches-gatsby-plugin-offline-app-shell-js":hot(preferDefault(__webpack_require__(/*! ./.cache/caches/gatsby-plugin-offline/app-shell.js */ "./.cache/caches/gatsby-plugin-offline/app-shell.js"))),"component---src-templates-categories-list-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/categories-list-template.js */ "./src/templates/categories-list-template.js"))),"component---src-templates-category-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/category-template.js */ "./src/templates/category-template.js"))),"component---src-templates-index-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/index-template.js */ "./src/templates/index-template.js"))),"component---src-templates-not-found-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/not-found-template.js */ "./src/templates/not-found-template.js"))),"component---src-templates-page-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/page-template.js */ "./src/templates/page-template.js"))),"component---src-templates-post-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/post-template.js */ "./src/templates/post-template.js"))),"component---src-templates-tag-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/tag-template.js */ "./src/templates/tag-template.js"))),"component---src-templates-tags-list-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/tags-list-template.js */ "./src/templates/tags-list-template.js")))};

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={url:'http://hkongm.github.io/',pathPrefix:'/',title:'灯盏细辛 Blog',subtitle:'灯盏细辛 Blog',copyright:'© All rights reserved.',disqusShortname:'',postsPerPage:4,googleAnalyticsId:'UA-51018210-1',useKatex:false,menu:[{label:'Articles',path:'/'},{label:'About me',path:'/pages/about'},{label:'Contact me',path:'/pages/contacts'}],author:{name:'灯盏细辛',photo:'/avatar.jpg',bio:'汽车之家 用户产品中心。',contacts:{email:'hkongm@163.com',facebook:'',telegram:'',twitter:'',github:'hkongm',rss:'',vkontakte:'',linkedin:'',instagram:'',line:'',gitlab:'',weibo:'',codepen:'',youtube:'',soundcloud:''}}};

/***/ }),

/***/ "./gatsby-ssr.js":
/*!***********************!*\
  !*** ./gatsby-ssr.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.onRenderBody=__webpack_require__(/*! ./gatsby/on-render-body.js */ "./gatsby/on-render-body.js");

/***/ }),

/***/ "./gatsby/on-render-body.js":
/*!**********************************!*\
  !*** ./gatsby/on-render-body.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const React=__webpack_require__(/*! react */ "react");const siteConfig=__webpack_require__(/*! ../config.js */ "./config.js");// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet=__webpack_require__(/*! css-loader!../static/css/katex/katex.min.css */ "./node_modules/css-loader/index.js!./static/css/katex/katex.min.css");const onRenderBody=({setHeadComponents})=>{const{useKatex}=siteConfig;if(useKatex){setHeadComponents([React.createElement('style',{key:'katex-inline-stylesheet',dangerouslySetInnerHTML:{__html:katexStylesheet.toString()}})]);}};module.exports=onRenderBody;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!./static/css/katex/katex.min.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./static/css/katex/katex.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:KaTeX_AMS;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_AMS-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.woff */ "./static/css/katex/fonts/KaTeX_AMS-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.ttf */ "./static/css/katex/fonts/KaTeX_AMS-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.woff2 */ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.woff */ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.ttf */ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.ttf")) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.woff */ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.woff2 */ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.woff */ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.ttf */ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.ttf")) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.woff */ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Bold.woff2 */ "./static/css/katex/fonts/KaTeX_Main-Bold.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Bold.woff */ "./static/css/katex/fonts/KaTeX_Main-Bold.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Bold.ttf */ "./static/css/katex/fonts/KaTeX_Main-Bold.ttf")) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.woff2 */ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.woff */ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.ttf */ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.ttf")) + ") format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Italic.woff2 */ "./static/css/katex/fonts/KaTeX_Main-Italic.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Italic.woff */ "./static/css/katex/fonts/KaTeX_Main-Italic.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Italic.ttf */ "./static/css/katex/fonts/KaTeX_Main-Italic.ttf")) + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Main-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Regular.woff */ "./static/css/katex/fonts/KaTeX_Main-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Main-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Main-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.woff2 */ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.woff */ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.ttf */ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.ttf")) + ") format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-Italic.woff2 */ "./static/css/katex/fonts/KaTeX_Math-Italic.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-Italic.woff */ "./static/css/katex/fonts/KaTeX_Math-Italic.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Math-Italic.ttf */ "./static/css/katex/fonts/KaTeX_Math-Italic.ttf")) + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.woff2 */ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.woff */ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.ttf */ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.ttf")) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.woff2 */ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.woff */ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.ttf */ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.ttf")) + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.woff */ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.ttf */ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Script-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Script-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Script-Regular.woff */ "./static/css/katex/fonts/KaTeX_Script-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Script-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Script-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Size1-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.woff */ "./static/css/katex/fonts/KaTeX_Size1-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Size1-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Size2-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.woff */ "./static/css/katex/fonts/KaTeX_Size2-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Size2-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Size3-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.woff */ "./static/css/katex/fonts/KaTeX_Size3-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Size3-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Size4-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.woff */ "./static/css/katex/fonts/KaTeX_Size4-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Size4-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.woff2 */ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.woff */ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.ttf */ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.ttf")) + ") format(\"truetype\");font-weight:400;font-style:normal}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex .katex-version:after{content:\"0.10.2\"}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathdefault{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:700;font-style:italic}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:0 solid;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;border-right:.05em solid;min-width:1px}.katex .mtable .vs-dashed{border-right:.05em dashed}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:after,.katex .stretchy:before{content:\"\"}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.withPrefix=withPrefix;exports.withAssetPrefix=withAssetPrefix;exports.navigateTo=exports.replace=exports.push=exports.navigate=exports.default=void 0;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _router=__webpack_require__(/*! @reach/router */ "@reach/router");var _parsePath=__webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");exports.parsePath=_parsePath.parsePath;function withPrefix(path){return normalizePath([ true?"":undefined,path].join("/"));}function withAssetPrefix(path){return[""].concat([path.replace(/^\//,"")]).join("/");}function normalizePath(path){return path.replace(/\/+/g,"/");}var NavLinkPropTypes={activeClassName:_propTypes.default.string,activeStyle:_propTypes.default.object,partiallyActive:_propTypes.default.bool};// Set up IntersectionObserver
var createIntersectionObserver=function createIntersectionObserver(el,cb){var io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// Check if element is within viewport, remove listener, destroy observer, and run link callback.
// MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer
io.observe(el);return{instance:io,el:el};};var GatsbyLink=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(GatsbyLink,_React$Component);function GatsbyLink(props){var _this;_this=_React$Component.call(this,props)||this;// Default to no support for IntersectionObserver
(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"defaultGetProps",function(_ref){var isPartiallyCurrent=_ref.isPartiallyCurrent,isCurrent=_ref.isCurrent;if(_this.props.partiallyActive?isPartiallyCurrent:isCurrent){return{className:[_this.props.className,_this.props.activeClassName].filter(Boolean).join(" "),style:(0,_extends2.default)((0,_extends2.default)({},_this.props.style),_this.props.activeStyle)};}return null;});var IOSupported=false;if(typeof window!=="undefined"&&window.IntersectionObserver){IOSupported=true;}_this.state={IOSupported:IOSupported};_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=GatsbyLink.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){// Preserve non IO functionality if no support
if(this.props.to!==prevProps.to&&!this.state.IOSupported){___loader.enqueue((0,_parsePath.parsePath)(this.props.to).pathname);}};_proto.componentDidMount=function componentDidMount(){// Preserve non IO functionality if no support
if(!this.state.IOSupported){___loader.enqueue((0,_parsePath.parsePath)(this.props.to).pathname);}};_proto.componentWillUnmount=function componentWillUnmount(){if(!this.io){return;}var _this$io=this.io,instance=_this$io.instance,el=_this$io.el;instance.unobserve(el);instance.disconnect();};_proto.handleRef=function handleRef(ref){var _this2=this;if(this.props.innerRef&&this.props.innerRef.hasOwnProperty("current")){this.props.innerRef.current=ref;}else if(this.props.innerRef){this.props.innerRef(ref);}if(this.state.IOSupported&&ref){// If IO supported and element reference found, setup Observer functionality
this.io=createIntersectionObserver(ref,function(){___loader.enqueue((0,_parsePath.parsePath)(_this2.props.to).pathname);});}};_proto.render=function render(){var _this3=this;var _this$props=this.props,to=_this$props.to,_this$props$getProps=_this$props.getProps,getProps=_this$props$getProps===void 0?this.defaultGetProps:_this$props$getProps,_onClick=_this$props.onClick,_onMouseEnter=_this$props.onMouseEnter,$activeClassName=_this$props.activeClassName,$activeStyle=_this$props.activeStyle,$innerRef=_this$props.innerRef,partiallyActive=_this$props.partiallyActive,state=_this$props.state,replace=_this$props.replace,rest=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace"]);var LOCAL_URL=/^\/(?!\/)/;if(false){}var prefixedTo=withPrefix(to);return/*#__PURE__*/_react.default.createElement(_router.Link,(0,_extends2.default)({to:prefixedTo,state:state,getProps:getProps,innerRef:this.handleRef,onMouseEnter:function onMouseEnter(e){if(_onMouseEnter){_onMouseEnter(e);}___loader.hovering((0,_parsePath.parsePath)(to).pathname);},onClick:function onClick(e){if(_onClick){_onClick(e);}if(e.button===0&&// ignore right clicks
!_this3.props.target&&// let browser handle "target=_blank"
!e.defaultPrevented&&// onClick prevented default
!e.metaKey&&// ignore clicks with modifier keys...
!e.altKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();var shouldReplace=replace;var isCurrent=encodeURI(to)===window.location.pathname;if(typeof replace!=="boolean"&&isCurrent){shouldReplace=true;}// Make sure the necessary scripts and data are
// loaded before continuing.
navigate(to,{state:state,replace:shouldReplace});}return true;}},rest));};return GatsbyLink;}(_react.default.Component);GatsbyLink.propTypes=(0,_extends2.default)((0,_extends2.default)({},NavLinkPropTypes),{},{onClick:_propTypes.default.func,to:_propTypes.default.string.isRequired,replace:_propTypes.default.bool,state:_propTypes.default.object});var showDeprecationWarning=function showDeprecationWarning(functionName,altFunctionName,version){return console.warn("The \""+functionName+"\" method is now deprecated and will be removed in Gatsby v"+version+". Please use \""+altFunctionName+"\" instead.");};var _default=_react.default.forwardRef(function(props,ref){return/*#__PURE__*/_react.default.createElement(GatsbyLink,(0,_extends2.default)({innerRef:ref},props));});exports.default=_default;var navigate=function navigate(to,options){window.___navigate(withPrefix(to),options);};exports.navigate=navigate;var push=function push(to){showDeprecationWarning("push","navigate",3);window.___push(withPrefix(to));};exports.push=push;var replace=function replace(to){showDeprecationWarning("replace","navigate",3);window.___replace(withPrefix(to));};// TODO: Remove navigateTo for Gatsby v3
exports.replace=replace;var navigateTo=function navigateTo(to){showDeprecationWarning("navigateTo","navigate",3);return push(to);};exports.navigateTo=navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.parsePath=parsePath;function parsePath(path){var pathname=path||"/";var search="";var hash="";var hashIndex=pathname.indexOf("#");if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf("?");if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==="?"?"":search,hash:hash==="#"?"":hash};}

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/gatsby-ssr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _internals=__webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-feed/internals.js");// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents,pathname=_ref.pathname;var _defaultOptions$plugi=(0,_extends2.default)((0,_extends2.default)({},_internals.defaultOptions),pluginOptions),feeds=_defaultOptions$plugi.feeds;var links=feeds.filter(function(_ref2){var match=_ref2.match;if(typeof match==="string")return new RegExp(match).exec(pathname);return true;}).map(function(_ref3,i){var output=_ref3.output,title=_ref3.title,link=_ref3.link;var href=link||withPrefix(output.replace(/^\/?/,"/"));return/*#__PURE__*/_react.default.createElement("link",{key:"gatsby-plugin-feed-"+i,rel:"alternate",type:"application/rss+xml",title:title,href:href});});setHeadComponents(links);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/internals.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/internals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.defaultOptions=exports.runQuery=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var runQuery=function runQuery(handler,query){return handler(query).then(function(r){if(r.errors){throw new Error(r.errors.join(", "));}return r.data;});};exports.runQuery=runQuery;var defaultOptions={// Override if you want to manually specify the RSS "generator" tag.
generator:"GatsbyJS",// Run a default query to gather some information about the site.
query:"\n    {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          site_url: siteUrl\n        }\n      }\n    }\n  ",// Setup an RSS object, merging on various feed-specific options.
setup:function setup(_ref){var siteMetadata=_ref.query.site.siteMetadata,rest=(0,_objectWithoutPropertiesLoose2.default)(_ref,["query"]);return(0,_extends2.default)((0,_extends2.default)({},siteMetadata),rest);},// Create a default RSS feed. Others may be added by using the format below.
feeds:[{query:"\n      {\n        allMarkdownRemark(\n          limit: 1000,\n          sort: {\n            order: DESC,\n            fields: [frontmatter___date]\n          }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                title\n                date\n              }\n              fields {\n                slug\n              }\n              excerpt\n              html\n            }\n          }\n        }\n      }\n    ",// Where we will save the feed generated by this query.
output:"rss.xml"}]};exports.defaultOptions=defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _minimatch=__webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js");exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents,setPostBodyComponents=_ref.setPostBodyComponents;if(false){}// Lighthouse recommends pre-connecting to google analytics
setHeadComponents([/*#__PURE__*/_react.default.createElement("link",{rel:"preconnect dns-prefetch",key:"preconnect-google-analytics",href:"https://www.google-analytics.com"})]);var gtagConfig=pluginOptions.gtagConfig||{};var pluginConfig=pluginOptions.pluginConfig||{};// Prevent duplicate or excluded pageview events being emitted on initial load of page by the `config` command
// https://developers.google.com/analytics/devguides/collection/gtagjs/#disable_pageview_tracking
gtagConfig.send_page_view=false;var firstTrackingId=pluginOptions.trackingIds&&pluginOptions.trackingIds.length?pluginOptions.trackingIds[0]:"";var excludeGtagPaths=[];if(typeof pluginConfig.exclude!=="undefined"){pluginConfig.exclude.map(function(exclude){var mm=new _minimatch.Minimatch(exclude);excludeGtagPaths.push(mm.makeRe());});}var setComponents=pluginConfig.head?setHeadComponents:setPostBodyComponents;// TODO: remove pluginOptions.respectDNT in the next major release of this plugin.
// See issue https://github.com/gatsbyjs/gatsby/issues/11159 for the discussion.
var respectDNT=pluginConfig.respectDNT||pluginOptions.respectDNT;var renderHtml=function renderHtml(){return"\n      "+(excludeGtagPaths.length?"window.excludeGtagPaths=["+excludeGtagPaths.join(",")+"];":"")+"\n      "+(typeof gtagConfig.anonymize_ip!=="undefined"&&gtagConfig.anonymize_ip===true?"function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='"+firstTrackingId+"',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);":"")+"\n      if("+(respectDNT?"!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")":"true")+") {\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){window.dataLayer && window.dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        "+pluginOptions.trackingIds.map(function(trackingId){return"gtag('config', '"+trackingId+"', "+JSON.stringify(gtagConfig)+");";}).join("")+"\n      }\n      ";};return setComponents([/*#__PURE__*/_react.default.createElement("script",{key:"gatsby-plugin-google-gtag",async:true,src:"https://www.googletagmanager.com/gtag/js?id="+firstTrackingId}),/*#__PURE__*/_react.default.createElement("script",{key:"gatsby-plugin-google-gtag-config",dangerouslySetInnerHTML:{__html:renderHtml()}})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _path=_interopRequireDefault(__webpack_require__(/*! path */ "path"));exports.favicons=[{src:"favicon-32x32.png",sizes:"32x32",type:"image/png"}];// default icons for generating icons
exports.defaultIcons=[{src:"icons/icon-48x48.png",sizes:"48x48",type:"image/png"},{src:"icons/icon-72x72.png",sizes:"72x72",type:"image/png"},{src:"icons/icon-96x96.png",sizes:"96x96",type:"image/png"},{src:"icons/icon-144x144.png",sizes:"144x144",type:"image/png"},{src:"icons/icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-256x256.png",sizes:"256x256",type:"image/png"},{src:"icons/icon-384x384.png",sizes:"384x384",type:"image/png"},{src:"icons/icon-512x512.png",sizes:"512x512",type:"image/png"}];/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */exports.doesIconExist=function doesIconExist(srcIcon){try{return _fs.default.statSync(srcIcon).isFile();}catch(e){if(e.code!=="ENOENT"){throw e;}return false;}};/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */exports.addDigestToPath=function(path,digest,method){if(method==="name"){var parsedPath=_path.default.parse(path);return parsedPath.dir+"/"+parsedPath.name+"-"+digest+parsedPath.ext;}if(method==="query"){return path+"?v="+digest;}return path;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var React=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _common=__webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");var _getManifestPathname=_interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,_ref2){var setHeadComponents=_ref.setHeadComponents,_ref$pathname=_ref.pathname,pathname=_ref$pathname===void 0?"/":_ref$pathname;var localize=_ref2.localize,legacy=_ref2.legacy,cacheBusting=_ref2.cache_busting_mode,cacheDigest=_ref2.cacheDigest,icon=_ref2.icon,pluginIcons=_ref2.icons,insertFaviconLinkTag=_ref2.include_favicon,insertMetaTag=_ref2.theme_color_in_head,theme_color=_ref2.theme_color,crossOrigin=_ref2.crossOrigin;// We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
var headComponents=[];var srcIconExists=!!icon;var icons=pluginIcons||_common.defaultIcons;var manifestFileName=(0,_getManifestPathname.default)(pathname,localize);// If icons were generated, also add a favicon link.
if(srcIconExists){if(insertFaviconLinkTag){_common.favicons.forEach(function(favicon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",href:withPrefix((0,_common.addDigestToPath)(favicon.src,cacheDigest,cacheBusting))}));});}}// Add manifest link tag.
headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-link",rel:"manifest",href:withPrefix("/"+manifestFileName),crossOrigin:crossOrigin}));// The user has an option to opt out of the theme_color meta tag being inserted into the head.
if(theme_color&&insertMetaTag){headComponents.push(/*#__PURE__*/React.createElement("meta",{key:"gatsby-plugin-manifest-meta",name:"theme-color",content:theme_color}));}if(legacy){icons.forEach(function(icon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-apple-touch-icon-"+icon.sizes,rel:"apple-touch-icon",sizes:icon.sizes,href:withPrefix((0,_common.addDigestToPath)(icon.src,cacheDigest,srcIconExists?cacheBusting:"none"))}));});}setHeadComponents(headComponents);return true;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=void 0;/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.onRenderBody=exports.onPreRenderHTML=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var onPreRenderHTML=function onPreRenderHTML(_ref){var getHeadComponents=_ref.getHeadComponents,pathname=_ref.pathname,replaceHeadComponents=_ref.replaceHeadComponents;if(pathname!=="/offline-plugin-app-shell-fallback/")return;var headComponents=getHeadComponents();var filteredHeadComponents=headComponents.filter(function(_ref2){var type=_ref2.type,props=_ref2.props;return!(type==="link"&&props.as==="fetch"&&props.rel==="preload"&&(props.href.startsWith("/static/d/")||props.href.startsWith("/page-data/")));});replaceHeadComponents(filteredHeadComponents);};exports.onPreRenderHTML=onPreRenderHTML;var onRenderBody=function onRenderBody(_ref3){var pathname=_ref3.pathname,setHeadComponents=_ref3.setHeadComponents;if(pathname!=="/offline-plugin-app-shell-fallback/"){return;}setHeadComponents([/*#__PURE__*/_react.default.createElement("noscript",{key:"disable-offline-shell"},/*#__PURE__*/_react.default.createElement("meta",{httpEquiv:"refresh",content:"0;url=/.gatsby-plugin-offline:api=disableOfflineShell&redirect=true"}))]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _internals=__webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-sitemap/internals.js");// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var _defaultOptions$plugi=(0,_extends2.default)((0,_extends2.default)({},_internals.defaultOptions),pluginOptions),output=_defaultOptions$plugi.output,createLinkInHead=_defaultOptions$plugi.createLinkInHead;if(!createLinkInHead){return;}if(output.charAt(0)!=="/"){output="/"+output;}setHeadComponents([/*#__PURE__*/_react.default.createElement("link",{key:"gatsby-plugin-sitemap",rel:"sitemap",type:"application/xml",href:withPrefix(output)})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/internals.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/internals.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.filterQuery=filterQuery;exports.defaultOptions=exports.renameFile=exports.writeFile=exports.withoutTrailingSlash=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _pify=_interopRequireDefault(__webpack_require__(/*! pify */ "./node_modules/gatsby-plugin-sitemap/node_modules/pify/index.js"));var _minimatch=_interopRequireDefault(__webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js"));var withoutTrailingSlash=function withoutTrailingSlash(path){return path==="/"?path:path.replace(/\/$/,"");};exports.withoutTrailingSlash=withoutTrailingSlash;var writeFile=(0,_pify.default)(_fs.default.writeFile);exports.writeFile=writeFile;var renameFile=(0,_pify.default)(_fs.default.rename);exports.renameFile=renameFile;function filterQuery(results,excludes,pathPrefix,resolveSiteUrl){var _allSitePage;if(resolveSiteUrl===void 0){resolveSiteUrl=defaultOptions.resolveSiteUrl;}var errors=results.errors,data=results.data;if(errors){throw new Error(errors.join(", "));}var allSitePage=data.allSitePage,otherData=(0,_objectWithoutPropertiesLoose2.default)(data,["allSitePage"]);var _getNodes=getNodes(allSitePage),allPages=_getNodes.allPages,originalType=_getNodes.originalType;// Removing excluded paths
allPages=allPages.filter(function(page){return!excludes.some(function(excludedRoute){return(0,_minimatch.default)(withoutTrailingSlash(page.path),withoutTrailingSlash(excludedRoute));});});// Add path prefix
allPages=allPages.map(function(page){page.path=(pathPrefix+page.path).replace(/^\/\//g,"/");return page;});// siteUrl Validation
var siteUrl=resolveSiteUrl(data);if(!siteUrl||siteUrl.trim().length==0){throw new Error("SiteMetaData 'siteUrl' property is required and cannot be left empty. Check out the documentation to see a working example: https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use");}// remove trailing slash of siteUrl
siteUrl=withoutTrailingSlash(siteUrl);return(0,_extends2.default)((0,_extends2.default)({},otherData),{},{allSitePage:(_allSitePage={},_allSitePage[originalType]=originalType==="nodes"?allPages:allPages.map(function(page){return{node:page};}),_allSitePage),site:{siteMetadata:{siteUrl:siteUrl}}});}var defaultOptions={query:"\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n\n      allSitePage {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",output:"/sitemap.xml",exclude:["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback"],createLinkInHead:true,serialize:function serialize(_ref){var site=_ref.site,allSitePage=_ref.allSitePage;var _getNodes2=getNodes(allSitePage),allPages=_getNodes2.allPages;return allPages===null||allPages===void 0?void 0:allPages.map(function(page){var _site$siteMetadata$si,_site$siteMetadata;return{url:""+((_site$siteMetadata$si=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.siteUrl)!==null&&_site$siteMetadata$si!==void 0?_site$siteMetadata$si:"")+page.path,changefreq:"daily",priority:0.7};});},resolveSiteUrl:function resolveSiteUrl(data){return data.site.siteMetadata.siteUrl;}};exports.defaultOptions=defaultOptions;function getNodes(results){if("nodes"in results){return{allPages:results.nodes,originalType:"nodes"};}if("edges"in results){var _results$edges;return{allPages:results===null||results===void 0?void 0:(_results$edges=results.edges)===null||_results$edges===void 0?void 0:_results$edges.map(function(edge){return edge.node;}),originalType:"edges"};}throw new Error("[gatsby-plugin-sitemap]: Plugin is unsure how to handle the results of your query, you'll need to write custom page filter and serializer in your gatsby config");}

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/node_modules/pify/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/node_modules/pify/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const processFn=(fn,opts)=>function(){const P=opts.promiseModule;const args=new Array(arguments.length);for(let i=0;i<arguments.length;i++){args[i]=arguments[i];}return new P((resolve,reject)=>{if(opts.errorFirst){args.push(function(err,result){if(opts.multiArgs){const results=new Array(arguments.length-1);for(let i=1;i<arguments.length;i++){results[i-1]=arguments[i];}if(err){results.unshift(err);reject(results);}else{resolve(results);}}else if(err){reject(err);}else{resolve(result);}});}else{args.push(function(result){if(opts.multiArgs){const results=new Array(arguments.length-1);for(let i=0;i<arguments.length;i++){results[i]=arguments[i];}resolve(results);}else{resolve(result);}});}fn.apply(this,args);});};module.exports=(obj,opts)=>{opts=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:true,promiseModule:Promise},opts);const filter=key=>{const match=pattern=>typeof pattern==='string'?key===pattern:pattern.test(key);return opts.include?opts.include.some(match):!opts.exclude.some(match);};let ret;if(typeof obj==='function'){ret=function(){if(opts.excludeMain){return obj.apply(this,arguments);}return processFn(obj,opts).apply(this,arguments);};}else{ret=Object.create(Object.getPrototypeOf(obj));}for(const key in obj){// eslint-disable-line guard-for-in
const x=obj[key];ret[key]=typeof x==='function'&&filter(key)?processFn(x,opts):x;}return ret;};

/***/ }),

/***/ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var pluginDefaults={className:"anchor",icon:true,offsetY:0};exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var _Object$assign=Object.assign(pluginDefaults,pluginOptions),className=_Object$assign.className,icon=_Object$assign.icon,offsetY=_Object$assign.offsetY;var styles="\n    ."+className+".before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-100%);\n      padding-right: 4px;\n    }\n    ."+className+".after {\n      display: inline-block;\n      padding-left: 4px;\n    }\n    h1 ."+className+" svg,\n    h2 ."+className+" svg,\n    h3 ."+className+" svg,\n    h4 ."+className+" svg,\n    h5 ."+className+" svg,\n    h6 ."+className+" svg {\n      visibility: hidden;\n    }\n    h1:hover ."+className+" svg,\n    h2:hover ."+className+" svg,\n    h3:hover ."+className+" svg,\n    h4:hover ."+className+" svg,\n    h5:hover ."+className+" svg,\n    h6:hover ."+className+" svg,\n    h1 ."+className+":focus svg,\n    h2 ."+className+":focus svg,\n    h3 ."+className+":focus svg,\n    h4 ."+className+":focus svg,\n    h5 ."+className+":focus svg,\n    h6 ."+className+":focus svg {\n      visibility: visible;\n    }\n  ";// This script used to have `let scrollTop` and `let clientTop` instead of
// current ones which are `var`. It is changed due to incompatibility with
// older browsers (that do not implement `let`). See:
//  - https://github.com/gatsbyjs/gatsby/issues/21058
//  - https://github.com/gatsbyjs/gatsby/pull/21083
var script="\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop\n          var clientTop = document.documentElement.clientTop || document.body.clientTop || 0\n          var offset = element.getBoundingClientRect().top + scrollTop - clientTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - "+offsetY+")\n          }), 0)\n        }\n      }\n    })\n  ";var style=icon?/*#__PURE__*/_react.default.createElement("style",{key:"gatsby-remark-autolink-headers-style",type:"text/css"},styles):undefined;return setHeadComponents([style,/*#__PURE__*/_react.default.createElement("script",{key:"gatsby-remark-autolink-headers-script",dangerouslySetInnerHTML:{__html:script}})]);};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"gatsby@^2.20.12\",\"_id\":\"gatsby@2.22.11\",\"_inBundle\":false,\"_integrity\":\"sha512-7hUzCTeu8RyjqxM6Fkij1mGIxJuSVlKe2odk+I+SRJvdE5I0nt/XOcbbrDnbAqrwOx1pE1+mGnE4ZgCRzjRWcg==\",\"_location\":\"/gatsby\",\"_phantomChildren\":{\"@babel/code-frame\":\"7.8.3\",\"@babel/compat-data\":\"7.10.0\",\"@babel/generator\":\"7.10.0\",\"@babel/helper-compilation-targets\":\"7.10.0\",\"@babel/helper-module-imports\":\"7.8.3\",\"@babel/helper-module-transforms\":\"7.9.0\",\"@babel/helper-plugin-utils\":\"7.8.3\",\"@babel/helpers\":\"7.10.0\",\"@babel/parser\":\"7.10.0\",\"@babel/plugin-proposal-async-generator-functions\":\"7.8.3\",\"@babel/plugin-proposal-class-properties\":\"7.8.3\",\"@babel/plugin-proposal-dynamic-import\":\"7.8.3\",\"@babel/plugin-proposal-json-strings\":\"7.10.0\",\"@babel/plugin-proposal-nullish-coalescing-operator\":\"7.8.3\",\"@babel/plugin-proposal-numeric-separator\":\"7.8.3\",\"@babel/plugin-proposal-object-rest-spread\":\"7.10.0\",\"@babel/plugin-proposal-optional-catch-binding\":\"7.8.3\",\"@babel/plugin-proposal-private-methods\":\"7.8.3\",\"@babel/plugin-proposal-unicode-property-regex\":\"7.8.8\",\"@babel/plugin-syntax-async-generators\":\"7.8.4\",\"@babel/plugin-syntax-class-properties\":\"7.8.3\",\"@babel/plugin-syntax-dynamic-import\":\"7.8.3\",\"@babel/plugin-syntax-json-strings\":\"7.8.3\",\"@babel/plugin-syntax-nullish-coalescing-operator\":\"7.8.3\",\"@babel/plugin-syntax-numeric-separator\":\"7.8.3\",\"@babel/plugin-syntax-object-rest-spread\":\"7.8.3\",\"@babel/plugin-syntax-optional-catch-binding\":\"7.8.3\",\"@babel/plugin-syntax-optional-chaining\":\"7.8.3\",\"@babel/plugin-syntax-top-level-await\":\"7.8.3\",\"@babel/plugin-transform-arrow-functions\":\"7.8.3\",\"@babel/plugin-transform-async-to-generator\":\"7.8.3\",\"@babel/plugin-transform-block-scoped-functions\":\"7.8.3\",\"@babel/plugin-transform-block-scoping\":\"7.10.0\",\"@babel/plugin-transform-classes\":\"7.9.5\",\"@babel/plugin-transform-computed-properties\":\"7.8.3\",\"@babel/plugin-transform-destructuring\":\"7.10.0\",\"@babel/plugin-transform-dotall-regex\":\"7.8.3\",\"@babel/plugin-transform-duplicate-keys\":\"7.8.3\",\"@babel/plugin-transform-exponentiation-operator\":\"7.8.3\",\"@babel/plugin-transform-for-of\":\"7.10.0\",\"@babel/plugin-transform-function-name\":\"7.8.3\",\"@babel/plugin-transform-literals\":\"7.8.3\",\"@babel/plugin-transform-member-expression-literals\":\"7.8.3\",\"@babel/plugin-transform-modules-amd\":\"7.9.6\",\"@babel/plugin-transform-modules-commonjs\":\"7.9.6\",\"@babel/plugin-transform-modules-systemjs\":\"7.10.0\",\"@babel/plugin-transform-modules-umd\":\"7.9.0\",\"@babel/plugin-transform-named-capturing-groups-regex\":\"7.8.3\",\"@babel/plugin-transform-new-target\":\"7.8.3\",\"@babel/plugin-transform-object-super\":\"7.8.3\",\"@babel/plugin-transform-parameters\":\"7.9.5\",\"@babel/plugin-transform-property-literals\":\"7.8.3\",\"@babel/plugin-transform-react-display-name\":\"7.8.3\",\"@babel/plugin-transform-react-jsx\":\"7.9.4\",\"@babel/plugin-transform-react-jsx-development\":\"7.9.0\",\"@babel/plugin-transform-react-jsx-self\":\"7.9.0\",\"@babel/plugin-transform-react-jsx-source\":\"7.10.0\",\"@babel/plugin-transform-react-pure-annotations\":\"7.10.0\",\"@babel/plugin-transform-regenerator\":\"7.8.7\",\"@babel/plugin-transform-reserved-words\":\"7.8.3\",\"@babel/plugin-transform-runtime\":\"7.10.0\",\"@babel/plugin-transform-shorthand-properties\":\"7.8.3\",\"@babel/plugin-transform-spread\":\"7.10.0\",\"@babel/plugin-transform-sticky-regex\":\"7.8.3\",\"@babel/plugin-transform-template-literals\":\"7.8.3\",\"@babel/plugin-transform-typeof-symbol\":\"7.8.4\",\"@babel/plugin-transform-unicode-escapes\":\"7.10.0\",\"@babel/plugin-transform-unicode-regex\":\"7.8.3\",\"@babel/preset-modules\":\"0.1.3\",\"@babel/runtime\":\"7.10.0\",\"@babel/template\":\"7.10.0\",\"@babel/traverse\":\"7.10.0\",\"@babel/types\":\"7.10.0\",\"@hapi/joi\":\"15.1.1\",\"@types/color-name\":\"1.1.1\",\"array-includes\":\"3.1.1\",\"babel-plugin-dynamic-import-node\":\"2.3.3\",\"babel-plugin-macros\":\"2.8.0\",\"babel-plugin-transform-react-remove-prop-types\":\"0.4.24\",\"better-opn\":\"1.0.0\",\"bluebird\":\"3.7.2\",\"browserslist\":\"4.12.0\",\"camelcase\":\"5.3.1\",\"caniuse-lite\":\"1.0.30001066\",\"chalk\":\"2.4.2\",\"clipboardy\":\"2.3.0\",\"common-tags\":\"1.8.0\",\"configstore\":\"5.0.1\",\"convert-hrtime\":\"3.0.0\",\"convert-source-map\":\"1.7.0\",\"core-js\":\"2.6.11\",\"core-js-compat\":\"3.6.5\",\"decamelize\":\"1.2.0\",\"envinfo\":\"7.5.1\",\"esutils\":\"2.0.3\",\"execa\":\"3.4.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"8.1.0\",\"gatsby-core-utils\":\"1.3.3\",\"gatsby-recipes\":\"0.1.30\",\"gatsby-telemetry\":\"1.3.9\",\"gensync\":\"1.0.0-beta.1\",\"get-caller-file\":\"2.0.5\",\"has\":\"1.0.3\",\"ink\":\"2.7.1\",\"ink-spinner\":\"3.0.1\",\"invariant\":\"2.2.4\",\"is-valid-path\":\"0.1.1\",\"json5\":\"2.1.3\",\"jsx-ast-utils\":\"2.3.0\",\"levenary\":\"1.1.1\",\"lodash\":\"4.17.15\",\"meant\":\"1.0.1\",\"ms\":\"2.1.2\",\"node-fetch\":\"2.6.0\",\"normalize-range\":\"0.1.2\",\"num2fraction\":\"1.2.2\",\"object.entries\":\"1.1.2\",\"object.fromentries\":\"2.0.2\",\"object.values\":\"1.1.1\",\"opentracing\":\"0.14.4\",\"postcss\":\"7.0.31\",\"postcss-value-parser\":\"4.1.0\",\"pretty-error\":\"2.1.1\",\"progress\":\"2.0.3\",\"prompts\":\"2.3.2\",\"prop-types\":\"15.7.2\",\"react\":\"16.13.1\",\"redux\":\"4.0.5\",\"require-directory\":\"2.1.1\",\"require-main-filename\":\"2.0.0\",\"resolve\":\"1.17.0\",\"resolve-cwd\":\"3.0.0\",\"semver\":\"5.7.1\",\"set-blocking\":\"2.0.0\",\"signal-exit\":\"3.0.3\",\"source-map\":\"0.5.7\",\"stack-trace\":\"0.0.10\",\"string.prototype.matchall\":\"4.0.2\",\"update-notifier\":\"3.0.1\",\"uuid\":\"3.4.0\",\"which-module\":\"2.0.0\",\"xregexp\":\"4.3.0\",\"y18n\":\"4.0.0\",\"yurnalist\":\"1.1.2\"},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"gatsby@^2.20.12\",\"name\":\"gatsby\",\"escapedName\":\"gatsby\",\"rawSpec\":\"^2.20.12\",\"saveSpec\":null,\"fetchSpec\":\"^2.20.12\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/gatsby/-/gatsby-2.22.11.tgz\",\"_shasum\":\"18ee3c292dfcedbef44117dcb1c22a7debfad3fe\",\"_spec\":\"gatsby@^2.20.12\",\"_where\":\"/Users/caichao/Code/projects/gatsby-starter-lumen\",\"author\":{\"name\":\"Kyle Mathews\",\"email\":\"mathews.kyle@gmail.com\"},\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"@babel/code-frame\":\"^7.8.3\",\"@babel/core\":\"^7.9.6\",\"@babel/parser\":\"^7.9.6\",\"@babel/polyfill\":\"^7.8.7\",\"@babel/runtime\":\"^7.9.6\",\"@babel/traverse\":\"^7.9.6\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.3.1\",\"@reach/router\":\"^1.3.3\",\"@types/http-proxy\":\"^1.17.4\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.8.0\",\"axios\":\"^0.19.2\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-remove-graphql-queries\":\"^2.9.2\",\"babel-preset-gatsby\":\"^0.4.7\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"browserslist\":\"^4.12.0\",\"cache-manager\":\"^2.11.1\",\"cache-manager-fs-hash\":\"^0.0.8\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.4.0\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.2.0\",\"core-js\":\"^2.6.11\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.14.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.0\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.1\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.20.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.14\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.12.36\",\"gatsby-core-utils\":\"^1.3.3\",\"gatsby-graphiql-explorer\":\"^0.4.2\",\"gatsby-link\":\"^2.4.3\",\"gatsby-plugin-page-creator\":\"^2.3.7\",\"gatsby-plugin-typescript\":\"^2.4.3\",\"gatsby-react-router-scroll\":\"^3.0.1\",\"gatsby-telemetry\":\"^1.3.9\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.14\",\"hasha\":\"^5.2.0\",\"http-proxy\":\"^1.18.1\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.2.0\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.15\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"meant\":\"^1.0.1\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.5\",\"mini-css-extract-plugin\":\"^0.8.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.25.3\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"query-string\":\"^6.12.1\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.7.0\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.0\",\"socket.io\":\"^2.3.0\",\"socket.io-client\":\"2.3.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^1.4.3\",\"tmp\":\"^0.2.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"^3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.43.0\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.1\",\"xstate\":\"^4.9.1\",\"yaml-loader\":\"^0.6.0\"},\"deprecated\":false,\"description\":\"Blazing fast modern site generator for React\",\"devDependencies\":{\"@babel/cli\":\"^7.8.4\",\"@babel/runtime\":\"^7.9.6\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/reach__router\":\"^1.3.5\",\"@types/socket.io\":\"^2.1.4\",\"@types/tmp\":\"^0.2.0\",\"babel-preset-gatsby-package\":\"^0.4.2\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.3.0\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.19.2\",\"zipkin-javascript-opentracing\":\"^2.1.0\",\"zipkin-transport-http\":\"^0.19.2\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"gitHead\":\"4eaa7cb8b184bc190694f6c7fd984a3929cbf3bb\",\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"name\":\"gatsby\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\"\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__\\\" --extensions \\\".ts,.js\\\"\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"postbuild\":\"node scripts/output-api-file.js\",\"postinstall\":\"node scripts/postinstall.js\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"version\":\"2.22.11\",\"yargs\":{\"boolean-negation\":false}}");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
//! version : 2.26.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    undefined
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            typeof module !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged and will be removed in an upcoming major release. Please refer to ' +
            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.26.0';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-disqus-comments/build/components/DisqusThread.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/components/DisqusThread.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
var __disqusAdded = false;

function copyProps(context, props) {
    var onNewComment = props.onNewComment,
        language = props.language,
        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);

    for (var prop in rest) {
        context.page[prop] = rest[prop];
    }

    // Setting the language - if none is provided, the default one is used
    context.language = language;

    if (onNewComment) {
        context.callbacks = {
            onNewComment: [onNewComment]
        };
    }
}

var DisqusThread = function (_React$Component) {
    _inherits(DisqusThread, _React$Component);

    function DisqusThread() {
        _classCallCheck(this, DisqusThread);

        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
    }

    _createClass(DisqusThread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDisqus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadDisqus();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.identifier !== this.props.identifier;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = Object.keys(this.props).reduce(function (memo, key) {
                return DISQUS_CONFIG.some(function (config) {
                    return config === key;
                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
            }, {});

            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement('div', { id: 'disqus_thread' })
            );
        }
    }, {
        key: 'addDisqusScript',
        value: function addDisqusScript() {
            if (__disqusAdded) {
                return;
            }

            var child = this.disqus = document.createElement('script');
            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

            child.async = true;
            child.type = 'text/javascript';
            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';

            parent.appendChild(child);
            __disqusAdded = true;
        }
    }, {
        key: 'loadDisqus',
        value: function loadDisqus() {
            var _this3 = this;

            var props = {};

            // Extract Disqus props that were supplied to this component
            DISQUS_CONFIG.forEach(function (prop) {
                // prop "shortname" is only necessary for loading the script, not for the config itself
                if (prop !== 'shortname' && !!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                window.disqus_config = function () {
                    copyProps(this, props);
                };
                this.addDisqusScript();
            }
        }
    }]);

    return DisqusThread;
}(_react2.default.Component);

DisqusThread.displayName = 'DisqusThread';

DisqusThread.propTypes = {
    id: _propTypes2.default.string,

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     */
    shortname: _propTypes2.default.string.isRequired,

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     */
    identifier: _propTypes2.default.string,

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     */
    title: _propTypes2.default.string,

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     */
    url: _propTypes2.default.string,

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     */
    category_id: _propTypes2.default.string,

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     */
    onNewComment: _propTypes2.default.func,

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     */
    language: _propTypes2.default.string
};

DisqusThread.defaultProps = {
    url: typeof window === 'undefined' ? null : window.location.href
};

exports.default = DisqusThread;

/***/ }),

/***/ "./node_modules/react-disqus-comments/build/main.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/DisqusThread */ "./node_modules/react-disqus-comments/build/components/DisqusThread.js");

/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/static/d/3964968768.json":
/*!*****************************************!*\
  !*** ./public/static/d/3964968768.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"allMarkdownRemark\":{\"group\":[{\"fieldValue\":\"Talk\",\"totalCount\":15},{\"fieldValue\":\"Tech\",\"totalCount\":23},{\"fieldValue\":\"Work\",\"totalCount\":1}]}}}");

/***/ }),

/***/ "./public/static/d/4175916191.json":
/*!*****************************************!*\
  !*** ./public/static/d/4175916191.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"allMarkdownRemark\":{\"group\":[{\"fieldValue\":\"CSS\",\"totalCount\":1},{\"fieldValue\":\"CSS Modules\",\"totalCount\":1},{\"fieldValue\":\"Chrome\",\"totalCount\":1},{\"fieldValue\":\"ES2015\",\"totalCount\":1},{\"fieldValue\":\"ES6\",\"totalCount\":1},{\"fieldValue\":\"Flux\",\"totalCount\":1},{\"fieldValue\":\"GHPages\",\"totalCount\":1},{\"fieldValue\":\"HTML5\",\"totalCount\":1},{\"fieldValue\":\"Javascript\",\"totalCount\":4},{\"fieldValue\":\"Jekyll\",\"totalCount\":1},{\"fieldValue\":\"Mac\",\"totalCount\":1},{\"fieldValue\":\"MediaQuery\",\"totalCount\":1},{\"fieldValue\":\"React\",\"totalCount\":7},{\"fieldValue\":\"Styled Components\",\"totalCount\":1},{\"fieldValue\":\"Swift\",\"totalCount\":1},{\"fieldValue\":\"Webpack\",\"totalCount\":2},{\"fieldValue\":\"iOS\",\"totalCount\":2},{\"fieldValue\":\"博客\",\"totalCount\":1},{\"fieldValue\":\"响应式设计\",\"totalCount\":1},{\"fieldValue\":\"团队\",\"totalCount\":2},{\"fieldValue\":\"工作\",\"totalCount\":9},{\"fieldValue\":\"技术大会\",\"totalCount\":2},{\"fieldValue\":\"杂谈\",\"totalCount\":18},{\"fieldValue\":\"构建\",\"totalCount\":3},{\"fieldValue\":\"浏览器\",\"totalCount\":1},{\"fieldValue\":\"管理\",\"totalCount\":5},{\"fieldValue\":\"翻译\",\"totalCount\":5},{\"fieldValue\":\"面试\",\"totalCount\":3}]}}}");

/***/ }),

/***/ "./public/static/d/67971855.json":
/*!***************************************!*\
  !*** ./public/static/d/67971855.json ***!
  \***************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"author\":{\"name\":\"灯盏细辛\",\"bio\":\"汽车之家 用户产品中心。\",\"photo\":\"/avatar.jpg\",\"contacts\":{\"facebook\":\"\",\"linkedin\":\"\",\"github\":\"hkongm\",\"twitter\":\"\",\"telegram\":\"\",\"instagram\":\"\",\"email\":\"hkongm@163.com\",\"rss\":\"\",\"vkontakte\":\"\",\"line\":\"\",\"gitlab\":\"\",\"weibo\":\"\",\"codepen\":\"\",\"youtube\":\"\",\"soundcloud\":\"\"}},\"menu\":[{\"label\":\"Articles\",\"path\":\"/\"},{\"label\":\"About me\",\"path\":\"/pages/about\"},{\"label\":\"Contact me\",\"path\":\"/pages/contacts\"}],\"url\":\"http://hkongm.github.io/\",\"title\":\"灯盏细辛 Blog\",\"subtitle\":\"灯盏细辛 Blog\",\"copyright\":\"© All rights reserved.\",\"disqusShortname\":\"\"}}}}");

/***/ }),

/***/ "./src/components/Feed/Feed.js":
/*!*************************************!*\
  !*** ./src/components/Feed/Feed.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Feed_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feed.module.scss */ "./src/components/Feed/Feed.module.scss");
/* harmony import */ var _Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3__);
const Feed=({edges})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed']},edges.map(edge=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item'],key:edge.node.fields.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-meta']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-meta-time'],dateTime:moment__WEBPACK_IMPORTED_MODULE_1___default()(edge.node.frontmatter.date).format('MMMM D, YYYY')},moment__WEBPACK_IMPORTED_MODULE_1___default()(edge.node.frontmatter.date).format('MMMM YYYY')),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-meta-divider']}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-meta-category']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:edge.node.fields.categorySlug,className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-meta-category-link']},edge.node.frontmatter.category))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-title']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-title-link'],to:edge.node.fields.slug},edge.node.frontmatter.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-description']},edge.node.frontmatter.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:_Feed_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['feed__item-readmore'],to:edge.node.fields.slug},"Read"))));/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./src/components/Feed/Feed.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Feed/Feed.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"feed__item": "Feed-module--feed__item--2D5rE",
	"feed__item-title": "Feed-module--feed__item-title--3nigr",
	"feed__item-title-link": "Feed-module--feed__item-title-link--iFMRs",
	"feed__item-description": "Feed-module--feed__item-description--1uO8e",
	"feed__item-meta-time": "Feed-module--feed__item-meta-time--3t1fg",
	"feed__item-meta-divider": "Feed-module--feed__item-meta-divider--N-Q0A",
	"feed__item-meta-category-link": "Feed-module--feed__item-meta-category-link--23f8F",
	"feed__item-readmore": "Feed-module--feed__item-readmore--1u6bI"
};

/***/ }),

/***/ "./src/components/Feed/index.js":
/*!**************************************!*\
  !*** ./src/components/Feed/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feed */ "./src/components/Feed/Feed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Feed__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Icon/Icon.js":
/*!*************************************!*\
  !*** ./src/components/Icon/Icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.module.scss */ "./src/components/Icon/Icon.module.scss");
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Icon_module_scss__WEBPACK_IMPORTED_MODULE_1__);
const Icon=({name,icon})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{className:_Icon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['icon'],viewBox:icon.viewBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:icon.path}));/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/Icon/Icon.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Icon/Icon.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon": "Icon-module--icon--Gpyvw"
};

/***/ }),

/***/ "./src/components/Icon/index.js":
/*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);
const Layout=({children,title,description,socialImage})=>{const{author,url}=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSiteMetadata"])();const metaImage=socialImage!=null?socialImage:author.photo;const metaImageUrl=url+Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["withPrefix"])(metaImage);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.layout},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",{lang:"en"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:site_name",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:image",content:metaImageUrl})),children);};/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"layout": "Layout-module--layout--3Pyz6"
};

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Page/Page.js":
/*!*************************************!*\
  !*** ./src/components/Page/Page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.module.scss */ "./src/components/Page/Page.module.scss");
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_1__);
const Page=({title,children})=>{const pageRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{pageRef.current.scrollIntoView();});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:pageRef,className:_Page_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Page_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page__inner']},title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_Page_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page__title']},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Page_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page__body']},children)));};/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Page/Page.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Page/Page.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"page": "Page-module--page--2nMky",
	"page__inner": "Page-module--page__inner--2M_vz",
	"page__title": "Page-module--page__title--GPD8L",
	"page__body": "Page-module--page__body--Ic6i6"
};

/***/ }),

/***/ "./src/components/Page/index.js":
/*!**************************************!*\
  !*** ./src/components/Page/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/components/Page/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Pagination/Pagination.js":
/*!*************************************************!*\
  !*** ./src/components/Pagination/Pagination.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination.module.scss */ "./src/components/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4__);
const cx=classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a);const Pagination=({prevPagePath,nextPagePath,hasNextPage,hasPrevPage})=>{const prevClassName=cx({'pagination__prev-link':true,'pagination__prev-link--disable':!hasPrevPage});const nextClassName=cx({'pagination__next-link':true,'pagination__next-link--disable':!hasNextPage});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['pagination']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['pagination__prev']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{rel:"prev",to:hasPrevPage?prevPagePath:'/',className:prevClassName},_constants__WEBPACK_IMPORTED_MODULE_3__["PAGINATION"].PREV_PAGE)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['pagination__next']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{rel:"next",to:hasNextPage?nextPagePath:'/',className:nextClassName},_constants__WEBPACK_IMPORTED_MODULE_3__["PAGINATION"].NEXT_PAGE)));};/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/Pagination/Pagination.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/Pagination/Pagination.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"pagination": "Pagination-module--pagination--2H3nO",
	"pagination__prev": "Pagination-module--pagination__prev--bet5s",
	"pagination__prev-link": "Pagination-module--pagination__prev-link--1Nzs6",
	"pagination__prev-link--disable": "Pagination-module--pagination__prev-link--disable--Yklx9",
	"pagination__next": "Pagination-module--pagination__next--3hFiN",
	"pagination__next-link": "Pagination-module--pagination__next-link--3FUtA",
	"pagination__next-link--disable": "Pagination-module--pagination__next-link--disable--30UwZ"
};

/***/ }),

/***/ "./src/components/Pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/Pagination/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "./src/components/Pagination/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Author/Author.js":
/*!**********************************************!*\
  !*** ./src/components/Post/Author/Author.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _Author_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Author.module.scss */ "./src/components/Post/Author/Author.module.scss");
/* harmony import */ var _Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Author_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks */ "./src/hooks/index.js");
const Author=()=>{const{author}=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSiteMetadata"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__bio']},author.bio,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__bio-twitter'],href:Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContactHref"])('twitter',author.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,author.name)," on Twitter")));};/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./src/components/Post/Author/Author.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/Post/Author/Author.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"author": "Author-module--author--2Yefr",
	"author__bio-twitter": "Author-module--author__bio-twitter--n-O9n"
};

/***/ }),

/***/ "./src/components/Post/Author/index.js":
/*!*********************************************!*\
  !*** ./src/components/Post/Author/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Author */ "./src/components/Post/Author/Author.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Author__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Comments/Comments.js":
/*!**************************************************!*\
  !*** ./src/components/Post/Comments/Comments.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-disqus-comments */ "./node_modules/react-disqus-comments/build/main.js");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_disqus_comments__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks */ "./src/hooks/index.js");
const Comments=({postTitle,postSlug})=>{const{url,disqusShortname}=Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSiteMetadata"])();if(!disqusShortname){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_1___default.a,{shortname:disqusShortname,identifier:postTitle,title:postTitle,url:url+postSlug});};/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./src/components/Post/Comments/index.js":
/*!***********************************************!*\
  !*** ./src/components/Post/Comments/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments */ "./src/components/Post/Comments/Comments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Comments__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Content/Content.js":
/*!************************************************!*\
  !*** ./src/components/Post/Content/Content.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.module.scss */ "./src/components/Post/Content/Content.module.scss");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_1__);
const Content=({body,title})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['content']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['content__title']},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['content__body'],dangerouslySetInnerHTML:{__html:body}}));/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Post/Content/Content.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/Post/Content/Content.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"content": "Content-module--content--3p512",
	"content__title": "Content-module--content__title--2BDW9",
	"content__body": "Content-module--content__body--2TrQ-"
};

/***/ }),

/***/ "./src/components/Post/Content/index.js":
/*!**********************************************!*\
  !*** ./src/components/Post/Content/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Post/Content/Content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Content__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Meta/Meta.js":
/*!******************************************!*\
  !*** ./src/components/Post/Meta/Meta.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta.module.scss */ "./src/components/Post/Meta/Meta.module.scss");
/* harmony import */ var _Meta_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Meta_module_scss__WEBPACK_IMPORTED_MODULE_2__);
const Meta=({date})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Meta_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['meta']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_Meta_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['meta__date']},"Published ",moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('D MMM YYYY')));/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Post/Meta/Meta.module.scss":
/*!***************************************************!*\
  !*** ./src/components/Post/Meta/Meta.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"meta__date": "Meta-module--meta__date--29eD7"
};

/***/ }),

/***/ "./src/components/Post/Meta/index.js":
/*!*******************************************!*\
  !*** ./src/components/Post/Meta/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Meta */ "./src/components/Post/Meta/Meta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Meta__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Author */ "./src/components/Post/Author/index.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments */ "./src/components/Post/Comments/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/components/Post/Content/index.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meta */ "./src/components/Post/Meta/index.js");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tags */ "./src/components/Post/Tags/index.js");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Post.module.scss */ "./src/components/Post/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_7__);
const Post=({post})=>{const{html}=post;const{tagSlugs,slug}=post.fields;const{tags,title,date}=post.frontmatter;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['post']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:_Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['post__home-button'],to:"/"},"All Articles"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['post__content']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"],{body:html,title:title})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['post__footer']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_5__["default"],{date:date}),tags&&tagSlugs&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_6__["default"],{tags:tags,tagSlugs:tagSlugs}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_2__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Post_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['post__comments']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_3__["default"],{postSlug:slug,postTitle:post.frontmatter.title})));};/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/Post/Post.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Post/Post.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"post__footer": "Post-module--post__footer--3WzWU",
	"post__comments": "Post-module--post__comments--25y6I",
	"post__home-button": "Post-module--post__home-button--16Kl0"
};

/***/ }),

/***/ "./src/components/Post/Tags/Tags.js":
/*!******************************************!*\
  !*** ./src/components/Post/Tags/Tags.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Tags_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tags.module.scss */ "./src/components/Post/Tags/Tags.module.scss");
/* harmony import */ var _Tags_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tags_module_scss__WEBPACK_IMPORTED_MODULE_2__);
const Tags=({tags,tagSlugs})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Tags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['tags']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_Tags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['tags__list']},tagSlugs&&tagSlugs.map((slug,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:_Tags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['tags__list-item'],key:tags[i]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:slug,className:_Tags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['tags__list-item-link']},tags[i])))));/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./src/components/Post/Tags/Tags.module.scss":
/*!***************************************************!*\
  !*** ./src/components/Post/Tags/Tags.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tags": "Tags-module--tags--1L_ct",
	"tags__list": "Tags-module--tags__list--91FqN",
	"tags__list-item": "Tags-module--tags__list-item--1M30P",
	"tags__list-item-link": "Tags-module--tags__list-item-link--3SL_8"
};

/***/ }),

/***/ "./src/components/Post/Tags/index.js":
/*!*******************************************!*\
  !*** ./src/components/Post/Tags/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags */ "./src/components/Post/Tags/Tags.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tags__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Post/index.js":
/*!**************************************!*\
  !*** ./src/components/Post/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ "./src/components/Post/Post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Post__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Sidebar/Author/Author.js":
/*!*************************************************!*\
  !*** ./src/components/Sidebar/Author/Author.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Author_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Author.module.scss */ "./src/components/Sidebar/Author/Author.module.scss");
/* harmony import */ var _Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Author_module_scss__WEBPACK_IMPORTED_MODULE_2__);
const Author=({author,isIndex})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:Object(gatsby__WEBPACK_IMPORTED_MODULE_1__["withPrefix"])(author.photo),className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__photo'],width:"75",height:"75",alt:author.name})),isIndex===true?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__title']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__title-link'],to:"/"},author.name)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__title']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__title-link'],to:"/"},author.name)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_Author_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['author__subtitle']},author.bio));/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./src/components/Sidebar/Author/Author.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/Sidebar/Author/Author.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"author__photo": "Author-module--author__photo--36xCH",
	"author__title": "Author-module--author__title--2CaTb",
	"author__title-link": "Author-module--author__title-link--Yrism",
	"author__subtitle": "Author-module--author__subtitle--cAaEB"
};

/***/ }),

/***/ "./src/components/Sidebar/Author/index.js":
/*!************************************************!*\
  !*** ./src/components/Sidebar/Author/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Author */ "./src/components/Sidebar/Author/Author.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Author__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Sidebar/Contacts/Contacts.js":
/*!*****************************************************!*\
  !*** ./src/components/Sidebar/Contacts/Contacts.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contacts.module.scss */ "./src/components/Sidebar/Contacts/Contacts.module.scss");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3__);
const Contacts=({contacts})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['contacts']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['contacts__list']},Object.keys(contacts).map(name=>!contacts[name]?null:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['contacts__list-item'],key:name},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['contacts__list-item-link'],href:Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContactHref"])(name,contacts[name]),rel:"noopener noreferrer",target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],{name:name,icon:Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getIcon"])(name)}))))));/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/components/Sidebar/Contacts/Contacts.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/Sidebar/Contacts/Contacts.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"contacts": "Contacts-module--contacts--1rGd1",
	"contacts__list": "Contacts-module--contacts__list--3OgdW",
	"contacts__list-item": "Contacts-module--contacts__list-item--16p9q",
	"contacts__list-item-link": "Contacts-module--contacts__list-item-link--2MIDn"
};

/***/ }),

/***/ "./src/components/Sidebar/Contacts/index.js":
/*!**************************************************!*\
  !*** ./src/components/Sidebar/Contacts/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts */ "./src/components/Sidebar/Contacts/Contacts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contacts__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Sidebar/Copyright/Copyright.js":
/*!*******************************************************!*\
  !*** ./src/components/Sidebar/Copyright/Copyright.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Copyright_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copyright.module.scss */ "./src/components/Sidebar/Copyright/Copyright.module.scss");
/* harmony import */ var _Copyright_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Copyright_module_scss__WEBPACK_IMPORTED_MODULE_1__);
const Copyright=({copyright})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Copyright_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['copyright']},copyright);/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./src/components/Sidebar/Copyright/Copyright.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/Sidebar/Copyright/Copyright.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"copyright": "Copyright-module--copyright--1ariN"
};

/***/ }),

/***/ "./src/components/Sidebar/Copyright/index.js":
/*!***************************************************!*\
  !*** ./src/components/Sidebar/Copyright/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Copyright */ "./src/components/Sidebar/Copyright/Copyright.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Copyright__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Sidebar/Menu/Menu.js":
/*!*********************************************!*\
  !*** ./src/components/Sidebar/Menu/Menu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.module.scss */ "./src/components/Sidebar/Menu/Menu.module.scss");
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
const Menu=({menu})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{className:_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['menu']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['menu__list']},menu.map(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['menu__list-item'],key:item.path},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:item.path,className:_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['menu__list-item-link'],activeClassName:_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['menu__list-item-link--active']},item.label)))));/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Sidebar/Menu/Menu.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Sidebar/Menu/Menu.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"menu": "Menu-module--menu--Efbin",
	"menu__list": "Menu-module--menu__list--31Zeo",
	"menu__list-item": "Menu-module--menu__list-item--1lJ6B",
	"menu__list-item-link": "Menu-module--menu__list-item-link--10Ush",
	"menu__list-item-link--active": "Menu-module--menu__list-item-link--active--2CbUO"
};

/***/ }),

/***/ "./src/components/Sidebar/Menu/index.js":
/*!**********************************************!*\
  !*** ./src/components/Sidebar/Menu/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components/Sidebar/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Author */ "./src/components/Sidebar/Author/index.js");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contacts */ "./src/components/Sidebar/Contacts/index.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Copyright */ "./src/components/Sidebar/Copyright/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/components/Sidebar/Menu/index.js");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar.module.scss */ "./src/components/Sidebar/Sidebar.module.scss");
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
const Sidebar=({isIndex})=>{const{author,copyright,menu}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar__inner']},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_1__["default"],{author:author,isIndex:isIndex}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"],{menu:menu}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contacts__WEBPACK_IMPORTED_MODULE_2__["default"],{contacts:author.contacts}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Copyright__WEBPACK_IMPORTED_MODULE_3__["default"],{copyright:copyright})));};/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Sidebar/Sidebar.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sidebar": "Sidebar-module--sidebar--X4z2p",
	"sidebar__inner": "Sidebar-module--sidebar__inner--Jdc5s"
};

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/constants/icons.js":
/*!********************************!*\
  !*** ./src/constants/icons.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ICONS={TWITTER:{path:'M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z',viewBox:'0 0 26 28'},FACEBOOK:{path:'M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z',viewBox:'0 0 16 28'},TELEGRAM:{path:'M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z',viewBox:'0 0 28 28'},VKONTAKTE:{path:'M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z',viewBox:'0 0 31 28'},GITHUB:{path:'M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z',viewBox:'0 0 26 28'},EMAIL:{path:'M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z',viewBox:'0 0 28 28'},RSS:{path:'M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z',viewBox:'0 0 22 28'},LINKEDIN:{path:'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',viewBox:'0 0 24 24'},INSTAGRAM:{path:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',viewBox:'0 0 24 24'},LINE:{path:'M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z',viewBox:'0 0 24 24'},GITLAB:{path:'M 38.011719 4 C 37.574219 3.996094 37.183594 4.273438 37.046875 4.691406 L 32.074219 20 L 17.925781 20 L 12.953125 4.691406 C 12.820313 4.289063 12.449219 4.011719 12.023438 4 C 11.597656 3.992188 11.214844 4.25 11.0625 4.648438 L 5.070313 20.640625 C 5.066406 20.640625 5.066406 20.644531 5.0625 20.648438 L 2.0625 28.648438 C 1.90625 29.070313 2.046875 29.542969 2.414063 29.808594 L 24.40625 45.800781 L 24.410156 45.808594 C 24.414063 45.808594 24.414063 45.808594 24.414063 45.8125 C 24.425781 45.820313 24.441406 45.828125 24.453125 45.835938 C 24.46875 45.84375 24.480469 45.855469 24.496094 45.863281 C 24.5 45.863281 24.5 45.867188 24.503906 45.867188 C 24.503906 45.867188 24.507813 45.871094 24.511719 45.871094 C 24.515625 45.875 24.519531 45.878906 24.527344 45.878906 C 24.53125 45.882813 24.539063 45.886719 24.542969 45.890625 C 24.5625 45.898438 24.585938 45.910156 24.609375 45.917969 C 24.609375 45.917969 24.609375 45.917969 24.609375 45.921875 C 24.632813 45.929688 24.65625 45.9375 24.675781 45.945313 C 24.679688 45.945313 24.679688 45.945313 24.683594 45.949219 C 24.699219 45.953125 24.714844 45.957031 24.734375 45.964844 C 24.742188 45.964844 24.75 45.96875 24.761719 45.96875 C 24.761719 45.972656 24.761719 45.972656 24.761719 45.96875 C 24.78125 45.976563 24.800781 45.980469 24.820313 45.984375 C 24.847656 45.988281 24.871094 45.992188 24.898438 45.996094 C 24.9375 45.996094 24.980469 46 25.019531 46 C 25.058594 45.996094 25.09375 45.996094 25.128906 45.988281 C 25.144531 45.988281 25.15625 45.988281 25.171875 45.984375 C 25.171875 45.984375 25.175781 45.984375 25.179688 45.984375 C 25.1875 45.980469 25.191406 45.980469 25.199219 45.980469 C 25.203125 45.980469 25.207031 45.976563 25.214844 45.976563 C 25.222656 45.972656 25.234375 45.972656 25.242188 45.96875 C 25.257813 45.964844 25.269531 45.960938 25.28125 45.957031 C 25.289063 45.957031 25.292969 45.957031 25.296875 45.953125 C 25.300781 45.953125 25.304688 45.953125 25.308594 45.953125 C 25.324219 45.945313 25.34375 45.9375 25.359375 45.933594 C 25.378906 45.925781 25.394531 45.917969 25.410156 45.910156 C 25.414063 45.910156 25.414063 45.910156 25.417969 45.90625 C 25.421875 45.90625 25.425781 45.90625 25.429688 45.902344 C 25.4375 45.898438 25.445313 45.894531 25.453125 45.890625 C 25.476563 45.878906 25.496094 45.867188 25.515625 45.855469 C 25.523438 45.851563 25.527344 45.847656 25.53125 45.84375 C 25.535156 45.84375 25.539063 45.839844 25.542969 45.839844 C 25.558594 45.828125 25.574219 45.820313 25.589844 45.808594 L 25.597656 45.796875 L 47.589844 29.808594 C 47.953125 29.542969 48.09375 29.070313 47.9375 28.648438 L 44.945313 20.675781 C 44.941406 20.667969 44.9375 20.65625 44.9375 20.648438 L 38.9375 4.648438 C 38.789063 4.261719 38.425781 4.003906 38.011719 4 Z M 8.066406 22 L 16.472656 22 L 22.328125 40.015625 Z M 33.527344 22 L 41.933594 22 L 27.671875 40.015625 Z M 6.3125 23.007813 L 19.6875 39.902344 L 4.203125 28.640625 Z M 43.6875 23.007813 L 45.796875 28.640625 L 30.3125 39.902344 Z',viewBox:'0 0 50 50'},WEIBO:{path:'M 16.28125 3.8125 C 16.054688 3.828125 15.816406 3.859375 15.59375 3.90625 C 15.179688 3.996094 14.910156 4.402344 15 4.8125 C 15.085938 5.226563 15.492188 5.496094 15.90625 5.40625 C 17.179688 5.136719 18.566406 5.53125 19.5 6.5625 C 20.433594 7.597656 20.679688 9.011719 20.28125 10.25 C 20.152344 10.652344 20.378906 11.089844 20.78125 11.21875 C 21.183594 11.347656 21.617188 11.121094 21.75 10.71875 C 22.3125 8.976563 21.96875 7.015625 20.65625 5.5625 C 19.671875 4.46875 18.296875 3.875 16.9375 3.8125 C 16.710938 3.800781 16.507813 3.796875 16.28125 3.8125 Z M 10.0625 6.09375 C 8.667969 6.242188 6.699219 7.332031 4.96875 9.0625 C 3.082031 10.949219 2 12.957031 2 14.6875 C 2 17.996094 6.226563 20 10.375 20 C 15.8125 20 19.4375 16.820313 19.4375 14.3125 C 19.4375 12.796875 18.179688 11.949219 17.03125 11.59375 C 16.75 11.507813 16.539063 11.464844 16.6875 11.09375 C 17.007813 10.289063 17.066406 9.589844 16.71875 9.09375 C 16.070313 8.164063 14.253906 8.210938 12.21875 9.0625 C 12.21875 9.0625 11.585938 9.351563 11.75 8.84375 C 12.0625 7.835938 12.019531 6.988281 11.53125 6.5 C 11.1875 6.152344 10.695313 6.027344 10.0625 6.09375 Z M 16.8125 6.5 C 16.589844 6.488281 16.375 6.515625 16.15625 6.5625 C 15.800781 6.636719 15.578125 7.019531 15.65625 7.375 C 15.734375 7.730469 16.082031 7.953125 16.4375 7.875 C 16.863281 7.785156 17.34375 7.902344 17.65625 8.25 C 17.96875 8.597656 18.042969 9.054688 17.90625 9.46875 C 17.792969 9.816406 17.964844 10.199219 18.3125 10.3125 C 18.660156 10.421875 19.046875 10.253906 19.15625 9.90625 C 19.429688 9.058594 19.265625 8.085938 18.625 7.375 C 18.144531 6.84375 17.476563 6.53125 16.8125 6.5 Z M 10.8125 10.90625 C 13.582031 11.003906 15.8125 12.378906 16 14.28125 C 16.214844 16.457031 13.71875 18.484375 10.40625 18.8125 C 7.09375 19.140625 4.214844 17.640625 4 15.46875 C 3.785156 13.292969 6.316406 11.265625 9.625 10.9375 C 10.039063 10.898438 10.417969 10.890625 10.8125 10.90625 Z M 8.9375 13 C 7.804688 13.101563 6.734375 13.75 6.25 14.6875 C 5.589844 15.964844 6.242188 17.378906 7.75 17.84375 C 9.308594 18.324219 11.140625 17.597656 11.78125 16.21875 C 12.410156 14.871094 11.605469 13.472656 10.0625 13.09375 C 9.691406 13 9.316406 12.964844 8.9375 13 Z M 8.21875 15.0625 C 8.351563 15.066406 8.472656 15.109375 8.59375 15.15625 C 9.082031 15.355469 9.234375 15.878906 8.9375 16.34375 C 8.632813 16.804688 7.988281 17.027344 7.5 16.8125 C 7.019531 16.601563 6.882813 16.074219 7.1875 15.625 C 7.414063 15.289063 7.824219 15.058594 8.21875 15.0625 Z',viewBox:'2 2 19 19'},CODEPEN:{path:'M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z',viewBox:'0 0 24 24'},YOUTUBE:{path:'M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z',viewBox:'0 0 24 24'},SOUNDCLOUD:{path:'M 14.5 6 C 12.601563 6 11 6.90625 10 8.40625 L 10 17 L 20.5 17 C 22.398438 17 24 15.398438 24 13.5 C 24 11.601563 22.398438 10 20.5 10 C 20.300781 10 20.011719 9.992188 19.8125 10.09375 C 19.210938 7.695313 17 6 14.5 6 Z M 8 8 L 8 17 L 9 17 L 9 8.09375 C 8.699219 7.992188 8.300781 8 8 8 Z M 7 8.09375 C 6.601563 8.195313 6.300781 8.398438 6 8.5 L 6 17 L 7 17 Z M 5 9.40625 C 4.5 9.90625 4.195313 10.488281 4.09375 11.1875 L 4 11.1875 L 4 17 L 5 17 Z M 3 11 C 2.601563 11 2.300781 11.085938 2 11.1875 L 2 16.8125 C 2.300781 16.914063 2.601563 17 3 17 Z M 1 11.8125 C 0.398438 12.3125 0 13.101563 0 14 C 0 14.898438 0.398438 15.6875 1 16.1875 Z',viewBox:'0 0 24 24'}};/* harmony default export */ __webpack_exports__["default"] = (ICONS);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: ICONS, PAGINATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/constants/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ "./src/constants/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGINATION", function() { return _pagination__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/***/ }),

/***/ "./src/constants/pagination.js":
/*!*************************************!*\
  !*** ./src/constants/pagination.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PAGINATION={PREV_PAGE:'← PREV',NEXT_PAGE:'→ NEXT'};/* harmony default export */ __webpack_exports__["default"] = (PAGINATION);

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useSiteMetadata, useCategoriesList, useTagsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_site_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSiteMetadata", function() { return _use_site_metadata__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_categories_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-categories-list */ "./src/hooks/use-categories-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCategoriesList", function() { return _use_categories_list__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_tags_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-tags-list */ "./src/hooks/use-tags-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTagsList", function() { return _use_tags_list__WEBPACK_IMPORTED_MODULE_2__["default"]; });



/***/ }),

/***/ "./src/hooks/use-categories-list.js":
/*!******************************************!*\
  !*** ./src/hooks/use-categories-list.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3964968768_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3964968768.json */ "./public/static/d/3964968768.json");
var _public_static_d_3964968768_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3964968768.json */ "./public/static/d/3964968768.json", 1);
const useCategoriesList=()=>{const{allMarkdownRemark}=_public_static_d_3964968768_json__WEBPACK_IMPORTED_MODULE_0__.data;return allMarkdownRemark.group;};/* harmony default export */ __webpack_exports__["default"] = (useCategoriesList);

/***/ }),

/***/ "./src/hooks/use-site-metadata.js":
/*!****************************************!*\
  !*** ./src/hooks/use-site-metadata.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_67971855_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/67971855.json */ "./public/static/d/67971855.json");
var _public_static_d_67971855_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/67971855.json */ "./public/static/d/67971855.json", 1);
const useSiteMetadata=()=>{const{site}=_public_static_d_67971855_json__WEBPACK_IMPORTED_MODULE_0__.data;return site.siteMetadata;};/* harmony default export */ __webpack_exports__["default"] = (useSiteMetadata);

/***/ }),

/***/ "./src/hooks/use-tags-list.js":
/*!************************************!*\
  !*** ./src/hooks/use-tags-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4175916191_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/4175916191.json */ "./public/static/d/4175916191.json");
var _public_static_d_4175916191_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/4175916191.json */ "./public/static/d/4175916191.json", 1);
const useTagsList=()=>{const{allMarkdownRemark}=_public_static_d_4175916191_json__WEBPACK_IMPORTED_MODULE_0__.data;return allMarkdownRemark.group;};/* harmony default export */ __webpack_exports__["default"] = (useTagsList);

/***/ }),

/***/ "./src/templates/categories-list-template.js":
/*!***************************************************!*\
  !*** ./src/templates/categories-list-template.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/kebabCase */ "lodash/kebabCase");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const CategoriesListTemplate=()=>{const{title,subtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();const categories=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useCategoriesList"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],{title:`Categories - ${title}`,description:subtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"],{title:"Categories"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,categories.map(category=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:category.fieldValue},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:`/category/${lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(category.fieldValue)}/`},category.fieldValue," (",category.totalCount,")"))))));};/* harmony default export */ __webpack_exports__["default"] = (CategoriesListTemplate);

/***/ }),

/***/ "./src/templates/category-template.js":
/*!********************************************!*\
  !*** ./src/templates/category-template.js ***!
  \********************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ "./src/components/Feed/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const CategoryTemplate=({data,pageContext})=>{const{title:siteTitle,subtitle:siteSubtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();const{category,currentPage,prevPagePath,nextPagePath,hasPrevPage,hasNextPage}=pageContext;const{edges}=data.allMarkdownRemark;const pageTitle=currentPage>0?`${category} - Page ${currentPage} - ${siteTitle}`:`${category} - ${siteTitle}`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{title:pageTitle,description:siteSubtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_4__["default"],{title:category},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feed__WEBPACK_IMPORTED_MODULE_3__["default"],{edges:edges}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"],{prevPagePath:prevPagePath,nextPagePath:nextPagePath,hasPrevPage:hasPrevPage,hasNextPage:hasNextPage})));};const query="3631851500";/* harmony default export */ __webpack_exports__["default"] = (CategoryTemplate);

/***/ }),

/***/ "./src/templates/index-template.js":
/*!*****************************************!*\
  !*** ./src/templates/index-template.js ***!
  \*****************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ "./src/components/Feed/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const IndexTemplate=({data,pageContext})=>{const{title:siteTitle,subtitle:siteSubtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();const{currentPage,hasNextPage,hasPrevPage,prevPagePath,nextPagePath}=pageContext;const{edges}=data.allMarkdownRemark;const pageTitle=currentPage>0?`Posts - Page ${currentPage} - ${siteTitle}`:siteTitle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{title:pageTitle,description:siteSubtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],{isIndex:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_4__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feed__WEBPACK_IMPORTED_MODULE_3__["default"],{edges:edges}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"],{prevPagePath:prevPagePath,nextPagePath:nextPagePath,hasPrevPage:hasPrevPage,hasNextPage:hasNextPage})));};const query="167617260";/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/templates/not-found-template.js":
/*!*********************************************!*\
  !*** ./src/templates/not-found-template.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const NotFoundTemplate=()=>{const{title,subtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSiteMetadata"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],{title:`Not Found - ${title}`,description:subtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"],{title:"NOT FOUND"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")));};/* harmony default export */ __webpack_exports__["default"] = (NotFoundTemplate);

/***/ }),

/***/ "./src/templates/page-template.js":
/*!****************************************!*\
  !*** ./src/templates/page-template.js ***!
  \****************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const PageTemplate=({data})=>{const{title:siteTitle,subtitle:siteSubtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSiteMetadata"])();const{html:pageBody}=data.markdownRemark;const{frontmatter}=data.markdownRemark;const{title:pageTitle,description:pageDescription,socialImage}=frontmatter;const metaDescription=pageDescription!==null?pageDescription:siteSubtitle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{title:`${pageTitle} - ${siteTitle}`,description:metaDescription,socialImage:socialImage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"],{title:pageTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:pageBody}})));};const query="3804606493";/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

/***/ }),

/***/ "./src/templates/post-template.js":
/*!****************************************!*\
  !*** ./src/templates/post-template.js ***!
  \****************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ "./src/components/Post/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const PostTemplate=({data})=>{const{title:siteTitle,subtitle:siteSubtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSiteMetadata"])();const{frontmatter}=data.markdownRemark;const{title:postTitle,description:postDescription,socialImage}=frontmatter;const metaDescription=postDescription!==null?postDescription:siteSubtitle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{title:`${postTitle} - ${siteTitle}`,description:metaDescription,socialImage:socialImage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_2__["default"],{post:data.markdownRemark}));};const query="1228609577";/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ }),

/***/ "./src/templates/tag-template.js":
/*!***************************************!*\
  !*** ./src/templates/tag-template.js ***!
  \***************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ "./src/components/Feed/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const TagTemplate=({data,pageContext})=>{const{title:siteTitle,subtitle:siteSubtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();const{tag,currentPage,prevPagePath,nextPagePath,hasPrevPage,hasNextPage}=pageContext;const{edges}=data.allMarkdownRemark;const pageTitle=currentPage>0?`All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`:`All Posts tagged as "${tag}" - ${siteTitle}`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{title:pageTitle,description:siteSubtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_4__["default"],{title:tag},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feed__WEBPACK_IMPORTED_MODULE_3__["default"],{edges:edges}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"],{prevPagePath:prevPagePath,nextPagePath:nextPagePath,hasPrevPage:hasPrevPage,hasNextPage:hasNextPage})));};const query="2403895038";/* harmony default export */ __webpack_exports__["default"] = (TagTemplate);

/***/ }),

/***/ "./src/templates/tags-list-template.js":
/*!*********************************************!*\
  !*** ./src/templates/tags-list-template.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/kebabCase */ "lodash/kebabCase");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
const TagsListTemplate=()=>{const{title,subtitle}=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSiteMetadata"])();const tags=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useTagsList"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],{title:`Tags - ${title}`,description:subtitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"],{title:"Tags"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,tags.map(tag=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:tag.fieldValue},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:`/tag/${lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(tag.fieldValue)}/`},tag.fieldValue," (",tag.totalCount,")"))))));};/* harmony default export */ __webpack_exports__["default"] = (TagsListTemplate);

/***/ }),

/***/ "./src/utils/get-contact-href.js":
/*!***************************************!*\
  !*** ./src/utils/get-contact-href.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getContactHref=(name,contact)=>{let href;switch(name){case'twitter':href=`https://www.twitter.com/${contact}`;break;case'github':href=`https://github.com/${contact}`;break;case'vkontakte':href=`https://vk.com/${contact}`;break;case'telegram':href=`https://t.me/${contact}`;break;case'email':href=`mailto:${contact}`;break;case'linkedin':href=`https://www.linkedin.com/in/${contact}`;break;case'instagram':href=`https://www.instagram.com/${contact}`;break;case'line':href=`line://ti/p/${contact}`;break;case'facebook':href=`https://www.facebook.com/${contact}`;break;case'gitlab':href=`https://www.gitlab.com/${contact}`;break;case'weibo':href=`https://www.weibo.com/${contact}`;break;case'codepen':href=`https://www.codepen.io/${contact}`;break;case'youtube':href=`https://www.youtube.com/channel/${contact}`;break;case'soundcloud':href=`https://soundcloud.com/${contact}`;break;default:href=contact;break;}return href;};/* harmony default export */ __webpack_exports__["default"] = (getContactHref);

/***/ }),

/***/ "./src/utils/get-icon.js":
/*!*******************************!*\
  !*** ./src/utils/get-icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
const getIcon=name=>{let icon;switch(name){case'twitter':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].TWITTER;break;case'github':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].GITHUB;break;case'vkontakte':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].VKONTAKTE;break;case'telegram':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].TELEGRAM;break;case'email':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].EMAIL;break;case'rss':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].RSS;break;case'linkedin':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].LINKEDIN;break;case'instagram':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].INSTAGRAM;break;case'line':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].LINE;break;case'facebook':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].FACEBOOK;break;case'gitlab':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].GITLAB;break;case'weibo':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].WEIBO;break;case'codepen':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].CODEPEN;break;case'youtube':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].YOUTUBE;break;case'soundcloud':icon=_constants__WEBPACK_IMPORTED_MODULE_0__["ICONS"].SOUNDCLOUD;break;default:icon={};break;}return icon;};/* harmony default export */ __webpack_exports__["default"] = (getIcon);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getIcon, getContactHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-icon */ "./src/utils/get-icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _get_icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_contact_href__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-contact-href */ "./src/utils/get-contact-href.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContactHref", function() { return _get_contact_href__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_AMS-Regular.ttf":
/*!******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_AMS-Regular.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_AMS-Regular-aaf4eee9fba9907d61c3935e0b6a54ae.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_AMS-Regular.woff":
/*!*******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_AMS-Regular.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_AMS-Regular-7f06b4e30317f784d61d26686aed0ab2.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_AMS-Regular.woff2":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_AMS-Regular.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_AMS-Regular-e78e28b4834954df047e4925e9dbf354.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.ttf":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Bold.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Bold-021dd4dc61ee5f5cdf315f43b48c094b.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Bold-1e802ca9dedc4ed4e3c6f645e4316128.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff2":
/*!*************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Bold.woff2 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Bold-4ec58befa687e9752c3c91cd9bcf1bcb.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.ttf":
/*!**************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Regular.ttf ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Regular-d49f2d55ce4f40f982d8ba63d746fbf9.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff":
/*!***************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Regular-d3b46c3a530116933081d9d74e3e9fe8.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff2":
/*!****************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Caligraphic-Regular.woff2 ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Caligraphic-Regular-7edb53b6693d75b8a2232481eea1a52c.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.ttf":
/*!*******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Bold.ttf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Bold-a31e7cba7b7221ebf1a2ae545fb306b2.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Bold-c4c8cab7d5be97b2bb283e531c077355.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff2":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Bold.woff2 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Bold-d5b59ec9764e10f4a82369ae29f3ac58.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.ttf":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Regular.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Regular-a48dad4f58c82e38a10da0ceebb86370.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Regular-b7d9c46bff5d51da6209e355cc4a235d.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff2":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Fraktur-Regular.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Fraktur-Regular-32a5339eb809f381a7357ba56f82aab3.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Bold.ttf":
/*!****************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Bold.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Bold-9ceff51b3cb7ce6eb4e8efa8163a1472.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Bold.woff":
/*!*****************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Bold.woff ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Bold-22086eb5d97009c3e99bcc1d16ce6865.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Bold.woff2":
/*!******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Bold.woff2 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Bold-8e1e01c4b1207c0a383d9a2b4f86e637.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.ttf":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-BoldItalic.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-BoldItalic-e8b44b990516dab7937bf240fde8b46a.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-BoldItalic-4c57dbc44bfff1fdf08a59cf556fdab3.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff2":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-BoldItalic.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-BoldItalic-284a17fe5baf72ff8217d4c7e70c0f82.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Italic.ttf":
/*!******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Italic.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Italic-29c86397e75cdcb3135af8295f1c2e28.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Italic.woff":
/*!*******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Italic.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Italic-99be0e10c38cd42466e6fe1665ef9536.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Italic.woff2":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Italic.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Italic-e533d5a2506cf053cd671b335ec04dde.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Regular.ttf":
/*!*******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Regular.ttf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Regular-5c94aef490324b0925dbe5f643e8fd04.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Regular.woff":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Regular.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Regular-b741441f6d71014d0453ca3ebc884dd4.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Main-Regular.woff2":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Main-Regular.woff2 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Main-Regular-5c734d78610fa35282f3379f866707f2.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.ttf":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-BoldItalic.ttf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-BoldItalic-9a2834a9ff8ab411153571e0e55ac693.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-BoldItalic-b13731ef4e2bfc3d8d859271e39550fc.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff2":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-BoldItalic.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-BoldItalic-d747bd1e7a6a43864285edd73dcde253.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-Italic.ttf":
/*!******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-Italic.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-Italic-291e76b8871b84560701bd29f9d1dcc7.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-Italic.woff":
/*!*******************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-Italic.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-Italic-f0303906c2a67ac63bf1e8ccd638a89e.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Math-Italic.woff2":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Math-Italic.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Math-Italic-4ad08b826b8065e1eab85324d726538c.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.ttf":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Bold.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Bold-7dc027cba9f7b11ec92af4a311372a85.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Bold-3fb419559955e3ce75619f1a5e8c6c84.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff2":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Bold.woff2 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Bold-6e0830bee40435e72165345e0682fbfc.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.ttf":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Italic.ttf ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Italic-4059868e460d2d2e6be18e180d20c43d.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Italic-727a9b0d97d72d2fc0228fe4e07fb4d8.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff2":
/*!*************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Italic.woff2 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Italic-fba01c9c6fb2866a0f95bcacb2c187a5.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.ttf":
/*!************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Regular.ttf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Regular-5c58d168c0b66d2c32234a6718e74dfb.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff":
/*!*************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Regular-2555754a67062cac3a0913b715ab982f.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff2":
/*!**************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_SansSerif-Regular.woff2 ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_SansSerif-Regular-d929cd671b19f0cfea55b6200fb47461.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Script-Regular.ttf":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Script-Regular.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Script-Regular-d12ea9efb375f9dc331f562e69892638.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Script-Regular.woff":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Script-Regular.woff ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Script-Regular-d524c9a5b62a17f98f4a97af37fea735.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Script-Regular.woff2":
/*!***********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Script-Regular.woff2 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Script-Regular-755e2491f13b5269f0afd5a56f7aa692.woff2";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size1-Regular.ttf":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size1-Regular.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Size1-Regular-7342d45b052c3a2abc21049959fbab7f.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size1-Regular.woff":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size1-Regular.woff ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size1-Regular.woff2":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size1-Regular.woff2 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size2-Regular.ttf":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size2-Regular.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Size2-Regular-eb130dcc661de766c999c60ba1525a88.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size2-Regular.woff":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size2-Regular.woff ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size2-Regular.woff2":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size2-Regular.woff2 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size3-Regular.ttf":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size3-Regular.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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ZQBYAF8AUwBpAHoAZQAzAC0AUgBlAGcAdQBsAGEAcgBWAGUAcgBzAGkAbwBuACAAMAAuADAALgA0AEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMAA5AC0AMgAwADEAMAAsACAARABlAHMAaQBnAG4AIABTAGMAaQBlAG4AYwBlACwAIABJAG4AYwAuACAAKAA8AHcAdwB3AC4AbQBhAHQAaABqAGEAeAAuAG8AcgBnAD4AKQAKAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA0AC0AMgAwADEAOAAgAEsAaABhAG4AIABBAGMAYQBkAGUAbQB5ACAAKAA8AHcAdwB3AC4AawBoAGEAbgBhAGMAYQBkAGUAbQB5AC4AbwByAGcAPgApACwACgB3AGkAdABoACAAUgBlAHMAZQByAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAIABLAGEAVABlAFgAXwBTAGkAegBlADMALgAKAAoAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAKAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAYQB2AGEAaQBsAGEAYgBsAGUAIAB3AGkAdABoACAAYQAgAEYAQQBRACAAYQB0ADoACgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAAACAAAAAAAA/4MAMgAAAAAAAAAAAAAAAAAAAAAAAAAAABsAAAABAAIAAwALAAwAEgA+AD8AQABeAGABAgDYANkBAwEEAKUBBQEGAQcBCAEJAQoBCwEMAQ0HdW5pMDBBMAd1bmkwMzAyCXRpbGRlY29tYgd1bmkyMzA4B3VuaTIzMDkHdW5pMjMwQQd1bmkyMzBCB3VuaTI3RTgHdW5pMjdFOQd1bmlFRkZEB3VuaUVGRkUHdW5pRUZGRgAAAAEAAf//AA8="

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size3-Regular.woff":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size3-Regular.woff ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size3-Regular.woff2":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size3-Regular.woff2 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size4-Regular.ttf":
/*!********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size4-Regular.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Size4-Regular-ad7672524b64b730dfd176140a8945cb.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size4-Regular.woff":
/*!*********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size4-Regular.woff ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAABgoAA4AAAAAKwgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAANiAAAAE4AAABgRuZdBmNtYXAAAA3YAAAAugAAAcoB+528Y3Z0IAAAFIgAAAAKAAAADAAAAABmcGdtAAAOlAAABYwAAAuX1RTb8Gdhc3AAABggAAAACAAAAAgAAAAQZ2x5ZgAAAUQAAArKAAARUELbjX5oZWFkAAAMoAAAADYAAAA2EIN07WhoZWEAAA1oAAAAHwAAACQHMgKeaG10eAAADNgAAACPAAAA2JZiEF1sb2NhAAAMMAAAAG4AAABueip1+m1heHAAAAwQAAAAHwAAACAAygwAbmFtZQAAFJQAAALAAAAG507M7Lhwb3N0AAAXVAAAAMoAAAHIC8Bi1nByZXAAABQgAAAAaAAAAH/i0Eg6eNqtWAV4G9fS3Zm7e1crraQFyUySbCu1QxaGoRhDmL7Gf5lCZW6dr244KTMzM7eBnx5zmZmZG7a1eXN3peDj9/Zq0aNzZs7Mzr2WhFJKkqTfYlRikir5nuIySDi0NW2mzWTaTKSuPjqVwmjhqxQ8JoH0TV89buKvStUSfyKEMLRViqiJeLI5KZkG5PK5dLosonKGpmFb5WRpWMCTzkR4otJG0+ShNUeceuoRa/paOQc2GL5h/8PWw7d1NnBuf+r8xlldeKPwurPa+c2nxBUjrhbiqhVcQFx2Jp1OlZeVSwZwNcETiXg2k8/ZlmkwTDbHbF+QyOAJZ2KSc1XhpnnvIUuXHnKvyf+kEZtjb1npWIMZ+Fn0BSiHldiB7bASyl+ISsQ2rK9e/hWxRYgtINgglyqLRniUSypPxJuzmVw2J8kX+6tsgL6HUTN0C0Cexn+vmzrIoG5YIutWQFwFFkkAQfJ+POGphAeSwDNj0YSZjkIQMl991VcfeKZ9w1vtuzBHyTKIbpw5EadUHhEOCHmlZCY5zNRtFeVpAJZuaNj3MABfo1u6vGGJSqwBugosUgEJUemrh+FFbuYql42ZsWzaVCDj/PErflH7hvb2QBNZXkpeXkWWs8hyqBu1mqBs0jCZODYnB8uZ7CjMZcZgPkcJzudtg47uVbo8GqVsc5WGaYijWlbuDtMQRzGiUcKPWT0HtlFoyHx293jkwOgSZRzfbfsYAqpGy4LYkLIY97dNr6jjAIE5nZNHDqionxMA8HdUxcqr/H1NXBs9t+O/dLgYLjPqaib2thACU7giKwpDRBlaeifW1JlwGVykt+1zwuTKygA3dU2unpMZO0FzepxFWu+CKcnGukh8Qa93f1Z3rCoSkjVd2kWLaaTF4GIeRmIpENOig/ikymqQxylY8WEibDFUr0Q8acySRM1FLQ1Skj6XMi1gRAY2nx/jDAGU0JETUAVE4GzCkSEFABmvPDjfGQlbnPF0spvC12ZHk9khbelkdLYGoM6frCL/P0P1l9UevipSpTunOg921M6+ahAqqmKQGjjoqtm1Hc5Dzil6VWTBzFyzn5tBVa4deNQyDZbAUu3ceVXx1vKK1njVvHM1WApLtKNuGSJzUmD7j9imnsAmShWkgN+thsZ0Si5PiSwn4k1NiiyKUbx08By8rCN7VOUy19BpdQbR3gKaygDwg4WvMj+WxQ45/PBD6iPkEpC6iAeph7C8NIywa11st8jFSKfyuaZcWqhLTF5FCSJXtERc5QpPiMt8xi1BPKyxfMLgjvm9U5v3aR66FsrHy6CACgnjmQPfumpUqmNu56xUY8uAgWudT8fJKENAbjTWHngDy6Kmt6Y1WbZnRsi+vk4BzdZy5jB6XFvJS89HaH6LnraQIlsuwzYp+A8psu2EHYoo/r+piK26imy5DQ/a3v8fUWSb01h+0JC/psjotn9UkYbav6uIdGJfHeunt6RG9EkmvJby5HdZecTtk9lMElmGq2oyny+zLXgDCqAE1QAUXmIsqhtdSxoMo6prIsw9pn+0/wIW8KvqhoVMQ5wDa3ALjmuIVV13DRTuKtwjFbvo2cSm7NpFYyYEYaHzjtdDL5eKHe9kYbdrx0uYCixsd7td4IS/gpYmPAi2Q0KAbbi8fS+sklUWBrQ7V/bNDZxAvZOwEoWTWae82J0Jgy6WSBUi49FIMVvN2VzecmdFdgD3/+EXYdHzWvdDBVh0CixXfWDJizmTQ857BcPhN8YadABAK/3da6wC3tB8IHi2b4Lb8EipknjCSDxKnMe9WshmjbzQPlVG+kfNCNwEVnUwxxggyLh/IBoEGTQAYP5zHoLBTAaIH+vcvdL1voe8v0h476FCaR5nzUy0MVGJFFC5ZZWXsU5u2uBTnSsPbZAFcivFYdb/8kF/YRnj4NNgHT6/EYalLQQAvWHDi87cwuoNIdKyvnAyHkQq1Qqe3eZwu8zeoZMoGhQR1ZuBEBHBQkGk4H4uUc09l9U3MPnMADE5BxbaNju/KzH99DKchhO+yrQqEsDvtm/Cg/4xpXC/f1QpiqCHIvCUCkkiAqpx0dwtOycuPKG4ikDRDKvkDfWX3VNjKjgs7+XZOYfyXOjRmL818xW2w2kvbGxhxSz3f+4kvSyPLZyL15NOe9b5WOh2thbOVdUZWydKwo4OV+AciZXsYmaarGbgnMLdkovTQzhL9qxwsgC10KOqWyfOoJikwrnQLdhKFW66bwt0z5AHz9iylT9BSCrBde/FpJaYCKOHMJbs+ZaQhXNX4Xn+xJatxAS9lJNn2RIpQVZR159y0TpFQxOnSJQG3RSzlPHWFfhbTmJOPMYAGQCMlgyKPOlXpfYPsiWiFLmcvecYYDWXyoHhTT+ijCJxH3yjrb90SLNKvt1fWAhb5JVShlhrdu2sHrdaWqaI1VWCF7mTSMfmTLGlki+wDMft41IHDh87J8R9iw/IqQAy4Fz3qbFGB9APniuerXBr550vtJvOmz5Mk5UpS44+Sfvi0ZHu47e/1EFdpSHEAbX9nj1P//IjJrTpX4TPSn733QjutvYqVqvwkPair/gsTwRu7GrlRMcyLQbQ5jPaFqkc+pdwPuP6WYf410AtykCC/LBRHz/0mlkyB9vLAmyBnLfC3F0PrpYEKAUsgxejewFZ2v3hZWcMAO/iOhT6CjzKasOOt5oW/rtKmogLRDcWD/sRNM3A8smjPf12954tBt7ee9Jc7ZsnRgnff9xQ8t2yJeF9YSE+K7K55zwp2pOQqDRDety7lVLJAcMLbq+8iTj3zvCKUtqcrbul7ZGRfyHN/qegAiWhSv8i2EL5bCyp0rRH1ZEqnl85KjLaszRyO/1SR09aETBsUfuTjgkL3zQoFvaJc89v59w2ReXfezRg7cU8MKLpB1nMx/0X4KfsHqmKWMsVoU5ITlAdMaY2J2kStmzbtIUj+ClwJD/0msrXXp7J1eDEiUed9Sb4Nd3Xfx1wZDhjEq7CJfcrvuANNzqvOFcXFuCP+GMwTCwX9jXg//FX3XWQ7SOWfNa2KIaUWKREo5Qp1ftPhV24aTP6qIljKOJU/LQJbCOi4+YfLXwX32NBGeiBtm1aIVlo0QzbZPgeoR9H6NcRehmhB7weSy07J+WBBBIa2naUocpXG/ZUOGCaU2GHI0HcvImo9L4GAvyJ/e4n5WHNiFisECvELTrEmCkB/i+taT/FkyWNkBWBLMeTnhwmvlelutGHQpCCVDBcuFnyviFn8BApQN/Q0K22fIxKLGZSZeH/yjrMDoedn6lVKk7UZToV/hAKSbD98+2t8EfpLHee0ASTmsy6NZhyI3DXi26V0iFhcV9X77GLmCWbCICGpZ2+brgVkNXwKzwRWtY+RgNOlclBnT6hLMKR8DcR/puEL2Y3XSb8ZDaT9gqsPCpKy6t0kQO/IgeWn9Hb5eNmWJXrh83sGTPCQBhVV4MT2peFEhz5sNYDKoIchd8U9B9houu3DYTL8m7n8cYO1130ZIWLGDQqY0VMwPDsw4ZWEBccRLDlVqxSAAvfG6NhIhOeE8ObxCBWjL7iHCBk8GDdKVQIJQYFBC8LbSqGHjY77EnjX3N6rNIIyogWTHTVCUcbPXUCh1bGrHIKo8hyPemzY75KZGNRP9x51lmShBJtMFA6uvgbh+L9xtGWTUfTtB/tbf+4HUhiO5pGic21EX/7M1+qRNkAAHjaY2BkYGAwYwhnYGIAAjApwFAOJKW4p4MEABiYAdYAAAAAFgAWABYAFgBMAIMAqwDAAOkA/gGEAgUCBQIzAo4CvAMXA04DYgN1A4gDmwPPA/oELgRkBI8EwgTWBOYE+QULBRsFLgVpBbwF8QYZBlAGpAbfBxIHQQduB4cHowfTB/8IMAhjCHIIhgiaCKgAAAABAAAAAQAAdWBqS18PPPUACwPoAAAAANiymQoAAAAA2LKZCviR+x4HbgbWAAAACAACAAAAAAAAeNpFxiEMglAUQNH7/oOR6DZxbiSTyWY02TObm8FAJmGfAbPJas8Gm713isXgHEF8f0x/OLuXjjmArIEOdMTDTKIPC7eSdCix5jQeHSRF/0wKHLyP5qwtpasldTXxr7qTacDYevd1J1kGYE18tZK9VlyGhveNMkrNOZhtlLmrJ7e+Na9/GzMDjw18AXIuNDMAeNpjYGRgYLv2W44hij3xx8T/L9jzgCKowAwApaQG1QB42mNgYmZlnMDAysDA1MW0h4GBoQdCMz5gMGRkYkACDQwM7wUY3ryF8QPSXFMYHBgU3v9nVvhvwRDFdo3lkQIDQ38cM1yLAgMjAPoPEIIAAHjaY2BgYIZiGQZGBhA4AuQxgvksDCuAtBqDApDFBiQ1GfQZYhmqGWoZFjAdY7rDzKwkpcytvFZ5u/rLB4wPQ97///+fgQGoTgOoLhpJHRNQHYfybKC6Fw8YHga8/wtU+Pj/nf/X/6/53/+/73/OX/e/Rn95736/y3Wn+k7RDScFHbl7AmZAVxAJGNmAGMZmAhJM6ApAXoQAFlYwxcZAPGDn4MQrz8XAzUANIAiheEjQwssHYwEASs00MAAAeNqsVeWa48gOLYeaYRh8QZ6a9O2blD3MbMfJ8DR+n2vRbvq9vPsMfho5y//20fbISXP3ckNUpVJJR0dShZUhVqtJbIle/aSmF19xY/m9hG+6PG/TLcpXE640s59H1ahaX9drruexsqwi3ekrR0Vp6LNjmNItnyuGNoh/WeDa3Hv9eWc8itfjpfcTT3tunhAvLCQeP7Uu8V1Z3bWWioFRtsHzUA13xFfl/Cos4SwhgMgz4vGFJIWG5GxcVrdldTt1U2uty07bWs1qIdm01ueqIfipNTMAqkcLCdd1yA0dAr5lJ/W5ZjRw0UZRXwtJTgbB5ZNVGq9zteVBH1FOOXwXV+tNpLWYpAtutmQTbXH6dDnBkYuktiP7XDc8ErX7qjKgpoGtDjWx0mHGlbUtdtYRn+stn0cMCciJaP2nmloj8cBPUysmaacEOWr6IxMqisOWt0P2mNlP/njpBTg09Mg4pTjXGW0MmVKusMnkAuQ2Sq42ddYZhJg45jpfxi2FW0ddmjRlQv2J8WqceK72bMvzecoUlUrMG1nH52kDQyKejF7KdSx0aHlKdkvYTWHn8wzczJaUEBhYR1yejlLKU+JpkObzrHm1khS1jY69zFOb+hufT5hXi8mr5YHS9aA/VepPmkLNRKtJMTMTsZOFPNOWJkXrhsWkfEzhg52zmpDHQlIIecg2zHMqw7Y8jWvba3dwjiv4LzUWmfSAvwft/lIdU8BCqVMabEWsHvcdxylrdcqoQlXilYRndEgxT+iQx8FvGlKK8N/PzjpqWoVhnhYnG23+su1eAk2nkdupts9nTOGIPAueRZ4zRVXkeVPURF4wRV3kRVM0RLqmGBH5L1OMivy3KcZE/t9QwM6HPrfKxac+t8vFZz7/xyieav8FjP8Fxv/ANwGjSA8YRV4CRpEaGEVeBkaRTWAUOQeMIv8HjCLngVGkMfSwbDXfIOxsSpHGNpJyQLKRfgsM+232MUlXDFGPjqmEzu5qecZ+0wKt5PPVnfI4Z/lKq6g7Z+Lkqi0TvFYyc+zxdUO3Srw3YOfEh4NgwhD8aL06+52Sn85jfbe47pxBRjeRP/WOwcsqyu76fMsE5x76fPv3TNmJ1mF+ByVRZ5sUUI+Vls5+kec93dMZJWvInx1M9G3HOXMa8e8aoMKA4K804bGovZkHmuhhDl/3do8pGPjgmg7FijiVeX+6mHxboSq531bmqhdtKG/gaES5Lq11F9OHah5AS2Bj8NhXonRDczXKNhYSbDIX61TeoIN3Mk0IPae7qKFGhC7ygiijpHRUEC1RNE5SSK6joeqHvMKjZNQsQeBzYfDK7cZCye8LBwRNfW7IgX4Iah6IGrnqEGdd3ZNgUq2Hoi8TGDKqVpKAHmrPhWZbCWe7lDea2L3Y++07KNRRHTysjJY2fjREEG2XJpWv54MpbpfysdEUCGtdPMwPbVAEzmkM4JMd9cJe9dP91kfaPDN8t32k09DwvXaOwNIsQHvYBmUJOIBptNNhYHenBTVaPdB3h+46eDTwhv+FVuz9U90n8LO7gKXxhOypt2eHGGMhYzv/ruTv6SEB+u7+lHtI+cxgOPtK5vBUwDcxi8+P0b8whXJOn+JbWL80fAfilbAWg1fq5kDxa4/1gBxBAARQNMY9UkznArG9tjlr+1iDC27/UfF11R/T3+y/cDuaf8qI2PqeUUQVhyAm9uEBiCsOQYLmQ5GkASkakKYBGZoXRZYG5GhAngYUaN4URRpQogFlGlCh+VRUaUCNBtRpQIPmVdGkAS0a0KYBhpi34WnuMJiPqq6rJ1WPM8PwrENfzLuwHjC49RC59Qi56VjM+zCdMLjpFLnpDLnpXMyHMF0wuOkSuekKuelanMuTo+Dn6fXavDDM46v4Lvim3OwBEWxNYHjaY/DewXAiKGIjI2Nf5AbGnRwMHAzJBRsZ2Jw2MjBoQWgOFHonAwMDJzKLmcFlowpjR2DEBoeOiI3MKS4b1UC8XRwNDIwsDh3JIREgJZFAsJGBR2sH4//WDSy9G5mAulhTXACYSCQbeNpjQAIAAAwAAQAAeNpMzLWBQmEQBOD57Q53D7EGIMYhfzkRVgoVoCFuFVAKdZDjg2z0rQ2AiPBA4FUWQAs4YdES/2jSCim0aY0g+rSBG1P672fuFjmsaQ8S4kT7fvL9z3wFoe0A5uJMC0TkkJbwyAOt0JBHWiMrr7RBQmXov5+5W/ZUkfYgb1a07yff/8iv3lqjiiXXYSDYZ3/F3B45CtQyMzPftrTObKyA47IU/Po3UZaZyqB2u0HQTHuZqcSOfkd/qFQoTOZKhWKBVtiaSkLHkeEk4pA2k0gFT8XFkYF4grZjndBipMvc6G3rE764PDZ9HjniSquus7Vm4taaWYWppAo0RQ8UuRvJC9QZZ9Y0Eyqoghp5ZZbhi9Ok3zOdTkc1tIuruqukee7Ph6Z+Y6wJpYfM0BwGHeNiOmLLWZvLNFgQ7ekGP1yKCoKT2Njhz+PmtevojEmIuok4sWJrJWXOyMVMx5s7tJ9yMhTvDAUh3S65qIpKwu69pNva1PVVncnPRNPa4iFpNxXEzqVT+byNMpM6q6ypD6ac31/bef0PltFEih4yGFQQw4HwGxH+yFhCQa5J5DwqykNYAcN6bSJfx4gEs+BI3qEwmx4rBO8mFzFylzwh3LZotE9dRCSoDEZD/NuCTwRf4FL6DPqCR3AEltQW6tDSsCZdCZwfM+HZdyg/4ynQKxm5xykfVJ2B5W1hfCdJh/LPyCf3Mvz4bvqcGXT8pdCAhpP8qoxdqJs1z+HPD+7648bajUo/0jxsDhGI0vh5kd8x6/epDRY93Z0QYQ9a3PzqqShJCoSPhbGPnMeCrgV1xJf5hKGiLmPk983etLUEl30/+Rmxd29iR8Z9pF77MHnnUUIIenbKRSj/+Jm92EvQaMtjhNe4krdwD/ZE+8ZFHHrsMIVAeCdXKjgvl0UknUa+nWAlj2Td7XIe++Lf+YrnPxKAWPF42myKwwECABSG35dt23XL3dIg2fYEzdJOtUw89/hLFPKr11VK8q9qn+WTUopRTOKQhjSlJV3po5C7PFCikhtqNGjRoceAERNmLFixYceBExduPHjx4SdAkBBhIkSJESdBkhRpMmTJaS/bRaHQLvx+uVDSnxfr8WS02wy/yruluDYAIIYBIDZSmLqA7f03ejw1isl3Hrx4/4/Nh4WV7X95Dhw5cebClRt3Hrx482H53+27aefxrt57Dt+heA4cOXH+NhNWthvTfGCxAAAAAQAB//8ADw=="

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Size4-Regular.woff2":
/*!**********************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Size4-Regular.woff2 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.ttf":
/*!*************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Typewriter-Regular.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Typewriter-Regular-257023560753aeb0b89b7e434d3da17f.ttf";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff":
/*!**************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Typewriter-Regular-3fe216d2a5f736c560cde71984554b64.woff";

/***/ }),

/***/ "./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff2":
/*!***************************************************************!*\
  !*** ./static/css/katex/fonts/KaTeX_Typewriter-Regular.woff2 ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/KaTeX_Typewriter-Regular-6cc31ea5c223c88705a13727a71417fa.woff2";

/***/ }),

/***/ "@reach/router":
/*!******************************************************************************************!*\
  !*** external "/Users/caichao/Code/git/gastby-blog/node_modules/@reach/router/index.js" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!*******************************************************************************************************!*\
  !*** external "/Users/caichao/Code/git/gastby-blog/node_modules/core-js/modules/web.dom.iterable.js" ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!************************************************************************************!*\
  !*** external "/Users/caichao/Code/git/gastby-blog/node_modules/lodash/lodash.js" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/kebabCase":
/*!***************************************************************************************!*\
  !*** external "/Users/caichao/Code/git/gastby-blog/node_modules/lodash/kebabCase.js" ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_kebabCase__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map