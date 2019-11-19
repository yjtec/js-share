import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import {wxUtils} from 'yjtec-wx';

class IndexContainer extends React.Component{
  componentDidMount(){
    wxUtils.optionMenu(true);
    wxUtils.share({
      title:'二大爷',
      desc:'二大爷的分享',
      link:'http://ksj.npay.hnyjkj.com/',
      imgUrl:'https://test360vrsh.oss-cn-qingdao.aliyuncs.com/admin_image/UUdhFJLD0utovejdfisSDtObN6SEtN5by77rZ1do.jpeg?x-oss-process=style/store_avatar'
    })
  }
  componentWillUnmount(){
    wxUtils.optionMenu(false);
  }
  render(){
    return(
      <div>
        <Link to="/test">而页面</Link>
      </div>
    )
  }
}
export default IndexContainer;
