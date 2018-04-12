

// 获取全局应用程序实例对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: [
       {
        id:'259',
         img:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508925590.jpg'
       },
       {
         id: '260',
         img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508615612.jpg'
       },
       {
         id: '265',
         img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg'
       }
    ],
    boardItems: [   
      {
         key: 'in_theaters',
         title: '正在上映'},
      { 
        key: 'coming_soon',
        title: '即将上映'},
      {
         key: 'new_movies',
         title: '电影新片榜'},
      { 
        key: 'top250',
        title: 'Top250'}
      ],
      movies: [
        {
          id: '',
          images: {
            large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.jpg'
          },
          title: '肖生克的救赎'
        },
        {
          id: '',
          images: {
            large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.jpg'
          },
          title: '肖生克的救赎救赎啊救赎啊'
        },
        {
          id: '',
          images: {
            large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.jpg'
          },
          title: '肖生克的救赎'
        },
        {
          id: '',
          images: {
            large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.jpg'
          },
          title: '肖生克的救赎'
        }
      ]
  },
  // 轮播图点击事件
  onItemClick: function(event) {
    var postId = event.target.dataset.postid;
    console.log(postId);
    // 导航页面跳转
    wx.navigateTo({
      url: '../item/item?id='+postId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '拼命加载中...',
    })
    const _this = this;
    wx.request({
      url: app.globalData.uri + '/in_theaters',
      data: {},
      header: {
        'Content-Type':'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        _this.setData({movies:res.data.subjects})
        console.log(res)
      }
    })
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