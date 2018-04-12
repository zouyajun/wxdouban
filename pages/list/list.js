
const app = getApp()
var util = require('../../utils/list_common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    type:'in_theaters',
    movies: [], // 接收返回的数组
    hasMore: false,
    // 分页加载
    page: 1,
    size: 20
  },

  // 分页加载加载更多网络请求
  fetchLoadMoreItemList: function() {
    let that = this;
    let loadPageIndex = that.data.page,
        loadPageSize = that.data.size,
        listType = that.data.type;

    wx.showLoading({
      title: '拼命加载中...',
    })
    // 访问网络
    util.fetchResultItemList(listType,loadPageIndex,loadPageSize,function(data) {
      wx.hideLoading()
      console.log(data)
      if(data.subjects.length != 0) {
        let itemList = [];
        that.data.hasMore ? itemList = that.data.movies.concat(data.subjects) : itemList=data.subjects 
        that.setData({
          movies: itemList,
          hasMore: true
        });
      } else {
        that.setData({
          hasMore: false
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    this.data.title = params.title
    this.data.type = params.type
    console.log(this.data.type)
    // 设置导航栏文字标题
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
    
    // 网络API调用
    this.fetchLoadMoreItemList();
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
    let that = this;
    that.setData({
      page: 1,
      hasMore: false
    });
    that.fetchLoadMoreItemList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (res) {
    
    let that = this;
    if(that.data.hasMore) {
      that.setData({
        page: that.data.page + that.data.size
      });
      that.fetchLoadMoreItemList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})