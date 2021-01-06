//关键功能是测试题框
//题库
const qnaire = [
  {
    "question": "我觉得闷闷不乐，情绪低沉",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我觉得一天中早晨最好",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我一阵阵哭出来或觉得想哭",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我晚上睡眠不好",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我吃得跟平常一样多",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我与异性密切接触时和以往一样感到愉快",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我发觉我的体重在下降",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我有便秘的苦恼",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "心跳比平常快",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我无缘无故地感到疲乏",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我的头脑和平常一样清楚",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我觉得经常做的事情并没有困难",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我觉得不安而平静不下来",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我对未来抱有希望",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我比平常容易生气激动",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "我觉得做出决定是容易的",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我觉得自己是个有用的人，有人需要我",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我的生活过得很有意思",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  },
  {
    "question": "我认为如果我死了，别人会生活得更好",
    "option": {
      "a": "从不",
      "b": "有时",
      "c": "经常",
      "d": "持续"
    }
  },
  {
    "question": "平常感兴趣的事我仍然感兴趣",
    "option": {
      "a": "持续",
      "b": "经常",
      "c": "有时",
      "d": "从不"
    }
  }
]
const app = getApp()
var ans = new Array(20)
Page({
  data: {
    tijiao:true,
    imgAnim: {},
    qnaire: qnaire,
    answer: ans,
    id: 0,
    sum: 0,
    sum1:0,
    zhuanhuan: 1,
    baseUrl: app.globalData.baseUrl,
    photos: [{
      "subtitle": "Rails Core Team",
      "title": "Latest News",
      "img": "http://8.136.2.212:8080/logo/1.jpg",
      "user": "Developer",
      "time": " December 7,2019"
    }, {
        "subtitle": " Rails Core Team",
      "title": "Latest News",
        "img": "http://img.china-satellite.org/upload/2018/0724/74caa996a2564deb279831729e750dd6.jpg",
      "user": "Beijing",
      "time": " December 11,2019"
    }, {
        "subtitle": " Rails Core Team",
      "title": "Latest News",
        "img": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2533292858,406683395&fm=26&gp=0.jpg",
      "user": "Beijing",
        "time": " December 15,2019"
    }, {
        "subtitle": " Rails Core Team",
      "title": "Latest News",
        "img": "http://www.vanzol.com/uploads/remote/47041538800442.jpg",
      "user": "Admin",
        "time": " December 22,2019"
    }, {
      "subtitle": " Rails Core Team",
      "title": "Latest News",
        "img": "https://pic3.zhimg.com/80/v2-bf8579569bccaf886514b50ccab80f62_hd.jpg",
      "user": "Admin",
        "time": " December 29,2019"
    }
    ]
  },
  back: function () {
    this.setData({
      tijiao: true
    })
  },
  readmore:function(){
    this.setData({
      tijiao: false
    })
  },
  radioChange: function (e) {
    console.log(e.detail.value)
  },
//以下是测试题实现
//下一个题目
  nextq: function () {
    if (this.data.id < 19) {
      this.setData({
        id: this.data.id + 1,
      })
    }
  },
//返回首页
  lastq: function (e) {
    if (this.data.id != 0) {
      this.setData({
        id: this.data.id - 1,
      })
    }
  },
//判断得分
  submit: function (e) {
    console.log(e.detail.value);
    var a = e.detail.value.answer;
    var id = this.data.id;
    ans[id] = a;
    this.setData({
      answer: ans,
    })
    console.log(this.data.answer);

  },
  formSubmit: function () {
    var finish;
    var i = 0;
    var _this = this;
    while (i < 20) {
      if (ans[i] == "") {
        finish = 'false';
        break;
      } else {
        finish = 'true';
      }
      i++;
    }
    //判断是否完成题目
    if (finish == 'false') {
      wx.showModal({
        title: '无法提交',
        content: '您还有部分题目未完成，请检查后重新提交',
        showCancel: false,
        confirmColor: '#fcbe39',
        confirmText: "好的",
        success(res) {
          _this.setData({
            id: i,
          })
        }
      })
    } else {
      var h = 0;
      while (h < 20) {
        this.setData({
          sum: this.data.sum + parseInt(ans[h]),
        })
        h++;
      }
      this.setData({
        sum1:this.data.sum*1.25,
        zhuanhuan: this.data.zhuanhuan + 1
      })
    }
  },
  stopTouchMove: function () {
    return false;
  },
  zhuan: function () {
    this.setData({
      zhuanhuan: this.data.zhuanhuan + 1
    })
  },
  zhuan1: function () {
    this.setData({
      zhuanhuan: this.data.zhuanhuan + 1,
      id:0,
      sum:0,
      sum1:0
    })
    {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  },
  onLoad: function (options) {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease-in",
      delay: 0
    });
    animation.opacity(1).translateY(-20).step();
    this.setData({ imgAnim: animation })
  }
})