<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot>
          </slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },    
    // click: {
    //     type: Boolean,
    //     default: true
    //   },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
    // data:{
    //   type:Array,
    //   default(){
    //     return []
    //   }
    // }
  },
  data(){
      return{
          scroll:null,
  
      }
  },
  // computed:{
  //   scrollY(){
  //     return this.scroll.y
  //   }
  // },
  mounted(){
    // setTimeout(this._initScroll,20)
      this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:3,
      pullUpLoad:this.pullUpLoad
        })
              // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
      // console.log(this.scroll);
      // // this.scroll.scrollerHeight=1000000000;
      // this.scroll.refresh()
      // 3.监听上拉事件
      // this.scroll.on('pullingUp', () => {
      //   this.$emit('pullingUp')
      // })
          // 监听滚动的位置
    if(this.probeType===2||this.probeType===3){
      this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    };
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit("pullingUp");
      })
    }
},
   methods:{
    //  _initScroll(){
         // 创建BScroll对象
  
    // this.scroll=new BScroll(this.$refs.wrapper,{
    //   click:this.click,
    //   probeType:this.probeType,
    //   pullUpLoad:this.pullUpLoad
    // });


    // 监听上拉事件
    // this.scroll.on('pullingUp',()=>{
    //   this.$emit('pullingUp')
    // })
   
    scrollTo(x,y,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
     this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll?this.scroll.y:0
    }
}
}
</script>

<style>
/* .wrapper{
  overflow: hidden;
} */
</style>