import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, getWXCode} from '../../utils/util'
import service from '../../utils/service'
import QRCode from '../../utils/qrCode'

create(store, {
  data: {
    title : "注册",
    agree : false,
    fieldList : [
      {
        "type" : "text",
        "lable" : "手机号",
        "key" : "phone",
        "isMust" : "1"
      },
    ]
  },

  onLoad: function (options) {
    getWXCode().then(code => {// 存一下code
      this.store.data.userInfo.loginCode = code;
    })
  },

  // 拿一下加密的手机信息
  bindgetphonenumber(res) {
    if(!res.detail.encryptedData){
      return
    }
    this.store.data.userInfo.encryptedData = res.detail.encryptedData;
    this.store.data.userInfo.iv = res.detail.iv;
    wx.navigateTo({
      url: "/pages/role/index"
    })    
  },

  // 检查下协议
  checkAgree() {
    if(this.data.agree === false){
      wx.showToast({
        title: '请先勾选协议',
        icon: 'none'
      });
      return
    };
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
