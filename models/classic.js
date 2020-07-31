import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP{

  /*
  * 获取最新一期的期刊详情
  */
  getLatest(sCallback){
    this.request({
      url:'classic/latest',
      success:(res)=>{
        sCallback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index)
        wx.setStorageSync(key,res)
      }
    })
  }
  /*
  * 按期刊号。上下翻页获取上下期刊详情
  */
  getClassic(previousOrNext,index,sCallback){
    let key = previousOrNext=='previous'? this._getKey(index-1):this._getKey(index+1)
    let classic =  wx.getStorageSync(key)
    if (classic != '' ){
      sCallback(classic)
    }else{
      this.request({
        url:"classic/" +index+'/'+previousOrNext,
        success:(res)=>{
          sCallback(res)
          wx.setStorageSync(this._getKey(res.index),res)
        }
      })
    }
  }
  /*
  * 按类别，ID获取期刊详情
  */
 getClassicDetal(categray,id,sCallback){
  this.request({
    url:"classic/" +categray+'/'+id,
    success:(res)=>{
      sCallback(res)
      wx.setStorageSync(this._getKey(res.index),res)
    }
  })
 }

  isFirst(index){
    return index==1?true:false
  }

  isLatest(index){
    return index>0 && (index==this._getLatestIndex() ?true:false)
  }

  _setLatestIndex(index){
    try {
      wx.setStorageSync('latestIndex', index)
    } catch (e) { }
  }

  _getLatestIndex(){
    try {
      return  wx.getStorageSync('latestIndex')
    } catch (e) {
      return 0
    }
  }

  _getKey(index){
    let key = 'classic-' + index
    return key
  }
}

export{ClassicModel}