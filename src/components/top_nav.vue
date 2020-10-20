<template>
    <div class="top_nav_box">
        <div class="container h-60 header_box">
            <img class="logo_img" src="../assets/baidu.png" alt="">
        <div class="right-item">
            <div class="item" v-for="(item) in top_arr" :key="item.path"
            @click="$route.path==item.path?none():$router.push(item.path)" 
            :class="{'choise_class':$route.path==item.path}"
            >
                {{item.name}}
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            top_arr:[
                {
                name:'首页',
                path:'/'
               },
               {
                name:'好吉色',
                path:'/haojise'
               },
               {
                name:'走进好吉色',
                path:'/goin_haojise'
               },
               {
                name:'新闻报道',
                path:'/news'
               },
               {
                name:'招商加盟',
                path:'/jiameng'
               },
            ]
        }
    },
    methods: {
        none(){

        }
    },
}
</script>



<style scoped lang="scss">
.header_box{
    box-sizing: border-box;
    padding: 0 10px;
}
.h-60{
    height: 60px;
}
.choise_class{
    border-bottom: 1px solid rgb(174,0,10) !important;
}
    .top_nav_box{
        
        background: white;

       
        .logo_img{
            // width: 100px;
            // height: 40px;
            border-radius: 5px;
        }
        .right-item{
            color: #000;
            font-size: 16px;
            display: flex;
            width: 700px;
            justify-content: space-between;
            height: 100%;
            .item{
                line-height: 58px;
                cursor: pointer;
            }
        }
    }
    .container{
        box-sizing: border-box;
        display: flex;
         align-items: center;
        justify-content: space-between;
    }
</style>