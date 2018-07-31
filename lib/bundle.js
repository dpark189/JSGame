/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sprite_sheet.js":
/*!********************************!*\
  !*** ./assets/sprite_sheet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SpriteSheet {
  constructor (sheet) {
    this.sheet = sheet;
  }

  crop (x, y, withd, height) {
    return {
    "sheet": this.sheet,
    "x": x,
    "y": y,
    "width": width,
    "height": height};
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SpriteSheet);


/***/ }),

/***/ "./level.js":
/*!******************!*\
  !*** ./level.js ***!
  \******************/
/*! exports provided: level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level", function() { return level; });
const level = { "height":48,
 "layers":[
        {
         "data":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 5, 2, 2, 2, 5, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 5, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 4, 4, 4, 4, 4, 4, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         "height":48,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":64,
         "x":0,
         "y":0
        },
        {
         "height":48,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":32,
                 "name":"player",
                 "properties":
                    {

                    },
                 "type":"player",
                 "visible":true,
                 "width":32,
                 "x":96,
                 "y":480
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "maxdx":"10",
                     "right":"true"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":64,
                 "y":192
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "left":"true",
                     "maxdx":"4"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1120,
                 "y":416
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "left":"true",
                     "maxdx":"4"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1632,
                 "y":832
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "maxdx":"6",
                     "right":"true"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1056,
                 "y":1312
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "left":"true",
                     "maxdx":"4"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":640,
                 "y":992
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":192,
                 "y":864
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":96,
                 "y":1312
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":1856,
                 "y":384
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":704,
                 "y":416
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":1984,
                 "y":192
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":608,
                 "y":1152
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "maxdx":"10",
                     "right":"true"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1216,
                 "y":736
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "maxdx":"10",
                     "right":"true"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1856,
                 "y":1344
                },
                {
                 "height":32,
                 "name":"monster",
                 "properties":
                    {
                     "left":"true",
                     "maxdx":"4"
                    },
                 "type":"monster",
                 "visible":true,
                 "width":32,
                 "x":1024,
                 "y":192
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":192
                },
                {
                 "height":32,
                 "name":"treasure",
                 "properties":
                    {

                    },
                 "type":"treasure",
                 "visible":true,
                 "width":32,
                 "x":1984,
                 "y":1344
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":64,
         "x":0,
         "y":0
        }],
 "orientation":"orthogonal",
 "properties":
    {

    },
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "image":"tiles.png",
         "imageheight":32,
         "imagewidth":160,
         "margin":0,
         "name":"tiles",
         "properties": {},
         "spacing":0,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":64
};


/***/ }),

/***/ "./lib/animation.js":
/*!**************************!*\
  !*** ./lib/animation.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Animation {
  constructor(frames) {
    this.frames = frames;
    this.index = 0;
    this.lastTime = this.timestamp();
    this.timer = 0;
    this.speed;
  }

  tick () {
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        this.index = 0;
      }
    }
  }

  timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  attackTick(player) {
    const pl = player;
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        pl.changeState({'attacking': false});
        this.index = 0;
      }
    }
  }

  deathTick(entity) {
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        entity.changeState({
          'dead': true,
          'dying': false
        });
        this.index = 0;
      }
    }
  }

  getCurrentFrame(){
    this.speed = this.frames[this.index].speed;
    return this.frames[this.index].frame;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Animation);


/***/ }),

/***/ "./lib/main_menu.js":
/*!**************************!*\
  !*** ./lib/main_menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class MainMenu {
  constructor (playing) {
    this.playing = playing;
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(){
    this.playing = true;
  }

  render() {
    const buttons = "<section>" + "<button className='play-button' onClick={this.handlePlay}>" + "play" + "</button>" + "</section>";
    return buttons;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);


/***/ }),

