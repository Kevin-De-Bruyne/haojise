<template>
    <div class="content">
        <div class="banner_box">
            <top-nav />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiper_arr" :key="index">
          <img
            :src="item"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
        <div class="gray-box">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :sm="6" :xs="12"  v-for="item in 20" :key="item"
                    @click.native="goDetail(item)"
                    >
                        <div class="item">
                            <div class="top_img">
                            <img src="https://source.1kmxc.com/Big/Uploads/20200930/59c419cf-8958-46ea-acdc-c877b5ef3607.jpg" alt="">
                        </div>
                        <div class="text">
                            驿公里智能洗车 主打无人化黑科技
                        </div>
                        <div class="bottom-logo">
                            <img src="https://cdn.1kmxc.com/static-web-new/website/images3.0/article/media-logo/china.png" alt="">
                        </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
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
            swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
        }
    },
    methods: {
        goDetail(item){
            this.$router.push('/news_detail')
        }
    },
}
</script>

<style scoped lang="scss">
.container{
    background: none !important;
}
    .gray-box{
        box-sizing: border-box;
        padding: 6% 4% 4% 4%;
         background:  rgb(242,242,242);
        .item{
           background: white;
            margin: 0 0 3% 0;
        }
        .text{
            box-sizing: border-box;
            padding: 0 10px;
        }
        .bottom-logo{
            height: 40px;
            display: flex;
            img{
                margin: auto;
            }
        }
    }
</style>