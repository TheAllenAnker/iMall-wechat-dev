// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    count: '1',
    goodsImage: [
      'http://pic9.photophoto.cn/20081114/0007019929749341_b.jpg',
      'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551622269&di=5615a3fb5150126ebf4ad07217cae86c&src=http://pic.baike.soso.com/ugc/baikepic2/4131/20160720155529-126406984.jpg/800',
      'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551622269&di=2557eee7002d5b86de2f4ca0d70ae64f&src=http://img004.hc360.cn/g1/M08/A6/40/wKhQL1K74o2EcKbsAAAAAKLCqiE550.jpg'
      ],
    detailImg: ['http://pic9.photophoto.cn/20081114/0007019929749341_b.jpg',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551622269&di=5615a3fb5150126ebf4ad07217cae86c&src=http://pic.baike.soso.com/ugc/baikepic2/4131/20160720155529-126406984.jpg/800',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551622269&di=2557eee7002d5b86de2f4ca0d70ae64f&src=http://img004.hc360.cn/g1/M08/A6/40/wKhQL1K74o2EcKbsAAAAAKLCqiE550.jpg'
      ],
  },
  previewImage:function(){
    console.log("预览查看图片")
  },
  gotoCar:function(){
    console.log("查看购物车")
  },
  addCar:function(){
    console.log("添加物品到购物车");
  },
  immeBuy:function(){
    console.log("立即购买");
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