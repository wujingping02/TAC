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
    ageList: [{age: '0岁'},{age: '1岁'},{age: '2岁'},{age: '3岁'},{age: '4岁'},{age: '5岁'},{age: '5岁以上'}],
    hideAge: true,
    upArrow: "",
    searchValue: ""
  },
 
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    
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
      url: service.courseList.url,
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
    let index = data.detail;
    wx.navigateTo({
      url: "/pages/courseDetail/index?index=" + index
    });
  },
 
  // 生命周期函数--监听页面显示
  onShow: function () {
  
  },
 
  // 生命周期函数--监听页面隐藏
  onHide: function () {
  
  },
 
  // 生命周期函数--监听页面卸载
  onUnload: function () {
  
  },
 
  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    
  },
 
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
  
  },
 
  // 用户点击右上角分享
  onShareAppMessage: function () {
    
  },

  // 用户在筛选年龄
  chooseAge: function (e) {
    let index = e.currentTarget.dataset['index'];// 当前点击的年龄
    let ageList = this.data.ageList.map((v, i) => {// 把用户点击的这个高亮
      if(i === index){
        return v = {
          age : v.age,
          class : 'active'
        }
      }else{
        return v = {
          age : v.age
        }
      }
    });
    let list = this.store.data.courseList.filter(v => {
      return index > (v.sAge - 1) && index < (v.eAge * 1 + 1)
    })
    let obj = this.getNewList(list);
    this.setData({
      listLeft: obj.l,
      listRight: obj.r,
      ageList : ageList,
      hideAge: true,
      upArrow: this.data.upArrow ? "" : "upArrow"
    })
  },

  // 显示一下年龄筛选列表
  showAge: function() {
    this.setData({
      hideAge: this.data.upArrow ? true : false,
      upArrow: this.data.upArrow ? "" : "upArrow"// 收起
    })
  },

  // 搜索课程
  onSearch: function(data) {
    let list = this.store.data.courseList.filter(v => {
      return v.name.indexOf(data.detail) > -1
    })
    let obj = this.getNewList(list);
    this.setData({
      listLeft: obj.l,
      listRight: obj.r
    })
  }

})
