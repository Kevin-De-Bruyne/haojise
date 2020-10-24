<template>
  <div class="content">
    <div class="banner_box">
      <top-nav />
      <div class="top_butn">采购资讯</div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiper_arr" :key="item">
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="shichang-box">
      <div class="container-min">
        <div class="title-box">
          <div class="text1">我们的销售市场</div>
          <div class="text2">当代年轻人不良的生活习惯,熬夜丶看比赛丶嫖娼</div>
        </div>
        <el-row class="img-box" :gutter="20">
          <el-col
            v-for="(item, index) in jiejue_arr"
            :sm="8"
            :xs="8"
            :key="index"
          >
            <div class="top">
              <img :src="item.img" alt="" />
            </div>
            <div class="bottom">
              {{ item.name }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="jiejue-box">
      <div class="container-min">
        <div class="title-box">
          <div class="text1">我们解决的痛点(优势，人体作用)</div>
          <div class="text2">
            营养丰富，蛋白质是牛肉的六倍。滋阴补阳，秒杀脑白金等保健品
          </div>
        </div>
        <el-row :gutter="20">
          <el-col
            class=""
            :sm="8"
            :xs="8"
            v-for="(item, index) in 3"
            :key="index"
          >
            <img
              src="http://iph.href.lu/432x592?text=3%E5%BC%A0%E7%9B%B8%E5%90%8C%E6%AF%94%E4%BE%8B%E7%9A%84%E5%9B%BE&fg=666666&bg=cccccc"
              alt=""
            />
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="pingjia_box" ref="flex_3">
      <div class="container">
        <div class="title">看看***怎么说</div>
        <el-row class="pl_box2">
          <el-col :sm="12" :xs="24" v-for="item in 4" :key="item">
            <div class="item">
              <div class="left_img">
                <img
                  src="https://iph.href.lu/100x100?text=1%3A1&fg=666666&bg=cccccc"
                  alt=""
                />
              </div>
              <div class="right">
                <div class="text1">
                  可以，俺自从投了你们这个好吉色啊，三年车有了，十年房有了，俺看你们这个好吉色行
                </div>
                <div class="text2">
                  <div class="left">浙江省温州市</div>
                  <div class="right">阅读</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="form-box">
      <div class="title">
        <span> 采购咨询 </span>
      </div>

      <div class="form">
        <div class="container">

        
        <el-row :gutter="20">
          <el-col :sm="8" :xs="24">
            <div class="text">姓名</div>
            <input type="text" placeholder="请输入您的姓名" />
          </el-col>
          <el-col :sm="8" :xs="24">
            <div class="text">手机号</div>
            <input type="text" placeholder="请输入您的手机号" />
          </el-col>
          <el-col :sm="8" :xs="24">
            <div class="text">意向区域</div>
            <el-row :gutter="10">
              <el-col :sm="8" :xs="8">
                <el-select v-model="city_data" placeholder="请选择省">
              <el-option
                v-for="item in city_arr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-col>
            <el-col :sm="8" :xs="8">
               <el-select  v-model="city_data" placeholder="请选择市">
              <el-option
                v-for="item in city_arr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            </el-col>
            <el-col :sm="8" :xs="8">
              <el-select  v-model="city_data" placeholder="请选择区/县">
              <el-option
                v-for="item in city_arr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            </el-col>
           
            
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :sm="6" :xs="12">
            <div class="text">
              籍贯
            </div>
            <el-select v-model="jiguan_data" placeholder="请选择">
              <el-option
                v-for="item in jiguan_arr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>

          <el-col :sm="8" :xs="12">
              <div class="text">
                职业
              </div>
              <input type="text" placeholder="请输入您的职业">
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <div class="text">
              公司名称
            </div>
            <input type="text" placeholder="请输入您的公司名称">
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <div class="text">
            性别
          </div>
          <div class="sx-box">
            <el-radio v-model="sex_radio" label="1">男</el-radio>
            <el-radio v-model="sex_radio" label="2">女</el-radio>
          </div>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <textarea name="" class="beizhu" placeholder="详细描述您的情况，及合作意向，我们会尽快给您回复" v-model="submit.content" id="" cols="30" rows="10"></textarea>
          </el-col>
        </el-row>

        <div class="butn">
          提交
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
  data() {
    return {
      submit:{},
      sex_radio:'1',
      jiguan_arr:[
        {
          value:1,
          label:'湖南'
        },
        {
          value:2,
          label:'上海'
        },
        {
          value:3,
          label:'北京'
        },
      ],
      jiguan_data:'',
      city_arr:[
        {
          value:0,
          label:'北京'
        },
         {
          value:1,
          label:'上海'
        },
         {
          value:3,
          label:'广州'
        }
      ],
      city_data:'',
      swiper_arr: [
        require("../assets/swiper.jpg"),
        require("../assets/swiper.jpg"),
      ],
      jiejue_arr: [
        { name: "熬夜", img: require("../assets/aoye.jpg") },
        { name: "频繁的性生活", img: require("../assets/jiaoji.jpg") },
        { name: "某26岁程序员", img: require("../assets/it.jpg") },
      ],
    };
  },
  components: {
    topNav,
  },
};
</script>

