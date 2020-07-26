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
        "lable" : "教师姓名",
        "key" : "userName",
        "value" : "1",
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
        "check" : "email",
        "isMust" : "1"
      },

      {
        "type" : "courseAttr",
        "lable" : "课程属性",
        "key" : "mainLabel",
        "value" : ["1", "2", "3"],
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "开始时间",
        "key" : "startTime",
        "value" : "10:00",
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "结束时间",
        "key" : "endTime",
        "value" : "11:00",
        "isMust" : "1"
      },{
        "type" : "calendar",
        "lable" : "上课日期",
        "key" : "lessonDate",
        "color" : "#FF8100",
        "multiple" : "single",
        "value" : "2020-01-01",
        "isMust" : "1"
      },{
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "studentId",
        "isMust" : "1",
        "value" : "1",
        "nameList" : ["a", "b"],
        "idList" : ["01", "02"]
      }
    ],
    disabled: false
  },

  onShow: function () {
      
  },

  onLoad: function () {
    ajax({
      url : service.getAllInfo
    }).then(res => {
      if(this.store.data.userInfo.userType === "10"){// 机构
        let disabled = res.data.instituteName ? true : false;
        this.setData({
          disabled: disabled,
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
              "value" : this.store.data.userInfo.mobileNo,
              "disabled" : true,
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
      }else{// 老师，助教
        let disabled = res.data.userName ? true : false;
        this.setData({
          disabled: disabled,
          fieldList : [// 字段list
            {
              "type" : "text",
              "lable" : "姓名",
              "key" : "userName",
              "isMust" : "1",
              "value" : res.data.userName,
              "disabled" : disabled
            },
            {
              "type" : "text",
              "lable" : "手机号",
              "key" : "phone",
              "disabled" : true,
              "value" : this.store.data.userInfo.mobileNo,
              "isMust" : "1"
            },
            {
              "type" : "text",
              "lable" : "邮箱",
              "key" : "email",
              "check" : "email",
              "disabled" : disabled,
              "value" : res.data.email,
              "isMust" : "1"
            }
          ]
        })
      }
    })
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    let url,data={};
    if(this.store.data.userInfo.userType === "10"){// 机构
      url = service.submitInfo;
      data.instituteName = vals.instituteName;
      data.companyPhone  = vals.companyPhone;
      data.email = vals.email;
      data.certNo = vals.certNo;
      data.userName = vals.userName;
    }else{
      if(this.store.data.userInfo.userType === "30"){// 老师
        url = service.teaSubmitInfo;    
      }else if(this.store.data.userInfo.userType === "20"){// 助教
        url = service.ZJmodifyBaseInfo;    
      }else{// 家长
        url = service.parModifyBaseInfo;
      }
      data.userName = vals.userName;
      data.email  = vals.email;
    }
    ajax({
      url : url,
      data : data
    }).then(data => {
      this.store.data.userInfo.userName = vals.userName;
      wx.navigateBack({delta: 1})
    })
  }
})
