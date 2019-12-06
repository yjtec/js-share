import React,{Component,Fragment} from 'react';
import WxContext from './WxContext';
import {AsyncLoadWx,loadWx} from './AsyncLoadWx';
import request from 'umi-request';
import wxUtils from './wxutils';
import create from './create';
let defaultConfig = {};
let redirectUri ='';
let Data = {};
export {
  WxContext,
  AsyncLoadWx,
  loadWx,
  wxUtils,
  create
}
export function setconfig(data){
  defaultConfig = {
    ...data
  };
}
export function getConfig(){
  return defaultConfig;
}
export async function Jsapi (action){
  if(redirectUri === window.location.href){
    return Data;
  }else{
    const re = await request(`${action}?uri=`+encodeURIComponent(window.location.href));
    Data = re;
    redirectUri = window.location.href;
    return re;
  }
}

export const isWx = () => {
  if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
      return true;
  }
  return false;
}