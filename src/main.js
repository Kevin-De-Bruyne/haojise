import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

import Axios from 'axios'

router.beforeEach((to, from, next) => {
   document.documentElement.scrollTop=0
  next()
})

import vant from 'vant'
import {Col , Row , Toast} from 'vant'
import 'vant/lib/index.css';

import 'animate.css'



let ajaxs=Axios.create()

// ajaxs.defaults.baseURL="http://192.168.2.124/"
ajaxs.defaults.baseURL="http://wz.haojise.com/"

Vue.prototype.ajax=({url,data={},headers={},methods='post'})=>{
  
  return new Promise((ok,err)=>{
    // if(lurl){
    //   //避免重复请求
    //   err('请勿重新请求了')
    //   return
    // }
    Toast.loading({
      duration:0,
      forbidClick:true
    })
    ajaxs[methods](url,
      methods=='post'?data:{params:data}
      ,{headers}).then(res=>{
        console.log(res)
      Toast.clear()
      if(res.data.status==200||res.data.code==0){
        ok(res.data)
      }else{  
    
        Toast.fail(res.message||res.msg||res.data.message||res.data.msg)
        err(res)
      }
    }).catch(fill=>{
      console.log(fill)
      Toast.clear()
       Toast.fail('请求失败')
    })
  })
    
}



Vue.use(vant)
.use(Col)
.use(Row)
.use(Toast)

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
import 'element-ui/lib/theme-chalk/display.css';


Vue.use(VueAwesomeSwiper)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
