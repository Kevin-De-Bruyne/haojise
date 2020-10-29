<template>
  <div class="content">
    <!-- <top-nav @gobottom="gobottom"  />   -->

    <div class="shichang-box">
      <div class="container-min">
        <div class="title-box">
          <div class="text1">{{data.sales_market.title}}</div>
          <div class="text2">{{data.sales_market.content}}</div>
        </div>
        <el-row class="img-box" :gutter="20">
          <el-col
          class="items"
            v-for="(item, index) in data.sales_market.con_img"
            :sm="8"
            :xs="12"
            :key="index"
          >
            <div class="top" :style="{backgroundImage: `url(${item.img_path})`}">
              <!-- <img :src="item.img_path" alt="" /> -->
            </div>
            <div class="bottom">
              {{ item.center_text }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="jiejue-box" >
      <div class="container-min">
        <div class="title-box">
          <div class="text1">{{data.our_strengths.title}}</div>
          <div class="text2">
            {{data.our_strengths.content}}
          </div>
        </div>
        <el-row :gutter="20">
          <el-col
            :sm="8"
            :xs="8"
            v-for="(item, index) in data.our_strengths.path"
            :key="index"
          >
          <div class="img-box" :style="{backgroundImage:`url(${item})`}">
          </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="pingjia_box" ref="flex_3">
      <div class="container">
        <div class="title">看看***怎么说</div>
        <el-row class="pl_box2">
          <el-col :sm="12" :xs="24" v-for="(item,index) in data.evaluate" :key="index">
            <div class="item">
              <div class="left_img" :style="{backgroundImage:`url(${item.out_path})`}">
                
              </div>
              <div class="rights">
                <div class="text1">
                  {{item.out_text}}
                </div>
                <div class="text2">
                  <div class="left">{{item.address}}</div>
                  <div class="right" @click="goDetail(item)">阅读</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="title_map">全国销售点</div>
    <div id="main" class="hidde_1375" :style="{width: '100%', height: '800px'}"></div>

    <div class="form-box" ref="form_height">
      <div class="title">
        <span id="caigou"> 采购咨询 </span>
      </div>

      <div class="form">
        <div class="container">

        
        <el-row :gutter="20">
          <el-col :sm="8" :xs="24">
            <div class="text">姓名</div>
            <input type="text" v-model="user.name" placeholder="请输入您的姓名" />
          </el-col>
          <el-col :sm="8" :xs="24">
            <div class="text">手机号</div>
            <input type="text" v-model="user.phone" placeholder="请输入您的手机号" />
          </el-col>
          <el-col :sm="8" :xs="24">
            <div class="text">意向区域</div>
            <el-row :gutter="10">
              <el-col :sm="8" :xs="8">
                <el-select v-model="shen_id" placeholder="请选择省"
                @change="shen_change"
                >
              <el-option
                v-for="(item,index) in shen_arr"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
              </el-col>
            <el-col :sm="8" :xs="8">
               <el-select  v-model="city_id" placeholder="请选择市"
               @change="city_change"
               >
              <el-option
                v-for="(item,index) in city_arr"
                :key="index"
                :label="item.name"
                :value="item.id"
               
              >
              </el-option>
            </el-select>
            </el-col>
            <el-col :sm="8" :xs="8">
              <el-select  v-model="area_id" placeholder="请选择区/县"
              
              >
              <el-option
                v-for="(item,index) in area_arr"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            </el-col>
           
            
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :sm="6" :xs="12">
            <div class="text">
              籍贯
            </div>
            <el-select v-model="user.jiguan_data" placeholder="请选择">
              <el-option
                v-for="(item,index) in jiguan_arr"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>

          <el-col :sm="8" :xs="12">
              <div class="text">
                职业
              </div>
              <input type="text" v-model="user.zhiye" placeholder="请输入您的职业">
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <div class="text">
              公司名称
            </div>
            <input type="text" v-model="user.gongsi" placeholder="请输入您的公司名称">
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <div class="text">
            性别
          </div>
          <div class="sx-box">
            <el-radio v-model="user.sex_radio" label="1">男</el-radio>
            <el-radio v-model="user.sex_radio" label="2">女</el-radio>
          </div>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col>
            <textarea name="" class="beizhu" placeholder="详细描述您的情况，及合作意向，我们会尽快给您回复" v-model="user.content" id="" cols="30" rows="10"></textarea>
          </el-col>
        </el-row>

        <div class="butn" @click="submit()">
          提交
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/top_nav";
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js'

export default {
  data() {
    
BizQQWPA.addCustom({
    aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
    nameAccount: '1069617130', //指定的聊天 QQ 号码
    selector: 'contactQQ' //触发聊天的标签id
});
    return {
      user:{
        sex_radio:'1'
      },
      jiguan_arr:[
        {
          value:1,
          label:'湖南'
        },
        {
          value:2,
          label:'上海'
        },
        {
          value:3,
          label:'北京'
        },
      ],
      swiper_arr: [
        require("../assets/swiper.jpg"),
        require("../assets/swiper.jpg"),
      ],
      jiejue_arr: [
        { name: "熬夜", img: require("../assets/aoye.jpg") },
        { name: "频繁的性生活", img: require("../assets/jiaoji.jpg") },
        { name: "某26岁程序员", img: require("../assets/it.jpg") },
      ],
      data:{
        evaluate:[],
        our_strengths:{},
        sales_market:{},
        sales_office:[]
      },
      map_data:[],
      shen_arr:[],
       city_arr:[],
      area_arr:[],
      shen_id:'',
      city_id:'',
      area_id:''
    };
  },
  mounted() {
     
  },
  created() {
    
    this.getdata()
    this.getshen()
  },
  methods: {
    goDetail(item){
      let json=JSON.stringify(item)
      this.$router.push('/news_detail?data='+json)
    },
    getshen(){
      this.ajax({
        url:'index/index/get_province'
      }).then(res=>{
        this.shen_arr=res.province
      })
    },
    shen_change(){
        this.ajax({
          url:'index/index/get_city',
          data:{
            id:this.shen_id
          }
        }).then(res=>{
           this.city_arr=res.city
        })
    },
    city_change(){
        this.ajax({
          url:'index/index/get_district',
          data:{
            id:this.city_id
          }
        }).then(res=>{
            this.area_arr=res.district
        })
    },
    submit(){
      let {user}=this
      this.ajax({
        url:'index/index/pro_con',
        data:{
                 name:user.name,
mobile:user.phone,
pid:this.shen_id,
cid:this.city_id,
did:this.area_id,
native_place:user.jiguan_data,
occupation:user.zhiye,
corporate_name:user.gongsi,
sex:user.sex_radio,
describe:user.content
        }
      }).then(res=>{
          this.$toast('提交成功')
      })
    },
    getdata(){
      this.ajax({
        url:'index/index/recruitment'
      }).then(res=>{
        this.data=res.data
        this.map_data=this.data.sales_office
        
        this.mapInit()
      })
    },
    mapInit(){
      var option = {  
              tooltip: {},
                 legend: {
                            orient: 'vertical',
                            left: 'center',
                            top:'middle',
                            data:['']
                        },      
                 selectedMode: 'single',
                 series : [                         
                            {
                              zoom:1.2,
                              name: '', 
                              type: 'map',
                              mapType: 'china',
                              itemStyle: {
                                   borderColor: 'rgba(0, 0, 0, 0.2)',
                                   areaColor:'rgb(253,217,3)'
                                },
                                label: {
                                    normal: {
                                        show: true
                                    }
                                },
                                data:this.map_data
                            }
                        ]
               }
        let map=document.querySelector('#main')
    // let map=this.$refs.map
    var myChart = echarts.init(map);
        // 指定图表的配置项和数据

        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
           myChart.setOption(option, true);
        }
        if(this.$route.query.scroll){
      this.gobottom()
    }
    },
    gobottom(){
       window.scrollTo({ 
                top: this.$refs.form_height.offsetTop-100, 
                behavior: "smooth" 
      });
    }
  },
  components: {
    topNav,
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1375px){
    .hidde_1375{
      // display: none !important;
    }
}
.form-box{
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  background: white;
  .beizhu{
    height: 100px;
    width: 100%;
    margin: 10px 0 10px 0;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
  }
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
  .title{
     width: 50%;
     margin: 0 auto 20px auto;
     border-bottom: 1px solid #dcdcdc;
     text-align: center;
     span{
       position: relative;
       top: 20px;

       display: inline-block;
       background: white;
       font-size: 28px;
       padding: 0 30px;
       z-index: 1;
     }
  }
  .form{
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 4%;
    border-radius: 20px;
    margin: 60px 0 0 0;
    .text{
      font-size: 16px;
      margin: 0 0 10px 0;
    }
    input{
      width: 100%;
    height: 46px;
    background: #fff;
    border: 1px solid #dcdcdc;
    padding: 11px 15px;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
    }
    input::placeholder{
        color: #999;
    }
    input:focus{
        border-bottom: 2px solid rgb(38,166,154) !important;
        height: 46px !important;
    }
    .el-col{
      margin: 10px 0;
    }
  }
}
.title_map {
    color: #000;
    text-align: center;
    font-size: 28px;
    background: white;
    padding: 10px 0 20px 0;
  }
.pingjia_box {
  background: white;
  box-sizing: border-box;
  padding: 6% 6% 5% 6%;
  .title {
    color: #000;
    text-align: center;
    font-size: 28px;
    margin: 0 0 2% 0;
  }
  .img-box {
    display: flex;
    margin: 0 0 10% 0;
    
    img {
      margin: auto;
    }
  }
  .pl_box2 {
    .item {
      margin: 0 3% 3% 0;
      background: white;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      display: flex;

      box-sizing: border-box;
      padding: 3%;
      .left_img {
        width: 100px;
        height: 100px;
        margin: 0 3% 0 0;
        background-size: cover;
        background-position: 50%;
            background-repeat: no-repeat;
      }
      .rights {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        .text1 {
          font-size: 18px;
        }
        .text2 {
          display: flex;
          justify-content: space-between;
          .left {
            color: #999;
            font-size: 16px;
          }
          .right {
            color: #4a90e2;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.jiejue-box {
  background: rgb(252, 240, 221);
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  .img-box{
    background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100%;
  }
  .title-box {
    margin: 0 0 8% 0;
    text-align: center;
    .text1 {
      font-size: 28px;
      margin: 0 0 3% 0;
    }
    .text2 {
      font-size: 16px;
    }
  }
}
.shichang-box {
  background: white;
  box-sizing: border-box;
  padding: 6% 4% 4% 4%;
  .title-box {
    margin: 0 0 8% 0;
    text-align: center;
    .text1 {
      font-size: 28px;
      margin: 0 0 3% 0;
    }
    .text2 {
      font-size: 16px;
    }
  }
 .top{
         width: 100%;
         padding-bottom: 100%;
         background-position: 50%;
         background-repeat: no-repeat;
    background-size: cover;
       }
  .bottom {
    text-align: center;
    margin: 15px 0 0 0;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
    height: 50px;

  }
}
.container-min {
  max-width: 850px;
  margin: auto;
  
}
.banner_box {
  position: relative;
  // height: 500px;
  img {
    width: 100% !important;
    height: auto !important;
  }
 
}
</style>