// pages/mine/mine.js
import api from "../../api/api.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginBean:wx.getStorageSync("loginBean")
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
    this.setData({loginBean:wx.getStorageSync("loginBean")})
  },

  login(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  btn_exit(){
    var my = this;
    if(Object.keys(this.data.loginBean).length===0){
      wx.showToast({
        title: '已经是未登录状态了',
        icon:'none',
        duration:10000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '确定退出登录？',
        success: function (e) {
          if (e.confirm) {
            wx.clearStorageSync()
            my.setData({ loginBean: wx.getStorageSync("loginBean") })
          }
        }
      })
    }
  },
  myCollect(){
    if(app.isLogin()) {
      wx.navigateTo({
        url: '/pages/collect/collect',
      })
    }else{
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
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