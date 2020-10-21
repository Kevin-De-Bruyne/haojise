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

     <div class="tedian1-box">
         <div class="text-box">
             <div class="title-text">
            特点一
         </div>
         <div class="title-text2">
             专门为无人化场景而设计的全新硬件，由麻省理工团队研发，获得多项专利认证
         </div>
         </div>
         
         <div class="img-box">
             <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_carwasher_drawing_1.jpg" alt="">

         </div>
         <div class="xiala-box">
             <div class="pd-box" v-for="item in xiala_arr" :key="item">
                  <div class="item">
                 <div class="title">
                     {{item.name}}

                 <span  :class="[item.xiala?'icon-xiala-copy':'icon-xiala']" class="iconfont icon-xiala f-r"></span>
                 <!-- <span v-else class="iconfont icon-xiala-copy"></span> -->
                 </div>
                 <div class="show_box" v-if="item.xiala">
                     {{item.content}}
                 </div>
                 
             </div>
             </div>
            
         </div>
     </div>

     <div class="tedian1-bg">
          <div class="text-box">
                 <div class="text1">
                     特点二
                 </div>
                 <div class="text2">
                     多项独具创新的设计，激光雷达、超声波检测、光电定位，为用户提供更好的引导和洗车体验
                 </div>
             </div>
     </div>
     <div class="white-box">
         <div class="white-container">
            <div class="gray-box">
                <div class="left">
                    <div class="text1">
                        EMO人机交互系统
                    </div>
                    <div class="text2">
                        基于强大的侦测系统和云计算平台，集成语音交互场景带入，给您更好的帮助。
                    </div>
                </div>
                <div class="right">
                    <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_emo.jpg" alt="">
                </div>
            </div>
         </div>
     </div>

     <div class="xikong_box">
         <div class="text-box">
             <div class="text1">
                 特点三
             </div>
             <div class="text2">
                 洗控系统专利技术，借助大量车型的洗车数据，创建完善清洗模
                 块，同一车型、同一辆车，洗的次数越多越干净
             </div>
         </div>
     </div>

     <!-- <div class="img_bg">
         <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_eco_system.jpg" alt="">
     </div> -->
     <div class="white">
         <div class="list-box">
         <div class="item" v-for="item in 4" :key="item">
             <div class="text-box">
                 <div class="text1">
                     车机互联
                 </div>
                 <div class="text2">
                     车辆进入地图范围，智能提醒洗车需求
                 </div>
             </div>
             <div class="img-box">
                 <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_iot_4.jpg" alt="">
             </div>
         </div>
     </div>
     </div>
      <div class="tedian1-box">
         <div class="text-box">
             <div class="title-text">
            特点四
         </div>
         <div class="title-text2">
             专门为无人化场景而设计的全新硬件，由麻省理工团队研发，获得多项专利认证
         </div>
         </div>
         
         <div class="img-box">
             <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_carwasher_drawing_1.jpg" alt="">

         </div>
         
     </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
    data(){
        return{
             swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
            top_arr:['特点一','特点二','特点三','特点四'],
            top_index:0,
            xiala_arr:[
                {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            {
                name:'无人物理回退防夹侧刷',
                content:'防止洗车过程中突然停电夹住车辆，物理回退轻松打开侧刷，方便车辆安全退出。',
                xiala:false
            },
            ]
        }
    },
    components:{
        topNav
    }
}
</script>

<style scoped lang="scss">
.white{
    background: white;
}
.list-box{
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: -50px;
    background: #f1f4f6;
    display: flex;
    text-align: center;
    min-width: 965px;
    .item{
        box-sizing: border-box;
        margin: 0 5px;
        width: 25%;
    }
    .text-box{
        // box-sizing: border-box;
        padding: 14% 7% 12% 7%;
        .text1{
            font-size: 20px;
            margin: 0 0 10px 0;
        }
        .text2{
            font-size: 16px;
        }
    }
    .img-box{
        display: flex;
        
        // height: 200px;
        img{
            margin: auto;
        }
    }
}
.img_bg{
    width: 90%;
    margin: 0 auto;
    display: flex;
    img{
        margin: auto;
        position: relative;
        top: -50px;
    }
}
.xikong_box{
    background: url('https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_carwasher_bg_004_1.jpg');
    background-position: 100% 0;
    background-size: auto 100%;
    height: 680px;
    box-sizing: border-box;
    padding: 6% 4% 0 4%;
    text-align: center;
    .text-box{
        color: white;
        .text1{
            font-size: 28px;
            margin: 0 0 10px 0;
        }
        .text2{
            font-size: 14px;

        }
    }
}
.white-box{
    background: white;
    .white-container{
        width: 90%;
        margin: 0 auto 0 auto ;
        color: #000;
        .gray-box{
            background: rgb(240,244,247);
            display: flex;
            height: 350px;
            position: relative;
            top: -50px;
            // flex-wrap: wrap;
            .left{
                height: 100%;
                flex: 0 1 auto;
                // min-width: 70px;
                box-sizing: border-box;
                padding: 142px 0 0 40px;

                .text1{
                font-size: 28px;
                margin: 0 0 20px 0;
            }
            .text2{
                font-size: 12px;
            }
            }
            .right{
                display: flex;
                flex: 0 1 auto;
                min-width: 500px;
                img{
                    margin: auto;
                }
            }
            
        }
    }
}
.tedian1-bg{
    background: url('https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_guide_system.jpg') 0 0 no-repeat;
    height: 680px;
    margin: 70px 0 0 0;
    background-size: auto 100%;
    background-position:50%;
    padding: 6% 0 0 0;
    .text-box{
        text-align: center;
        color: white;
        .text1{
            margin: 0 0 20px 0;
            font-size: 28px;
        }
        .text2{
            font-size: 12px;
        }
    }
}
.tedian1-box{
    background: rgb(247,247,247);
    .text-box{
        padding: 5% 0 3% 0;
        text-align: center;
        color: #000;
        .title-text{
            font-size: 28px;

        }
        .title-text2{
            margin: 3% 0 0 0;
            font-size: 12px;
        }
    }
    .img-box{
        height: 225px;
        width: 100%;
        display: flex;
        img{
            margin: auto;
        }
    }
    .xiala-box{
        display: flex;
        flex-wrap: wrap;
        .pd-box{
            width: 31%;
            font-size: 18px;
            padding: 1%;
            .item{
                padding: 30px 40px;
                background: white;
                border: 1px solid #e3e3e3;
            }
            .iconfont{
                font-size: 26px;
            }
        }
    }
}
.top_choise{
    border-bottom: 5px solid #fdd903 !important;
}
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