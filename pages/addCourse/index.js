import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals, uploadImg} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "课程管理",
    fieldList : [// 字段list
      {
        "type" : "text",
        "lable" : "课程名称",
        "key" : "courseName",
        "isMust" : "1"
      },
      {
        "type" : "photo",
        "lable" : "课程介绍主图",
        "key" : "mainImageId",
        "value" : [],
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "最小适合年龄",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "sAgae",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "最大适合年龄",
        "nameList" : ['0岁', '1岁','2岁','3岁','4岁','5岁','5岁以上'],
        "idList" : ['0', '1','2','3','4','5','6'],
        "key" : "eAge",
        "isMust" : "1"
      },
      {
        "type" : "selector",
        "lable" : "上课地址",
        "nameList" : [],
        "idList" : [],
        "key" : "addressId",
        "isMust" : "1"
      },
      {
        "type" : "courseAttr",
        "lable" : "课程属性",
        "key" : "mainLabel",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "备注",
        "key" : "remark",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "价格",
        "key" : "price",
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "课程介绍",
        "key" : "courseIntroduce",
        "isMust" : "1"
      },
      {
        "type" : "photo",
        "lable" : "课程介绍",
        "key" : "courseIntroduceImg",
        "isMust" : "1"
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // if(options.index){
    //   let data = this.store.data.addressList[options.index];
    //   this.data.fieldList[0].value = data.provice + ',' + data.city + ',' + data.area;
    //   this.data.fieldList[1].value = data.address;
    // }
    ajax({// 上来获取一下地址列表
      url: service.addressList.url
    }).then((res) => {
      this.data.fieldList[4].nameList = res.data.map(v => {
        return v = v.address
      });
      this.data.fieldList[4].idList = res.data.map(v => {
        return v = v.addressId
      });
      this.setData({
        fieldList : this.data.fieldList
      })
    })
  },

  click: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    ajax({
      url : service.orgAddCourse.url,
      data : {
        courseName : vals.courseName,
        price : vals.price,
        mainLabel : vals.mainLabel[0].value,
        subLabel1 : vals.mainLabel[1].value,
        subLabel2 : vals.mainLabel[2].value,
        ageStage : vals.sAgae + '-' + vals.eAgae,
        addressId : vals.addressId,
        mainImageId : vals.mainImageId,
        courseIntroduce : vals.courseIntroduce,
        remark : vals.remark
      }
    }).then(res => {
      wx.navigateBack({delta: 1})
    })
  }
})
