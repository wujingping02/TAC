import service from './service.js'

// 获取时间的年月日
function getTime(ms) {
  function addZero(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
  }
  var oDate = new Date(ms),
  oYear = oDate.getFullYear(),
  oMonth = oDate.getMonth()+1,
  oDay = oDate.getDate(),
  oHour = oDate.getHours(),
  oMin = oDate.getMinutes(),
  oSen = oDate.getSeconds(),
  oTime = oYear +'-'+ addZero(oMonth) +'-'+ addZero(oDay);
  return oTime;
}

// ajax请求
function ajax(data) {
  return new Promise((suc, fail) => {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    wx.request({
      url: data.url,
      data: data.data,
      header: {
        'cookie': 'token=' + wx.getStorageSync('token') + ";",
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: data.method || "post",
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.hideLoading()
        if(res.data.code === '0000'){
          suc(res.data)
        }else{
          wx.showToast({title: res.data.msg,icon: "none"})
        }
      },
      fail: function() {
        wx.hideLoading()
        wx.showToast({title: "系统异常，请稍后再试",icon: "none"})
      }
    })
  })
}

// mock的请求
function mockRequest(data) {
  return new Promise((suc, fail) => {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    setTimeout(() => {
      wx.hideLoading();
      let key = data.url.split("/").reverse()[1] + data.url.split("/").reverse()[0][0].toUpperCase() + data.url.split("/").reverse()[0].slice(1);
      let res = service[key].mockData;
      if(res.code === '0000'){
        suc(res)
      }else{
        wx.showToast({title: res.msg,icon: "none"})
      }
    }, 500)
  })
}

// 获取用户登录信息
function isLogin(cb) {
  if(!this.store.data.userInfo.userType){// 没有角色信息就去拿一下
    function login() {
      ajax({
        url : service.login,
        data : {
          code : this.store.data.userInfo.loginCode
        }
      }).then(res => {
        if(res.data.isRegister === "N"){// 没登录
          wx.navigateTo({
            url: "/pages/login/index"
          });
        }else{
          wx.setStorageSync('token', res.data.token);
          // 再拿一次详细信息
          ajax({
            url : service.getAllInfo
          }).then(obj => {
            this.store.data.userInfo = obj.data;
            // this.store.data.userInfo.userType = "20";// 10 培训机构管理员，20 助教，30 教师，40 家长
            this.store.data.userInfo.photo = res.data.mobileNo;
            this.store.data.userInfo.avatar = getApp().globalData.imgUrl + res.data.headImageId;
            this.setData({
              Avatar : this.store.data.userInfo.avatar,
              userName : res.data.userName
            });
            this.update();
            if(typeof cb === 'function'){
              cb.call(this);
            }
          });
        }
      })
    };
    
    if(!this.store.data.userInfo.loginCode){// 注册过来的
      getWXCode().then(code => {
        this.store.data.userInfo.loginCode = code;
        login.call(this);
      })
    }else{
      login.call(this);
    }
  }
}

// 上传图片
function uploadImg(data) {
  data = data || {};
  function upload(data){
    return new Promise(suc => {
      wx.showLoading({
        title: '加载中',
        mask: true,
      })
      wx.uploadFile({
        url: data.url || service.upload,
        filePath: data.path,
        name: 'file',
        header: { 
          'cookie': 'token=' + wx.getStorageSync('token') + ";",
          'content-type': 'application/x-www-form-urlencoded' 
        },
        formData: data.data,
        success (obj){
          wx.hideLoading();
          let res = JSON.parse(obj.data);
          if(res.code === '0000'){
            suc(res.data)
          }else{
            wx.showToast({title: res.msg,icon: "none"});
          }
        },
        fail (){
          debugger
          wx.hideLoading()
          wx.showToast({title: "系统异常，请稍后再试",icon: "none"})
        }
      })
    })
  };
  function chooseImg(){
    return new Promise((suc, fail) => {
      wx.chooseImage({
        success (res) {
          suc(res.tempFilePaths[0])
        }
      })
    })
  }
  if(data.path){// 有图片直接调用上传
    return upload(data);
  }else{// 没图调用本地相册上传
    return chooseImg().then(file => {
      let obj = {
        path : file,
        url : data.url,
        data : data
      };
      return upload(obj);
    })
  };
}

// 获取用户code
function getWXCode() {
  return new Promise((suc, fail) => {
    wx.login({// 先拿一下code
      success (res) {
        if (res.code) {
          suc( res.code )
        }else{
          wx.showToast({title: res.msg,icon: "none"})
        }
      },
      fail (res){
        console.log(res)
      }
    })
  }) 
}

// 获取一个模块里面所有功能组件的值的集合
function collectVals(filedList, id) {
  id = id || "page";
  let vals = {},page = this.selectComponent("#" + id);
  // 先校验下值是不是合法
  for(let i = 0;i<filedList.length;i++){
    if(page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).check() === false){
      return false
    }else{
      vals[filedList[i].key] = page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).getValue()
    }
  }
  return vals
}

module.exports = {
  ajax: ajax,
  mockRequest : mockRequest,
  collectVals : collectVals,
  getTime : getTime,
  isLogin : isLogin,
  getWXCode : getWXCode,
  uploadImg : uploadImg,
}
