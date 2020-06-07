import store from '../../store'
import create from '../../utils/create'
import {ajax,mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    show: false,
    classList: []
  },

  onShow: function (){
    this.setData({ show: true });
  },
  
  onReady: function () {
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
