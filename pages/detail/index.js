import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest,getTime} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    show: false,
    classList: null,
    title: "行事历",
    fieldList : [// 字段list
      {
        "type" : "calendar",
        "lable" : "日期",
        "key" : "orgName",
        "isMust" : "1"
      }
    ],
    top: "800rpx",
    activeL: "active",
    activeR: "",
    nowDate: getTime(new Date()),
    minDate: getTime(new Date()).split("-")[1]  > 3 ? getTime(new Date()).split("-")[0] + "-" + (getTime(new Date()).split("-")[1] * 1 - 3) + "-01" : (getTime(new Date()).split("-")[0] - 1) + "-" + (getTime(new Date()).split("-")[1] * 1 - 3) + "-01",
    maxDate: getTime(new Date()).split("-")[1]  < 9 ? getTime(new Date()).split("-")[0] + "-" + (getTime(new Date()).split("-")[1] * 1 + 3) + "-30" : (getTime(new Date()).split("-")[0] + 1) + "-" + (getTime(new Date()).split("-")[1] * 1 - 9) + "-30",
    userInfo: null,
    hidePopup: true,
    fieldList: [
      {
        "type" : "text",
        "lable" : "课程名称",
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
        "type" : "time",
        "lable" : "最小适合年龄",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
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
      }
    ]
  },
 
  getClassList() {// 获取一下地址列表
    mockRequest({
      url: service.classList.url,
      method: "post",
    }).then((res) => {
      this.setData({
        classList : res.data
      })
    })
  },

  // 用户选择日期
  getDate: function (data){
    let date = getTime(new Date(data.detail));
    this.getClassList();
  },

  // 点击收起和展开日历
  keepCalendar: function (){
    if(this.data.top === "800rpx"){
      this.setData({
        top : '218rpx'
      })
    }else{
      this.setData({
        top : "800rpx"
      })
    }
  },
  
  // 切换到教室维度
  changeActiveL: function (){
    this.setData({
      activeL: "active",
      activeR: ""
    });
    // this.selectComponent('#myCalendarClassList').reFreshColor("activeL");
    this.getClassList()
  },

  // 切换到老师维度
  changeActiveR: function (){
    this.setData({
      activeL: "",
      activeR: "active"
    });
    // this.selectComponent('#myCalendarClassList').reFreshColor("activeR");
    this.getClassList()
  },

  // 跳转到班级详情页面
  toClassDetail(data) {
    wx.navigateTo({
      url: "/pages/courseDetail/index?calssId=" + data.detail
    });
  },

  // 添加自定义课程
  addCustomize() {
    this.setData({
      hidePopup : false
    })
  }

})
