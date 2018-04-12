
// 获取全局实例对象
const app = getApp();
var util = require('../../utils/list_search.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    searchItemList:[],
    hasMore: false,
    pageLocation: 1,
    pageSize: 20,
    // 定义数据格式
    wxSearchData: {
      value:''
    }
  },
  
  
  // 加载更多函数
  fetchLoadMoreItemList: function () {
    let that = this;
    let startCount = that.data.pageLocation,
        itemCount = that.data.pageSize;
    wx.showLoading({
      title: '拼命加载中...',
    });
    util.fetchResultItemList(that.data.wxSearchData.value,startCount,itemCount,function(data){
      wx.hideLoading();
      console.log(data);
      if(data.subjects.length != 0) {
        let itemList = [];
        that.data.hasMore?itemList = that.data.searchItemList.concat(data.subjects) : itemList = data.subjects;
        that.setData({
          searchItemList: itemList,
          hasMore: true
        })
      } else {
        that.setData({
          hasMore: false
        })
      }
    })
  },
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    util.init(
      that, // 本页面的一个引用
      that.myGobackFunction,
      that.fetchLoadMoreItemList,
      );
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
      hasMore: false,
      pageLocation: 1
    })
    that.fetchLoadMoreItemList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    that.setData({
      pageLocation: that.data.pageLocation + that.data.pageSize
    });
    that.fetchLoadMoreItemList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  // 转发函数，固定部分
  wxSearchInput: util.wxSearchInput, // 输入变化时的操作
  wxSearchConfirm: util.wxSearchConfirm, // 搜索函数
  wxSearchClear: util.wxSearchClear, // 清空函数

  // 搜索返回跳转函数
  myGobackFunction: function () {
    wx.redirectTo({
      // 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' (注意这个地方)
      url: '../board/board',
    })
    
  }

})