
var utilMd5 = require('../../utils/md5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'', // 用户名
    password:'', // 密码
    deviceType:'', // 设备型号 
    netWorkType:'', // 获取手机网络状态
    isConnected: false // 当前是否有网络连接
  },
  // 获取账号输入
  accountInput: function(e) {
    this.setData({
      username: e.detail.value
    });
    console.log("username:" + this.data.username);
  },
  // 获取密码输入
  pwdInput: function(e) {
    // 密码md5加密
    var pwd_md5 = utilMd5.hexMD5(e.detail.value);
    console.log(pwd_md5);
    this.setData({
      password: pwd_md5
    });
    console.log("password:"+this.data.password);
  },

  /**
   * 登录按钮点击事件
   */ 
  loginAction: function () {
    console.log("登录");
    var _that = this;
    if(_that.data.username.length == 0 || _that.data.password.length == 0) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon:'loading',
        duration: 1000
      })
    } else {
      _that.requestForLogin();
    };
  },

  /**
   * 登录网络请求
  */
  requestForLogin: function () {
    var _that = this;
    wx.showLoading({
      title: '登录中...',
    })
    wx.request({
      url: "http://clinicapi.qiezzitest.info/api/User/Login",
      data: {
        UserName: _that.data.username,
        Password: _that.data.password,
        DeviceType: _that.data.deviceType,
        DeviceToken:'cbca7c4ed218682e876ba261c33b048dc745fe0d93f3c7a594a9b09768ddbdef',
        RegistrationId:'',
        ResolutionSize:'',
      },
      header: {
        // 'User-Agent':'APP_Clinic_iOS_3.10',
        'Content-Type':'application/json',
      },
      method:'POST',
      success: function (res) {
        wx.hideLoading();
        if(res.statusCode == 200) {
          console.log(res.data);
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1000
          });
          // 登录后跳转到Tabar页面，wx.navigateTo和wx.redirectTo不支持Tabbar页面跳转
          wx.switchTab({
            url: '../board/board',
          })
          
        } else {
          wx.showToast({
            title: res.data,
            // title: '成功',  //标题  
            // icon: 'loading',  //图标，支持"success"、"loading"  
            // image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon  
            // duration: 2000000, //提示的延迟时间，单位毫秒，默认：1500  
            // mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false  
            // success: function () { }, //接口调用成功的回调函数  
            // fail: function () { },  //接口调用失败的回调函数  
            // complete: function () { } //接口调用结束的回调函数  
          })
        } 
      },
      fail: function (res) {

      }
    })
  },
  checkNetWorkAvaliable: function () {
    var _that = this;
    // 检测手机网络状态
    wx.getNetworkType({
      success: function (res) {

        _that.setData({
          netWorkType: res.networkType,
        });
        console.log("手机网络状态:" + _that.data.netWorkType);
      },
    });

    // 监测网络状态变化
    wx.onNetworkStatusChange(function(res){
      _that.setData({
        isConnected: res.isConnected,
      });
      console.log(_that.data.isConnected ? "有网" : "没网");
    })
  },

  // 获取设备型号
  getDeviceTypeInfo: function() {
    var _that = this;
    wx.getSystemInfo({
      success: function(res) {
        _that.setData({
          deviceType: res.model,
        });
        console.log("手机型号:" + _that.data.deviceType);
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkNetWorkAvaliable();
    this.getDeviceTypeInfo();
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