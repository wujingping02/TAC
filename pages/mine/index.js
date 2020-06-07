import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest} from '../../utils/util'
import service from '../../utils/service'


create(store, {
  data: {
    Avatar: "",
    name: ""
  },

  onReady: function () {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          Avatar : res.userInfo.avatarUrl,
          name : res.userInfo.nickName
        })
      }
    })
  },

  getUserInfo: function (res){
    
  },

  getUserInfoFun: function (res){
    // userInfo:
    // {avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/rppjaPwjXOHHh2gITdeEQotcTL4GDoPOibBaEmqtiaxBBWsYich77j3YyibWSSjnyxlsrJcF1OKRgaKXA7icVR0HB9w/132"
    // city: ""
    // country: "Norway"
    // gender: 1
    // language: "zh_CN"
    // nickName: "Guang"
    // province: ""}
    
  }
})
