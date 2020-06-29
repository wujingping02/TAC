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

// 判断用户是否注册
function isLogin() {
  if(!this.store.data.userInfo.userType){// 没有角色信息就去拿一下
    getWXCode().then(code => {
      ajax({
        url : service.login.url,
        data : {
          code : code
        }
      }).then(res => {
        if(res.data.isRegister === "N"){// 没登录
          wx.navigateTo({
            url: "/pages/login/index"
          });
        }else{
          wx.setStorageSync('token', res.data.token);
          this.store.data.userInfo.userType = res.data.userType || "10";// 10 培训机构管理员，20 助教，30 教师，40 家长
          this.store.data.userInfo.photo = res.data.mobileNo || "13112341234";
          if(!res.data.headImageId){// 没有头像使用微信头像
            let that = this;
            wx.getUserInfo({
              success(res) {
                that.store.data.userInfo.avatar = res.userInfo.avatarUrl;// 头像
                that.store.data.userInfo.userName = res.userInfo.nickName;// 姓名
                that.store.update();
              }
            });
          }else{// 有头像用上传后的头像
            this.store.data.userInfo.avatar = "https://timeafterschool.net/tas/image/preview?imageId=" + res.data.headImageId;
            this.store.update();
          }
        }
      })
    })
  }
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
    if(page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).check() === false && false){
      return
    }else{
      if(filedList[i].key === "courseAttr"){
        // vals.push(...page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).getValue());
      }else{
        // vals.push({
        //   key : filedList[i].key,
        //   value : page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).getValue()
        // });
        vals[filedList[i].key] = page.selectComponent("#" + filedList[i].key) && page.selectComponent("#" + filedList[i].key).getValue()
      }
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
  getWXCode : getWXCode
}
