// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  externalClasses:['tag-class'],
  properties: {
    comment:Object,
    text:String
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
       // 点赞
       let content = this.properties.comment.content
       this.triggerEvent("tapping",{
        content:content,
       },{})
    },
    onSearch:function(event){
      // 搜索
      let content = this.properties.text
      this.triggerEvent("searching", {
        searching: false,
        input: content
      }, {})
   },
  }
})
