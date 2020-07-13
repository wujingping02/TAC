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
    }  
  },  
  // 组件的初始数据
  data: {  
    
  },  
  // 组件的方法列表
  methods: {
    // 删除课时
    delLseeon(e) {
      let index = e.currentTarget.dataset['index'];
      let lessonId = this.properties.list[index].lessonId;
      this.triggerEvent("delLseeon", lessonId);
      // ajax({
      //   url : service.deleteLesson,
      //   data : {
      //     lessonId : lessonId
      //   }
      // }).then(res => {
      //   this.properties.list.splice(index, 1);
      //   this.setData({
      //     list : this.properties.list
      //   })
      // })
    }
  }   
})
