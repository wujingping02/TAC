import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "点名",
    list: [],
    className: "英语1",
    time: "10:00~11:00",
  },

  getRelativeList() {// 获取机构列表
    let url = service.ZJGetInstituteList;
    if(this.store.data.userInfo.userType === "30"){
      url = service.relativeList;
    }
    console.log(this.store.data.userInfo.userType, url)
    ajax({
      url : url
    }).then(res => {
      this.setData({
        list : res.data.map(v => {
          return v = {
            url: getApp().globalData.imgUrl + v.headImageId,
            instituteId: v.instituteId,
            name: v.instituteName
          }
        })
      });
    })
  },

  onShow: function () {// 获取一下机构列表
    this.getRelativeList.call(this);
  },

  // 确认加入
  signIn(e) {
    let index = e.currentTarget.dataset.index;
    let url = service.ZJVerifyInstitute;
    if(this.store.data.userInfo.userType === "30"){
      url = service.verifyInstitute;
    }
    ajax({
      url : url,
      data : {
        instituteId : this.data.list[index].instituteId
      }
    }).then(res => {
      wx.showToast({
        title : "加入成功",
        icon : "none"
      })
    })
  },

  // 退出机构
  changeClass(e) {
    let index = e.currentTarget.dataset.index;
    ajax({
      url : service.quitInstitute,
      data : {
        instituteId : this.data.list[index].instituteId
      }
    }).then(res => {
      this.getRelativeList.call(this);
    })
  }
})
