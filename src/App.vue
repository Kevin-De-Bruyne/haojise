<template>
    <div>
      <topNav :data="data"  />
        <router-view :mimg_load="img_" />
        <footers />
        <right :data="data.system" v-if="data.system" @cli="cli" />
             <el-dialog title="提交建议" :visible.sync="kefu_show">
  <el-form :model="form">
    <el-form-item label="标题" >
      <el-input v-model="form.title" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="内容" >
       <el-input type="textarea" v-model="form.content" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="联系方式" >
       <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="kefu_show = false">取 消</el-button>
    <el-button type="primary" @click="submit()">提交</el-button>
  </div>
</el-dialog>
<el-dialog
  title="电话沟通"
  :visible.sync="call_show"
  width="30%"
  >
  <span>请通过以下方式联系</span>
  <span>
    电话号码: {{data.system&&data.system.mobile}}
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="call_show = false">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="微信咨询"
  :visible.sync="wx_show"
  width="30%"
  >
  <img class="wx_img" :src="data.system&&data.system.wechat" alt="">
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="wx_show = false">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>

<script>
import topNav from '@/components/top_nav'
import footers from '@/components/bottom'
import right_nav from '@/components/right_nav'
export default {
    components:{
        topNav,
        footers,
        right:right_nav
    },
    data(){
      return{
        form:{},
        kefu_show:false,
        data:{},
        call_show:false,
        wx_show:false,
        img_:false
      }
    },
    created() {
        this.getdata()
        
    },
    methods: {
      initan(){
     
      },
      img_load(){
        console.log('jfiajifajiofjaoifjoaaa')
        this.img_=true
      },
      submit(){
        this.ajax({
          url:'index/index/add_online_message',
          data:{
            title:this.form.title,
            content:this.form.content,
            mobile:this.form.phone
          }
        }).then(res=>{
          this.$toast('提交成功')
          this.kefu_show=false
        })
      },
      getdata(){
        this.ajax({
          url:'index/index/index'
        }).then(res=>{
            this.data=res.data
            console.log(this.data.system)
        })
      },
      cli(e){
        if(e=='在线客服'){
          this.kefu_show=true
        }
        if(e=='电话沟通'){
          this.call_show=true
        }
        if(e=='微信咨询'){
          this.wx_show=true
        }
        if(e=='获取方案'){
            this.$router.push('/hezuo?scroll=true')
        }
        if(e=='qq咨询'){
            window.location.href=`tencent://message/?uin=${this.data.system.qq}&Site=http://vps.shuidazhe.com&Menu=yes`
        }
        
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.initan()
      })
    },
}
</script>

<style  lang="scss">
.wx_img{
  margin: auto;
  display: block;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  background: white;
}
body{
  background: rgb(242,242,242);
}
    @import url('../static/css/default.css');
    .van-swipe{
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
</style>