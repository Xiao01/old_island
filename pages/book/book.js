import{
  BookModel
}from '../../models/book.js'
const bookModel = new BookModel()



// pages/book/book.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    searching:false
  },


  onSearch(event){
    this.setData({
      searching:true
    })
    if(!event.detail.vaule) 
      return
    bookModel.getBookSearch(event.detail.vaule).then(res=>{
      console.log(res)
    })
  },
  onCancel(event){
    this.setData({
      searching:event.detail.searching
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotList = bookModel.getHotList()
    hotList.then( res=>{
      this.setData({
        books:res
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