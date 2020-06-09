import service from './service.js'
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
function isLogin() {
  
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

module.exports = {
  ajax: ajax,
  mockRequest : mockRequest,
  getUserInfo : getUserInfo
}
