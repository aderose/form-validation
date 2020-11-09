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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function element() {\n  // create a HTMLElement object of the provided type\n  function create({ type, textContent, attributes, children }) {\n    const el = document.createElement(type);\n    if (textContent) el.textContent = textContent;\n    if (attributes)\n      Object.keys(attributes).forEach((key) =>\n        el.setAttribute(key, attributes[key]),\n      );\n    if (children) children.forEach((child) => el.appendChild(create(child)));\n    return el;\n  }\n\n  return { create };\n})());\n\n\n//# sourceURL=webpack://form-validation/./src/element.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\n;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function form() {\n  // create a general form object\n  function create(fields) {\n    const parent = _element__WEBPACK_IMPORTED_MODULE_0__.default.create({\n      type: 'form',\n      attributes: { class: 'general-form', novalidate: '' },\n    });\n\n    // create the form child elements\n    fields.forEach((field) => parent.appendChild(_element__WEBPACK_IMPORTED_MODULE_0__.default.create(field)));\n\n    // gather all input fields\n    const inputElements = Object.values(parent).reduce(\n      (inputs, input) => ({ ...inputs, [input.id]: input }),\n      {},\n    );\n\n    function getElementById(id) {\n      return Array.from(parent.childNodes).find((child) => child.id === id);\n    }\n\n    // listen for any updates to the form\n    function listen({ errorFieldId, inputs }) {\n      // gather the container error element with the provided ID\n      const errorEl = getElementById(errorFieldId);\n\n      // prevent default form action & validate all input from bottom to top\n      parent.addEventListener('submit', (e) => {\n        e.preventDefault();\n        // iterate through all input elements and validate input\n        let counter = 0;\n        for (const { id, name, equalToId } of inputs) {\n          const inputEl = inputElements[id];\n          const options = { inputEl, inputName: name, errorEl };\n          if (equalToId) options.equalTo = getElementById(equalToId);\n\n          if (!_validator__WEBPACK_IMPORTED_MODULE_1__.default.validate(options)) break;\n          counter += 1;\n        }\n        if (counter === inputs.length) console.log('Success!');\n      });\n\n      inputs.forEach((input) => {\n        // assuming all provided input ids match elements in the form\n        const inputEl = inputElements[input.id];\n        inputEl.addEventListener('blur', () => {\n          const options = { inputEl, inputName: input.name, errorEl };\n          if (input.equalToId)\n            options.equalTo = getElementById(input.equalToId);\n\n          _validator__WEBPACK_IMPORTED_MODULE_1__.default.validate(options);\n        });\n      });\n    }\n\n    return { parent, listen };\n  }\n\n  return { create };\n})());\n\n\n//# sourceURL=webpack://form-validation/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n;\n\nconst fields = [\n  {\n    type: 'label',\n    textContent: 'Email',\n    attributes: { for: 'email' },\n    children: [\n      { type: 'span', textContent: '*', attributes: { class: 'required' } },\n    ],\n  },\n  {\n    type: 'input',\n    attributes: { type: 'email', name: 'email', id: 'email', required: '' },\n  },\n  {\n    type: 'label',\n    textContent: 'Country',\n    attributes: { for: 'country' },\n    children: [\n      {\n        type: 'span',\n        textContent: '*',\n        attributes: { class: 'required' },\n      },\n    ],\n  },\n  {\n    type: 'input',\n    attributes: {\n      type: 'text',\n      name: 'country',\n      id: 'country',\n      required: '',\n      pattern: \"[A-Za-z ']+\",\n    },\n  },\n  {\n    type: 'label',\n    textContent: 'Zip Code',\n    attributes: { for: 'zipcode' },\n    children: [\n      { type: 'span', textContent: '*', attributes: { class: 'required' } },\n    ],\n  },\n  {\n    type: 'input',\n    attributes: {\n      type: 'text',\n      name: 'zipcode',\n      id: 'zipcode',\n      required: '',\n      pattern: '[A-Za-z0-9 ]+',\n    },\n  },\n  {\n    type: 'label',\n    textContent: 'Password',\n    attributes: { for: 'password' },\n    children: [\n      { type: 'span', textContent: '*', attributes: { class: 'required' } },\n    ],\n  },\n  {\n    type: 'input',\n    attributes: {\n      type: 'password',\n      name: 'password',\n      id: 'password',\n      required: '',\n      pattern: '[A-Za-z0-9 ]+',\n    },\n  },\n  {\n    type: 'label',\n    textContent: 'Confirm Password',\n    attributes: { for: 'confirmpw' },\n    children: [\n      { type: 'span', textContent: '*', attributes: { class: 'required' } },\n    ],\n  },\n  {\n    type: 'input',\n    attributes: {\n      type: 'password',\n      name: 'confirmpw',\n      id: 'confirmpw',\n      required: '',\n      pattern: '[A-Za-z0-9 ]+',\n    },\n  },\n  {\n    type: 'div',\n    textContent: '* This field is required.',\n    attributes: { class: 'required', id: 'error' },\n  },\n  {\n    type: 'div',\n    attributes: { class: 'confirmation' },\n    children: [\n      {\n        type: 'input',\n        attributes: { type: 'submit', value: 'Confirm', class: 'confirm' },\n      },\n      {\n        type: 'input',\n        attributes: { type: 'reset', value: 'Cancel', class: 'cancel' },\n      },\n    ],\n  },\n];\n\nconst signUpForm = _form__WEBPACK_IMPORTED_MODULE_0__.default.create(fields);\n\n// listen for changes on the sign-up form\nsignUpForm.listen({\n  errorFieldId: 'error',\n  inputs: [\n    { id: 'email', name: 'Email' },\n    { id: 'country', name: 'Country' },\n    { id: 'zipcode', name: 'Zip code' },\n    { id: 'password', name: 'Password', equalToId: 'confirmpw' },\n    {\n      id: 'confirmpw',\n      name: 'Password confirmation',\n      equalToId: 'password',\n    },\n  ],\n});\n\n// add form to the document content\ndocument.querySelector('.content').appendChild(signUpForm.parent);\n\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function validator() {\n  function showError({ inputEl, inputName, errorEl, type }) {\n    if (inputEl.validity.valueMissing) {\n      errorEl.textContent = `${inputName} is missing a value.`;\n    } else if (inputEl.validity.typeMismatch) {\n      errorEl.textContent = 'Your email is invalid!';\n    } else if (inputEl.validity.patternMismatch) {\n      errorEl.textContent = `${inputName} contains invalid characters.`;\n    }\n    if (type !== '') errorEl.textContent = `${inputName} does not match.`;\n    inputEl.setAttribute('class', 'warning');\n  }\n\n  function validate({ inputEl, inputName, errorEl, equalTo }) {\n    // if equalTo exists, check if the input is equal to that value\n    const equal = equalTo ? checkValueEqual({ inputEl, equalTo }) : true;\n    if (inputEl.validity.valid && equal) {\n      errorEl.innerHTML = '* This field is required.';\n      inputEl.removeAttribute('class');\n      if (equalTo) equalTo.removeAttribute('class');\n      return true;\n    } else {\n      showError({\n        inputEl,\n        inputName,\n        errorEl,\n        type: equal ? '' : 'pwmismatch',\n      });\n      return false;\n    }\n  }\n\n  // check if the value of each element is equal\n  function checkValueEqual({ inputEl, equalTo }) {\n    return inputEl.value === equalTo.value;\n  }\n\n  return { validate };\n})());\n\n\n//# sourceURL=webpack://form-validation/./src/validator.js?");

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