//关键功能是api和html转换
var itemModel = [];
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

  data: {
    mes:"",
    tmp:'1',
    abc: null,
    title: 1,
    motto: '',
    head:[],
    src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=128858&resourceType=ugc_video&editionType=default&source=aliyun&playUrlType=url_oss",
    des:""
  },
 tupian:function(){
   var that = this;
   wx.request({
     url: 'https://api.apiopen.top/todayVideo',
     method: "GET",
     ' content-type': 'json',
     data:{

     },
     success:function(e){
       that.setData({
         src:e.data.result[1].data.content.data.playUrl,
         des: e.data.result[1].data.content.data.description
       })
       console.log(e.data)
     }
 })
 },
  next:function(){
    var that=this;
    wx.request({
      url: 'https://route.showapi.com/341-5?len=&showapi_appid=146375&showapi_timestamp=20200216114450&showapi_sign=2e53a9fbb831434a8f680db5be7cd4d1',
      method:"GET",
     ' content-type':'json',
      success:function(e)
      {
        var src=e.data.showapi_res_body.list
        that.setData({
          mes:src[0].text
        })
      }
    })
  },
  abc: function (e) {
    this.setData({
      abc: e.detail.value
    })

    console.log(this.data.abc)
  },
  //调用api
  send: function () {
    var that = this;
    var name = this.data.abc;
    wx.request({
      url: 'https://api.jisuapi.com/news/search?keyword=' + name + '&appkey=08ef2b3d02ff71cf',
      method: 'GET',
      success: function (res) {
        itemModel = []
        for(var i=0;i<10;i++)
        {
          that.makeObj(res.data.result.list[i], i+1);
        }
        var article = res.data.result.list[0].content;
        var article1 = res.data.result.list[1].content;
        var article2 = res.data.result.list[2].content;
        var article3 = res.data.result.list[3].content;
        var article4 = res.data.result.list[4].content;
        var article5 = res.data.result.list[5].content;
        var article6 = res.data.result.list[6].content;
        var article7 = res.data.result.list[7].content;
        var article8 = res.data.result.list[8].content;
        var article9 = res.data.result.list[9].content;
        //wxparse是html转换
        WxParse.wxParse('article', 'html', article, that, 5);
        WxParse.wxParse('article1', 'html', article1, that, 5);
        WxParse.wxParse('article2', 'html', article2, that, 5);
        WxParse.wxParse('article3', 'html', article3, that, 5);
        WxParse.wxParse('article4', 'html', article4, that, 5);
        WxParse.wxParse('article5', 'html', article5, that, 5);
        WxParse.wxParse('article6', 'html', article6, that, 5);
        WxParse.wxParse('article7', 'html', article7, that, 5);
        WxParse.wxParse('article8', 'html', article8, that, 5);
        WxParse.wxParse('article9', 'html', article9, that, 5);
        that.setData({
          motto: '',
          title: 0,
        })
        console.log(that.data.head)   
           }
    })
  },

  makeObj: function (data, id) {
    //每一次赋值定义个方法来盛放属性
    let object = {};
      object.id = id;
    object.src = data.title;
    //开头定义的一个空数组,专门用来存这个的
    itemModel[itemModel.length] = object;
    this.setData({
      head: itemModel
    })
  },
   onLoad:function(options){
     var that = this;
     wx.request({
       url: 'https://route.showapi.com/341-5?len=&showapi_appid=146375&showapi_timestamp=20200216114450&showapi_sign=2e53a9fbb831434a8f680db5be7cd4d1',
       method: "GET",
       ' content-type': 'json',
       success: function (e) {
         var src = e.data.showapi_res_body.list
         that.setData({
           mes: src[0].text
         })
       }
     })
   }
})
