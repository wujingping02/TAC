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
        "lable" : "选课可预约课时",
        "key" : "lessonId",
        "isMust" : "1",
        "nameList" : null,
        "idList" : null,
        "className" : "reservation"
      },{
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "childrenId",
        "isMust" : "1",
        "nameList" : null,
        "idList" : null,
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
    classId: "",
    courseId: "",
    lessonList: null,
    allLessonList: null,
    upArrow: "../../images/downArrow.png",
    userInfo: null
  },

  onLoad: function (options) {
    if(options.courseId){// 显示课程详情
      this.setData({
        courseId : options.courseId
      });
    }else{// 显示的是班级详情
      let data = JSON.parse(options.data);
      this.setData({
        courseId : data.courseId,
        classId : data.classId,
        className : data.className
      })
      // 再获取一下课时列表
      ajax({
        url: service.lessonList,
        data: {
          classId : data.classId
        }
      }).then((res) => {
        this.setData({
          allLessonList: res.data,
          lessonList: res.data.slice(0, 2)
        })
      });
    };
    ajax({// 无论课程详情还是班级详情都要获取一次课程详情
      url: service.courseQuery,
      data: {
        courseId : this.data.courseId
      }
    }).then((res) => {
      res.data.instituteIntro = res.data.instituteIntro === 'null' ? '' : res.data.instituteIntro;
      this.setData({
        name: res.data.courseName,
        age: res.data.ageStage,
        address: res.data.classAddress,
        phone: res.data.institutePhone,
        orgPhoto: res.data.courseImages.map(v => {return v = {isImage : true,url : getApp().globalData.imgUrl + v}}),
        classList: res.data.teachers.map(v => {return v = {...v,url : getApp().globalData.imgUrl + v.teacherHeadImageId}}),
        courseIntrd: res.data.courseIntroduce,
        orgName: res.data.instituteName,
        orgIntrd: res.data.instituteIntro
      });
      if(!options.courseId){
        // 渲染一下二维码，二维码包含班级id，课程id，班级名称，机构名称
        var qrcode = new QRCode('canvas', {
          text: 'http://jindo.dev.naver.com/collie',
          width: 180,
          height: 180,
          colorDark : '#000000',
          colorLight : '#ffffff',
          correctLevel : QRCode.correctLevel.H
        });
        qrcode.clear();
        qrcode.makeCode(this.data.name + "__" + this.data.classId + "__" + this.data.className + "__" + this.data.orgName);
      }
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
    let teachInfo = this.data.classList[index];// 老师信息
    this.store.data.teacherIntro = teachInfo.teacherIntro;
    this.store.data.teacherName = teachInfo.teacherName;
    this.store.data.teacherHeadImageId = teachInfo.teacherHeadImageId;
    wx.navigateTo({
      url: "/pages/orgDetail/index?teacherId=" + teachInfo.teacherId
    });
  },

  // 预约
  submit: function(){
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    ajax({
      url : service.auditionLesson,
      data : {
        lessonId : vals.lessonId,
        childrenId : vals.childrenId
      }
    }).then(res => {
      wx.showToast({
        title : "预约成功",
        icon : "none"
      })
    })
  },

  // 家长获取一下课程列表和子女信息
  onShow() {
    if(this.store.data.userInfo.userType === "40"){// 家长
      // 获取可预约试听的课时信息
      ajax({
        url : service.getAppointClassList,
        data : {
          courseId : this.data.courseId
        }
      }).then((res) => {
        this.data.fieldList[0].nameList = res.data.map(v => {return v = v.lessonDate + " " + v.startTime + "~" + v.endTime});
        this.data.fieldList[0].idList = res.data.map(v => {return v = v.lessonId});
        this.setData({
          fieldList : this.data.fieldList
        })
      });
      // 获取子女列表
      ajax({
        url: service.childrenList
      }).then((res) => {
        this.data.fieldList[1].nameList = res.data.map(v => {return v = v.childrenName});
        this.data.fieldList[1].idList = res.data.map(v => {return v = v.childrenId});
        this.setData({
          fieldList : this.data.fieldList
        })
      });
    }
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
