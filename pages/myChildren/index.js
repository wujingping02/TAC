import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "子女管理",
    classList : null,
    hidePopup: true,
    fieldList: [
      {
        "type" : "photo",
        "key" : "name",
        "isMust" : "1",
        "round" : "round",
        "uploadText" : "上传头像",
        "orgPhoto" : [
          {
            isImage : true,
            url : "http://img2.imgtn.bdimg.com/it/u=1873874002,1324989472&fm=26&gp=0.jpg"
          }
        ]
      },
      {
        "type" : "text",
        "lable" : "孩子姓名",
        "key" : "name",
        "isMust" : "1"
      }
    ]
  },

  onShow: function () {
    mockRequest({
      url: service.childrenList.url,
      method: "post",
    }).then((res) => {
      this.store.data.classList = res.data;// 把列表存一下
      this.update();
    })
  },

  // 跳到教室列表
  addItem: function (data) {
    this.setData({
      hidePopup : false
    }) 
  }
})
