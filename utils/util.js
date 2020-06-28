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
    debugger
    wx.request({
      url: data.url,
      data: data.data,
      header: {
        cookie: wx.getStorageSync("token")
      },
      method: data.method || "get",
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.hideLoading()
        if(res.code === '0000'){
          suc(res)
        }else{
          wx.showToast({title: res.msg,icon: "none"})
        }
      },
      fail: function(err) {
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
function checkLogin() {
  if(!this.store.data.userInfo.userType){// 没有用户信息
    mockRequest({// 先查查有没有登录
      url: service.userLogin.url,
      method: "post",
    }).then((res) => {
      if(!res.data.name){// 没登录，去登陆
        wx.navigateTo({
          url: "/pages/login/index"
        });
      }else{// 登陆过，有信息
        this.store.data.userInfo.name = res.data.name;
        this.store.data.userInfo.phone = res.data.name;
        this.store.data.userInfo.userType = res.data.name;
        this.update();
      }
    })
  }
}

// 注册 + 登录
function getUserInfo() {
  return new Promise((suc, fail) => {
    wx.login({// 先拿一下code
      success (res) {
        if (res.code) {
          // 发起网络请求
          mockRequest({// 去登陆
            url: service.userLogin.url,
            data: {
              code: res.code
            }
          }).then((res) => {
            wx.setStorageSync("token", res.token)
            suc(res)// 返回用户信息
          })
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
  getUserInfo : getUserInfo,
  collectVals : collectVals,
  getTime : getTime,
  checkLogin : checkLogin
}
