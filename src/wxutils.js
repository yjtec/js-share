import Share from './Share';
let wxUtils = {};
wxUtils.share = function(shareInfo){
  const s = new Share();
  s.init(shareInfo);
}
wxUtils.optionMenu = function(open = true) {
  if (open) {
    openOptionMenu();
  } else {
    disabledOptionMenu();
  }
}

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
}
//禁用右上角
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

function onBridgeReady(disable = true) {
  if (typeof WeixinJSBridge !== "undefined") {
    WeixinJSBridge.call(disable ? 'hideOptionMenu' : 'showOptionMenu');
  }
}
export default wxUtils;