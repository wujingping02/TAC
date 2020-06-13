import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "文本2",
        "key" : "name",
        "value" : "666",
        "isMust" : "1"
      },
      {
        "type" : "region",
        "lable" : "文本2",
        "value" : "10:10",
        "key" : "name2",
        "idList" : ["01","02","03"],
        "nameList" : ["张三","李四","王五"],
      }
    ]
  },

  onReady: function () {
      
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    console.log(vals)
  }
})
