Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hot: Array,
    history: Array,
    more: Array,
    loadingCenter:Boolean,
    loading:Boolean,
    q:String,
    noResult:Boolean,
  },
  /**
   * 组件的初始数据
   */
  data: {
    searched: false,
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onDelete(event) {
      this.setData({
        searched: false,
      })
    },
    onCancel(event) {
      this.triggerEvent("cancel", {}, {})
    },
    onConfirm(event) {
      this.setData({
        searched: true,
      })
      this.setData({
        q: event.detail.text ||  event.detail.value,
      })
      if (!this.data.q)
        return
      this.triggerEvent("search", {
        q: this.data.q
      }, {})
    },
  }
})