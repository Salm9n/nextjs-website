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
/*'AL': 'Albania',
'DZ': 'Algeria',
'AS': 'American Samoa',
'AD': 'Andorra',
'AO': 'Angola',
'AI': 'Anguilla',
'AQ': 'Antarctica',
'AG': 'Antigua and Barbuda',
'AR': 'Argentina',
'AM': 'Armenia',
'AW': 'Aruba',
'AU': 'Australia',
'AT': 'Austria',
'AZ': 'Azerbaijan',
'BS': 'Bahamas (the)',
'BH': 'Bahrain',
'BD': 'Bangladesh',
'BB': 'Barbados',
'BY': 'Belarus',
'BE': 'Belgium',
'BZ': 'Belize',
'BJ': 'Benin',
'BM': 'Bermuda',
'BT': 'Bhutan',
'BO': 'Bolivia (Plurinational State of)',
'BQ': 'Bonaire, Sint Eustatius and Saba',
'BA': 'Bosnia and Herzegovina',
'BW': 'Botswana',
'BV': 'Bouvet Island',
'BR': 'Brazil',
'IO': 'British Indian Ocean Territory (the)',
'BN': 'Brunei Darussalam',
'BG': 'Bulgaria',
'BF': 'Burkina Faso',
'BI': 'Burundi',
'CV': 'Cabo Verde',
'KH': 'Cambodia',
'CM': 'Cameroon',
'CA': 'Canada',
'KY': 'Cayman Islands (the)',
'CF': 'Central African Republic (the)',
'TD': 'Chad',
'CL': 'Chile',
'CN': 'China',
'CX': 'Christmas Island',
'CC': 'Cocos (Keeling) Islands (the)',
'CO': 'Colombia',
'KM': 'Comoros (the)',
'CD': 'Congo (the Democratic Republic of the)',
'CG': 'Congo (the)',
'CK': 'Cook Islands (the)',
'CR': 'Costa Rica',
'HR': 'Croatia',
'CU': 'Cuba',
'CW': 'Curaçao',
'CY': 'Cyprus',
'CZ': 'Czechia',
'CI': 'Côte d'Ivoire',
'DK': 'Denmark',
'DJ': 'Djibouti',
'DM': 'Dominica',
'DO': 'Dominican Republic (the)',
'EC': 'Ecuador',
'EG': 'Egypt',
'SV': 'El Salvador',
'GQ': 'Equatorial Guinea',
'ER': 'Eritrea',
'EE': 'Estonia',
'SZ': 'Eswatini',
'ET': 'Ethiopia',
'FK': 'Falkland Islands (the) [Malvinas]',
'FO': 'Faroe Islands (the)',
'FJ': 'Fiji',
'FI': 'Finland',
'FR': 'France',
'GF': 'French Guiana',
'PF': 'French Polynesia',
'TF': 'French Southern Territories (the)',
'GA': 'Gabon',
'GM': 'Gambia (the)',
'GE': 'Georgia',
'DE': 'Germany',
'GH': 'Ghana',
'GI': 'Gibraltar',
'GR': 'Greece',
'GL': 'Greenland',
'GD': 'Grenada',
'GP': 'Guadeloupe',
'GU': 'Guam',
'GT': 'Guatemala',
'GG': 'Guernsey',
'GN': 'Guinea',
'GW': 'Guinea-Bissau',
'GY': 'Guyana',
'HT': 'Haiti',
'HM': 'Heard Island and McDonald Islands',
'VA': 'Holy See (the)',
'HN': 'Honduras',
'HK': 'Hong Kong',
'HU': 'Hungary',
'IS': 'Iceland',
'IN': 'India',
'ID': 'Indonesia',
'IR': 'Iran (Islamic Republic of)',
'IQ': 'Iraq',
'IE': 'Ireland',
'IM': 'Isle of Man',
'IL': 'Israel',
'IT': 'Italy',
'JM': 'Jamaica',
'JP': 'Japan',
'JE': 'Jersey',
'JO': 'Jordan',
'KZ': 'Kazakhstan',
'KE': 'Kenya',
'KI': 'Kiribati',
'KP': 'Korea (the Democratic People's Republic of)',
'KR': 'Korea (the Republic of)',
'KW': 'Kuwait',
'KG': 'Kyrgyzstan',
'LA': 'Lao People's Democratic Republic (the)',
'LV': 'Latvia',
'LB': 'Lebanon',
'LS': 'Lesotho',
'LR': 'Liberia',
'LY': 'Libya',
'LI': 'Liechtenstein',
'LT': 'Lithuania',
'LU': 'Luxembourg',
'MO': 'Macao',
'MG': 'Madagascar',
'MW': 'Malawi',
'MY': 'Malaysia',
'MV': 'Maldives',
'ML': 'Mali',
'MT': 'Malta',
'MH': 'Marshall Islands (the)',
'MQ': 'Martinique',
'MR': 'Mauritania',
'MU': 'Mauritius',
'YT': 'Mayotte',
'MX': 'Mexico',
'FM': 'Micronesia (Federated States of)',
'MD': 'Moldova (the Republic of)',
'MC': 'Monaco',
'MN': 'Mongolia',
'ME': 'Montenegro',
'MS': 'Montserrat',
'MA': 'Morocco',
'MZ': 'Mozambique',
'MM': 'Myanmar',
'NA': 'Namibia',
'NR': 'Nauru',
'NP': 'Nepal',
'NL': 'Netherlands (the)',
'NC': 'New Caledonia',
'NZ': 'New Zealand',
'NI': 'Nicaragua',
'NE': 'Niger (the)',
'NG': 'Nigeria',
'NU': 'Niue',
'NF': 'Norfolk Island',
'MP': 'Northern Mariana Islands (the)',
'NO': 'Norway',
'OM': 'Oman',
'PK': 'Pakistan',
'PW': 'Palau',
'PS': 'Palestine, State of',
'PA': 'Panama',
'PG': 'Papua New Guinea',
'PY': 'Paraguay',
'PE': 'Peru',
'PH': 'Philippines (the)',
'PN': 'Pitcairn',
'PL': 'Poland',
'PT': 'Portugal',
'PR': 'Puerto Rico',
'QA': 'Qatar',
'MK': 'Republic of North Macedonia',
'RO': 'Romania',
'RU': 'Russian Federation (the)',
'RW': 'Rwanda',
'RE': 'Réunion',
'BL': 'Saint Barthélemy',
'SH': 'Saint Helena, Ascension and Tristan da Cunha',
'KN': 'Saint Kitts and Nevis',
'LC': 'Saint Lucia',
'MF': 'Saint Martin (French part)',
'PM': 'Saint Pierre and Miquelon',
'VC': 'Saint Vincent and the Grenadines',
'WS': 'Samoa',
'SM': 'San Marino',
'ST': 'Sao Tome and Principe',
'SA': 'Saudi Arabia',
'SN': 'Senegal',
'RS': 'Serbia',
'SC': 'Seychelles',
'SL': 'Sierra Leone',
'SG': 'Singapore',
'SX': 'Sint Maarten (Dutch part)',
'SK': 'Slovakia',
'SI': 'Slovenia',
'SB': 'Solomon Islands',
'SO': 'Somalia',
'ZA': 'South Africa',
'GS': 'South Georgia and the South Sandwich Islands',
'SS': 'South Sudan',
'ES': 'Spain',
'LK': 'Sri Lanka',
'SD': 'Sudan (the)',
'SR': 'Suriname',
'SJ': 'Svalbard and Jan Mayen',
'SE': 'Sweden',
'CH': 'Switzerland',
'SY': 'Syrian Arab Republic',
'TW': 'Taiwan (Province of China)',
'TJ': 'Tajikistan',
'TZ': 'Tanzania, United Republic of',
'TH': 'Thailand',
'TL': 'Timor-Leste',
'TG': 'Togo',
'TK': 'Tokelau',
'TO': 'Tonga',
'TT': 'Trinidad and Tobago',
'TN': 'Tunisia',
'TR': 'Turkey',
'TM': 'Turkmenistan',
'TC': 'Turks and Caicos Islands (the)',
'TV': 'Tuvalu',
'UG': 'Uganda',
'UA': 'Ukraine',
'AE': 'United Arab Emirates (the)',
'GB': 'United Kingdom of Great Britain and Northern Ireland (the)',
'UM': 'United States Minor Outlying Islands (the)',
'US': 'United States of America (the)',
'UY': 'Uruguay',
'UZ': 'Uzbekistan',
'VU': 'Vanuatu',
'VE': 'Venezuela (Bolivarian Republic of)',
'VN': 'Viet Nam',
'VG': 'Virgin Islands (British)',
'VI': 'Virgin Islands (U.S.)',
'WF': 'Wallis and Futuna',
'EH': 'Western Sahara',
'YE': 'Yemen',
'ZM': 'Zambia',
'ZW': 'Zimbabwe' */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWF4V2lkdGgiLCJjcmVhdGVDb3VudHJ5IiwiYWJ2IiwibmFtZSIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIm1hcCIsInJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETDtBQURvQixDQUFELENBQTVCOztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQyxTQUFPO0FBQUVELE9BQUcsRUFBSEEsR0FBRjtBQUFPQyxRQUFJLEVBQUpBO0FBQVAsR0FBUDtBQUNEOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNUSCxhQUFhLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FESixFQUVUQSxhQUFhLENBQUMsSUFBRCxFQUFPLGVBQVA7QUFDYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpQYSxDQUFiO0FBNFBlLFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNFO0FBQ0Usa0VBQUMsNERBQUQ7QUFBTyxlQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsS0FBMUI7QUFBaUMsb0JBQVcsY0FBNUM7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsa0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBQSxrQkFDR0ssSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDhCQUNSLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDLElBQXJCO0FBQTBCLG1CQUFLLEVBQUMsS0FBaEM7QUFBQSx3QkFDR0EsR0FBRyxDQUFDTDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJLLEdBQUcsQ0FBQ047QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQWVNLEdBQUcsQ0FBQ0wsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosQ0FvQkU7O0FBcEJGO0FBc0JEOztHQXpCdUJFLFU7VUFDTlIsUzs7O0tBRE1RLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuMjZhN2VjNGRhNWZjM2Q2YzlmZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1heFdpZHRoOiA2NTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5KGFidiwgbmFtZSkge1xyXG4gIHJldHVybiB7IGFidiwgbmFtZSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gICAgY3JlYXRlQ291bnRyeSgnQUYnLCAnQWZnaGFuaXN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FYJywgJ8OFbGFuZCBJc2xhbmRzJyksXHJcbiAgICAvKidBTCc6ICdBbGJhbmlhJyxcclxuICAgICdEWic6ICdBbGdlcmlhJyxcclxuICAgICdBUyc6ICdBbWVyaWNhbiBTYW1vYScsXHJcbiAgICAnQUQnOiAnQW5kb3JyYScsXHJcbiAgICAnQU8nOiAnQW5nb2xhJyxcclxuICAgICdBSSc6ICdBbmd1aWxsYScsXHJcbiAgICAnQVEnOiAnQW50YXJjdGljYScsXHJcbiAgICAnQUcnOiAnQW50aWd1YSBhbmQgQmFyYnVkYScsXHJcbiAgICAnQVInOiAnQXJnZW50aW5hJyxcclxuICAgICdBTSc6ICdBcm1lbmlhJyxcclxuICAgICdBVyc6ICdBcnViYScsXHJcbiAgICAnQVUnOiAnQXVzdHJhbGlhJyxcclxuICAgICdBVCc6ICdBdXN0cmlhJyxcclxuICAgICdBWic6ICdBemVyYmFpamFuJyxcclxuICAgICdCUyc6ICdCYWhhbWFzICh0aGUpJyxcclxuICAgICdCSCc6ICdCYWhyYWluJyxcclxuICAgICdCRCc6ICdCYW5nbGFkZXNoJyxcclxuICAgICdCQic6ICdCYXJiYWRvcycsXHJcbiAgICAnQlknOiAnQmVsYXJ1cycsXHJcbiAgICAnQkUnOiAnQmVsZ2l1bScsXHJcbiAgICAnQlonOiAnQmVsaXplJyxcclxuICAgICdCSic6ICdCZW5pbicsXHJcbiAgICAnQk0nOiAnQmVybXVkYScsXHJcbiAgICAnQlQnOiAnQmh1dGFuJyxcclxuICAgICdCTyc6ICdCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKScsXHJcbiAgICAnQlEnOiAnQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmEnLFxyXG4gICAgJ0JBJzogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgJ0JXJzogJ0JvdHN3YW5hJyxcclxuICAgICdCVic6ICdCb3V2ZXQgSXNsYW5kJyxcclxuICAgICdCUic6ICdCcmF6aWwnLFxyXG4gICAgJ0lPJzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKScsXHJcbiAgICAnQk4nOiAnQnJ1bmVpIERhcnVzc2FsYW0nLFxyXG4gICAgJ0JHJzogJ0J1bGdhcmlhJyxcclxuICAgICdCRic6ICdCdXJraW5hIEZhc28nLFxyXG4gICAgJ0JJJzogJ0J1cnVuZGknLFxyXG4gICAgJ0NWJzogJ0NhYm8gVmVyZGUnLFxyXG4gICAgJ0tIJzogJ0NhbWJvZGlhJyxcclxuICAgICdDTSc6ICdDYW1lcm9vbicsXHJcbiAgICAnQ0EnOiAnQ2FuYWRhJyxcclxuICAgICdLWSc6ICdDYXltYW4gSXNsYW5kcyAodGhlKScsXHJcbiAgICAnQ0YnOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpJyxcclxuICAgICdURCc6ICdDaGFkJyxcclxuICAgICdDTCc6ICdDaGlsZScsXHJcbiAgICAnQ04nOiAnQ2hpbmEnLFxyXG4gICAgJ0NYJzogJ0NocmlzdG1hcyBJc2xhbmQnLFxyXG4gICAgJ0NDJzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpJyxcclxuICAgICdDTyc6ICdDb2xvbWJpYScsXHJcbiAgICAnS00nOiAnQ29tb3JvcyAodGhlKScsXHJcbiAgICAnQ0QnOiAnQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSknLFxyXG4gICAgJ0NHJzogJ0NvbmdvICh0aGUpJyxcclxuICAgICdDSyc6ICdDb29rIElzbGFuZHMgKHRoZSknLFxyXG4gICAgJ0NSJzogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgJ0hSJzogJ0Nyb2F0aWEnLFxyXG4gICAgJ0NVJzogJ0N1YmEnLFxyXG4gICAgJ0NXJzogJ0N1cmHDp2FvJyxcclxuICAgICdDWSc6ICdDeXBydXMnLFxyXG4gICAgJ0NaJzogJ0N6ZWNoaWEnLFxyXG4gICAgJ0NJJzogJ0PDtHRlIGQnSXZvaXJlJyxcclxuICAgICdESyc6ICdEZW5tYXJrJyxcclxuICAgICdESic6ICdEamlib3V0aScsXHJcbiAgICAnRE0nOiAnRG9taW5pY2EnLFxyXG4gICAgJ0RPJzogJ0RvbWluaWNhbiBSZXB1YmxpYyAodGhlKScsXHJcbiAgICAnRUMnOiAnRWN1YWRvcicsXHJcbiAgICAnRUcnOiAnRWd5cHQnLFxyXG4gICAgJ1NWJzogJ0VsIFNhbHZhZG9yJyxcclxuICAgICdHUSc6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICAnRVInOiAnRXJpdHJlYScsXHJcbiAgICAnRUUnOiAnRXN0b25pYScsXHJcbiAgICAnU1onOiAnRXN3YXRpbmknLFxyXG4gICAgJ0VUJzogJ0V0aGlvcGlhJyxcclxuICAgICdGSyc6ICdGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc10nLFxyXG4gICAgJ0ZPJzogJ0Zhcm9lIElzbGFuZHMgKHRoZSknLFxyXG4gICAgJ0ZKJzogJ0ZpamknLFxyXG4gICAgJ0ZJJzogJ0ZpbmxhbmQnLFxyXG4gICAgJ0ZSJzogJ0ZyYW5jZScsXHJcbiAgICAnR0YnOiAnRnJlbmNoIEd1aWFuYScsXHJcbiAgICAnUEYnOiAnRnJlbmNoIFBvbHluZXNpYScsXHJcbiAgICAnVEYnOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpJyxcclxuICAgICdHQSc6ICdHYWJvbicsXHJcbiAgICAnR00nOiAnR2FtYmlhICh0aGUpJyxcclxuICAgICdHRSc6ICdHZW9yZ2lhJyxcclxuICAgICdERSc6ICdHZXJtYW55JyxcclxuICAgICdHSCc6ICdHaGFuYScsXHJcbiAgICAnR0knOiAnR2licmFsdGFyJyxcclxuICAgICdHUic6ICdHcmVlY2UnLFxyXG4gICAgJ0dMJzogJ0dyZWVubGFuZCcsXHJcbiAgICAnR0QnOiAnR3JlbmFkYScsXHJcbiAgICAnR1AnOiAnR3VhZGVsb3VwZScsXHJcbiAgICAnR1UnOiAnR3VhbScsXHJcbiAgICAnR1QnOiAnR3VhdGVtYWxhJyxcclxuICAgICdHRyc6ICdHdWVybnNleScsXHJcbiAgICAnR04nOiAnR3VpbmVhJyxcclxuICAgICdHVyc6ICdHdWluZWEtQmlzc2F1JyxcclxuICAgICdHWSc6ICdHdXlhbmEnLFxyXG4gICAgJ0hUJzogJ0hhaXRpJyxcclxuICAgICdITSc6ICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnLFxyXG4gICAgJ1ZBJzogJ0hvbHkgU2VlICh0aGUpJyxcclxuICAgICdITic6ICdIb25kdXJhcycsXHJcbiAgICAnSEsnOiAnSG9uZyBLb25nJyxcclxuICAgICdIVSc6ICdIdW5nYXJ5JyxcclxuICAgICdJUyc6ICdJY2VsYW5kJyxcclxuICAgICdJTic6ICdJbmRpYScsXHJcbiAgICAnSUQnOiAnSW5kb25lc2lhJyxcclxuICAgICdJUic6ICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScsXHJcbiAgICAnSVEnOiAnSXJhcScsXHJcbiAgICAnSUUnOiAnSXJlbGFuZCcsXHJcbiAgICAnSU0nOiAnSXNsZSBvZiBNYW4nLFxyXG4gICAgJ0lMJzogJ0lzcmFlbCcsXHJcbiAgICAnSVQnOiAnSXRhbHknLFxyXG4gICAgJ0pNJzogJ0phbWFpY2EnLFxyXG4gICAgJ0pQJzogJ0phcGFuJyxcclxuICAgICdKRSc6ICdKZXJzZXknLFxyXG4gICAgJ0pPJzogJ0pvcmRhbicsXHJcbiAgICAnS1onOiAnS2F6YWtoc3RhbicsXHJcbiAgICAnS0UnOiAnS2VueWEnLFxyXG4gICAgJ0tJJzogJ0tpcmliYXRpJyxcclxuICAgICdLUCc6ICdLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpJyxcclxuICAgICdLUic6ICdLb3JlYSAodGhlIFJlcHVibGljIG9mKScsXHJcbiAgICAnS1cnOiAnS3V3YWl0JyxcclxuICAgICdLRyc6ICdLeXJneXpzdGFuJyxcclxuICAgICdMQSc6ICdMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYyAodGhlKScsXHJcbiAgICAnTFYnOiAnTGF0dmlhJyxcclxuICAgICdMQic6ICdMZWJhbm9uJyxcclxuICAgICdMUyc6ICdMZXNvdGhvJyxcclxuICAgICdMUic6ICdMaWJlcmlhJyxcclxuICAgICdMWSc6ICdMaWJ5YScsXHJcbiAgICAnTEknOiAnTGllY2h0ZW5zdGVpbicsXHJcbiAgICAnTFQnOiAnTGl0aHVhbmlhJyxcclxuICAgICdMVSc6ICdMdXhlbWJvdXJnJyxcclxuICAgICdNTyc6ICdNYWNhbycsXHJcbiAgICAnTUcnOiAnTWFkYWdhc2NhcicsXHJcbiAgICAnTVcnOiAnTWFsYXdpJyxcclxuICAgICdNWSc6ICdNYWxheXNpYScsXHJcbiAgICAnTVYnOiAnTWFsZGl2ZXMnLFxyXG4gICAgJ01MJzogJ01hbGknLFxyXG4gICAgJ01UJzogJ01hbHRhJyxcclxuICAgICdNSCc6ICdNYXJzaGFsbCBJc2xhbmRzICh0aGUpJyxcclxuICAgICdNUSc6ICdNYXJ0aW5pcXVlJyxcclxuICAgICdNUic6ICdNYXVyaXRhbmlhJyxcclxuICAgICdNVSc6ICdNYXVyaXRpdXMnLFxyXG4gICAgJ1lUJzogJ01heW90dGUnLFxyXG4gICAgJ01YJzogJ01leGljbycsXHJcbiAgICAnRk0nOiAnTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZiknLFxyXG4gICAgJ01EJzogJ01vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZiknLFxyXG4gICAgJ01DJzogJ01vbmFjbycsXHJcbiAgICAnTU4nOiAnTW9uZ29saWEnLFxyXG4gICAgJ01FJzogJ01vbnRlbmVncm8nLFxyXG4gICAgJ01TJzogJ01vbnRzZXJyYXQnLFxyXG4gICAgJ01BJzogJ01vcm9jY28nLFxyXG4gICAgJ01aJzogJ01vemFtYmlxdWUnLFxyXG4gICAgJ01NJzogJ015YW5tYXInLFxyXG4gICAgJ05BJzogJ05hbWliaWEnLFxyXG4gICAgJ05SJzogJ05hdXJ1JyxcclxuICAgICdOUCc6ICdOZXBhbCcsXHJcbiAgICAnTkwnOiAnTmV0aGVybGFuZHMgKHRoZSknLFxyXG4gICAgJ05DJzogJ05ldyBDYWxlZG9uaWEnLFxyXG4gICAgJ05aJzogJ05ldyBaZWFsYW5kJyxcclxuICAgICdOSSc6ICdOaWNhcmFndWEnLFxyXG4gICAgJ05FJzogJ05pZ2VyICh0aGUpJyxcclxuICAgICdORyc6ICdOaWdlcmlhJyxcclxuICAgICdOVSc6ICdOaXVlJyxcclxuICAgICdORic6ICdOb3Jmb2xrIElzbGFuZCcsXHJcbiAgICAnTVAnOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpJyxcclxuICAgICdOTyc6ICdOb3J3YXknLFxyXG4gICAgJ09NJzogJ09tYW4nLFxyXG4gICAgJ1BLJzogJ1Bha2lzdGFuJyxcclxuICAgICdQVyc6ICdQYWxhdScsXHJcbiAgICAnUFMnOiAnUGFsZXN0aW5lLCBTdGF0ZSBvZicsXHJcbiAgICAnUEEnOiAnUGFuYW1hJyxcclxuICAgICdQRyc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgICdQWSc6ICdQYXJhZ3VheScsXHJcbiAgICAnUEUnOiAnUGVydScsXHJcbiAgICAnUEgnOiAnUGhpbGlwcGluZXMgKHRoZSknLFxyXG4gICAgJ1BOJzogJ1BpdGNhaXJuJyxcclxuICAgICdQTCc6ICdQb2xhbmQnLFxyXG4gICAgJ1BUJzogJ1BvcnR1Z2FsJyxcclxuICAgICdQUic6ICdQdWVydG8gUmljbycsXHJcbiAgICAnUUEnOiAnUWF0YXInLFxyXG4gICAgJ01LJzogJ1JlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYScsXHJcbiAgICAnUk8nOiAnUm9tYW5pYScsXHJcbiAgICAnUlUnOiAnUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpJyxcclxuICAgICdSVyc6ICdSd2FuZGEnLFxyXG4gICAgJ1JFJzogJ1LDqXVuaW9uJyxcclxuICAgICdCTCc6ICdTYWludCBCYXJ0aMOpbGVteScsXHJcbiAgICAnU0gnOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGEnLFxyXG4gICAgJ0tOJzogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICAnTEMnOiAnU2FpbnQgTHVjaWEnLFxyXG4gICAgJ01GJzogJ1NhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpJyxcclxuICAgICdQTSc6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgICdWQyc6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICAnV1MnOiAnU2Ftb2EnLFxyXG4gICAgJ1NNJzogJ1NhbiBNYXJpbm8nLFxyXG4gICAgJ1NUJzogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXHJcbiAgICAnU0EnOiAnU2F1ZGkgQXJhYmlhJyxcclxuICAgICdTTic6ICdTZW5lZ2FsJyxcclxuICAgICdSUyc6ICdTZXJiaWEnLFxyXG4gICAgJ1NDJzogJ1NleWNoZWxsZXMnLFxyXG4gICAgJ1NMJzogJ1NpZXJyYSBMZW9uZScsXHJcbiAgICAnU0cnOiAnU2luZ2Fwb3JlJyxcclxuICAgICdTWCc6ICdTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpJyxcclxuICAgICdTSyc6ICdTbG92YWtpYScsXHJcbiAgICAnU0knOiAnU2xvdmVuaWEnLFxyXG4gICAgJ1NCJzogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICAnU08nOiAnU29tYWxpYScsXHJcbiAgICAnWkEnOiAnU291dGggQWZyaWNhJyxcclxuICAgICdHUyc6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICAnU1MnOiAnU291dGggU3VkYW4nLFxyXG4gICAgJ0VTJzogJ1NwYWluJyxcclxuICAgICdMSyc6ICdTcmkgTGFua2EnLFxyXG4gICAgJ1NEJzogJ1N1ZGFuICh0aGUpJyxcclxuICAgICdTUic6ICdTdXJpbmFtZScsXHJcbiAgICAnU0onOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICAnU0UnOiAnU3dlZGVuJyxcclxuICAgICdDSCc6ICdTd2l0emVybGFuZCcsXHJcbiAgICAnU1knOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLFxyXG4gICAgJ1RXJzogJ1RhaXdhbiAoUHJvdmluY2Ugb2YgQ2hpbmEpJyxcclxuICAgICdUSic6ICdUYWppa2lzdGFuJyxcclxuICAgICdUWic6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcclxuICAgICdUSCc6ICdUaGFpbGFuZCcsXHJcbiAgICAnVEwnOiAnVGltb3ItTGVzdGUnLFxyXG4gICAgJ1RHJzogJ1RvZ28nLFxyXG4gICAgJ1RLJzogJ1Rva2VsYXUnLFxyXG4gICAgJ1RPJzogJ1RvbmdhJyxcclxuICAgICdUVCc6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcclxuICAgICdUTic6ICdUdW5pc2lhJyxcclxuICAgICdUUic6ICdUdXJrZXknLFxyXG4gICAgJ1RNJzogJ1R1cmttZW5pc3RhbicsXHJcbiAgICAnVEMnOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpJyxcclxuICAgICdUVic6ICdUdXZhbHUnLFxyXG4gICAgJ1VHJzogJ1VnYW5kYScsXHJcbiAgICAnVUEnOiAnVWtyYWluZScsXHJcbiAgICAnQUUnOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSknLFxyXG4gICAgJ0dCJzogJ1VuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSknLFxyXG4gICAgJ1VNJzogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKScsXHJcbiAgICAnVVMnOiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpJyxcclxuICAgICdVWSc6ICdVcnVndWF5JyxcclxuICAgICdVWic6ICdVemJla2lzdGFuJyxcclxuICAgICdWVSc6ICdWYW51YXR1JyxcclxuICAgICdWRSc6ICdWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpJyxcclxuICAgICdWTic6ICdWaWV0IE5hbScsXHJcbiAgICAnVkcnOiAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcclxuICAgICdWSSc6ICdWaXJnaW4gSXNsYW5kcyAoVS5TLiknLFxyXG4gICAgJ1dGJzogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgICdFSCc6ICdXZXN0ZXJuIFNhaGFyYScsXHJcbiAgICAnWUUnOiAnWWVtZW4nLFxyXG4gICAgJ1pNJzogJ1phbWJpYScsXHJcbiAgICAnWlcnOiAnWmltYmFid2UnICovXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1RhYmxlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q291bnRyeSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ24gPSdyaWdodCc+QWJicmV2aWF0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9J3RoJyBzY29wZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+e3Jvdy5hYnZ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIC8vPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=