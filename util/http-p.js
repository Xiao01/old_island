import {
  config
} from '../config.js'
const tips = {
  1: '抱歉,出现了一个错误',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发key',
  1006: '服务器内部错误',
  1007: '请检查url是否正确,无法访问服务器',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在'
}

class HTTP {
  request({
    url,
    data = {},
    method = 'GET'
  }) {
    this._setData(data)
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data = {}, method = 'GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        console.log("url: " + config.api_base_url + url);
        console.log(res)
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          // console.log(err)
          resolve(this._getJsonData(url))
          // reject()
          // this._show_error(res.data.error_code)
        }
      },
      fail: (err) => {
        // console.log(err)
        resolve(this._getJsonData(url))
        //reject()
        // this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }

  _getJsonData(str) {
    let ctr = str.replace(new RegExp('/', 'g'), "_")
    return this._getData_(ctr)
  }
  _getData_(ctr) {
    //我的页码跳转到流行详情页
    if (ctr == "classic_200_3") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic1
    }
    if (ctr == "classic_300_2") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic2
    }
    if (ctr == "classic_200_2") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic3
    }
    if (ctr == "classic_100_2") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic4
    }
    if (ctr == "classic_200_4") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic5
    }
    if (ctr == "classic_300_1") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic6
    }
    if (ctr == "classic_200_1") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic7
    }
    if (ctr == "classic_100_1") {
      var JSfile = require("data/classic_latest.js")
      return JSfile.data
    }

    //书籍详情页的3个数据
    const ctrArr = ctr.split("_")
    if (ctrArr[0] == "book") {
      if (ctrArr[2] == "detail") {
        var JSfile = require("data/book_detail.js")
        return JSfile.book_detail
      }
      if (ctrArr[2] == "favor") {
        var JSfile = require("data/book_detail.js")
        return JSfile.book_favor
      }
      if (ctrArr[2] == "short" && ctrArr[3] == "comment") {
        var JSfile = require("data/book_detail.js")
        return JSfile.book_short_comment
      }
    }
    //书籍搜索结果页 按Python搜可翻3页
    if (this._getData()) {
      if (ctr == "book_search") {
        var JSfile = require("data/book_search.js")
        if (this._getData().start == 0) {
          return JSfile.book_search_start_0
        }
        if (this._getData().start == 20) {
          return JSfile.book_search_start_0
        }
        if (this._getData().start == 40) {
          return JSfile.book_search_start_0
        }
      }
    }
    if (ctr == "classic_200_3_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_200_3_favor
    }
    if (ctr == "classic_300_2_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_300_2_favor
    }
    if (ctr == "classic_200_2_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_200_2_favor
    }
    if (ctr == "classic_100_2_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_100_2_favor
    }
    if (ctr == "classic_200_4_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_200_4_favor
    }
    if (ctr == "classic_200_1_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_200_1_favor
    }
    if (ctr == "classic_100_1_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_100_1_favor
    }
    if (ctr == "classic_300_1_favor") {
      var JSfile = require("data/classic__favor.js")
      return JSfile.classic_300_1_favor
    }
    if (ctr == "classic_7_next") {
      var JSfile = require("data/classic_latest.js")
      return JSfile.data
    }
    if (ctr == "classic_6_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_6_next
    }
    if (ctr == "classic_5_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_5_next
    }
    if (ctr == "classic_4_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_4_next
    }
    if (ctr == "classic_3_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_3_next
    }
    if (ctr == "classic_2_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_2_next
    }
    if (ctr == "classic_1_next") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_1_next
    }
    if (ctr == "classic_2_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_2_previous
    }
    if (ctr == "classic_3_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_3_previous
    }
    if (ctr == "classic_4_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_4_previous
    }
    if (ctr == "classic_5_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_5_previous
    }

    if (ctr == "classic_6_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_6_previous
    }
    if (ctr == "classic_7_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_7_previous
    }
    if (ctr == "classic_8_previous") {
      var JSfile = require("data/classic_n_previous.js")
      return JSfile.classic_8_previous
    }
    var JSfile = require("data/" + ctr + ".js")
    return JSfile.data
  }
  _getData() {
    return this.data
  }
  _setData(data) {
    this.data = data
  }
}

export {
  HTTP
};