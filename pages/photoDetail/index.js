import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  // 页面的初始数据
  data: {
    title: "我的相册",
    list: [
      {
        isImage : true,
        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177342306,179688399&fm=26&gp=0.jpg"
      },
      {
        isImage : true,
        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177342306,179688399&fm=26&gp=0.jpg"
      },
      {
        isImage : true,
        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177342306,179688399&fm=26&gp=0.jpg"
      },{
        isImage : true,
        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177342306,179688399&fm=26&gp=0.jpg"
      },{
        isImage : true,
        url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2177342306,179688399&fm=26&gp=0.jpg"
      }
    ]
  },
 
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    
  }
})
