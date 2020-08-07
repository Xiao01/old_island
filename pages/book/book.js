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
    more: [],
    total: 0,
    q: '',
    noResult: false,
    loading:false,
    loadingCenter:false,
  },


  onSearch(event) {
    if (event.detail.q) {
      this.setData({
        q: event.detail.q,
        loadingCenter:true,
        more: []
      })
      this._search(0)
    } else {
      this.setData({
        searching: true,
        more:[],
        noResult:false,
        loading:false,
        loadingCenter:false,
        total:0,
        q: ""
      })
      keywordModel.getHot().then(res => {
        this.setData({
          hot: res.hot,
          history: keywordModel.getHistory()
        })
      })
    }
  },

  onCancel(event) {
    this.setData({
      searching: false,
      more: [],
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
    if (this.data.total > this.data.more.length) {
      this.setData({
        loadingCenter: true
      })
      this._search(this.data.more.length)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  _search(start) {
    bookModel.search(this.data.q, start).then(res => {
        if (res.total > 0) {
          this.setData({
            more: this.data.more.concat(res.books),
            total: res.total,
            loadingCenter: false,
            loading: false,
            noResult: false,
          })
          keywordModel.addKeyWordToHistory(this.data.q)
        } else {
          this.setData({
            more: [],
            total: 0,
            loadingCenter: false,
            loading: false,
            noResult: true
          })
        }
      })
    }
})