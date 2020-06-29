import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "扫码定课",
    fieldList :  [// 字段list
      {
        "type" : "text",
        "lable" : "班级名称",
        "key" : "name",
        "disabled" : true,
        "value" : "阳光小班",
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "课程名称",
        "key" : "name",
        "value" : "英语系统课",
        "disabled" : true,
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "教育机构",
        "key" : "phone",
        "value" : "上海英语ABC教育培训基地",
        "disabled" : true,
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "maxNumber",
        "isMust" : "1",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6']
      }
    ]
  },

  onShow: function () {
      
  },

  onLoad: function (data) {
    console.log(data)
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    
  }
})
