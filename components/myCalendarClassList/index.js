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
    userType: String,
    activeL: String
  },  
  // 组件的初始数据
  data: {  
    classCardBG : null
  },
  ready() {
    if(this.properties.userType === "10"){// 机构
      if(this.properties.activeL === "active"){
        this.setData({
          classCardBG : "#FEE6D1"
        })
      }else{
        this.setData({
          classCardBG : "#DBF0FF"
        })
      }
    }else if(this.properties.userType === "30"){// 老师，助教
      this.setData({
        classCardBG : "#ECDEFA"
      })
    }else if(this.properties.userType === "40"){
      this.setData({
        classCardBG : "#DEF4E7"
      });
    }
  },
  // 组件的方法列表
  methods: {
    toClassDetail(data) {// 查看课程详情
      let index = data.currentTarget.dataset.index;
      let id = this.data.list[index].name;
      this.triggerEvent("toClassDetail", id);
    },
    rollCall(e) {// 点名
      let index = e.currentTarget.dataset['index'];
      let id = this.data.list[index].name;
      wx.navigateTo({
        url: "/pages/checkStu/index?id=" + id
      });
    },
    photo(e) {// 拍照
      let index = e.currentTarget.dataset['index'];
      let id = this.data.list[index].name;
      wx.navigateTo({
        url: "/pages/classPhoto/index?id=" + id
      });
    },
    reFreshColor(data) {
      if(data === "activeL"){
        this.setData({
          classCardBG : "#FEE6D1"
        })
      }else{
        this.setData({
          classCardBG : "#DBF0FF"
        })
      }
    }
  }   
})
