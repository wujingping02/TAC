import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "点名",
    list: null,
    className: null,
    time: null,
    lessonId: null
  },

  // 获取点名表
  getStuList() {
    ajax({
      url : service.getEnrollList,
      data : {
        lessonId : this.data.lessonId
      }
    }).then(res => {
      if(res.data && res.data.length > 0){
        this.setData({
          list : res.data.map(v => {
            return v = {
              ...v,
              url : getApp().globalData.imgUrl + v.studentHeadImageId
            }
          })
        })
      }else{
        wx.showToast({
          title : "该班级暂无点名信息",
          icon : "none"
        })
      }
    })
  },

  onLoad(options) {
    let data = JSON.parse(decodeURIComponent(options.data));
    this.setData({
      className: data.className,
      time: data.time,
      lessonId: data.lessonId
    });
    // 获取一下点名信息
    this.getStuList();
  },

  // 保存下备注
  bindTextAreaBlur(data) {
    let index = data.currentTarget.dataset.index;
    ajax({
      url : service.remarkLesson,
      data : {
        lessonEnrollId : this.data.list[index].lessonEnrollId,
        remark : data.detail.value
      }
    })
  },

  // 签到
  signIn(data) {
    let index = data.currentTarget.dataset.index;
    ajax({
      url : service.signInLesson,
      data : {
        lessonEnrollId : this.data.list[index].lessonEnrollId
      }
    }).then(res => {
      this.getStuList();
    })
  },

  // 换补课
  changeClass(data) {
    let index = data.currentTarget.dataset.index;
    ajax({
      url : service.makeUpLesson,
      data : {
        lessonEnrollId : this.data.list[index].lessonEnrollId
      }
    })
  }
})