<style scoped lang="scss">
.form-box{
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  background: white;
  .beizhu{
    height: 100px;
    width: 100%;
    margin: 10px 0 10px 0;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
  }
  .butn{
    width: 170px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 7px;
    margin: 40px auto 0 auto;
    background-color: #fdd903;
    color: #333;

  }
  .title{
     width: 40%;
     margin: 0 auto 20px auto;
     border-bottom: 1px solid #dcdcdc;
     text-align: center;
     span{
       position: relative;
       top: 20px;

       display: inline-block;
       background: white;
       font-size: 28px;
       padding: 0 30px;
       z-index: 1;
     }
  }
  .form{
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 4%;
    border-radius: 20px;
    margin: 60px 0 0 0;
    .text{
      font-size: 16px;
      margin: 0 0 10px 0;
    }
    input{
      width: 100%;
    height: 46px;
    background: #fff;
    border: 1px solid #dcdcdc;
    padding: 11px 15px;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
    }
    input::placeholder{
        color: #999;
    }
    input:focus{
        border-bottom: 2px solid rgb(38,166,154) !important;
        height: 46px !important;
    }
    .el-col{
      margin: 10px 0;
    }
  }
}
.pingjia_box {
  background: white;
  box-sizing: border-box;
  padding: 6% 6% 5% 6%;
  .title {
    color: #000;
    text-align: center;
    font-size: 28px;
    margin: 0 0 2% 0;
  }
  .img-box {
    display: flex;
    margin: 0 0 10% 0;
    img {
      margin: auto;
    }
  }
  .pl_box2 {
    .item {
      margin: 0 3% 3% 0;
      background: white;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      display: flex;

      box-sizing: border-box;
      padding: 3%;
      .left_img {
        width: 100px;
        height: 100px;
        margin: 0 3% 0 0;
        flex: 1 0 auto;
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text1 {
          font-size: 18px;
        }
        .text2 {
          display: flex;
          justify-content: space-between;
          .left {
            color: #999;
            font-size: 16px;
          }
          .right {
            color: #4a90e2;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.jiejue-box {
  background: rgb(252, 240, 221);
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  .title-box {
    margin: 0 0 8% 0;
    text-align: center;
    .text1 {
      font-size: 28px;
      margin: 0 0 3% 0;
    }
    .text2 {
      font-size: 16px;
    }
  }
}
.shichang-box {
  background: white;
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  .title-box {
    margin: 0 0 8% 0;
    text-align: center;
    .text1 {
      font-size: 28px;
      margin: 0 0 3% 0;
    }
    .text2 {
      font-size: 16px;
    }
  }
  .top {
  }
  .bottom {
    text-align: center;
    margin: 15px 0 0 0;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
  }
}
.container-min {
  max-width: 850px;
  margin: auto;
}
.banner_box {
  position: relative;
  // height: 500px;
  img {
    width: 100% !important;
    height: auto !important;
  }
  .top_butn {
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: 170px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 7px;
    background-color: #fdd903;
    color: #333;
    box-shadow: 0 12px 14px 0 rgba(245, 166, 35, 0.3);
    z-index: 99;
  }
}
</style>