import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

Page({
  data: {
    title: "教室管理",
    addressId: '',
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "教室名称",
        "key" : "classroomName",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "教室最大人数",
        "key" : "classroomSize",
        "check" : "num",
        "isMust" : "1"
      }
    ],
    classList : [],
    hidePopup : true
  },

  onLoad(options) {
    this.setData({
      addressId : options.addressId
    })
  },

  onShow: function () {
    ajax({// 上来获取一下教室列表
      url: service.classroomList.url,
      data: {
        addressId : this.data.addressId
      }
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
  
  sureAdd: function () {// 添加一个教室
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    let data = {
      addressId : this.data.addressId,
      classroomSize : vals.classroomSize,
      classroomName : vals.classroomName
    };
    ajax({
      url: service.addClassroom.url,
      data: data
    }).then((res) => {
      this.data.classList.push(data);
      this.setData({
        classList : this.data.classList,
        hidePopup : true
      })
    })
  }
})
