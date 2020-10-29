<template>
    <div class="right_nav_box hidden-sm-and-down">

        <div class="item-box" v-if="shows">
            <div class="item" v-for="item in nav_arr" :key="item.name"
            @click="item_cli(item)"
            >
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
   .right_nav_box{
       position: fixed;
       right: 0;
       top: 50%;
       z-index: 998;
       transform: translateY(-50%);
       .item-box{
           .item{
               margin: 0 0 10px 0;
               background: rgba(0,0,0,0.5);
               width: 80px;
               height: 80px;
               color: white;
               cursor: pointer;
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