import React,{Component} from 'react';
import {
  WxContext,
  loadWx,
  Jsapi,
  wxUtils,
  isWx,
  setconfig
} from 'yjtec-wx';
const defaultConfig = {
  action:'{{&action}}',
  debug:{{&debug}},
  jsApiList:[
    {{#jsApiList}}
    '{{&.}}',
    {{/jsApiList}}
  ]
}
setconfig(defaultConfig);
class WxWrapper extends Component{
  constructor(props) {
    super(props);
    this.state ={
      loading:true,
      wxOk:true
    }
  }
  async componentDidMount(){
    const re = await loadWx();
    if(isWx()){
      const {action,...rest} = defaultConfig;
      const {data} = await Jsapi(action);
      window.wx.config({
        ...rest,
        ...data
      })
      setTimeout(()=>{
        window.wx.error(res => {
          this.setState({
            wxOk:false
          })
        })
        window.wx.ready(res => {
          this.setState({
            loading:false
          })
        })
      },100)
    }else{
      this.setState({
        loading:false
      })
    }
  }
  render(){
    const {children} = this.props;
    const {loading} = this.state;
    const WxContextValue = {
      ...this.state,
      ...defaultConfig
    }
    return(
      <WxContext.Provider
        value={WxContextValue}
      >
        {!loading && children}
      </WxContext.Provider>
    )
  }
}
export default WxWrapper;