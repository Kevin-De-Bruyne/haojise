<template>
    <div class="content">
          <div class="banner_box">
            <top-nav />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiper_arr" :key="item">
          <img
            :src="item"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
     
     <div class="top_fiex">
             <ul class="container">
             <li v-for="(item,index) in top_arr" :key="item" :class="{'top_choise':top_index==index}" @click="top_index=index">
                 <span>
                     {{item}}
                 </span>
             </li>
         </ul>
         
     </div>

     <div class="title-box">
         <div class="text1">
             驿公里智能
         </div>
         <div class="text2">
             我们是一家人工智能机器人解决方案的高科技研发公司，创始团队来自剑桥和麻省理工。是智能洗车行业最早发起者、无人化智能洗车场景模式发明者。
         </div>
     </div>

     <div class="swiper_box">
         <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) of 5" :key="index">
        <img class="swiper-img" src="https://iph.href.lu/500x230?text=%E5%9B%BE%E7%89%87%E6%AF%94%E4%BE%8B%3D2.1%20%3A%201&fg=666666&bg=cccccc" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
     </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
    components:{
        topNav
    },
    data(){
        return{
             swiperOption: {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        // pagination: {
        //   el: '.swiper-pagination', //分页器
        // },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        coverflowEffect: {
          //修改其中的数值，即可
          rotate: 0, //旋转
          stretch: 80, //拉伸
          depth: 150, //深度
          modifier: 1,
          slideShadows: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
             swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
             top_arr:['特点一','特点二','特点三','特点四'],
        }
    }
}
</script>

<style scoped lang="scss">
.top_fiex{
    background: white;
    height: 80px;
    color: #000;
        ul{
            height: 100%;
            display: flex;
            li{
                height: 100%;
                border-bottom: 5px solid transparent;
                flex: 1;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
                span{
                    text-align: center;
                    width: 100%;
                    border-right: 1px solid #dedede;
                    height: 35px;
                }
            }
        }
}
    .banner_box {
  // height: 500px;
  img {
    width: 100% !important;
    height: auto !important;
  }
}
</style>