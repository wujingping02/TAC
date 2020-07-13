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

  bindgetphonenumber(res) {
    this.store.data.userInfo.encryptedData = res.detail.encryptedData;
    this.store.data.userInfo.iv = res.detail.iv;
    if(this.data.agree === false){
      wx.showToast({
        title: '请先勾选协议',
        icon: 'none'
      });
      return
    };
    wx.navigateTo({
      url: "/pages/role/index"
    })    
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
