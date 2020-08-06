Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hot: Array,
    history: Array,
  },
  /**
   * 组件的初始数据
   */
  data: {
    input: '',
    focus: true
  },
  attached: function () {
    this.setData({
      input: "",
      focus: true
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.setData({
        input: ""
      })
      this.triggerEvent("cancel", {
        searching: false,
      }, {})
    },
    onConfirm(event) {
      console.log("onConfirm:" + event.detail.value)
      const word = event.detail.value
      if (!word)
        return
      this.triggerEvent("search", {
        searching: false,
        input: word
      }, {})
    },
    onSearch(event) {
      console.log("onConfirm:" + event.detail.input)
      const word = event.detail.input
      if (!word)
        return
      this.triggerEvent("search", {
        searching: false,
        input: word
      }, {})
    },
  }
})