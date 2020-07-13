import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title: "添加班级",
    lessonList : null,
    fieldList : [
      {
        "type" : "text",
        "lable" : "班级名称",
        "key" : "className",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "最大人数",
        "key" : "totalSize",
        "check" : "num",
        "isMust" : "1"
      }
    ],
    fieldList2 : [
      {
        "type" : "time",
        "lable" : "开始时间",
        "key" : "startTime",
        "isMust" : "1"
      },{
        "type" : "time",
        "lable" : "结束时间",
        "key" : "endTime",
        "isMust" : "1"
      },{
        "type" : "calendar",
        "lable" : "开班日期",
        "key" : "lessonDateArray",
        "color" : "#FF8100",
        "isMust" : "1"
      },{
        "type" : "selector",
        "lable" : "老师列表",
        "nameList" : [],
        "idList" : [],
        "key" : "teacherId",
        "isMust" : "1"
      },{
        "type" : "selector",
        "lable" : "教室列表",
        "nameList" : [],
        "idList" : [],
        "key" : "classroomId",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "备注",
        "key" : "remark",
        "isMust" : "1"
      }
    ],
    hidePopup: true,
    // hidePopup: false,
    classId : "",
    courseId : ""
  },

  onLoad(options) {
    if(options.classInfo){// 编辑班级
      let data = JSON.parse(options.classInfo);
      this.setData({
        classId : data.classId,
        fieldList : [
          {
            "type" : "text",
            "lable" : "班级名称",
            "key" : "className",
            "value" : data.className,
            "disabled" : true,
            "isMust" : "1"
          },{
            "type" : "text",
            "lable" : "最大人数",
            "key" : "totalSize",
            "check" : "num",
            "value" : data.totalSize,
            "disabled" : true,
            "isMust" : "1"
          }
        ]
      });
    }else if(options.courseId){// 新增班级
      this.setData({
        courseId : options.courseId
      });
    }
  },

  // 获取一下课时
  getLessonList() {
    ajax({
      url: service.lessonList,
      data: {
        classId : this.data.classId
      }
    }).then((res) => {
      this.setData({
        lessonList : res.data.map(v => {
          return v = {
            ...v,
            url : getApp().globalData.imgUrl + v.teacherHeadImageId
          }
        })
      })
    });
  },

  onShow: function () {
    this.getLessonList();// 上来获取一下课节列表
    ajax({// 上来获取一下老师和教室列表
      url: service.getClassTeacherList
    }).then((res) => {
      ajax({
        url: service.getClassClassroomList
      }).then((obj) => {
        this.data.fieldList2[3].idList = res.data.map(v => {return v = v.teacherId});
        this.data.fieldList2[3].nameList = res.data.map(v => {return v = v.teacherName});
        this.data.fieldList2[4].idList = obj.data.map(v => {return v = v.classroomId});
        this.data.fieldList2[4].nameList = obj.data.map(v => {return v = v.classroomName});
        this.setData({
          fieldList2 : this.data.fieldList2
        })
      });
    });
  },

  // 先创建一个班级
  addClass: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    if(!this.data.classId){// 没建班级，先创建一个班级
      ajax({
        url: service.addClass,
        data: {
          courseId : this.data.courseId,
          className : vals.className,
          totalSize : vals.totalSize
        }
      }).then((res) => {
        this.setData({
          classId : res.data.classId,
          hidePopup: false,
          fieldList : [
            {
              "type" : "text",
              "lable" : "班级名称",
              "key" : "className",
              "value" : vals.className,
              "disabled" : true,
              "isMust" : "1"
            },{
              "type" : "text",
              "lable" : "最大人数",
              "key" : "totalSize",
              "check" : "num",
              "value" : vals.totalSize,
              "disabled" : true,
              "isMust" : "1"
            }
          ]
        })
      })
    }else{
      this.setData({
        hidePopup: false
      })
    }
  },

  // 添加课时
  addLesson: function () {
    let vals = collectVals.call(this, this.data.fieldList2, "page2");
    if(vals === false){
      return
    };
    ajax({
      url : service.addLesson,
      data : {
        classId: this.data.classId,
        startTime: vals.startTime,
        endTime: vals.endTime,
        classroomId: vals.classroomId,
        teacherId: vals.teacherId,
        remark: vals.remark,
        lessonDateArray: JSON.stringify(vals.lessonDateArray)
      }
    }).then(res => {
      this.setData({
        hidePopup : true
      });
      this.getLessonList();
    })
  },

  // 删除课时
  delLseeon(data) {
    ajax({
      url : service.deleteLesson,
      data : {
        lessonId : data.detail
      }
    }).then(res => {
      this.getLessonList();
    })
  }
})
