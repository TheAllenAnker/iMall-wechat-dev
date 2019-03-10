// pages/goods/show.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const id = options.id;
    console.log(id);
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/product/query?productId=' + id,
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        var data = res.data;
        console.log(res);
        var product = JSON.parse(data.data);
        console.log(product);
        if (data.status == 200) {
          that.setData({
            product: product
          });
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

  goCart: function() {
    wx.switchTab({
      url: "../cart/cart"
    })
  },

  addToCart: function(e) {
    const id = e.currentTarget.dataset.id;
    const serverUrl = app.globalData.serverUrl;
    var userInfo = app.globalData.userInfo;
    wx.request({
      url: serverUrl + '/cart/addCartItem?userId=' + userInfo.id + '&productId=' + id, 
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var products = JSON.parse(res.data.data);
        console.log(products);
        if (res.data.status == 200) {
          wx.showToast({
            title: '已加入购物车',
            icon: 'success',
            duration: 3000
          })
        } else {
          // 失败弹出框
          wx.showToast({
            title: '加入购物车失败',
            icon: 'failure',
            duration: 3000
          })
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错，请重试',
          icon: 'none',
          duration: 3000
        })
      }
    })
  }
})