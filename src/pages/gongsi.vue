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
    <div class="top_fiex fiex2 hidden-sm-and-down" ref="top_fiex2" v-show="top_flex">
             <ul class="container">
             <li v-for="(item,index) in top_arr" :key="index" :class="{'top_choise':top_index==index}" @click="change_index(index)">
                 <span>
                     {{item}}
                 </span>
             </li>
         </ul>
     </div>
     
     <div class="top_fiex hidden-sm-and-down" ref="top_heihgt">
             <ul class="container">
             <li v-for="(item,index) in top_arr" :key="index" :class="{'top_choise':top_index==index}" @click="change_index(index)">
                 <span>
                     {{item}}
                 </span>
             </li>
         </ul>
         
     </div>

     <div class="white-box p-l-40 p-r-40" ref="flex_1">
       <div class="container">
          <div class="title-box">
         <div class="text1">
             好吉色
         </div>
         <div class="text2">
             我们是一家人工智能机器人解决方案的高科技研发公司，创始团队来自剑桥和麻省理工。是智能洗车行业最早发起者、无人化智能洗车场景模式发明者。
         </div>
     </div>

     
     <carousel-3d  :autoplay="true">
　　<slide v-for="(slide, i) in 6" :key="i" :index="i">
　　　　<template slot-scope="{ index, isCurrent, leftIndex, rightIndex}">
　　　　　　<img
　　　　　　:data-index="index"
　　　　　　:class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >=0)}"
　　　　　　src="https://iph.href.lu/362x272?text=1.3%3A1&fg=666666&bg=cccccc"
　　　　　　>
　　　</template>
　　</slide>
</carousel-3d>
       </div>

        <div class="touzi-box">
            <div class="touzi-title">
               投资方
            </div>
            <div class="touzi-img">
              <img src="https://source.1kmxc.com/static-web-new/website/images3.0/about/ygl_Investor.png" alt="">
            </div>
        </div>
     </div>

    <div class="gray-box" ref="flex_2">
      <div class="container">
        <div class="big_title">
          公司团队
        </div>
        <el-row class="huodong-box" :gutter="10">
  <el-col :sm="6" :xs="12" class="item" v-for="item in 4" :key="item">
    <div class="top">
              <img src="https://iph.href.lu/380x180?text=1.6%3A1&fg=666666&bg=cccccc" alt="">
            </div>
            <div class="bottom">
                宣传部
            </div>
  </el-col>
