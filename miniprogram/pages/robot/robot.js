// miniprogram/pages/robot/robot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    answer:"你好呀，我是阳小花"
  },
  flower:function(e){
    this.setData({
      content:e.detail.value
    })
    console.log(this.data.content)
  },
  send:function(){
    var that = this;
    var content = that.data.content;
    wx.request({
      url:'https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken='+content,
      method: 'GET',
      success: function (res) {
        var ans = that.data.answer;
        that.setData({
         answer: res.data.data.info.text
        })
        console.log(res.data)
        console.log(ans)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})