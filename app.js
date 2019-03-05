import mock from "./utils/mock";

//app.js
App({
  onLaunch: function () {
    Object.assign(this.globalData, mock)
    // console.log(this.globalData);
  },
  
  globalData: {
    userInfo: null,
    serverUrl: "http://192.168.137.196:8080/iMall",
    new_goods_list: null
  }
})