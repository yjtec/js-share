function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React, { Component, Fragment } from 'react';
import WxContext from './WxContext';
import { AsyncLoadWx, loadWx } from './AsyncLoadWx';
import request from 'umi-request';
import wxUtils from './wxutils';
import create from './create';
export { WxContext, AsyncLoadWx, loadWx, wxUtils, create };
export function Jsapi(_x) {
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
            return _context.abrupt("return", request("".concat(action, "?uri=") + encodeURIComponent(window.location.href)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Jsapi.apply(this, arguments);
}

export function init(_x2) {
  return _init.apply(this, arguments);
} // export function create(Ele){
//   return class WxContainer extends Component{
//     static contextType = WxContext;
//     constructor(props) {
//       super(props);
//       this.state ={
//         loading:true
//       }
//     }    
//     async componentDidMount(){
//       const {action,...rest} = this.context;
//       const {data} = await Jsapi(action);
//       window.wx.config({
//         ...rest,
//         ...data
//       })
//       this.setState({
//         loading:false
//       })
//     }
//     render(){
//       const {loading} = this.state;
//       return <Fragment>
//         {!loading && <Ele />}
//       </Fragment>
//     }
//   }
// }

function _init() {
  _init = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(config) {
    var action, rest, _ref, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            action = config.action, rest = _objectWithoutProperties(config, ["action"]);
            _context2.next = 3;
            return Jsapi(action);

          case 3:
            _ref = _context2.sent;
            data = _ref.data;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              window.wx.config(_objectSpread({}, rest, {}, data));
              window.wx.error(function (res) {
                alert(123);
              });
              resolve(true);
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}