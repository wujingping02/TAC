Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    hide: {
      type : Boolean,
      value : false
    },
    zIndex: {
      type : String,
      value : '1'
    }
  }
})
