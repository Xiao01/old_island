import {
  HTTP
} from '../util/http-p.js'
class KeywordModel extends HTTP {
  key = 'q';
  maxLength = 10;

  /*
   * 获取热搜关键字
   */
  getHot() {
    return this.request({
      url: 'book/hot_keyword'
    })
  }
  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return []
    }
    return words
  }
  //添加关键字先去重
  addKeyWordToHistory(keyword) {
    if (keyword) {
      let words = this.getHistory()
      const has = words.includes(keyword)
      if (!has) {
        if (words.length >= this.maxLength) {
          words.pop()
        }
        words.unshift(keyword)
        wx.setStorageSync(this.key, words)
      }
    }
  }
}
export {
  KeywordModel
}