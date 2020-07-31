import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classicModel = new  ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false,
    like:false,
    count:0,
    test:1,
    latestIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
       console.log(res)
       this.setData({
         classic:res,
       })
     })
  },

onLike:function(event){
  let behavior = event.detail.behavior
  likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
  classicModel.getClassicDetal(this.data.classic.type,this.data.classic.id,(res)=>{
    console.log(res)
   this.setData({
     classic:res,
   })
  })
},
//向右，往前翻一期
onPrevious:function(event){
  this._updateClassic("previous")
},
//向左，往后翻一期
onNext:function(event){
  this._updateClassic("next")
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

  },


  _updateClassic:function(previousOrNext){
    let index = this.data.classic.index
    classicModel.getClassic(previousOrNext,index,(res)=>{
      console.log(res)
     this.setData({
       classic:res,
       first:classicModel.isFirst(res.index),
       latest:classicModel.isLatest(res.index)
     })
   })
  },
})