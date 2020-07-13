import store from '../../store'
import create from '../../utils/create'

create(store, {
  // 页面的初始数据
  data: {
    title: "我的相册",
    list: null
  },
 
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    this.data.list = this.store.data.parentPhotos.map(v => {
      return v = {
        isImage : true,
        url : getApp().globalData.imgUrl + v
      }
    });
    this.setData({
      list : this.data.list
    })
  }
})
