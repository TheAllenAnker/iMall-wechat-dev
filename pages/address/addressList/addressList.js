const app = getApp();
const util = require('../../../utils/util.js');

Page({

  data: {
    addre_list: null
  },

  addAddre: function(e) {
    wx.navigateTo({
      url: '../newAddress/newAddress'
    });
  },

  modifyAddress: function(e) {
    const addrId = e.currentTarget.dataset.addrid;
    console.log(e);
    wx.navigateTo({
      url: '../modifyAddress/modifyAddress?addrId=' + addrId
    })
  },

  onLoad: function(options) {
    var that = this;
    if (app.globalData.userInfo != null) {
      wx.showLoading({
        title: '加载中...'
      });
      var serverUrl = app.globalData.serverUrl;
      var userInfo = app.globalData.userInfo;
      wx.request({
        url: serverUrl + '/address/getAddressesByUserId?userId=' + userInfo.id,
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          var addresses = JSON.parse(res.data.data);
          console.log(addresses);
          if (res.data.status == 200) {
            that.setData({
              addre_list: addresses
            })
          } else {
            // 失败弹出框
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 3000
            })
          }
        },
        fail: function(res) {
          wx.showToast({
            title: '请求出错',
            icon: 'none',
            duration: 3000
          })
        }
      })
      wx.hideLoading();
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 3000
      });
      var lastPage = util.getCurrentPageUrl(that);
      console.log(lastPage);
      setTimeout(function() {
        wx.navigateTo({
          url: '../../login/login?lastPage=' + lastPage,
        });
      }, 3000)
    }
  }
})