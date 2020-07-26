import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    list : null,
    title: "待换补课程",
    userInfo: null
  },

  getLIst(url){
    ajax({// 上来获取一下换补课列表
      url: url
    }).then((res) => {
        let list = res.data.map(v => {
          return v = {
            ...v,
            url : v.studentHeadImageId ? getApp().globalData.imgUrl + v.studentHeadImageId : getApp().globalData.imgUrl + v.childrenHeadImageId,
            time : v.lessonDate + " " + v.startTime + "~" + v.endTime
          }
        });
        if(this.store.data.userInfo.userType === "40"){// 家长
          list = list.filter(v => {
            return v.changeStatus === '10'
          })
        };
        this.setData({
          list : list
        });
    })
  },
 
  onShow: function () {
    let url = service.changeList;
    if(this.store.data.userInfo.userType === "40"){// 家长
      url = service.parChangeList;
    }
    this.getLIst(url);
  },

  // 换补课
  changClass(data) {
    let index = data.currentTarget.dataset.index;
    ajax({
      url : service.sureUpLesson,
      data : {
        lessonRecordId : this.data.list[index].lessonRecordId
      }
    }).then(res => {
      this.getLIst(service.changeList);
      wx.showToast({
        title : "换补课成功",
        icon : "none"
      })
    })
  }
})
