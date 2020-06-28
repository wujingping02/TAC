Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    list: {// 属性名      
      type: Array,  
      value: []
    },
    fromMine: Boolean
  },  
  // 组件的初始数据   
  data: {  
    
  },  
  ready: function(){
    
  },
  // 组件的方法列表 
  methods: {
    toClsRoomList : function(e) {
      let index = e.currentTarget.dataset['index'];// 当前点击的课程信息
      if(this.properties.fromMine){// 跳转班级详情
        wx.navigateTo({
          url: "/pages/courseDetail/index?calssId=" + index
        });
        return
      }
      this.triggerEvent("toClsRoomList", index);
    },
    edit : function(e) {
      let index = e.currentTarget.dataset['index'];// 当前点击的课程信息
      wx.navigateTo({
        url: "/pages/addAddress/index?index=" + index
      });
    },
    addClass : function(e) {// 添加班级
      let index = e.currentTarget.dataset['index'];// 当前点击的课程信息
      wx.navigateTo({
        url: "/pages/addClass/index?index=" + index
      });
    }
  }   
})
