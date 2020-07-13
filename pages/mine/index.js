import store from '../../store'
import create from '../../utils/create'
import { ajax, mockRequest, isLogin, uploadImg } from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    Avatar: null,
    userInfo: null
  },

  onLoad() {
    isLogin.call(this);
  },

  onReady() {
    
  },

  onShow: function () {
    if(this.data.Avatar != this.store.data.userInfo.avatar){// 头像更新过
      this.setData({
        Avatar : null
      });
      setTimeout(() => {
        this.setData({
          Avatar : this.store.data.userInfo.avatar
        });
      }, 100);
    }
  },

  // 编辑机构、老师介绍页
  editOrgdetail() {
    if(['10', '30'].includes()){// 机构和老师不能点
      return
    }
    let url = service.parChangeAvatar;// 家长
    if(this.store.data.userInfo.userType === "20"){
      url = service.ZJChangeAvatar;
    }
    uploadImg({
      url : url
    }).then(res => {
      this.setData({// 先把原来的图片清掉
        Avatar : null
      });
      setTimeout(() => {// 在加载新的图片
        this.setData({
          Avatar : getApp().globalData.imgUrl + res.imageId
        })
      }, 100);
    })
  },

  // 【所有人】查看基本信息
  toPersonInfo: function () {
    wx.navigateTo({
      url: "/pages/personInfo/index"
    });
  },

  // 【机构，老师】查看机构详情
  toOrgDetail: function () {
    wx.navigateTo({
      url: "/pages/orgDetail/index?edit=1"
    });
  },

  // 【机构】管理机构地址
  toEditAddress: function () {
    wx.navigateTo({
      url: "/pages/editAddress/index"
    });
  },

  // 【机构】查看教师信息
  toTeacherList: function () {
    wx.navigateTo({
      url: "/pages/teacherList/index?type=teacher"
    });
  },

  // 【机构】查看助教信息
  toAssistantList: function () {
    wx.navigateTo({
      url: "/pages/teacherList/index?type=assistant"
    });
  },

  // 【机构】管理课程列表
  toEditCourse: function () {
    wx.navigateTo({
      url: "/pages/editCourse/index"
    });
  },

  // 【老师，助教】机构列表
  toOrgList: function () {
    wx.navigateTo({
      url: "/pages/orgList/index"
    });
  },

  // 【老师，家长】换补课列表
  toChangeClsList: function () {
    wx.navigateTo({
      url: "/pages/changeClsList/index"
    });
  },

  // 【家长】我的相册
  toMyPhoto: function () {
    wx.navigateTo({
      url: "/pages/myPhoto/index"
    });
  },

  // 【家长】子女管理
  toMyChildren: function () {
    wx.navigateTo({
      url: "/pages/myChildren/index"
    });
  },

  // 【老师，助教，家长】班级列表
  toClassList: function () {
    wx.navigateTo({
      url: "/pages/editClass/index?fromMine=1"
    });
  },

  // 家长扫码定课
  saomadingke() {
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        wx.navigateTo({ url : "/pages/ewmdk/index?data=" + res.result})
      }
    })
  },

  getUserInfoFun: function (res) {
   
  }
})
