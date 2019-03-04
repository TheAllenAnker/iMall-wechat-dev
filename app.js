import mock from "./utils/mock";

//app.js
App({
  serverUrl: "",
  onLaunch: function () {
    Object.assign(this.globalData, mock)
    // console.log(this.globalData);
  },
  globalData: {
    userInfo: null,
    serverUrl: ''
  }
})