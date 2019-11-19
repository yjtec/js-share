function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Share =
/*#__PURE__*/
function () {
  function Share() {
    _classCallCheck(this, Share);
  }

  _createClass(Share, [{
    key: "init",
    value: function init(config) {
      var _this = this;

      var title = config.title,
          link = config.link,
          desc = config.desc,
          imgUrl = config.imgUrl;
      this.title = title;
      this.link = link;
      this.desc = desc;
      this.imgUrl = imgUrl;
      wx.ready(function () {
        _this.toFriend();

        _this.toTimeline();
      });
      wx.error(function (res) {
        console.log("".concat(res));
      });
    } //分享到朋友圈

  }, {
    key: "toFriend",
    value: function toFriend() {
      wx.updateAppMessageShareData({
        title: this.title,
        link: this.link,
        desc: this.desc,
        imgUrl: this.imgUrl,
        success: function success() {// 设置成功
        }
      });
    }
  }, {
    key: "toTimeline",
    value: function toTimeline() {
      wx.updateTimelineShareData({
        title: this.title,
        link: this.link,
        imgUrl: this.imgUrl,
        success: function success() {// 设置成功
        }
      });
    }
  }]);

  return Share;
}();

export default Share;