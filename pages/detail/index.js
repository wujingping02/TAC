import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    show: false,
    classList: [],
    fieldList : [// 字段list
      {
        "type" : "calendar",
        "lable" : "日期",
        "key" : "orgName",
        "isMust" : "1"
      }
    ]
  },
 
  onShow: function () {
    mockRequest({// 上来获取一下课程列表
      url: service.classList.url,
      method: "post",
    }).then((res) => {
      this.store.data.classList = res.data;// 把列表存一下
      this.update();
    })
  },

  onClose: function (){
    
  },

  onConfirm: function (data){
    this.setData({
      show: false
    })
  },

  showCalendar: function (){
    // this.setData({
    //   show: true
    // })
  }
})
