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
 
}

export{BookModel}