Page({
	data:{

	},
	back:function () {
		wx.redirectTo({
		  url: '../login/login'
		})
	},
	back_a:function () {
		wx.navigateBack({
		  delta: 1
		})
	}
})