// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try{
  //templateId 订阅消息模块id
    const templateId = 'nrPdEgVbED1uFuYsETdyy24Me25kh0hshbci60v62A8'
    const wxContext = cloud.getWXContext()
    const result = await cloud.openapi.subscribeMessage.send({
      touser: wxContext.OPENID,
      //page: '',//查看的页面
      data: {
      //这里的参数时我们订阅消息模块中要显示的数据 也可以在小程序中通过传参的方式进行动态赋值 我这里写死了
      //参数名称详情看下图
        name1: {
          value: '评价成功'
        },
        thing2: {
          value: '弟弟救我啊'
        },
        date3: {
          value: '2021/1/6'
        },
        phone_number4: {
          value: '13401060692'
        }
      },
      templateId: templateId,

    })
    console.log(result)
    return result


  }catch(err){
    console.log(err)
    return err
  }
 
  
}