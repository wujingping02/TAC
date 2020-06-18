import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    lessonList : null
  },

  onShow: function () {
    mockRequest({// 上来获取一下地址列表
      url: service.lessonList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        lessonList : res.data// 把列表存一下
      })
    })
  }
})
