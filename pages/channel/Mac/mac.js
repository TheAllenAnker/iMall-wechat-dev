// pages/channel/computer/computer.js
import showDetail from "../../../modules/showDetail";
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_list: []
  },
  showDetail,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  onReady: function() {
    this.setData({
      product_list: app.globalData.mac_list
    });
  }
})