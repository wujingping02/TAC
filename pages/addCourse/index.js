import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "编辑地址",
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "课程名称",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "photo",
        "lable" : "课程介绍主图",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "最小适合年龄",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "最大适合年龄",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "上课地址",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "courseAttr",
        "lable" : "课程属性",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "courseAttr",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "备注",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "价格",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "课程介绍",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "photo",
        "lable" : "课程介绍",
        "key" : "name",
        "isMust" : "1",
        "orgPhoto" : [
          
        ]
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
    ;
    // wx.navigateBack({delta: 1})
  }
})
