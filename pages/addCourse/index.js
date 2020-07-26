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
        "value" : [null, null, null],
        "isMust" : "1"
      },
      {
        "type" : "text",
        "lable" : "备注",
        "key" : "remark"
      },
      {
        "type" : "text",
        "lable" : "价格",
        "key" : "price",
        "check" : "num",
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
      url: service.addressList
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
          url : service.getCourseInfo,
          data : {
            courseId : this.data.courseId
          }
        }).then((res) => {
          res.data.subLabel1 = "null" ? null : res.data.subLabel1;
          res.data.subLabel2 = "null" ? null : res.data.subLabel2;
          this.data.fieldList[0].value = res.data.courseName;
          this.data.fieldList[1].value = [{isImage : true, url : getApp().globalData.imgUrl + res.data.mainImageId}];
          this.data.fieldList[2].value = this.data.fieldList[2].idList.indexOf(res.data.ageStage.split("-")[0]) + "";
          this.data.fieldList[3].value = this.data.fieldList[3].idList.indexOf(res.data.ageStage.split("-")[1]) + "";
          this.data.fieldList[4].value = this.data.fieldList[4].idList.indexOf(res.data.addressId) + "";
          this.data.fieldList[5].value = [res.data.mainLabel, res.data.subLabel1, res.data.subLabel2];
          this.data.fieldList[6].value = res.data.remark;
          this.data.fieldList[7].value = res.data.price;
          this.data.fieldList[8].value = res.data.courseIntroduce;
          this.data.fieldList[9].value = res.data.images.map(v => {return v = {isImage : true,url : getApp().globalData.imgUrl + v}});
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
    if(vals.sAgae > vals.eAgae){
      wx.showToast({
        title : "最小适合年龄不可以大于最大适合年龄",
        icon : "none"
      })
      return
    }
    let data = {
      courseName : vals.courseName,
      price : vals.price,
      mainLabel : vals.mainLabel[0],
      subLabel1 : vals.mainLabel[1],
      subLabel2 : vals.mainLabel[2],
      ageStage : vals.sAgae + '-' + vals.eAgae,
      addressId : vals.addressId,
      mainImageId : vals.mainImageId[0],
      courseIntroduce : vals.courseIntroduce,
      remark : vals.remark,
      imageArrStr : JSON.stringify(vals.imageArrStr)
    };
    let url = service.orgAddCourse;
    if(this.data.courseId){// 编辑课程信息
      data.courseId = this.data.courseId;
      url = service.editCourseInfo;
    }
    ajax({
      url : url,
      data : data
    }).then(res => {
      wx.navigateBack({delta: 1})
    })
  }
})
