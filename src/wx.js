import React,{Component,Fragment} from 'react';
import WxContext from './WxContext';
import {AsyncLoadWx,loadWx} from './AsyncLoadWx';
import request from 'umi-request';
import wxUtils from './wxutils';
import create from './create';
export {
  WxContext,
  AsyncLoadWx,
  loadWx,
  wxUtils,
  create
}

export async function Jsapi (action){
  return request(`${action}?uri=`+encodeURIComponent(window.location.href))
}

export const isWx = () => {
  if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
      return true;
  }
  return false;
}