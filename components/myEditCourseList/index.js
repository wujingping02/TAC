import { ajax } from "../../utils/util"
import service from "../../utils/service";

Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    list: {// 属性名      
      type: Array,  
      value: []
    }  
  },  
  // 组件的初始数据   
  data: {  
    
  },  
  // 组件的方法列表 
  methods: {
    toEditClass : function(e) {
      let index = e.currentTarget.dataset['index'];// 排班
      this.triggerEvent("toEditClass", index);
    },
    toEditCourse : function(e) {
      let index = e.currentTarget.dataset['index'];// 新增课程
      wx.navigateTo({
        url: "/pages/addCourse/index?courseId=" + this.data.list[index].courseId
      });
    },
    publishCourse(e) {// 发布课程
      let index = e.currentTarget.dataset['index'];
      ajax({
        url : service.publishCourse,
        data : {
          courseId : this.data.list[index].courseId
        }
      }).then(res => {
        this.triggerEvent("refresh");
        wx.showToast({
          title : "发布成功",
          icon : 'none'
        })
      })
    },
    offShelfCourse(e) {// 下架课程
      let index = e.currentTarget.dataset['index'];
      ajax({
        url : service.offShelfCourse,
        data : {
          courseId : this.data.list[index].courseId
        }
      }).then(res => {
        this.triggerEvent("refresh");
        wx.showToast({
          title : "下架成功",
          icon : 'none'
        })
      })
    }
  }   
})
