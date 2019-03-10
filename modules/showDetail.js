var app = getApp();

const showDetail=(e)=>{
    const id=e.currentTarget.dataset.pid;
    console.log(id);
    wx.navigateTo({
        url: '/pages/productDetail/productDetail?id=' + id
    })
};
export default showDetail;