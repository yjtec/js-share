"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _WxContext = _interopRequireDefault(require("./WxContext"));

var _AsyncLoadWx = require("./AsyncLoadWx");

var _umiRequest = _interopRequireDefault(require("umi-request"));

var _wxutils = _interopRequireDefault(require("./wxutils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Jsapi(_x) {
  return _Jsapi.apply(this, arguments);
}

function _Jsapi() {
  _Jsapi = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(action) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _umiRequest.default)("".concat(action, "?uri=") + encodeURIComponent(window.location.href)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Jsapi.apply(this, arguments);
}