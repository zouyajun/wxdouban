Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls:[
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508925590.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508615612.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg'
    ], //启动图图片数据
  },

  // 立即体验按钮点击事件
  startAction: function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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