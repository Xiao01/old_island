import{
  BookModel
}from '../../models/book.js'
const bookModel = new BookModel()
import{KeywordModel}from '../../models/keyword.js'
const keywordModel = new KeywordModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    q:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    this.setData({
      q:options.q
    }) 
    bookModel.getBookSearch(this.data.q).then(res=>{
      this.setData({
        books:res.books
      })
      console.log(this.data.books)
      keywordModel.addKeyWordToHistory(this.data.q)
      wx.hideLoading()
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