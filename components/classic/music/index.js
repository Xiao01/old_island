import{classicBeh} from '../classic-beh.js'
const mMgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 行性的列表
   */
  behaviors:[classicBeh],
  /**
   * 组件的属性列表
   */  
  properties: {
    src:String,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/player@pause.png',
    playSrc:'images/player@play.png',
    playing:false,
  },

  attached:function(){
    this._recoverStatus()
    this._monitorSwitch()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      //切换播放暂停图标
      if(!this.data.playing){
        this.setData({
          playing:true
        })
        mMgr.title = this.data.title
        mMgr.src = this.data.src
      }else{
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
     },
     _recoverStatus:function(){
      if(mMgr.paused){
        this.setData({
          playing:false
        })
        return
      }
      if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        })
      }
    },

    _monitorSwitch:function(){
      mMgr.onPlay(()=>{
        this._recoverStatus()
      })
      mMgr.onPause(()=>{
        this._recoverStatus()
      })
      mMgr.onStop(()=>{
        this._recoverStatus()
      })
      mMgr.onEnded(()=>{
        this._recoverStatus()
      })
    }

  }
})
