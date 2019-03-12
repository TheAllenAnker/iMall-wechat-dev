// pages/Mypage/mypage.js
const qiniuUploader = require("../../utils/qiniuUploader");
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: null,
    serverUrl: app.globalData.serverUrl,

    orderItems: [{
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
  toOrders: function() {
    console.log('toOrders');
  },
  // 查看我的收藏
  toCollection: function() {
    console.log('toCollection')
  },

  // 增加收货地址
  toAddress: function() {
    console.log('toAddress')
    wx.navigateTo({
      url: '../address/addressList/addressList',
    })
  },
  // 跳转到vip中心
  toVipCenter: function() {
    wx.navigateTo({
      url: '../vip/vip',
    })
  },

  toMyComments: function() {
    console.log('toMyComments');
  },

  toLogin: function() {
    wx.navigateTo({
      url: '../login/login',
    });
  },

  initQiniu: function () {
    var options = {
      region: 'SCN', // 华北区
      uptokenURL: 'http://localhost:8080/iMall/qiniu/uptoken',
      // uptoken: 'xxxx=',
      domain: 'http://pnu0mosmq.bkt.clouddn.com',
      shouldUseQiniuFileName: false
    };
    qiniuUploader.init(options);
  },

  changeAvatar: function() {
    
  },

  onLoad: function(params) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },

  onShow: function(options) {
    var that = this;
    var userInfo = app.globalData.userInfo;
    console.log(userInfo);
    if(userInfo != null) {
      that.setData({
        avatar: that.data.serverUrl + userInfo.avatar
      });
    } else {
      that.setData({
        avatar: '../static/images/mine/tou.png'
      })
    }
  }
})