import React,{Component} from 'react';
import {
  WxContext,
  loadWx,
  Jsapi,
  wxUtils
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
class WxWrapper extends Component{
  constructor(props) {
    super(props);
    this.state ={
      loading:true
    }
  }
  async componentDidMount(){
    const {action,...rest} = defaultConfig;
    const re = await loadWx();
    const {data} = await Jsapi(action);
    window.wx.config({
      ...rest,
      ...data
    })
    wxUtils.optionMenu(false);
    this.setState({
      loading:false
    })
    
  }
  render(){
    const {children} = this.props;
    const {loading} = this.state;
    const WxContextValue = {
      ...this.state
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