exports.id = 1102;
exports.ids = [1102];
exports.modules = {

/***/ 81506:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 34575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 93913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 29754:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(99489);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(37316);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 37316:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 78585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(50008)["default"]);

var assertThisInitialized = __webpack_require__(81506);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 71102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(67154));
var _defineProperty = _interopDefault(__webpack_require__(59713));
var _slicedToArray = _interopDefault(__webpack_require__(63038));
var _objectWithoutProperties = _interopDefault(__webpack_require__(6479));
var React = __webpack_require__(67294);
var React__default = _interopDefault(React);
var _classCallCheck = _interopDefault(__webpack_require__(34575));
var _createClass = _interopDefault(__webpack_require__(93913));
var _inherits = _interopDefault(__webpack_require__(2205));
var _possibleConstructorReturn = _interopDefault(__webpack_require__(78585));
var _getPrototypeOf = _interopDefault(__webpack_require__(29754));

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.flippy-container *\n{\n    box-sizing: border-box;\n}\n\n.flippy-cardContainer-wrapper\n{\n\tposition: relative;\n\theight: 100%;\n    width: 100%;\n}\n\n.flippy-cardContainer\n{\n    height: 100%;\n    width: 100%;\n    position: relative;\n\n    -webkit-transition: .6s;\n       -moz-transition: .6s;\n        -ms-transition: .6s;\n         -o-transition: .6s;\n            transition: .6s;\n    -moz-transform: perspective(1000px);\n         transform: perspective(1000px);\n\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n        -ms-transform-style: preserve-3d;\n         -o-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.flippy-front,\n.flippy-back\n{\n    position: relative;\n\n    width: 100%;\n    height: 100%;\n    padding: 1em;\n\n    -webkit-transform: rotateY(0deg);\n       -moz-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n         -o-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n\n    background: transparent;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);\n\n    -webkit-backface-visibility: hidden;\n       -moz-backface-visibility: hidden;\n        -ms-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n         -o-transform-style: preserve-3d;\n        -ms-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.flippy-front\n{\n    -webkit-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n\n.flippy-back\n{\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    -webkit-transform: rotateY(-180deg);\n       -moz-transform: rotateY(-180deg);\n        -ms-transform: rotateY(-180deg);\n         -o-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n}\n\n.flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,\n.flippy-cardContainer.isActive.istouchdevice .flippy-back\n{\n    -webkit-transform: rotateY(0deg);\n       -moz-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n         -o-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n\n.flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,\n.flippy-cardContainer.isActive.istouchdevice .flippy-front\n{\n    -webkit-transform: rotateY(180deg);\n       -moz-transform: rotateY(180deg);\n        -ms-transform: rotateY(180deg);\n         -o-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-back\n{\n    -webkit-transform: rotateX(-180deg);\n       -moz-transform: rotateX(-180deg);\n        -ms-transform: rotateX(-180deg);\n         -o-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-back\n{\n    -webkit-transform: rotateX(0deg);\n       -moz-transform: rotateX(0deg);\n        -ms-transform: rotateX(0deg);\n         -o-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-front\n{\n    -webkit-transform: rotateX(180deg);\n       -moz-transform: rotateX(180deg);\n         -o-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n            transform: rotateX(180deg);\n}\n";
n(css,{});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Flippy = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var _isFlipped = _ref.isFlipped,
      className = _ref.className,
      flipDirection = _ref.flipDirection,
      style = _ref.style,
      children = _ref.children,
      flipOnHover = _ref.flipOnHover,
      flipOnClick = _ref.flipOnClick,
      onClick = _ref.onClick,
      onTouchStart = _ref.onTouchStart,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      rest = _objectWithoutProperties(_ref, ["isFlipped", "className", "flipDirection", "style", "children", "flipOnHover", "flipOnClick", "onClick", "onTouchStart", "onMouseEnter", "onMouseLeave"]);

  var simpleFlag = React.useRef({
    isTouchDevice: false
  });

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTouchDevice = _useState2[0],
      setTouchDevice = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFlipped = _useState4[0],
      setFlipped = _useState4[1];

  var toggle = function toggle() {
    return setFlipped(!isFlipped);
  };

  React.useImperativeHandle(ref, function () {
    return {
      toggle: toggle
    };
  });

  var handleTouchStart = function handleTouchStart(event) {
    if (!isTouchDevice) {
      simpleFlag.current.isTouchDevice = true;
      setTouchDevice(true);
    }

    onTouchStart(event);
  };

  var handleMouseEnter = function handleMouseEnter(event) {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) {
      setFlipped(true);
    }

    onMouseEnter(event);
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) {
      setFlipped(false);
    }

    onMouseLeave(event);
  };

  var handleClick = function handleClick(event) {
    switch (true) {
      case flipOnHover && !simpleFlag.current.isTouchDevice:
      case !flipOnClick && !flipOnHover:
        break;

      default:
        setFlipped(!isFlipped);
        break;
    }

    onClick(event);
  };

  React.useEffect(function () {
    if (typeof _isFlipped === 'boolean' && _isFlipped !== isFlipped) {
      setFlipped(_isFlipped);
    }
  }, [_isFlipped]);
  return /*#__PURE__*/React__default.createElement("div", _extends({}, rest, {
    className: "flippy-container ".concat(className || ''),
    style: _objectSpread({}, style),
    onTouchStart: handleTouchStart,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "flippy-cardContainer-wrapper ".concat(flipDirection)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flippy-cardContainer ".concat(isFlipped ? 'isActive' : '', " ").concat(isTouchDevice ? 'istouchdevice' : '')
  }, children)));
});
Flippy.defaultProps = {
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  isFlipped: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  onClick: function onClick() {}
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FlippyCard = /*#__PURE__*/function (_React$Component) {
  _inherits(FlippyCard, _React$Component);

  var _super = _createSuper(FlippyCard);

  function FlippyCard() {
    _classCallCheck(this, FlippyCard);

    return _super.apply(this, arguments);
  }

  _createClass(FlippyCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cardType = _this$props.cardType,
          style = _this$props.style,
          elementType = _this$props.elementType,
          animationDuration = _this$props.animationDuration,
          rest = _objectWithoutProperties(_this$props, ["className", "cardType", "style", "elementType", "animationDuration"]);

      return /*#__PURE__*/React__default.createElement(elementType || 'div', _objectSpread$1(_objectSpread$1({
        className: "flippy-card flippy-".concat(cardType, " ").concat(className || '')
      }, rest), {}, {
        style: _objectSpread$1(_objectSpread$1({}, style || {}), {
          transitionDuration: "".concat(animationDuration / 1000, "s")
        })
      }), this.props.children);
    }
  }]);

  return FlippyCard;
}(React__default.Component);

var FrontSide = function FrontSide(_ref) {
  var isFlipped = _ref.isFlipped,
      style = _ref.style,
      animationDuration = _ref.animationDuration,
      props = _objectWithoutProperties(_ref, ["isFlipped", "style", "animationDuration"]);

  return /*#__PURE__*/React__default.createElement(FlippyCard, _extends({}, props, {
    style: _objectSpread$1({}, style || {}),
    animationDuration: animationDuration,
    cardType: "front"
  }));
};
var BackSide = function BackSide(_ref2) {
  var isFlipped = _ref2.isFlipped,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["isFlipped", "style"]);

  return /*#__PURE__*/React__default.createElement(FlippyCard, _extends({}, props, {
    style: _objectSpread$1({}, style || {}),
    cardType: "back"
  }));
};
FlippyCard.defaultProps = {
  animationDuration: 600
};

exports._L = BackSide;
__webpack_unused_export__ = Flippy;
exports.Wl = FrontSide;
exports.ZP = Flippy;


/***/ })

};
;