Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },  
  // 组件的属性列表
  properties: {
    list : Array,
    className : {
      type : String,
      value : "page"
    },
    hidePopup : {
      type : Boolean,
      value : false
    },
    cancel : {
      type : String,
      value : '取消'
    },
    sure : {
      type : String,
      value : '确认'
    },
    paddingTop : {
      type : String,
      value : '60rpx'
    },
    background : {
      type : String,
      value : '#ffffff'
    },
    promptText : String
  },  
  // 组件的初始数据 
  data: {  
    
  },  
  ready: function(){
    
  }, 
  // 组件的方法列表
  methods: {  
    cancle : function(){// 影藏弹窗
      this.setData({
        hidePopup : true
      })
    },
    true : function(){// 提交信息
      this.triggerEvent("sure")
    },
    onSearch : function(data){// 搜索
      this.triggerEvent("onSearch", data.detail)
    }
  }
})
