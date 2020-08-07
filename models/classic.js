import {
  HTTP
} from '../util/http-p.js'

class ClassicModel extends HTTP {

  /*
   * 获取最新一期的期刊详情
   */
  getLatest() {
    return this.request({
      url: 'classic/latest'
    })
  }

  /*
   * 按期刊号。上下翻页获取上下期刊详情
   */
  getClassic(previousOrNext, index) {
    return this.request({
      url: `classic/${index}/${previousOrNext}`,
    })
  }
  getMyFavor() {
    return this.request({
        url: 'classic/favor',
    })
}

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    return index > 0 && (index == this._getLatestIndex() ? true : false)
  }

  _setLatestIndex(index) {
    try {
      wx.setStorageSync('latestIndex', index)
    } catch (e) {}
  }

  _getLatestIndex() {
    try {
      return wx.getStorageSync('latestIndex')
    } catch (e) {
      return 0
    }
  }

  _getKey(index) {
    let key = 'classic-' + index
    return key
  }

  getById(cid, type) {
    return this.request({
        url: `classic/${type}/${cid}`,
    })
}
}

export {
  ClassicModel
}