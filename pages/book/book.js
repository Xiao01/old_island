import {
  BookModel
} from '../../models/book.js'
const bookModel = new BookModel()
import {
  KeywordModel
} from '../../models/keyword.js'
const keywordModel = new KeywordModel()

// pages/book/book.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    hot: [],
    history: [],
  },

  
  onSearch(event) {
    console.log("onSearch" )
    if (event.detail.input) {
      console.log("q:" + event.detail.input)
      wx.navigateTo({
        url: "/pages/search-result/search-result?q=" + event.detail.input,
      })
    }
    this.setData({
      searching: true,
    })
    keywordModel.getHot().then(res => {
      this.setData({
        hot: res.hot,
        history: keywordModel.getHistory()
      })
    })

  },
  onCancel(event) {
    this.setData({
      searching: event.detail.searching
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotList = bookModel.getHotList()
    hotList.then(res => {
      this.setData({
        books: res,
        searching: false,
      })
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