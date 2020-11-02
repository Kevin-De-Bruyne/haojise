<template>
    <div class="content" ref="content">
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
             {{data.company_profile.title_one}}
         </div>
         <div class="text2" v-html="data.company_profile.content">

         </div>
     </div>

     
     <carousel-3d class="swiper_3d" :autoplay="true" v-if="data.company_profile.images.length">
　　<slide v-for="(slide, i) in data.company_profile.images" :key="slide.id" :index="i">
　　　　<template slot-scope="{ index, isCurrent, leftIndex, rightIndex}">
  <div class="img-box" :style="{backgroundImage:`url(${slide})`}"
   :data-index="index"
　　　　　　:class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >=0)}"
  >

  </div>
　　　</template>
　　</slide>
</carousel-3d>
       </div>

        <div class="touzi-box">
            <div class="touzi-title">
               {{data.company_profile.title_two}}
            </div>
            <div class="touzi-img">
              <img :src="data.company_profile.path" alt="">
            </div>
        </div>
     </div>

    <div class="gray-box" ref="flex_2">
      <div class="container">
        <div class="big_title">
          公司团队
        </div>
        <el-row class="huodong-box" :gutter="10">
  <el-col :sm="6" :xs="12" class="item" v-for="(item,index) in data.company_team" :key="index">
    <div class="top">
              <img :src="item.path" alt="">
            </div>
            <div class="bottom">
                {{item.name}}
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
          <img :src="data.user_evaluation" alt="">
        </div>
        <div class="title">
          看看***怎么说
        </div>
        <el-row class="pl_box2" >
          <el-col :sm="12" :xs="24"  v-for="(item,index) in data.evaluate" :key="index">
            <div class="item">
              <div class="left_img" :style="{backgroundImage:`url(${item.out_path})`}">
            </div>
            <div class="rights">
              <div class="text1">
                  {{item.inside_text}}
              </div>
              <div class="text2">
                <div class="left">
                  {{item.address}}
                </div>
                <div class="right" @click="goDetail(item)">
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
            {{data.org.title}}
          </div>
        </div>
        <el-row class="img-box"  :gutter="20">
          <el-col v-for="(item,index) in data.org.path" :key="index" :sm="6" :xs="12">
            <img  :src="item" alt="">
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
             <div class="item" v-for="(item,index) in data.env_sci" :key="index"
             :class="{'choise_style':index==card_index}" @click="card_index=index"
             >
               {{item.name}}
             </div>
           </div>

           <div class="card_img1">
             <div v-for="(item,index) in data.env_sci" :key="index">
               <div class="item" v-show="index==card_index">
                <img :src="item.path" alt="">
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
          <div class="item" v-for="(item,index) in data.problem" :key="index">
             
          <div class="wenti-top">
            <span class="icon" @click="item.shows=!item.shows" :class="{'jian_show':item.shows}">
              
            </span>
            <span class="texts">
              {{item.problem}}
            </span>
          </div>
          <transition name="wenti">
             <div class="bottom_text" v-show="item.shows" v-html="item.answer">
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
          add:false,
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
             data:{
               company_profile:{
                 images:[]
               },
               company_team:[],
                env_sci:[],
                evaluate:[],
                org:{
                  path:[]
                },
                problem:[]
             }
        }
    },
    created() {
      this.getdata()
      this.scroll()
    },
    mounted() {
      let height=null
       console.log()
       for(let i=1;i<=6;i++){
          height=this.$refs['flex_'+i].offsetTop
          this.height_arr.push(height)
       }
    },
    methods: {
      goDetail(item){
        let json=JSON.stringify(item)
        localStorage.setItem('news',json)
        this.$router.push('/news_detail')
      },
      getdata(){
        this.ajax({
          url:'index/index/enter_haojise'
        }).then(res=>{
            this.data=res.data
            this.img_load()
            this.data.problem.forEach(item=>{
              this.$set(item,'shows',false)
            })
        })
      },
      none(){

      },
      img_load(){
        if(this.add){
          return
        }
        this.add=true
           let timel=null
                      let height=this.$refs.top_heihgt.offsetTop
           window.addEventListener('scroll',(e)=>{
                    let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
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
      },
      fn(){
        
          
        // let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
      
        // for(let i=0;i<this.height_arr.length;i++){
        //               // console.log(i)
        //               if(scrollTop>this.height_arr[i]+outerHeight/2&&scrollTop<this.height_arr[i+1]+outerHeight/2){
        //                   this.top_index=i
        //                   console.log(i)
        //               }else if(scrollTop>this.height_arr[i]+outerHeight/2&&!this.height_arr[i+1]){
        //                   this.top_index=this.height_arr.length-1
        //               }
        //       }
               
               
      },
      change_index(index){
        this.top_index=index
        window.scrollTo({
           top:this.$refs['flex_'+(index+1)].offsetTop-(outerHeight/2),
            behavior: "smooth"
         })
      },
      scroll(){
       this.$nextTick(()=>{
               
        })
       
      }
    },
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 375px){
    .FAQ-box{
  .texts{
    font-size: 14px !important;
  }
}
}

.swiper_3d{
  .img-box{
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    padding: 0 0 100% 0;
  }
}
.content{
  overflow: hidden;
}
.my-swipe{
  // height: 500px;
}
.jian_show{
      background-position: 0 -133px !important;
}
    // .wenti-enter-active,
    // .wenti-leave-active{
    //     will-change: transform;
    //     transition: all .3s ease;
    //     max-height: 150px;
    //     overflow: hidden;
    // }
    // .wenti-enter{
    //   max-height: 0 !important;
    //     padding: 0 !important;
    // }
    // .wenti-enter-to{
    //    max-height: 150px !important;
    //     padding: 3% !important;
    // }
    // .wenti-leave-active{
    //     max-height: 0 !important;
    //     padding: 0 !important;
    // }
   
    .carousel-3d-slide{
      border: none !important;
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
      display: flex;
      background: rgb(255,255,255);
      .icon{
        background: #339ee5 url(http://images.netdragon.com/www/images/2014/spr_01.png) no-repeat 0 -75px;
        width: 58px;
        height: 100%;
        display: inline-block;
        cursor: pointer;
      }
      .texts{
        flex: 1;
        overflow: hidden;
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
      margin: 0 0 1px 0;
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
      // height: 415px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 100%;
        height: auto;
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
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        // flex: 1 0 auto;
      }
      .rights{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        .text1{
          font-size: 18px;
           overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
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
    // height: 110px;
    align-items: center;
    justify-content: center;
    img{
      max-width: 100%;
      max-height: 100%;
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