self["webpackHotUpdate_N_E"]("pages/posts/build-table",{

/***/ "./pages/posts/build-table.js":
/*!************************************!*\
  !*** ./pages/posts/build-table.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BasicTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\salm9\\Documents\\JS_Progs\\salman-proj\\pages\\posts\\build-table.js",
    _s = $RefreshSig$();










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 200
  }
});

function createCountry(abv, name) {
  return {
    abv: abv,
    name: name
  };
}

var rows = [createCountry('AF', 'Afghanistan'), createCountry('AX', 'Åland Islands')
/*"AL": "Albania",
"DZ": "Algeria",
"AS": "American Samoa",
"AD": "Andorra",
"AO": "Angola",
"AI": "Anguilla",
"AQ": "Antarctica",
"AG": "Antigua and Barbuda",
"AR": "Argentina",
"AM": "Armenia",
"AW": "Aruba",
"AU": "Australia",
"AT": "Austria",
"AZ": "Azerbaijan",
"BS": "Bahamas (the)",
"BH": "Bahrain",
"BD": "Bangladesh",
"BB": "Barbados",
"BY": "Belarus",
"BE": "Belgium",
"BZ": "Belize",
"BJ": "Benin",
"BM": "Bermuda",
"BT": "Bhutan",
"BO": "Bolivia (Plurinational State of)",
"BQ": "Bonaire, Sint Eustatius and Saba",
"BA": "Bosnia and Herzegovina",
"BW": "Botswana",
"BV": "Bouvet Island",
"BR": "Brazil",
"IO": "British Indian Ocean Territory (the)",
"BN": "Brunei Darussalam",
"BG": "Bulgaria",
"BF": "Burkina Faso",
"BI": "Burundi",
"CV": "Cabo Verde",
"KH": "Cambodia",
"CM": "Cameroon",
"CA": "Canada",
"KY": "Cayman Islands (the)",
"CF": "Central African Republic (the)",
"TD": "Chad",
"CL": "Chile",
"CN": "China",
"CX": "Christmas Island",
"CC": "Cocos (Keeling) Islands (the)",
"CO": "Colombia",
"KM": "Comoros (the)",
"CD": "Congo (the Democratic Republic of the)",
"CG": "Congo (the)",
"CK": "Cook Islands (the)",
"CR": "Costa Rica",
"HR": "Croatia",
"CU": "Cuba",
"CW": "Curaçao",
"CY": "Cyprus",
"CZ": "Czechia",
"CI": "Côte d'Ivoire",
"DK": "Denmark",
"DJ": "Djibouti",
"DM": "Dominica",
"DO": "Dominican Republic (the)",
"EC": "Ecuador",
"EG": "Egypt",
"SV": "El Salvador",
"GQ": "Equatorial Guinea",
"ER": "Eritrea",
"EE": "Estonia",
"SZ": "Eswatini",
"ET": "Ethiopia",
"FK": "Falkland Islands (the) [Malvinas]",
"FO": "Faroe Islands (the)",
"FJ": "Fiji",
"FI": "Finland",
"FR": "France",
"GF": "French Guiana",
"PF": "French Polynesia",
"TF": "French Southern Territories (the)",
"GA": "Gabon",
"GM": "Gambia (the)",
"GE": "Georgia",
"DE": "Germany",
"GH": "Ghana",
"GI": "Gibraltar",
"GR": "Greece",
"GL": "Greenland",
"GD": "Grenada",
"GP": "Guadeloupe",
"GU": "Guam",
"GT": "Guatemala",
"GG": "Guernsey",
"GN": "Guinea",
"GW": "Guinea-Bissau",
"GY": "Guyana",
"HT": "Haiti",
"HM": "Heard Island and McDonald Islands",
"VA": "Holy See (the)",
"HN": "Honduras",
"HK": "Hong Kong",
"HU": "Hungary",
"IS": "Iceland",
"IN": "India",
"ID": "Indonesia",
"IR": "Iran (Islamic Republic of)",
"IQ": "Iraq",
"IE": "Ireland",
"IM": "Isle of Man",
"IL": "Israel",
"IT": "Italy",
"JM": "Jamaica",
"JP": "Japan",
"JE": "Jersey",
"JO": "Jordan",
"KZ": "Kazakhstan",
"KE": "Kenya",
"KI": "Kiribati",
"KP": "Korea (the Democratic People's Republic of)",
"KR": "Korea (the Republic of)",
"KW": "Kuwait",
"KG": "Kyrgyzstan",
"LA": "Lao People's Democratic Republic (the)",
"LV": "Latvia",
"LB": "Lebanon",
"LS": "Lesotho",
"LR": "Liberia",
"LY": "Libya",
"LI": "Liechtenstein",
"LT": "Lithuania",
"LU": "Luxembourg",
"MO": "Macao",
"MG": "Madagascar",
"MW": "Malawi",
"MY": "Malaysia",
"MV": "Maldives",
"ML": "Mali",
"MT": "Malta",
"MH": "Marshall Islands (the)",
"MQ": "Martinique",
"MR": "Mauritania",
"MU": "Mauritius",
"YT": "Mayotte",
"MX": "Mexico",
"FM": "Micronesia (Federated States of)",
"MD": "Moldova (the Republic of)",
"MC": "Monaco",
"MN": "Mongolia",
"ME": "Montenegro",
"MS": "Montserrat",
"MA": "Morocco",
"MZ": "Mozambique",
"MM": "Myanmar",
"NA": "Namibia",
"NR": "Nauru",
"NP": "Nepal",
"NL": "Netherlands (the)",
"NC": "New Caledonia",
"NZ": "New Zealand",
"NI": "Nicaragua",
"NE": "Niger (the)",
"NG": "Nigeria",
"NU": "Niue",
"NF": "Norfolk Island",
"MP": "Northern Mariana Islands (the)",
"NO": "Norway",
"OM": "Oman",
"PK": "Pakistan",
"PW": "Palau",
"PS": "Palestine, State of",
"PA": "Panama",
"PG": "Papua New Guinea",
"PY": "Paraguay",
"PE": "Peru",
"PH": "Philippines (the)",
"PN": "Pitcairn",
"PL": "Poland",
"PT": "Portugal",
"PR": "Puerto Rico",
"QA": "Qatar",
"MK": "Republic of North Macedonia",
"RO": "Romania",
"RU": "Russian Federation (the)",
"RW": "Rwanda",
"RE": "Réunion",
"BL": "Saint Barthélemy",
"SH": "Saint Helena, Ascension and Tristan da Cunha",
"KN": "Saint Kitts and Nevis",
"LC": "Saint Lucia",
"MF": "Saint Martin (French part)",
"PM": "Saint Pierre and Miquelon",
"VC": "Saint Vincent and the Grenadines",
"WS": "Samoa",
"SM": "San Marino",
"ST": "Sao Tome and Principe",
"SA": "Saudi Arabia",
"SN": "Senegal",
"RS": "Serbia",
"SC": "Seychelles",
"SL": "Sierra Leone",
"SG": "Singapore",
"SX": "Sint Maarten (Dutch part)",
"SK": "Slovakia",
"SI": "Slovenia",
"SB": "Solomon Islands",
"SO": "Somalia",
"ZA": "South Africa",
"GS": "South Georgia and the South Sandwich Islands",
"SS": "South Sudan",
"ES": "Spain",
"LK": "Sri Lanka",
"SD": "Sudan (the)",
"SR": "Suriname",
"SJ": "Svalbard and Jan Mayen",
"SE": "Sweden",
"CH": "Switzerland",
"SY": "Syrian Arab Republic",
"TW": "Taiwan (Province of China)",
"TJ": "Tajikistan",
"TZ": "Tanzania, United Republic of",
"TH": "Thailand",
"TL": "Timor-Leste",
"TG": "Togo",
"TK": "Tokelau",
"TO": "Tonga",
"TT": "Trinidad and Tobago",
"TN": "Tunisia",
"TR": "Turkey",
"TM": "Turkmenistan",
"TC": "Turks and Caicos Islands (the)",
"TV": "Tuvalu",
"UG": "Uganda",
"UA": "Ukraine",
"AE": "United Arab Emirates (the)",
"GB": "United Kingdom of Great Britain and Northern Ireland (the)",
"UM": "United States Minor Outlying Islands (the)",
"US": "United States of America (the)",
"UY": "Uruguay",
"UZ": "Uzbekistan",
"VU": "Vanuatu",
"VE": "Venezuela (Bolivarian Republic of)",
"VN": "Viet Nam",
"VG": "Virgin Islands (British)",
"VI": "Virgin Islands (U.S.)",
"WF": "Wallis and Futuna",
"EH": "Western Sahara",
"YE": "Yemen",
"ZM": "Zambia",
"ZW": "Zimbabwe" */
];
function BasicTable() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: "Country Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 5
  }, this);
}

