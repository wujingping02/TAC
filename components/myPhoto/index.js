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
    round: String,
    uploadText: String,
    padding : {
      type : String,
      value : "0"
    }
  },  
  // 组件的初始数据
  data: {  
    orgPhoto : []
  },  
  ready: function(){// 组件加载完毕
    this.data.orgPhoto = this.data.value.map(v => {
      return v = {
        isImage : true,
        url : "https://timeafterschool.net/tas/image/preview?imageId=" + v
      }
    });
    this.setData({
      orgPhoto : this.data.orgPhoto
    });
  },
  // 组件的方法列表
  methods: {  
    setValue : function(val){
      
    },
    getValue : function(){// 获取值
      return this.properties.value;
    },
    check : function(){
      if(this.properties.isMust && this.properties.value.length === 0){
        wx.showToast({
          title: "请拍摄" + this.properties.lable,
          icon: 'none'
        })
        return false
      }
    },
    upload : function(data){
      let file = data.detail.file.path;
      uploadImg({// 调用一下图片上传
        path : file,
        data : {
          objectNo : "USE200629000002",
          imageType : "jpg"
        }
      }).then(fileId => {
        this.data.orgPhoto.push({// 丢给图片上传插件的id
          isImage : true,
          url : "https://timeafterschool.net/tas/image/preview?imageId=" + fileId
        });
        this.properties.value.push(fileId);// 丢出去的值
        this.setData({
          orgPhoto : this.data.orgPhoto,
          value : this.properties.value
        });
      })
    },
    delete(res) {// 删除一张图片
      let index = res.detail;
      this.data.orgPhoto.splice(index, 1);
      this.properties.value.splice(index, 1);
      this.setData({
        orgPhoto : this.data.orgPhoto,
        value : this.properties.value
      });
    }
  }  
})
