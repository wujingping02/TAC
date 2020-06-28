import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'
import QRCode from '../../utils/qrCode'

create(store, {
  data: {
    active1: "",
    active2: "",
    active3: "",
    active4: "",
    role: ""
  },

  onLoad: function (options) {
    
  },

  // 选择角色
  choose(e) {
    if(e.currentTarget.dataset.role === "active1"){
      this.setData({
        role: "40",
        active1: "active",
        active2: "",
        active3: "",
        active4: ""
      });    
    }else if(e.currentTarget.dataset.role === "active2"){
      this.setData({
        role: "30",
        active1: "",
        active2: "active",
        active3: "",
        active4: ""
      });
    }else if(e.currentTarget.dataset.role === "active3"){
      this.setData({
        role: "10",
        active1: "",
        active2: "",
        active3: "active",
        active4: ""
      });
    }else if(e.currentTarget.dataset.role === "active4"){
      this.setData({
        role: "20",
        active1: "",
        active2: "",
        active3: "",
        active4: "active"
      });
    }
  },

  // 提交角色信息
  click() {
    if(this.data.role === ""){
      wx.showToast({
        title: "请选择角色",
        icon: 'none'
      })
    }
  }
})
