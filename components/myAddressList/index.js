Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    list: {// 属性名      
      type: Array,  
      value: []
    }  
  },  
  // 组件的初始数据   
  data: {  
    
  },  
  // 组件的方法列表 
  methods: {
    toClsRoomList : function(e) {// 跳转到教室列表
      let index = e.currentTarget.dataset['index'];
      let addressId = this.data.list[index].addressId;
      wx.navigateTo({
        url: "/pages/clsRoomList/index?addressId=" + addressId
      });
    },
    edit : function(e) {// 编辑当前地址信息
      let index = e.currentTarget.dataset['index'];
      wx.navigateTo({
        url: "/pages/addAddress/index?index=" + index
      });
    }
  }   
})
