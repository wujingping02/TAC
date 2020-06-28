import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    classList: null,
    title: "课程管理",
    fromMine: true,
    list: [1,2,3,4,5],
    idList: [1,2,3,4,5],
    index: -1
  },

  onLoad(data) {
    if(data.fromMine === "1"){// 从个人中心来的
      this.setData({
        fromMine: true
      })
    }
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

  // 跳到班级列表
  toClsRoomList: function (data) {
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/editClass/index?index=" + index
    });
  },

  // 新建一个课程
  click: function () {
    wx.navigateTo({
      url: "/pages/addClass/index"
    });
  },

  bindchange : function(e){// 每次焦点离开，拿一下值
    this.setData({
      index : e.detail.value,
      value : this.properties.idList[e.detail.value]
    })
  },
  
  check : function(){
    if(this.properties.isMust && !this.properties.value){
      wx.showToast({
        title: "请输入" + this.properties.lable,
        icon: 'none'
      })
      return false
    }
  },

  clickSel : function(){
    this.setData({
      show : true
    })
  }
})
