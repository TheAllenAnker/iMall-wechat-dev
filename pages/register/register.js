// page/register/register.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  doRegister: function(e) {
    var me = this;
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    var nickname = formObject.nickname;
    // 简单验证
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
        duration: 3000
      })
    } else {
      wx.showLoading({
        title: '请等待...',
      });
      var serverUrl = app.globalData.serverUrl;
      // 调用后端
      wx.request({
        url: serverUrl + '/user/register',
        method: "POST",
        data: {
          username: username,
          password: password,
          nickname: nickname
        },
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res);
          app.globalData.userInfo = res.data.data;
          wx.hideLoading();
          wx.switchTab({
            url: '../mine/mine',
            success: function(e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          });
        }
      })
    }
  }
})