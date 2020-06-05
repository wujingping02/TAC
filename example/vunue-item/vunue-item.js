var Data = require("../../utils/swiper.js");

Page({
  data: {
    tabs: ["全城", "全部分类", "智能排序"],

    inputShowed: false,
    inputVal: ""
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
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad: function () {
    var that = this;
    that.setData({
      location:Data.location,
      navigaData:Data.navigaData
    })
    
  },
  
})