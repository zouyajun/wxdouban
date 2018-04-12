Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatarUrl:'../../images/profile.png',
      nickName:'未登录'
    },
    bType:"primary", // 按钮类型
    actionText:"登录",// 按钮提示文字
    lock: false  // 登录按钮状态，false表示未登录
  },

  // 历史观看记录页面跳转
  myWalletAction: function() {
    wx.navigateTo({
      url: '../wallet/wallet',
    })
  },
  // 登录按钮的点击事件
  loginAction: function(){
    this.data.lock = !this.data.lock;
    const _that = this;
    if(this.data.lock) {
      wx.showLoading({
        title: '正在登录中...',
      });
      wx.login({
        success: function(res) {
          wx.hideLoading();
          // 登录成功后，获取用户信息
          wx.getUserInfo({
            withCredentials: false,
            success: (res) => {
              _that.setData({
                userInfo:{
                  avatarUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
                },
                bType:"warn",
                actionText:"退出登录",
                lock: true
              });
              // 存储用户信息到本地
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  },
                  bType: "warn",
                  actionText: "退出登录",
                },
                success: function (e) {
                  console.log("用户信息存储成功")
                }
              });
            }
          });
        }
      })
    } else {
      wx.showModal({
        title: '确认退出？',
        content: '退出后将不能继续使用',
        success: function(res) {
          if(res.confirm) {
            console.log("点击了确定噢");
            // 确认退出后移除本地存储数据
            wx.removeStorageSync('userInfo');
            _that.setData({
              userInfo: {
                avatarUrl:"../../images/profile.png",
                nickName:"未登录"
              },
              bType:"primary",
              actionText:"登录",
              lock:false
            })
          } else {
            console.log("取消了");
            _that.setData({
              lock:true
            })
          }
        }
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置页面导航
    wx.setNavigationBarTitle({
      title: '个人中心',
    });
    wx.hideLoading();
    // 获取本地数据，用户信息
    wx.getStorage({
      key:'userInfo',
      // 能获取到就显示用户的信息，并保持登录状态，不能的话就什么都不做
      // ES6的语法（箭头函数）
      success: (res) => {
        wx.hideLoading();
        this.setData({
          userInfo: {
            avatarUrl: res.data.userInfo.avatarUrl,
            nickName: res.data.userInfo.nickName
          },
          bType:res.data.bType,
          actionText:res.data.actionText,
          lock:true
        }),
        console.log(this.data)
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