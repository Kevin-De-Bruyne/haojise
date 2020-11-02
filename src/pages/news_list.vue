<template>
    <div class="content">
        <div class="gray-box">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :sm="6" :xs="12"  v-for="item in data" :key="item"
                    @click.native="goDetail(item)"
                    >
                        <div class="item">
                            <div class="top_img">
                                <img :src="item.big_img" alt="">
                        </div>
                        <div class="text">
                             {{item.center_text}}
                        </div>
                        <div class="bottom-logo">
                            <img :src="item.mini_img" alt="">
                        </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "@/components/top_nav";
export default {
    components:{
        topNav
    },
    data(){
        return{
            data:[],
            swiper_arr:[require('../assets/swiper.jpg'),require('../assets/swiper.jpg')],
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        getdata(){
            this.ajax({
                url:'index/index/news_info'
            }).then(res=>{
                this.data=res.data
            })
        },
        goDetail(item){
            let json=JSON.stringify(item)
            localStorage.setItem('news',json)
            console.log(JSON.parse(localStorage.getItem('news')))
            this.$router.push('/news_detail')
        }
    },
}
</script>

<style scoped lang="scss">
.container{
    background: none !important;
}
    .gray-box{
        box-sizing: border-box;
        padding: 6% 4% 4% 4%;
         background:  rgb(242,242,242);
        .item{
           background: white;
            margin: 0 0 3% 0;
            height: 230px;
            .top_img{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 148px;
            }
        }
        .text{
            box-sizing: border-box;
            padding: 0 10px;
            overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
width: 100%;
height: 42px;
font-size: 14px;
        }
        .bottom-logo{
            height: 40px;
            display: flex;
            img{
                margin: auto;
            }
        }
    }
</style>