Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持  
  },  
  // 组件的属性列表 
  properties: {  
    list: Array,
    type: String,
    disable: Boolean,
    className: String
  },  
  // 组件的初始数据   
  data: {  
    
  },  
  // 组件的方法列表
  methods: {
    addItem : function(){
      this.triggerEvent("addItem");
    },
    clickItem : function(e){// 点击事件，目前能点的是课程详情页的老师列表
      let index = e.currentTarget.dataset['index'];
      let data = this.data.list[index];
      let id = data.childrenId || data.teacherId || data.assistantId;
      this.triggerEvent("itemClick", index);
    },
    del(e) {// 删除事件
      let index = e.currentTarget.dataset['index'];
      let data = this.data.list[index];
      let id = data.childrenId || data.teacherId || data.assistantId;
      this.triggerEvent("del", id);
    }
  }
})
