import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    classList: null,
    title: "班级管理",
    fromMine: false,
    list: null,
    idList: null,
    index: -1,
    courseId: "",
    prompt1: "暂无课程",
    prompt2: "请点击底部按钮添加课程信息",
    disabled: false
  },

  onLoad(options) {
    if(options.fromMine === "1"){// 从个人中心来的
      this.setData({
        fromMine: true,
        title: "班级列表",
        prompt1: "暂无班级信息",
        prompt2: null
      })
    }
    if(options.courseId){// 从课程列表过来的
      this.setData({
        courseId : options.courseId
      })
    }
  },

  onShow: function () {
    if(this.store.data.userInfo.userType === "10"){// 机构
      ajax({// 上来获取一下班级列表
        url: service.getClassList,
        data: {
          courseId : this.data && this.data.courseId
        },
      }).then((res) => {
        this.setData({
          classList : res.data
        })
      })
    }else{
      let url = service.ZJGetCourseList;
      if(this.store.data.userInfo.userType === "30"){
        url = service.teaGetCourseList;
      }
      ajax({// 上来获取一下可选课程列表
        url: url
      }).then((res) => {
        if(res.data && res.data.length > 0){
          this.data.list = res.data.map(v => {return v = v.courseName});
          this.data.idList = res.data.map(v => {return v = v.courseId});
          this.setData({
            list : this.data.list,
            idList : this.data.idList,
            disabled : false 
          })
        }else{
          this.setData({
            disabled : true 
          })
        }
      })
    }
    
  },

  // 跳到班级列表
  toClsRoomList: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/editClass/index?index=" + index
    });
  },

  // 新建一个课程
  click: function () {
    wx.navigateTo({
      url: "/pages/addClass/index?courseId=" + this.data.courseId
    });
  },

  bindchange : function(e){// 获取班级列表
    this.setData({
      index : e.detail.value,
      value : this.properties.idList[e.detail.value]
    });
    let url = service.ZJGetClassList;
    if(this.store.data.userInfo.userType === "30"){
      url = service.teaGetClassList;
    };
    ajax({
      url : url,
      data : {
        courseId : this.properties.idList[e.detail.value]
      }
    }).then(res => {
      this.setData({
        classList : res.data
      })
    })
  },
  
  check : function(){
    if(this.properties.isMust && !this.properties.value){
      wx.showToast({
        title: "请输入" + this.properties.lable,
        icon: 'none'
      })
      return false
    }
  },

  clickSel : function(){
    this.setData({
      show : true
    })
  },

  // 开班
  startClass() {
    ajax({// 上来获取一下班级列表
      url: service.getClassList,
      data: {
        courseId : this.data && this.data.courseId
      },
    }).then((res) => {
      this.setData({
        classList : res.data
      })
    })
  }
})
