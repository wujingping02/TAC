import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, uploadImg} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    orgImg : "",
    orgName : "",
    orgDetail : "佳士科技地方和辣的会发生撒打飞机哈克斯大家好大，驾驶的房间里，阿萨德路附近爱上对方就爱上了对方就卡了，阿萨德来访记录卡打飞机。爱上的看法将拉低房价金坷垃就，坎坎坷坷。",
    orgPhoto : ["516b4464c9bf456da944dce56f193c9e", "7f86805147bc455590726fef6f1f490d"],
    orgAddress : [],
    userInfo : null,
    edit : false
  },

  onLoad(options) {
    if(options.edit){// 编辑页面
      this.setData({
        edit : true
      })
    }
  },

  onShow: function () {
    // 查询下机构下的地址
    ajax({
      url : service.addressList.url
    }).then(res => {
      this.setData({
        orgAddress : res.data.map(v =>{
          return v = v.provinceCode + v.cityCode + v.areaCode + v.address
        })
      })
    })
  },

  // 返回上一页
  back: function () {
    wx.navigateBack({delta: 1})
  },

  // 上传图片
  upload(url) {
    
  },

  // 修改头像
  changeAvatar() {
    if(!this.data.edit){
      return
    }
    uploadImg({
      url : service.changeAvatar.url
    }).then(res => {
      console.log(res)
    })
  }
})
