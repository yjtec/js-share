import WxContext from './WxContext';
import {AsyncLoadWx,loadWx} from './AsyncLoadWx';
import request from 'umi-request';
import wxUtils from './wxutils';
export {
  WxContext,
  AsyncLoadWx,
  loadWx,
  wxUtils
}

export async function Jsapi (action){
  return request(`${action}?uri=`+encodeURIComponent(window.location.href))
}

