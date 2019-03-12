// pages/modifyAddress/modifyAddress.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrId: null,
    addressVO: null
  },

  delete: function(){
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },

  cancel:function(){
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const addrId = options.addrId;
    this.setData({
      addrId: addrId
    });
    console.log(addrId);
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.request({
      url: serverUrl + '/address/getAddressVOByAddressId?addressId=' + addrId,
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        var addressVO = JSON.parse(res.data.data);
        console.log(addressVO);
        if (res.data.status == 200) {
          that.setData({
            addressVO: addressVO
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

      fail: function(options) {
        wx.showToast({
          title: '请求出错',
          icon: 'none',
          duration: 3000
        })
      }
    })
  }
})