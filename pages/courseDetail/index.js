import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'
import QRCode from '../../utils/qrCode'

create(store, {
  data: {
    title : "课程详情",
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
    classList: null,
    calssId: "",
    courseId: "",
    lessonList: null,
    allLessonList: null,
    upArrow: "../../images/downArrow.png",
    userInfo: null
  },

  onLoad: function (options) {
    if(options.calssId){// 页面从班级列表点进来的
      this.setData({
        calssId : options.calssId
      });
      mockRequest({// 上来获取一下班级详情
        url: service.courseQuery.url,
        method: "post",
      }).then((res) => {
        var qrcode = new QRCode('canvas', {
          text: 'http://jindo.dev.naver.com/collie',
          width: 300,
          height: 300,
          colorDark : '#000000',
          colorLight : '#ffffff',
          correctLevel : QRCode.correctLevel.H
        });
        qrcode.clear();
        qrcode.makeCode('http://naver.com');
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
          orgIntrd: res.data.orgIntrd,
          allLessonList: res.data.lessonList,
          lessonList: res.data.lessonList.slice(0, 2)
        })
      })
    }else{
      this.setData({
        courseId : options.courseId
      });
      mockRequest({// 上来获取一下课程详情
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
    }
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
    
  },

  // 展开课时
  upArrow: function(){
    if(this.data.upArrow === "../../images/downArrow.png"){
      this.setData({
        lessonList: this.data.allLessonList,
        upArrow: "../../images/upArrow.png"
      })
    }else{
      this.setData({
        lessonList: this.data.allLessonList.slice(0, 2),
        upArrow: "../../images/downArrow.png"
      })
    }
  } 
})
