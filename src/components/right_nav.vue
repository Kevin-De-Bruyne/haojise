<template>
    <div class="right_nav_box">

        <div class="item-box">
            <div class="item" v-for="item in nav_arr" :key="item.name"
            @click="item_cli(item)"
            >
            <div class="show_text">
                在线咨询
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
export default {
    props:['data'],
    data(){
        return{
            form:{},
            shows:false,
            nav_arr:[
                {
                name:'在线客服',
                img:require('../assets/kefu.png')
            },
            {
                name:'qq咨询',
                img:require('../assets/qq.png')
            },
            {
                name:'电话沟通',
                img:require('../assets/phone.png')
            },
            {
                name:'获取方案',
                img:require('../assets/sousuo.png')
            },
            {
                name:'微信咨询',
                img:require('../assets/wx.png')
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
    methods: {
        item_cli(item){
            this.$emit('cli',item.name)
            
        }
    },
}
</script>

<style scoped lang="scss">
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
               width: 100%;
               display: block !important;
           }
           .show_text{
               line-height: 80px;
               height: 100%;
               text-align: center;
               position: relative;
               z-index: 1;
               display: none;
           }
           .item:hover::before{
               width: 100% !important;
           }
           .item:hover{
               width: 156px !important;
               background-color: transparent !important;
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