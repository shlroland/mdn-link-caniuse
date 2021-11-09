/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/monkey.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/monkey.scss ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".linkBtn{cursor:pointer;display:inline-block;height:30px;margin-left:10px;width:30px}", "",{"version":3,"sources":["webpack://./src/styles/monkey.scss"],"names":[],"mappings":"AAAA,SAII,cAAA,CAHA,oBAAA,CAEA,WAAA,CAEA,gBAAA,CAHA,UAIJ","sourcesContent":[".linkBtn {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    margin-left: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/monkey.scss":
/*!********************************!*\
  !*** ./src/styles/monkey.scss ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./monkey.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/monkey.scss");

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

function createLink(keyword) {
    const img = __webpack_require__(/*! ./favicon-128.png */ "./src/favicon-128.png");
    const link = document.createElement('a');
    link.classList.add('linkBtn');
    link.innerHTML = `<img src="${img}"> </img>`;
    link.href = `https://caniuse.com/?search=${keyword}`;
    link.target = '_blank';
    return link;
}
module.exports = createLink;


/***/ }),

/***/ "./src/favicon-128.png":
/*!*****************************!*\
  !*** ./src/favicon-128.png ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NTM0QjA3NEQ3NzExRTQ5RjJDQkZEQTMwQkRENURBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4NTM0QjA4NEQ3NzExRTQ5RjJDQkZEQTMwQkRENURBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTg1MzRCMDU0RDc3MTFFNDlGMkNCRkRBMzBCREQ1REEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTg1MzRCMDY0RDc3MTFFNDlGMkNCRkRBMzBCREQ1REEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jL4ZwAAABgFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M4hnptBAAAQ30lEQVR42sRbDWPaRtJGBBkiEJWwQRAEls7eWg5uA4TPl7yxsBrbkZ3EVoKT4ia+pmlIcdILxSnX8137129mJYGwsfNxCQwgNOxq9TC78+zMYPsitpRKkcjoND/SepExKUVK+aHi6YaXlfLDVqchb2u9XC4e3ItEcnvQIcx28uF8sFTt4HvE544bHo4aLqxX89Wqo+biVZD1asFprEaGTflweB3a4rSpFw5HCuFqKY6tefuqUrxUxQvX00uVdLpSSVfgahbf0+m1SmWt8lvcAdALptm4CyXNspV0Zy+C6OOdCtth4cBSS4C6V2ErW7ZZerSR3SrRL3mtUumw0Mpu9eJ7tCHHpuHSYC8f6Vxj4ZNrlU4vAm3HeywMcy1cqeRdC1T3loYAtirs2tLa2ho1PuBNo6ylDyiAXHopvbT2xrZBvJPGjrSp2kmzadSXvt6NVzuV9NJSeo1dgyv34pFSh81tlbaCWzAFkVK80wnvdcK5DhuH72gDAIxbpaFdw1u5rc5eAS1QynUKYbDGnt2cL7DsHpuLOFML37IT7nSoPfJsZw/G3GODhTzMM8sGw2x4byu4B/NcrSzBlwBwLCDP44QgsrX0Olzny2dA1jO2rMe3A5mALZlAprfulSfr2A8/h/f1XsbbM57J0BOqZnpuC1XzxcBfuxu7u7ud3VammF1fv3fv3jE8j++tr+cLvsKSVzo7Nz2y939eeQMTQWeDvn6LfeWRzvgosa88j+PK7UQiUcHX7du3x8cM9nzBf3iFvTk27P97ZXfNexP2qwceYf+4OpTVP275PE2+3dtXbl65Aq+beDgeG/NN3Ffafry9vo2Cx3gv/uP64/hj+ly/93rxd+nOnTscPJ/+EzwrDoL+VY1XSwcPfw24j0y0eFA82LYfre3nDzPDSdh+eI/KOj7j9+JP4ni05V4cpiBSCIKE6SMYLoVzweBxGD/K5cLHDzP1Ju/3+3mebzJPNoJDyUHPMxosXmeYwtm2HI5Nxw/aPfEE7pILoxfgLYed8+EcqPgJvMLh7qLmVzhC+n2Fl7IbZ3p+pJZDoXdAofpEAMFh73BRbKqKyhmchQCe/I8AvFouZ2sXA6BakfObplKWGMb8DBaYpL0fgKIysmVZMwPQVE2VV1XVNP3MDABEE7LuSihZKkwdQPj1vwZ9SZIYeFliafoWOH4YqDdxCnhTnckURBoD2d/mBIPwM1qElAdEIov87Nywb9VFsa/MDICpWiJjgRvyzIwswCiqqQAVqWQGALJzenKmPBB83ar7LcWamQUoDyiM2u4rs1kDpbos8ApnGIw6Iy8QmrzFM0Z9xjwg1WfGhLAd84pktWE78DMz2IyKIVUSiUQkQRAYbQYA8t25gebwgJbMT58Hcq9bZQjLeRqWW7PggefAAxYDdDyjzShaJpJqGuUZ8wBpcGSmPCAbZWmKFhhldcECREQ8r1q8SnPDqQCI3PdKNKQSThTgIXIkNBUeiCYEjtPsp5DMvngxEDVbRD07DR4Ao0M23sSDvyntP28l6en0eKAI6bhiiRJ6vl/c/6VV9isCM0UeQACmKhuGYgKAlsZDPFo3OMWcJgDMBASGAuCafYWX5Smm5wigbxmMZCnUAqiJxLKmNwUceD5uP7DumqSFPMDz01yE0QQXcoVLFJMSp7vadMLyaIJwrhA9++LdwNWFUH76U7C/3RqV6abHA6YiW4yEXpBdXJT9CmTHVn/KbiiXIQIAL6DpeV2cYnpOLWDKBgbiyAN+01SN8nQtYAIPWIxtAYCjWoIsK31zegBoYY5Xzb5faGGZrq/6+T5oTPb+xsZwp974QgB6c9qwMKclonPeMl3veHF5KG9KX4gHdFOSnMKcomVpmY6hn1hitlsJ8abZN0H8QrTwhXjAr6q0MAeWF/YPsEyHARmW6Z78djfhpyU7SNS+GAANy9N2YQ54oDvg/JYocDQsryauyKrKGEofNqovCAA2PgEiQeqGAvKAIRuUB1o6aDypWyrulF8QAC3Mmc52DFNeNgwBARR1vwk0WZf5LwuAFubaWB8XWrRMR4gAqg3A7LdFS/2si7Dw/OFIHkdDvGVZ8BXxyAEAOFH7Kh4JAsBqld324QDGQ/3IWQC9Px/dGspPUQ8PhIAHvGW6MS3x4UF6dnluJMulswAysYV5kBoeFnwBagG7MMdzEBXTMp1Fy3RP3ty9rTrax1gA6yzgyvhUm2T8OgqglpqHBx5qvgC6oQlhuKrAPEM8MGiaDP5gAmvgyTLwgMmY6kcSkb2/WCoDC/rsdQ4AkBM8AIAQxgOcbNDNqJiQCQ8hKkeQB4rJvwl+2fDLRP0oL0DPUiXDksXz17kA5n2P0AjUAsADllyHQITyAKTnQr1B3bAVAlMSWRUF/qMBKCqnCgZ/GQDfvGsB4AHixANoPMUo20QEXgCbc1mQPsECvFG2DPkCALgIa76UvQjlJpC9BKsMFgzdjnmT8LgD+Bm0AM9Ibdyuzy6m9y1C3mIsovCTFuH2TsoHYh9ODpIMluTswpzewjKdAJ8QQZC0YhI0SQJeAk3/cABRHBOLfQTHjJ51w8e3YrGT2MkJHmI7B3OcJx7ILjcSozJdbzmRCI3aPpwHxscsXMADNXsK3LCcp2H5L7RM5/56vnj3WZOnTfxHTgFPEyx6XfECN0yN3FBRJIWhm9H+Q8gLLNDsn26BB1ZgGVqm8vFeAFGlpSgXe0Hqlm/ohn2lbJQlXLHFJIF3o15WMCou3n4lmSpTZ9RPAcAbRL0EgO+Wrza0AC/VOc6NByxeLIuUiNALFF4cSJ8CgCddkb8MwInHAhYn2xagPAAMJhOXBxSVKQv8JwBQLUO4CMACLsEU7kfuInQKc3Z6rsIGjEvIAgvge5ufsJjeuwhVv5+fvAgf7wABxJzXyQHNjrEsh9lxUe8LWKZDlYSKibYAHztt0UhwP+qW8+7nw8f5UVQxMeN2rzvHA498MVtOYj7kAU99ILu4POCG9QHY1xPaqA00zi3hJbN//rTjjuPbeXxJzeECHqgBD4ymoOl3eOA58kCTEkHTgu34GZ7aqXv2BbCCv0mbm9L+X3+PLdTwUast+DIXp/zSRTzgG+2GpmUX5vzixi8tHcJyy+aBOFtJ8m0JdgpM3eOLd0NHDBH6oPrF+3++O6mlfPM4TC2WOb8I+4xiXzfZC2q+W57d0CzTfNgt05XrZYvGAzqsTrnuN+h23AqtmMSAPNaQVL8YiOGNT2roTDXfeQDgPKpBLokHUjs2Djse4GRvmY5065KbF/BG3bK345YGHCFKHE8oAN9Caj6G+9pkC/DGAHK+iwEAEXjjAUGyzdWiE0LEO4zqxgOMTJzUHXq2LcjcGcZEC2BgF4NNFQFsn685MJxkX3d+O4ZFWLM3o5q7CFVnEdplOkez4DvbW4pdwnOWFrY2CVgAB8BhJi9Cv72NTViEIzeMUTcUwVk0x2UOkhI31CAsf8qN3OkgwXBuVy6xfQIk4o7y6DI37E0gohiSED2cbF9Spusts3OCt63htpHk/l+lneEo53jAO+YkKqYzgMdhPACiIg8cOGU61BjICypNt24KsUKgO4wVyP79v+8s1OgUzF/KAxfFA75UDD3YCcsJEakbZhcXNb9FJDs9j849M1ZUi3O21e5i2Q+JIkP9JXrrWmwBA7uLeMAkFmH6F3nBfMoXsz2YEpFaBvbnh2W6slOmo9sxOJSdHeMiVFTRsAt66IaYXFzIA6TOG5eF5SkXAMYDquwSEUfhGAKtltPtWDFly03dsaTpFPSoG/pitYt4QJXrjHwJAJiDWGoUD9DC3KhcL2AM5AAwLalPaRp5QGWwoNd3AaRwClITeUBRiCBKE6cgcDIWlP6zeXR0tPL2LRybd1xtBQ9PA/9G7WjlaNS28vZoZYVqvgXMLeedUaq9+FCq9ihvV5yeY23Vgu/nE99IYu+evbziystnu17tyu7tC9uevbnpo3+HS//W9+QN65Hl38Z67rG32J+c1y12q+RLn/7hkRtXvfLJ2uqNVVfgfKxtdfXq6erpKjxPr54ermV86W+PVFeOvr/xn+tKn4qibH5/+PVrw0+VvrL56nCp+4x32344fPmu7h9pa/ftxYzy4DC9H8Mpmce8f/7w5XIZk37sugl3OML8nr6OvqUArrfbbfVIheP1H258gxqWIlE7ZAONJuSCKmqvDte+m3vbNtsrqH1zWAl0/dBmtql27ddH4IjziGD+wSH7687CCE7lu8GKqbZVdXSH9gq9nw1gE9Yo7KtwpM3wbUWBgwgAAFxpyBCQiOiUm69u/KHLPOT5okTbXnYNICKZ65uofQXpNTizc8u1Me3lQOZNkZeATZw7WByMCaMggJNvr2OBHmILE0yJU+BWBkH7/q2KLjwAXwcA3xwBBRkKZw/0n7cQrZCyAQNt/rBKze37CbOL1INT8AbQ/kRt/sEqjMLLA3Vg0DEBgAljNiDGcCxwHdMGBkMQG59pGnLZRQuTIQ8cAAAOCxQEuPj6N/Y3qUtljvZ8kLLTm3kKwKulsKcK2U3dGFoAsq2BF0Aby29tZwpAgXS8bdo3Qe2pYJltCqBtMgyNEO2eKiM+FbHnKwrAiSznH5zi+bytpR7gLduqxbRxFOcOIo45BLC5uQlMAUc6LLwjZ5zTEADteGS3Uc3tefqALng7z51HLTXUbnzv3GE0pnsdBXB46pHD1avgp1ed4w34ZKTfWD21z+w21IY9D294ZVyjozgdoefY7dYCvq1rXmHTX3uETafTH6ixFXzgEw72yVAd7+m9XbrT88UzXgn8/vSOK09/zzwMNFz96b8zP74bab9nfgwsjrSA838i9H9FtjOZMfXHfzXGe44E9oLx/2Oi9RyBw6KQwOgbB4GGBZqIVSGt9ObunCRSBdr2nwe6jMARUaSVn8jFUnjx3RxkMATSTHK+50QAdVnXCA47Vw5JYrme5AgAgIgoJBCuodnFpkZZh7ZkmcKJ5i8GEE3onFZnklqoPqHnJAAk1GhokiBhdiyJkt4Y6BKtkrVB07qgQFtLx5oZ1xggOD17GYBkX+rWhUWZDDjmXM+JFkjWy9QCRaoNygMNLVBMIDiZAoA20Ag30Bsh6X0WSDJish6ql0ODD7EAxKCCLDGEECtU1FHj4AsTwnDFhEWIRERityXtNpFql60BGFMCsIygidL5nmcAYE3PyTZ0LlFMSJoe0jQNP0uCBsEqrEJOFIk+bAvpmPVfagGJVjlwdZP3WSDbxX9KsiU5l13sziWHWiQSDhfgEaZvpeXunKdn/jI3oFfYUoi8xwt0BX+2ZOh/FIT2f24NFFTpD5f5bDQ7kvCLVleBJgvbtMvWQCQbjcMF0WwcB4h8gBuKGqeJuNI3fm6BB4si1bT82MXh18gDmmZw7+OBy2UyDzQGgr3SRQ5wDGwvGAcQhTYiJMt1/X1e8PEApFBdDxHKA5ClaY2GLkvnAST74BAhOYROcikPfDwAMWkkQzYPgMuLen2iBZI2D4SI+FktQBch8DaDv563UIMIhNBFuDEOQDclBvmBkRhF+3xrYE5PJpN6kh7nYA3gia0l8vmzjKEDPzi/AnwuC2QpAFv0ufyLF11X1xOl/BnnokLfspHIZ50CixKBou0/bw1UlxXE/Jnb5D0S+axuKIY4zuaBX1oJ4AGNE87zwOeSyTwwcHggCUucwN44ZQDg+oOQHQ9AhA4BgMxNF4CoG0lPPGBonDg9AHof1xyuQsYEHkCNKowiZKcCYMwNx7TE/7LWPxhAITqSYnZMi0a+iPxXgAEA05eM0br5Y0YAAAAASUVORK5CYII=";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

GM_addStyle(__webpack_require__(/*! ./styles/monkey.scss */ "./src/styles/monkey.scss"));
// GM_log(GM_addStyle, require('./styles/style.scss'))
const classNameCompatibilityList = ['browser_compatibility', '浏览器兼容性'];
const createLink = __webpack_require__(/*! ./button.ts */ "./src/button.ts");
(function () {
    const reg = /[\u4e00-\u9fa5\(\)\:\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5]/g;
    const title = document.querySelector('.main-page-content');
    const keyword = title.querySelector('h1').innerText.replace(reg, '');
    let compatibilityDom;
    for (let i = 0; i < classNameCompatibilityList.length; i++) {
        compatibilityDom = document.querySelector(`h2#${classNameCompatibilityList[i]}`);
        if (compatibilityDom) {
            break;
        }
    }
    const link = createLink(keyword);
    if (compatibilityDom) {
        compatibilityDom.append(link);
    }
    else {
        title.prepend(link);
    }
})();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2stdGFtcGVybW9ua2V5Ly4vc3JjL3N0eWxlcy9tb25rZXkuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRhbXBlcm1vbmtleS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10YW1wZXJtb25rZXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRhbXBlcm1vbmtleS8uL3NyYy9zdHlsZXMvbW9ua2V5LnNjc3M/ZGU2YiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRhbXBlcm1vbmtleS8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10YW1wZXJtb25rZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10YW1wZXJtb25rZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10YW1wZXJtb25rZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGFtcGVybW9ua2V5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10YW1wZXJtb25rZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRhbXBlcm1vbmtleS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saW5rQnRue2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDozMHB4O21hcmdpbi1sZWZ0OjEwcHg7d2lkdGg6MzBweH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21vbmtleS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBSUksY0FBQSxDQUhBLG9CQUFBLENBRUEsV0FBQSxDQUVBLGdCQUFBLENBSEEsVUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlua0J0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb25rZXkuc2Nzc1wiKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5fX2VzTW9kdWxlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsoa2V5d29yZCkge1xuICAgIGNvbnN0IGltZyA9IHJlcXVpcmUoJy4vZmF2aWNvbi0xMjgucG5nJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmtCdG4nKTtcbiAgICBsaW5rLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aW1nfVwiPiA8L2ltZz5gO1xuICAgIGxpbmsuaHJlZiA9IGBodHRwczovL2Nhbml1c2UuY29tLz9zZWFyY2g9JHtrZXl3b3JkfWA7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICByZXR1cm4gbGluaztcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTGluaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbkdNX2FkZFN0eWxlKHJlcXVpcmUoJy4vc3R5bGVzL21vbmtleS5zY3NzJykpO1xuLy8gR01fbG9nKEdNX2FkZFN0eWxlLCByZXF1aXJlKCcuL3N0eWxlcy9zdHlsZS5zY3NzJykpXG5jb25zdCBjbGFzc05hbWVDb21wYXRpYmlsaXR5TGlzdCA9IFsnYnJvd3Nlcl9jb21wYXRpYmlsaXR5JywgJ+a1j+iniOWZqOWFvOWuueaApyddO1xuY29uc3QgY3JlYXRlTGluayA9IHJlcXVpcmUoJy4vYnV0dG9uLnRzJyk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJlZyA9IC9bXFx1NGUwMC1cXHU5ZmE1XFwoXFwpXFw6XFx1MzAwMlxcdWZmMWZcXHVmZjAxXFx1ZmYwY1xcdTMwMDFcXHVmZjFiXFx1ZmYxYVxcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTlcXHVmZjA4XFx1ZmYwOVxcdTMwMGFcXHUzMDBiXFx1MzAwOFxcdTMwMDlcXHUzMDEwXFx1MzAxMVxcdTMwMGVcXHUzMDBmXFx1MzAwY1xcdTMwMGRcXHVmZTQzXFx1ZmU0NFxcdTMwMTRcXHUzMDE1XFx1MjAyNlxcdTIwMTRcXHVmZjVlXFx1ZmU0ZlxcdWZmZTVdL2c7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlLWNvbnRlbnQnKTtcbiAgICBjb25zdCBrZXl3b3JkID0gdGl0bGUucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQucmVwbGFjZShyZWcsICcnKTtcbiAgICBsZXQgY29tcGF0aWJpbGl0eURvbTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZUNvbXBhdGliaWxpdHlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXBhdGliaWxpdHlEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBoMiMke2NsYXNzTmFtZUNvbXBhdGliaWxpdHlMaXN0W2ldfWApO1xuICAgICAgICBpZiAoY29tcGF0aWJpbGl0eURvbSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGluayA9IGNyZWF0ZUxpbmsoa2V5d29yZCk7XG4gICAgaWYgKGNvbXBhdGliaWxpdHlEb20pIHtcbiAgICAgICAgY29tcGF0aWJpbGl0eURvbS5hcHBlbmQobGluayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aXRsZS5wcmVwZW5kKGxpbmspO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=