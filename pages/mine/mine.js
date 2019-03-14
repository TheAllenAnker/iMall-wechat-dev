const qiniuUploader = require("../../utils/qiniuUploader");
const app = getApp();
var lastPage = null;
var serverUrl = app.globalData.serverUrl;

function initQiniu() {
  var options = {
    region: 'SCN', // 华北区
    uptokenURL: serverUrl + '/user/upToken',
    // uptoken: 'xxxx=',
    domain: 'http://pnu0mosmq.bkt.clouddn.com',
    shouldUseQiniuFileName: false
  };
  qiniuUploader.init(options);
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageObject: {}
  },
  //事件处理函数
  onLoad: function() {
    console.log('onLoad')
    var that = this;
  },

  changeAvatar: function() {
    var that = this;
    didPressChooesImage(that);
  },

  didCancelTask: function() {
    this.data.cancelTask()
  },

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

  onLoad: function(options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },

  onShow: function(options) {
    var that = this;
    var userInfo = app.globalData.userInfo;
    console.log(userInfo);
    if (userInfo != null) {
      that.setData({
        avatar: userInfo.avatar
      });
    } else {
      that.setData({
        avatar: '../static/images/mine/tou.png'
      })
    }
  }
})

function didPressChooesImage(that) {
  initQiniu();
  // 微信 API 选文件
  wx.chooseImage({
    count: 1,
    success: function(res) {
      var filePath = res.tempFilePaths[0];
      // 交给七牛上传
      wx.showLoading({
        title: '请等待...',
      })
      qiniuUploader.upload(filePath, (res) => {
          that.setData({
            'imageObject': res
          });
          var fileUrl = res.fileUrl;
          console.log('file url is: ' + fileUrl)
          wx.request({
            url: serverUrl + '/user/updateUserInfo',
            method: "POST",
            data: {
              avatar: fileUrl,
              id: app.globalData.userInfo.id
            },
            header: {
              'content-type': 'application/json'
            },
            success: function(res) {
              if (res.data.status == 200) {
                that.onLoad;
              } else {
                // 失败弹出框
                wx.showToast({
                  title: "上传失败",
                  icon: 'none',
                  duration: 3000
                })
              }
            }
          });
          wx.hideLoading();
        }, (error) => {
          console.error('error: ' + JSON.stringify(error));
        },
        null,
        (progress) => {
          console.log('上传进度', progress.progress)
          console.log('已经上传的数据长度', progress.totalBytesSent)
          console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
        }, cancelTask => that.setData({
          cancelTask
        })
      );
    }
  })
  wx.hideLoading();
}