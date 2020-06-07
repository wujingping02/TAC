import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  // 页面的初始数据
  data: {
    courseList: null,
  },
 
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // this.toastedit = this.selectComponent("#toastedit")
  },
 
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    mockRequest({// 上来获取一下课程列表
      url: service.courseList.url,
      method: "post",
    }).then((res) => {
      this.store.data.courseList = res.data;// 把列表存一下
      this.update();
    })
  },

  // 用户点击课程列表
  watchCourseDetail: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/courseDetail/index?index=" + index
    });
  },
 
  // 生命周期函数--监听页面显示
  onShow: function () {
  
  },
 
  // 生命周期函数--监听页面隐藏
  onHide: function () {
  
  },
 
  // 生命周期函数--监听页面卸载
  onUnload: function () {
  
  },
 
  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    
  },
 
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
  
  },
 
  // 用户点击右上角分享
  onShareAppMessage: function () {
    
  }

})
