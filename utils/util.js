import service from './service.js'

// 公用function
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds() 


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
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
      header: {},
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
    }, 1000)
  })
}

module.exports = {
  formatTime: formatTime,
  ajax: ajax,
  mockRequest : mockRequest
}