/***/ "./lib/monster.js":
/*!************************!*\
  !*** ./lib/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./lib/animation.js");



class Monster {
  constructor(entity, monster_assets){
    this.state = entity;
    this.state.maxdx = entity.maxdx/2;
    this.state.falling = true;
    this.state.dead = false;
    this.state.jumping = false;
    this.state.jump = false;
    this.state.friction = entity.friction * (this.state.falling ? 0.5 : 1);
    this.state.accel = entity.accel * (this.state.falling ? 0.5: 1);
    this.state.ddx = 0;
    this.state.ddy = entity.gravity;
    this.state.wasLeft = this.state.dx < 0;
    this.state.wasRight = this.state.dx > 0;
    this.state.nY = this.state.x % 32;
    this.state.nX = this.state.y & 32;
    this.state.tileX = _utils__WEBPACK_IMPORTED_MODULE_0__["pixelToTile"](this.state.x);
    this.state.tileY = _utils__WEBPACK_IMPORTED_MODULE_0__["pixelToTile"](this.state.y);
    this.move_left_sprite = monster_assets.move_left_sprite;
    this.move_right_sprite = monster_assets.move_right_sprite;
    this.dying_sprite = monster_assets.dying_sprite;
    this.dead_sprite = monster_assets.dead_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages() {
    this.addAnimation("move_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.move_left_sprite));
    this.addAnimation("move_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.move_right_sprite));
    this.addAnimation('dying', new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.dying_sprite));
    this.addAnimation('dead', new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.dead_sprite));
  }

  getCurrentAnimationFrame() {
    if (this.state.dying) {
      return this.animations.dying.getCurrentFrame();
    } else if (this.state.left) {
      return this.animations.move_left.getCurrentFrame();
    } else if (this.state.right) {
      return this.animations.move_right.getCurrentFrame();
    }
  }

  tick(dt) {
    this.animations.move_left.tick();
    this.animations.move_right.tick();
    this.animations.dying.deathTick(this);
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  killed () {
    this.state.dead = true;
  }

  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 15, this.state.y - 30, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 2, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 2);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Monster);


/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./lib/animation.js");



class Player {
  constructor(entity, player_assets){
    this.state = entity;
    this.state.dying = false;
    this.state.dead = false;
    this.state.attacking = false;
    this.state.facing = true;
    this.state.falling = true;
    this.state.jumping = false;
    this.state.jump = false;
    this.state.friction = entity.friction * (this.state.falling ? 0.5 : 1);
    this.state.accel = entity.accel * (this.state.falling ? 0.5: 1);
    this.state.ddx = 0;
    this.state.ddy = entity.gravity;
    this.state.wasLeft = this.state.dx < 0;
    this.state.wasRight = this.state.dx > 0;
    this.state.nY = this.state.x % 32;
    this.state.nX = this.state.y & 32;
    this.state.tileX = _utils__WEBPACK_IMPORTED_MODULE_0__["pixelToTile"](this.state.x);
    this.state.tileY = _utils__WEBPACK_IMPORTED_MODULE_0__["pixelToTile"](this.state.y);
    this.idle_right_sprite = player_assets.idle_right_sprite;
    this.idle_left_sprite = player_assets.idle_left_sprite;
    this.run_left_sprite = player_assets.run_left_sprite;
    this.run_right_sprite = player_assets.run_right_sprite;
    this.jump_left_sprite = player_assets.jump_left_sprite;
    this.jump_right_sprite = player_assets.jump_right_sprite;
    this.fall_right_sprite = player_assets.fall_right_sprite;
    this.fall_left_sprite = player_assets.fall_left_sprite;
    this.attack_left_sprite = player_assets.attack_left_sprite;
    this.attack_right_sprite = player_assets.attack_right_sprite;
    this.slash_right_sprite = player_assets.slash_right_sprite[0];
    this.slash_left_sprite = player_assets.slash_left_sprite[0];
    this.death_sprite = player_assets.death_sprite;
    this.dead_sprite = player_assets.dead_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  tick(dt) {
    this.animations.idle_right.tick();
    this.animations.idle_left.tick();
    this.animations.run_left.tick();
    this.animations.run_right.tick();
    this.animations.jump_left.tick();
    this.animations.jump_right.tick();
    this.animations.attack_left.attackTick(this);
    this.animations.attack_right.attackTick(this);
    this.animations.death.deathTick(this);
  }

  killPlayer() {
    this.state.dying = true;
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages () {
    this.addAnimation("idle_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.idle_right_sprite));
    this.addAnimation("idle_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.idle_left_sprite));
    this.addAnimation("run_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.run_left_sprite));
    this.addAnimation("run_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.run_right_sprite));
    this.addAnimation("jump_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.jump_left_sprite));
    this.addAnimation("jump_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.jump_right_sprite));
    this.addAnimation("fall_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.fall_right_sprite));
    this.addAnimation("fall_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.fall_left_sprite));
    this.addAnimation("attack_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.attack_left_sprite));
    this.addAnimation("attack_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.attack_right_sprite));
    this.addAnimation("slash_left", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.slash_left_sprite));
    this.addAnimation("slash_right", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.slash_right_sprite));
    this.addAnimation("death", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.death_sprite));
  }

  attack() {
    this.state.attack = true;
  }

  stopAttack() {
    this.state.attack = false;
  }

  getCurrentAnimationFrame() {
    if (this.state.attacking) {
      if (this.state.facing) {
        return this.animations.attack_right.getCurrentFrame();
      } else if (!this.state.facing){
        return this.animations.attack_left.getCurrentFrame();
      }
    } else if ((this.state.jumping) && (this.state.facing)) {
      return this.animations.jump_right.getCurrentFrame();
    } else if ((this.state.jumping) && (!this.state.facing)) {
      return this.animations.jump_left.getCurrentFrame();
    } else if ((this.state.falling && this.state.facing) || (this.state.falling && this.state.dx > 0)) {
      return this.animations.fall_right.getCurrentFrame();
    } else if ((this.state.falling && !this.state.facing) || (this.state.falling && this.state.dx < 0)) {
      return this.animations.fall_left.getCurrentFrame();
    } else if (this.state.falling &&
      !this.state.jumping &&
      !this.state.left &&
      !this.state.right) {
      return this.animations.fall_right.getCurrentFrame();
    }  else if (this.state.left) {
      return this.animations.run_left.getCurrentFrame();
    } else if (this.state.right) {
      return this.animations.run_right.getCurrentFrame();
    } else if (this.state.dying) {
      return this.animations.death.getCurrentFrame();
    } else {
      if (this.state.facing){
        return this.animations.idle_right.getCurrentFrame();
      } else if (!this.state.facing) {
        return this.animations.idle_left.getCurrentFrame();
      }
    }
  }


  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    if (this.state.dead){
      ctx.drawImage(this.dead_sprite, this.state.x - 65, this.state.y - 60, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 5 + 1, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 3);
    } else if (!this.state.attacking){
      ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 65, this.state.y - 60, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 5, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 3);
      // ctx.alpha = 0.2;
      // ctx.fillStyle = '#ECD078';
      // ctx.fillRect(this.state.x, this.state.y, GameUtil.TILE * 3, GameUtil.TILE);
    } else if (this.state.attacking) {
      ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 65, this.state.y - 60, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 5 + 1, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 3);
        if (this.state.facing) {
          ctx.drawImage(this.slash_right_sprite, this.state.x, this.state.y - 40, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 5 + 1, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 3);
        } else if (!this.state.facing) {
          ctx.drawImage(this.slash_left_sprite, this.state.x - 130, this.state.y - 40, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 5 + 1, _utils__WEBPACK_IMPORTED_MODULE_0__["TILE"] * 3);
        }
      // ctx.alpha = 0.2;
      // ctx.fillStyle = '#ECD078';
      // ctx.fillRect(this.state.x, this.state.y, GameUtil.TILE * 3, GameUtil.TILE);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./lib/sound.js":
/*!**********************!*\
  !*** ./lib/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class gameSound {
  constructor(el, audio){
    this.sound = audio;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = true;
    el.appendChild(this.sound);
    this.playing = false;
  }

  play() {
    this.sound.play();
    this.playing = true;
  }

  stop() {
    this.sound.pause();
    this.playing = false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (gameSound);


/***/ }),

