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
    list : Array,
    idList : Array
  },  
  // 组件的初始数据
  data: {
    index : "",
    value : "",
    show : false,
    zh_value : ""
  },  
  ready: function(){// 组件加载完毕
    this.setData({
      index : this.properties.idList.indexOf(this.properties.value)
    })
  },
  // 组件的方法列表
  methods: {  
    getTime : function(ms){
      function addZero(num){
        if(parseInt(num) < 10){
            num = '0'+num;
        }
        return num;
      }
      var oDate = new Date(ms),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth()+1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      oSen = oDate.getSeconds(),
      oTime = oYear +'-'+ addZero(oMonth) +'-'+ addZero(oDay);
      return oTime;
    },
    setValue : function(val){
      this.setData({
        index : this.properties.idList.indexOf(val),
        value : val
      })
    },
    bindchange : function(e){// 每次焦点离开，拿一下值
      if(this.properties.type === "time"){// 时间
        this.setData({
          value : e.detail.value
        })
      }else if(this.properties.type === "calendar"){// 日历
        this.setData({
          show : false,
          value : e.detail.map(v => {
            return v = this.getTime(v)
          })
        })
      }else if(this.properties.type === "region"){// 省市区
        this.setData({
          zh_value : e.detail.value,
          value : e.detail.value
        })
      }else{
        this.setData({
          index : e.detail.value,
          value : this.properties.idList[e.detail.value]
        })
      }
    },
    getValue : function(){// 获取值
      if(this.properties.type === "calendar"){
        return this.properties.value.split(",");
      }else if(this.properties.type === "region"){
        return this.properties.value.replace(/,/g, "-");
      }else{
        return this.properties.value
      }
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
