import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    courseList: null,
  },

  onReady: function () {
    mockRequest({// 上来获取一下课程列表
      url: service.courseList2.url,
      method: "post",
    }).then((res) => {
      this.store.data.courseList = res.data;// 把列表存一下
      this.update();
    })
  },

 // 用户点击课程列表
 toCourseDetail: function (data) {
  let index = data.detail;
  wx.navigateTo({
    url: "/pages/classList/index?index=" + index
  });
},
})