</el-row>
        
      </div>
    </div>

    <div class="pingjia_box" ref="flex_3">
      <div class="container">
        <div class="title">
          好吉色用户评价
        </div>
        <div class="img-box">
          <img src="https://iph.href.lu/380x180?text=%E9%9A%8F%E6%84%8F%E5%A4%A7%E5%B0%8F&fg=666666&bg=cccccc" alt="">
        </div>
        <div class="title">
          看看***怎么说
        </div>
        <el-row class="pl_box2" >
          <el-col :sm="12" :xs="24"  v-for="item in 4" :key="item">
            <div class="item">
              <div class="left_img">
              <img src="https://iph.href.lu/100x100?text=1%3A1&fg=666666&bg=cccccc" alt="">
            </div>
            <div class="right">
              <div class="text1">
                可以，俺自从投了你们这个好吉色啊，三年车有了，十年房有了，俺看你们这个好吉色行
              </div>
              <div class="text2">
                <div class="left">
                  浙江省温州市
                </div>
                <div class="right">
                  阅读
                </div>
              </div>
            </div>
            </div>
            
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="zhenshu-box" ref="flex_4">
      <div class="container">
        <div class="title-box">
          <div class="text1">
            专业检测机构检测
          </div>
          <div class="text2">
            通过专业机构的权威检测
          </div>
        </div>
        <el-row class="img-box"  :gutter="20">
          <el-col v-for="item in 4" :key="item" :sm="6" :xs="12">
            <img  src="https://iph.href.lu/216x272?text=1.2%3A1&fg=666666&bg=cccccc" alt="">
          </el-col>
        </el-row>
      </div>
    </div>
     
     <div class="huanjin-box" ref="flex_5">
       <div class="container">
         <div class="title">
            办公环境
         </div>
         
         <div class="card_box">
           <div class="choise_box">
             <div class="item" v-for="(item,index) in choise_arr" :key="item"
             :class="{'choise_style':index==card_index}" @click="card_index=index"
             >
               {{item}}
             </div>
           </div>

           <div class="card_img1">
             <div v-for="(item,index) in 3" :key="item">
               <div class="item" v-show="index==card_index">
                <img src="https://iph.href.lu/826x415?text=2%3A1&fg=666666&bg=cccccc" alt="">
              </div>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div class="FAQ-box" ref="flex_6">
        <div class="container">
          <div class="title">
            FAQ常见问题
          </div>
          <div class="item" v-for="item in wenti_arr" :key="item">
             
          <div class="wenti-top">
            <span class="icon" @click="item.shows=!item.shows" :class="{'jian_show':item.shows}">
              
            </span>
            <span class="texts">
              好吉色的核心业务是什么?
            </span>
          </div>
          <transition name="wenti">
             <div class="bottom_text" v-show="item.shows">
               {{item.content}}
          </div>
          </transition>
         
          </div>
         
        </div>
     </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
    components:{
        topNav,
        Carousel3d,
　　　　Slide
    },
    data(){
        return{
          wenti_arr:[
            {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          },
           {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          },
           {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          },
           {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          },
           {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          },
           {
             title:'好吉色的核心业务是什么?',
             content:' 网龙网络控股有限公司（“网龙”，香港交易所股份代号：777）是全球领先的互联网社区创建者，在开发和扩展多个互联网及移动平台方面拥有优良往绩，覆盖用户数以亿计，包括建立中国首个网络游戏门户 -- 17173.com及打造最具影响力的智能手机服务平台 -- 91 无线。\
网龙成立于1999年，成功自主研发多个著名的旗舰游戏，包括《魔域》、《征服》和《英魂之刃》，是中国最具声誉及知名度的网络游戏开发商之一。此外，网龙近年积极扩展在线教育业务，管理层秉承“打造全球最大的在线学习社区” 的愿景，旨在将“未来教室”普及至世界各地的学校。'
          ,shows:false
          }
          ],
          top_index:0,
          top_flex:false,
          card_index:0,
          choise_arr:['某某总部','某某分部','某某停车场'],
           height_arr:[],
           top_height:0,
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
          rotate: 100, //旋转
          stretch: 180, //拉伸
          depth: 350, //深度
          modifier: 1,
          slideShadows: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
             swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
             top_arr:['公司简介','公司团队','客户评价','专利证书','办公环境','常见问题'],
        }
    },
    created() {
      this.scroll()
    },
    mounted() {
      let height=null
    
       for(let i=1;i<=6;i++){
          height=this.$refs['flex_'+i].offsetTop
          this.height_arr.push(height)
       }
    },
    methods: {
      fn(){
        
                 
        let scrollTop = document.documentElement.scrollTop;
      
        for(let i=0;i<this.height_arr.length;i++){
                      // console.log(i)
                      if(scrollTop>this.height_arr[i]+outerHeight/2&&scrollTop<this.height_arr[i+1]+outerHeight/2){
                          this.top_index=i
                      }else if(scrollTop>this.height_arr[i]+outerHeight/2&&!this.height_arr[i+1]){
                          this.top_index=this.height_arr.length-1
                      }
              }
               
               
      },
      change_index(index){
        // this.top_index=index
        window.scrollTo({
           top:this.$refs['flex_'+(index+1)].offsetTop-(outerHeight/2),
            behavior: "smooth"
         })
      },
      scroll(){
       this.$nextTick(()=>{
                let timel=null
                      let height=this.$refs.top_heihgt.offsetTop
           window.addEventListener('scroll',(e)=>{
                    let scrollTop = document.documentElement.scrollTop;
        if(scrollTop>=height-60){
                       this.top_flex=true
                   }else{
                       this.top_flex=false
                   }
                    if(timel){
                      clearTimeout(timel)
                      timel=setTimeout(this.fn,20)
                    }else{
                      timel=setTimeout(this.fn,20)
                    }
                    
                   
                   
                    
              
				},true)
        })
       
      }
    },
}
</script>

<style scoped lang="scss">
.jian_show{
      background-position: 0 -133px !important;
}
    .wenti-enter-active,
    .wenti-leave-active{
        will-change: transform;
        transition: all .3s ease;
        max-height: 150px;
        overflow: hidden;
    }
    .wenti-enter{
      max-height: 0 !important;
        padding: 0 !important;
    }
    .wenti-enter-to{
       max-height: 150px !important;
        padding: 3% !important;
    }
    .wenti-leave-active{
        max-height: 0 !important;
        padding: 0 !important;
    }
   
    