_s(BasicTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = BasicTable;

var _c;

$RefreshReg$(_c, "BasicTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJjcmVhdGVDb3VudHJ5IiwiYWJ2IiwibmFtZSIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIlBhcGVyIiwibWFwIiwicm93IiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETDtBQURvQixDQUFELENBQTVCOztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQyxTQUFPO0FBQUVELE9BQUcsRUFBSEEsR0FBRjtBQUFPQyxRQUFJLEVBQUpBO0FBQVAsR0FBUDtBQUNEOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNUSCxhQUFhLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FESixFQUVUQSxhQUFhLENBQUMsSUFBRCxFQUFPLGVBQVA7QUFDYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpQYSxDQUFiO0FBNFBlLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFVSw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRUQsT0FBTyxDQUFDUCxLQUExQjtBQUFpQyxvQkFBVyxjQUE1QztBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxpQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSw4REFBQyxnRUFBRDtBQUFBLGtCQUNHSyxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsOEJBQ1IsOERBQUMsK0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFXLHVCQUFTLEVBQUMsSUFBckI7QUFBMEIsbUJBQUssRUFBQyxLQUFoQztBQUFBLHdCQUNHQSxHQUFHLENBQUNOO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQk0sR0FBRyxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0UsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCRCxHQUFHLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJGLEdBQUcsQ0FBQ0c7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQkgsR0FBRyxDQUFDSTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUEsYUFBZUosR0FBRyxDQUFDTixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBM0J1QkUsVTtVQUNOUixTOzs7S0FETVEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9idWlsZC10YWJsZS40NWUwNDY5NDU1ZjhiMmEwZjlhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnkoYWJ2LCBuYW1lKSB7XHJcbiAgcmV0dXJuIHsgYWJ2LCBuYW1lIH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRicsICdBZmdoYW5pc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQVgnLCAnw4VsYW5kIElzbGFuZHMnKSxcclxuICAgIC8qXCJBTFwiOiBcIkFsYmFuaWFcIixcclxuICAgIFwiRFpcIjogXCJBbGdlcmlhXCIsXHJcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcclxuICAgIFwiQURcIjogXCJBbmRvcnJhXCIsXHJcbiAgICBcIkFPXCI6IFwiQW5nb2xhXCIsXHJcbiAgICBcIkFJXCI6IFwiQW5ndWlsbGFcIixcclxuICAgIFwiQVFcIjogXCJBbnRhcmN0aWNhXCIsXHJcbiAgICBcIkFHXCI6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFxyXG4gICAgXCJBUlwiOiBcIkFyZ2VudGluYVwiLFxyXG4gICAgXCJBTVwiOiBcIkFybWVuaWFcIixcclxuICAgIFwiQVdcIjogXCJBcnViYVwiLFxyXG4gICAgXCJBVVwiOiBcIkF1c3RyYWxpYVwiLFxyXG4gICAgXCJBVFwiOiBcIkF1c3RyaWFcIixcclxuICAgIFwiQVpcIjogXCJBemVyYmFpamFuXCIsXHJcbiAgICBcIkJTXCI6IFwiQmFoYW1hcyAodGhlKVwiLFxyXG4gICAgXCJCSFwiOiBcIkJhaHJhaW5cIixcclxuICAgIFwiQkRcIjogXCJCYW5nbGFkZXNoXCIsXHJcbiAgICBcIkJCXCI6IFwiQmFyYmFkb3NcIixcclxuICAgIFwiQllcIjogXCJCZWxhcnVzXCIsXHJcbiAgICBcIkJFXCI6IFwiQmVsZ2l1bVwiLFxyXG4gICAgXCJCWlwiOiBcIkJlbGl6ZVwiLFxyXG4gICAgXCJCSlwiOiBcIkJlbmluXCIsXHJcbiAgICBcIkJNXCI6IFwiQmVybXVkYVwiLFxyXG4gICAgXCJCVFwiOiBcIkJodXRhblwiLFxyXG4gICAgXCJCT1wiOiBcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCIsXHJcbiAgICBcIkJRXCI6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIixcclxuICAgIFwiQkFcIjogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXHJcbiAgICBcIkJXXCI6IFwiQm90c3dhbmFcIixcclxuICAgIFwiQlZcIjogXCJCb3V2ZXQgSXNsYW5kXCIsXHJcbiAgICBcIkJSXCI6IFwiQnJhemlsXCIsXHJcbiAgICBcIklPXCI6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5ICh0aGUpXCIsXHJcbiAgICBcIkJOXCI6IFwiQnJ1bmVpIERhcnVzc2FsYW1cIixcclxuICAgIFwiQkdcIjogXCJCdWxnYXJpYVwiLFxyXG4gICAgXCJCRlwiOiBcIkJ1cmtpbmEgRmFzb1wiLFxyXG4gICAgXCJCSVwiOiBcIkJ1cnVuZGlcIixcclxuICAgIFwiQ1ZcIjogXCJDYWJvIFZlcmRlXCIsXHJcbiAgICBcIktIXCI6IFwiQ2FtYm9kaWFcIixcclxuICAgIFwiQ01cIjogXCJDYW1lcm9vblwiLFxyXG4gICAgXCJDQVwiOiBcIkNhbmFkYVwiLFxyXG4gICAgXCJLWVwiOiBcIkNheW1hbiBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIkNGXCI6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpXCIsXHJcbiAgICBcIlREXCI6IFwiQ2hhZFwiLFxyXG4gICAgXCJDTFwiOiBcIkNoaWxlXCIsXHJcbiAgICBcIkNOXCI6IFwiQ2hpbmFcIixcclxuICAgIFwiQ1hcIjogXCJDaHJpc3RtYXMgSXNsYW5kXCIsXHJcbiAgICBcIkNDXCI6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiQ09cIjogXCJDb2xvbWJpYVwiLFxyXG4gICAgXCJLTVwiOiBcIkNvbW9yb3MgKHRoZSlcIixcclxuICAgIFwiQ0RcIjogXCJDb25nbyAodGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwiLFxyXG4gICAgXCJDR1wiOiBcIkNvbmdvICh0aGUpXCIsXHJcbiAgICBcIkNLXCI6IFwiQ29vayBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIkNSXCI6IFwiQ29zdGEgUmljYVwiLFxyXG4gICAgXCJIUlwiOiBcIkNyb2F0aWFcIixcclxuICAgIFwiQ1VcIjogXCJDdWJhXCIsXHJcbiAgICBcIkNXXCI6IFwiQ3VyYcOnYW9cIixcclxuICAgIFwiQ1lcIjogXCJDeXBydXNcIixcclxuICAgIFwiQ1pcIjogXCJDemVjaGlhXCIsXHJcbiAgICBcIkNJXCI6IFwiQ8O0dGUgZCdJdm9pcmVcIixcclxuICAgIFwiREtcIjogXCJEZW5tYXJrXCIsXHJcbiAgICBcIkRKXCI6IFwiRGppYm91dGlcIixcclxuICAgIFwiRE1cIjogXCJEb21pbmljYVwiLFxyXG4gICAgXCJET1wiOiBcIkRvbWluaWNhbiBSZXB1YmxpYyAodGhlKVwiLFxyXG4gICAgXCJFQ1wiOiBcIkVjdWFkb3JcIixcclxuICAgIFwiRUdcIjogXCJFZ3lwdFwiLFxyXG4gICAgXCJTVlwiOiBcIkVsIFNhbHZhZG9yXCIsXHJcbiAgICBcIkdRXCI6IFwiRXF1YXRvcmlhbCBHdWluZWFcIixcclxuICAgIFwiRVJcIjogXCJFcml0cmVhXCIsXHJcbiAgICBcIkVFXCI6IFwiRXN0b25pYVwiLFxyXG4gICAgXCJTWlwiOiBcIkVzd2F0aW5pXCIsXHJcbiAgICBcIkVUXCI6IFwiRXRoaW9waWFcIixcclxuICAgIFwiRktcIjogXCJGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc11cIixcclxuICAgIFwiRk9cIjogXCJGYXJvZSBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIkZKXCI6IFwiRmlqaVwiLFxyXG4gICAgXCJGSVwiOiBcIkZpbmxhbmRcIixcclxuICAgIFwiRlJcIjogXCJGcmFuY2VcIixcclxuICAgIFwiR0ZcIjogXCJGcmVuY2ggR3VpYW5hXCIsXHJcbiAgICBcIlBGXCI6IFwiRnJlbmNoIFBvbHluZXNpYVwiLFxyXG4gICAgXCJURlwiOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcyAodGhlKVwiLFxyXG4gICAgXCJHQVwiOiBcIkdhYm9uXCIsXHJcbiAgICBcIkdNXCI6IFwiR2FtYmlhICh0aGUpXCIsXHJcbiAgICBcIkdFXCI6IFwiR2VvcmdpYVwiLFxyXG4gICAgXCJERVwiOiBcIkdlcm1hbnlcIixcclxuICAgIFwiR0hcIjogXCJHaGFuYVwiLFxyXG4gICAgXCJHSVwiOiBcIkdpYnJhbHRhclwiLFxyXG4gICAgXCJHUlwiOiBcIkdyZWVjZVwiLFxyXG4gICAgXCJHTFwiOiBcIkdyZWVubGFuZFwiLFxyXG4gICAgXCJHRFwiOiBcIkdyZW5hZGFcIixcclxuICAgIFwiR1BcIjogXCJHdWFkZWxvdXBlXCIsXHJcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxyXG4gICAgXCJHVFwiOiBcIkd1YXRlbWFsYVwiLFxyXG4gICAgXCJHR1wiOiBcIkd1ZXJuc2V5XCIsXHJcbiAgICBcIkdOXCI6IFwiR3VpbmVhXCIsXHJcbiAgICBcIkdXXCI6IFwiR3VpbmVhLUJpc3NhdVwiLFxyXG4gICAgXCJHWVwiOiBcIkd1eWFuYVwiLFxyXG4gICAgXCJIVFwiOiBcIkhhaXRpXCIsXHJcbiAgICBcIkhNXCI6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsXHJcbiAgICBcIlZBXCI6IFwiSG9seSBTZWUgKHRoZSlcIixcclxuICAgIFwiSE5cIjogXCJIb25kdXJhc1wiLFxyXG4gICAgXCJIS1wiOiBcIkhvbmcgS29uZ1wiLFxyXG4gICAgXCJIVVwiOiBcIkh1bmdhcnlcIixcclxuICAgIFwiSVNcIjogXCJJY2VsYW5kXCIsXHJcbiAgICBcIklOXCI6IFwiSW5kaWFcIixcclxuICAgIFwiSURcIjogXCJJbmRvbmVzaWFcIixcclxuICAgIFwiSVJcIjogXCJJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKVwiLFxyXG4gICAgXCJJUVwiOiBcIklyYXFcIixcclxuICAgIFwiSUVcIjogXCJJcmVsYW5kXCIsXHJcbiAgICBcIklNXCI6IFwiSXNsZSBvZiBNYW5cIixcclxuICAgIFwiSUxcIjogXCJJc3JhZWxcIixcclxuICAgIFwiSVRcIjogXCJJdGFseVwiLFxyXG4gICAgXCJKTVwiOiBcIkphbWFpY2FcIixcclxuICAgIFwiSlBcIjogXCJKYXBhblwiLFxyXG4gICAgXCJKRVwiOiBcIkplcnNleVwiLFxyXG4gICAgXCJKT1wiOiBcIkpvcmRhblwiLFxyXG4gICAgXCJLWlwiOiBcIkthemFraHN0YW5cIixcclxuICAgIFwiS0VcIjogXCJLZW55YVwiLFxyXG4gICAgXCJLSVwiOiBcIktpcmliYXRpXCIsXHJcbiAgICBcIktQXCI6IFwiS29yZWEgKHRoZSBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwiLFxyXG4gICAgXCJLUlwiOiBcIktvcmVhICh0aGUgUmVwdWJsaWMgb2YpXCIsXHJcbiAgICBcIktXXCI6IFwiS3V3YWl0XCIsXHJcbiAgICBcIktHXCI6IFwiS3lyZ3l6c3RhblwiLFxyXG4gICAgXCJMQVwiOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXHJcbiAgICBcIkxWXCI6IFwiTGF0dmlhXCIsXHJcbiAgICBcIkxCXCI6IFwiTGViYW5vblwiLFxyXG4gICAgXCJMU1wiOiBcIkxlc290aG9cIixcclxuICAgIFwiTFJcIjogXCJMaWJlcmlhXCIsXHJcbiAgICBcIkxZXCI6IFwiTGlieWFcIixcclxuICAgIFwiTElcIjogXCJMaWVjaHRlbnN0ZWluXCIsXHJcbiAgICBcIkxUXCI6IFwiTGl0aHVhbmlhXCIsXHJcbiAgICBcIkxVXCI6IFwiTHV4ZW1ib3VyZ1wiLFxyXG4gICAgXCJNT1wiOiBcIk1hY2FvXCIsXHJcbiAgICBcIk1HXCI6IFwiTWFkYWdhc2NhclwiLFxyXG4gICAgXCJNV1wiOiBcIk1hbGF3aVwiLFxyXG4gICAgXCJNWVwiOiBcIk1hbGF5c2lhXCIsXHJcbiAgICBcIk1WXCI6IFwiTWFsZGl2ZXNcIixcclxuICAgIFwiTUxcIjogXCJNYWxpXCIsXHJcbiAgICBcIk1UXCI6IFwiTWFsdGFcIixcclxuICAgIFwiTUhcIjogXCJNYXJzaGFsbCBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIk1RXCI6IFwiTWFydGluaXF1ZVwiLFxyXG4gICAgXCJNUlwiOiBcIk1hdXJpdGFuaWFcIixcclxuICAgIFwiTVVcIjogXCJNYXVyaXRpdXNcIixcclxuICAgIFwiWVRcIjogXCJNYXlvdHRlXCIsXHJcbiAgICBcIk1YXCI6IFwiTWV4aWNvXCIsXHJcbiAgICBcIkZNXCI6IFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIixcclxuICAgIFwiTURcIjogXCJNb2xkb3ZhICh0aGUgUmVwdWJsaWMgb2YpXCIsXHJcbiAgICBcIk1DXCI6IFwiTW9uYWNvXCIsXHJcbiAgICBcIk1OXCI6IFwiTW9uZ29saWFcIixcclxuICAgIFwiTUVcIjogXCJNb250ZW5lZ3JvXCIsXHJcbiAgICBcIk1TXCI6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgXCJNQVwiOiBcIk1vcm9jY29cIixcclxuICAgIFwiTVpcIjogXCJNb3phbWJpcXVlXCIsXHJcbiAgICBcIk1NXCI6IFwiTXlhbm1hclwiLFxyXG4gICAgXCJOQVwiOiBcIk5hbWliaWFcIixcclxuICAgIFwiTlJcIjogXCJOYXVydVwiLFxyXG4gICAgXCJOUFwiOiBcIk5lcGFsXCIsXHJcbiAgICBcIk5MXCI6IFwiTmV0aGVybGFuZHMgKHRoZSlcIixcclxuICAgIFwiTkNcIjogXCJOZXcgQ2FsZWRvbmlhXCIsXHJcbiAgICBcIk5aXCI6IFwiTmV3IFplYWxhbmRcIixcclxuICAgIFwiTklcIjogXCJOaWNhcmFndWFcIixcclxuICAgIFwiTkVcIjogXCJOaWdlciAodGhlKVwiLFxyXG4gICAgXCJOR1wiOiBcIk5pZ2VyaWFcIixcclxuICAgIFwiTlVcIjogXCJOaXVlXCIsXHJcbiAgICBcIk5GXCI6IFwiTm9yZm9sayBJc2xhbmRcIixcclxuICAgIFwiTVBcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiTk9cIjogXCJOb3J3YXlcIixcclxuICAgIFwiT01cIjogXCJPbWFuXCIsXHJcbiAgICBcIlBLXCI6IFwiUGFraXN0YW5cIixcclxuICAgIFwiUFdcIjogXCJQYWxhdVwiLFxyXG4gICAgXCJQU1wiOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIixcclxuICAgIFwiUEFcIjogXCJQYW5hbWFcIixcclxuICAgIFwiUEdcIjogXCJQYXB1YSBOZXcgR3VpbmVhXCIsXHJcbiAgICBcIlBZXCI6IFwiUGFyYWd1YXlcIixcclxuICAgIFwiUEVcIjogXCJQZXJ1XCIsXHJcbiAgICBcIlBIXCI6IFwiUGhpbGlwcGluZXMgKHRoZSlcIixcclxuICAgIFwiUE5cIjogXCJQaXRjYWlyblwiLFxyXG4gICAgXCJQTFwiOiBcIlBvbGFuZFwiLFxyXG4gICAgXCJQVFwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgICBcIlBSXCI6IFwiUHVlcnRvIFJpY29cIixcclxuICAgIFwiUUFcIjogXCJRYXRhclwiLFxyXG4gICAgXCJNS1wiOiBcIlJlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYVwiLFxyXG4gICAgXCJST1wiOiBcIlJvbWFuaWFcIixcclxuICAgIFwiUlVcIjogXCJSdXNzaWFuIEZlZGVyYXRpb24gKHRoZSlcIixcclxuICAgIFwiUldcIjogXCJSd2FuZGFcIixcclxuICAgIFwiUkVcIjogXCJSw6l1bmlvblwiLFxyXG4gICAgXCJCTFwiOiBcIlNhaW50IEJhcnRow6lsZW15XCIsXHJcbiAgICBcIlNIXCI6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIixcclxuICAgIFwiS05cIjogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcclxuICAgIFwiTENcIjogXCJTYWludCBMdWNpYVwiLFxyXG4gICAgXCJNRlwiOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsXHJcbiAgICBcIlBNXCI6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFxyXG4gICAgXCJWQ1wiOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsXHJcbiAgICBcIldTXCI6IFwiU2Ftb2FcIixcclxuICAgIFwiU01cIjogXCJTYW4gTWFyaW5vXCIsXHJcbiAgICBcIlNUXCI6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsXHJcbiAgICBcIlNBXCI6IFwiU2F1ZGkgQXJhYmlhXCIsXHJcbiAgICBcIlNOXCI6IFwiU2VuZWdhbFwiLFxyXG4gICAgXCJSU1wiOiBcIlNlcmJpYVwiLFxyXG4gICAgXCJTQ1wiOiBcIlNleWNoZWxsZXNcIixcclxuICAgIFwiU0xcIjogXCJTaWVycmEgTGVvbmVcIixcclxuICAgIFwiU0dcIjogXCJTaW5nYXBvcmVcIixcclxuICAgIFwiU1hcIjogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsXHJcbiAgICBcIlNLXCI6IFwiU2xvdmFraWFcIixcclxuICAgIFwiU0lcIjogXCJTbG92ZW5pYVwiLFxyXG4gICAgXCJTQlwiOiBcIlNvbG9tb24gSXNsYW5kc1wiLFxyXG4gICAgXCJTT1wiOiBcIlNvbWFsaWFcIixcclxuICAgIFwiWkFcIjogXCJTb3V0aCBBZnJpY2FcIixcclxuICAgIFwiR1NcIjogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLFxyXG4gICAgXCJTU1wiOiBcIlNvdXRoIFN1ZGFuXCIsXHJcbiAgICBcIkVTXCI6IFwiU3BhaW5cIixcclxuICAgIFwiTEtcIjogXCJTcmkgTGFua2FcIixcclxuICAgIFwiU0RcIjogXCJTdWRhbiAodGhlKVwiLFxyXG4gICAgXCJTUlwiOiBcIlN1cmluYW1lXCIsXHJcbiAgICBcIlNKXCI6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLFxyXG4gICAgXCJTRVwiOiBcIlN3ZWRlblwiLFxyXG4gICAgXCJDSFwiOiBcIlN3aXR6ZXJsYW5kXCIsXHJcbiAgICBcIlNZXCI6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIixcclxuICAgIFwiVFdcIjogXCJUYWl3YW4gKFByb3ZpbmNlIG9mIENoaW5hKVwiLFxyXG4gICAgXCJUSlwiOiBcIlRhamlraXN0YW5cIixcclxuICAgIFwiVFpcIjogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXHJcbiAgICBcIlRIXCI6IFwiVGhhaWxhbmRcIixcclxuICAgIFwiVExcIjogXCJUaW1vci1MZXN0ZVwiLFxyXG4gICAgXCJUR1wiOiBcIlRvZ29cIixcclxuICAgIFwiVEtcIjogXCJUb2tlbGF1XCIsXHJcbiAgICBcIlRPXCI6IFwiVG9uZ2FcIixcclxuICAgIFwiVFRcIjogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXHJcbiAgICBcIlROXCI6IFwiVHVuaXNpYVwiLFxyXG4gICAgXCJUUlwiOiBcIlR1cmtleVwiLFxyXG4gICAgXCJUTVwiOiBcIlR1cmttZW5pc3RhblwiLFxyXG4gICAgXCJUQ1wiOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJUVlwiOiBcIlR1dmFsdVwiLFxyXG4gICAgXCJVR1wiOiBcIlVnYW5kYVwiLFxyXG4gICAgXCJVQVwiOiBcIlVrcmFpbmVcIixcclxuICAgIFwiQUVcIjogXCJVbml0ZWQgQXJhYiBFbWlyYXRlcyAodGhlKVwiLFxyXG4gICAgXCJHQlwiOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSlcIixcclxuICAgIFwiVU1cIjogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiVVNcIjogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EgKHRoZSlcIixcclxuICAgIFwiVVlcIjogXCJVcnVndWF5XCIsXHJcbiAgICBcIlVaXCI6IFwiVXpiZWtpc3RhblwiLFxyXG4gICAgXCJWVVwiOiBcIlZhbnVhdHVcIixcclxuICAgIFwiVkVcIjogXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCIsXHJcbiAgICBcIlZOXCI6IFwiVmlldCBOYW1cIixcclxuICAgIFwiVkdcIjogXCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIixcclxuICAgIFwiVklcIjogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIixcclxuICAgIFwiV0ZcIjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLFxyXG4gICAgXCJFSFwiOiBcIldlc3Rlcm4gU2FoYXJhXCIsXHJcbiAgICBcIllFXCI6IFwiWWVtZW5cIixcclxuICAgIFwiWk1cIjogXCJaYW1iaWFcIixcclxuICAgIFwiWldcIjogXCJaaW1iYWJ3ZVwiICovXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1RhYmxlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q291bnRyeSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=