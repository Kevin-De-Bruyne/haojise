<template>
    <div>
        <top-nav />
        <router-view />
    </div>
</template>

<script>
import topNav from '@/components/top_nav'
export default {
    components:{
        topNav
    }
}
</script>

<style  lang="scss">
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