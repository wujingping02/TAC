import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "地址管理",
    addressList : null
  },

  onShow: function () {
    ajax({// 上来获取一下地址列表
      url: service.addressList
    }).then((res) => {
      this.store.data.addressList = res.data;// 把列表存一下
      this.store.update();
    })
  },

  // 新增一个校区
  click: function () {
    wx.navigateTo({
      url: "/pages/addAddress/index"
    });
  }
})
