<template>
  <div>
    <div class="banner_box">
      <top-nav />
      <van-swipe class="my-swipe" :autoplay="false" indicator-color="white">
        <van-swipe-item v-for="item in swiper_arr" :key="item">
          <img
            :src="item"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="bg_white p-b-20">
      <div class="container p-t-20">
      <div class="text-box">
        <div class="text1">熬夜加班，就喝好吉色</div>
        <div class="text2">
          熬夜加班，就喝好吉色 If you stay up late and work overtime, you'll
          have a good JISE
        </div>
      </div>

      <div class="icon_list">
        <div class="pd-box-10" v-for="item in bg_arr" :key="item.name">
           <div class="item" >
          <div class="left">
            <img
              src="../assets/mangguo.jpg"
              alt=""
            />
          </div>
          <div class="right">
            <div class="text1">
              {{ item.name }}
            </div>
            <div class="text2">
              {{ item.content }}
            </div>
          </div>
        </div>
        </div>
       
      </div>

      <div class="banner_list">
        <div class="pd-box-10 " v-for="(item, index) in banner_img" :key="index">
           <div class="item-box" >
          <div class="img_box" v-if="!Array.isArray(item)">
            <img :src="item" alt="" />
          </div>
          <div class="swipter_box" v-else>
            <van-swipe
              class="vant_swipe2 img_100"
              :autoplay="3000"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item_child in item" :key="item_child">
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

        <!-- 为什么选择好吉色 -->
      <div class="choise_box">
          <div class="left">
              <div class="title">
                  为什么选择好吉色
              </div>
              <div class="neirong">
                  为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色,
                  为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色为什么选择好吉色
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
              <van-swipe-item v-for="item in 4 " :key="item">
                <img
                class="img_100j"
                  src="https://iph.href.lu/500x230?text=%E5%9B%BE%E7%89%87%E6%AF%94%E4%BE%8B%3D2.1%20%3A%201&fg=666666&bg=cccccc"
                  alt="图片加载失败"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
      </div>
    </div>
    </div>
    

    <div class="bg_box">
        <div class="pd-box">
             <div class="item-box">
            <div class="item" v-for="item in bg_arr" :key="item.title">
                <div class="top">
                    <img src="https://iph.href.lu/100x100?fg=666666&bg=cccccc" alt="">
                </div>
                <div class="text1">
                    {{item.title}}
                </div>
                <div class="text2">
                    {{item.content}}
                </div>
            </div>
        </div>
        </div>
       
        
    </div>
    <div class="hezuo-box hide_768 hide_425">
            <div class="left">
                <div class="text1">
                    诚邀实力合作伙伴
                </div>
                <div class="text2">
                    诚邀实力合作伙伴诚邀实力合作伙伴诚邀实力合作伙伴诚邀实力合作伙伴诚邀实力合作伙伴诚邀实力合作伙伴
                </div>
            </div>
            <div class="right">
                <div class="butn">
                    招募合作
                </div>
            </div>
        </div>

     <!-- <div class="ygl-section-items banner-5 ">
      <div class="main-content-center">
        <div class="news-desc-wrapper">
          <div class="ygl-section-title-box">
            <div class="ch-title">新闻动态</div>
            <div class="desc-text">
              GOOD NEWS
            </div>
          </div>
          <img src="https://source.1kmxc.com/static-web-new/website/images3.0/X-home/financing_lable.png" class="new-lable-img" alt="">
          <div class="news-desc">驿公里智能获得多家国内外一线投资机构的青睐，累计融资金额达数十亿元</div>
          <div class="read-news-button">
            点击阅读
          </div>
        </div>
        <div class="icon-box">
                    <span class="iconfont icon-arrow-left"></span>
                    <span class="m-l-5 m-r-5">1/2</span>
                    
                    <span class="iconfont icon-youjiantou"></span>
        </div>
        <div class="news-list-wrapper swiper-container swiper-container-horizontal swiper-container-android">
            <van-swipe
              class="vant_swipe3"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item in 2 " :key="item">
                  <div class="news-img-box">
                      <div class="item" v-for="items in 3" :key="items">
                          <div class="img-box">
                              <img src="../assets/shihua.jpg" alt="">
                          </div>
                          <div class="text-box">
                              儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a
                          </div>
                          <div class="bottom_img-box">
                            <img class="bottom_img" src="../assets/baidu.png" alt="">
                          </div>
                          
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
        </div>
      </div>
    </div> -->
    
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
          <div class="news-desc">驿公里智能获得多家国内外一线投资机构的青睐，累计融资金额达数十亿元</div>
          <div class="read-news-button">
            点击阅读
          </div>
        </div>
        <div class="icon-box">
                    <span class="iconfont icon-arrow-left"></span>
                    <span class="m-l-5 m-r-5">1/2</span>
                    
                    <span class="iconfont icon-youjiantou"></span>
        </div>
        <div class="news-list-wrapper swiper-container swiper-container-horizontal swiper-container-android hide_425">
            <van-swipe
              class="vant_swipe3"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item in 2 " :key="item">
                  <div class="news-img-box">
                      <div class="item" v-for="items in 3" :key="items">
                          <div class="img-box">
                              <img src="../assets/shihua.jpg" alt="">
                          </div>
                          <div class="text-box">
                              儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a
                          </div>
                          <div class="bottom_img-box">
                            <img class="bottom_img" src="../assets/baidu.png" alt="">
                          </div>
                          
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
        </div>
          <div class="news-list-wrapper2  swiper-container-horizontal swiper-container-android show_425">
            <van-swipe
              class="vant_swipe3 vant_swipe_425"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item in 2 " :key="item">
                  <div class="news-img-box2">
                      <div class="item" v-for="items in 3" :key="items">
                          <div class="img-box">
                              <img src="../assets/shihua.jpg" alt="">
                          </div>
                          <div class="text-box">
                              儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a
                          </div>
                          <div class="bottom_img-box">
                            <img class="bottom_img" src="../assets/baidu.png" alt="">
                          </div>
                          
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
        </div>
      </div>
    </div>
    <div class="green_bg">
      <div class="container green_bg">
      <div class="huoban_box green_bg">
       <div class="title">
         我们的合作伙伴
       </div>

       <div class="huoban_img">
         <div v-for="(item,index) in 15" :key="item">
            <img  v-if="index%2==0"  src="../assets/ali.jpg" alt="">
            <img v-else  src="../assets/shihua.jpg" alt="">
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
      <div class="scroll_box" ref="personWrap">
        <div class="item-box" ref="personTab">
          <div class="item" v-for="item in 20" :key="item">
              <img src="../assets/banner.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
   </div>
    </div>
   
    

    <div class="blue-bg">
      <div class="left">
        fafafafafafafa
      </div>
      <div class="right">
        <div class="butn">
          join us now
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
       swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
      scroll:null,
      imgurl:'https://source.1kmxc.com/static-web-new/website/images3.0/X-home/alpha_home_bg_001.png',
        bg_arr:[{
            title:'好吉色',
            content:'好吉色介绍好啊啊'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊'
        },
        {
            title:'好吉色',
            content:'好吉色介绍好啊啊'
        },
        ],
      banner_img: [
        [
            '//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg',
          "//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg",
        ],
        "//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg",
        "//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg",
        [
          "//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg",
          "//img.alicdn.com/bao/uploaded/i3/2208346827954/O1CN01GOgsaS28cyvbQD9N2_!!2208346827954.jpg_240x240.jpg",
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
    };
  },
  created() {
    this.$nextTick(() => {
      this.personScroll(20,240);
    });
  },
  methods: {
    personScroll(num,widths) {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = num * widths;
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
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  
};
</script>

<style scoped lang="scss">
.green_bg{
  background: rgb(50,188,173) !important;
}
.bg_white{
  background: white;
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
  background: rgb(5,190,254);
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
        img{
          margin: auto;
          // width: 100%;
          // height: 100%;
        }
      }
    }
  }
}
.huoban_box{
  background: white;
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
      margin: 10px 1%;
      width: 100px;
      display: flex;
      border-radius: 50%;
      overflow: hidden;
      height: 100px;
      background: white;
    }
     img{
       
       margin:auto;
      max-width: 100%;
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
              flex: 1 0 auto;
                background: white;
                width: 240px;
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
    width: 70%;
    height: 100px;
    background: #e8ebe4;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 99;
    
    position: relative;
    padding: 15px 30px 15px 40px;
    color: #000;
    margin: -50px auto 170px auto;
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
    background: url('../assets/banner.jpg') 0 0 no-repeat;
    background-size: cover;
    height: 300px;
    color: white;
    .pd-box{
        display: flex;
        height: 100%;
    }
    .item-box{
        margin: auto;
        display: flex;
        justify-content: space-between;
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
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 12px;
  flex-wrap: wrap;
  .pd-box-10{
    width: 25%;
    min-width: 150px;
  }
  .item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
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