<template>
  <div class="goodsitem" @click="itemClick">
  <img :src="goodsItem.show.img" alt="" @load="imageLoad">
  <div class="goodsinfo">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
  name:"goodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }

    }
  },
  methods: {
    imageLoad(){
      // console.log("imageLoad")
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('detail'+this.goodsItem.iid)
    }
  },
//  
}
</script>

<style type="text/css" scoped>
.goodsitem{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsitem img{
  width: 100%;
  border-radius: 5px;
}
.goodsinfo{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center
}
.goodsinfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;

}
.goodsinfo .price{
  color: var(--color-high-text);
  margin-right: 20px;

}
.goodsinfo .collect{
  position: relative;
}
.goodsinfo .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
