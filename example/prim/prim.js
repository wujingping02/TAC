Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['广东','江西','湖南','湖北','福建'],
    index:-100,
    date:"2016-4-8",
    time:'12:05'
  },
  bindPickerChange:function(e){
    // console.log(e.detail.value),
    this.setData({
      index: e.detail.value,
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
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