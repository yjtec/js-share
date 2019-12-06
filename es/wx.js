function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import WxContext from './WxContext';
import { AsyncLoadWx, loadWx } from './AsyncLoadWx';
import request from 'umi-request';
import wxUtils from './wxutils';
import create from './create';
var defaultConfig = {};
var redirectUri = '';
var Data = {};
export { WxContext, AsyncLoadWx, loadWx, wxUtils, create };
export function setconfig(data) {
  defaultConfig = _objectSpread({}, data);
}
export function getConfig() {
  return defaultConfig;
}
export function Jsapi(_x) {
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
            return request("".concat(action, "?uri=") + encodeURIComponent(window.location.href));

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

export var isWx = function isWx() {
  if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
    return true;
  }

  return false;
};