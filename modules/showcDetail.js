const showcDetail=(e)=>{
    const id=e.currentTarget.dataset.cid;
    console.log(id);
    wx.navigateTo({
      url: '/pages/productDetail/productDetail?id=${id}'
    })
};
export default showcDetail;