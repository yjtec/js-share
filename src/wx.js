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

export async function init(config){
  const {action,...rest} = config;
  const {data} = await Jsapi(action);
  return new Promise((resolve,reject)=>{
    window.wx.config({
      ...rest,
      ...data
    })
    window.wx.error(function(res){
      alert(123);
    })
    resolve(true);
  })
}

// export function create(Ele){
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