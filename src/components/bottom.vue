<template>
<div class="bottom_box">
 <div class="container" v-if="data.down_word">
        <el-row>

        
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
            <el-col :sm="6" :xs="24" class="bottom-box3 bottom-box">
                <div class="title">
                    好吉色好吉色
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
@media screen and (max-width:426px) {
    .bottom_box{
        text-align: center !important;
        img{
            display: block;
        }
    }
}
.container{
    background: #000;
       box-sizing: border-box;
       padding: 60px 40px 20px 40px;
}
img{
    width: 100%;
    height: 100%;
}
   .bottom_box{
       background:#000;
    //    background: rgb(23,23,25);
      
       .left{
           display: flex;
       }
       .right{
           display: flex;
       }
       .img-box{    
           height: 100%;
           width: 200px;
           display: flex;
           padding: 0 50px;
           img{
               margin: auto;
           }
       }
       .bottom-box{
            padding: 0 20px;
           .title{
               color: white;
               font-size: 14px;
               margin: 0 0 30px 0;
           }

       }
       .bottom-box1{
           
           ul{
               li{
                   list-style-type: disc;
                   color: #999;
                   margin: 5px 0;
                   font-size: 12px;
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
                       color: #999;
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
               flex: 1;
               color: #999;
               font-size: 12px;
           }
       }
   }
</style>