/***/ "./lib/stage.js":
/*!**********************!*\
  !*** ./lib/stage.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./lib/utils.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./lib/animation.js");



class Stage {
  constructor(data, totalWidth, totalHeight, exit_assets) {
    const colorOpts = { black: '#000000', yellow: '#ECD078', brick: '#D95B43', pink: '#C02942', purple: '#542437', grey: '#333', slate: '#53777A', gold: 'gold' };
    this.state = {
      data: data,
      colors: [colorOpts.yellow, colorOpts.brick, colorOpts.pink, colorOpts.purple, colorOpts.grey]
    };
    this.state.totalWidth = _utils_js__WEBPACK_IMPORTED_MODULE_0__["MAP"].totalWidth;
    this.state.totalHeight = _utils_js__WEBPACK_IMPORTED_MODULE_0__["MAP"].totalHeight;
    this.state.tile = _utils_js__WEBPACK_IMPORTED_MODULE_0__["TILE"];
    this.exitY = undefined;
    this.exitX = undefined;
    this.exit_sprite = exit_assets.exit_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  tick(dt) {
    this.animations.exit.tick();
  }

  getCurrentAnimationFrame() {
    return this.animations.exit.getCurrentFrame();
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages() {
    this.addAnimation("exit", new _animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.exit_sprite));
  }

  tileCell(tx,ty) {
    return this.state.data[tx + (ty*this.state.totalWidth)];
  }

  render(ctx, mapTiles) {
    let x;
    let y;
    let cell;
    for(y = 0 ; y < this.state.totalHeight ; y++) {
      for(x = 0 ; x < this.state.totalWidth ; x++) {
        cell = this.tileCell(x, y);
        if (cell !== 0) {
          if (cell === 4) {
            ctx.drawImage(mapTiles.topTile, x * this.state.tile, y * this.state.tile, this.state.tile, this.state.tile);
          } else if (cell === 5 || cell === 3 || cell === 2) {
            ctx.drawImage(mapTiles.middleTile, x * this.state.tile, y * this.state.tile, this.state.tile, this.state.tile);
          } else if (cell === 6) {
            this.exitX = x;
            this.exitY = y;
            ctx.drawImage(this.getCurrentAnimationFrame(), x * this.state.tile - 15, y * this.state.tile - 32, this.state.tile * 2, this.state.tile * 2);
          }
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Stage);


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: MAP, TILE, METER, GRAVITY, MAXDX, MAXDY, ACCEL, FRICTION, IMPULSE, COLOR, COLORS, KEY, tileToPixel, pixelToTile, overlap, loadMonsterImages, loadPlayerImages, loadBackground, loadMapTextures, loadExit, loadMainMenuBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP", function() { return MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE", function() { return TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METER", function() { return METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXDX", function() { return MAXDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXDY", function() { return MAXDY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEL", function() { return ACCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRICTION", function() { return FRICTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPULSE", function() { return IMPULSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileToPixel", function() { return tileToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelToTile", function() { return pixelToTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlap", function() { return overlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMonsterImages", function() { return loadMonsterImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlayerImages", function() { return loadPlayerImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBackground", function() { return loadBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapTextures", function() { return loadMapTextures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExit", function() { return loadExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMainMenuBackground", function() { return loadMainMenuBackground; });
const MAP      = { totalWidth: 64, totalHeight: 48 };
const TILE     = 32;
const METER    = TILE;
const GRAVITY  = 9.8 * 6;
const MAXDX    = 15;
const MAXDY    = 60;
const ACCEL    = 0.1;
const FRICTION = 0.05;
const IMPULSE  = 1500;
const COLOR    = { BLACK: '#000000', YELLOW: '#ECD078', BRICK: '#D95B43', PINK: '#C02942', PURPLE: '#542437', GREY: '#333', SLATE: '#53777A', GOLD: 'gold' };
const COLORS   = [ COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY ];
const KEY      = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, Z: 90 };

const tileToPixel = (tile) => {
  return tile * 32;
};

const pixelToTile = (pixel) => {

  return Math.floor(pixel/32);
};

const overlap = (x1, y1, w1, h1, x2, y2, w2, h2) => {
  return !(((x1 + w1 - 1) < x2) ||
           ((x2 + w2 - 1) < x1) ||
           ((y1 + h1 - 1) < y2) ||
           ((y2 + h2 - 1) < y1));
};

const loadMonsterImages = () => {
  let monster_assets = {
    move_left_sprite: [],
    move_right_sprite: [],
    dying_sprite: [],
    dead_sprite: ""
  };

  let frameSpeed = 60;
  let move_left_image;
  let move_right_image;
  let dying_image;
  let dead_image;

  for (let i = 0; i <= 3; i++){
    dying_image = new Image();
    dying_image.src = (`./assets/monster_sprite/slime-die-${i}.png`);
    monster_assets.dying_sprite.push({
      frame: dying_image,
      speed: frameSpeed
    });
  }

  dead_image = new Image();
  dead_image.src = ('./assets/monster_sprite/slime-dead.png');
  monster_assets.dead_sprite = dead_image;

  for (let i = 1; i <= 4; i++) {
    move_left_image = new Image();
    move_left_image.src = (`./assets/monster_sprite/slime_move_left${i}.png`);
    monster_assets.move_left_sprite.push({
      frame: move_left_image,
      speed: frameSpeed
    });
  }

  for (let i = 1; i <= 4; i++) {
    move_right_image = new Image();
    move_right_image.src = (`./assets/monster_sprite/slime_move_right${i}.png`);
    monster_assets.move_right_sprite.push({
      frame: move_right_image,
      speed: frameSpeed
    });
  }

  return monster_assets;
};

const loadPlayerImages = () => {
  let player_assets = {
    idle_right_sprite: [],
    idle_left_sprite: [],
    run_left_sprite: [],
    run_right_sprite: [],
    jump_left_sprite: [],
    jump_right_sprite: [],
    fall_left_sprite: [],
    fall_right_sprite: [],
    attack_right_sprite: [],
    attack_left_sprite: [],
    slash_right_sprite: [],
    slash_left_sprite: [],
    death_sprite: [],
    dead_sprite: []
  };
  let frameSpeed = 90;
  let idle_right_image;
  let idle_left_image;
  let run_left_image;
  let run_right_image;
  let jump_left_image;
  let jump_right_image;
  let fall_right_image;
  let fall_left_image;
  let attack_left_image;
  let attack_right_image,
      slash_left_image,
      slash_right_image,
      death_image,
      dead_image;


  for (let i = 1; i <= 2; i++) {
    fall_left_image = new Image();
    fall_left_image.src = (`./assets/player_sprite/fall_left${i}.png`);
    player_assets.fall_left_sprite.push({
      frame: fall_left_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 2; i++) {
    fall_right_image = new Image();
    fall_right_image.src = (`./assets/player_sprite/fall_right${i}.png`);
    player_assets.fall_right_sprite.push({
      frame: fall_right_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 4; i++) {
    idle_right_image = new Image();
    idle_right_image.src = (`./assets/player_sprite/idle_right${i}.png`);
    player_assets.idle_right_sprite.push({
      frame: idle_right_image,
      speed: 90
    });
  }
  for (let i = 1; i <= 4; i++) {
    idle_left_image = new Image();
    idle_left_image.src = (`./assets/player_sprite/idle_left${i}.png`);
    player_assets.idle_left_sprite.push({
      frame: idle_left_image,
      speed: 90
    });
  }
  for (let i = 1; i <= 10; i++) {
    jump_left_image = new Image();
    jump_left_image.src = (`./assets/player_sprite/jump_left${i}.png`);
    player_assets.jump_left_sprite.push({
      frame: jump_left_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 10; i++) {
    jump_right_image = new Image();
    jump_right_image.src = (`./assets/player_sprite/jump_right${i}.png`);
    player_assets.jump_right_sprite.push({
      frame: jump_right_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 6; i++) {
    run_right_image = new Image();
    run_right_image.src = (`./assets/player_sprite/run_right${i}.png`);
    player_assets.run_right_sprite.push({
      frame: run_right_image,
      speed: frameSpeed
    });
  }
  for (let i = 1; i <= 6; i++) {
    run_left_image = new Image();
    run_left_image.src = (`./assets/player_sprite/run_left${i}.png`);
    player_assets.run_left_sprite.push({
      frame: run_left_image,
      speed: frameSpeed
    });
  }
  for (let i = 1; i <= 7; i++) {
    attack_left_image = new Image();
    attack_left_image.src = (`./assets/player_sprite/attack_left${i}.png`);
    player_assets.attack_left_sprite.push({
      frame: attack_left_image,
      speed: 40
    });
  }
  for (let i = 1; i <= 7; i++) {
    attack_right_image = new Image();
    attack_right_image.src = (`./assets/player_sprite/attack_right${i}.png`);
    player_assets.attack_right_sprite.push({
      frame: attack_right_image,
      speed: 40
    });
  }

    slash_left_image = new Image();
    slash_left_image.src = (`./assets/effects/slash_left1.png`);
    player_assets.slash_left_sprite.push(slash_left_image);

    slash_right_image = new Image();
    slash_right_image.src = (`./assets/effects/slash_right1.png`);
    player_assets.slash_right_sprite.push(slash_right_image);

  for (let i = 1; i <= 8; i++) {
    death_image = new Image();
    death_image.src = (`./assets/player_sprite/death${i}.png`);
    player_assets.death_sprite.push({
      frame: death_image,
      speed: 90
    });
  }

  dead_image = new Image();
  dead_image.src = ('./assets/player_sprite/dead.png');
  player_assets.dead_sprite = dead_image;

  return player_assets;
};

const loadBackground = () => {
  let background = new Image();
  background.src = ('./assets/background/background.gif');
  return background;
};

const loadMapTextures = () => {
  const middleTile = new Image();
  middleTile.src = ('./assets/tiles/middle_tile.png');
  const topTile = new Image();
  topTile.src = ('./assets/tiles/top_tile.png');
  const map = {
    middleTile: middleTile,
    topTile: topTile
  };
  return map;
};

const loadExit = () => {
  let exit_assets = {
    exit_sprite: []
  };
  let exit_image;
  for (let i = 1; i <= 19; i++) {
    exit_image = new Image();
    exit_image.src = (`./assets/exit/port${i}.png`);
    exit_assets.exit_sprite.push({
      frame: exit_image,
      speed: 90
    });
  }
  return exit_assets;
};

const loadMainMenuBackground = () => {
  const mainMenuFigures = [];
  const mult = 6;
  let figure;
  for (let i = 1; i < 8; i++) {
    figure = document.createElement("FIGURE");
    if (i === 1) {
      figure.style.animationDelay = `${2}s`;
      figure.style.animationDuration = "44s";
    } else {
    figure.style.animationDelay = `${mult * i}s`;
    }
    figure.style.backgroundImage = "url(" + `./assets/background/background${i}.gif` + ")";
    mainMenuFigures.push(figure);
  }
  return mainMenuFigures;
};


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ "./level.js");
/* harmony import */ var _lib_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/stage.js */ "./lib/stage.js");
/* harmony import */ var _lib_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/player.js */ "./lib/player.js");
/* harmony import */ var _lib_monster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/monster.js */ "./lib/monster.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _assets_sprite_sheet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sprite_sheet.js */ "./assets/sprite_sheet.js");
/* harmony import */ var _lib_main_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/main_menu.js */ "./lib/main_menu.js");
/* harmony import */ var _lib_sound_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/sound.js */ "./lib/sound.js");









