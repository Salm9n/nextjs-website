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
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\salm9\\Documents\\JS_Progs\\salman-proj\\pages\\posts\\build-table.js",
    _s = $RefreshSig$();










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    maxWidth: 650
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
  return (
    /*#__PURE__*/
    //<TableContainer component={Paper}>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
            children: "Country Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
            align: "right",
            children: "Abbreviation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
              align: "right",
              children: row.abv
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, this) //</TableContainer>

  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWF4V2lkdGgiLCJjcmVhdGVDb3VudHJ5IiwiYWJ2IiwibmFtZSIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIm1hcCIsInJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETDtBQURvQixDQUFELENBQTVCOztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQyxTQUFPO0FBQUVELE9BQUcsRUFBSEEsR0FBRjtBQUFPQyxRQUFJLEVBQUpBO0FBQVAsR0FBUDtBQUNEOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNUSCxhQUFhLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FESixFQUVUQSxhQUFhLENBQUMsSUFBRCxFQUFPLGVBQVA7QUFDYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpQYSxDQUFiO0FBNFBlLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNFO0FBQ0Usa0VBQUMsNERBQUQ7QUFBTyxlQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsS0FBMUI7QUFBaUMsb0JBQVcsY0FBNUM7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBQSxrQkFDR0ssSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDhCQUNSLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDLElBQXJCO0FBQTBCLG1CQUFLLEVBQUMsS0FBaEM7QUFBQSx3QkFDR0EsR0FBRyxDQUFDTDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJLLEdBQUcsQ0FBQ047QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQWVNLEdBQUcsQ0FBQ0wsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosQ0FvQkU7O0FBcEJGO0FBc0JEOztHQXpCdUJFLFU7VUFDTlIsUzs7O0tBRE1RLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuZjc5NTUzM2MzNmMxYWY5YmRlMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1heFdpZHRoOiA2NTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5KGFidiwgbmFtZSkge1xyXG4gIHJldHVybiB7IGFidiwgbmFtZSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gICAgY3JlYXRlQ291bnRyeSgnQUYnLCAnQWZnaGFuaXN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FYJywgJ8OFbGFuZCBJc2xhbmRzJyksXHJcbiAgICAvKlwiQUxcIjogXCJBbGJhbmlhXCIsXHJcbiAgICBcIkRaXCI6IFwiQWxnZXJpYVwiLFxyXG4gICAgXCJBU1wiOiBcIkFtZXJpY2FuIFNhbW9hXCIsXHJcbiAgICBcIkFEXCI6IFwiQW5kb3JyYVwiLFxyXG4gICAgXCJBT1wiOiBcIkFuZ29sYVwiLFxyXG4gICAgXCJBSVwiOiBcIkFuZ3VpbGxhXCIsXHJcbiAgICBcIkFRXCI6IFwiQW50YXJjdGljYVwiLFxyXG4gICAgXCJBR1wiOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcclxuICAgIFwiQVJcIjogXCJBcmdlbnRpbmFcIixcclxuICAgIFwiQU1cIjogXCJBcm1lbmlhXCIsXHJcbiAgICBcIkFXXCI6IFwiQXJ1YmFcIixcclxuICAgIFwiQVVcIjogXCJBdXN0cmFsaWFcIixcclxuICAgIFwiQVRcIjogXCJBdXN0cmlhXCIsXHJcbiAgICBcIkFaXCI6IFwiQXplcmJhaWphblwiLFxyXG4gICAgXCJCU1wiOiBcIkJhaGFtYXMgKHRoZSlcIixcclxuICAgIFwiQkhcIjogXCJCYWhyYWluXCIsXHJcbiAgICBcIkJEXCI6IFwiQmFuZ2xhZGVzaFwiLFxyXG4gICAgXCJCQlwiOiBcIkJhcmJhZG9zXCIsXHJcbiAgICBcIkJZXCI6IFwiQmVsYXJ1c1wiLFxyXG4gICAgXCJCRVwiOiBcIkJlbGdpdW1cIixcclxuICAgIFwiQlpcIjogXCJCZWxpemVcIixcclxuICAgIFwiQkpcIjogXCJCZW5pblwiLFxyXG4gICAgXCJCTVwiOiBcIkJlcm11ZGFcIixcclxuICAgIFwiQlRcIjogXCJCaHV0YW5cIixcclxuICAgIFwiQk9cIjogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwiLFxyXG4gICAgXCJCUVwiOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsXHJcbiAgICBcIkJBXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLFxyXG4gICAgXCJCV1wiOiBcIkJvdHN3YW5hXCIsXHJcbiAgICBcIkJWXCI6IFwiQm91dmV0IElzbGFuZFwiLFxyXG4gICAgXCJCUlwiOiBcIkJyYXppbFwiLFxyXG4gICAgXCJJT1wiOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKVwiLFxyXG4gICAgXCJCTlwiOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXHJcbiAgICBcIkJHXCI6IFwiQnVsZ2FyaWFcIixcclxuICAgIFwiQkZcIjogXCJCdXJraW5hIEZhc29cIixcclxuICAgIFwiQklcIjogXCJCdXJ1bmRpXCIsXHJcbiAgICBcIkNWXCI6IFwiQ2FibyBWZXJkZVwiLFxyXG4gICAgXCJLSFwiOiBcIkNhbWJvZGlhXCIsXHJcbiAgICBcIkNNXCI6IFwiQ2FtZXJvb25cIixcclxuICAgIFwiQ0FcIjogXCJDYW5hZGFcIixcclxuICAgIFwiS1lcIjogXCJDYXltYW4gSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJDRlwiOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAodGhlKVwiLFxyXG4gICAgXCJURFwiOiBcIkNoYWRcIixcclxuICAgIFwiQ0xcIjogXCJDaGlsZVwiLFxyXG4gICAgXCJDTlwiOiBcIkNoaW5hXCIsXHJcbiAgICBcIkNYXCI6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLFxyXG4gICAgXCJDQ1wiOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIkNPXCI6IFwiQ29sb21iaWFcIixcclxuICAgIFwiS01cIjogXCJDb21vcm9zICh0aGUpXCIsXHJcbiAgICBcIkNEXCI6IFwiQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIixcclxuICAgIFwiQ0dcIjogXCJDb25nbyAodGhlKVwiLFxyXG4gICAgXCJDS1wiOiBcIkNvb2sgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJDUlwiOiBcIkNvc3RhIFJpY2FcIixcclxuICAgIFwiSFJcIjogXCJDcm9hdGlhXCIsXHJcbiAgICBcIkNVXCI6IFwiQ3ViYVwiLFxyXG4gICAgXCJDV1wiOiBcIkN1cmHDp2FvXCIsXHJcbiAgICBcIkNZXCI6IFwiQ3lwcnVzXCIsXHJcbiAgICBcIkNaXCI6IFwiQ3plY2hpYVwiLFxyXG4gICAgXCJDSVwiOiBcIkPDtHRlIGQnSXZvaXJlXCIsXHJcbiAgICBcIkRLXCI6IFwiRGVubWFya1wiLFxyXG4gICAgXCJESlwiOiBcIkRqaWJvdXRpXCIsXHJcbiAgICBcIkRNXCI6IFwiRG9taW5pY2FcIixcclxuICAgIFwiRE9cIjogXCJEb21pbmljYW4gUmVwdWJsaWMgKHRoZSlcIixcclxuICAgIFwiRUNcIjogXCJFY3VhZG9yXCIsXHJcbiAgICBcIkVHXCI6IFwiRWd5cHRcIixcclxuICAgIFwiU1ZcIjogXCJFbCBTYWx2YWRvclwiLFxyXG4gICAgXCJHUVwiOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsXHJcbiAgICBcIkVSXCI6IFwiRXJpdHJlYVwiLFxyXG4gICAgXCJFRVwiOiBcIkVzdG9uaWFcIixcclxuICAgIFwiU1pcIjogXCJFc3dhdGluaVwiLFxyXG4gICAgXCJFVFwiOiBcIkV0aGlvcGlhXCIsXHJcbiAgICBcIkZLXCI6IFwiRmFsa2xhbmQgSXNsYW5kcyAodGhlKSBbTWFsdmluYXNdXCIsXHJcbiAgICBcIkZPXCI6IFwiRmFyb2UgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJGSlwiOiBcIkZpamlcIixcclxuICAgIFwiRklcIjogXCJGaW5sYW5kXCIsXHJcbiAgICBcIkZSXCI6IFwiRnJhbmNlXCIsXHJcbiAgICBcIkdGXCI6IFwiRnJlbmNoIEd1aWFuYVwiLFxyXG4gICAgXCJQRlwiOiBcIkZyZW5jaCBQb2x5bmVzaWFcIixcclxuICAgIFwiVEZcIjogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMgKHRoZSlcIixcclxuICAgIFwiR0FcIjogXCJHYWJvblwiLFxyXG4gICAgXCJHTVwiOiBcIkdhbWJpYSAodGhlKVwiLFxyXG4gICAgXCJHRVwiOiBcIkdlb3JnaWFcIixcclxuICAgIFwiREVcIjogXCJHZXJtYW55XCIsXHJcbiAgICBcIkdIXCI6IFwiR2hhbmFcIixcclxuICAgIFwiR0lcIjogXCJHaWJyYWx0YXJcIixcclxuICAgIFwiR1JcIjogXCJHcmVlY2VcIixcclxuICAgIFwiR0xcIjogXCJHcmVlbmxhbmRcIixcclxuICAgIFwiR0RcIjogXCJHcmVuYWRhXCIsXHJcbiAgICBcIkdQXCI6IFwiR3VhZGVsb3VwZVwiLFxyXG4gICAgXCJHVVwiOiBcIkd1YW1cIixcclxuICAgIFwiR1RcIjogXCJHdWF0ZW1hbGFcIixcclxuICAgIFwiR0dcIjogXCJHdWVybnNleVwiLFxyXG4gICAgXCJHTlwiOiBcIkd1aW5lYVwiLFxyXG4gICAgXCJHV1wiOiBcIkd1aW5lYS1CaXNzYXVcIixcclxuICAgIFwiR1lcIjogXCJHdXlhbmFcIixcclxuICAgIFwiSFRcIjogXCJIYWl0aVwiLFxyXG4gICAgXCJITVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLFxyXG4gICAgXCJWQVwiOiBcIkhvbHkgU2VlICh0aGUpXCIsXHJcbiAgICBcIkhOXCI6IFwiSG9uZHVyYXNcIixcclxuICAgIFwiSEtcIjogXCJIb25nIEtvbmdcIixcclxuICAgIFwiSFVcIjogXCJIdW5nYXJ5XCIsXHJcbiAgICBcIklTXCI6IFwiSWNlbGFuZFwiLFxyXG4gICAgXCJJTlwiOiBcIkluZGlhXCIsXHJcbiAgICBcIklEXCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgICBcIklSXCI6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIixcclxuICAgIFwiSVFcIjogXCJJcmFxXCIsXHJcbiAgICBcIklFXCI6IFwiSXJlbGFuZFwiLFxyXG4gICAgXCJJTVwiOiBcIklzbGUgb2YgTWFuXCIsXHJcbiAgICBcIklMXCI6IFwiSXNyYWVsXCIsXHJcbiAgICBcIklUXCI6IFwiSXRhbHlcIixcclxuICAgIFwiSk1cIjogXCJKYW1haWNhXCIsXHJcbiAgICBcIkpQXCI6IFwiSmFwYW5cIixcclxuICAgIFwiSkVcIjogXCJKZXJzZXlcIixcclxuICAgIFwiSk9cIjogXCJKb3JkYW5cIixcclxuICAgIFwiS1pcIjogXCJLYXpha2hzdGFuXCIsXHJcbiAgICBcIktFXCI6IFwiS2VueWFcIixcclxuICAgIFwiS0lcIjogXCJLaXJpYmF0aVwiLFxyXG4gICAgXCJLUFwiOiBcIktvcmVhICh0aGUgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIixcclxuICAgIFwiS1JcIjogXCJLb3JlYSAodGhlIFJlcHVibGljIG9mKVwiLFxyXG4gICAgXCJLV1wiOiBcIkt1d2FpdFwiLFxyXG4gICAgXCJLR1wiOiBcIkt5cmd5enN0YW5cIixcclxuICAgIFwiTEFcIjogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYyAodGhlKVwiLFxyXG4gICAgXCJMVlwiOiBcIkxhdHZpYVwiLFxyXG4gICAgXCJMQlwiOiBcIkxlYmFub25cIixcclxuICAgIFwiTFNcIjogXCJMZXNvdGhvXCIsXHJcbiAgICBcIkxSXCI6IFwiTGliZXJpYVwiLFxyXG4gICAgXCJMWVwiOiBcIkxpYnlhXCIsXHJcbiAgICBcIkxJXCI6IFwiTGllY2h0ZW5zdGVpblwiLFxyXG4gICAgXCJMVFwiOiBcIkxpdGh1YW5pYVwiLFxyXG4gICAgXCJMVVwiOiBcIkx1eGVtYm91cmdcIixcclxuICAgIFwiTU9cIjogXCJNYWNhb1wiLFxyXG4gICAgXCJNR1wiOiBcIk1hZGFnYXNjYXJcIixcclxuICAgIFwiTVdcIjogXCJNYWxhd2lcIixcclxuICAgIFwiTVlcIjogXCJNYWxheXNpYVwiLFxyXG4gICAgXCJNVlwiOiBcIk1hbGRpdmVzXCIsXHJcbiAgICBcIk1MXCI6IFwiTWFsaVwiLFxyXG4gICAgXCJNVFwiOiBcIk1hbHRhXCIsXHJcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJNUVwiOiBcIk1hcnRpbmlxdWVcIixcclxuICAgIFwiTVJcIjogXCJNYXVyaXRhbmlhXCIsXHJcbiAgICBcIk1VXCI6IFwiTWF1cml0aXVzXCIsXHJcbiAgICBcIllUXCI6IFwiTWF5b3R0ZVwiLFxyXG4gICAgXCJNWFwiOiBcIk1leGljb1wiLFxyXG4gICAgXCJGTVwiOiBcIk1pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpXCIsXHJcbiAgICBcIk1EXCI6IFwiTW9sZG92YSAodGhlIFJlcHVibGljIG9mKVwiLFxyXG4gICAgXCJNQ1wiOiBcIk1vbmFjb1wiLFxyXG4gICAgXCJNTlwiOiBcIk1vbmdvbGlhXCIsXHJcbiAgICBcIk1FXCI6IFwiTW9udGVuZWdyb1wiLFxyXG4gICAgXCJNU1wiOiBcIk1vbnRzZXJyYXRcIixcclxuICAgIFwiTUFcIjogXCJNb3JvY2NvXCIsXHJcbiAgICBcIk1aXCI6IFwiTW96YW1iaXF1ZVwiLFxyXG4gICAgXCJNTVwiOiBcIk15YW5tYXJcIixcclxuICAgIFwiTkFcIjogXCJOYW1pYmlhXCIsXHJcbiAgICBcIk5SXCI6IFwiTmF1cnVcIixcclxuICAgIFwiTlBcIjogXCJOZXBhbFwiLFxyXG4gICAgXCJOTFwiOiBcIk5ldGhlcmxhbmRzICh0aGUpXCIsXHJcbiAgICBcIk5DXCI6IFwiTmV3IENhbGVkb25pYVwiLFxyXG4gICAgXCJOWlwiOiBcIk5ldyBaZWFsYW5kXCIsXHJcbiAgICBcIk5JXCI6IFwiTmljYXJhZ3VhXCIsXHJcbiAgICBcIk5FXCI6IFwiTmlnZXIgKHRoZSlcIixcclxuICAgIFwiTkdcIjogXCJOaWdlcmlhXCIsXHJcbiAgICBcIk5VXCI6IFwiTml1ZVwiLFxyXG4gICAgXCJORlwiOiBcIk5vcmZvbGsgSXNsYW5kXCIsXHJcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIk5PXCI6IFwiTm9yd2F5XCIsXHJcbiAgICBcIk9NXCI6IFwiT21hblwiLFxyXG4gICAgXCJQS1wiOiBcIlBha2lzdGFuXCIsXHJcbiAgICBcIlBXXCI6IFwiUGFsYXVcIixcclxuICAgIFwiUFNcIjogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsXHJcbiAgICBcIlBBXCI6IFwiUGFuYW1hXCIsXHJcbiAgICBcIlBHXCI6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLFxyXG4gICAgXCJQWVwiOiBcIlBhcmFndWF5XCIsXHJcbiAgICBcIlBFXCI6IFwiUGVydVwiLFxyXG4gICAgXCJQSFwiOiBcIlBoaWxpcHBpbmVzICh0aGUpXCIsXHJcbiAgICBcIlBOXCI6IFwiUGl0Y2Fpcm5cIixcclxuICAgIFwiUExcIjogXCJQb2xhbmRcIixcclxuICAgIFwiUFRcIjogXCJQb3J0dWdhbFwiLFxyXG4gICAgXCJQUlwiOiBcIlB1ZXJ0byBSaWNvXCIsXHJcbiAgICBcIlFBXCI6IFwiUWF0YXJcIixcclxuICAgIFwiTUtcIjogXCJSZXB1YmxpYyBvZiBOb3J0aCBNYWNlZG9uaWFcIixcclxuICAgIFwiUk9cIjogXCJSb21hbmlhXCIsXHJcbiAgICBcIlJVXCI6IFwiUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpXCIsXHJcbiAgICBcIlJXXCI6IFwiUndhbmRhXCIsXHJcbiAgICBcIlJFXCI6IFwiUsOpdW5pb25cIixcclxuICAgIFwiQkxcIjogXCJTYWludCBCYXJ0aMOpbGVteVwiLFxyXG4gICAgXCJTSFwiOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsXHJcbiAgICBcIktOXCI6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXHJcbiAgICBcIkxDXCI6IFwiU2FpbnQgTHVjaWFcIixcclxuICAgIFwiTUZcIjogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLFxyXG4gICAgXCJQTVwiOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixcclxuICAgIFwiVkNcIjogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFxyXG4gICAgXCJXU1wiOiBcIlNhbW9hXCIsXHJcbiAgICBcIlNNXCI6IFwiU2FuIE1hcmlub1wiLFxyXG4gICAgXCJTVFwiOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxyXG4gICAgXCJTQVwiOiBcIlNhdWRpIEFyYWJpYVwiLFxyXG4gICAgXCJTTlwiOiBcIlNlbmVnYWxcIixcclxuICAgIFwiUlNcIjogXCJTZXJiaWFcIixcclxuICAgIFwiU0NcIjogXCJTZXljaGVsbGVzXCIsXHJcbiAgICBcIlNMXCI6IFwiU2llcnJhIExlb25lXCIsXHJcbiAgICBcIlNHXCI6IFwiU2luZ2Fwb3JlXCIsXHJcbiAgICBcIlNYXCI6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLFxyXG4gICAgXCJTS1wiOiBcIlNsb3Zha2lhXCIsXHJcbiAgICBcIlNJXCI6IFwiU2xvdmVuaWFcIixcclxuICAgIFwiU0JcIjogXCJTb2xvbW9uIElzbGFuZHNcIixcclxuICAgIFwiU09cIjogXCJTb21hbGlhXCIsXHJcbiAgICBcIlpBXCI6IFwiU291dGggQWZyaWNhXCIsXHJcbiAgICBcIkdTXCI6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIixcclxuICAgIFwiU1NcIjogXCJTb3V0aCBTdWRhblwiLFxyXG4gICAgXCJFU1wiOiBcIlNwYWluXCIsXHJcbiAgICBcIkxLXCI6IFwiU3JpIExhbmthXCIsXHJcbiAgICBcIlNEXCI6IFwiU3VkYW4gKHRoZSlcIixcclxuICAgIFwiU1JcIjogXCJTdXJpbmFtZVwiLFxyXG4gICAgXCJTSlwiOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIixcclxuICAgIFwiU0VcIjogXCJTd2VkZW5cIixcclxuICAgIFwiQ0hcIjogXCJTd2l0emVybGFuZFwiLFxyXG4gICAgXCJTWVwiOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsXHJcbiAgICBcIlRXXCI6IFwiVGFpd2FuIChQcm92aW5jZSBvZiBDaGluYSlcIixcclxuICAgIFwiVEpcIjogXCJUYWppa2lzdGFuXCIsXHJcbiAgICBcIlRaXCI6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLFxyXG4gICAgXCJUSFwiOiBcIlRoYWlsYW5kXCIsXHJcbiAgICBcIlRMXCI6IFwiVGltb3ItTGVzdGVcIixcclxuICAgIFwiVEdcIjogXCJUb2dvXCIsXHJcbiAgICBcIlRLXCI6IFwiVG9rZWxhdVwiLFxyXG4gICAgXCJUT1wiOiBcIlRvbmdhXCIsXHJcbiAgICBcIlRUXCI6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLFxyXG4gICAgXCJUTlwiOiBcIlR1bmlzaWFcIixcclxuICAgIFwiVFJcIjogXCJUdXJrZXlcIixcclxuICAgIFwiVE1cIjogXCJUdXJrbWVuaXN0YW5cIixcclxuICAgIFwiVENcIjogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiVFZcIjogXCJUdXZhbHVcIixcclxuICAgIFwiVUdcIjogXCJVZ2FuZGFcIixcclxuICAgIFwiVUFcIjogXCJVa3JhaW5lXCIsXHJcbiAgICBcIkFFXCI6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSlcIixcclxuICAgIFwiR0JcIjogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpXCIsXHJcbiAgICBcIlVNXCI6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIlVTXCI6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpXCIsXHJcbiAgICBcIlVZXCI6IFwiVXJ1Z3VheVwiLFxyXG4gICAgXCJVWlwiOiBcIlV6YmVraXN0YW5cIixcclxuICAgIFwiVlVcIjogXCJWYW51YXR1XCIsXHJcbiAgICBcIlZFXCI6IFwiVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKVwiLFxyXG4gICAgXCJWTlwiOiBcIlZpZXQgTmFtXCIsXHJcbiAgICBcIlZHXCI6IFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCIsXHJcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHMgKFUuUy4pXCIsXHJcbiAgICBcIldGXCI6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIixcclxuICAgIFwiRUhcIjogXCJXZXN0ZXJuIFNhaGFyYVwiLFxyXG4gICAgXCJZRVwiOiBcIlllbWVuXCIsXHJcbiAgICBcIlpNXCI6IFwiWmFtYmlhXCIsXHJcbiAgICBcIlpXXCI6IFwiWmltYmFid2VcIiAqL1xyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNUYWJsZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLzxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q291bnRyeSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ24gPVwicmlnaHRcIj5BYmJyZXZpYXRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5uYW1lfT5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmFidn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgLy88L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==