(function() {
var exports = {};
exports.id = "pages/posts/country";
exports.ids = ["pages/posts/country"];
exports.modules = {

/***/ "./pages/posts/country.js":
/*!********************************!*\
  !*** ./pages/posts/country.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\salm9\\Documents\\JS_Progs\\salman-proj\\pages\\posts\\country.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import SimpleListMenu from '../menu/SimpleMenuListMenu'; // < Material UI element

let rows = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan (Province of China)", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
class MyTable extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "createTable", () => {
      let table = [];

      for (let i = 0; i < rows.length; i++) {
        let children = [];
        children.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          style: {
            border: '1px solid black'
          },
          children: rows[i]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, this));
        table.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 18
        }, this));
      }

      return table;
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      style: {
        border: '1px solid black'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        children: "Country Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }, this), this.createTable()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/posts/country.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxtYW4tcHJvai8uL3BhZ2VzL3Bvc3RzL2NvdW50cnkuanMiLCJ3ZWJwYWNrOi8vc2FsbWFuLXByb2ovZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbG1hbi1wcm9qL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicm93cyIsIk15VGFibGUiLCJSZWFjdCIsInRhYmxlIiwiaSIsImxlbmd0aCIsImNoaWxkcmVuIiwicHVzaCIsImJvcmRlciIsInJlbmRlciIsImNyZWF0ZVRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLElBQUlBLElBQUksR0FBRyxDQUNULGFBRFMsRUFFVCxlQUZTLEVBR1QsU0FIUyxFQUlULFNBSlMsRUFLVCxnQkFMUyxFQU1ULFNBTlMsRUFPVCxRQVBTLEVBUVQsVUFSUyxFQVNULFlBVFMsRUFVVCxxQkFWUyxFQVdULFdBWFMsRUFZVCxTQVpTLEVBYVQsT0FiUyxFQWNULFdBZFMsRUFlVCxTQWZTLEVBZ0JULFlBaEJTLEVBaUJULGVBakJTLEVBa0JULFNBbEJTLEVBbUJULFlBbkJTLEVBb0JULFVBcEJTLEVBcUJULFNBckJTLEVBc0JULFNBdEJTLEVBdUJULFFBdkJTLEVBd0JULE9BeEJTLEVBeUJULFNBekJTLEVBMEJULFFBMUJTLEVBMkJULGtDQTNCUyxFQTRCVCxrQ0E1QlMsRUE2QlQsd0JBN0JTLEVBOEJULFVBOUJTLEVBK0JULGVBL0JTLEVBZ0NULFFBaENTLEVBaUNULHNDQWpDUyxFQWtDVCxtQkFsQ1MsRUFtQ1QsVUFuQ1MsRUFvQ1QsY0FwQ1MsRUFxQ1QsU0FyQ1MsRUFzQ1QsWUF0Q1MsRUF1Q1QsVUF2Q1MsRUF3Q1QsVUF4Q1MsRUF5Q1QsUUF6Q1MsRUEwQ1Qsc0JBMUNTLEVBMkNULGdDQTNDUyxFQTRDVCxNQTVDUyxFQTZDVCxPQTdDUyxFQThDVCxPQTlDUyxFQStDVCxrQkEvQ1MsRUFnRFQsK0JB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QUFULGVBQWM7QUFBSSxlQUFLLEVBQUU7QUFBQ0Msa0JBQU0sRUFBRTtBQUFULFdBQVg7QUFBQSxvQkFBeUNSLElBQUksQ0FBQ0ksQ0FBRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFkO0FBQ0FELGFBQUssQ0FBQ0ksSUFBTixlQUFXO0FBQUEsb0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWDtBQUNEOztBQUNELGFBQU9ILEtBQVA7QUFFRCxLQVprRDtBQUFBOztBQWNuRE0sUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBTyxXQUFLLEVBQUU7QUFBQ0QsY0FBTSxFQUFFO0FBQVQsT0FBZDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRyxLQUFLRSxXQUFMLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFyQmtELEM7Ozs7Ozs7Ozs7O0FDL1ByRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb3N0cy9jb3VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9pbXBvcnQgU2ltcGxlTGlzdE1lbnUgZnJvbSAnLi4vbWVudS9TaW1wbGVNZW51TGlzdE1lbnUnOyAvLyA8IE1hdGVyaWFsIFVJIGVsZW1lbnRcclxuXHJcbmxldCByb3dzID0gW1xyXG4gIFwiQWZnaGFuaXN0YW5cIixcclxuICBcIsOFbGFuZCBJc2xhbmRzXCIsXHJcbiAgXCJBbGJhbmlhXCIsXHJcbiAgXCJBbGdlcmlhXCIsXHJcbiAgXCJBbWVyaWNhbiBTYW1vYVwiLFxyXG4gIFwiQW5kb3JyYVwiLFxyXG4gIFwiQW5nb2xhXCIsXHJcbiAgXCJBbmd1aWxsYVwiLFxyXG4gIFwiQW50YXJjdGljYVwiLFxyXG4gIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFxyXG4gIFwiQXJnZW50aW5hXCIsXHJcbiAgXCJBcm1lbmlhXCIsXHJcbiAgXCJBcnViYVwiLFxyXG4gIFwiQXVzdHJhbGlhXCIsXHJcbiAgXCJBdXN0cmlhXCIsXHJcbiAgXCJBemVyYmFpamFuXCIsXHJcbiAgXCJCYWhhbWFzICh0aGUpXCIsXHJcbiAgXCJCYWhyYWluXCIsXHJcbiAgXCJCYW5nbGFkZXNoXCIsXHJcbiAgXCJCYXJiYWRvc1wiLFxyXG4gIFwiQmVsYXJ1c1wiLFxyXG4gIFwiQmVsZ2l1bVwiLFxyXG4gIFwiQmVsaXplXCIsXHJcbiAgXCJCZW5pblwiLFxyXG4gIFwiQmVybXVkYVwiLFxyXG4gIFwiQmh1dGFuXCIsXHJcbiAgXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwiLFxyXG4gIFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIixcclxuICBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcclxuICBcIkJvdHN3YW5hXCIsXHJcbiAgXCJCb3V2ZXQgSXNsYW5kXCIsXHJcbiAgXCJCcmF6aWxcIixcclxuICBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKVwiLFxyXG4gIFwiQnJ1bmVpIERhcnVzc2FsYW1cIixcclxuICBcIkJ1bGdhcmlhXCIsXHJcbiAgXCJCdXJraW5hIEZhc29cIixcclxuICBcIkJ1cnVuZGlcIixcclxuICBcIkNhYm8gVmVyZGVcIixcclxuICBcIkNhbWJvZGlhXCIsXHJcbiAgXCJDYW1lcm9vblwiLFxyXG4gIFwiQ2FuYWRhXCIsXHJcbiAgXCJDYXltYW4gSXNsYW5kcyAodGhlKVwiLFxyXG4gIFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpXCIsXHJcbiAgXCJDaGFkXCIsXHJcbiAgXCJDaGlsZVwiLFxyXG4gIFwiQ2hpbmFcIixcclxuICBcIkNocmlzdG1hcyBJc2xhbmRcIixcclxuICBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpXCIsXHJcbiAgXCJDb2xvbWJpYVwiLFxyXG4gIFwiQ29tb3JvcyAodGhlKVwiLFxyXG4gIFwiQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIixcclxuICBcIkNvbmdvICh0aGUpXCIsXHJcbiAgXCJDb29rIElzbGFuZHMgKHRoZSlcIixcclxuICBcIkNvc3RhIFJpY2FcIixcclxuICBcIkNyb2F0aWFcIixcclxuICBcIkN1YmFcIixcclxuICBcIkN1cmHDp2FvXCIsXHJcbiAgXCJDeXBydXNcIixcclxuICBcIkN6ZWNoaWFcIixcclxuICBcIkPDtHRlIGQnSXZvaXJlXCIsXHJcbiAgXCJEZW5tYXJrXCIsXHJcbiAgXCJEamlib3V0aVwiLFxyXG4gIFwiRG9taW5pY2FcIixcclxuICBcIkRvbWluaWNhbiBSZXB1YmxpYyAodGhlKVwiLFxyXG4gIFwiRWN1YWRvclwiLFxyXG4gIFwiRWd5cHRcIixcclxuICBcIkVsIFNhbHZhZG9yXCIsXHJcbiAgXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxyXG4gIFwiRXJpdHJlYVwiLFxyXG4gIFwiRXN0b25pYVwiLFxyXG4gIFwiRXN3YXRpbmlcIixcclxuICBcIkV0aGlvcGlhXCIsXHJcbiAgXCJGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc11cIixcclxuICBcIkZhcm9lIElzbGFuZHMgKHRoZSlcIixcclxuICBcIkZpamlcIixcclxuICBcIkZpbmxhbmRcIixcclxuICBcIkZyYW5jZVwiLFxyXG4gIFwiRnJlbmNoIEd1aWFuYVwiLFxyXG4gIFwiRnJlbmNoIFBvbHluZXNpYVwiLFxyXG4gIFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpXCIsXHJcbiAgXCJHYWJvblwiLFxyXG4gIFwiR2FtYmlhICh0aGUpXCIsXHJcbiAgXCJHZW9yZ2lhXCIsXHJcbiAgXCJHZXJtYW55XCIsXHJcbiAgXCJHaGFuYVwiLFxyXG4gIFwiR2licmFsdGFyXCIsXHJcbiAgXCJHcmVlY2VcIixcclxuICBcIkdyZWVubGFuZFwiLFxyXG4gIFwiR3JlbmFkYVwiLFxyXG4gIFwiR3VhZGVsb3VwZVwiLFxyXG4gIFwiR3VhbVwiLFxyXG4gIFwiR3VhdGVtYWxhXCIsXHJcbiAgXCJHdWVybnNleVwiLFxyXG4gIFwiR3VpbmVhXCIsXHJcbiAgXCJHdWluZWEtQmlzc2F1XCIsXHJcbiAgXCJHdXlhbmFcIixcclxuICBcIkhhaXRpXCIsXHJcbiAgXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcclxuICBcIkhvbHkgU2VlICh0aGUpXCIsXHJcbiAgXCJIb25kdXJhc1wiLFxyXG4gIFwiSG9uZyBLb25nXCIsXHJcbiAgXCJIdW5nYXJ5XCIsXHJcbiAgXCJJY2VsYW5kXCIsXHJcbiAgXCJJbmRpYVwiLFxyXG4gIFwiSW5kb25lc2lhXCIsXHJcbiAgXCJJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKVwiLFxyXG4gIFwiSXJhcVwiLFxyXG4gIFwiSXJlbGFuZFwiLFxyXG4gIFwiSXNsZSBvZiBNYW5cIixcclxuICBcIklzcmFlbFwiLFxyXG4gIFwiSXRhbHlcIixcclxuICBcIkphbWFpY2FcIixcclxuICBcIkphcGFuXCIsXHJcbiAgXCJKZXJzZXlcIixcclxuICBcIkpvcmRhblwiLFxyXG4gIFwiS2F6YWtoc3RhblwiLFxyXG4gIFwiS2VueWFcIixcclxuICBcIktpcmliYXRpXCIsXHJcbiAgXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXHJcbiAgXCJLb3JlYSAodGhlIFJlcHVibGljIG9mKVwiLFxyXG4gIFwiS3V3YWl0XCIsXHJcbiAgXCJLeXJneXpzdGFuXCIsXHJcbiAgXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYyAodGhlKVwiLFxyXG4gIFwiTGF0dmlhXCIsXHJcbiAgXCJMZWJhbm9uXCIsXHJcbiAgXCJMZXNvdGhvXCIsXHJcbiAgXCJMaWJlcmlhXCIsXHJcbiAgXCJMaWJ5YVwiLFxyXG4gIFwiTGllY2h0ZW5zdGVpblwiLFxyXG4gIFwiTGl0aHVhbmlhXCIsXHJcbiAgXCJMdXhlbWJvdXJnXCIsXHJcbiAgXCJNYWNhb1wiLFxyXG4gIFwiTWFkYWdhc2NhclwiLFxyXG4gIFwiTWFsYXdpXCIsXHJcbiAgXCJNYWxheXNpYVwiLFxyXG4gIFwiTWFsZGl2ZXNcIixcclxuICBcIk1hbGlcIixcclxuICBcIk1hbHRhXCIsXHJcbiAgXCJNYXJzaGFsbCBJc2xhbmRzICh0aGUpXCIsXHJcbiAgXCJNYXJ0aW5pcXVlXCIsXHJcbiAgXCJNYXVyaXRhbmlhXCIsXHJcbiAgXCJNYXVyaXRpdXNcIixcclxuICBcIk1heW90dGVcIixcclxuICBcIk1leGljb1wiLFxyXG4gIFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIixcclxuICBcIk1vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZilcIixcclxuICBcIk1vbmFjb1wiLFxyXG4gIFwiTW9uZ29saWFcIixcclxuICBcIk1vbnRlbmVncm9cIixcclxuICBcIk1vbnRzZXJyYXRcIixcclxuICBcIk1vcm9jY29cIixcclxuICBcIk1vemFtYmlxdWVcIixcclxuICBcIk15YW5tYXJcIixcclxuICBcIk5hbWliaWFcIixcclxuICBcIk5hdXJ1XCIsXHJcbiAgXCJOZXBhbFwiLFxyXG4gIFwiTmV0aGVybGFuZHMgKHRoZSlcIixcclxuICBcIk5ldyBDYWxlZG9uaWFcIixcclxuICBcIk5ldyBaZWFsYW5kXCIsXHJcbiAgXCJOaWNhcmFndWFcIixcclxuICBcIk5pZ2VyICh0aGUpXCIsXHJcbiAgXCJOaWdlcmlhXCIsXHJcbiAgXCJOaXVlXCIsXHJcbiAgXCJOb3Jmb2xrIElzbGFuZFwiLFxyXG4gIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpXCIsXHJcbiAgXCJOb3J3YXlcIixcclxuICBcIk9tYW5cIixcclxuICBcIlBha2lzdGFuXCIsXHJcbiAgXCJQYWxhdVwiLFxyXG4gIFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFxyXG4gIFwiUGFuYW1hXCIsXHJcbiAgXCJQYXB1YSBOZXcgR3VpbmVhXCIsXHJcbiAgXCJQYXJhZ3VheVwiLFxyXG4gIFwiUGVydVwiLFxyXG4gIFwiUGhpbGlwcGluZXMgKHRoZSlcIixcclxuICBcIlBpdGNhaXJuXCIsXHJcbiAgXCJQb2xhbmRcIixcclxuICBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJQdWVydG8gUmljb1wiLFxyXG4gIFwiUWF0YXJcIixcclxuICBcIlJlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYVwiLFxyXG4gIFwiUm9tYW5pYVwiLFxyXG4gIFwiUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpXCIsXHJcbiAgXCJSd2FuZGFcIixcclxuICBcIlLDqXVuaW9uXCIsXHJcbiAgXCJTYWludCBCYXJ0aMOpbGVteVwiLFxyXG4gIFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIixcclxuICBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxyXG4gIFwiU2FpbnQgTHVjaWFcIixcclxuICBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsXHJcbiAgXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXHJcbiAgXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFxyXG4gIFwiU2Ftb2FcIixcclxuICBcIlNhbiBNYXJpbm9cIixcclxuICBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxyXG4gIFwiU2F1ZGkgQXJhYmlhXCIsXHJcbiAgXCJTZW5lZ2FsXCIsXHJcbiAgXCJTZXJiaWFcIixcclxuICBcIlNleWNoZWxsZXNcIixcclxuICBcIlNpZXJyYSBMZW9uZVwiLFxyXG4gIFwiU2luZ2Fwb3JlXCIsXHJcbiAgXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsXHJcbiAgXCJTbG92YWtpYVwiLFxyXG4gIFwiU2xvdmVuaWFcIixcclxuICBcIlNvbG9tb24gSXNsYW5kc1wiLFxyXG4gIFwiU29tYWxpYVwiLFxyXG4gIFwiU291dGggQWZyaWNhXCIsXHJcbiAgXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLFxyXG4gIFwiU291dGggU3VkYW5cIixcclxuICBcIlNwYWluXCIsXHJcbiAgXCJTcmkgTGFua2FcIixcclxuICBcIlN1ZGFuICh0aGUpXCIsXHJcbiAgXCJTdXJpbmFtZVwiLFxyXG4gIFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLFxyXG4gIFwiU3dlZGVuXCIsXHJcbiAgXCJTd2l0emVybGFuZFwiLFxyXG4gIFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIixcclxuICBcIlRhaXdhbiAoUHJvdmluY2Ugb2YgQ2hpbmEpXCIsXHJcbiAgXCJUYWppa2lzdGFuXCIsXHJcbiAgXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXHJcbiAgXCJUaGFpbGFuZFwiLFxyXG4gIFwiVGltb3ItTGVzdGVcIixcclxuICBcIlRvZ29cIixcclxuICBcIlRva2VsYXVcIixcclxuICBcIlRvbmdhXCIsXHJcbiAgXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXHJcbiAgXCJUdW5pc2lhXCIsXHJcbiAgXCJUdXJrZXlcIixcclxuICBcIlR1cmttZW5pc3RhblwiLFxyXG4gIFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpXCIsXHJcbiAgXCJUdXZhbHVcIixcclxuICBcIlVnYW5kYVwiLFxyXG4gIFwiVWtyYWluZVwiLFxyXG4gIFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSlcIixcclxuICBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSlcIixcclxuICBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKVwiLFxyXG4gIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpXCIsXHJcbiAgXCJVcnVndWF5XCIsXHJcbiAgXCJVemJla2lzdGFuXCIsXHJcbiAgXCJWYW51YXR1XCIsXHJcbiAgXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCIsXHJcbiAgXCJWaWV0IE5hbVwiLFxyXG4gIFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCIsXHJcbiAgXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIixcclxuICBcIldhbGxpcyBhbmQgRnV0dW5hXCIsXHJcbiAgXCJXZXN0ZXJuIFNhaGFyYVwiLFxyXG4gIFwiWWVtZW5cIixcclxuICBcIlphbWJpYVwiLFxyXG4gIFwiWmltYmFid2VcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNyZWF0ZVRhYmxlID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB0YWJsZSA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNoaWxkcmVuID0gW11cclxuICAgICAgY2hpbGRyZW4ucHVzaCg8dGQgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgYmxhY2snfX0+e3Jvd3NbaV19PC90ZD4pXHJcbiAgICAgIHRhYmxlLnB1c2goPHRyPntjaGlsZHJlbn08L3RyPilcclxuICAgIH1cclxuICAgIHJldHVybiB0YWJsZVxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgPHRhYmxlIHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ319PlxyXG4gICAgICAgIDx0aD5Db3VudHJ5IE5hbWU8L3RoPlxyXG4gICAgICAgIHt0aGlzLmNyZWF0ZVRhYmxlKCl9XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApXHJcbiAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=