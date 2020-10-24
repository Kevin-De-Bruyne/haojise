<template>
    <div>
        <router-view />
        <footers />
        <right />
    </div>
</template>

<script>
import topNav from '@/components/top_nav'
import footers from '@/components/bottom'
import right_nav from '@/components/right_nav'
export default {
    components:{
        topNav,
        footers,
        right:right_nav
    }
}
</script>

<style  lang="scss">

.container{
  max-width: 1200px;
  margin: 0 auto;
  background: white;
}
body{
  background: rgb(242,242,242);
}
    @import url('../static/css/default.css');
    .van-swipe{
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
</style>