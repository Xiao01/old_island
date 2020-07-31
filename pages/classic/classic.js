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
    likeStauts:false,
    likeCount:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
       console.log(res)
       this.setData({
          classic:res,
          likeStauts:res.like_status,
          likeCount:res.fav_nums
       })
     })
  },

onLike:function(event){
  let behavior = event.detail.behavior
  likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
},
//向右，往前翻一期
onPrevious:function(event){
  this._updateClassic("previous")
},
//向左，往后翻一期
onNext:function(event){
  this._updateClassic("next")
},


  _updateClassic:function(previousOrNext){
    let index = this.data.classic.index
    classicModel.getClassic(previousOrNext,index,(res)=>{
      console.log(res)
      this._getLikeStatus(this.data.classic.type,this.data.classic.id)
      this.setData({
        classic:res,
        first:classicModel.isFirst(res.index),
        latest:classicModel.isLatest(res.index),
      })
   })
  },

  _getLikeStatus:function(category,artID){
    likeModel.getLikeStatus(category,artID,(res)=>{
      console.log(res)
      this.setData({
        likeStauts:res.like_status,
        likeCount:res.fav_nums
      })
    })
  }
})