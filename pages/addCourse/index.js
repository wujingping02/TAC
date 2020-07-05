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
        "isMust" : "1",
        "maxCount" : 1
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
        "key" : "eAgae",
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
        "key" : "imageArrStr",
        "isMust" : "1"
      }
    ],
    courseId : ""
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.data.courseId = options.courseId;
    this.setData({
      courseId : options.courseId || ""
    })
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
      });
      if(this.data.courseId){// 编辑进来的
        ajax({
          url : service.getCourseInfo.url,
          data : {
            courseId : this.data.courseId
          }
        }).then((res) => {
          this.data.fieldList[0].value = res.data.courseName;
          this.data.fieldList[1].value = [res.data.mainImageId];
          this.data.fieldList[2].value = res.data.ageStage.split("-")[0];
          this.data.fieldList[3].value = res.data.ageStage.split("-")[1];
          this.data.fieldList[4].value = res.data.addressId;
          this.data.fieldList[5].value = [res.data.mainLabel, res.data.subLabel1, res.data.subLabel2];
          this.data.fieldList[6].value = res.data.remark;
          this.data.fieldList[7].value = res.data.price;
          this.data.fieldList[8].value = res.data.courseIntroduce;
          this.data.fieldList[9].value = res.data.images;
          this.setData({
            fieldList : this.data.fieldList
          });
        });
      }
    })
  },

  onShow() {
    
  },

  click: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    let data = {
      courseName : vals.courseName,
      price : vals.price,
      mainLabel : vals.mainLabel[0].value,
      subLabel1 : vals.mainLabel[1].value,
      subLabel2 : vals.mainLabel[2].value,
      ageStage : vals.sAgae + '-' + vals.eAgae,
      addressId : vals.addressId,
      mainImageId : vals.mainImageId[0],
      courseIntroduce : vals.courseIntroduce,
      remark : vals.remark,
      imageArrStr : JSON.stringify(vals.imageArrStr)
    };
    let url = service.orgAddCourse.url;
    if(this.data.courseId){// 编辑课程信息
      data.courseId = this.data.courseId;
      url = service.editCourseInfo.url;
    }
    ajax({
      url : url,
      data : data
    }).then(res => {
      wx.navigateBack({delta: 1})
    })
  }
})
