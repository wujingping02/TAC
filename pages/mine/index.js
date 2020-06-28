import store from '../../store'
import create from '../../utils/create'
import { ajax, mockRequest, getUserInfo, checkLogin } from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    Avatar: "",
    userInfo: null
  },

  onLoad() {
    checkLogin.call(this);
  },

  onReady() {
    
  },

  onShow: function () {
    
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
      url: "/pages/orgDetail/index"
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

  getUserInfoFun: function (res) {
   
  }
})
