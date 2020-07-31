// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean,
    currentIndex:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc:'images/triangle.dis@left.png',
    leftSrc:'images/triangle@left.png',
    disRightSrc:'images/triangle.dis@right.png',
    rightSrc:'images/triangle@right.png',
    latestIndex:""
  },

  attached:function(){
    
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){ 
      if(!this.properties.latest){
        this.triggerEvent("left",{
        },{})
      }else{
        
      }
    },
    onRight:function(event){ 
      if(!this.properties.first){ 
        this.triggerEvent("right",{
        },{})
      }else{

      }
    },

  }
})
