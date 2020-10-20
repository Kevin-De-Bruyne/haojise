<template>
    <div class="top_nav_box">
        <div class="container">
            <img class="logo_img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt="">
        <div class="right-item">
            <div class="item" v-for="(item) in top_arr" :key="item.path"
            @click="$route.path==item.path?$router.go(item.path):none()" 
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
    .top_nav_box{
        
        background: white;

       
        .logo_img{
            width: 70px;
            height: 40px;
            border-radius: 5px;
        }
        .right-item{
            color: #000;
            font-size: 16px;
            display: flex;
            width: 700px;
            justify-content: space-between;
        }
    }
    .container{
        box-sizing: border-box;
        padding:  5px 10px 5px 25px;
        display: flex;
         align-items: center;
        justify-content: space-between;
    }
</style>