Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    title: String,
    color: String,
    hideBack: Boolean,
    position: String
  },  
  // 组件的初始数据
  data: {  
    
  },  
  ready(){
    
  },
  // 组件的方法列表
  methods: {
    back : function() {
      wx.navigateBack({delta: 1})
    }
  }   
})