(() => {

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame    ||
                                   window.oRequestAnimationFrame      ||
                                   window.msRequestAnimationFrame     ||
                                   function(callback, element) {
                                     window.setTimeout(callback, 1000 / 60);
                                   };
  }

  const player_assets = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadPlayerImages"]();
  const monster_assets = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadMonsterImages"]();
  const background = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadBackground"]();
  const mapTiles = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadMapTextures"]();
  const exit_assets = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadExit"]();
  const mainMenuFigures = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["loadMainMenuBackground"]();
  const mainMenuMusic = new Audio('./assets/sound/Zabutom_-_Sine_ride.mp3');
  const playingMusic = new Audio('./assets/sound/Breakbeat_Heartbeat_Refract.mp3');
  playingMusic.volume = 0.2;

  function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  function bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  let fps      = 60;
  let step     = 1/fps;
  let canvas   = document.getElementById('canvas');
  let ctx      = canvas.getContext('2d');
  let width    = canvas.width  = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAP"].totalWidth * _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"];
  let height   = canvas.height = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAP"].totalHeight * _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"];
  let player   = {};
  let monsters = [];
  let treasure = [];
  let cells    = [];
  const playButton = document.getElementById('play-button');
  const mainMenu = document.getElementById('main-menu');
  const gameOver = document.getElementById('game-over');
  const retryButton = document.getElementById('retry-button');
  const playAgainButton = document.getElementById('play-again');
  const winScreen = document.getElementById('win-screen');
  const platformerDiv = document.getElementById('platformer');
  const toggleAudioButton = document.getElementById('toggle-audio-button');
  const mainMenuToggleAudioButton = document.getElementById('main-menu-toggle-audio-button');
  let playing = false;
  let win = false;
  let audioAllowed = false;
  const menuMusic = new _lib_sound_js__WEBPACK_IMPORTED_MODULE_7__["default"](platformerDiv, mainMenuMusic);
  menuMusic.playbackRate = 0.7;
  const tileToPixel   = (t) =>     { return t*_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"];};
  const pixelToTile   = (p) =>     { return Math.floor(p/_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"]);};
  const tileCell      = (tx,ty) => { return cells.state.data[tx + (ty*_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAP"].totalWidth)];};

  mainMenuFigures.forEach( figure => {
    mainMenu.appendChild(figure);
  });

  function overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(((x1 + w1 - 1) < x2) ||
           ((x2 + w2 - 1) < x1) ||
           ((y1 + h1 - 1) < y2) ||
           ((y2 + h2 - 1) < y1));
}

  function render(ctx, frame, dt) {
    ctx.clearRect(0, 0, width, height);
    cells.render(ctx, mapTiles);
    player.render(ctx, dt);
    renderMonsters(ctx, dt);
  }

  function setup(map) {
    let data    = map.layers[0].data;
    let objects = map.layers[1].objects;
    let n;
    let obj;
    let entity;
    let monster;
    cells = new _lib_stage_js__WEBPACK_IMPORTED_MODULE_1__["default"](data, _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAP"].totalWidth, _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAP"].totalHeight, exit_assets);
    for(n = 0 ; n < objects.length ; n++) {
      obj = objects[n];
      entity = setupEntity(obj);
      switch(obj.type) {
      case "player":
        player = new _lib_player_js__WEBPACK_IMPORTED_MODULE_2__["default"](entity, player_assets);
      break;
      case "monster":
        monster = new _lib_monster_js__WEBPACK_IMPORTED_MODULE_3__["default"](entity, monster_assets);
        monsters.push(monster);
      break;
      }
    }
  }

  function renderMonsters(ctx, dt) {
    let max = monsters.length;
    let monster;
    for (let i = 0; i < max; i++) {
      monster = monsters[i];
      if (!monster.state.dead){
        monster.render(ctx, dt);
      }
    }
  }

  function setupEntity(obj) {

    let entity = {};
    entity.x        = obj.x;
    entity.y        = obj.y;
    entity.dx       = 0;
    entity.dy       = 0;
    entity.width    = obj.width;
    entity.height    = obj.height;
    entity.gravity  = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["METER"] * (_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["GRAVITY"]);
    entity.maxdx    = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["METER"] * (_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAXDX"]);
    entity.maxdy    = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["METER"] * (_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["MAXDY"]);
    entity.impulse  = _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["METER"] * (obj.properties.impulse || _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["IMPULSE"]);
    entity.accel    = entity.maxdx / (obj.properties.accel    || _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["ACCEL"]);
    entity.friction = entity.maxdx / (obj.properties.friction || _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["FRICTION"]);
    entity.player   = obj.type == "player";
    entity.monster   = obj.type == "monster";
    entity.left     = obj.properties.left;
    entity.right    = obj.properties.right;
    entity.start    = { x: obj.x, y: obj.y };
    entity.killed = entity.collected = 0;
    return entity;
  }

  function update(dt) {
    updatePlayer(dt);
    updateMonsters(dt);
    cells.tick();
  }

  function updatePlayer(dt) {
    if (typeof cells.exitX !== 'undefined') {

      if (overlap(pixelToTile(player.state.x), pixelToTile(player.state.y), 1, 1, cells.exitX, cells.exitY, 1, 1)) {

        win = true;
      }
    }
    if (!player.state.dead) {
      updateEntity(player, dt);
    } else {
      player.render(ctx, dt);
    }
  }

  function updateMonsters(dt) {
    let max = monsters.length;
    for (let i = 0; i < max; i++) {
      updateMonster(monsters[i], dt);
    }
  }
// 1053.3333333333337
// ) ||
// (
//   (player.state.attacking && player.state.facing) &&
//   (monster.state.x - player.state.x < GameUtil.TILE * 3)
// ) ||
// (
//   (player.state.attacking && !player.state.facing) &&
//   (player.state.x - monster.state.x < GameUtil.TILE * 3)
// )
// ) {
  function updateMonster(monster, dt) {
    if (!monster.state.dead) {
      updateEntity(monster, dt);
      if (overlap(player.state.x, player.state.y, _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"], _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"], monster.state.x, monster.state.y, _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"], _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"])) {
        if ((player.state.dy > 0) && (monster.state.y - player.state.y > _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"]/2)) {
          monster.killed();
          player.state.killed++;
        } else {
          player.killPlayer();
        }
      }
      if (
          (
            (Math.abs(player.state.y - monster.state.y) < _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"] * 2) &&
            (player.state.attacking && player.state.facing) &&
            (
              (monster.state.x - player.state.x < _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"] * 3) &&
              (monster.state.x - player.state.x > 0)
            )
          ) ||
          (
            (Math.abs(player.state.y - monster.state.y) < _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"] * 2) &&
            (player.state.attacking && !player.state.facing) &&
            (
              (player.state.x - monster.state.x < _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"] * 3) &&
              (player.state.x - monster.state.x > 0)
            )
          )
        ) {

          monster.killed();
          player.state.killed++;
        }
    }
  }

  function updateEntity(object, dt) {
    let entity = object.state;
    let wasLeft = entity.dx  < 0;
    let wasRight = entity.dx  > 0;
    let falling = entity.falling;
    let friction = entity.friction * (falling ? 0.5 : 1);
    let accel = entity.accel    * (falling ? 0.5 : 1);
    let attacking = entity.attacking;

      entity.ddx = 0;
      entity.ddy = entity.gravity;

      if (entity.left)
        entity.ddx = entity.ddx - accel;
      else if (wasLeft)
        entity.ddx = entity.ddx + friction;

      if (entity.right)
        entity.ddx = entity.ddx + accel;
      else if (wasRight)
        entity.ddx = entity.ddx - friction;

      if (entity.jump && !entity.jumping && !falling) {
        entity.ddy = entity.ddy - entity.impulse;
        entity.jumping = true;
      }

      entity.x  = entity.x  + (dt * entity.dx);
      entity.y  = entity.y  + (dt * entity.dy);
      entity.dx = bound(entity.dx + (dt * entity.ddx), -entity.maxdx, entity.maxdx);
      entity.dy = bound(entity.dy + (dt * entity.ddy), -entity.maxdy, entity.maxdy);

      if ((wasLeft  && (entity.dx > 0)) ||
          (wasRight && (entity.dx < 0))) {
        entity.dx = 0;
      }

      let tx = pixelToTile(entity.x);
      let ty = pixelToTile(entity.y);
      let nx = entity.x%_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"];
      let ny = entity.y%_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["TILE"];
      let cell = tileCell(tx, ty) === 6 ? 0 : tileCell(tx, ty);
      let cellright = tileCell(tx + 1, ty) === 6 ? 0 : tileCell(tx + 1, ty);
      let celldown  = tileCell(tx,     ty + 1) === 6 ? 0 : tileCell(tx,     ty + 1);
      let celldiag  = tileCell(tx + 1, ty + 1) === 6 ? 0 : tileCell(tx + 1, ty + 1);

      if (entity.dy > 0) {
        if ((celldown && !cell) ||
            (celldiag && !cellright && nx)) {
          entity.y = tileToPixel(ty);
          entity.dy = 0;
          entity.falling = false;
          entity.jumping = false;
          ny = 0;
        }
      }
      else if (entity.dy < 0) {
        if ((cell      && !celldown) ||
            (cellright && !celldiag && nx)) {
          entity.y = tileToPixel(ty + 1);
          entity.dy = 0;
          cell      = celldown;
          cellright = celldiag;
          ny        = 0;
        }
      }

      if (entity.dx > 0) {
        if ((cellright && !cell) ||
            (celldiag  && !celldown && ny)) {
          entity.x = tileToPixel(tx);
          entity.dx = 0;
        }
      }
      else if (entity.dx < 0) {
        if ((cell     && !cellright) ||
            (celldown && !celldiag && ny)) {
          entity.x = tileToPixel(tx + 1);
          entity.dx = 0;
        }
      }

      if (entity.monster) {
        if (entity.left && (cell || !celldown)) {
          entity.left = false;
          entity.right = true;
        }
        else if (entity.right && (cellright || !celldiag)) {
          entity.right = false;
          entity.left  = true;
        }
      }

      object.tick();

      entity.falling = ! (celldown || (nx && celldiag));
    }

  let dt = 0;
  let now;
  let last = timestamp();
  let fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  function frame() {
    const mainMenu = new _lib_main_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"](playing);
    if (win) {
      winScreen.style.display = "flex";
    }
    else if (player.state.dead) {
      gameOver.style.display = "flex";
    } else if (playing) {
      canvas.style.backgroundImage = `url(${background.src})`;
      canvas.style.backgroundSize = 'cover';
      fpsmeter.tickStart();
      now = timestamp();
      dt += Math.min(1, (now - last) / 1000);
      while (dt > step) {
        dt -= step;
        update(step);
      }
      render(ctx, dt);
      last = now;
      fpsmeter.tick();
      requestAnimationFrame(frame, canvas);
    } else if (playing === false && !player.state.dead){
      if (audioAllowed){
        menuMusic.play();
      }
      canvas.style.background = "none";
    }
  }

  function onKey (e, key, down) {
    if ((typeof player === "undefined") || (!player.state.dead)){
      switch(key) {
        case _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["KEY"].LEFT:
        player.changeState({'left': down, 'facing': false});
        e.preventDefault(); return false;
        case _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["KEY"].RIGHT:
        player.changeState({'right': down, 'facing': true});
        e.preventDefault();
        return false;
        case _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["KEY"].SPACE:
        player.changeState({'jump': down});
        e.preventDefault();
        return false;
        case _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["KEY"].Z:
        if (!player.state.attacking) {
          player.changeState({'attacking': true});
        }
        return false;
      }
    }
  }

  function play(e) {
    return (e) => {
      playing = true;
      menuMusic.stop();
      if (audioAllowed) {
        playingMusic.play();
      }
      mainMenu.visibility = "hidden";
      mainMenu.opacity = "0";
      setTimeout(() => {mainMenu.style.display = "none";}, 2000);
      frame();
    };
  }

  function restartPlay(){
    return (e) => {
      if (win === true) {
        win = false;
        winScreen.style.display = "none";
      }
      player = {};
      monsters = [];
      treasure = [];
      cells    = [];
      gameOver.style.display = "none";
      setup(_level_js__WEBPACK_IMPORTED_MODULE_0__["level"]);
      frame();
    };
  }

  function toggleAudio(){
    return (e) => {
      audioAllowed = !audioAllowed;
    };
  }

  function mainMenuToggle(){
    return(e) => {
      audioAllowed = !audioAllowed;
      if (audioAllowed){
        mainMenuMusic.play();
      }
      else {
        mainMenuMusic.stop();
      }
    };
  }


// TODO: figure out how to stop holding down space bar from triggering jump

  document.addEventListener('keydown', function(ev) {
    return onKey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) { return onKey(ev, ev.keyCode, false); }, false);
  playButton.addEventListener('click', play());
  retryButton.addEventListener('click', restartPlay());
  playAgainButton.addEventListener('click', restartPlay());
  toggleAudioButton.addEventListener('click', toggleAudio());
  mainMenuToggleAudioButton.addEventListener('click', mainMenuToggle());

    setup(_level_js__WEBPACK_IMPORTED_MODULE_0__["level"]);
    frame();

})();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map