import React,{Component} from 'react';
import {
  WxContext,
  loadWx,
  Jsapi,
  wxUtils,
  init
} from 'yjtec-wx';
const defaultConfig = {
  action:'/api/cmm/share',
  debug:true,
  jsApiList:[
    'updateAppMessageShareData',
    'updateTimelineShareData',
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
    // await init(defaultConfig);
    this.setState({
      loading:false
    })
    
    // const {data} = await Jsapi(action);
    // window.wx.config({
    //   ...rest,
    //   ...data
    // })
    // wxUtils.optionMenu(false);
    // this.setState({
    //   loading:false
    // })
    // window.wx.error(res => {
    //   window.history.go(0);
    //   console.log(re);
    // })
    
    
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