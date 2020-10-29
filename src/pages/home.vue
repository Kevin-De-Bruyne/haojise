<template>
  <div >
    
    <div class="bg_white2 p-b-20">
      <div class="container p-t-20">
      <div class="text-box wow slideInUp">
        <div class="text1 ">熬夜加班，就喝好吉色</div>
        <div class="text2">
          熬夜加班，就喝好吉色 If you stay up late and work overtime, you'll
          have a good JISE
        </div>
      </div>

      <el-row class="icon_list" :gutter="20">
        <el-col class="pd-box-10" v-for="(item,index) in data.banner_down" :key="index"
        :sm="6" :xs="12" 
        >
           <div class="item">
             <div class="top_item">
               <div class="left">
            <img
              :src="item.monograph"
              alt=""
            />
          </div>
          <div class="right">
            <!-- <div class="text1">
              {{ item.intro }}
            </div> -->
            <div class="text2">
              {{ item.intro }}
            </div>
          </div>
             </div>
          <div class="bottom_item">
            <div class="item-box" >
          <div class="img_box" v-if="item.multigraph.length==1">
            <img :src="item.multigraph[0]" alt="" />
          </div>
          <div class="swipter_box" v-else>
            <van-swipe
              class="vant_swipe2 img_100"
              :autoplay="3000"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="(item_child,i) in item.multigraph" :key="i">
                <img
                class="img_100j"
                  :src="item_child"
                  alt=""
                />
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
          </div>
        </div>
        </el-col>
       
      </el-row>

        <!-- 为什么选择好吉色 -->
      <div class="choise_box">
          <div class="left">
              <div class="title">
                  {{data.sel.title}}
              </div>
              <div class="neirong" v-html="data.sel.content">
                  
                  
              </div>
              <div class="butn">
                  查看更多
              </div>
          </div>
          <div class="right img_100">
               <van-swipe
              class="vant_swipe2"
              :autoplay="3000"
              indicator-color="white"
              :touchable="true"
              :vertical="true"
            >
              <van-swipe-item v-for="(item,index) in data.sel.path" :key="index">
                <img
                class="img_100j"
                  :src="item"
                  alt="图片加载失败"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
      </div>
    </div>
    </div>
    

    <div class="bg_box" :style="{background:`url(${data.sel_down_back}) 0 0 no-repeat`}">
        <div class="pd-box">
             <el-row :gutter="20" class="item-box">
            <el-col :sm="6" :xs="12" class="item" v-for="(item,index) in data.sel_down_info" :key="index">
                <div class="top">
                    <img :src="item.path" alt="">
                </div>
                <div class="text1">
                    {{item.title}}
                </div>
                <div class="text2">
                    {{item.content}}
                </div>
            </el-col>
        </el-row>
        </div>
       
        
    </div>
    <div class="hezuo-box hide_768 hide_425">
            <div class="left">
                <div class="text1">
                    {{data.recruit_con.title}}
                </div>
                <div class="text2" v-html="data.recruit_con.content">
                </div>
            </div>
            <div class="right">
                <div class="butn">
                    {{data.recruit_con.btn}}
                </div>
            </div>
        </div>


    
    <div class="ygl-section-items banner-5">
      <div class="main-content-center ">
        <div class="news-desc-wrapper">
          <div class="ygl-section-title-box">
            <div class="ch-title">新闻动态</div>
            <div class="desc-text">
              GOOD NEWS
            </div>
          </div>
          <img src="https://source.1kmxc.com/static-web-new/website/images3.0/X-home/financing_lable.png" class="new-lable-img" alt="">
          <div class="news-desc">发发发发发发</div>
          <div class="read-news-button">
            点击阅读
          </div>
        </div>
        <div class="icon-box">
                    <span class="iconfont icon-arrow-left" @click="swiper_prev()"></span>
                    <span class="m-l-5 m-r-5">{{news_index}}/{{news_arr.length}}</span>
                    
                    <span class="iconfont icon-youjiantou" @click="swiper_next()"></span>
        </div>
        <div class="news-list-wrapper swiper-container swiper-container-horizontal swiper-container-android hidden-xs-only">
            <van-swipe
              class="vant_swipe3"
              indicator-color="white"
              :touchable="true"
              ref="news1"
              @change="news_swiper_change"
            > 
              <van-swipe-item v-for="(item,index) in news_arr " :key="index">
                  <div class="news-img-box">
                      <div class="item" v-for="(items,i) in item" :key="i"
                      @click="goDetail(items)"
                      >
                          <div class="img-box">
                              <img :src="items.big_img" alt="">
                          </div>
                          <div class="text-box">
                              {{items.center_text}}
                          </div>
                          <div class="bottom_img-box">
                            <img class="bottom_img" :src="items.mini_img" alt="">
                          </div>
                          
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
        </div>
          <div class="news-list-wrapper2  swiper-container-horizontal swiper-container-android hidden-sm-and-up">
            <van-swipe
              class="vant_swipe3 vant_swipe_425"
              indicator-color="white"
              :touchable="true"
              ref="news2"
            >
              <van-swipe-item v-for="(item,index) in data.new_info " :key="index">
                  <div class="news-img-box2">
                      <div class="item" v-for="(items,i) in item.con_img" :key="i">
                          <div class="img-box">
                              <img :src="items.above_img" alt="">
                          </div>
                          <div class="text-box">
                              {{items.center_text}}
                          </div>
                          <div class="bottom_img-box">
                            <img class="bottom_img" :src="items.down_img" alt="">
                          </div>
                          
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
        </div>
      </div>
    </div>
    <div class="green_bg">
      <div class="container">
      <div class="huoban_box">
       <div class="title">
         我们的合作伙伴
       </div>

       <div class="huoban_img">
         <div v-for="(item,index) in data.coo_par" :key="index">
            <img    :src="item.path" alt="">
         </div>
         
       </div>
    </div>
    </div>
    </div>
    
    

    <div class="bg_white">
      <div class="container">
     <div class="zhichi_box">
      <div class="title">
        合作伙伴支持
      </div>
      <div class="scroll_box" ref="personWrap" @touchstart="clearTime()" @touchend="startTime()">
        <div class="item-box" ref="personTab">
          <div class="item" v-for="(item,index) in data.par_sup" :key="index">
              <img :src="item.path" alt="">
          </div>
        </div>
      </div>
    </div>
   </div>
    </div>
   
    

    <div class="blue-bg hidden-sm-and-down">
      <div class="left">
        {{data.join_us.content}}
      </div>
      <div class="right">
        <div class="butn">
          {{data.join_us.btn}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import topNav from "@/components/top_nav";
import Bscroll from 'better-scroll'

export default {
  components: {
    topNav,
  },
  data() {
    return {
      news_index:1,
      bottom_width:0,
      data:{
        banner:[],
        banner_down:[],
        coo_par:[],
        join_us:[],
        new_info:[],
        par_sup:[],
        recruit_con:{},
        sel:{},
        sel_down_back:'',
        sel_down_info:[]
      },
      times:null,
      times2:null,
       swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
      scroll:null,
      imgurl:'https://source.1kmxc.com/static-web-new/website/images3.0/X-home/alpha_home_bg_001.png',
        bg_arr:[{
            title:'好吉色',
            content:'好吉色介绍好啊啊1'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊2'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊3'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊4'
        },
        ],
      banner_img: [
        [
            'https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc',
          "https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc",
        ],
        "https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc",
        "https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc",
        [
          "https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc",
          "https://iph.href.lu/500x500?text=1%3A1&fg=666666&bg=cccccc",
        ],
      ],
      icon_arr: [
        {
          name: "好吉色",
          content: "好吉色介绍好吉色介绍好几色介绍",
        },
        {
          name: "好吉色",
          content: "好吉色介绍好吉色介绍好几色介绍",
        },
        {
          name: "好吉色",
          content: "好吉色介绍好吉色介绍好几色介绍",
        },
        {
          name: "好吉色",
          content: "好吉色介绍好吉色介绍好几色介绍",
        },
      ],
      news_arr:[]
    };
  },
  created() {
   
  },
  mounted() {
       this.getdata()
    this.$nextTick(() => {
     
      
    });
  },
  methods: {
    setweb(){
       let {data}=this
      let keyword=document.createElement('meta')
    let miaoshu=document.createElement('meta')
    let head=document.getElementsByTagName('head')[0]
    console.log(head)
    keyword.name='keyword'
    keyword.content=data.seo.keyword
    miaoshu.name='description'
    miaoshu.content=data.seo.describe
    head.append(keyword)
    head.append(miaoshu)
    document.title=data.seo.title
    },
    goDetail(item){
      let json=JSON.stringify(item)
      console.log(item)
      this.$router.push('/news_detail?data='+json)
    },
    swiper_prev(){
      let news=this.$refs.news1
      news.prev()
    },
    swiper_next(){
      let news=this.$refs.news1
      news.next()
    },  
    news_swiper_change(e){
      this.news_index=e+1
    },
    splice_arr(arr){
      if(arr.length<3){
        this.news_arr.push(arr)
        console.log(this.news_arr)
        return 
      }
      this.news_arr.push(arr.splice(0,3))

      if(arr.length){
        this.splice_arr(arr)
      }
      
    },
    getdata(){
      this.ajax({
        url:'index/index/index'
      }).then(res=>{
        this.data=res.data
        
        this.personScroll(this.data.par_sup.length,240);
        this.splice_arr(this.data.new_info)
        this.setweb()
      })
    },
    clearTime(){
      clearInterval(this.times)
      clearTimeout(this.times2)
    },
    startTime(){
      this.times2=setTimeout(() => {
          this.scrollmove()
      }, 2000);
    },
    personScroll(num,widths) {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = num * widths;
      this.bottom_width=num*widths
      console.log(num,widths)
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            freeScroll:true,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
      this.scrollmove(width)
      
    },
    scrollmove(){
      let s=0
       this.times=setInterval(() => {
         if(-s>=this.bottom_width-outerWidth+200){

           s=0
         }
        s-=1
          this.scroll.scrollTo(s,0)
      }, 10);
    }
  },
  
};
</script>

<style scoped lang="scss">
.green_bg{
  background:white !important;
  .container{
    background: white !important;
    max-width: 1200px !important;
  }
}
.bg_white2{
  background: white;
}
.bg_white{
  background:white;
  .container{
    background: white !important;
  }
}
.img_100{
  .img_100j{
    width: 100% !important;
    height: 100% !important;
  }
}
  .van-swipe{
    /deep/img{
      width: auto !important;
      height: auto !important;
    }
  } 
  .icon-box{
            text-align: right;
            color: #999;
            display: flex;
            position: absolute;
            right: 20px;
            top: 40px;
            .iconfont{
                cursor: pointer;
            }
        }
  
@import url('../../static/css/chao.css');
.w-90{
  width: 90%;
}
.pd-box-10{
  padding: 10px 0;
}
.blue-bg{
  background:  rgb(50,188,173);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10%;
  height: 60px;
  align-items: center;
  color: white;
  margin: 40px 0 0 0;
  .right{
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
    .butn{
       line-height: 30px;
    padding: 0 30px;
      height: 30px;
      border: 1px solid white;
    }
  }
}
.zhichi_box{
  background: white;
  .title{
    text-align: center;
    color: #000;
    line-height: 40px;
    margin: 0 0 10px 0;
    font-size: 20px;
  }
  .scroll_box{
    height: 100px;
    overflow: hidden;
    .item-box{
      height: 100%;
      display: flex;
      .item{
        height: 100%;
        width: 240px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          // width: 100%;
          // height: 100%;
        }
      }
    }
  }
}
.huoban_box{
  box-sizing: border-box;
  .title{
    text-align: center;
    color: white;
    line-height: 40px;
    margin: 0 0 10px 0;
    font-size: 20px;
  }
  .huoban_img{
    display: flex;
    flex-wrap: wrap;
    div{
      margin: 10px 3%;
      width: 10%;
      display: flex;
      // height: 100px;
      align-items: center;
      justify-content: center;
    }
     img{
       width: 100%;
      border-radius: 50%;
      max-width: 80px;
      max-height: 100%;
     }
  }
}
.news-img-box2{
            width: 100%;
            display: flex;
            height: 100%;
            .bottom_img-box{
              width: 100%;
              height: 40px;
              display: flex;
            }
            .item{
              flex: 1 0 auto;
                background: white;
                width: 45%;
                margin: 0 10px;
                height: 100%;
                box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.4);
            }
            .img-box{
                height: 130px;
                width: 100%;
                display: flex;
                img{
                   margin: auto;
                }
            }
            .text-box{
                width: 100%;
                box-sizing: border-box;
                padding: 0 5px;
                margin: 5px 0 5px 5px;
                letter-spacing: 0;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;  /*要显示的行数*/
                -webkit-box-orient: vertical;
            }
            .bottom_img{
              margin: auto;
            }
        }
        .news-img-box{
            width: 100%;
            display: flex;
            height: 100%;
            .bottom_img-box{
              width: 100%;
              height: 70px;
              display: flex;
            }
            .item{
                background: white;
                // width: 240px;
                width: 33%;
                margin: 0 10px;
                height: 100%;
                box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.4);
            }
            .img-box{
                height: 180px;
                width: 100%;
                display: flex;
                img{
                   margin: auto;
                }
            }
            .text-box{
                width: 100%;
                box-sizing: border-box;
                padding: 0 5px;
                margin: 5px 0 5px 5px;
                letter-spacing: 0;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;  /*要显示的行数*/
                -webkit-box-orient: vertical;
            }
            .bottom_img{
              margin: auto;
            }
        }
