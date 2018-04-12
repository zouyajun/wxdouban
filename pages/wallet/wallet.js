Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 充值按钮点击事件
  chargeAction: function (){
    wx.showModal({
      title: '充值',
      content: '充点钱吧',
      success: function () {
        console.log("那就充点吧")
      }
    })
  },
  // 我的用车券点击事件
  showTicket: function () {
    wx.showModal({
      title: '用车券',
      content: '点我干哈',
      success: function(res) {
        if(res.confirm) {
          console.log("点击了确定哈")
        }
      }
    })
  },

  // 我的押金点击事件
  showDeposit: function () {
    wx.showModal({
      title: '押金',
      content: '看看兜里还有多少钱',
      success: function(res) {
        if(res.confirm) {
          console.log("切，不就是余额不足吗")
        }
      }
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