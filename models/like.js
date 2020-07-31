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
}

export {LikeModel}