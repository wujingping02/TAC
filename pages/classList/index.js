import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    classList : null
  },

  onShow: function () {
    mockRequest({// 上来获取一下地址列表
      url: service.classList.url,
      method: "post",
    }).then((res) => {
      this.store.data.classList = res.data;// 把列表存一下
      this.update();
    })
  },

  // 跳到课节列表
  toLessonList: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/lessonList/index?index=" + index
    });
  },
})
