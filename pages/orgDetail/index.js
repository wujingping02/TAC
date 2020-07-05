import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, uploadImg} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    orgImg : "",
    orgName : "",
    orgDetail : "佳士科技地方和辣的会发生撒打飞机哈克斯大家好大，驾驶的房间里，阿萨德路附近爱上对方就爱上了对方就卡了，阿萨德来访记录卡打飞机。爱上的看法将拉低房价金坷垃就，坎坎坷坷。",
    orgPhoto : null,
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
      // 查询机构下的图片
      ajax({
        url : service.queryInstituteImages.url
      }).then(res => {
        this.setData({
          orgPhoto : res.data
        })
      });
    });
  },

  // 返回上一页
  back: function () {
    wx.navigateBack({delta: 1})
  },

  // 修改头像
  changeAvatar() {
    if(!this.data.edit){
      return
    }
    uploadImg({
      url : service.changeAvatar.url
    }).then(res => {
      // this.store.data.userInfo.avatar = 
      
    })
  },

  // 输入框失去焦点的时候
  bindTextAreaBlur(e) {
    this.data.orgDetail = e.detail.value;
  },

  // 保存
  click() {
    ajax({
      url : service.saveInstituteImages.url,
      data : {
        imageArrStr : JSON.stringify(this.selectComponent('#photo').getValue())
      }
    })
  }
})
