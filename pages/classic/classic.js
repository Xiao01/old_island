import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
  data: {
    classic:null,
  },
  //生命周期函数-监听页面加载
  onLoad: function () {
    classicModel.getLatest((res)=>{
      this.setData({
        classic:res
      })
      console.log(this.data.classic)
    })
  },
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior,this.data.classic.id,
      this.data.classic.type)
  },
})
