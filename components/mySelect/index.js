import { getTime } from "../../utils/util"

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
    value : null,
    mode : String,
    list : Array,
    idList : Array,
    className : String,
    color : String,
    multiple : {
      type : String,
      value : "multiple"
    }
  },  
  // 组件的初始数据
  data: {
    myValue : null,// 直接是值
    myIndex : null,// 是码值
    show : false,
    zh_value : ""
  },  
  ready: function(){// 组件加载完毕
    
  },
  // 组件的方法列表
  methods: {
    setValue : function(val){
      
    },
    bindchange : function(e){// 每次焦点离开，拿一下值
      if(this.properties.type === "selector"){// 下拉框最特殊，传进来的是码值，要特殊处理
        this.data.myIndex = this.data.myIndex || this.properties.value;// 存一下
        this.setData({
          myValue : this.properties.list[e.detail.value],
          myIndex : e.detail.value
        })
      }else{
        this.data.myValue = this.data.myValue || this.properties.value;
        if(this.properties.type === "time"){// 时间
          this.setData({
            myValue : e.detail.value
          })
        }else if(this.properties.type === "calendar"){// 日历
          if(typeof e.detail === 'object' && e.detail.length > 0){
            this.setData({
              show : false,
              myValue : e.detail.map(v => {
                return v = getTime(v)
              })
            })
          }else{
            this.setData({
              show : false,
              myValue : getTime(e.detail)
            })
          }
        }else if(this.properties.type === "region"){// 省市区
          this.setData({
            zh_value : e.detail.value,
            myValue : e.detail.value
          })
        }
      }
    },
    getValue : function(){// 获取值
      if(this.properties.type === "selector"){
        this.data.myIndex = this.data.myIndex || this.properties.value;// 存一下
        return this.properties.idList[this.data.myIndex]
      }else{
        this.data.myValue = this.data.myValue || this.properties.value;
        if(this.properties.type === "region"){// 省市区
          if(typeof this.data.myValue === "object"){
            return this.data.myValue[0] + "-" + this.data.myValue[1] + "-" + this.data.myValue[2];
          }
          return this.data.myValue
        }else{
          return this.data.myValue
        }
      }
    },
    check : function(){
      this.data.myValue = this.data.myValue || this.properties.value;
      if(this.properties.isMust && !this.properties.myValue){
        wx.showToast({
          title: "请选择" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    },
    click : function(){// 显示日历
      this.setData({
        show : true
      })
    },
    onClose() {// 隐藏日历
      this.setData({
        show : false
      })
    }
  }  
})
