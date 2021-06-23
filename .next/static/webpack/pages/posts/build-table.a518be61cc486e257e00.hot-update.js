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

var rows = [createCountry("AF", "Afghanistan"), createCountry('AX', 'Åland Islands')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWF4V2lkdGgiLCJjcmVhdGVDb3VudHJ5IiwiYWJ2IiwibmFtZSIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIm1hcCIsInJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETDtBQURvQixDQUFELENBQTVCOztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQyxTQUFPO0FBQUVELE9BQUcsRUFBSEEsR0FBRjtBQUFPQyxRQUFJLEVBQUpBO0FBQVAsR0FBUDtBQUNEOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNUSCxhQUFhLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FESixFQUVUQSxhQUFhLENBQUMsSUFBRCxFQUFPLGVBQVA7QUFDYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpQYSxDQUFiO0FBNFBlLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNFO0FBQ0Usa0VBQUMsNERBQUQ7QUFBTyxlQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsS0FBMUI7QUFBaUMsb0JBQVcsY0FBNUM7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBQSxrQkFDR0ssSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDhCQUNSLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDLElBQXJCO0FBQTBCLG1CQUFLLEVBQUMsS0FBaEM7QUFBQSx3QkFDR0EsR0FBRyxDQUFDTDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJLLEdBQUcsQ0FBQ047QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQWVNLEdBQUcsQ0FBQ0wsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosQ0FvQkU7O0FBcEJGO0FBc0JEOztHQXpCdUJFLFU7VUFDTlIsUzs7O0tBRE1RLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuYTUxOGJlNjFjYzQ4NmUyNTdlMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1heFdpZHRoOiA2NTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5KGFidiwgbmFtZSkge1xyXG4gIHJldHVybiB7IGFidiwgbmFtZSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gICAgY3JlYXRlQ291bnRyeShcIkFGXCIsIFwiQWZnaGFuaXN0YW5cIiksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBWCcsICfDhWxhbmQgSXNsYW5kcycpLFxyXG4gICAgLypcIkFMXCI6IFwiQWxiYW5pYVwiLFxyXG4gICAgXCJEWlwiOiBcIkFsZ2VyaWFcIixcclxuICAgIFwiQVNcIjogXCJBbWVyaWNhbiBTYW1vYVwiLFxyXG4gICAgXCJBRFwiOiBcIkFuZG9ycmFcIixcclxuICAgIFwiQU9cIjogXCJBbmdvbGFcIixcclxuICAgIFwiQUlcIjogXCJBbmd1aWxsYVwiLFxyXG4gICAgXCJBUVwiOiBcIkFudGFyY3RpY2FcIixcclxuICAgIFwiQUdcIjogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXHJcbiAgICBcIkFSXCI6IFwiQXJnZW50aW5hXCIsXHJcbiAgICBcIkFNXCI6IFwiQXJtZW5pYVwiLFxyXG4gICAgXCJBV1wiOiBcIkFydWJhXCIsXHJcbiAgICBcIkFVXCI6IFwiQXVzdHJhbGlhXCIsXHJcbiAgICBcIkFUXCI6IFwiQXVzdHJpYVwiLFxyXG4gICAgXCJBWlwiOiBcIkF6ZXJiYWlqYW5cIixcclxuICAgIFwiQlNcIjogXCJCYWhhbWFzICh0aGUpXCIsXHJcbiAgICBcIkJIXCI6IFwiQmFocmFpblwiLFxyXG4gICAgXCJCRFwiOiBcIkJhbmdsYWRlc2hcIixcclxuICAgIFwiQkJcIjogXCJCYXJiYWRvc1wiLFxyXG4gICAgXCJCWVwiOiBcIkJlbGFydXNcIixcclxuICAgIFwiQkVcIjogXCJCZWxnaXVtXCIsXHJcbiAgICBcIkJaXCI6IFwiQmVsaXplXCIsXHJcbiAgICBcIkJKXCI6IFwiQmVuaW5cIixcclxuICAgIFwiQk1cIjogXCJCZXJtdWRhXCIsXHJcbiAgICBcIkJUXCI6IFwiQmh1dGFuXCIsXHJcbiAgICBcIkJPXCI6IFwiQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZilcIixcclxuICAgIFwiQlFcIjogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFxyXG4gICAgXCJCQVwiOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcclxuICAgIFwiQldcIjogXCJCb3Rzd2FuYVwiLFxyXG4gICAgXCJCVlwiOiBcIkJvdXZldCBJc2xhbmRcIixcclxuICAgIFwiQlJcIjogXCJCcmF6aWxcIixcclxuICAgIFwiSU9cIjogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnkgKHRoZSlcIixcclxuICAgIFwiQk5cIjogXCJCcnVuZWkgRGFydXNzYWxhbVwiLFxyXG4gICAgXCJCR1wiOiBcIkJ1bGdhcmlhXCIsXHJcbiAgICBcIkJGXCI6IFwiQnVya2luYSBGYXNvXCIsXHJcbiAgICBcIkJJXCI6IFwiQnVydW5kaVwiLFxyXG4gICAgXCJDVlwiOiBcIkNhYm8gVmVyZGVcIixcclxuICAgIFwiS0hcIjogXCJDYW1ib2RpYVwiLFxyXG4gICAgXCJDTVwiOiBcIkNhbWVyb29uXCIsXHJcbiAgICBcIkNBXCI6IFwiQ2FuYWRhXCIsXHJcbiAgICBcIktZXCI6IFwiQ2F5bWFuIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiQ0ZcIjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSlcIixcclxuICAgIFwiVERcIjogXCJDaGFkXCIsXHJcbiAgICBcIkNMXCI6IFwiQ2hpbGVcIixcclxuICAgIFwiQ05cIjogXCJDaGluYVwiLFxyXG4gICAgXCJDWFwiOiBcIkNocmlzdG1hcyBJc2xhbmRcIixcclxuICAgIFwiQ0NcIjogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJDT1wiOiBcIkNvbG9tYmlhXCIsXHJcbiAgICBcIktNXCI6IFwiQ29tb3JvcyAodGhlKVwiLFxyXG4gICAgXCJDRFwiOiBcIkNvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCIsXHJcbiAgICBcIkNHXCI6IFwiQ29uZ28gKHRoZSlcIixcclxuICAgIFwiQ0tcIjogXCJDb29rIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiQ1JcIjogXCJDb3N0YSBSaWNhXCIsXHJcbiAgICBcIkhSXCI6IFwiQ3JvYXRpYVwiLFxyXG4gICAgXCJDVVwiOiBcIkN1YmFcIixcclxuICAgIFwiQ1dcIjogXCJDdXJhw6dhb1wiLFxyXG4gICAgXCJDWVwiOiBcIkN5cHJ1c1wiLFxyXG4gICAgXCJDWlwiOiBcIkN6ZWNoaWFcIixcclxuICAgIFwiQ0lcIjogXCJDw7R0ZSBkJ0l2b2lyZVwiLFxyXG4gICAgXCJES1wiOiBcIkRlbm1hcmtcIixcclxuICAgIFwiREpcIjogXCJEamlib3V0aVwiLFxyXG4gICAgXCJETVwiOiBcIkRvbWluaWNhXCIsXHJcbiAgICBcIkRPXCI6IFwiRG9taW5pY2FuIFJlcHVibGljICh0aGUpXCIsXHJcbiAgICBcIkVDXCI6IFwiRWN1YWRvclwiLFxyXG4gICAgXCJFR1wiOiBcIkVneXB0XCIsXHJcbiAgICBcIlNWXCI6IFwiRWwgU2FsdmFkb3JcIixcclxuICAgIFwiR1FcIjogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxyXG4gICAgXCJFUlwiOiBcIkVyaXRyZWFcIixcclxuICAgIFwiRUVcIjogXCJFc3RvbmlhXCIsXHJcbiAgICBcIlNaXCI6IFwiRXN3YXRpbmlcIixcclxuICAgIFwiRVRcIjogXCJFdGhpb3BpYVwiLFxyXG4gICAgXCJGS1wiOiBcIkZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXVwiLFxyXG4gICAgXCJGT1wiOiBcIkZhcm9lIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiRkpcIjogXCJGaWppXCIsXHJcbiAgICBcIkZJXCI6IFwiRmlubGFuZFwiLFxyXG4gICAgXCJGUlwiOiBcIkZyYW5jZVwiLFxyXG4gICAgXCJHRlwiOiBcIkZyZW5jaCBHdWlhbmFcIixcclxuICAgIFwiUEZcIjogXCJGcmVuY2ggUG9seW5lc2lhXCIsXHJcbiAgICBcIlRGXCI6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpXCIsXHJcbiAgICBcIkdBXCI6IFwiR2Fib25cIixcclxuICAgIFwiR01cIjogXCJHYW1iaWEgKHRoZSlcIixcclxuICAgIFwiR0VcIjogXCJHZW9yZ2lhXCIsXHJcbiAgICBcIkRFXCI6IFwiR2VybWFueVwiLFxyXG4gICAgXCJHSFwiOiBcIkdoYW5hXCIsXHJcbiAgICBcIkdJXCI6IFwiR2licmFsdGFyXCIsXHJcbiAgICBcIkdSXCI6IFwiR3JlZWNlXCIsXHJcbiAgICBcIkdMXCI6IFwiR3JlZW5sYW5kXCIsXHJcbiAgICBcIkdEXCI6IFwiR3JlbmFkYVwiLFxyXG4gICAgXCJHUFwiOiBcIkd1YWRlbG91cGVcIixcclxuICAgIFwiR1VcIjogXCJHdWFtXCIsXHJcbiAgICBcIkdUXCI6IFwiR3VhdGVtYWxhXCIsXHJcbiAgICBcIkdHXCI6IFwiR3Vlcm5zZXlcIixcclxuICAgIFwiR05cIjogXCJHdWluZWFcIixcclxuICAgIFwiR1dcIjogXCJHdWluZWEtQmlzc2F1XCIsXHJcbiAgICBcIkdZXCI6IFwiR3V5YW5hXCIsXHJcbiAgICBcIkhUXCI6IFwiSGFpdGlcIixcclxuICAgIFwiSE1cIjogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcclxuICAgIFwiVkFcIjogXCJIb2x5IFNlZSAodGhlKVwiLFxyXG4gICAgXCJITlwiOiBcIkhvbmR1cmFzXCIsXHJcbiAgICBcIkhLXCI6IFwiSG9uZyBLb25nXCIsXHJcbiAgICBcIkhVXCI6IFwiSHVuZ2FyeVwiLFxyXG4gICAgXCJJU1wiOiBcIkljZWxhbmRcIixcclxuICAgIFwiSU5cIjogXCJJbmRpYVwiLFxyXG4gICAgXCJJRFwiOiBcIkluZG9uZXNpYVwiLFxyXG4gICAgXCJJUlwiOiBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsXHJcbiAgICBcIklRXCI6IFwiSXJhcVwiLFxyXG4gICAgXCJJRVwiOiBcIklyZWxhbmRcIixcclxuICAgIFwiSU1cIjogXCJJc2xlIG9mIE1hblwiLFxyXG4gICAgXCJJTFwiOiBcIklzcmFlbFwiLFxyXG4gICAgXCJJVFwiOiBcIkl0YWx5XCIsXHJcbiAgICBcIkpNXCI6IFwiSmFtYWljYVwiLFxyXG4gICAgXCJKUFwiOiBcIkphcGFuXCIsXHJcbiAgICBcIkpFXCI6IFwiSmVyc2V5XCIsXHJcbiAgICBcIkpPXCI6IFwiSm9yZGFuXCIsXHJcbiAgICBcIktaXCI6IFwiS2F6YWtoc3RhblwiLFxyXG4gICAgXCJLRVwiOiBcIktlbnlhXCIsXHJcbiAgICBcIktJXCI6IFwiS2lyaWJhdGlcIixcclxuICAgIFwiS1BcIjogXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXHJcbiAgICBcIktSXCI6IFwiS29yZWEgKHRoZSBSZXB1YmxpYyBvZilcIixcclxuICAgIFwiS1dcIjogXCJLdXdhaXRcIixcclxuICAgIFwiS0dcIjogXCJLeXJneXpzdGFuXCIsXHJcbiAgICBcIkxBXCI6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSlcIixcclxuICAgIFwiTFZcIjogXCJMYXR2aWFcIixcclxuICAgIFwiTEJcIjogXCJMZWJhbm9uXCIsXHJcbiAgICBcIkxTXCI6IFwiTGVzb3Rob1wiLFxyXG4gICAgXCJMUlwiOiBcIkxpYmVyaWFcIixcclxuICAgIFwiTFlcIjogXCJMaWJ5YVwiLFxyXG4gICAgXCJMSVwiOiBcIkxpZWNodGVuc3RlaW5cIixcclxuICAgIFwiTFRcIjogXCJMaXRodWFuaWFcIixcclxuICAgIFwiTFVcIjogXCJMdXhlbWJvdXJnXCIsXHJcbiAgICBcIk1PXCI6IFwiTWFjYW9cIixcclxuICAgIFwiTUdcIjogXCJNYWRhZ2FzY2FyXCIsXHJcbiAgICBcIk1XXCI6IFwiTWFsYXdpXCIsXHJcbiAgICBcIk1ZXCI6IFwiTWFsYXlzaWFcIixcclxuICAgIFwiTVZcIjogXCJNYWxkaXZlc1wiLFxyXG4gICAgXCJNTFwiOiBcIk1hbGlcIixcclxuICAgIFwiTVRcIjogXCJNYWx0YVwiLFxyXG4gICAgXCJNSFwiOiBcIk1hcnNoYWxsIElzbGFuZHMgKHRoZSlcIixcclxuICAgIFwiTVFcIjogXCJNYXJ0aW5pcXVlXCIsXHJcbiAgICBcIk1SXCI6IFwiTWF1cml0YW5pYVwiLFxyXG4gICAgXCJNVVwiOiBcIk1hdXJpdGl1c1wiLFxyXG4gICAgXCJZVFwiOiBcIk1heW90dGVcIixcclxuICAgIFwiTVhcIjogXCJNZXhpY29cIixcclxuICAgIFwiRk1cIjogXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwiLFxyXG4gICAgXCJNRFwiOiBcIk1vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZilcIixcclxuICAgIFwiTUNcIjogXCJNb25hY29cIixcclxuICAgIFwiTU5cIjogXCJNb25nb2xpYVwiLFxyXG4gICAgXCJNRVwiOiBcIk1vbnRlbmVncm9cIixcclxuICAgIFwiTVNcIjogXCJNb250c2VycmF0XCIsXHJcbiAgICBcIk1BXCI6IFwiTW9yb2Njb1wiLFxyXG4gICAgXCJNWlwiOiBcIk1vemFtYmlxdWVcIixcclxuICAgIFwiTU1cIjogXCJNeWFubWFyXCIsXHJcbiAgICBcIk5BXCI6IFwiTmFtaWJpYVwiLFxyXG4gICAgXCJOUlwiOiBcIk5hdXJ1XCIsXHJcbiAgICBcIk5QXCI6IFwiTmVwYWxcIixcclxuICAgIFwiTkxcIjogXCJOZXRoZXJsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJOQ1wiOiBcIk5ldyBDYWxlZG9uaWFcIixcclxuICAgIFwiTlpcIjogXCJOZXcgWmVhbGFuZFwiLFxyXG4gICAgXCJOSVwiOiBcIk5pY2FyYWd1YVwiLFxyXG4gICAgXCJORVwiOiBcIk5pZ2VyICh0aGUpXCIsXHJcbiAgICBcIk5HXCI6IFwiTmlnZXJpYVwiLFxyXG4gICAgXCJOVVwiOiBcIk5pdWVcIixcclxuICAgIFwiTkZcIjogXCJOb3Jmb2xrIElzbGFuZFwiLFxyXG4gICAgXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJOT1wiOiBcIk5vcndheVwiLFxyXG4gICAgXCJPTVwiOiBcIk9tYW5cIixcclxuICAgIFwiUEtcIjogXCJQYWtpc3RhblwiLFxyXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXHJcbiAgICBcIlBTXCI6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFxyXG4gICAgXCJQQVwiOiBcIlBhbmFtYVwiLFxyXG4gICAgXCJQR1wiOiBcIlBhcHVhIE5ldyBHdWluZWFcIixcclxuICAgIFwiUFlcIjogXCJQYXJhZ3VheVwiLFxyXG4gICAgXCJQRVwiOiBcIlBlcnVcIixcclxuICAgIFwiUEhcIjogXCJQaGlsaXBwaW5lcyAodGhlKVwiLFxyXG4gICAgXCJQTlwiOiBcIlBpdGNhaXJuXCIsXHJcbiAgICBcIlBMXCI6IFwiUG9sYW5kXCIsXHJcbiAgICBcIlBUXCI6IFwiUG9ydHVnYWxcIixcclxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxyXG4gICAgXCJRQVwiOiBcIlFhdGFyXCIsXHJcbiAgICBcIk1LXCI6IFwiUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhXCIsXHJcbiAgICBcIlJPXCI6IFwiUm9tYW5pYVwiLFxyXG4gICAgXCJSVVwiOiBcIlJ1c3NpYW4gRmVkZXJhdGlvbiAodGhlKVwiLFxyXG4gICAgXCJSV1wiOiBcIlJ3YW5kYVwiLFxyXG4gICAgXCJSRVwiOiBcIlLDqXVuaW9uXCIsXHJcbiAgICBcIkJMXCI6IFwiU2FpbnQgQmFydGjDqWxlbXlcIixcclxuICAgIFwiU0hcIjogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxyXG4gICAgXCJLTlwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxyXG4gICAgXCJMQ1wiOiBcIlNhaW50IEx1Y2lhXCIsXHJcbiAgICBcIk1GXCI6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcclxuICAgIFwiUE1cIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXHJcbiAgICBcIlZDXCI6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcclxuICAgIFwiV1NcIjogXCJTYW1vYVwiLFxyXG4gICAgXCJTTVwiOiBcIlNhbiBNYXJpbm9cIixcclxuICAgIFwiU1RcIjogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixcclxuICAgIFwiU0FcIjogXCJTYXVkaSBBcmFiaWFcIixcclxuICAgIFwiU05cIjogXCJTZW5lZ2FsXCIsXHJcbiAgICBcIlJTXCI6IFwiU2VyYmlhXCIsXHJcbiAgICBcIlNDXCI6IFwiU2V5Y2hlbGxlc1wiLFxyXG4gICAgXCJTTFwiOiBcIlNpZXJyYSBMZW9uZVwiLFxyXG4gICAgXCJTR1wiOiBcIlNpbmdhcG9yZVwiLFxyXG4gICAgXCJTWFwiOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcclxuICAgIFwiU0tcIjogXCJTbG92YWtpYVwiLFxyXG4gICAgXCJTSVwiOiBcIlNsb3ZlbmlhXCIsXHJcbiAgICBcIlNCXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsXHJcbiAgICBcIlNPXCI6IFwiU29tYWxpYVwiLFxyXG4gICAgXCJaQVwiOiBcIlNvdXRoIEFmcmljYVwiLFxyXG4gICAgXCJHU1wiOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXHJcbiAgICBcIlNTXCI6IFwiU291dGggU3VkYW5cIixcclxuICAgIFwiRVNcIjogXCJTcGFpblwiLFxyXG4gICAgXCJMS1wiOiBcIlNyaSBMYW5rYVwiLFxyXG4gICAgXCJTRFwiOiBcIlN1ZGFuICh0aGUpXCIsXHJcbiAgICBcIlNSXCI6IFwiU3VyaW5hbWVcIixcclxuICAgIFwiU0pcIjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXHJcbiAgICBcIlNFXCI6IFwiU3dlZGVuXCIsXHJcbiAgICBcIkNIXCI6IFwiU3dpdHplcmxhbmRcIixcclxuICAgIFwiU1lcIjogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFxyXG4gICAgXCJUV1wiOiBcIlRhaXdhbiAoUHJvdmluY2Ugb2YgQ2hpbmEpXCIsXHJcbiAgICBcIlRKXCI6IFwiVGFqaWtpc3RhblwiLFxyXG4gICAgXCJUWlwiOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIixcclxuICAgIFwiVEhcIjogXCJUaGFpbGFuZFwiLFxyXG4gICAgXCJUTFwiOiBcIlRpbW9yLUxlc3RlXCIsXHJcbiAgICBcIlRHXCI6IFwiVG9nb1wiLFxyXG4gICAgXCJUS1wiOiBcIlRva2VsYXVcIixcclxuICAgIFwiVE9cIjogXCJUb25nYVwiLFxyXG4gICAgXCJUVFwiOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixcclxuICAgIFwiVE5cIjogXCJUdW5pc2lhXCIsXHJcbiAgICBcIlRSXCI6IFwiVHVya2V5XCIsXHJcbiAgICBcIlRNXCI6IFwiVHVya21lbmlzdGFuXCIsXHJcbiAgICBcIlRDXCI6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpXCIsXHJcbiAgICBcIlRWXCI6IFwiVHV2YWx1XCIsXHJcbiAgICBcIlVHXCI6IFwiVWdhbmRhXCIsXHJcbiAgICBcIlVBXCI6IFwiVWtyYWluZVwiLFxyXG4gICAgXCJBRVwiOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpXCIsXHJcbiAgICBcIkdCXCI6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZCAodGhlKVwiLFxyXG4gICAgXCJVTVwiOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKVwiLFxyXG4gICAgXCJVU1wiOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKVwiLFxyXG4gICAgXCJVWVwiOiBcIlVydWd1YXlcIixcclxuICAgIFwiVVpcIjogXCJVemJla2lzdGFuXCIsXHJcbiAgICBcIlZVXCI6IFwiVmFudWF0dVwiLFxyXG4gICAgXCJWRVwiOiBcIlZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZilcIixcclxuICAgIFwiVk5cIjogXCJWaWV0IE5hbVwiLFxyXG4gICAgXCJWR1wiOiBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwiLFxyXG4gICAgXCJWSVwiOiBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwiLFxyXG4gICAgXCJXRlwiOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsXHJcbiAgICBcIkVIXCI6IFwiV2VzdGVybiBTYWhhcmFcIixcclxuICAgIFwiWUVcIjogXCJZZW1lblwiLFxyXG4gICAgXCJaTVwiOiBcIlphbWJpYVwiLFxyXG4gICAgXCJaV1wiOiBcIlppbWJhYndlXCIgKi9cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy88VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkNvdW50cnkgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduID1cInJpZ2h0XCI+QWJicmV2aWF0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5hYnZ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIC8vPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=