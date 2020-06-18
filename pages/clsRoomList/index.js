import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

Page({
  data: {
    title: "教室管理",
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "教室名称",
        "key" : "orgName",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "教室最大人数",
        "key" : "orgName",
        "isMust" : "1"
      }
    ],
    classList : [],
    hidePopup : true
  },

  onShow: function () {
    mockRequest({// 上来获取一下教室列表
      url: service.classroomList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        classList : res.data
      })
    })
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
  }
})
