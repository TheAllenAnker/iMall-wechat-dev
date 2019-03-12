// pages/modifyAddress/modifyAddress.js
var app = getApp();
var addrId = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressVO: null
  },

  delete: function(){
    var serverUrl = app.globalData.serverUrl;
    wx.request({
      url: serverUrl + '/address/deleteAddressById?addressId=' + addrId,
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.status == 200) {
          wx.redirectTo({
            url: '../addressList/addressList',
          })
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
    addrId = options.addrId;
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
  },

  formSubmit: function(options) {
    console.log(options);
    var form = options.detail.value;
    var username = form.name;
    var phone = form.phone;
    var addressId = addrId;
    var address = form.address;
    var serverUrl = app.globalData.serverUrl;
    wx.request({
      url: serverUrl + '/address/updateAddressInfo',
      method: "POST",
      data: {
        id: addressId,
        address: address
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.status == 200) {
          wx.redirectTo({
            url: '../addressList/addressList',
          })
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
  }
})