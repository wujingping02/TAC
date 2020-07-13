import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "拍照",
    list: null,
    className: null,
    time: null,
    lessonId: null
  },

  onLoad(options) {
    let data = JSON.parse(decodeURIComponent(options.data));
    this.setData({
      className: data.className,
      time: data.time,
      lessonId: data.lessonId
    });
    // 获取一下点名信息
    ajax({
      url : service.queryLessonImages,
      data : {
        lessonId : this.data.lessonId
      }
    }).then(res => {
      this.setData({
        list : res.data.map(v => {
          return v = {
            isImage : true,
            url : getApp().globalData.imgUrl + v
          }
        })
      })
    })
  },

  // 保存图片
  click() {
    ajax({
      url : service.saveLessonImages,
      data : {
        lessonId : this.data.lessonId,
        imageArrStr : JSON.stringify(this.selectComponent('#photo').getValue())
      }
    }).then(res => {
      wx.navigateBack({delta: 1});
    });
  }
})
