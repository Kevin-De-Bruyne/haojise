<template>
    <div class="right_nav_box">

        <div class="item-box">
            <div class="item" v-for="item in nav_arr" :key="item.name"
            @click="item_cli(item)" @mouseover="mouseovers(item)" @mouseout="mouselive(item)"
            >
            <div class="erwei-box" v-if="item.name=='微信咨询'&&erwei_show">
                <img :src="data.wechat" alt="">
            </div>
            <div class="show_text" >
                {{item.text}}
            </div>
            <div class="top">
                <img :src="item.img" alt="">
            </div>
            <div class="bottom">
                {{item.name}}
            </div>
        </div>
        </div>
        
   


    </div>
</template>

<script>
let timer=null
export default {
    props:['data'],
    data(){
        return{
            erwei_show:false,
            form:{},
            shows:false,
            nav_arr:[
                {
                name:'在线客服',
                img:require('../assets/kefu.png'),
                text:'在线客服'
            },
            {
                name:'qq咨询',
                img:require('../assets/qq.png'),
                text:'qq在线咨询'
            },
            {
                name:'电话沟通',
                img:require('../assets/phone.png'),
                text:this.data.mobile
            },
            {
                name:'获取方案',
                img:require('../assets/sousuo.png'),
                text:'获取产品报价/方案'
            },
            {
                name:'微信咨询',
                img:require('../assets/wx.png'),
                text:'微信扫一扫，添加客服微信'
            }
            ],
            kefu_show:false
        }
    },
    created(){
        console.log(this.data)
        window.addEventListener('scroll',(e)=>{
                let scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
                if(scrollTop>200){
                    this.shows=true
                }else{
                    this.shows=false
                }
		},true)
    },
    mounted() {

    },
    methods: {
        mouseovers(item){
            if(item.name=='微信咨询'){
                timer=setTimeout(() => {
                    this.erwei_show=true
                }, 800);
            }
        },
        mouselive(item){
            console.log(item.name)
            if(item.name=='微信咨询'){
                this.erwei_show=false
                clearTimeout(timer)
                
            }
        },
        item_cli(item){
            this.$emit('cli',item.name)
            
        }
    },
}
</script>

<style scoped lang="scss">
.erwei-box{
    position: absolute;
    left: -100%;
    bottom: 0;
    width: 150px;
    height: 150px;
    // padding: 20px;
}
@media screen and (max-width:500px){
    .item-box{
        .item{
            width: 60px !important;
            height: 60px !important;
            margin: 0 0 5px 0 !important;
            img{
                width: 20px !important;
                height: 20px !important;
            }
        }
        .bottom{
            font-size: 12px !important;
        }
    }
}
   .right_nav_box{
       position: fixed;
       right: 0;
       top: 50%;
       z-index: 998;
       transform: translateY(-50%);
       .item-box{
           position: relative;
           .item:hover .show_text{
               width: 100% !important;
               height: 100% !important;
               opacity: 1 !important;
               visibility: visible !important;
            //    display: block !important;
           }
           .show_text{
               display: flex;
               align-items: center;
               justify-content: center;
               height: 0;
               width: 0;
               overflow: hidden;
               text-align: center;
               position: relative;
               z-index: 1;
               opacity: 0;
               visibility: hidden;
           }
           .item:hover::before{
               width: 100% !important;
           }
           .item:hover{
               width: 156px !important;
               background-color: transparent !important;
           }
           .item:hover .top{
               opacity: 0 !important;
               display: none !important;
           }
           .item:hover .bottom{
               display: none !important;
               opacity: 0 !important;
           }
           .item:nth-child(1){
               top: 0;
           }
           .item:nth-child(2){
               top: 90px;
           }
           .item:nth-child(3){
               top: 180px;
           }
           .item:nth-child(4){
               top: 270px;
           }
           .item:nth-child(5){
               top: 360px;
               position: relative;
           }
           .item::before{
               content: "";
                background-color: rgba(32,176,159,.8);
                position: absolute;
    height: 100%;
    width: 0;
    transition: all .8s ease;
           }
           .item{
               right: 0;
               margin: 0 0 10px 0;
               background: rgba(0,0,0,0.5);
               width: 80px;
               height: 80px;
               color: white;
               position: absolute;
               cursor: pointer;
               transition: all .3s ease;
               .top{
                   display: flex;
                   img{
                       margin: 10px auto auto auto;
                       width: 30px;
                       height: 30px;
                   }
               }
               .bottom{
                   text-align: center;
                   margin: 5px 0 0 0;
                   font-size: 16px;
               }
           }
       }
   }
</style>