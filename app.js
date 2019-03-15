import mock from "./utils/mock";

//app.js
App({
  onLaunch: function () {
    Object.assign(this.globalData, mock)
    var that = this;
    var serverUrl = this.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=New',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          that.globalData.new_list = products;
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
    // request for iPhone list
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=iPhone',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          that.globalData.iphone_list = products;
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
    // request for iPad list
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=iPad',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          that.globalData.ipad_list = products;
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
    // request for Mac list
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=Mac',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          that.globalData.mac_list = products;
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
    // request for Other list
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=Other',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          that.globalData.other_list = products;
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
    wx.hideLoading();
  },
  
  globalData: {
    userInfo: null,
    serverUrl: "http://106.14.125.66:8080/iMall",
    new_list: [],
    iphone_list: [],
    ipad_list: [],
    mac_list: [],
    other_list: []
  }
})