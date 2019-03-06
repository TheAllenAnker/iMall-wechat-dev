// pages/channel/new/new.js
// pages/phone/phone.js
import showDetail from "../../../modules/showDetail";
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_list: null
  },
  // showDetail(e){
  //   console.log(e.currentTarget.dataset.pid);
  // },
  showDetail,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onReady: function() {
    this.setData({
      product_list: app.globalData.new_list
    });
  }
})