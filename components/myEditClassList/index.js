import { ajax } from "../../utils/util"
import service from "../../utils/service"

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
    toClassList : function(e) {// 跳转到班级列表
      let index = e.currentTarget.dataset['index'];
      if(["20", "30"].indexOf(this.data.list[index].classStatus) > -1){
        wx.showToast({
          title : "该班级无法操作",
          icon : "none"
        });
        return
      }
      let classInfo = JSON.stringify(this.data.list[index]);
      wx.navigateTo({
        url: "/pages/addClass/index?classInfo=" + classInfo
      });
    },
    deleClass : function(e) {// 删除班级
      let index = e.currentTarget.dataset['index'];
      let classId = this.data.list[index].classId;
      ajax({
        url : service.deleteClass,
        data : {
          classId : classId
        }
      })
    },
    startClass : function(e) {// 开班
      let index = e.currentTarget.dataset['index'];
      let classId = this.data.list[index].classId;
      ajax({
        url : service.startClass,
        data : {
          classId : classId
        }
      })
    },
    toClassDetail : function(e) {// 查看班级详情
      let index = e.currentTarget.dataset['index'];
      if(["30"].indexOf(this.data.list[index].classStatus) > -1){
        wx.showToast({
          title : "该班级无法操作",
          icon : "none"
        });
        return
      }
      var obj = JSON.stringify({
        classId: this.data.list[index].classId,
        courseId: this.data.list[index].courseId
      });
      wx.navigateTo({
        url: "/pages/courseDetail/index?data=" + obj
      });
    },
  }   
})
