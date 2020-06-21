import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

Page({
  data: {
    title : "课程详情",
    id: "",
    fieldList: [
      {
        "type" : "selector",
        "lable" : "预约课程",
        "key" : "calssName",
        "isMust" : "1",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "className" : "reservation"
      },{
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "maxNumber",
        "isMust" : "1",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "className" : "reservation"
      }
    ],
    name: "",
    age1: "",
    age2: "",
    address: "",
    courseIntrd: "",
    orgName: "",
    phone: "",
    orgIntrd: "",
    orgPhoto: null,
    classList: null
  },

  onLoad: function (options) {
    this.data.id = options.id;
    mockRequest({// 上来获取一下教室列表
      url: service.courseQuery.url,
      method: "post",
    }).then((res) => {
      this.setData({
        name: res.data.name,
        age1: res.data.age1,
        age2: res.data.age2,
        address: res.data.address,
        phone: res.data.phone,
        orgPhoto: res.data.orgPhoto.map((v) => {
          return v = {
            isImage : true,
            url : v
          }
        }),
        classList: res.data.teacher,
        courseIntrd: res.data.courseIntrd,
        orgName: res.data.orgName,
        orgIntrd: res.data.orgIntrd
      })
    })
  },

  // 打电话
  callOrg: function(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },

  // 查看老师详情
  itemClick: function(data){
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/orgDetail/index?index=" + index
    });
  },

  // 预约
  submit: function(){
    
  }
})
