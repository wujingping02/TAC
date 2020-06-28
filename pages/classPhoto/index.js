import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "拍照",
    className: "英语1",
    time: "10:00~11:00",
    orgPhoto: [
      {
        isImage : true,
        url : "http://hbimg.b0.upaiyun.com/46df2a638c7477390a4bc5b2b3a9bb9ec5ce3ec73fd9b-hAtVRZ_fw658"
      },{
        isImage : true,
        url : "http://img3.imgtn.bdimg.com/it/u=1776338472,1585271055&fm=26&gp=0.jpg"
      }
    ]
  },

  onShow: function () {
    
  },
})
