import {
  HTTP
} from '../util/http-p.js'

class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    console.log(url + ',' + artID + ',' + category)
    return this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }

  /*
   * 按类别，ID获取期刊最新的点赞数和个人点赞状态
   */
  getLikeStatus(categray, id, sCallback) {
    return this.request({
      url: `classic/${categray}/${id}/favor`,
    })
  }

}

export {
  LikeModel
}