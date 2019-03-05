// pages/Mypage/mypage.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: "../static/images/mine/tou.png",
    userInfo: app.globalData.userInfo,

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
      url: '../Address/Address',
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
    })
  },

  changeAvatar: function() {
    var me = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        wx.showLoading({
          title: '上传中...',
        })
        var serverUrl = app.serverUrl;
        // fixme 修改原有的全局对象为本地缓存
        var userInfo = app.getGlobalUserInfo();

        wx.uploadFile({
          url: serverUrl + '/user/uploadAvatar?userId=' + userInfo.id,  //app.userInfo.id,
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json', // 默认值
            'headerUserId': userInfo.id,
            'headerUserToken': userInfo.userToken
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            console.log(data);
            wx.hideLoading();
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功',
                icon: "success"
              });

              var imageUrl = data.data;
              me.setData({
                faceUrl: serverUrl + imageUrl
              });

            } else if (data.status == 500) {
              wx.showToast({
                title: data.msg
              });
            } else if (res.data.status == 502) {
              wx.showToast({
                title: res.data.msg,
                duration: 2000,
                icon: "none",
                success: function () {
                  wx.redirectTo({
                    url: '../mine/mine',
                  })
                }
              });

            }

          }
        })
      }
    })
  },

  onLoad: function (params) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }
})