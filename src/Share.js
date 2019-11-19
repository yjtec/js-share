class Share{
  init(config){
    const {title,link,desc,imgUrl} = config;
    this.title = title;
    this.link = link;
    this.desc = desc;
    this.imgUrl = imgUrl;

    wx.ready(()=>{
      this.toFriend();
      this.toTimeline();
    });
    wx.error(res => {
      console.log(`${res}`);
    })
  }
  //分享到朋友圈
  toFriend(){
    wx.updateAppMessageShareData({ 
      title: this.title, 
      link: this.link,
      desc:this.desc,
      imgUrl: this.imgUrl,
      success: function () {
        // 设置成功
      }
    })
  }
  toTimeline(){
    wx.updateTimelineShareData({ 
      title: this.title, 
      link: this.link, 
      imgUrl: this.imgUrl,
      success: function () {
        // 设置成功
      }
    })
  }
}
export default Share;