import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    orgImg : "",
    orgName : "",
    orgDetail : "",
    orgPhoto : [],
    orgAddress : [],
    userInfo : null
  },

  onShow: function () {
    mockRequest({// 上来查询一下机构信息
      url: service.introductionGetDetail.url,
      method: "post",
    }).then((res) => {
      this.setData({
        orgImg : res.data.image,
        orgName : res.data.name,
        orgDetail : res.data.detail,
        orgPhoto : res.data.phone.map((v) => {
          return v = {
            isImage : true,
            url : v
          }
        }),
        orgAddress : res.data.address
      });
    })
  },

  back: function () {
    wx.navigateBack({delta: 1})
  }
})
