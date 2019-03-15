// pages/Mypage/Adress/Adress.js
var app = getApp();
var serverUrl = app.globalData.serverUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '哎哎哎'

  },

// 提交
  submit: function(e){
      wx:wx.navigateBack({
        delta: 1,
      })
    
  },

  formSubmit: function(options) {
    var formData = options.detail.value;
    var userInfo = app.globalData.userInfo;
    console.log(formData);
    var address = formData.address;
    console.log(userInfo);
    wx.request({
      url: serverUrl + '/address/addAddress?userId=' + userInfo.id + '&address=' + address,
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.redirectTo({
            url: '../addressList/addressList',
          })
        } else {
          // 失败弹出框
          wx.showToast({
            title: '添加失败',
            icon: 'none',
            duration: 3000
          });
        }
      },
      fail: function(options) {
        wx.showToast({
          title: '添加失败',
          icon: 'none',
          duration: 3000
        });
      }
    })
  }
})
