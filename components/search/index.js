Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hot: Array,
    history: Array,
    more: Array,
    loadingCenter:Boolean,
  },
  /**
   * 组件的初始数据
   */
  data: {
    q: '',
    searched: false,
    loading:false,
    noneResult:false,
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    onDelete(event) {
      this._initialize()
      this._closeResult()
    },
    onCancel(event) {
      this._initialize()
      this.triggerEvent("cancel", {}, {})
    },
    onConfirm(event) {
      this._showResult()
      this._showLoadingCenter()
      this.setData({
        q: event.detail.text || event.detail.q,
      })
      console.log("onConfirm-this.data.q:" + this.data.q)
      if (!this.data.q)
        return
      this.triggerEvent("search", {
        q: this.data.q
      }, {})
    },
    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },



    _showResult() {
      this.setData({
        searched: true
      })
    },

    _closeResult() {
      this.setData({
        searched: false,
        q: ''
      })
    },

    _initialize() {
      this.setData({
          books: [],
          noneResult: false,
          loading:false
      })
      // this.data.total = null
  },

  }
})