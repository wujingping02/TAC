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
    mockRequest({// 上来获取一下地址列表
      url: service.addressList.url,
      method: "post",
    }).then((res) => {
      this.store.data.addressList = res.data;// 把列表存一下
      this.update();
    })
  },

  // 跳到教室列表
  toClsRoomList: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/clsRoomList/index?index=" + index
    });
  },

  // 新建一个教室
  click: function () {
    wx.navigateTo({
      url: "/pages/addAddress/index"
    });
  }
})
