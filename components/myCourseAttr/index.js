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
    value : String,
    mode : String,
    list : {
      type: Array,
      value: ["言语语言", "数理逻辑", "视觉空间", "音乐韵律", "身体运动", "人际沟通", "自我认识", "自然观察"]
    },
    idList : {
      type: Array,
      value: [0,1,2,3,4,5,6,7,8]
    }
  },  
  // 组件的初始数据
  data: {
    index : "",
    value : "",
    index2 : "",
    value2 : "",
    index3 : "",
    value3 : "",
    show : false,
    zh_value : ""
  },  
  ready: function(){// 组件加载完毕
    this.setData({
      index : this.properties.idList.indexOf(this.properties.value),
      index2 : this.properties.idList.indexOf(this.properties.value2),
      index3 : this.properties.idList.indexOf(this.properties.value3),
    })
  },
  // 组件的方法列表
  methods: { 
    setValue : function(val){
      this.setData({
        index : this.properties.idList.indexOf(val),
        value : val
      })
    },
    bindchange : function(e){// 每次焦点离开，拿一下值 
      this.setData({
        index : e.detail.value,
        value : this.properties.idList[e.detail.value]
      })
    },
    bindchange2 : function(e){// 副属性
      this.setData({
        index2 : e.detail.value,
        value2 : this.properties.idList[e.detail.value]
      })
    },
    bindchange3 : function(e){// 副属性2
      this.setData({
        index3 : e.detail.value,
        value3 : this.properties.idList[e.detail.value]
      })
    },
    getValue : function(){// 获取值
      return [
        {key: "attr1", value: this.data.value},
        {key: "attr2", value: this.data.value2},
        {key: "attr3", value: this.data.value3}
      ]
    },
    check : function(){
      if(this.properties.isMust && !this.properties.value){
        wx.showToast({
          title: "请输入" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    },
    click : function(){
      this.setData({
        show : true
      })
    }
  }  
})