.news-box{
    background: white;
    box-sizing: border-box;
    padding: 15px 5px 10px 20px;
    height: 400px;
    margin:70px 0 0 0;
    position: relative;
    .left{
        display: inline-block;
        height: 400px;
        width: 40%;
        background: #9f9b93;
        padding: 30px 180px 40px 30px;
        box-sizing: border-box;
        color: white;
        flex: 0 0 auto;
        .text1{
            font-size:18px;
        }
        .text2{
            font-size: 14px;
        }
        .yellow-box{
            background: rgb(249,223,13);
            color: #000;
            font-size: 12px;
            width: 70px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
        .text3{
            word-wrap: wrap;
        }
        .butn{
            border: 1px solid white;
            width: 70px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
        }
    }
        
        .news-swipe{
            height: 200px;
            z-index: 99;
            width: 800px;
        }
        
    
}
.hezuo-box{
  max-width: 1200px;
  background: white;
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 99;
    
    position: relative;
    padding: 15px 30px 15px 40px;
    color: #000;
    margin: -50px auto 60px auto;
    .left{

        .text1{
            font-size: 24px;
        }
        .text2{
            text-align: center;
            font-size: 12px;
        }
    } 
    .right{
        height: 100%;
        display: flex;
        align-items: center;
        .butn{
            height: 30px;
            line-height: 30px;
            text-align: center;
            width: 100px;
            border: 1px solid #eee;
            color: #000;
        }
    }
}
.bg_box{
    background-size: cover;
    height: 300px;
    color: white;
    background-size: auto 100%;
    background-position: 50%;
    .pd-box{
        display: flex;
        height: 100%;
    }
    .item-box{
        margin: auto !important;
        width: 800px;
        text-align: center;
        .item{
            .top{
                margin:0 auto;
                display: flex;
                width: 80px;
                height: 80px;
                img{
                    width: 70px;
                    height: 70px;
                    margin: auto;
                }
            }
            .text1{
                margin: 0 0 10px 0;
                font-size: 24px;
            }
            .text2{
                font-size:12px;
            }
        }
    }
}
.choise_box{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 15px 0 40px;
    justify-content: space-between;
    margin: 10% 0 0 0;
    .left{
        flex: 1;
        .title{
            font-size: 20px;
        }
        .neirong{
            font-size:12px;
            max-width: 70%;
            word-wrap: wrap;
            margin: 15px 0 15px 0;
        }
        .butn{
            background: rgb(20,158,203);
            color: white;
            text-align: center;
            border-radius: 6px;
            height: 40px;
            line-height: 40px;
            width: 100px;
        }
    }
    .right{
        width:500px;
        height: 230px;
    }
}
.banner_list{
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    .pd-box-10{
      // min-width: 150px;
      width: 25%;
    }
    .item-box{
        margin: 0 5%;
        // height: 300px;
        // width: 20%;
        img{
          
            // width: 20vw;
            // height: 100%;
        }
    }
}
.icon_list {
  margin: 20px 0;
  font-size: 12px;
  .top_item{
    display: flex;
    margin: 0 0 6% 0;
  }
  .pd-box-10{
    min-width: 150px;
  }
  .item {
    width: 100%;
    .left {
      margin: 0 10px 0 0;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      .text1 {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
.container {
  box-sizing: border-box;
  padding: 0 3%;
  background: white;
}
.text-box {
  margin: 0 auto;
  color: #000;
  text-align: center;
  width: 300px;
  .text1 {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
  .text2 {
    font-size: 12px;
  }
}
.banner_box {
  // height: 500px;
  img {
    width: 100% !important;
    height: auto !important;
  }
}
.my-swipe {
  height: 100%;
}
</style>