<template>
    <div class="content">
    <div class="top_fiex fiex2 hidden-sm-and-down" ref="top_fiex" v-show="top_flex">
             <ul class="container">
             <li v-for="(item,index) in data" :key="index" :class="{'top_choise':top_index==index}" @click="top_index=index">
                 <span>
                     {{item.title}}
                 </span>
             </li>
         </ul>
         
     </div>
     
     <div class="top_fiex hidden-sm-and-down" ref="top_height">
             <ul class="container">
             <li v-for="(item,index) in data" :key="index" :class="{'top_choise':top_index==index}" @click="top_index=index">
                 <span>
                     {{item.title}}
                 </span>
             </li>
         </ul>
         
     </div>

     <div class="tedian1-box" ref="tedian1">
         <div class="text-box">
             <div class="title-text">
            {{data[1]&&data[1].title}}
         </div>
         <div class="title-text2">
             {{data[1]&&data[1].content}}
         </div>
         </div>
         
         <div class="img-box">
             <img :src="data[1]&&data[1].path" alt="">
         </div>
         <el-row class="xiala-box" >
             <el-col class="pd-box" v-for="(item,index) in data[1]&&data[1].pri_cov" :key="index" :xs="24" :sm="8">
                  <div class="item">
                 <div class="title">
                     <span class="text">{{item.title}}</span>
                 <span  :class="[item.xiala?'icon-xiala-copy':'icon-xiala']" class="iconfont icon-xiala f-r"></span>
                 <!-- <span v-else class="iconfont icon-xiala-copy"></span> -->
                 </div>
                 <div class="show_box">
                     {{item.content}}
                 </div>
                 
             </div>
             </el-col>
            
         </el-row>
     </div>

     <div class="tedian1-bg" ref="tedian2" :style="`backgroundImage:url(${data[2]&&data[2].pri_cov.img})`">
          <div class="text-box">
                 <div class="text1">
                     {{data[2]&&data[2].title}}
                 </div>
                 <div class="text2">
                     {{data[2]&&data[2].content}}
                 </div>
             </div>
     </div>
     <div class="white-box">
         <div class="white-container">
            <div class="gray-box hide_725">
                <div class="left" >
                    <div class="text1">
                        {{data[2]&&data[2].pri_cov.title}}
                    </div>
                    <div class="text2">
                        {{data[2]&&data[2].pri_cov.content}}
                    </div>
                </div>
                <div class="right">
                       <img :src="data[2]&&data[2].pri_cov.img" alt="">
                </div>
            </div>
            <div class="gray-box show_725">
                <div class="left" >
                    <div class="text1">
                        {{data[2]&&data[2].pri_cov.title}}
                    </div>
                    <div class="text2">
                        {{data[2]&&data[2].pri_cov.content}}
                    </div>
                </div>
                <div class="right">
                    <img :src="data[2]&&data[2].pri_cov.img" alt="">
                </div>
            </div>
         </div>
     </div>

     <div class="xikong_box" ref="tedian3" :style="`backgroundImage:url(${data[3]&&data[3].path})`">
         <div class="text-box">
             <div class="text1">
                 {{data[3]&&data[3].title}}
             </div>
             <div class="text2">
                 {{data[3]&&data[3].content}}
             </div>
         </div>
     </div>

     <!-- <div class="img_bg">
         <img src="https://source.1kmxc.com/static-web-new/website/images3.0/carwasher/ygl_eco_system.jpg" alt="">
     </div> -->
     <div class="white">
         <el-row class="list-box" :gutter="20">
         <el-col  v-for="(item,index) in data[3]&&data[3].pri_cov" :key="index" :sm="6" :xs="24">
             <div class="item">
                 <div class="text-box">
                 <div class="text1">
                     {{item.title}}
                 </div>
                 <div class="text2">
                     {{item.content}}
                 </div>
             </div>
             <div class="img-box">
                 <img :src="item.img" alt="">
             </div>
             </div>
             
         </el-col>
     </el-row>
     </div>
      <div class="tedian1-box" ref="tedian4">
         <div class="text-box">
             <div class="title-text">
            {{data[4]&&data[4].title}}
         </div>
         <div class="title-text2">
             {{data[4]&&data[4].content}}
         </div>
         </div>
         
         <div class="img-box">
             <img :src="data[4]&&data[4].path" alt="">

         </div>
         
     </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
    props:['mimg_load'],
    data(){
        return{
            data:[],
            add:false,
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
            ],
            top_flex:false
        }
    },
    components:{
        topNav
    },
    created() {
        this.getdata()
        
    },
    mounted() {
        this.initan()
        //  let height=this.$refs.top_height.offsetTop
        //  console.log(height)
        // let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
        // if(scrollTop>=height-60){
        //             //    this.top_flex=true
        // }
    },
    methods: {
        
        initan(){

this.createAn('.left_an','left')
this.createAn('.right_an','right')
this.createAn('.top_an','top')
this.createAn('.bottom_an','bottom')
this.createAn('.rota','rota')
        },
        getdata(){
            this.ajax({
                url:'index/index/peculiarity'
            }).then(res=>{
                this.data=res.list
                console.log(this.data)
                this.img_load()
                this.data[1].pri_cov.forEach(item=>{
                    this.$set(item,'xiala',false)
                })
            })
        },
         img_load(){
        if(this.add){
          return
        }
        this.add=true
           let timel=null
           console.log()
         let height=this.$refs.top_height.offsetTop
                 console.log(height)
           window.addEventListener('scroll',(e)=>{
                   
                    let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
                     if(scrollTop>=height-60){
                       this.top_flex=true
                   }else{
                       this.top_flex=false
                   }
				},true)
      }
    },
    watch: {
        top_index(news,old){
            console.log(news)
            console.log(this.$refs['tedian1'])

            window.scrollTo({ 
                top: this.$refs['tedian'+(news)].offsetTop-100, 
                behavior: "smooth" 
            });
            // document.documentElement.scroll(0,this.$refs['tedian'+(news+1)].offsetTop,true)
            // document.documentElement.scrollTo(0,this.$refs['tedian'+(news+1)].offsetTop,true)
            console.log(this.$refs['tedian'+(news)].offsetTop)
        }
    },
}
</script>

