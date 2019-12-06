"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Share = _interopRequireDefault(require("./Share"));

var _Position = require("./Position");

var _wx = require("./wx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var wxUtils = {};

wxUtils.share = function (shareInfo) {
  var s = new _Share.default();
  s.init(shareInfo);
};

var asyncConfig =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(action) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _wx.Jsapi)(action));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncConfig(_x) {
    return _ref.apply(this, arguments);
  };
}();

wxUtils.getPosition = _Position.getPosition;

wxUtils.optionMenu = function () {
  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var _getConfig = (0, _wx.getConfig)(),
      action = _getConfig.action,
      rest = _objectWithoutProperties(_getConfig, ["action"]);

  asyncConfig(action).then(function (re) {
    wx.config(_objectSpread({}, rest, {}, re.data));

    if (open) {
      openOptionMenu();
    } else {
      disabledOptionMenu();
    }
  });
};

function openOptionMenu() {
  if (typeof WeixinJSBridge === "undefined") {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady(false), false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady(false));
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(false));
    }
  } else {
    onBridgeReady(false);
  }
} //禁用右上角


function disabledOptionMenu() {
  if (typeof WeixinJSBridge === "undefined") {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady(true), false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady(true));
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(true));
    }
  } else {
    onBridgeReady(true);
  }
}

function onBridgeReady() {
  var disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (typeof WeixinJSBridge !== "undefined") {
    console.log(wx);
    WeixinJSBridge.call(disable ? 'hideOptionMenu' : 'showOptionMenu');
  }
}

var _default = wxUtils;
exports.default = _default;