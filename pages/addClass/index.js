import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "课时管理",
    calssName : "",
    maxNumber : "",
    fieldList : [
      {
        "type" : "text",
        "lable" : "班级名称",
        "key" : "calssName",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "最大人数",
        "key" : "maxNumber",
        "isMust" : "1"
      }
    ],
    fieldList2 : [// 字段list
      {
        "type" : "time",
        "lable" : "开始时间",
        "key" : "name",
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "结束时间",
        "key" : "name2",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "选择教师",
        "key" : "name3",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "选择教室",
        "key" : "name4",
        "isMust" : "1"
      },{
        "type" : "calendar",
        "lable" : "开班日期",
        "key" : "name5",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "备注",
        "key" : "name6",
        "isMust" : "1"
      }
    ],
    hidePopup: true,
    lessonList: []
  },

  onShow: function () {
    mockRequest({// 上来获取一下地址列表
      url: service.lessonList.url,
      method: "post",
    }).then((res) => {
      this.store.data.lessonList = res.data;// 把列表存一下
      this.update();
    })
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    this.setData({
      calssName : vals.calssName,
      maxNumber : vals.maxNumber,
      hidePopup : false
    })
  },

  sureAdd: function () {
    let vals = collectVals.call(this, this.data.fieldList2, "page2");
    if(vals === false){
      return
    };
  }
})
