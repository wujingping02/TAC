import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    orgList : null
  },

  onShow: function () {
    mockRequest({// 上来获取一下机构列表
      url: service.relativeList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        "orgList" : res.data
      });
    })
  }
})
