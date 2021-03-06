//index.js
//获取应用实例
import showDetail from "../../modules/showDetail";
import showcDetail from "../../modules/showcDetail";
const app = getApp()

Page({
  data: {
    index_slides:[],
    indicator_dots:true,
    autoplay:true,
    interval:3500,
    duration:1500,
    nav_data:[],
    index_activity:[],
    index_block:[],
    isTap:false,
    isLoading:false
  },
  onLoad(){
    const index_slides=app.globalData.index_slides,
          nav_data=app.globalData.nav_data,
          index_activity=app.globalData.index_activity,
          index_block=app.globalData.index_block,
          sectionList=index_block.map((section)=>{
      return section.section;
    })
    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
    });
    
  },
  onShow(e){
    this.setData({
      isTap:false
    });
  },

  toSliderDetail(e){
    console.log('navigate to detail page');
  },

  showDetail,
  showcDetail
})
