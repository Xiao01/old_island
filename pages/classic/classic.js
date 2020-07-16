import {ClassicModel} from '../../models/classic.js'
let classic = new ClassicModel()
Page({
  data: {
    classic:null,
  },
  //生命周期函数-监听页面加载
  onLoad: function () {
    classic.getLatest((res)=>{
      this.setData({
        classic:res
      })
    })
  }
})
