<template>
 <div id="home" class="wrapper">

   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- <tab-control ref="topTab" v-show="showTabControl" class="tab-control" @tabClick="tabClick"></tab-control> -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab_control"
    v-show="isTabFixed"></tab-control>
   <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
  @pullingUp="loadMore"> 
   <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
   <future-view></future-view>
   <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
   <!-- <goods-list :goods="goods[currentType].list"></goods-list> -->
   <goods-list :goods="showGoods"></goods-list>

   </scroll>
   <!-- 组件不能直接监听点击事件 -->
   <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
 
   
 </div>
</template>

<script>

  import homeSwiper from './childComps/homeSwiper'
  import recommendView from './childComps/recommendView'
  import futureView from './childComps/futureView'

  import NavBar from "../../components/common/navbar/NavBar"
  import tabControl from "../../components/content/tabControl/tabControl"
  import goodsList from '../../components/content/goods/goodsList'
  import Scroll from '../../components/common/scroll/Scroll'
  import BackTop from '../../components/content/backTop/BackTop'
  

  import {getHomeMultidata,getHomeGoods} from '../../network/home'
  import {debounce} from "../../common/utils.js"

 



  export default {
    name: "Home",
    components:{
      NavBar,
      homeSwiper,
      recommendView,
      futureView,
      tabControl,
      goodsList,
      Scroll,
      BackTop
  
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:592,
        isTabFixed:false,
        saveY:0
   
    }},
        computed: {
          showGoods() {
             return this.goods[this.currentType].list
      }
    },
    created(){
      // 1请求多个数据
       this.getHomeMultidata();
      // 请求商品数据
       this.getHomeGoods('pop')
       this.getHomeGoods('new')
       this.getHomeGoods('sell')

   },
   destroyed() {
     console.log("11")
   },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },  
   mounted() {
 
         // 3监听item中图片加载完成
    const refresh=debounce(this.$refs.scroll.refresh,500)    
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    }),
           //  3赋值 获取tabControl的offSetTop
          //  所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop=this.$refs.tabControl

   },
    methods:{
        // 事件监听相关的方法




          tabClick(index){ 
            switch(index){
              case 0:
                this.currentType='pop';
                break
              case 1:
                this.currentType='new';
                break
              case 2:
                this.currentType='sell';
                break
            }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        // this.$refs.topTab.currentIndex = index

          },
        loadMore() {
          console.log("111");
          this.getHomeGoods(this.currentType)
      },
         // 网络请求相关的方法
        getHomeMultidata(){
      
          getHomeMultidata().then(res=>{
          // console.log(res);
          this.banners=res.data.banner.list,
          this.recommends=res.data.recommend.list
          })
        },
     
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.finishPullUp()
      })

      },
      backClick(){
        // if(this.$refs.scroll.scrollTo){
		    //    this.$refs.scroll.scrollTo(0,0)
	      // }else{
		    //   this.$refs.scroll.scrollTop = 0
        // }
            // console.log("999");
        this.$refs.scroll.scrollTo(0,0);
    
      },
      contentScroll(position){
        // 判断backtop是否显示
         this.isShowBackTop = (-position.y) > 500
        //  决定tabControl是否吸顶（position：fixed）
        // this.showBackTop = position.y <= -TOP_DISTANCE
        this.isTabFixed = position.y <= -this.tabOffsetTop
      },
      swiperImageLoad(){
         this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
        //  console.log(this.tabOffsetTop);
    
      }


    }
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */

}
/* .tab-control{

  top: 44px;
  z-index: 9;

} */
 .content{

  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} 
/* .content{
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.tab_control{
  position: relative;
  z-index: 9;
}
</style>
