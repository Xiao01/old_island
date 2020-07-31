// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      //个位数不够，补零 observer
      // observer:function(newVal,ordVal,changedPath){
      //   console.log(newVal)
      //   console.log(ordVal)
      //   console.log(changedPath)
      //   let val = newVal < 10 ? '0' + newVal : newVal
      //   this.setData({
      //     _index:val
      //   })
      // }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months:[
      '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
    ],
    year:2020,
    month:"一月",
  },
  attached:function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
