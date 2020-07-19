import {ajax, collectVals} from '../../utils/util'
import service from '../../utils/service'

Page({
  data: {
    title: "教师管理",
    fieldList : [// 字段list
      {
        "type" : "search",
        "lable" : "请输入老师手机号",
        "key" : "orgName",
        "isMust" : "1"
      }
    ],
    classList : [],
    hidePopup : true,
    type : "teacher",
    prompt : "",
    teacherId : "",// 找到老师信息了
    lable : "老师"
  },

  onLoad: function (options) {
    if(options.type === "assistant"){// 上来获取一下助教列表
      this.setData({
        title: "助教管理",
        type : "assistant",
        lable : "助教",
        fieldList : [{
          "type" : "search",
          "lable" : "请输入助教手机号",
          "key" : "orgName",
          "isMust" : "1"
        }]
      })
      ajax({
        url: service.getAssistantList
      }).then((res) => {
        this.setData({
          classList : res.data.map(v => {
            return v = {
              ...v,
              url : getApp().globalData.imgUrl + v.teacherHeadImageId
            }
          })
        })
      })
    }else{// 上来获取一下教师列表
      ajax({
        url: service.teacherList
      }).then((res) => {
        this.setData({
          classList : res.data.map(v => {
            return v = {
              ...v,
              url : getApp().globalData.imgUrl + v.teacherHeadImageId
            }
          })
        })
      })
    }
  },

  onShow: function () {
    
  },

  addItem: function () {// 弹出添加框
    this.setData({
      hidePopup : false,
      prompt : "",
      fieldList : [
        {
          "type" : "search",
          "lable" : "请输入" + this.data.lable + "手机号",
          "key" : "orgName",
          "isMust" : "1",
          "value" : "",
          "check" : "phone"
        }
      ]
    })
  },
  
  sureAdd: function () {// 添加该老师or助教
    if(!this.data.teacherId){
      wx.showToast({
        title: "暂无该" + this.data.lable + "信息，请先搜索" + this.data.lable + "信息",
        icon: 'none'
      });
      return
    }
    let url = service.addTeacher;
    let data = {teacherId : this.data.teacherId};
    if(this.data.type === 'assistant'){// 助教
      url = service.addAssistant;
      data = {assistantId : this.data.teacherId}
    };
    ajax({
      url: url,
      data: data,
    }).then((res) => {
      this.setData({
        hidePopup : true
      })
    })
  },

  del: function (data) {
    if(this.data.type === "assistant"){// 删除助教
      ajax({
        url : service.deleteAssistant,
        data : {
          teacherId : data.detail
        }
      }).then(res => {

      })
    }else{// 删除老师
      ajax({
        url : service.delTeacher,
        data : {
          teacherId : data.detail
        }
      }).then(res => {
        
      })
    }
  },

  onSearch: function (val) {// 搜索一下老师or助教
    if(!/^1[0-9]{10}$/.test(val.detail)){
      wx.showToast({
        title: "请输入正确的手机号",
        icon: 'none'
      });
      return
    }
    let url = service.userQuery;
    if(this.data.type === 'assistant'){
      url = service.queryAssistant;
    }
    ajax({
      url: url,
      data: {
        mobileNo : val.detail
      },
    }).then((res) => {
      let name = (res.data && res.data.name) || "该";
      if(res.data && res.data.teacherId){
        this.setData({
          prompt : "已找到" + name + this.data.lable + "，请点击按钮提示" + this.data.lable + "验证",
          teacherId : res.data.teacherId
        })
      }else{
        this.setData({
          prompt : "暂无该" + this.data.lable + "信息",
          teacherId : ""
        })
      }
    })
  }
})
