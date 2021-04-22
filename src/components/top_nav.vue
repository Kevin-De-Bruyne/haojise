<template>
<div class="banner_box wow slideInUp">
    <div class="butn top_butn" v-if="$route.path=='/hezuo'" @click="gobottom()">
            采购咨询
        </div>
        
      <div class="top_nav_box" ref="topnav" :class="{'fiex':top_flex||black}">
        
        <div class="h-60 header_box ">
            <img class="logo_img" src="../assets/logo.png" alt="">
        <div class="right-item hide_850">
            <div class="item" v-for="(item) in top_arr" :key="item.path"
            @click="$route.path==item.path?none():$router.push(item.path)" 
            :class="{'choise_class':$route.path==item.path}"
            >
                {{item.name}}
            </div>
        </div>
        <div class="meun-icon show_850" @click="nav_show=!nav_show">
            <span class="iconfont icon-ego-menu"></span>
        </div>
        </div>

        <div>
            <transition name="bg_yy">
                <div class="bg-yy" v-show="nav_show" @click="nav_show=false">
            
                </div>
            </transition>
            
                <transition name="close_style">
             <div class="right_meun" v-show="nav_show">
            <div class="close-box">
                <span @click="nav_show=false" class="iconfont icon-guanbi"></span>
            </div>
            <div class="meun-list">
                <div class="item" v-for="item in top_arr" :key="item.name"
                @click="gopush(item)" 
                :class="{'choise_class2':$route.path==item.path}"
                >
                    {{item.name}}
                </div>
            </div>
        </div>
        </transition>
        
        </div>
        
        
       
        
    </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in data.banner" :key="index">
          <img
            :src="item.path"
            alt=""
            @load="img_load"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    
</template>

<script>
export default {
    props:['black'],
    data(){
        return{
            data:{},
            nav_show:false,
            top_arr:[
                {
                name:'首页',
                path:'/'
               },
               {
                name:'王老吉好吉色',
                path:'/haojise'
               },
               {
                name:'走进好吉色',
                path:'/gongsi'
               },
               {
                name:'新闻报道',
                path:'/news_list'
               },
               {
                name:'招商加盟',
                path:'/hezuo'
               },
            ],
             top_flex:false
        }
    },
    created() {

        this.getdata()
        let ct=document.documentElement.scrollTop
        if(ct>=30){
            this.top_flex=true
        }
        this.scroll()
    },
    mounted() {
        
        if(this.black){
            let nav=this.$refs.topnav
            let z='rgb(0,0,0)'
             nav.style.background = z;
        }
        
    },
    methods: {
        gopush(item){
            this.nav_show=false
            this.$route.path==item.path?'':this.$router.push(item.path)
        },
        gobottom(){
            window.location.hash='#caigou'
            console.log(this.$refs.form_height)
       window.scrollTo({ 
                top: this.$refs.form_height.offsetTop-100, 
                behavior: "smooth" 
      });
    },
        // gobottom(){
        //     this.$emit('gobottom')
        // },
        img_load(){
            this.$emit('imgload')
        },
        getdata(){
      this.ajax({
        url:'index/index/index'
      }).then(res=>{
        this.data=res.data
      })
    },
         scroll(){
			console.log(123123)
			this.$nextTick(()=>{
                let nav=this.$refs.topnav
                console.log(nav)
				let bannerHeight = nav.offsetHeight;
                let scrollTop
                if(this.black){
                    return
                }
				window.addEventListener('scroll',(e)=>{
                   
                     scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
                     if(scrollTop>=30){
                       this.top_flex=true
                   }else{
                       console.log(this.black)
                       this.top_flex=false
                   }
                    //  console.log(e)
					let opacity = scrollTop * 0.65 / bannerHeight;
					if(opacity>0.5){
                        opacity=0.5
                    }
                    let z='rgba(0,0,0, ' + opacity+')'
                     nav.style.background = z;
				},true)
			})
		},
        none(){

        }
    },
}
</script>



<style scoped lang="scss">
  .butn{
    width: 170px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 7px;
    margin: 40px auto 0 auto;
    background-color: #fdd903;
    color: #333;
    cursor: pointer;

  }
  @media screen and (max-width: 600px){
    .top_butn{
        width: 140px !important;
    }
  }
  @media screen and (max-width:500px){
      .top_butn{
          width: 100px !important;
          height: 40px !important;
          line-height: 40px !important;
      }
  }
   @media screen and (max-width:400px){
      .top_butn{
          width: 70px !important;
          height: 30px !important;
          line-height: 30px !important;
          font-size: 12px !important;
          border-radius: 3px !important;
      }
  }
   .top_butn {
    cursor: pointer;
    position: absolute;
    bottom: 15%;
    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
    width: 170px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 7px;
    background-color: #fdd903;
    color: #333;
    box-shadow: 0 12px 14px 0 rgba(245, 166, 35, 0.3);
    z-index: 99;
  }
.banner_box {
    position: relative;
  // height: 500px;
  img {
    width: 100% !important;
    height: auto !important;
  }
}
.bg-yy{
    background: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
   height: 100vh;
}
.choise_class2{
    color: #ffba00 !important;
}
.right_meun{
    background: white;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px  15px 0 15px;
    position: fixed;
    right: 0;
    top: 0;
    width: 200px;
    .close-box{
        text-align: right;
        color: #000;
        .iconfont{
            font-size: 24px;
        }
    }
    .meun-list{
        margin: 10px 0 0 0;
        .item{
            border-bottom: 1px solid #c2c2c2;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            padding: 0 10px;
            font-size: 16px;
            color: #000;
        }
    }
}
.close_style-enter-active,
    .close_style-leave-active{
        will-change: transform;
        transition: all 400ms;
    }
    .close_style-enter{
        transform: translate3d(100%, 0, 0);
    }
    .close_style-leave-active{
        transform: translate3d(100%, 0, 0);
    }

    .bg_yy-enter-active,
    .bg_yy-leave-active{
        will-change: transform;
        transition: all 400ms;
    }
    .bg_yy-enter{
        opacity: 0;
    }
    .bg_yy-leave-active{
        opacity: 0;
    }
.meun-icon{
    font-size: 28px;
    .iconfont{
        font-size: 28px;
    }
}
.fiex{
    position: fixed !important;
    top: 0 !important;
}
.h-60{
    height: 60px;
}
.choise_class{
    border-bottom: 1px solid rgb(174,0,10) !important;
}
    .top_nav_box{
        position: absolute;
        top: 30px;
        left: 0;
        box-sizing: border-box;
        padding: 0 4%;
        z-index: 999;
        width: 100%;

       .header_box{
             box-sizing: border-box;
        display: flex;
         align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        color: white;
        margin: auto;
       }
        .logo_img{
            width: auto !important;
            // width: 100px;
            // height: 40px;
            border-radius: 5px;
        }
        .right-item{
            font-size: 16px;
            display: flex;
            width: 700px;
            justify-content: space-between;
            height: 100%;
            align-items: center;
            .item{
                height: 30px;
                // line-height: 58px;
                cursor: pointer;
            }
        }
    }
    .container{
      
    }
   
</style>