<template>
    <div class="content">
        <topNav black="true" />

        <el-row :gutter="20">
             <el-col class="text-box" :xs="24" :sm="17">
            <div class="title">
                驿公里无人智能洗车高效实惠 备受青睐
            </div>
            <div class="time-box">
                <span class="text1 m-r-20">
                    媒体报道：天极网
                </span>
                <span class="text2">
                    时间：2020-09-30
                </span>
            </div>
        </el-col>
        <el-col class="yuedu_box hidden-sm-and-down" :sm="7">
            <div class="title">
                相关阅读
            </div>
            <div class="item">
                <div class="top">
                    <img src="https://source.1kmxc.com/Big/Uploads/20200930/59c419cf-8958-46ea-acdc-c877b5ef3607.jpg" alt="">
                </div>
                <div class="texts">
                    驿公里智能洗车 主打无人化黑科技
                </div>
            </div>
        </el-col>
        </el-row>

        

        <div class="news_detail">
            富文本富文本富文本
        </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
    components:{
        topNav
    }
}
</script>

<style scoped lang="scss">
.yuedu_box{
    .title{
        font-size: 20px;
        margin: 0 0 3% 0;
    }
    .item{
        margin: 0 0 2% 0;
        .texts{
            box-sizing: border-box;
            padding: 5px;

        }
    }
}
   .content{
       background: white;
       box-sizing: border-box;
       padding: 120px 4% 4% 4%;
       .text-box{
           .title{
               font-weight: bold;
               font-size: 28px;
               margin: 0 0 2% 0;
           }
       }
       .time-box{
           border-top: 1px solid #eee;
           border-bottom: 1px solid #eee;
           height: 50px;
           line-height: 48px;
           font-size: 14px;
       }
       .news_detail{
           box-sizing: border-box;
           padding: 3% 4% 4% 3%;
           /deep/img{
               display: block;
               margin: 20px auto;
           }
       }
   }
</style>