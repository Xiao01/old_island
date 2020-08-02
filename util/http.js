import {config} from '../config.js'
const tips = {
  1:'抱歉,出现了一个错误',
  1000:'输入参数错误',
  1001:'输入的json格式不正确',
  1002:'找不到资源',
  1003:'未知错误',
  1004:'禁止访问',
  1005:'不正确的开发key',
  1006:'服务器内部错误',
  1007:'请检查url是否正确,无法访问服务器',
  2000:'你已经点过赞了',
  2001:'你还没点过赞',
  3000:'该期内容不存在'
}

class HTTP{
  request(params){
    //url,data,method,
    if(!params.method){
      params.method="GET"
    }
    wx.request({
      url: config.api_base_url+params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        //startsWith
        //endsWith
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
          console.log(res )
          this._show_error(res.data.error_code)
        }
      },
      fail:(err)=>{
        // this._show_error(1)
        params.success(this._getJsonData())
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code =1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip?tip:tips[1],
      icon:'none',
      duration:2000
    })
  }
  _getJsonData(){
    var localDatat = require("localData.js")
    return localDatat.classicLatest
  }
}

export{HTTP};