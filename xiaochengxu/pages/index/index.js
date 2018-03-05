//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    //轮播图片
    imgUrls: [
      'http://p1.so.qhimgs1.com/bdr/_240_/t0141a1162b0d080b1d.jpg',
      'http://p1.so.qhimgs1.com/bdr/_240_/t0164e1e5c18a0cc3dd.jpg',
      'http://p2.so.qhimgs1.com/bdr/_240_/t016ee2cb82bba908d2.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**精品系列下图片-1点击事件 */
  bindintro1:function(){
    wx.navigateTo({
      url: '../single-intro/single-intro'
    })
  },
  /**精品系列下图片-2点击事件 */
  bindintro2: function () {
    wx.navigateTo({
      url: '../single-intro2/single-intro2'
    })
  },
  /**精品系列下图片-3点击事件 */
  bindintro3: function () {
    wx.navigateTo({
      url: '../single-intro3/single-intro3'
    })
  },
  /**精品系列下图片-4点击事件 */
  bindintro4: function () {
    wx.navigateTo({
      url: '../single-intro4/single-intro4'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
