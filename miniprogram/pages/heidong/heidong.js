// pages/heidong/heidong.js
//cesehi
Page({

  /**
   * 页面的初始数据
   */

  data: {
    num:6,
    num2: 12,
    a: 0,
    header: [{ "name": "人生", "id": "starter", "books": [{ "id": "starter1", "img": "http://47.94.229.217/img/pikaqi.png", "title": "恸", "desc": "面具戴得太久。就会长到脸上。再想摘下来，除非伤筋动骨" }, { "id": "starter2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=098e93453f381f309e198da199004c67/0741213fb80e7becc346a29c382eb9389a506beb.jpg", "title": "多啦C梦", "desc": "不要把自己活得像落难者一样急着回家告诉所有人，你的不幸总有一天你会发现酸甜苦辣要自己尝，漫漫人生要自己过，你所经历的在别人眼里都是故事，也别把所有事都掏心掏肺的告诉别人，成长本来就是一个孤立无援的过程。" }] },
      { "name": "感触", "id": "e1st", "books": [{ "id": "e1st-1", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=4b7d402f9235e5dd902ca5d746c7a7f5/f6d5d143ad4bd113774f174f4dafa40f4afb0588.jpg", "title": "搁浅", "desc": "如果我放弃了，不是因为我输了，而是因为我懂了" }, { "id": "e1st-2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=dd812d436cec54e741ec1a1689399bfd/0bbae6cd7b899e51f30d9a6955a7d933c9950d88.jpg", "title": "弄弦", "desc": "接纳孤独保持独立清醒和独立，把温柔跟心软留给值得的人，用绝对理智和清醒去压制心里的难过" }, { "id": "e1st-3", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=c2bfb472af0e7bec23da03e91f2fb9fa/ea4735fae6cd7b8965ef9afe182442a7d8330e88.jpg", "title": "日常小迷糊", "desc": "《人间失格》里有一句话，“见一个爱一个，是谁都不爱，我连自己都不爱，还怎么去爱别人……”" }] },
      { "name": "心动", "id": "e2nd", "books": [{ "id": "e2nd-1", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=8552c1aa21d12f2ece05ae687fc3d5ff/45c99e510fb30f24bc194c7edf95d143ac4b0388.jpg", "title": "昵称加载中", "desc": "我想你是温柔的海风，是轻快的白云，是浪漫的星火，亦是这天地间第四种绝色" }, { "id": "e2nd-2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=838a7090f01190ef01fb92d7fe1a9df7/930bd11373f082025c1031425cfbfbedaa641b88.jpg", "title": "温柔的人像沼泽", "desc": "能不能转账给我买点草莓，下次还你脖子上" }, { "id": "e2nd-3", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=299c4819414e9258a63486e6ac83d1d1/4dcda9773912b31b90ee6d549118367adbb4e189.jpg", "title": "星辰", "desc": "你还在等那个人吗？等着被爱还是等着死心." }, { "id": "e2nd-4", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=aab58c95ab3eb13544c7b7b3961fa8cb/10338bd4b31c87018b34129b307f9e2f0608ff89.jpg", "title": "蒙面小仙女", "desc": "希望阳光很暖，微风不燥，时光不老，你我都好" }, { "id": "e2nd-5", "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3419047023,930377777&fm=26&gp=0.jpg", "title": "拥有宝藏的男孩", "desc": "再也不想为一个人付出我的整颗心了，再也不想伤害为我付出的人了。与其为一个人付出一颗心，不如收下一堆的热情" }] },
      { "name": "学业", "id": "e4th", "books": [{ "id": "e4th-1", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=fcebc3038558d109c4e3a9bae159ccd0/97373912b31bb051d9a61355217adab44bede089.jpg", "title": "长久", "desc": "政治老师直播涉嫌”政治“内容，直播间被封" }, { "id": "e4th-2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=f6e759f27b81800a6ee58906813433d6/083adab44aed2e73ac6b26519001a18b86d6fa89.jpg", "title": "Civa", "desc": "生物老师涉嫌不正当内容，直播间被封" }, { "id": "e4th-3", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=8a7156b0eb039245a1b5e107b795a4a8/9eac08fa513d26971051a82042fbb2fb4216d889.jpg", "title": "灯火入弯眉", "desc": "未来可期。高考加油" }] },
      { "name": "遗憾", "id": "e3rd", "books": [{ "id": "e3rd-1", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=061814862edbb6fd255be52e3925aba6/ae129822720e0cf38008ee861d46f21fbf09aa94.jpg", "title": "。", "desc": "如果不是真的喜欢，谁愿意卑微到尘埃。" }, { "id": "e3rd-2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=4f173823cac451daf6f60ce386fc52a5/1ee4462309f79052cce0e7431bf3d7ca7acbd594.jpg", "title": "局外人", "desc": "这个年龄，说爱太早，说喜欢又觉得太少" }, { "id": "e3rd-3", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=d909ac96a1fd5266a72b3c1c9b199799/a662720e0cf3d7ca23099f0be51fbe096a63a994.jpg", "title": "Thx", "desc": "止于唇齿，掩于岁月。" }, { "id": "e3rd-4", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=840feec489510fb37819779fe932c893/55200c338744ebf8788ec442cef9d72a6159a794.jpg", "title": "羡慕许仙日过蛇", "desc": "自作多情" }] },
      { "name": "境遇", "id": "e5th", "books": [{ "id": "e5th-1", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=9ed51fcfae014a90813e46b599763971/8e3eca8065380cd711e10290b644ad3458828194.jpg", "title": "灿", "desc": "这世间欠你的一切温柔，我来还。" }, { "id": "e5th-2", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=bed02656a751f819f1250342eab54a76/93745982b2b7d0a28b36a4e0dcef76094a369a94.jpg", "title": "安其拉双马尾", "desc": "我想你了回来好不好。" }, { "id": "e5th-3", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=0b402c4c5d90f60304b09c4f0913b370/f4c065380cd79123161f3409ba345982b3b78094.jpg", "title": "咕噜东", "desc": "在一切变好之前，我们总要经历一些不开心的日子，这段日子也许很长也许只是一觉醒来，所以耐心点给好运一点时间。" }, { "id": "e5th-4", "img": "http://tiebapic.baidu.com/forum/w%3D580/sign=bdd1e6bd95025aafd3327ec3cbecab8d/ea6a2834349b033b37775ca702ce36d3d439bd94.jpg", "title": "仄言", "desc": "你风尘仆仆走向我，胜过一切遥远的温柔" }] }],
    tabScroll: 0,
    currentTab: 0,
    windowHeight: '',
    windowWidth: '',
    height: 1000,
  },
  showModal:function(){
    this.setData({
      num:this.data.num+1
    })
  },
  showModal2: function () {
    this.setData({
      num2: this.data.num2 + 1
    })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.current; //获取当前tab的index
    var tabWidth = this.data.windowWidth;  // 导航tab共5个，获取一个的宽度
    this.setData({
      tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
    })
    if (this.data.currentTab == current) {
      return false
    } else {
      this.setData({ currentTab: current });
    }
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