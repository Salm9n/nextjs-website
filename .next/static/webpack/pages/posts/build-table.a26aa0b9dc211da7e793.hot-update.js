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
    maxWidth: 500,
    "& .MuiTableCell-root": {
      borderRight: "1px solid rgba(224, 224, 224, 1)"
    }
  },
  tableHead: {
    backgroundColor: '#ADD8E6'
  },
  tableRow: {
    padding: "1"
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
        className: classes.tableHead,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: "Country Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Abbreviation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
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
              lineNumber: 298,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.abv
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 287,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9QYXBlci9QYXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUNvbnRhaW5lci9UYWJsZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYnVpbGQtdGFibGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWF4V2lkdGgiLCJib3JkZXJSaWdodCIsInRhYmxlSGVhZCIsImJhY2tncm91bmRDb2xvciIsInRhYmxlUm93IiwicGFkZGluZyIsImNyZWF0ZUNvdW50cnkiLCJhYnYiLCJuYW1lIiwicm93cyIsIkJhc2ljVGFibGUiLCJjbGFzc2VzIiwiUGFwZXIiLCJtYXAiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEY7QUFDaEM7QUFDM0I7QUFDSTtBQUNYO0FBQzRCO0FBQ047QUFDdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsMkVBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsc0RBQXNELE1BQU07QUFDNUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUIsNkNBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyRkFBd0I7O0FBRXRDLHNCQUFzQixnREFBbUIsWUFBWSwyRUFBUTtBQUM3RCxlQUFlLDZDQUFJO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtB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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2J1aWxkLXRhYmxlLmEyNmFhMGI5ZGMyMTFkYTdlNzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgZWxldmF0aW9ucyA9IHt9O1xuICB0aGVtZS5zaGFkb3dzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRvdywgaW5kZXgpIHtcbiAgICBlbGV2YXRpb25zW1wiZWxldmF0aW9uXCIuY29uY2F0KGluZGV4KV0gPSB7XG4gICAgICBib3hTaGFkb3c6IHNoYWRvd1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JveC1zaGFkb3cnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzcXVhcmU9e2ZhbHNlfWAuICovXG4gICAgcm91bmRlZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfVxuICB9LCBlbGV2YXRpb25zKTtcbn07XG52YXIgUGFwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYXBlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3F1YXJlID0gcHJvcHMuc3F1YXJlLFxuICAgICAgc3F1YXJlID0gX3Byb3BzJHNxdWFyZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc3F1YXJlLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnZWxldmF0aW9uJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJzcXVhcmVcIiwgXCJlbGV2YXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2YXJpYW50ID09PSAnb3V0bGluZWQnID8gY2xhc3Nlcy5vdXRsaW5lZCA6IGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0sICFzcXVhcmUgJiYgY2xhc3Nlcy5yb3VuZGVkKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQYXBlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNoYWRvdyBkZXB0aCwgY29ycmVzcG9uZHMgdG8gYGRwYCBpbiB0aGUgc3BlYy5cbiAgICogSXQgYWNjZXB0cyB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAyNCBpbmNsdXNpdmUuXG4gICAqL1xuICBlbGV2YXRpb246IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uOyAvLyBpbiBjYXNlIGB3aXRoU3R5bGVzYCBmYWlscyB0byBpbmplY3Qgd2UgZG9uJ3QgbmVlZCB0aGlzIHdhcm5pbmdcblxuICAgIGlmIChjbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbGV2YXRpb24gIT0gbnVsbCAmJiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSTogVGhpcyBlbGV2YXRpb24gYFwiLmNvbmNhdChlbGV2YXRpb24sIFwiYCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcm91bmRlZCBjb3JuZXJzIGFyZSBkaXNhYmxlZC5cbiAgICovXG4gIHNxdWFyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2VsZXZhdGlvbicsICdvdXRsaW5lZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQYXBlcidcbn0pKFBhcGVyKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgb3ZlcmZsb3dYOiAnYXV0bydcbiAgfVxufTtcbnZhciBUYWJsZUNvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlQ29udGFpbmVyKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdGFibGUgaXRzZWxmLCBub3JtYWxseSBgPFRhYmxlIC8+YFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJsZUNvbnRhaW5lcidcbn0pKFRhYmxlQ29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgXCImIC5NdWlUYWJsZUNlbGwtcm9vdFwiOiB7XHJcbiAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpXCIgfVxyXG4gIH0sXHJcblxyXG4gIHRhYmxlSGVhZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0FERDhFNidcclxuICB9LFxyXG5cclxuICB0YWJsZVJvdzoge1xyXG4gICAgcGFkZGluZzogXCIxXCJcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnkoYWJ2LCBuYW1lKSB7XHJcbiAgcmV0dXJuIHsgYWJ2LCBuYW1lIH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRicsICdBZmdoYW5pc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQVgnLCAnw4VsYW5kIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FMJywgJ0FsYmFuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0RaJywgJ0FsZ2VyaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FTJywgJ0FtZXJpY2FuIFNhbW9hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRCcsICdBbmRvcnJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBTycsICdBbmdvbGEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FJJywgJ0FuZ3VpbGxhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBUScsICdBbnRhcmN0aWNhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBRycsICdBbnRpZ3VhIGFuZCBCYXJidWRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBUicsICdBcmdlbnRpbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FNJywgJ0FybWVuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FXJywgJ0FydWJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdBVScsICdBdXN0cmFsaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FUJywgJ0F1c3RyaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FaJywgJ0F6ZXJiYWlqYW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JTJywgJ0JhaGFtYXMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JIJywgJ0JhaHJhaW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JEJywgJ0JhbmdsYWRlc2gnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JCJywgJ0JhcmJhZG9zJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCWScsICdCZWxhcnVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCRScsICdCZWxnaXVtJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCWicsICdCZWxpemUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JKJywgJ0JlbmluJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCTScsICdCZXJtdWRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCVCcsICdCaHV0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JPJywgJ0JvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCUScsICdCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkEnLCAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQlcnLCAnQm90c3dhbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JWJywgJ0JvdXZldCBJc2xhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JSJywgJ0JyYXppbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSU8nLCAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5KHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0JOJywgJ0JydW5laSBEYXJ1c3NhbGFtJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCRycsICdCdWxnYXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkYnLCAnQnVya2luYSBGYXNvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdCSScsICdCdXJ1bmRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVicsICdDYWJvIFZlcmRlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLSCcsICdDYW1ib2RpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ00nLCAnQ2FtZXJvb24nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NBJywgJ0NhbmFkYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS1knLCAnQ2F5bWFuIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NGJywgJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEQnLCAnQ2hhZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0wnLCAnQ2hpbGUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NOJywgJ0NoaW5hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDWCcsICdDaHJpc3RtYXMgSXNsYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDQycsICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ08nLCAnQ29sb21iaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tNJywgJ0NvbW9yb3MgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0NEJywgJ0NvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDRycsICdDb25nbyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0snLCAnQ29vayBJc2xhbmRzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDUicsICdDb3N0YSBSaWNhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdIUicsICdDcm9hdGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVScsICdDdWJhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDVycsICdDdXJhw6dhbycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ1knLCAnQ3lwcnVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDWicsICdDemVjaGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdDSScsICdDw7R0ZSBkXFwnSXZvaXJlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdESycsICdEZW5tYXJrJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdESicsICdEamlib3V0aScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRE0nLCAnRG9taW5pY2EnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0RPJywgJ0RvbWluaWNhbiBSZXB1YmxpYyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUMnLCAnRWN1YWRvcicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUcnLCAnRWd5cHQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NWJywgJ0VsIFNhbHZhZG9yJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHUScsICdFcXVhdG9yaWFsIEd1aW5lYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRVInLCAnRXJpdHJlYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUUnLCAnRXN0b25pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1onLCAnRXN3YXRpbmknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0VUJywgJ0V0aGlvcGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdGSycsICdGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc10nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZPJywgJ0Zhcm9lIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZKJywgJ0ZpamknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZJJywgJ0ZpbmxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZSJywgJ0ZyYW5jZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0YnLCAnRnJlbmNoIEd1aWFuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEYnLCAnRnJlbmNoIFBvbHluZXNpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEYnLCAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHQScsICdHYWJvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR00nLCAnR2FtYmlhICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHRScsICdHZW9yZ2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdERScsICdHZXJtYW55JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHSCcsICdHaGFuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0knLCAnR2licmFsdGFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHUicsICdHcmVlY2UnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0dMJywgJ0dyZWVubGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR0QnLCAnR3JlbmFkYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1AnLCAnR3VhZGVsb3VwZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1UnLCAnR3VhbScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1QnLCAnR3VhdGVtYWxhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHRycsICdHdWVybnNleScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR04nLCAnR3VpbmVhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHVycsICdHdWluZWEtQmlzc2F1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHWScsICdHdXlhbmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0hUJywgJ0hhaXRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdITScsICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1ZBJywgJ0hvbHkgU2VlICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdITicsICdIb25kdXJhcycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSEsnLCAnSG9uZyBLb25nJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdIVScsICdIdW5nYXJ5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJUycsICdJY2VsYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJTicsICdJbmRpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSUQnLCAnSW5kb25lc2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdJUicsICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSVEnLCAnSXJhcScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSUUnLCAnSXJlbGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSU0nLCAnSXNsZSBvZiBNYW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0lMJywgJ0lzcmFlbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnSVQnLCAnSXRhbHknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pNJywgJ0phbWFpY2EnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pQJywgJ0phcGFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdKRScsICdKZXJzZXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0pPJywgJ0pvcmRhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS1onLCAnS2F6YWtoc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnS0UnLCAnS2VueWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tJJywgJ0tpcmliYXRpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLUCcsICdLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlXFwncyBSZXB1YmxpYyBvZiknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tSJywgJ0tvcmVhICh0aGUgUmVwdWJsaWMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLVycsICdLdXdhaXQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0tHJywgJ0t5cmd5enN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xBJywgJ0xhbyBQZW9wbGVcXCdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xWJywgJ0xhdHZpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTEInLCAnTGViYW5vbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFMnLCAnTGVzb3RobycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFInLCAnTGliZXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFknLCAnTGlieWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xJJywgJ0xpZWNodGVuc3RlaW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xUJywgJ0xpdGh1YW5pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTFUnLCAnTHV4ZW1ib3VyZycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTU8nLCAnTWFjYW8nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01HJywgJ01hZGFnYXNjYXInKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01XJywgJ01hbGF3aScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVknLCAnTWFsYXlzaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01WJywgJ01hbGRpdmVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNTCcsICdNYWxpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNVCcsICdNYWx0YScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTUgnLCAnTWFyc2hhbGwgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVEnLCAnTWFydGluaXF1ZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVInLCAnTWF1cml0YW5pYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTVUnLCAnTWF1cml0aXVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdZVCcsICdNYXlvdHRlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNWCcsICdNZXhpY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0ZNJywgJ01pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRCcsICdNb2xkb3ZhICh0aGUgUmVwdWJsaWMgb2YpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNQycsICdNb25hY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01OJywgJ01vbmdvbGlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRScsICdNb250ZW5lZ3JvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNUycsICdNb250c2VycmF0JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNQScsICdNb3JvY2NvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNWicsICdNb3phbWJpcXVlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNTScsICdNeWFubWFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOQScsICdOYW1pYmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOUicsICdOYXVydScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTlAnLCAnTmVwYWwnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ05MJywgJ05ldGhlcmxhbmRzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOQycsICdOZXcgQ2FsZWRvbmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdOWicsICdOZXcgWmVhbGFuZCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkknLCAnTmljYXJhZ3VhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdORScsICdOaWdlciAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkcnLCAnTmlnZXJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTlUnLCAnTml1ZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTkYnLCAnTm9yZm9sayBJc2xhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ01QJywgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTk8nLCAnTm9yd2F5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdPTScsICdPbWFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQSycsICdQYWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFcnLCAnUGFsYXUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BTJywgJ1BhbGVzdGluZSwgU3RhdGUgb2YnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BBJywgJ1BhbmFtYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEcnLCAnUGFwdWEgTmV3IEd1aW5lYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFknLCAnUGFyYWd1YXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BFJywgJ1BlcnUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1BIJywgJ1BoaWxpcHBpbmVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQTicsICdQaXRjYWlybicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUEwnLCAnUG9sYW5kJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdQVCcsICdQb3J0dWdhbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUFInLCAnUHVlcnRvIFJpY28nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1FBJywgJ1FhdGFyJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNSycsICdSZXB1YmxpYyBvZiBOb3J0aCBNYWNlZG9uaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1JPJywgJ1JvbWFuaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1JVJywgJ1J1c3NpYW4gRmVkZXJhdGlvbiAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUlcnLCAnUndhbmRhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdSRScsICdSw6l1bmlvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQkwnLCAnU2FpbnQgQmFydGjDqWxlbXknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NIJywgJ1NhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdLTicsICdTYWludCBLaXR0cyBhbmQgTmV2aXMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0xDJywgJ1NhaW50IEx1Y2lhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdNRicsICdTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUE0nLCAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkMnLCAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1dTJywgJ1NhbW9hJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTTScsICdTYW4gTWFyaW5vJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTVCcsICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NBJywgJ1NhdWRpIEFyYWJpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU04nLCAnU2VuZWdhbCcpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnUlMnLCAnU2VyYmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTQycsICdTZXljaGVsbGVzJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTTCcsICdTaWVycmEgTGVvbmUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NHJywgJ1NpbmdhcG9yZScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1gnLCAnU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU0snLCAnU2xvdmFraWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NJJywgJ1Nsb3ZlbmlhJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTQicsICdTb2xvbW9uIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NPJywgJ1NvbWFsaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1pBJywgJ1NvdXRoIEFmcmljYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnR1MnLCAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NTJywgJ1NvdXRoIFN1ZGFuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdFUycsICdTcGFpbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnTEsnLCAnU3JpIExhbmthJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdTRCcsICdTdWRhbiAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnU1InLCAnU3VyaW5hbWUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NKJywgJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NFJywgJ1N3ZWRlbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnQ0gnLCAnU3dpdHplcmxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1NZJywgJ1N5cmlhbiBBcmFiIFJlcHVibGljJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUVycsICdUYWl3YW4gKFByb3ZpbmNlIG9mIENoaW5hKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEonLCAnVGFqaWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFonLCAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVEgnLCAnVGhhaWxhbmQnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1RMJywgJ1RpbW9yLUxlc3RlJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdURycsICdUb2dvJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUSycsICdUb2tlbGF1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUTycsICdUb25nYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFQnLCAnVHJpbmlkYWQgYW5kIFRvYmFnbycpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVE4nLCAnVHVuaXNpYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFInLCAnVHVya2V5JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdUTScsICdUdXJrbWVuaXN0YW4nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1RDJywgJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVFYnLCAnVHV2YWx1JyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdVRycsICdVZ2FuZGEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1VBJywgJ1VrcmFpbmUnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ0FFJywgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdHQicsICdVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdVTScsICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSknKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1VTJywgJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVVknLCAnVXJ1Z3VheScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVVonLCAnVXpiZWtpc3RhbicpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVlUnLCAnVmFudWF0dScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkUnLCAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVk4nLCAnVmlldCBOYW0nKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1ZHJywgJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnVkknLCAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdXRicsICdXYWxsaXMgYW5kIEZ1dHVuYScpLFxyXG4gICAgY3JlYXRlQ291bnRyeSgnRUgnLCAnV2VzdGVybiBTYWhhcmEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1lFJywgJ1llbWVuJyksXHJcbiAgICBjcmVhdGVDb3VudHJ5KCdaTScsICdaYW1iaWEnKSxcclxuICAgIGNyZWF0ZUNvdW50cnkoJ1pXJywgJ1ppbWJhYndlJyksIFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNUYWJsZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZUhlYWR9PlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkNvdW50cnkgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduID1cInJpZ2h0XCI+QWJicmV2aWF0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5hYnZ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9