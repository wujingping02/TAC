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
    toClassDetail : function(e) {
      let index = e.currentTarget.dataset['index'];// 当前点击的课程信息
      this.triggerEvent("toLessonList", index);// 默认跳转到课节列表，但不同的页面可能传的“toLessonList”事件内容不一样
    }
  }   
})
