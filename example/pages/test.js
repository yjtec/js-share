import React from 'react';
import {wxUtils} from 'yjtec-wx';
class TestComponent extends React.Component{
  componentDidMount(){
    wxUtils.share({
      title:'三大爷的分享',
      desc:'三大爷',
      link:'http://www.baidu.com',
      imgUrl:'https://test360vrsh.oss-cn-qingdao.aliyuncs.com/store_avatar/2019-09-28/fWjulB6zfxRThHqAZG47cyXKB7BRDpVtymoCpDLh.jpeg?x-oss-process=style/store_avatar'
    })
  }
  render(){
    return <div>123123</div>
  }
}
export default TestComponent;
