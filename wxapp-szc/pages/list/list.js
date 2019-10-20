// pages/list/list.js
let datas = require('../../datas/list-data');
console.log(typeof datas, datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],

    images: ['01', '02', '03', '04'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ datas: datas.list_data})
  },
  toDetail(event) {
    console.log(event);
    wx.navigateTo({
      url: '/pages/details/index'
    })
  },
  proDetail(event) {
    console.log(event);
    wx.navigateTo({
      url: '/pages/pro-details/index'
    })
  }

})