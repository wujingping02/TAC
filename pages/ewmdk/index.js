import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "扫码定课",
    fieldList :  [// 字段list
      {
        "type" : "text",
        "lable" : "班级名称",
        "key" : "name",
        "disabled" : true,
        "value" : "阳光小班",
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "课程名称",
        "key" : "name",
        "value" : "英语系统课",
        "disabled" : true,
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "教育机构",
        "key" : "phone",
        "value" : "上海英语ABC教育培训基地",
        "disabled" : true,
        "className" : "noBorder",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "选择子女",
        "key" : "childId",
        "isMust" : "1",
        "nameList" : null,
        "idList" : null
      }
    ],
    classId : "",
    courseId : ""
  },

  onShow: function () {
        
  },

  onLoad: function (data) {
    // 获取子女列表
    ajax({
      url: service.childrenList
    }).then((res) => {
      this.data.fieldList[0].value = data.data.split("__")[2];// 班级名称
      this.data.fieldList[1].value = data.data.split("__")[0];// 课程名称
      this.data.fieldList[2].value = data.data.split("__")[3];// 机构名称
      this.data.fieldList[3].nameList = res.data.map(v => {return v = v.childrenName});
      this.data.fieldList[3].idList = res.data.map(v => {return v = v.childrenId});
      this.setData({
        fieldList : this.data.fieldList,
        classId : data.data.split("__")[1]
      })
    })
  },

  submit: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    ajax({
      url : service.enrollClass,
      data : {
        classId : this.data.classId,
        childrenId : vals.childId
      }
    }).then(res => {
      wx.showToast({
        title : "报名成功",
        icon : "none"
      })
      setTimeout(() => {
        wx.navigateBack({delta: 1})
      }, 500);
    });
  }
})
