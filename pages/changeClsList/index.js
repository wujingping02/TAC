import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    list : null,
    title: "待换补课程",
    userInfo: null
  },

  onShow: function () {
    mockRequest({// 上来获取一下换补课列表
      url: service.changeList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        list : res.data
      });
    })
  }
})
