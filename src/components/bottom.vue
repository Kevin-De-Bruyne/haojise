<template>
<div class="bottom_box">
 <div class="container" v-if="data.down_word">
        <el-row class="hide_378">

        
            <el-col :sm="6" class="hidden-sm-and-down" :xs="12">
                <div class="img-box">
                    <img :src="data.down_img" alt="">
                </div>
            </el-col>
            <el-col :sm="6" :xs="8" class="bottom-box1 bottom-box">
                <div class="title">
                    {{data.down_word.title}}
                </div>
                <ul>
                    <li v-for="(item,index) in data.down_word.content" :key="index">{{item}}</li>
                </ul>
            </el-col>
            <el-col :sm="6" :xs="8" class="bottom-box2 bottom-box">
                <div class="title">
                    {{data.down_img_s.title}}
                </div>
                <div class="item-box">
                    <div class="item" v-for="(item,index) in data.down_img_s.content" :key="index">
                        <div class="left_img">
                            <img :src="item.above_img" alt="">
                        </div>
                        <div class="right_text">
                            <div class="text1">
                                {{item.center_text}}
                            </div>
                            <!-- <div class="text2">
                                好吉色
                            </div> -->
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :sm="6" :xs="8" class="bottom-box3 bottom-box">
                <div class="title">
                    {{data.down_img_word.title}}
                </div>
                <div class="item-box">
                    <div class="item" v-for="(item,index) in data.down_img_word.content" :key="index">
                        <div class="left_img">
                            <img :src="item.above_img" alt="">
                        </div>
                        <div class="right_text">
                            <div class="text1">
                                {{item.center_text}}
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        
       </el-row>

       <el-row class="show_378">

        
            <el-col :sm="6" class="hidden-sm-and-down" :xs="12">
                <div class="img-box">
                    <img :src="data.down_img" alt="">
                </div>
            </el-col>
            <el-col :sm="6" :xs="12" class="bottom-box1 bottom-box">
                <div class="title">
                    {{data.down_word.title}}
                </div>
                <ul>
                    <li v-for="(item,index) in data.down_word.content" :key="index">{{item}}</li>
                </ul>
                  <div :sm="6" :xs="24" class="bottom-box3 bottom-box3_min bottom-box">
                <div class="title">
                    {{data.down_img_word.title}}
                </div>
                <div class="item-box">
                    <div class="item" v-for="(item,index) in data.down_img_word.content" :key="index">
                        <div class="left_img">
                            <img :src="item.above_img" alt="">
                        </div>
                        <div class="right_text">
                            <div class="text1">
                                {{item.center_text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </el-col>
            <el-col :sm="6" :xs="12" class="bottom-box2 bottom-box">
                <div class="title">
                    {{data.down_img_s.title}}
                </div>
                <div class="item-box">
                    <div class="item" v-for="(item,index) in data.down_img_s.content" :key="index">
                        <div class="left_img">
                            <img :src="item.above_img" alt="">
                        </div>
                        <div class="right_text">
                            <div class="text1">
                                {{item.center_text}}
                            </div>
                            <!-- <div class="text2">
                                好吉色
                            </div> -->
                        </div>
                    </div>
                </div>
            </el-col>
          
        
       </el-row>
       <div class="bottom_texts">
           Copyright&nbsp;©&nbsp;浙江好吉色食品有限公司&nbsp;&nbsp;浙ICP备20016825号&nbsp;&nbsp;技术支持:广州易合网信息技术有限公司
       </div>
    </div>
</div>
   
</template>

<script>
export default {
    created() {
        this.getdata()
    },
    data(){
        return{
            data:{}
        }
    },
    methods: {
        getdata(){
            this.ajax({
                url:'index/index/bottom_data'
            }).then(res=>{
                this.data=res.data
            })
        }
    },
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 378px){
    
    .hide_378{
        display: none !important;
    }
}
@media screen and (min-width: 379px){
    .show_378{
         display: none !important;
    }
}
.bottom_texts{
    text-align: center;
    font-size: 12px;
    color: rgb(168,169,169);
}
@media screen and (max-width:426px) {
    .bottom_box{
        text-align: center !important;
        ul{
            li{
            list-style-type: none !important;
            }
        }
        img{
            display: block;
        }
    }
}
.container{
    background: #676161;
       box-sizing: border-box;
       padding: 6% 4% 3% 4%;
}
img{
    width: 100%;
    height: 100%;
}
   .bottom_box{
       background:#676161;
    //    background: rgb(23,23,25);
      
       .left{
           display: flex;
       }
       .right{
           display: flex;
       }
       .img-box{    
           height: 100%;
           display: flex;
           padding: 0 50px;
           img{
               margin: auto;
           }
       }
       .bottom-box{
           .title{
               color: white;
               font-size: 14px;
               margin: 0 0 30px 0;
           }

       }
       .bottom-box3_min{
           .title{
               margin: 30px 0 10px 0 !important;
           }
           .item{
               justify-content: center;
           }
       }
       .bottom-box1{
           
           ul{
               li{
                   list-style-type: disc;
                   color:  rgb(168,169,169);
                   margin: 5px 0;
                   font-size: 12px;
               }
               li::before{
                   content: '';
                   width: 5px;
                   height: 5px;
                   background: rgb(168,169,169);
                //    border-radius: 50%;
               }
           }
       }
       .bottom-box2{
           .item-box{
               .item{
                   display: flex;
                   flex-wrap: wrap;
                //    height: 70px;
                   padding: 5px 0;
                   .left_img{
                       margin: 0 5px 0 0;
                       width: 100px;
                       height: 100%;
                   }
                   .right_text{
                       line-height: 25px;
                       font-size: 12px;
                       color:  rgb(168,169,169);
                   }
               }
           }
       }
       .bottom-box3{
           .item-box{
               .item{
                   padding: 5px 0;
                   display: flex;
                   height: 90px;
               }
           }
           .left_img{
               margin: 0 5px 0 0;
                width: 110px;
           }
           .right_text{
               color:  rgb(168,169,169);
               font-size: 12px;
           }
       }
   }
</style>