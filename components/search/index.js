// components/search/index.js
import {
  KeywordModel
} from '../../models/keyword.js'
const keyword = new KeywordModel();

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    history: [],
    hot:[],
    input:'',
    focus:true
  },
  attached: function () {
    this.setData({
      input:""
    })
    console.log("attached")
    this._getHistory()
    keyword.getHot().then(res=>{
      if (res) {
        this.setData({
          hot: res.hot
        })
      }
    })
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.setData({
        input:""
      })
      this.triggerEvent("cancel", {
        searching: false,
      }, {})
    },
    // onCancel(event) {
    //   this.triggerEvent("cancel", {
    //     searching: false,
    //   }, {})
    // },
    onConfirm(event) {
      const word = event.detail.value
      if (!word)
        return
      keyword.addKeyWordToHistory(word)
      // this._getHistory()
      this.setData({
        input:"",
        focus:true
      })
     
    },
    _getHistory:function(){
      const words = keyword.getHistory()
      if (words) {
        this.setData({
          history: words
        })
      }
    },
  }
})