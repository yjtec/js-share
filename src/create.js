import React,{Component,Fragment} from 'react';
import {WxContext,Jsapi} from 'yjtec-wx';

export default function(Ele){
  return class WxContainer extends Component{
    static contextType = WxContext;
    constructor(props) {
      super(props);
      this.state ={
        loading:true
      }
    }    
    async componentDidMount(){
      const {wxOk,...config} = this.context;
      // if(!wxOk){
      const {action,...rest} = config;
      const {data} = await Jsapi(action);
      const re = window.wx.config({
        ...rest,
        ...data
      })
      // }
      this.setState({
        loading:false
      })
    }
    render(){
      const {loading} = this.state;
      return (<Fragment>
        {!loading && <Ele {...this.props} />}
      </Fragment>
      )
    }
  }
}