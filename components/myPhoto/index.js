const service = require("../../utils/service");
const { uploadImg } = require("../../utils/util");

Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },  
  // 组件的属性列表
  properties: {
    isMust : String,
    disabled : {
      type : Boolean,
      value : false
    },
    type : String,
    lable : String,
    value : {
      type : Array,
      value : []
    },
    maxCount : Number,
    round: String,
    uploadText: String,
    padding : {
      type : String,
      value : "0"
    }
  },  
  // 组件的初始数据
  data: {  
    myValue : null
  },  
  ready: function(){// 组件加载完毕
    
  },
  // 组件的方法列表
  methods: {  
    setValue : function(val){
      
    },
    getValue : function(){// 获取值
      this.data.myValue = this.data.myValue || this.properties.value;
      return this.data.myValue.map(v => {
        return v = v.url.split("imageId=")[1]
      });;
    },
    check : function(){
      this.data.myValue = this.data.myValue || this.properties.value;
      if(this.properties.isMust && this.data.myValue.length === 0){
        wx.showToast({
          title: "请上传" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    },
    upload : function(data){
      let file = data.detail.file.path;
      uploadImg({// 调用一下图片上传
        path : file
      }).then(fileId => {
        this.data.myValue = this.data.myValue || this.properties.value;// 用本地的图片接收下
        this.data.myValue.push({
          isImage : true,
          url : getApp().globalData.imgUrl + fileId
        });
        this.setData({
          myValue : this.data.myValue
        });
      })
    },
    delete(res) {// 删除一张图片
      let index = res.detail;
      this.data.myValue = this.data.myValue || this.properties.value;// 用本地的图片接收下
      this.data.myValue.splice(index, 1);
      this.setData({
        myValue : this.data.myValue
      });
    },
    changePhoto() {// 重新拍摄，仅仅round的时候才有用
      uploadImg().then(fileId => {
        this.data.myValue = this.data.myValue || this.properties.value;// 用本地的图片接收下
        this.data.myValue[0].url = getApp().globalData.imgUrl + fileId;
        this.setData({
          myValue : this.data.myValue
        });
      })
    }
  }  
})
