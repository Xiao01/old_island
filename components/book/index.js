// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object,
    showLike:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(event){
      wx.navigateTo({
        url: '/pages/book-detail/book-detail?id='+this.data.book.id,
      })
    }
  }
})
