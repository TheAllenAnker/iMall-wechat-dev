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
    var email = formObject.email;
    var phone = formObject.phone;
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
          email: email,
          phone: phone
        },
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data);
          wx.hideLoading();
          if (res.data.status == 200) {
            var userInfo = res.data.data;
            var avatar = "../static/images/mine/tou.png";
            if (userInfo.avatar != null && userInfo.avatar != '' && userInfo.avatar != undefined) {
              avatar = serverUrl + userInfo.avatar;
            }
          }
          wx.switchTab({
            url: '../mine/mine'
          });
        }
      })
    }
  }
})