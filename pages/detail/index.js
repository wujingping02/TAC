import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, getTime, getWXCode, isLogin, collectVals } from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    show: false,
    classList: null,
    title: "行事历",
    top: "800rpx",
    activeL: "active",
    activeR: "",
    date: getTime(new Date()),
    userInfo: null,
    hidePopup: true,
    fieldList: [
      {
        "type" : "text",
        "lable" : "课程名称",
        "key" : "courseName",
        "isMust" : "1"
      },{
        "type" : "courseAttr",
        "lable" : "课程属性",
        "key" : "mainLabel",
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "开始时间",
        "key" : "startTime",
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "结束时间",
        "key" : "endTime",
        "isMust" : "1"
      },{
        "type" : "calendar",
        "lable" : "上课日期",
        "key" : "lessonDate",
        "color" : "#FF8100",
        "multiple" : "single",
        "isMust" : "1"
      },{
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "studentId",
        "isMust" : "1",
        "nameList" : null,
        "idList" : null
      }
    ]
  },

  // 上来登录一下
  onLoad() {
    isLogin.call(this, this.getClassList);
  },

  // 每次查一下课时列表
  onShow() {
    this.getClassList();
  },
 
  // 给课表元素赋值
  setClassVal(v) {
    return {
      leftName : v.classroomName || v.className || v.classroom_name || v.courseName,
      nowPeo : v.nowPeo || "0",
      maxPeo : v.totalSize,
      time : v.lessonDate.split("-")[1] + "-" + v.lessonDate.split("-")[2] +  " " + v.startTime + "~" + v.endTime,
      lessonName : v.className,
      teacher : v.teacherName,
      address : (v.classCity || "") + (v.classArea || "") + (v.classAddress || ""),
      url : v.teacherHeadImageId ? getApp().globalData.imgUrl + v.teacherHeadImageId : getApp().globalData.imgUrl + v.childrenHeadImageId,
      teacherName : v.teacherName || "",
      remark : v.remark || "",
      courseId : v.courseId,
      classId : v.classId,
      lessonId : v.lessonId,
      checkinStatus : v.checkinStatus
    };
  },

  // 获取自定义课程
  getCustomizeClass() {
    return new Promise((s, f) => {
      ajax({
        url: service.getCustomList,
        data : {
          lessonDate : this.data.date
        }
      }).then(res => {
        s(res);
      })
    })
  },

  // 获取一下班级列表
  getClassList() {
    let url;
    if(this.store.data.userInfo.userType === "10"){// 机构
      url = service.getCalendarLessonList;
    }else if(this.store.data.userInfo.userType === "40"){// 家长
      url = service.getEnrollLessonList;
    }else if(this.store.data.userInfo.userType === "30"){// 没拿到不查
      url = service.teaGetLessonList;
    }else{// 没拿到不查
      return
    };
    ajax({
      url: url,
      data : {
        lessonDate : this.data.date,
        dimensionType : this.data.activeL === 'active' ? '1' : '2'
      }
    }).then((res) => {
      let newList = [];
      if(res.data && res.data.length > 0){
        res.data.forEach(v => {// 最外层的list，其实没有意义，永远只有一项
          if(this.store.data.userInfo.userType === "10"){// 机构结构不一样
            for(let key in v){// 每一个课时
              v[key].forEach(v => {// 课时详情
                let data = this.setClassVal(v);
                if(this.data.activeR === 'active'){// 右边的（仅机构才有）
                  data.leftName = v.teacherName;
                  data.teacherName = v.classroomName;
                }
                newList.push(data);
              })
            }  
          }else{// 其他角色
            let data = this.setClassVal(v);
            newList.push(data);
          }
        });
        if(this.store.data.userInfo.userType === '40'){// 家长需要合并一下自定义列表的数据
          this.getCustomizeClass().then(res => {
            res.data.forEach(v => {
              newList.push({
                ...this.setClassVal(v),
                lessonName : v.courseName,
                type : "zdy"
              });
            });
            this.setData({
              classList : newList
            });
          })
        }else{
          this.setData({
            classList : newList
          });
        }
      }else{
        if(this.store.data.userInfo.userType === '40'){// 家长需要合并一下自定义列表的数据
          this.getCustomizeClass().then(res => {
            if(res.data && res.data.length > 0){
              res.data.forEach(v => {
                newList.push({
                  ...this.setClassVal(v),
                  lessonName : v.courseName,
                  type : "zdy"
                });
              });
              this.setData({
                classList : newList
              });
            }else{
              this.setData({
                classList: null
              })
              wx.showToast({title : "当天暂无课程安排",icon : "none"})
            }
          })
        }
      }
    })
  },

  // 用户选择日期
  getDate: function (data){
    let date = getTime(new Date(data.detail));
    this.setData({
      date : date
    });
    this.getClassList();
  },

  // 点击收起和展开日历
  keepCalendar: function (){
    if(this.data.top === "800rpx"){
      this.setData({
        top : '218rpx'
      })
    }else{
      this.setData({
        top : "800rpx"
      })
    }
  },
  
  // 切换到教室维度
  changeActiveL: function (){
    this.setData({
      activeL: "active",
      activeR: ""
    });
    // this.selectComponent('#myCalendarClassList').reFreshColor("activeL");
    this.getClassList()
  },

  // 切换到老师维度
  changeActiveR: function (){
    this.setData({
      activeL: "",
      activeR: "active"
    });
    // this.selectComponent('#myCalendarClassList').reFreshColor("activeR");
    this.getClassList()
  },

  // 跳转到班级详情页面
  toClassDetail(data) {
    wx.navigateTo({
      url: "/pages/courseDetail/index?data=" + data.detail
    });
  },

  // 添加自定义课程
  addCustomize() {
    this.setData({
      hidePopup : false
    });
    this.selectComponent("#page").selectComponent("#courseName").setValue("");
    this.selectComponent("#page").selectComponent("#mainLabel").setValue([null, null, null]);
    this.selectComponent("#page").selectComponent("#startTime").setValue("");
    this.selectComponent("#page").selectComponent("#endTime").setValue("");
    this.selectComponent("#page").selectComponent("#lessonDate").setValue("");
    this.selectComponent("#page").selectComponent("#studentId").setValue("");
    // 获取子女列表
    ajax({
      url: service.childrenList
    }).then((res) => {
      this.data.fieldList[5].nameList = res.data.map(v => {return v = v.childrenName});
      this.data.fieldList[5].idList = res.data.map(v => {return v = v.childrenId});
      this.setData({
        fieldList : this.data.fieldList
      })
    });
  },

  // 确认添加课程
  sureAdd() {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    let data = {
      courseName : vals.courseName,
      mainLabel : vals.mainLabel[0],
      subLabel1 : vals.mainLabel[1],
      subLabel2 : vals.mainLabel[2],
      startTime : vals.startTime,
      endTime : vals.endTime,
      lessonDate : vals.lessonDate,
      studentId : vals.studentId
    }
    ajax({
      url : service.addCustomCourse,
      data : data
    }).then(r => {
      wx.showToast({
        title : "添加成功",
        icon : "none"
      });
      this.getClassList();
      this.setData({
        hidePopup : true
      });
    })
  },

  // 获取图片列表
  getMyPhoto(detail) {
    let classId = detail.detail;
    ajax({
      url: service.photoList
    }).then((res) => {
      if(res.data && res.data.length > 0){
        this.store.data.parentPhotos = res.data[classId].map(v => {return v.imageId});
        wx.navigateTo({
          url: "/pages/photoDetail/index"
        });
      }else{
        this.store.data.parentPhotos = [];
        wx.navigateTo({
          url: "/pages/photoDetail/index"
        });
      }
    })
  }
  
})
