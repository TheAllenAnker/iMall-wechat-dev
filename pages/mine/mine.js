// pages/Mypage/mypage.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: "../static/images/mine/tou.png",

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
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       //把获取到的code通过一个request的请求发给java服务器
    //       wx.request({
    //         url: '',
    //         data: {
    //           code: res.code
    //         },
    //         method: 'POST',
    //         dataType: 'json',
    //         success: function(res) {
    //           //请求成功的处理
    //         }
    //       });
    //     }
    //   },
    //   fail: function() {
    //     console.log("发送code失败：", res.data);
    //   }
    // });
  },

  changeAvatar: function() {
    var me = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        wx.showLoading({
          title: '上传中...',
        })
        var serverUrl = app.globalData.serverUrl;
        var userInfo = app.globalData.userInfo;

        wx.uploadFile({
          url: serverUrl + '/user/uploadAvatar?userId=' + userInfo.id,
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'multipart/form-data'
          },
          success: function(res) {
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
                avatar: serverUrl + imageUrl
              });
            }
          },

          fail: function(res) {
            wx.hideLoading();
          }
        })
      }
    })
  },

  onLoad: function(params) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  }
})