<style scoped lang="scss">
@import url('../../static/css/chao.css');
.white{
    background: white;
}
.list-box{
    width: 90%;
    margin: 0 auto !important;  
    position: relative;
    top: -50px;
    background: #f1f4f6;
    text-align: center;
    // min-width: 965px;
    .item{
        box-sizing: border-box;
        margin: 0 5px;
        // width: 25%;
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
display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */  
        // height: 200px;
        align-items: center;
        justify-content: center;
        img{
            // margin: auto;
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
@media screen and (max-width:540px){
    .xikong_box{
        height: 130vw !important;
    }
    .tedian1-bg{
        height: 130vw !important;
    }
}
.xikong_box{
    background-position: 50% 0;
    background-size: auto 100%;
    height: 680px;
    box-sizing: border-box;
    padding: 6% 4% 0 4%;
    background-repeat: no-repeat;
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
            height: 350px;
            position: relative;
            top: -50px;
            display: flex;
            // flex-wrap: wrap;
            .left{
                height: 100%;
                flex: 0 1 auto;
                // min-width: 70px;
                width: 40%;
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
                width: 60%;
                display: flex;
                flex: 0 1 auto;
                max-width: 500px;
                box-sizing: border-box;
                padding: 10px;
                img{
                    margin: auto;
                }
            }
            
        }
        .show_725{
            display: block;
            height: auto !important;
            .left{
                padding: 30px 0 0 15px;
                width: 100% !important;
                margin: 0 0 15px 0;
            }
            .right{
                width: 100% !important;
            }
        }
    }
}
.tedian1-bg{
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
    padding: 20px 0 ;
    .text-box{
        padding: 5% 20px 3% 20px;
        text-align: center;
        color: #000;
        box-sizing: border-box;
        .title-text{
            font-size: 28px;

        }
        .title-text2{
            margin: 3% 0 0 0;
            font-size: 16px;
            max-width: 700px;
            
            margin: auto;
        }
    }
    .img-box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .xiala-box{
        display: flex;
        flex-wrap: wrap;
        .title{
            display: flex;
             
.text{
   flex: 1;
}
        }
        .show_box{
            margin: 20px 0 0 0;
            font-size: 14px;
            display: none;
        }
        .pd-box{
            // width: 31%;
            font-size: 16px;
            padding: 1%;
            height: 100px;
            .item{  
                transition: all .3s;
                padding: 30px 40px;
                background: white;
                border: 1px solid #e3e3e3;
            }
            .iconfont{
                font-size: 26px;
            }
        }
        .pd-box:hover{
            z-index: 1;
        }
        .item:hover{
                border: 1px solid transparent !important;
                z-index: 1;
                box-shadow: 0 12px 14px 0 rgba(0,0,0,.1);
        }
        .item:hover .show_box{
            display: block !important;
            opacity: 1;
        }
    }

}
@media screen and (max-width:425px){
    .xiala-box{
        .item{
            font-size: 16px;
            padding: 15px 20px !important;
        }
        .pd-box{
            height: auto !important;
        }
    }
}
.top_choise{
    border-bottom: 5px solid #fdd903 !important;
}
.fiex2{
    position: fixed !important;
    top: 60px !important;
}
.top_fiex{
    background: white;
    height: 80px;
    color: #000;
    z-index: 99;
    width: 100%;
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