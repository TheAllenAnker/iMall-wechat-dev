// pages/channel/other/other.js
import showDetail from "../../../modules/showDetail";
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    product_list: []
  },
  showDetail,
  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  onReady: function() {
    this.setData({
      product_list: app.globalData.other_list
    });
  }
})