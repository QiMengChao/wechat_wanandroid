// pages/navigation/navigation.js
import api from "../../api/api.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList:[],
    friendList:[],
    // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getHotKey().then(res=>{
      this.setData({hotList:res.data})
    }).catch(e=>{

    })
    api.oftenWeb().then(res=>{
      this.setData({friendList:res.data})
    }).catch(e=>{})
  },

  hotClick(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/search/search?name='+event.currentTarget.dataset.name,
    })
  },
  friendClick(event){
    wx.navigateTo({
      url: '/pages/web/web?url='+event.currentTarget.dataset.url,
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