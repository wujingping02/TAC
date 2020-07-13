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
    value : Array,
    mode : String,
    list : {
      type: Array,
      value: ["言语语言", "数理逻辑", "视觉空间", "音乐韵律", "身体运动", "人际沟通", "自我认识", "自然观察"]
    },
    idList : {
      type: Array,
      value: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },  
  // 组件的初始数据
  data: {
    myValue : [null, null, null],// 组件的值
    show : false,
    hidePromptBox : true
  },  
  ready: function(){// 组件加载完毕
    
  },
  // 组件的方法列表
  methods: { 
    setValue : function(val){
      
    },
    bindchange : function(e){// 每次焦点离开，拿一下值
      this.data.myValue[0] = this.properties.idList[e.detail.value];
      this.setData({
        myValue : this.data.myValue
      })
    },
    bindchange2 : function(e){// 副属性
      this.data.myValue[1] = this.properties.idList[e.detail.value];
      this.setData({
        myValue : this.data.myValue
      })
    },
    bindchange3 : function(e){// 副属性2
      this.data.myValue[2] = this.properties.idList[e.detail.value];
      this.setData({
        myValue : this.data.myValue
      })
    },
    getValue : function(){// 获取值
      if(!this.data.myValue[0]){
        return this.properties.value
      }
      return this.data.myValue
    },
    check : function(){
      if(this.properties.isMust && !this.data.myValue[0] && !this.properties.value[0]){
        wx.showToast({
          title: "请选择" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    },
    click : function(){
      this.setData({
        show : true
      })
    },
    showPrompt() {
      this.setData({
        hidePromptBox : false,
      })
    },
    hidePrompt() {
      this.setData({
        hidePromptBox : true,
      })
    }
  }  
})
