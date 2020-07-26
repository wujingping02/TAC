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
      if(this.data.list[index].type === "zdy"){
        return
      }
      var obj = JSON.stringify({
          classId: this.data.list[index].classId,
          courseId: this.data.list[index].courseId
        });
      this.triggerEvent("toClassDetail", obj);
    },
    rollCall(e) {// 点名
      let index = e.currentTarget.dataset['index'];
      let data = {
        lessonId : this.data.list[index].lessonId,
        time :  this.data.list[index].time,
        className : this.data.list[index].lessonName
      };
      wx.navigateTo({
        url: "/pages/checkStu/index?data=" + encodeURIComponent(JSON.stringify(data))
      });
    },
    photo(e) {// 拍照
      let index = e.currentTarget.dataset['index'];
      let data = {
        lessonId : this.data.list[index].lessonId,
        time :  this.data.list[index].time,
        className : this.data.list[index].lessonName
      };
      wx.navigateTo({
        url: "/pages/classPhoto/index?data=" + encodeURIComponent(JSON.stringify(data))
      });
    },
    reFreshColor(data) {// 换一下皮肤
      if(data === "activeL"){
        this.setData({
          classCardBG : "#FEE6D1"
        })
      }else{
        this.setData({
          classCardBG : "#DBF0FF"
        })
      }
    },
    myPhoto(e) {// 看一下相册
      let index = e.currentTarget.dataset['index'];
      let classId = this.data.list[index].classId;
      this.triggerEvent("getMyPhoto", classId);
    }
  }   
})
