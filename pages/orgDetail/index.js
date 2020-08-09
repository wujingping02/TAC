import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, uploadImg} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "",
    orgAvatar : null,
    orgName : "",
    orgDetail : "",
    orgPhoto : null,
    orgAddress : [],
    userInfo : null,
    edit : false,
    teacherId : null
  },

  onLoad(options) {
    if(options.edit){// 编辑页面
      this.setData({
        edit : true
      })
    };
    if(!options.teacherId){
      this.setData({// 渲染一下头像，姓名，简介
        orgAvatar : this.store.data.userInfo.avatar,
        orgName : this.store.data.userInfo.userName,
        orgDetail : this.store.data.userInfo.remark,
        title : "机构简介"
      });
    }
    let url = service.queryInstituteImages;// 默认是机构
    if(this.store.data.userInfo.userType === "10" && options && !options.teacherId ){// 机构
      // 查询下机构下的地址
      ajax({
        url : service.addressList
      }).then(res => {
        this.setData({
          orgAddress : res.data.map(v =>{
            return v = v.provinceCode + v.cityCode + v.areaCode + v.address
          })
        })
      });
    }else{// 老师
      url = service.teaQueryTeacherImages;// 老师图片
      this.setData({// 渲染一下头像，姓名，简介
        title : "老师简介"
      });
      if(options.teacherId){// 其他角色查看老师信息
        url = service.teaCourseQueryTeacherImages;// 课程页面获取老师图片
        this.setData({
          orgAvatar : getApp().globalData.imgUrl + this.store.data.teacherHeadImageId,
          orgName : this.store.data.teacherName,
          orgDetail : this.store.data.teacherIntro,
          teacherId : options.teacherId
        })
      }
    };
    ajax({// 机构和老师都需要查询下当前角色的图片
      url : url,
      data : {
        techerId : options.teacherId
      }
    }).then(res => {
      this.setData({
        orgPhoto : res.data.map(v => {
          return v = {
            isImage : true,
            url : getApp().globalData.imgUrl + v
          }
        })
      })
    })
  },

  onShow: function () {
  },

  // 返回上一页
  back: function () {
    wx.navigateBack({delta: 1})
  },

  // 修改头像
  changeAvatar() {
    if(!this.data.edit){
      return
    }
    uploadImg({
      url : service.modifyHeadImage
    }).then(res => {
      this.store.data.userInfo.avatar = getApp().globalData.imgUrl + res.imageId;
      this.setData({
        orgAvatar : getApp().globalData.imgUrl + res.imageId + "&t=" + new Date().getTime()
      })
    })
  },

  // 输入框失去焦点的时候
  bindTextAreaBlur(e) {
    this.data.orgDetail = e.detail.value;
  },

  // 保存
  click() {
    let imgUrl = service.saveInstituteImages;
    let remarkUrl = service.modifyIntroduction;
    let prompt = "请输入机构介绍";
    if(this.store.data.userInfo.userType === "30"){
      imgUrl = service.teaSaveInstituteImages;
      remarkUrl = service.teaModifyIntroduction;
      prompt = "请输入老师介绍"
    }
    if(!this.data.orgDetail){
      wx.showToast({
        title : prompt,
        icon: "none"
      });
      return
    }
    ajax({
      url : imgUrl,
      data : {
        imageArrStr : JSON.stringify(this.selectComponent('#photo').getValue())
      }
    }).then(() => {
      ajax({
        url : remarkUrl,
        data : {
          remark : this.data.orgDetail || this.store.data.userInfo.remark
        }
      }).then(() => {
        this.store.data.userInfo.remark = this.data.orgDetail || this.store.data.userInfo.remark;
        this.store.update();
        wx.navigateBack({delta: 1});
      });
    });
  }
})
