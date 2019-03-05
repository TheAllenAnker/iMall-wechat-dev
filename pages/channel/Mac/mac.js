// pages/channel/computer/computer.js
import showDetail from "../../../modules/showDetail";
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_list:[]
  },
  showDetail,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/product/getProducts?categoryName=Mac',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data);
        var products = res.data;
        if (res.data.status == 200) {
          that.setData({
            goods_list: products
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
  }
})