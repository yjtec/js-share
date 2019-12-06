"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setconfig = setconfig;
exports.getConfig = getConfig;
exports.Jsapi = Jsapi;
Object.defineProperty(exports, "WxContext", {
  enumerable: true,
  get: function get() {
    return _WxContext.default;
  }
});
Object.defineProperty(exports, "AsyncLoadWx", {
  enumerable: true,
  get: function get() {
    return _AsyncLoadWx.AsyncLoadWx;
  }
});
Object.defineProperty(exports, "loadWx", {
  enumerable: true,
  get: function get() {
    return _AsyncLoadWx.loadWx;
  }
});
Object.defineProperty(exports, "wxUtils", {
  enumerable: true,
  get: function get() {
    return _wxutils.default;
  }
});
Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function get() {
    return _create.default;
  }
});
exports.isWx = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WxContext = _interopRequireDefault(require("./WxContext"));

var _AsyncLoadWx = require("./AsyncLoadWx");

var _umiRequest = _interopRequireDefault(require("umi-request"));

var _wxutils = _interopRequireDefault(require("./wxutils"));

var _create = _interopRequireDefault(require("./create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {};
var redirectUri = '';
var Data = {};

function setconfig(data) {
  defaultConfig = _objectSpread({}, data);
}

function getConfig() {
  return defaultConfig;
}

function Jsapi(_x) {
  return _Jsapi.apply(this, arguments);
}

function _Jsapi() {
  _Jsapi = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(action) {
    var re;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(redirectUri === window.location.href)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", Data);

          case 4:
            _context.next = 6;
            return (0, _umiRequest.default)("".concat(action, "?uri=") + encodeURIComponent(window.location.href));

          case 6:
            re = _context.sent;
            Data = re;
            redirectUri = window.location.href;
            return _context.abrupt("return", re);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Jsapi.apply(this, arguments);
}

var isWx = function isWx() {
  if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
    return true;
  }

  return false;
};

exports.isWx = isWx;