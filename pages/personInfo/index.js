import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "基本信息",
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "机构名称",
        "key" : "orgName",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "联系人姓名",
        "key" : "name",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "手机号",
        "key" : "phone",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "邮箱",
        "key" : "email",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "身份证号",
        "key" : "identity",
        "isMust" : "1"
      },
    ]
  },

  onShow: function () {
      
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    
  }
})
