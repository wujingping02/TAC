import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    courseList: null,
    title: "课程管理"
  },

  onShow: function () {
    ajax({// 上来获取一下课程列表
      url: service.orgCourseList.url
    }).then((res) => {
      this.store.data.courseList = res.data;// 把列表存一下
      this.update();
    })
  },

  // 跳到班级列表
  toEditClass: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/editClass/index?index=" + index
    });
  },

  // 新建一个课程
  click: function () {
    wx.navigateTo({
      url: "/pages/addCourse/index"
    });
  }
})