.fiex2{
    position: fixed !important;
    top: 60px !important;
}
.FAQ-box{
  background: rgb(236,235,233);
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  .title{
       font-size: 28px;
    color: #000;
    margin: 0 0 2% 0;
    text-align: center;
  }
  .item{
    background: rgb(250,249,249);
    margin: 0 0 4% 0;
    .wenti-top{
      height: 58px;
      border-bottom: 1px solid #eee;
      background: rgb(255,255,255);
      .icon{
        background: #339ee5 url(http://images.netdragon.com/www/images/2014/spr_01.png) no-repeat 0 -75px;
        width: 58px;
        height: 100%;
        display: inline-block;
      }
      .texts{
        display: inline-block;
        margin: 0 0 0 2%;
        color: #339ee5;
        line-height: 58px;
        height: 58px;
        vertical-align: top;
      }
    }
    .bottom_text{
      box-sizing: border-box;
      padding: 3%;
      font-size: 12px;
      line-height: 25px;
    }
  }
}
.choise_style{
  border-bottom: 1px solid #fdd903 !important;
}
.huanjin-box{
  background: #f2f2f2;
  box-sizing: border-box;
  padding: 6% 4% 4% 6%;
  .title{
    font-size: 28px;
    color: #000;
    margin: 0 0 2% 0;
    text-align: center;
  }
  .card_box{
    .choise_box{
      display: flex;
      height: 60px;
      background: white;
      .item{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid transparent;
      }
      .item:last-child{
        border-right: 1px solid transparent;
      }
    }
  }
  .card_img1{
    .item{
      height: 415px;
      display: flex;
      img{
        width: 100%;
        height: auto;
        margin: auto;
      }
    }
  }
}
.zhenshu-box{
  background: url('../assets/zhengshu_bg.png') 0 0 no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  box-sizing: border-box;
  padding: 6% 4%  4% 4%;
  .title-box{
    margin: 0 0 4% 0;
    text-align: center;
    .text1{
      font-size: 28px;
      color: #000;
    }
    .text2{
      font-size: 16px;
    }
  }
}
.pingjia_box{
  background: rgb(252,240,221);
  box-sizing: border-box;
  padding: 6% 6% 5% 6%;
  .title{
    color: #000;
    text-align: center;
    font-size: 28px;
    margin: 0 0 2% 0;
  }
  .img-box{
    display: flex;
    margin: 0 0 10% 0;
    img{
      margin: auto;
    }
  }
  .pl_box2{
    .item{
      margin: 0 3% 3% 0;
      background: white;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    cursor: pointer;
      display: flex;
      
      box-sizing: border-box;
      padding: 3%;
      .left_img{
        width: 100px;
        height: 100px;
        margin: 0 3% 0 0;
        flex: 1 0 auto;
      }
      .right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text1{
          font-size: 18px;
        }
        .text2{
          display: flex;
          justify-content: space-between;
          .left{
            color: #999;
            font-size: 16px;
          }
          .right{
            color: #4a90e2;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.container{
    background: none !important;
}
.top_choise{
    border-bottom: 5px solid #fdd903 !important;
}
.gray-box{
  background: #f2f2f2;
  box-sizing: border-box;
  padding: 5% 4%  6% 4%;
  .big_title{
    font-size: 28px;
    color: #000;
    margin: 0 0 3% 0;
    text-align: center;
  }
  .huodong-box{
    .item{
      margin: 0 0 3% 0;
    }
      .top{

      }
      .bottom{
        width:100%;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      }
  }
}
.touzi-box{
  border-top: 1px solid #dcd5d5;
  box-sizing: border-box;
  padding: 3% 0 6% 0;
  .touzi-title{
    font-size: 24px;
    margin: 0 0 2% 0;
    text-align: center;
  }
  .touzi-img{
    display: flex;
    height: 110px;
    img{
      margin: auto;
    }
  }
}
.white-box{
  background: white;
  box-sizing: border-box;
  padding: 5% 0 0 0;
}
.title-box{
    margin: 0 0 5% 0;
    text-align: center;
    color: #000;
    .text1{
      font-size: 24px;
      margin: 0 0 3% 0;
    }
    .text2{
      color: #a4a4a4;
      font-size: 14px;
    }
}
.top_fiex{
    background: white;
    height: 80px;
    color: #000;
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid #eee;
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