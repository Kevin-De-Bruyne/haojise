<template>
  <div>
    <div class="banner_box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in 4" :key="item">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="container">
      <div class="text-box">
        <div class="text1">熬夜加班，就喝好吉色</div>
        <div class="text2">
          熬夜加班，就喝好吉色 If you stay up late and work overtime, you'll
          have a good JISE
        </div>
      </div>

      <div class="icon_list">
        <div class="item" v-for="item in bg_arr" :key="item.name">
          <div class="left">
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
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

      <div class="banner_list">
        <div class="item-box" v-for="(item, index) in banner_img" :key="index">
          <div class="img_box" v-if="!Array.isArray(item)">
            <img :src="item" alt="" />
          </div>
          <div class="swipter_box" v-else>
            <van-swipe
              class="vant_swipe2"
              :autoplay="3000"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item_child in item" :key="item_child">
                <img
                  :src="item_child"
                  alt=""
                />
              </van-swipe-item>
            </van-swipe>
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
          <div class="right">
               <van-swipe
              class="vant_swipe2"
              :autoplay="3000"
              indicator-color="white"
              :touchable="true"
              :vertical="true"
            >
              <van-swipe-item v-for="item in 4 " :key="item">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                  alt="图片加载失败"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
      </div>
    </div>

    <div class="bg_box">
        <div class="pd-box">
             <div class="item-box">
            <div class="item" v-for="item in bg_arr" :key="item.title">
                <div class="top">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt="">
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
       
        <div class="hezuo-box">
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
    </div>
    <div class="container">
        <div class="news-box">
            <div class="left">
                <div class="text1">
                    新闻动态
                </div>
                <div class="text2">
                    CJIFA11231
                </div>
                <div class="yellow-box">
                    fafafa
                </div>
                <div class="text3">
                    新闻动态新闻
                </div>
                <div class="butn">
                    点击阅读
                </div>
                <div class="icon-box">
                    <span class="iconfont icon-arrow-left"></span>
                    <span class="m-l-5 m-r-5">1/2</span>
                    
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="news-swipe">
                     <van-swipe
              class="vant_swipe3"
              indicator-color="white"
              :touchable="true"
            >
              <van-swipe-item v-for="item in 2 " :key="item">
                  <div class="news-img-box">
                      <div class="item" v-for="item in 3" :key="item">
                          <div class="img-box">
                              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt="">
                          </div>
                          <div class="text-box">
                              儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a儿时的配方123a
                          </div>
                          <img class="bottom_img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt="">
                      </div>
                  </div>
              </van-swipe-item>
            </van-swipe>
                </div>

        </div>
    </div>

  </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
  components: {
    topNav,
  },
  data() {
    return {
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
            require('../assets/img.jpg'),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
        ],
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
        [
          "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
          "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
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
};
</script>

<style scoped lang="scss">
.news-box{
    background: white;
    box-sizing: border-box;
    padding: 15px 5px 10px 20px;
    height: 400px;
    margin:70px 0 0 0;
    position: relative;
    .left{
        display: inline-block;
        height: 350px;
        width: 40%;
        background: rgb(159,154,148);
        box-sizing: border-box;
        padding: 15px 0 15px 10px;
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
        .news-swipe{
            height: 200px;
            z-index: 99;
            width: 800px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        .news-img-box{
            width: 100%;
            display: flex;
            height: 100%;
            .item{
                background: white;
                width: 240px;
                margin: 0 10px;
                height: 100%;
                box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.4);
            }
            .img-box{
                height: 140px;
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
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
                width: 100%;
                height: 30px;
            }
        }
    
}
.hezuo-box{
    width: 70%;
    height: 100px;
    background: white;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px 30px 15px 40px;
    color: #000;
    margin: -50px auto 20px auto;
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
    background: url('../assets/img.jpg') 0 0 no-repeat;
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
    margin: 100px 0 70px 0;
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
    flex-wrap: wrap;
    justify-content: space-between;
    .item-box{
        margin: 0 20px;
        height: 300px;
        width: 300px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.icon_list {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 12px;
  flex-wrap: wrap;
  .item {
    background: red;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 20px;

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
  padding: 0 30px;
}
.text-box {
  margin: 20px auto;
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
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
}
.my-swipe {
  height: 100%;
}
</style>