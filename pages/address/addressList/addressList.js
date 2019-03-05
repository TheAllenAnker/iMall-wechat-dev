//var li=[];
const app = getApp();
Page({

  data: {
    
    selectAllStatus: false,
    addre_list:[
      {
        name:"张三",
        tel:"1008611",
        addre:"山河县王家坝村4号"
      }
    ],
    
  },

  addAddre: function (e) {
    wx.navigateTo({
      url: '../newAddress/newAddress'
    })

  },
  selectList(e) {
    let selectAllStatus = this.data.selectAllStatus;
    const index = e.currentTarget.dataset.index;
    let addre_list = this.data.addre_list;
    // console.log(cart_list[index].selected);
    const selected = addre_list[index].selected;
    addre_list[index].selected = !selected;
    console.log(selected);
    //购物车列表里的条目只要有一个取消，全选就取消
    const symbol = addre_list.some(addressList => {
      return addressList.selected === false;
    });
    if (symbol) {
      this.data.selectAllStatus = false;
    } else {
      this.data.selectAllStatus = true;
    }

    this.setData({
      addre_list,
      selectAllStatus: this.data.selectAllStatus
    });
  },

  toModifyAddre: function (e) {
    wx.navigateTo({
      url: '../modifyAddress/modifyAddress'
    })
  },

  onLoad: function (options) {
  }

})