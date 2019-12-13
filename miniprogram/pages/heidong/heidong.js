// pages/heidong/heidong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 0,
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  heidong1: function () {
    this.setData({
      a: this.data.a + 2,
    })
  },
  heidong2: function () {
    this.setData({
      a: this.data.a - 2,
    })
  }
})