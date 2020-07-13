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
      if(res.data && res.data.length > 0){
        this.setData({
          list : res.data.map(v => {
            return v = {
              ...v,
              url : v.studentHeadImageId ? getApp().globalData.imgUrl + v.studentHeadImageId : getApp().globalData.imgUrl + v.childrenHeadImageId,
              time : v.lessonDate + " " + v.startTime + "~" + v.endTime
            }
          })
        });
      }else{
        wx .showToast({
          title : "暂无换补课信息",
          icon : "none"
        })
      }
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
    })
  }
})
