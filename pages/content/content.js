// pages/content/content.js
import api from "../../api/api.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    treeList:[],
    currentIndex:0,
    windowsHeight:0,
    windowsWidth:0,
    page:1,
    isLoadingMore:false,
    tagContentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        page.setData({windowsHeight:res.windowHeight,windowsWidth:res.windowWidth})
      },
    })
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({treeList: wx.getStorageSync("system")})
    this.getTagContent(this.data.page, {cid: wx.getStorageSync("system")[0].id})
  },

  getTagContent(page,params){
    api.showTreeContent(page,params).then(res=>{
      this.setData({ tagContentList:res.data.datas})
    }).catch(e=>{

    })
  },

  switchNav(event){
    this.setData({currentIndex:event.currentTarget.dataset.index})
  },
  bindchange(event){
    this.setData({ currentIndex: event.detail.current})
    this.getTagContent(this.data.page, {cid: wx.getStorageSync("system")[event.detail.current].id})
  },
  itemClick(event){
    wx.navigateTo({
      url:'/pages/web/web?url='+this.data.tagContentList[event.currentTarget.dataset.index].link,
    })
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