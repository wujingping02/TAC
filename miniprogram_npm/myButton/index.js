Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    content: String,
    className: String
  },
  ready: function(){
    
  },
  // 组件的方法列表
  methods: {
    click : function() {
      this.triggerEvent("click");// 按钮的点击事件
    }
  }   
})
