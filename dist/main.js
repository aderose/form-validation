/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function element() {\n  // create a HTMLElement object of the provided type\n  function create(_ref) {\n    var type = _ref.type,\n        textContent = _ref.textContent,\n        attributes = _ref.attributes,\n        children = _ref.children;\n    var el = document.createElement(type);\n    if (textContent) el.textContent = textContent;\n    if (attributes) Object.keys(attributes).forEach(function (key) {\n      return el.setAttribute(key, attributes[key]);\n    });\n    if (children) children.forEach(function (child) {\n      return el.appendChild(create(child));\n    });\n    return el;\n  }\n\n  return {\n    create: create\n  };\n})());\n\n//# sourceURL=webpack://form-validation/./src/element.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function form() {\n  // create a general form object\n  function create(fields) {\n    var parent = _element__WEBPACK_IMPORTED_MODULE_0__.default.create({\n      type: 'form',\n      attributes: {\n        class: 'general-form',\n        novalidate: ''\n      }\n    }); // create the form child elements\n\n    fields.forEach(function (field) {\n      return parent.appendChild(_element__WEBPACK_IMPORTED_MODULE_0__.default.create(field));\n    }); // gather all input fields\n\n    var inputElements = Object.values(parent).reduce(function (inputs, input) {\n      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, input.id, input));\n    }, {}); // get an element from the form given its ID\n\n    function getElementById(id) {\n      return Array.from(parent.childNodes).find(function (child) {\n        return child.id === id;\n      });\n    } // listen for any updates to the form\n\n\n    function listen(_ref) {\n      var errorFieldId = _ref.errorFieldId,\n          inputs = _ref.inputs;\n      // gather the container error element with the provided ID\n      var errorEl = getElementById(errorFieldId); // prevent default form action & validate all input from bottom to top\n\n      parent.addEventListener('submit', function (e) {\n        e.preventDefault(); // iterate through all input elements and validate input\n\n        var counter = 0;\n\n        var _iterator = _createForOfIteratorHelper(inputs),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var _step$value = _step.value,\n                id = _step$value.id,\n                name = _step$value.name,\n                equalToId = _step$value.equalToId;\n            var inputEl = inputElements[id];\n            var options = {\n              inputEl: inputEl,\n              inputName: name,\n              errorEl: errorEl\n            };\n            if (equalToId) options.equalTo = getElementById(equalToId);\n            if (!_validator__WEBPACK_IMPORTED_MODULE_1__.default.validate(options)) break;\n            counter += 1;\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        if (counter === inputs.length) console.log('Success!');\n      });\n      inputs.forEach(function (input) {\n        // assuming all provided input ids match elements in the form\n        var inputEl = inputElements[input.id];\n        inputEl.addEventListener('blur', function () {\n          var options = {\n            inputEl: inputEl,\n            inputName: input.name,\n            errorEl: errorEl\n          };\n          if (input.equalToId) options.equalTo = getElementById(input.equalToId);\n          _validator__WEBPACK_IMPORTED_MODULE_1__.default.validate(options);\n        });\n      });\n    }\n\n    return {\n      parent: parent,\n      listen: listen\n    };\n  }\n\n  return {\n    create: create\n  };\n})());\n\n//# sourceURL=webpack://form-validation/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n;\nvar fields = [{\n  type: 'label',\n  textContent: 'Email',\n  attributes: {\n    for: 'email'\n  },\n  children: [{\n    type: 'span',\n    textContent: '*',\n    attributes: {\n      class: 'required'\n    }\n  }]\n}, {\n  type: 'input',\n  attributes: {\n    type: 'email',\n    name: 'email',\n    id: 'email',\n    required: ''\n  }\n}, {\n  type: 'label',\n  textContent: 'Country',\n  attributes: {\n    for: 'country'\n  },\n  children: [{\n    type: 'span',\n    textContent: '*',\n    attributes: {\n      class: 'required'\n    }\n  }]\n}, {\n  type: 'input',\n  attributes: {\n    type: 'text',\n    name: 'country',\n    id: 'country',\n    required: '',\n    pattern: \"[A-Za-z ']+\"\n  }\n}, {\n  type: 'label',\n  textContent: 'Zip Code',\n  attributes: {\n    for: 'zipcode'\n  },\n  children: [{\n    type: 'span',\n    textContent: '*',\n    attributes: {\n      class: 'required'\n    }\n  }]\n}, {\n  type: 'input',\n  attributes: {\n    type: 'text',\n    name: 'zipcode',\n    id: 'zipcode',\n    required: '',\n    pattern: '[A-Za-z0-9 ]+'\n  }\n}, {\n  type: 'label',\n  textContent: 'Password',\n  attributes: {\n    for: 'password'\n  },\n  children: [{\n    type: 'span',\n    textContent: '*',\n    attributes: {\n      class: 'required'\n    }\n  }]\n}, {\n  type: 'input',\n  attributes: {\n    type: 'password',\n    name: 'password',\n    id: 'password',\n    required: '',\n    pattern: '[A-Za-z0-9 ]+'\n  }\n}, {\n  type: 'label',\n  textContent: 'Confirm Password',\n  attributes: {\n    for: 'confirmpw'\n  },\n  children: [{\n    type: 'span',\n    textContent: '*',\n    attributes: {\n      class: 'required'\n    }\n  }]\n}, {\n  type: 'input',\n  attributes: {\n    type: 'password',\n    name: 'confirmpw',\n    id: 'confirmpw',\n    required: '',\n    pattern: '[A-Za-z0-9 ]+'\n  }\n}, {\n  type: 'div',\n  textContent: '* This field is required.',\n  attributes: {\n    class: 'required',\n    id: 'error'\n  }\n}, {\n  type: 'div',\n  attributes: {\n    class: 'confirmation'\n  },\n  children: [{\n    type: 'input',\n    attributes: {\n      type: 'submit',\n      value: 'Confirm',\n      class: 'confirm'\n    }\n  }, {\n    type: 'input',\n    attributes: {\n      type: 'reset',\n      value: 'Cancel',\n      class: 'cancel'\n    }\n  }]\n}];\nvar signUpForm = _form__WEBPACK_IMPORTED_MODULE_0__.default.create(fields); // listen for changes on the sign-up form\n\nsignUpForm.listen({\n  errorFieldId: 'error',\n  inputs: [{\n    id: 'email',\n    name: 'Email'\n  }, {\n    id: 'country',\n    name: 'Country'\n  }, {\n    id: 'zipcode',\n    name: 'Zip code'\n  }, {\n    id: 'password',\n    name: 'Password',\n    equalToId: 'confirmpw'\n  }, {\n    id: 'confirmpw',\n    name: 'Password confirmation',\n    equalToId: 'password'\n  }]\n}); // add form to the document content\n\ndocument.querySelector('.content').appendChild(signUpForm.parent);\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function validator() {\n  function showError(_ref) {\n    var inputEl = _ref.inputEl,\n        inputName = _ref.inputName,\n        errorEl = _ref.errorEl,\n        type = _ref.type;\n\n    if (inputEl.validity.valueMissing) {\n      errorEl.textContent = \"\".concat(inputName, \" is missing a value.\");\n    } else if (inputEl.validity.typeMismatch) {\n      errorEl.textContent = 'Your email is invalid!';\n    } else if (inputEl.validity.patternMismatch) {\n      errorEl.textContent = \"\".concat(inputName, \" contains invalid characters.\");\n    }\n\n    if (type !== '') errorEl.textContent = \"\".concat(inputName, \" does not match.\");\n    inputEl.setAttribute('class', 'warning');\n  }\n\n  function validate(_ref2) {\n    var inputEl = _ref2.inputEl,\n        inputName = _ref2.inputName,\n        errorEl = _ref2.errorEl,\n        equalTo = _ref2.equalTo;\n    // if equalTo exists, check if the input is equal to that value\n    var equal = equalTo ? checkValueEqual({\n      inputEl: inputEl,\n      equalTo: equalTo\n    }) : true;\n\n    if (inputEl.validity.valid && equal) {\n      errorEl.innerHTML = '* This field is required.';\n      inputEl.removeAttribute('class');\n      if (equalTo) equalTo.removeAttribute('class');\n      return true;\n    } else {\n      showError({\n        inputEl: inputEl,\n        inputName: inputName,\n        errorEl: errorEl,\n        type: equal ? '' : 'pwmismatch'\n      });\n      return false;\n    }\n  } // check if the value of each element is equal\n\n\n  function checkValueEqual(_ref3) {\n    var inputEl = _ref3.inputEl,\n        equalTo = _ref3.equalTo;\n    return inputEl.value === equalTo.value;\n  }\n\n  return {\n    validate: validate\n  };\n})());\n\n//# sourceURL=webpack://form-validation/./src/validator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;