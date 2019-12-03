"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Share = _interopRequireDefault(require("./Share"));

var _Position = require("./Position");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wxUtils = {};

wxUtils.share = function (shareInfo) {
  var s = new _Share.default();
  s.init(shareInfo);
};

wxUtils.getPosition = _Position.getPosition;

wxUtils.optionMenu = function () {
  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (open) {
    openOptionMenu();
  } else {
    disabledOptionMenu();
  }
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
    WeixinJSBridge.call(disable ? 'hideOptionMenu' : 'showOptionMenu');
  }
}

var _default = wxUtils;
exports.default = _default;