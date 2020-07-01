import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "基本信息",
    fieldList : null,
    disabled: false
  },

  onShow: function () {
      
  },

  onLoad: function () {
    ajax({
      url : service.getAllInfo.url
    }).then(res => {
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
        let disabled = res.data.instituteName ? true : false;
        this.setData({
          disabled: res.data.instituteName ? true : false,
          fieldList : [// 字段list
            {
              "type" : "text",
              "lable" : "机构名称",
              "key" : "instituteName",
              "value" : res.data.instituteName,
              "disabled" : disabled,
              "isMust" : "1"
            },
            {
              "type" : "text",
              "lable" : "联系人姓名",
              "value" : res.data.userName,
              "disabled" : disabled,
              "key" : "userName",
              "isMust" : "1"
            },
            {
              "type" : "text",
              "lable" : "手机号",
              "key" : "companyPhone",
              "value" : res.data.companyPhone,
              "disabled" : disabled,
              "isMust" : "1"
            },
            {
              "type" : "text",
              "lable" : "邮箱",
              "value" : res.data.email,
              "disabled" : disabled,
              "key" : "email",
              "isMust" : "1"
            },
            {
              "type" : "text",
              "lable" : "身份证号",
              "value" : res.data.certNo,
              "disabled" : disabled,
              "key" : "certNo",
              "isMust" : "1"
            },
          ]
        })
      };
    })
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    ajax({
      url : service.submitInfo.url,
      data : {
        instituteName : vals.instituteName,
        companyPhone  : vals.companyPhone,
        email : vals.email,
        certNo : vals.certNo,
        userName : vals.userName
      }
    }).then(data => {

    })
  }
})
