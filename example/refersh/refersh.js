var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['健身','搏击','培训'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    ImgWidth:0,
    addImg:0,
    files: []
  },
  tabclick:function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 图片上传
  chooseImage: function (e) {
      var that = this;
      wx.chooseImage({
          count:9,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              that.setData({
                  files: that.data.files.concat(res.tempFilePaths)
              });
          }
      })
  },
  // 上传图片Gallery
  previewImage: function(e){
      wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
      })
  },
  gallery:function() {
    wx.previewImage({
          current: '', // 当前显示图片的http链接
          urls: [
            'https://img30.360buyimg.com/da/jfs/t3691/359/446193647/66504/6c3c67f7/580a11f6N666e770d.jpg',
            'https://img1.360buyimg.com/da/jfs/t5680/277/258957885/88986/d928b61e/591e69dfN6c12b3f7.jpg',
            'https://img30.360buyimg.com/da/jfs/t5911/59/44051320/199941/f4af91b7/5924518aNef6c7805.jpg',
            'https://img1.360buyimg.com/da/jfs/t5683/240/298631844/100890/d06f3df2/591e8aa9N95f5f2da.jpg',
            'https://img30.360buyimg.com/da/jfs/t5572/323/1248165934/132413/964f56a9/5924e623Nd9e8e082.jpg',
            'https://img20.360buyimg.com/vc/jfs/t4660/341/881773842/1843463/641ee1b2/58d5df30N496a28a3.jpg'
          ] // 需要预览的图片http链接列表
        });
  },
  open:function () {
    wx.showActionSheet({
      itemList: ['物竞天择', '适者生存', '不适者淘汰'],
      success: function(res) {
          if ( res.tapIndex == 0 ) {
              wx.showToast({
                  title: '物竞天择',
                  icon: 'success',
                  duration: 3000
              });
          };
          if ( res.tapIndex == 1 ) {
              wx.navigateTo({
                url:'msg_success'
              })
          };
          if ( res.tapIndex == 2 ) {
              wx.navigateTo({
                url:'msg_fail'
              })
          };
          if ( res.cancel ) {
              wx.showToast({
                title: '数据加载中',
                icon: 'loading',
                duration: 3000
              });
          }

      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                addImg: ((res.windowWidth-57) / 4)-4.5,
                ImgWidth: (res.windowWidth-57) / 4,
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})