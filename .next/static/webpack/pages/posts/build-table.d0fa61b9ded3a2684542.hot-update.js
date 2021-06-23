self["webpackHotUpdate_N_E"]("pages/posts/build-table",{

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['elevation', 'outlined'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Paper__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    overflowX: 'auto'
  }
};
var TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableContainer(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className)
  }, other));
});
 true ? TableContainer.propTypes = {
  /**
   * The table itself, normally `<Table />`
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiTableContainer'
})(TableContainer));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableContainer/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableContainer/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableContainer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");


/***/ }),

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
    maxWidth: 500
  }
});

function createCountry(abv, name) {
  return {
    abv: abv,
    name: name
  };
}

var rows = [createCountry('AF', 'Afghanistan'), createCountry('AX', 'Åland Islands'), createCountry('AL', 'Albania'), createCountry('DZ', 'Algeria'), createCountry('AS', 'American Samoa'), createCountry('AD', 'Andorra'), createCountry('AO', 'Angola'), createCountry('AI', 'Anguilla'), createCountry('AQ', 'Antarctica'), createCountry('AG', 'Antigua and Barbuda'), createCountry('AR', 'Argentina'), createCountry('AM', 'Armenia'), createCountry('AW', 'Aruba'), createCountry('AU', 'Australia'), createCountry('AT', 'Austria'), createCountry('AZ', 'Azerbaijan'), createCountry('BS', 'Bahamas (the)'), createCountry('BH', 'Bahrain'), createCountry('BD', 'Bangladesh'), createCountry('BB', 'Barbados'), createCountry('BY', 'Belarus'), createCountry('BE', 'Belgium'), createCountry('BZ', 'Belize'), createCountry('BJ', 'Benin'), createCountry('BM', 'Bermuda'), createCountry('BT', 'Bhutan'), createCountry('BO', 'Bolivia (Plurinational State of)'), createCountry('BQ', 'Bonaire, Sint Eustatius and Saba'), createCountry('BA', 'Bosnia and Herzegovina'), createCountry('BW', 'Botswana'), createCountry('BV', 'Bouvet Island'), createCountry('BR', 'Brazil'), createCountry('IO', 'British Indian Ocean Territory(the)'), createCountry('BN', 'Brunei Darussalam'), createCountry('BG', 'Bulgaria'), createCountry('BF', 'Burkina Faso'), createCountry('BI', 'Burundi'), createCountry('CV', 'Cabo Verde'), createCountry('KH', 'Cambodia'), createCountry('CM', 'Cameroon'), createCountry('CA', 'Canada'), createCountry('KY', 'Cayman Islands (the)'), createCountry('CF', 'Central African Republic (the)'), createCountry('TD', 'Chad'), createCountry('CL', 'Chile'), createCountry('CN', 'China'), createCountry('CX', 'Christmas Island'), createCountry('CC', 'Cocos (Keeling) Islands (the)'), createCountry('CO', 'Colombia'), createCountry('KM', 'Comoros (the)'), createCountry('CD', 'Congo (the Democratic Republic of the)'), createCountry('CG', 'Congo (the)'), createCountry('CK', 'Cook Islands (the)'), createCountry('CR', 'Costa Rica'), createCountry('HR', 'Croatia'), createCountry('CU', 'Cuba'), createCountry('CW', 'Curaçao'), createCountry('CY', 'Cyprus'), createCountry('CZ', 'Czechia'), createCountry('CI', 'Côte d\'Ivoire'), createCountry('DK', 'Denmark'), createCountry('DJ', 'Djibouti'), createCountry('DM', 'Dominica'), createCountry('DO', 'Dominican Republic (the)'), createCountry('EC', 'Ecuador'), createCountry('EG', 'Egypt'), createCountry('SV', 'El Salvador'), createCountry('GQ', 'Equatorial Guinea'), createCountry('ER', 'Eritrea'), createCountry('EE', 'Estonia'), createCountry('SZ', 'Eswatini'), createCountry('ET', 'Ethiopia'), createCountry('FK', 'Falkland Islands (the) [Malvinas]'), createCountry('FO', 'Faroe Islands (the)'), createCountry('FJ', 'Fiji'), createCountry('FI', 'Finland'), createCountry('FR', 'France'), createCountry('GF', 'French Guiana'), createCountry('PF', 'French Polynesia'), createCountry('TF', 'French Southern Territories (the)'), createCountry('GA', 'Gabon'), createCountry('GM', 'Gambia (the)'), createCountry('GE', 'Georgia'), createCountry('DE', 'Germany'), createCountry('GH', 'Ghana'), createCountry('GI', 'Gibraltar'), createCountry('GR', 'Greece'), createCountry('GL', 'Greenland'), createCountry('GD', 'Grenada'), createCountry('GP', 'Guadeloupe'), createCountry('GU', 'Guam'), createCountry('GT', 'Guatemala'), createCountry('GG', 'Guernsey'), createCountry('GN', 'Guinea'), createCountry('GW', 'Guinea-Bissau'), createCountry('GY', 'Guyana'), createCountry('HT', 'Haiti'), createCountry('HM', 'Heard Island and McDonald Islands'), createCountry('VA', 'Holy See (the)'), createCountry('HN', 'Honduras'), createCountry('HK', 'Hong Kong'), createCountry('HU', 'Hungary'), createCountry('IS', 'Iceland'), createCountry('IN', 'India'), createCountry('ID', 'Indonesia'), createCountry('IR', 'Iran (Islamic Republic of)'), createCountry('IQ', 'Iraq'), createCountry('IE', 'Ireland'), createCountry('IM', 'Isle of Man'), createCountry('IL', 'Israel'), createCountry('IT', 'Italy'), createCountry('JM', 'Jamaica'), createCountry('JP', 'Japan'), createCountry('JE', 'Jersey'), createCountry('JO', 'Jordan'), createCountry('KZ', 'Kazakhstan'), createCountry('KE', 'Kenya'), createCountry('KI', 'Kiribati'), createCountry('KP', 'Korea (the Democratic People\'s Republic of)'), createCountry('KR', 'Korea (the Republic of)'), createCountry('KW', 'Kuwait'), createCountry('KG', 'Kyrgyzstan'), createCountry('LA', 'Lao People\'s Democratic Republic (the)'), createCountry('LV', 'Latvia'), createCountry('LB', 'Lebanon'), createCountry('LS', 'Lesotho'), createCountry('LR', 'Liberia'), createCountry('LY', 'Libya'), createCountry('LI', 'Liechtenstein'), createCountry('LT', 'Lithuania'), createCountry('LU', 'Luxembourg'), createCountry('MO', 'Macao'), createCountry('MG', 'Madagascar'), createCountry('MW', 'Malawi'), createCountry('MY', 'Malaysia'), createCountry('MV', 'Maldives'), createCountry('ML', 'Mali'), createCountry('MT', 'Malta'), createCountry('MH', 'Marshall Islands (the)'), createCountry('MQ', 'Martinique'), createCountry('MR', 'Mauritania'), createCountry('MU', 'Mauritius'), createCountry('YT', 'Mayotte'), createCountry('MX', 'Mexico'), createCountry('FM', 'Micronesia (Federated States of)'), createCountry('MD', 'Moldova (the Republic of)'), createCountry('MC', 'Monaco'), createCountry('MN', 'Mongolia'), createCountry('ME', 'Montenegro'), createCountry('MS', 'Montserrat'), createCountry('MA', 'Morocco'), createCountry('MZ', 'Mozambique'), createCountry('MM', 'Myanmar'), createCountry('NA', 'Namibia'), createCountry('NR', 'Nauru'), createCountry('NP', 'Nepal'), createCountry('NL', 'Netherlands (the)'), createCountry('NC', 'New Caledonia'), createCountry('NZ', 'New Zealand'), createCountry('NI', 'Nicaragua'), createCountry('NE', 'Niger (the)'), createCountry('NG', 'Nigeria'), createCountry('NU', 'Niue'), createCountry('NF', 'Norfolk Island'), createCountry('MP', 'Northern Mariana Islands (the)'), createCountry('NO', 'Norway'), createCountry('OM', 'Oman'), createCountry('PK', 'Pakistan'), createCountry('PW', 'Palau'), createCountry('PS', 'Palestine, State of'), createCountry('PA', 'Panama'), createCountry('PG', 'Papua New Guinea'), createCountry('PY', 'Paraguay'), createCountry('PE', 'Peru'), createCountry('PH', 'Philippines (the)'), createCountry('PN', 'Pitcairn'), createCountry('PL', 'Poland'), createCountry('PT', 'Portugal'), createCountry('PR', 'Puerto Rico'), createCountry('QA', 'Qatar'), createCountry('MK', 'Republic of North Macedonia'), createCountry('RO', 'Romania'), createCountry('RU', 'Russian Federation (the)'), createCountry('RW', 'Rwanda'), createCountry('RE', 'Réunion'), createCountry('BL', 'Saint Barthélemy'), createCountry('SH', 'Saint Helena, Ascension and Tristan da Cunha'), createCountry('KN', 'Saint Kitts and Nevis'), createCountry('LC', 'Saint Lucia'), createCountry('MF', 'Saint Martin (French part)'), createCountry('PM', 'Saint Pierre and Miquelon'), createCountry('VC', 'Saint Vincent and the Grenadines'), createCountry('WS', 'Samoa'), createCountry('SM', 'San Marino'), createCountry('ST', 'Sao Tome and Principe'), createCountry('SA', 'Saudi Arabia'), createCountry('SN', 'Senegal'), createCountry('RS', 'Serbia'), createCountry('SC', 'Seychelles'), createCountry('SL', 'Sierra Leone'), createCountry('SG', 'Singapore'), createCountry('SX', 'Sint Maarten (Dutch part)'), createCountry('SK', 'Slovakia'), createCountry('SI', 'Slovenia'), createCountry('SB', 'Solomon Islands'), createCountry('SO', 'Somalia'), createCountry('ZA', 'South Africa'), createCountry('GS', 'South Georgia and the South Sandwich Islands'), createCountry('SS', 'South Sudan'), createCountry('ES', 'Spain'), createCountry('LK', 'Sri Lanka'), createCountry('SD', 'Sudan (the)'), createCountry('SR', 'Suriname'), createCountry('SJ', 'Svalbard and Jan Mayen'), createCountry('SE', 'Sweden'), createCountry('CH', 'Switzerland'), createCountry('SY', 'Syrian Arab Republic'), createCountry('TW', 'Taiwan (Province of China)'), createCountry('TJ', 'Tajikistan'), createCountry('TZ', 'Tanzania, United Republic of'), createCountry('TH', 'Thailand'), createCountry('TL', 'Timor-Leste'), createCountry('TG', 'Togo'), createCountry('TK', 'Tokelau'), createCountry('TO', 'Tonga'), createCountry('TT', 'Trinidad and Tobago'), createCountry('TN', 'Tunisia'), createCountry('TR', 'Turkey'), createCountry('TM', 'Turkmenistan'), createCountry('TC', 'Turks and Caicos Islands (the)'), createCountry('TV', 'Tuvalu'), createCountry('UG', 'Uganda'), createCountry('UA', 'Ukraine'), createCountry('AE', 'United Arab Emirates (the)'), createCountry('GB', 'United Kingdom of Great Britain and Northern Ireland (the)'), createCountry('UM', 'United States Minor Outlying Islands (the)'), createCountry('US', 'United States of America (the)'), createCountry('UY', 'Uruguay'), createCountry('UZ', 'Uzbekistan'), createCountry('VU', 'Vanuatu'), createCountry('VE', 'Venezuela (Bolivarian Republic of)'), createCountry('VN', 'Viet Nam'), createCountry('VG', 'Virgin Islands (British)'), createCountry('VI', 'Virgin Islands (U.S.)'), createCountry('WF', 'Wallis and Futuna'), createCountry('EH', 'Western Sahara'), createCountry('YE', 'Yemen'), createCountry('ZM', 'Zambia'), createCountry('ZW', 'Zimbabwe')];
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: "Country Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9QYXBlci9QYXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUNvbnRhaW5lci9UYWJsZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWF4V2lkdGgiLCJjcmVhdGVDb3VudHJ5IiwiYWJ2IiwibmFtZSIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIlBhcGVyIiwibWFwIiwicm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBGO0FBQ2hDO0FBQzNCO0FBQ0k7QUFDWDtBQUM0QjtBQUNOO0FBQ3ZDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLDJFQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUJBQXlCLDZDQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkZBQXdCOztBQUV0QyxzQkFBc0IsZ0RBQW1CLFlBQVksMkVBQVE7QUFDN0QsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBYzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFnQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBZ0I7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RSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBRSxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyxnRUFBRDtBQUFBLGtCQUNHSyxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsOEJBQ1IsOERBQUMsK0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFXLHVCQUFTLEVBQUMsSUFBckI7QUFBMEIsbUJBQUssRUFBQyxLQUFoQztBQUFBLHdCQUNHQSxHQUFHLENBQUNOO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQk0sR0FBRyxDQUFDUDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUEsYUFBZU8sR0FBRyxDQUFDTixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBekJ1QkUsVTtVQUNOUixTOzs7S0FETVEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9idWlsZC10YWJsZS5kMGZhNjFiOWRlZDNhMjY4NDU0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGVsZXZhdGlvbnMgPSB7fTtcbiAgdGhlbWUuc2hhZG93cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkb3csIGluZGV4KSB7XG4gICAgZWxldmF0aW9uc1tcImVsZXZhdGlvblwiLmNvbmNhdChpbmRleCldID0ge1xuICAgICAgYm94U2hhZG93OiBzaGFkb3dcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3gtc2hhZG93JylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3F1YXJlPXtmYWxzZX1gLiAqL1xuICAgIHJvdW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH1cbiAgfSwgZWxldmF0aW9ucyk7XG59O1xudmFyIFBhcGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUGFwZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJHNxdWFyZSA9IHByb3BzLnNxdWFyZSxcbiAgICAgIHNxdWFyZSA9IF9wcm9wcyRzcXVhcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNxdWFyZSxcbiAgICAgIF9wcm9wcyRlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb24sXG4gICAgICBlbGV2YXRpb24gPSBfcHJvcHMkZWxldmF0aW9uID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2VsZXZhdGlvbicgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwic3F1YXJlXCIsIFwiZWxldmF0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCA9PT0gJ291dGxpbmVkJyA/IGNsYXNzZXMub3V0bGluZWQgOiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildLCAhc3F1YXJlICYmIGNsYXNzZXMucm91bmRlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUGFwZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTaGFkb3cgZGVwdGgsIGNvcnJlc3BvbmRzIHRvIGBkcGAgaW4gdGhlIHNwZWMuXG4gICAqIEl0IGFjY2VwdHMgdmFsdWVzIGJldHdlZW4gMCBhbmQgMjQgaW5jbHVzaXZlLlxuICAgKi9cbiAgZWxldmF0aW9uOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMubnVtYmVyLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICAgIGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbjsgLy8gaW4gY2FzZSBgd2l0aFN0eWxlc2AgZmFpbHMgdG8gaW5qZWN0IHdlIGRvbid0IG5lZWQgdGhpcyB3YXJuaW5nXG5cbiAgICBpZiAoY2xhc3NlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxldmF0aW9uICE9IG51bGwgJiYgY2xhc3Nlc1tcImVsZXZhdGlvblwiLmNvbmNhdChlbGV2YXRpb24pXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoaXMgZWxldmF0aW9uIGBcIi5jb25jYXQoZWxldmF0aW9uLCBcImAgaXMgbm90IGltcGxlbWVudGVkLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHJvdW5kZWQgY29ybmVycyBhcmUgZGlzYWJsZWQuXG4gICAqL1xuICBzcXVhcmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydlbGV2YXRpb24nLCAnb3V0bGluZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFwZXInXG59KShQYXBlcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn07XG52YXIgVGFibGVDb250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUNvbnRhaW5lcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHRhYmxlIGl0c2VsZiwgbm9ybWFsbHkgYDxUYWJsZSAvPmBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVDb250YWluZXInXG59KShUYWJsZUNvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWF4V2lkdGg6IDUwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnkoYWJ2LCBuYW1lKSB7XHJcbiAgcmV0dXJuIHsgYWJ2LCBuYW1lIH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRicsICdBZmdoYW5pc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQVgnLCAnw4VsYW5kIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FMJywgJ0FsYmFuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0RaJywgJ0FsZ2VyaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FTJywgJ0FtZXJpY2FuIFNhbW9hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRCcsICdBbmRvcnJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBTycsICdBbmdvbGEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FJJywgJ0FuZ3VpbGxhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBUScsICdBbnRhcmN0aWNhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRycsICdBbnRpZ3VhIGFuZCBCYXJidWRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBUicsICdBcmdlbnRpbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FNJywgJ0FybWVuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FXJywgJ0FydWJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBVScsICdBdXN0cmFsaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FUJywgJ0F1c3RyaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FaJywgJ0F6ZXJiYWlqYW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JTJywgJ0JhaGFtYXMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JIJywgJ0JhaHJhaW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JEJywgJ0JhbmdsYWRlc2gnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JCJywgJ0JhcmJhZG9zJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCWScsICdCZWxhcnVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCRScsICdCZWxnaXVtJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCWicsICdCZWxpemUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JKJywgJ0JlbmluJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCTScsICdCZXJtdWRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCVCcsICdCaHV0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JPJywgJ0JvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCUScsICdCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkEnLCAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQlcnLCAnQm90c3dhbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JWJywgJ0JvdXZldCBJc2xhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JSJywgJ0JyYXppbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSU8nLCAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5KHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JOJywgJ0JydW5laSBEYXJ1c3NhbGFtJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCRycsICdCdWxnYXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkYnLCAnQnVya2luYSBGYXNvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCSScsICdCdXJ1bmRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVicsICdDYWJvIFZlcmRlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLSCcsICdDYW1ib2RpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ00nLCAnQ2FtZXJvb24nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NBJywgJ0NhbmFkYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS1knLCAnQ2F5bWFuIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NGJywgJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEQnLCAnQ2hhZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0wnLCAnQ2hpbGUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NOJywgJ0NoaW5hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDWCcsICdDaHJpc3RtYXMgSXNsYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDQycsICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ08nLCAnQ29sb21iaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tNJywgJ0NvbW9yb3MgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NEJywgJ0NvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDRycsICdDb25nbyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0snLCAnQ29vayBJc2xhbmRzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDUicsICdDb3N0YSBSaWNhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdIUicsICdDcm9hdGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVScsICdDdWJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVycsICdDdXJhw6dhbycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ1knLCAnQ3lwcnVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDWicsICdDemVjaGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDSScsICdDw7R0ZSBkXFwnSXZvaXJlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdESycsICdEZW5tYXJrJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdESicsICdEamlib3V0aScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRE0nLCAnRG9taW5pY2EnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0RPJywgJ0RvbWluaWNhbiBSZXB1YmxpYyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUMnLCAnRWN1YWRvcicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUcnLCAnRWd5cHQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NWJywgJ0VsIFNhbHZhZG9yJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHUScsICdFcXVhdG9yaWFsIEd1aW5lYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRVInLCAnRXJpdHJlYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUUnLCAnRXN0b25pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1onLCAnRXN3YXRpbmknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0VUJywgJ0V0aGlvcGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdGSycsICdGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc10nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZPJywgJ0Zhcm9lIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZKJywgJ0ZpamknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZJJywgJ0ZpbmxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZSJywgJ0ZyYW5jZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0YnLCAnRnJlbmNoIEd1aWFuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEYnLCAnRnJlbmNoIFBvbHluZXNpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEYnLCAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHQScsICdHYWJvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR00nLCAnR2FtYmlhICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHRScsICdHZW9yZ2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdERScsICdHZXJtYW55JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHSCcsICdHaGFuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0knLCAnR2licmFsdGFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHUicsICdHcmVlY2UnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0dMJywgJ0dyZWVubGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0QnLCAnR3JlbmFkYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1AnLCAnR3VhZGVsb3VwZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1UnLCAnR3VhbScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1QnLCAnR3VhdGVtYWxhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHRycsICdHdWVybnNleScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR04nLCAnR3VpbmVhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHVycsICdHdWluZWEtQmlzc2F1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHWScsICdHdXlhbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0hUJywgJ0hhaXRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdITScsICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1ZBJywgJ0hvbHkgU2VlICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdITicsICdIb25kdXJhcycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSEsnLCAnSG9uZyBLb25nJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdIVScsICdIdW5nYXJ5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJUycsICdJY2VsYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJTicsICdJbmRpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSUQnLCAnSW5kb25lc2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJUicsICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSVEnLCAnSXJhcScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSUUnLCAnSXJlbGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSU0nLCAnSXNsZSBvZiBNYW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0lMJywgJ0lzcmFlbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSVQnLCAnSXRhbHknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pNJywgJ0phbWFpY2EnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pQJywgJ0phcGFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdKRScsICdKZXJzZXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pPJywgJ0pvcmRhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS1onLCAnS2F6YWtoc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS0UnLCAnS2VueWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tJJywgJ0tpcmliYXRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLUCcsICdLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlXFwncyBSZXB1YmxpYyBvZiknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tSJywgJ0tvcmVhICh0aGUgUmVwdWJsaWMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLVycsICdLdXdhaXQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tHJywgJ0t5cmd5enN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xBJywgJ0xhbyBQZW9wbGVcXCdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xWJywgJ0xhdHZpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTEInLCAnTGViYW5vbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFMnLCAnTGVzb3RobycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFInLCAnTGliZXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFknLCAnTGlieWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xJJywgJ0xpZWNodGVuc3RlaW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xUJywgJ0xpdGh1YW5pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFUnLCAnTHV4ZW1ib3VyZycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTU8nLCAnTWFjYW8nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01HJywgJ01hZGFnYXNjYXInKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01XJywgJ01hbGF3aScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVknLCAnTWFsYXlzaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01WJywgJ01hbGRpdmVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNTCcsICdNYWxpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNVCcsICdNYWx0YScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTUgnLCAnTWFyc2hhbGwgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVEnLCAnTWFydGluaXF1ZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVInLCAnTWF1cml0YW5pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVUnLCAnTWF1cml0aXVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdZVCcsICdNYXlvdHRlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNWCcsICdNZXhpY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZNJywgJ01pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRCcsICdNb2xkb3ZhICh0aGUgUmVwdWJsaWMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNQycsICdNb25hY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01OJywgJ01vbmdvbGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRScsICdNb250ZW5lZ3JvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNUycsICdNb250c2VycmF0JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNQScsICdNb3JvY2NvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNWicsICdNb3phbWJpcXVlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNTScsICdNeWFubWFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOQScsICdOYW1pYmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOUicsICdOYXVydScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTlAnLCAnTmVwYWwnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ05MJywgJ05ldGhlcmxhbmRzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOQycsICdOZXcgQ2FsZWRvbmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOWicsICdOZXcgWmVhbGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkknLCAnTmljYXJhZ3VhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdORScsICdOaWdlciAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkcnLCAnTmlnZXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTlUnLCAnTml1ZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkYnLCAnTm9yZm9sayBJc2xhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01QJywgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTk8nLCAnTm9yd2F5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdPTScsICdPbWFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQSycsICdQYWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFcnLCAnUGFsYXUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BTJywgJ1BhbGVzdGluZSwgU3RhdGUgb2YnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BBJywgJ1BhbmFtYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEcnLCAnUGFwdWEgTmV3IEd1aW5lYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFknLCAnUGFyYWd1YXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BFJywgJ1BlcnUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BIJywgJ1BoaWxpcHBpbmVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQTicsICdQaXRjYWlybicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEwnLCAnUG9sYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQVCcsICdQb3J0dWdhbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFInLCAnUHVlcnRvIFJpY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1FBJywgJ1FhdGFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNSycsICdSZXB1YmxpYyBvZiBOb3J0aCBNYWNlZG9uaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1JPJywgJ1JvbWFuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1JVJywgJ1J1c3NpYW4gRmVkZXJhdGlvbiAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUlcnLCAnUndhbmRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdSRScsICdSw6l1bmlvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkwnLCAnU2FpbnQgQmFydGjDqWxlbXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NIJywgJ1NhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLTicsICdTYWludCBLaXR0cyBhbmQgTmV2aXMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xDJywgJ1NhaW50IEx1Y2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRicsICdTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUE0nLCAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkMnLCAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1dTJywgJ1NhbW9hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTTScsICdTYW4gTWFyaW5vJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTVCcsICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NBJywgJ1NhdWRpIEFyYWJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU04nLCAnU2VuZWdhbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUlMnLCAnU2VyYmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTQycsICdTZXljaGVsbGVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTTCcsICdTaWVycmEgTGVvbmUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NHJywgJ1NpbmdhcG9yZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1gnLCAnU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU0snLCAnU2xvdmFraWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NJJywgJ1Nsb3ZlbmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTQicsICdTb2xvbW9uIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NPJywgJ1NvbWFsaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1pBJywgJ1NvdXRoIEFmcmljYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1MnLCAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NTJywgJ1NvdXRoIFN1ZGFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdFUycsICdTcGFpbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTEsnLCAnU3JpIExhbmthJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTRCcsICdTdWRhbiAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1InLCAnU3VyaW5hbWUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NKJywgJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NFJywgJ1N3ZWRlbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0gnLCAnU3dpdHplcmxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NZJywgJ1N5cmlhbiBBcmFiIFJlcHVibGljJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUVycsICdUYWl3YW4gKFByb3ZpbmNlIG9mIENoaW5hKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEonLCAnVGFqaWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFonLCAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEgnLCAnVGhhaWxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1RMJywgJ1RpbW9yLUxlc3RlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdURycsICdUb2dvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUSycsICdUb2tlbGF1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUTycsICdUb25nYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFQnLCAnVHJpbmlkYWQgYW5kIFRvYmFnbycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVE4nLCAnVHVuaXNpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFInLCAnVHVya2V5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUTScsICdUdXJrbWVuaXN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1RDJywgJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFYnLCAnVHV2YWx1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdVRycsICdVZ2FuZGEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1VBJywgJ1VrcmFpbmUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FFJywgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHQicsICdVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdVTScsICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1VTJywgJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVVknLCAnVXJ1Z3VheScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVVonLCAnVXpiZWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVlUnLCAnVmFudWF0dScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkUnLCAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVk4nLCAnVmlldCBOYW0nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1ZHJywgJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkknLCAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdXRicsICdXYWxsaXMgYW5kIEZ1dHVuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUgnLCAnV2VzdGVybiBTYWhhcmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1lFJywgJ1llbWVuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdaTScsICdaYW1iaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1pXJywgJ1ppbWJhYndlJyksIFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNUYWJsZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkNvdW50cnkgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduID1cInJpZ2h0XCI+QWJicmV2aWF0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5hYnZ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9