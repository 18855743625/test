<template>
 <div class="wrapper" ref="aaaa">
    <ul class="content">
    <li>shangpin1</li>
    <li>shangpin2</li>
    <li>shangpin3</li>
    <li>shangpin4</li>
    <li>shangpin5</li>
    <li>shangpin6</li>
    <li>shangpin7</li>
    <li>shangpin8</li>
    <li>shangpin9</li>
    <li>shangpin10</li>
    <li>shangpin11</li>
    <li>shangpin12</li>
    <li>shangpin13</li>
    <li>shangpin14</li>
    <li>shangpin15</li>
    <li>shangpin16</li>
    <li>shangpin17</li>
    <li>shangpin18</li>
    <li>shangpin19</li>
    <li>shangpin20</li>
    <li>shangpin21</li>
    <li>shangpin22</li>
    <li>shangpin23</li>
    <li>shangpin24</li>
    <li>shangpin25</li>
    <li>shangpin26</li>
    <li>shangpin27</li>
    <li>shangpin28</li>
    <li>shangpin29</li>
    <li>shangpin30</li>
    <li>shangpin31</li>
    <li>shangpin32</li>
    <li>shangpin33</li>
    <li>shangpin34</li>
    <li>shangpin35</li>
    <li>shangpin36</li>
    <li>shangpin37</li>
    <li>shangpin38</li>
    <li>shangpin39</li>
    <li>shangpin40</li>
    <li>shangpin41</li>
    <li>shangpin42</li>
    <li>shangpin43</li>
    <li>shangpin44</li>
    <li>shangpin45</li>
    <li>shangpin46</li>
    <li>shangpin47</li>
    <li>shangpin48</li>
    <li>shangpin49</li>
    <li>shangpin50</li>
    <li>shangpin51</li>
    <li>shangpin52</li>
    <li>shangpin53</li>
    <li>shangpin54</li>
    <li>shangpin55</li>
    <li>shangpin56</li>
    <li>shangpin57</li>
    <li>shangpin58</li>
    <li>shangpin59</li>
    <li>shangpin60</li>
    <li>shangpin61</li>
    <li>shangpin62</li>
    <li>shangpin63</li>
    <li>shangpin64</li>
    <li>shangpin65</li>
    <li>shangpin66</li>
    <li>shangpin67</li>
    <li>shangpin68</li>
    <li>shangpin69</li>
    <li>shangpin70</li>
    <li>shangpin71</li>
    <li>shangpin72</li>
    <li>shangpin73</li>
    <li>shangpin74</li>
    <li>shangpin75</li>
    <li>shangpin76</li>
    <li>shangpin77</li>
    <li>shangpin78</li>
    <li>shangpin79</li>
    <li>shangpin80</li>
    <li>shangpin81</li>
    <li>shangpin82</li>
    <li>shangpin83</li>
    <li>shangpin84</li>
    <li>shangpin85</li>
    <li>shangpin86</li>
    <li>shangpin87</li>
    <li>shangpin88</li>
    <li>shangpin89</li>
    <li>shangpin90</li>
    <li>shangpin91</li>
    <li>shangpin92</li>
    <li>shangpin93</li>
    <li>shangpin94</li>
    <li>shangpin95</li>
    <li>shangpin96</li>
    <li>shangpin97</li>
    <li>shangpin98</li>
    <li>shangpin99</li>
    <li>shangpin100</li>
  </ul>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return {
        scroll:null
      }
    },
    // // 组件创建完后调用
    // created(){
    //   // let scroll=new BScroll('.wrapper',{})
    // },
    mounted(){
      this.scroll=new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true
      });
      this.scroll.on('scroll',(position)=>{
        console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
       console.log( "上拉加载更多");
      })
    }

  }
</script>

<style scoped>
.wrapper{
  height: 150px;
 
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
