// pages/search/search.js
import api from "../../api/api.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    tagList:[],
    articleList:[],
    page: 1,
    pageCount: 0,
    isLoadingMore:false,
    isover:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      inputValue:options.name,
    })
    this.goSearch(1)
    api.getHotKey().then(res=>{
       this.setData({tagList:res.data})
    }).catch(e=>{
      wx.showToast({
        title: e.errorMsg,
        icon:'none'
      })
    })
  },
  onTagClick:function(e){
    this.setData({inputValue:e.target.dataset.name,articleList:[]})
    this.goSearch(1)
  },

  goSearch(page){
    if(this.data.inputValue!=undefined){
      api.queryArticle(page,{k:this.data.inputValue})
      .then(res=>{
        if(this.data.page==1){
          this.setData({ articleList: res.data.datas,isover:res.data.over,isLoadingMore:false,page:1})
        }else{
          this.setData({
            articleList:this.data.articleList.concat(res.data.datas),
            isover:res.data.over,
            isLoadingMore:false
          })
        }
      }).catch(e=>{

      })
    }
  },

  clearInput() {
    this.setData({
      inputValue: "",
    })
  },

  onItemClick(event){
    wx.navigateTo({
      url: '/pages/web/web?url=' + event.currentTarget.dataset.url,
    })
  },

  searchInput(event){
    this.setData({inputValue:event.detail.value})
  },

  btn_search(){
    this.goSearch(1)
  },
  collect(event){
    console.log(event)
    const id = event.currentTarget.dataset.id
    const index = event.currentTarget.dataset.index
    const zan = event.currentTarget.dataset.zan
    if (app.isLogin()) {
      if (zan) {
        api.uncollect(id).then(res => {
          this.data.articleList[index].collect = false
          this.setData({
            articleList: this.data.articleList
          })
          wx.showToast({
            title: '取消收藏成功',
          })
        }).catch(e => {
          console.log(e.errorMsg)
        })
      } else {
        api.collect(id).then(res => {
          this.data.articleList[index].collect = true
          this.setData({
            articleList: this.data.articleList
          })
          wx.showToast({
            title: '收藏成功',
          })
        }).catch(e => {
          console.log(e.errorMsg)
        })
      }
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
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
      if(!this.data.isover){
        this.setData({
          isLoadingMore:true,
          page:this.data.page+1
        })
        this.goSearch(this.data.page)
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})