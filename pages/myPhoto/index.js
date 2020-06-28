import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  // 页面的初始数据
  data: {
    courseList: null,
    listLeft: [],
    listRight: [],
    title: "我的相册",
    timeActive: "active",
    courseActive: ""
  },
 
  // 根据courseList获取左右两边的list
  getNewList: function(list) {
    let listLeft = [];
    let listRight = [];
    list.forEach((v, i) => {
      if(i%2 === 0){// 偶数在左
        listLeft.push(v)
      }else{// 奇数在右
        listRight.push(v)
      }
    });
    return {
      l : listLeft,
      r : listRight
    }
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    mockRequest({// 上来获取一下课程列表
      url: service.photoList.url,
      method: "post",
    }).then((res) => {
      this.store.data.courseList = res.data;// 把列表存一下
      let obj = this.getNewList(res.data);
      this.setData({
        listLeft: obj.l,
        listRight: obj.r
      })
    })
  },

  // 用户点击课程列表
  toCourseDetail: function (data) {
    let id,index = data.detail;
    if(index.indexOf('l') > -1){
      id = this.data.listLeft[index.slice(1)].name;
    }else{
      id = this.data.listRight[index.slice(1)].name;
    }
    wx.navigateTo({
      url: "/pages/photoDetail/index?list=" + id
    });
  },

  // 根据时间搜索
  timeGetActive() {
    this.setData({
      timeActive: "active",
      courseActive: ""
    })
  },

  // 根据课程搜索
  courseGetActive() {
    this.setData({
      timeActive: "",
      courseActive: "active"
    })
  }

})
