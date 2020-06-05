var app = getApp();
// example/first/first.js
var Data = require("../../utils/swiper.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    place_url:[
      'http://demo.zhilengzhire.com/weui-SPA-index/022.png'
    ],
    chooseItem:'',
    
    
    
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      // console.log(111);
      this.setData({
          inputVal: "",
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  setPition:function () {
    wx.navigateTo({
      url:'../compition-detail/compition-detail'
    })
  },
  vunue:function () {
    wx.navigateTo({
      url: '../vunue-item/vunue-item',
    })
  },
  selectPlace:function () {
    wx.navigateTo({
      url: '../selectPlace/selectPlace',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://yah.zhongcetianxia.com/api/v1/Index/index', //仅为示例，并非真实的接口地址
      data: {
         x: '' ,
         y: ''
      },
      method: 'POST',
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          chooseItem:res.data.content.sports
        });
        console.log(res.data.content.sports)
      }
    })

    that.setData({
      swiper: Data.swiper,
      icons: Data.icons,
      navigaData: Data.navigaData,
      Middlebanner:Data.Middlebanner
    });
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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