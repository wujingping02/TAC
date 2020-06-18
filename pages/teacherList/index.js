import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

Page({
  data: {
    title: "教室管理",
    fieldList : [// 字段list
      {
        "type" : "search",
        "lable" : "请输入老师手机号",
        "key" : "orgName",
        "isMust" : "1"
      }
    ],
    classList : [],
    hidePopup : true,
    type : "teacher",
    prompt : ""
  },

  onLoad: function (options) {
    if(options.type === "assistant"){// 助教
      this.data.fieldList[0].lable = "请输入助教手机号";
      mockRequest({// 上来获取一下教室列表
        url: service.userList.url,
        method: "post",
      }).then((res) => {
        this.setData({
          fieldList : this.data.fieldList,
          classList : res.data
        })
      })
      return
    }
    mockRequest({// 上来获取一下教室列表
      url: service.teacherList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        classList : res.data
      })
    })
  },

  onShow: function () {
    
  },

  addItem: function () {
    this.setData({
      hidePopup : false
    })
  },
  
  sureAdd: function () {
    mockRequest({// 添加一个教室
      url: service.classroomAdd.url,
      method: "post",
    }).then((res) => {
      this.data.classList.push(res.data);
      this.setData({
        classList : this.data.classList,
        hidePopup : true
      })
    })
  },

  del: function (e) {
    let index = e.currentTarget.dataset['index'];// 当前点击的老师信息
    
  },

  onSearch: function (val) {
    mockRequest({// 上来获取一下教室列表
      url: service.userQuery.url,
      method: "post",
    }).then((res) => {
      this.setData({
        prompt : "已找到" + res.data.name + "老师，请点击按钮提示老师验证"
      })
    })
  }
})
