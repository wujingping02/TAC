import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'
import QRCode from '../../utils/qrCode'

create(store, {
  data: {
    title : "注册",
    agree : false
  },

  onLoad: function (options) {
    
  },

  getUserInfo(data) {
    if(this.data.agree === false){
      wx.showToast({
        title: '请先勾选协议',
        icon: 'none'
      });
    }
    return
  },

  // 勾选协议
  checked() {
    if(this.data.agree === false){
      this.setData({
        agree : true
      })
    }else{
      this.setData({
        agree : false
      })
    }
  },

  // 服务协议
  checkPro() {
    wx.navigateTo({
      url: "/pages/protocol/index"
    });
  },

  // 隐私条款
  checkTerms() {
    wx.navigateTo({
      url: "/pages/Terms/index"
    });
  }
})
