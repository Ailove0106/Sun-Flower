// miniprogram/pages/message/message.js
Page({

  data: {
    tijiao:true,
    contents: "",
    name:0,
    xuehao:0,
    num: 1,
    numa: 1,
    numb: 1,
    numc: 1,
    numd: 1,
    modalHidden:true,
    modalHidden2:true,
    modalHidden3: true,
    aodalHidden: true,
    aodalHidden2: true,
    aodalHidden3: true,
    bodalHidden: true,
    bodalHidden2: true,
    bodalHidden3: true,
    codalHidden: true,
    codalHidden2: true,
    codalHidden3: true,
    dodalHidden: true,
    dodalHidden2: true,
    dodalHidden3: true,
  },
 tijiao:function()
 {
   this.setData({
     tijiao: false
   })
 },
  back: function () {
    this.setData({
      tijiao: true
    })
  },
  inputname:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  inputnum: function (e) {
    this.setData({
      xuehao: e.detail.value
    })
  },
  modalChange:function(){
    this.setData({
      modalHidden:true
    })
  },
  modalTap:function(){
    this.setData({
      modalHidden:false
    })
  },
  modalChange2:function()
  {
    this.setData({
      modalHidden2:true
    })
  },
  modalChange3: function () {
    this.setData({
      modalHidden3: true
    })
  },

  aodalChange: function () {
    this.setData({
      aodalHidden: true
    })
  },
  aodalTap: function () {
    this.setData({
      aodalHidden: false
    })
  },
  aodalChange2: function () {
    this.setData({
      aodalHidden2: true
    })
  },
  aodalChange3: function () {
    this.setData({
      aodalHidden3: true
    })
  },

  bodalChange: function () {
    this.setData({
      bodalHidden: true
    })
  },
  bodalTap: function () {
    this.setData({
      bodalHidden: false
    })
  },
  bodalChange2: function () {
    this.setData({
      bodalHidden2: true
    })
  },
  bodalChange3: function () {
    this.setData({
      bodalHidden3: true
    })
  },

  codalChange: function () {
    this.setData({
      codalHidden: true
    })
  },
  codalTap: function () {
    this.setData({
      codalHidden: false
    })
  },
  codalChange2: function () {
    this.setData({
      codalHidden2: true
    })
  },
  codalChange3: function () {
    this.setData({
      codalHidden3: true
    })
  },

  dodalChange: function () {
    this.setData({
      dodalHidden: true
    })
  },
  dodalTap: function () {
    this.setData({
      dodalHidden: false
    })
  },
  dodalChange2: function () {
    this.setData({
      dodalHidden2: true
    })
  },
  dodalChange3: function () {
    this.setData({
      dodalHidden3: true
    })
  },

  submit: function () {
    
    var abc = this.data.num
    this.setData({
      num: abc + 1,
      modalHidden:true
    })
    if(this.data.num<5)
    {
      this.setData({
        modalHidden2: false
      })
    }
    else{
      this.setData({
        modalHidden3: false
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name:this.data.name,
        xuehao:this.data.xuehao,
        content: "son",
        tag: 1,
        tile:this.data.num
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  submita: function () {

    var abc = this.data.numa
    this.setData({
      numa: abc + 1,
      aodalHidden: true
    })
    if (this.data.numa < 5) {
      this.setData({
        aodalHidden2: false
      })
    }
    else {
      this.setData({
        aodalHidden3: false
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: this.data.name,
        xuehao: this.data.xuehao,
        content: "a",
        tag: 2,
        tile: this.data.numa
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  submitb: function () {

    var abc = this.data.numb
    this.setData({
      numb: abc + 1,
      bodalHidden: true
    })
    if (this.data.numb < 5) {
      this.setData({
        bodalHidden2: false
      })
    }
    else {
      this.setData({
        bodalHidden3: false
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: this.data.name,
        xuehao: this.data.xuehao,
        content: "b",
        tag: 3,
        tile: this.data.numb
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  submitc: function () {

    var abc = this.data.numc
    this.setData({
      numc: abc + 1,
      codalHidden: true
    })
    if (this.data.numc < 5) {
      this.setData({
        codalHidden2: false
      })
    }
    else {
      this.setData({
        codalHidden3: false
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: this.data.name,
        xuehao: this.data.xuehao,
        content: "c",
        tag: 4,
        tile: this.data.numc
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  submitd: function () {

    var abc = this.data.numd
    this.setData({
      numd: abc + 1,
      dodalHidden: true
    })
    if (this.data.numd < 5) {
      this.setData({
        dodalHidden2: false
      })
    }
    else {
      this.setData({
        dodalHidden3: false
      })
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: this.data.name,
        xuehao: this.data.xuehao,
        content: "d",
        tag: 5,
        tile: this.data.numd
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
    else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    var _this = this;
    wx.cloud.callFunction
      ({
        // 云函数名称
        name: 'search',
        // 传给云函数的参数
        data:
        {
          tag: 1
        },
        success: function (res) {
          console.log(res.result)
          _this.setData({
            contents: res.result.data[res.result.data.length - 1].content,
              num: res.result.data[res.result.data.length - 1].tile
          })
        },
        fail: console.error
      })
    wx.cloud.callFunction
      ({
        // 云函数名称
        name: 'search',
        // 传给云函数的参数
        data:
        {
          tag: 2
        },
        success: function (res) {
          console.log(res.result)
          _this.setData({
            contents: res.result.data[res.result.data.length - 1].content,
            numa: res.result.data[res.result.data.length - 1].tile
          })
        },
        fail: console.error
      })
    wx.cloud.callFunction
      ({
        // 云函数名称
        name: 'search',
        // 传给云函数的参数
        data:
        {
          tag: 3
        },
        success: function (res) {
          console.log(res.result)
          _this.setData({
            contents: res.result.data[res.result.data.length - 1].content,
            numb: res.result.data[res.result.data.length - 1].tile
          })
        },
        fail: console.error
      })
    wx.cloud.callFunction
      ({
        // 云函数名称
        name: 'search',
        // 传给云函数的参数
        data:
        {
          tag: 4
        },
        success: function (res) {
          console.log(res.result)
          _this.setData({
            contents: res.result.data[res.result.data.length - 1].content,
            numc: res.result.data[res.result.data.length - 1].tile
          })
        },
        fail: console.error
      })
    wx.cloud.callFunction
      ({
        // 云函数名称
        name: 'search',
        // 传给云函数的参数
        data:
        {
          tag: 5
        },
        success: function (res) {
          console.log(res.result)
          _this.setData({
            contents: res.result.data[res.result.data.length - 1].content,
            numd: res.result.data[res.result.data.length - 1].tile
          })
        },
        fail: console.error
      })

  }
  
})