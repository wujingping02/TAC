import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "点名",
    list: [
      {
        url: "http://hbimg.b0.upaiyun.com/46df2a638c7477390a4bc5b2b3a9bb9ec5ce3ec73fd9b-hAtVRZ_fw658",
        time: "奥术大师多",
        lessonName: "奥术大师",
        name: "阿萨德",
        signInSta: true,
        changeClassSta: false
      },{
        url: "http://hbimg.b0.upaiyun.com/46df2a638c7477390a4bc5b2b3a9bb9ec5ce3ec73fd9b-hAtVRZ_fw658",
        time: "奥术大师多",
        lessonName: "奥术大师",
        name: "阿萨德",
        signInSta: true,
        changeClassSta: false
      },
    ],
    className: "英语1",
    time: "10:00~11:00",
  },

  onShow: function () {
    
  },

  // 签到
  signIn() {

  },

  // 换补课
  changeClass() {
    
  }
})
