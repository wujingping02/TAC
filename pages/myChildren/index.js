import store from '../../store'
import create from '../../utils/create'
import {ajax, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "子女管理",
    classList : null,
    hidePopup: true,
    fieldList: [
      {
        "type" : "photo",
        "key" : "img",
        "isMust" : "1",
        "round" : "round",
        "uploadText" : "上传头像",
        "lable" : "小朋友头像"
      },
      {
        "type" : "text",
        "lable" : "小朋友姓名",
        "key" : "childrenName",
        "isMust" : "1"
      }
    ]
  },

  // 获取子女列表
  getChildren() {
    ajax({
      url: service.childrenList
    }).then((res) => {
      this.setData({
        classList : res.data.map(res => {
          return {
            url : getApp().globalData.imgUrl + res.headImageId,
            teacherName : res.childrenName,
            childrenId : res.childrenId
          }
        })
      })
    })
  },

  onShow: function () {
    this.getChildren();
  },

  // 跳到教室列表
  addItem: function () {
    this.setData({
      hidePopup : false
    }) 
  },

  // 新增子女
  sureAdd: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    ajax({
      url : service.addChildren,
      data : {
        childrenName : vals.childrenName,
        headImageId : vals.img[0]
      }
    }).then(res => {
      this.setData({
        hidePopup: true
      });
      this.getChildren();
    })
  }
})
