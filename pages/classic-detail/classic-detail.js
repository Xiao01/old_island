import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    likeStauts: false,
    likeCount: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if( options.cid && options.type){
      console.log( "options.cid:"+options.cid+ ",&& options.type:" + options.type)
      classicModel.getById( options.cid, options.type).then(res=>{
        this.setData({
          classic: res,
          likeStauts: res.like_status,
          likeCount: res.fav_nums
        })
      })
    }
  },

  onLike: function (event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  onPlay: function (event) {

  },

  //向右，往前翻一期
  onPrevious: function (event) {
    this._updateClassic("previous")
  },
  //向左，往后翻一期
  onNext: function (event) {
    this._updateClassic("next")
  },

  _updateClassic: function (previousOrNext) {
    let index = this.data.classic.index
    
    let key = previousOrNext == 'previous' ? classicModel._getKey(index - 1) : classicModel._getKey(index + 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      classicModel.getClassic(previousOrNext, index).then((res) => {
        this._getLikeStatus( res.type,res.id)
        this.setData({
          classic: res,
          first: classicModel.isFirst(res.index),
          latest: classicModel.isLatest(res.index),
        })
        wx.setStorageSync(classicModel._getKey(res.index), res)
      })
      if (!this.data.classic) {
        let key_No = parseInt(key.charAt(key.length - 1))
        if (key_No == 1) {
          this.setData({
            isFirst: true,
            isLatest: false,
          })
          return
        }
        if (key_No == classicModel._getLatestIndex()) {
          this.setData({
            isFirst: false,
            isLatest: true,
          })
          return
        }
      }
    } else {
      this._getLikeStatus( classic.type,classic.id),
      this.setData({
        classic: classic,
        first: classicModel.isFirst(classic.index),
        latest: classicModel.isLatest(classic.index),
      })
    }
  },

  _getLikeStatus: function (category, artID) {
    likeModel.getLikeStatus(category, artID).then((res) => {
      console.log(res)
      this.setData({
        likeStauts: res.like_status,
        likeCount: res.fav_nums
      })
      console.log( this.data)
    })
  }
})