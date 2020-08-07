import {HTTP} from '../util/http.js'

class LikeModel extends HTTP{
    like(behavior,artID,category){
      let url = behavior == 'like'?'like':'like/cancel'
      console.log(url+','+artID+','+ category)
      this.request({
        url:url,
        method:'POST',
        data:{
          art_id:artID,
          type:category
        },
        success:(data)=>{
          console.log(data)
        }
      })
    }

 /*
  * 按类别，ID获取期刊最新的点赞数和个人点赞状态
  */
 getLikeStatus(categray,id,sCallback){
  this.request({
    url:`classic/${categray}/${id}/favor`,
    success:(res)=>{
      sCallback(res)
    }
  })
 }

}

export {LikeModel}