var Data = require("../../utils/swiper.js");

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      
    ],
    icon: [
      'http://demo.zhilengzhire.com/weui-SPA-img/005.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/006.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/007.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/003.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/004.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/018.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/019.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/008.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/009.png',
      'http://demo.zhilengzhire.com/weui-SPA-img/010.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300
  },
  bintop: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  popMap:function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name:'龙岗大运中心',
          address:'龙岗区xxxxxxxxxxxxxxxxxxxx'
        });
      }
    });
  },
  call:function () {
    wx.makePhoneCall({
      phoneNumber: '0755-1234567' 
    })
  },
  requires:function () {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  scroll:function(){
    wx.navigateTo({
      url: '../refersh/refersh',
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    that.setData({
      assessData:Data.assessData,
      requires:Data.requires
    })
  },
})
