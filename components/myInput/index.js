Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },  
  // 组件的属性列表
  properties: {
    isMust : String,
    disable : Boolean,
    type : String,
    lable : String,
    value : String 
  },  
  // 组件的初始数据
  data: {  
    value : ""
  },  
  ready: function(){// 组件加载完毕
    
  },
  // 组件的方法列表
  methods: {  
    setValue : function(val){
      this.setData({
        value : val
      })
    },
    onBlur : function(e){// 每次焦点离开，拿一下值
      this.properties.value = e.detail.value;
    },
    getValue : function(){// 获取值
      return this.properties.value;
    },
    check : function(){
      if(this.properties.isMust && !this.properties.value){
        wx.showToast({
          title: "请输入" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    }
  }  
})
