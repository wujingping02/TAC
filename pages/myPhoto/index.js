import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  // 页面的初始数据
  data: {
    courseList: null,
    allImg: null,
    listLeft: null,
    listRight: null,
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
    ajax({// 上来获取一下课程列表
      url: service.photoList
    }).then((res) => {
      let arr = [];// 当前页面要显示的list
      for(let key in res.data){
        arr.push({
          id : key,
          ...res.data[key][0]
        });
      };
      arr = arr.map(v => {
        return v = {
          ...v,
          time : v.lessonDate + " " + v.startTime + "~" + v.endTime,
          courseName : v.courseName + "：" + v.className,
          url : getApp().globalData.imgUrl + v.imageId
        }
      }).sort((a, b) => {
        return b.lessonDate.replace(/-/g, "") - a.lessonDate.replace(/-/g, "")
      });
      let obj = this.getNewList(arr);
      this.setData({
        courseList: arr,
        listLeft: obj.l,
        allImg: res.data,
        listRight: obj.r
      })
    })
  },

  // 用户点击课程列表
  toCourseDetail: function (data) {
    let id,index = data.detail;
    if(index.indexOf('l') > -1){
      id = this.data.listLeft[index.slice(1)].id;
    }else{
      id = this.data.listRight[index.slice(1)].id;
    };
    this.store.data.parentPhotos = this.data.allImg[id].map(v => {return v.imageId});
    wx.navigateTo({
      url: "/pages/photoDetail/index"
    });
  },

  // 根据时间搜索
  timeGetActive() {
    this.setData({
      timeActive: "active",
      courseActive: ""
    });
    this.data.courseList = this.data.courseList.sort((a, b) => {
      return b.lessonDate.replace(/-/g, "") - a.lessonDate.replace(/-/g, "")
    });
    this.setData({
      courseList: this.data.courseList
    });
  },

  // 根据课程搜索
  courseGetActive() {
    this.setData({
      timeActive: "",
      courseActive: "active"
    });
    this.data.courseList = this.data.courseList.sort((a, b) => {
      return a.courseName.localeCompare(b.courseName, "zh");
    });
    this.setData({
      courseList: this.data.courseList
    });
  }

})
