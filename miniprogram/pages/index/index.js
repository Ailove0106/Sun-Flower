const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

  data: {
    abc: null,
    title: 1,
    motto: '这里将会是资讯信息'
  },
  abc: function (e) {
    this.setData({
      abc: e.detail.value
    })
    console.log(this.data.abc)
  },
  send: function () {
    var that = this;
    var name = this.data.abc;
    wx.request({
      url: 'https://api.jisuapi.com/news/search?keyword=' + name + '&appkey=08ef2b3d02ff71cf',
      method: 'GET',
      success: function (res) {
        var article = res.data.result.list[0].content;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          motto: '',
          title: 0
        })
      }
    })
  },
  onLoad: function () {
    this.setData({
      motto: '这里将会是资讯信息'
    })
  }

})
