// pages/Mypage/mypage.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,

    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../static/images/mine/waittopay.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../static/images/mine/waittopost.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../static/images/mine/waittohave.jpg'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '../static/images/mine/waittocomment.jpg'
      }
    ],
  },


// 查看全部订单
  toOrders: function(){
    console.log('toOrders');
  },
// 查看我的收藏
  toCollection: function(){
    console.log('toCollection')
  },

// 增加收货地址
  toAddress:function(){
    console.log('toAddress')
    wx.navigateTo({
      url: '../Address/Address',
    })
},
// 跳转到vip中心
toVipCenter:function(){
  wx.navigateTo({
    url: '../vip/vip',
  })
},

toMyComments: function() {
  console.log('toMyComments');
},

toLogin: function() {
  console.log('toLogin');
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})