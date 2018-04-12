
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : '',
    type: '',
    movie: {},
    navTitle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    wx.showLoading({
      title: '拼命加载中...',
    })
    this.data.id = params.id
    this.data.type = params.type
    console.log(this.data.type)
    const _this = this
    wx.request({
      url: app.globalData.uri + '/' +'subject' + '/' + _this.data.id,
      data: {},
      header: {
        'Content-Type':'application/json'
      },
    success: function (res) {
      wx.hideLoading()
      console.log(res.data)
      _this.setData({ movie: res.data, navTitle: res.data.title})
      wx.setNavigationBarTitle({
        title: _this.data.navTitle,
      })
      console.log(res.data.title)
    }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navTitle,
    })
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