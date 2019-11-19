import React from 'react';
import { importCDN } from './utils/utils';
let isLoaderWx = false;
const loadWx = async (callback) => {
  if (isLoaderWx) {
    return Promise.resolve(window.wx);
  }
  const re = await importCDN("http://res.wx.qq.com/open/js/jweixin-1.4.0.js",'wx');

  isLoaderWx  = true;
  if(callback) callback();
  return Promise.resolve(re);
  
}

class AsyncLoadWx extends React.Component {
  state = {
    loading: !isLoaderWx,
  };
  componentDidMount(){
    loadWx(()=>{
      this.setState({
        loading: false,
      });
    });
  }

  render() {

    const { children,renderLoading } = this.props;
    const { loading } = this.state;
    if(!loading){
      return children;
    }
    return renderLoading;
  }
}
AsyncLoadWx.defaultProps = {
  renderLoading:<div>loading....</div>
}

export { AsyncLoadWx,loadWx};
