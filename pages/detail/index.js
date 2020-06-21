import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest,getTime} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    show: false,
    classList: [],
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
    maxDate: getTime(new Date()).split("-")[1]  < 9 ? getTime(new Date()).split("-")[0] + "-" + (getTime(new Date()).split("-")[1] * 1 + 3) + "-30" : (getTime(new Date()).split("-")[0] + 1) + "-" + (getTime(new Date()).split("-")[1] * 1 - 9) + "-30"
  },
 
  onReady() {
    
  },

  // 用户选择日期
  getDate: function (data){
    let date = getTime(new Date(data.detail));
    console.log(getTime(new Date()))
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
    })
  },

  // 切换到老师维度
  changeActiveR: function (){
    this.setData({
      activeL: "",
      activeR: "active"
    })
  }
})
