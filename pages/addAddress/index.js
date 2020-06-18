import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "编辑地址",
    fieldList : [// 字段list
      {
        "type" : "region",
        "lable" : "所在地区",
        "key" : "orgName",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "详细地址",
        "key" : "name",
        "isMust" : "1"
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    if(options.index){
      let data = this.store.data.addressList[options.index];
      this.data.fieldList[0].value = data.provice + ',' + data.city + ',' + data.area;
      this.data.fieldList[1].value = data.address;
    }
  },

  click: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    wx.navigateBack({delta: 1})
  }
})
