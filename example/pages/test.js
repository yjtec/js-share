import React from 'react';
import {wxUtils,create} from 'yjtec-wx';

// function* helloWorldGenerator(){
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator();
// console.log(hw);
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// function f(m){
//   return m + 2;
// }
// console.log(f(x + 5))

class TestComponent extends React.Component{
  async componentDidMount(){
    // const re = await wxUtils.getPosition();
    // alert(JSON.stringify(re));
    // console.log(re,99999);    
    // wxUtils.optionMenu(true);
    // wxUtils.share({
    //   title:'三大爷的分享',
    //   desc:'三大爷',
    //   link:'http://ksj.npay.hnyjkj.com/',
    //   imgUrl:'https://test360vrsh.oss-cn-qingdao.aliyuncs.com/store_avatar/2019-09-28/fWjulB6zfxRThHqAZG47cyXKB7BRDpVtymoCpDLh.jpeg?x-oss-process=style/store_avatar'
    // })
    

  }
  render(){
    return <div>123123</div>
  }
}
export default create(TestComponent);
