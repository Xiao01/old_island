import {HTTP} from '../util/http-p.js'

class BookModel extends HTTP{

  /*
  * 获取热门书籍列表
  */
  getHotList(){
    return this.request({
      url:'book/hot_list'
    })
  }
 
  getFavorCount(){
    return this.request({
      url:'book/favor/count'
    })
  }

  getDetail(bid){
    return this.request({
      url:`book/${bid}/detail`
    })
  }

  getLikeStatus(bid){
    return this.request({
      url:`book/${bid}/favor`
    })
  }
  
  getShortComment(bid){
    return this.request({
      url:`book/${bid}/short_comment`
    })
  }
  

}

export{BookModel}