import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "基本信息",
    fieldList : null
  },

  onShow: function () {
      
  },

  onLoad: function () {
    if(this.store.data.userInfo.userType === "20"){
      this.setData({
        fieldList : [// 字段list
          {
            "type" : "text",
            "lable" : "教师姓名",
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
          }
        ]
      })
    }else if(this.store.data.userInfo.userType === "30"){
      this.setData({
        fieldList : [// 字段list
          {
            "type" : "text",
            "lable" : "教师姓名",
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
          }
        ]
      })
    }else if(this.store.data.userInfo.userType === "40"){
      this.setData({
        fieldList : [// 字段list
          {
            "type" : "text",
            "lable" : "教师姓名",
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
          }
        ]
      })
    }else{
      this.setData({
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
      })
    }
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    
  }
})
