<template>
 <div class="goods">
  <goods-list-item v-for="item in goods" :key="" :goods-item="item"></goods-list-item>

</div>
</template>

<script>
import BScroll from 'better-scroll'
import goodsListItem from './goodsListItem'
export default {
  name:'goodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsListItem
  },
  data () {
    return {}
  },
  methods: {},
}
</script>

<style type="text/css" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px; 

}
</style>
