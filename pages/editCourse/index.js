import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    courseList: null,
    title: "课程管理"
  },

  // 获取一下课程列表
  getCourseList() {
    ajax({// 上来获取一下课程列表
      url: service.orgCourseList
    }).then((res) => {
      this.setData({
        courseList : res.data
      });
    })
  },

  onShow: function () {
    this.getCourseList();
  },

  // 跳到班级列表
  toEditClass: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/editClass/index?courseId=" + this.data.courseList[index].courseId
    });
  },

  // 新建一个课程
  click: function () {
    wx.navigateTo({
      url: "/pages/addCourse/index"
    });
  }
})
