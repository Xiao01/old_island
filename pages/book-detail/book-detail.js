import{
  BookModel
}from '../../models/book.js'
import {LikeModel} from '../../models/like.js'
let likeModel = new LikeModel()
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    comments:[],
    book:null,
    likeStatus:false,
    likeCount:0,
    posting:false,
  },
  onLike:function(event){
    const like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel,this.data.id,400)
  },
  onFakePost(event){
    this.setData({
      posting:true
    })
  },
  onCancel(event){
    this.setData({
      posting:false
    })
  },
  onComment(event){
    let content = event.detail.content || event.detail.value
    if(!content){
      return
    }
    if(content && content.length>12){
      wx.showToast({
        title:'短评最多12个字',
        icon:'none'
      })
      return
    }else{
      bookModel.postComment(content,this.data.id).then(res=>{
        wx.showToast({
          title:'+ 1',
          icon:"none"
        })
        //unshift 表示把{}内的对象添加到comments数组的首位
        this.data.comments.unshift({
          content,
          nums:1
        }) 
        console.log(this.data.comments)
        this.setData({
          posting:false,
          comments:this.data.comments
        })
      })      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    if(options.id){
      this.setData({
        id:options.id
      })
    }
    const bookDetail = bookModel.getDetail(this.data.id)
    const likeStatus = bookModel.getLikeStatus(this.data.id)
    const shortComments = bookModel.getShortComment(this.data.id)
    //Promise.race用于多个回调竞争模式，then按快慢返回全部的回调的结果，
    //Promise.all用并发的模式执行3个回调请求，总消耗的时间为3个请求里最长的时间值
    Promise.all([bookDetail,likeStatus,shortComments]).then(res=>{
      this.setData({
        book:res[0],
        likeStatus:res[1].like_status,
        likeCount:res[1].fav_nums,
        comments:res[2].comments,
      })
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