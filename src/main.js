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

import scrolls from 'scrollreveal'



function createan(select,dir){
  let config={
    reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
    origin: 'right', // 动画开始的方向
    distance: '200px',//移动距离
    duration: 500, // 动画持续时间
    delay: 0, // 延迟
    rotate: { x: 0,y:0,z:0 }, // 过度到0的初始角度，关键点想要酷炫的样式主要修改此参数
    container: document.documentElement,
    opacity: 0, // 初始透明度
    scale: 1,
    easing:'ease',
    interval:0,
    viewFactor: 20,//视角，可拉长看到的距离
    viewOffset: {//可看到的范围，全屏往里缩
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  }   
    let config2={
    reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
    origin: 'left', // 动画开始的方向
    distance: '200px',//移动距离
    duration: 500, // 动画持续时间
    delay: 0, // 延迟
    rotate: { x: 0,y:0,z:0 }, // 过度到0的初始角度，关键点想要酷炫的样式主要修改此参数
    container: document.documentElement,
    opacity: 0, // 初始透明度
    scale: 1,
    easing:'ease',
    interval:0,
    viewFactor: 20,//视角，可拉长看到的距离
    viewOffset: {//可看到的范围，全屏往里缩
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  } 
  let config3={
    reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
    origin: 'top', // 动画开始的方向
    distance: '200px',//移动距离
    duration: 500, // 动画持续时间
    delay: 0, // 延迟
    rotate: { x: 0,y:0,z:0 }, // 过度到0的初始角度，关键点想要酷炫的样式主要修改此参数
    container: document.documentElement,
    opacity: 0, // 初始透明度
    scale: 1,
    easing:'ease',
    interval:0,
    viewFactor: 20,//视角，可拉长看到的距离
    viewOffset: {//可看到的范围，全屏往里缩
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  } 
  let config4={
    reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
    origin: 'bottom', // 动画开始的方向
    distance: '200px',//移动距离
    duration: 500, // 动画持续时间
    delay: 0, // 延迟
    rotate: { x: 0,y:0,z:0 }, // 过度到0的初始角度，关键点想要酷炫的样式主要修改此参数
    container: document.documentElement,
    opacity: 0, // 初始透明度
    scale: 1,
    easing:'ease',
    interval:0,
    viewFactor: 20,//视角，可拉长看到的距离
    viewOffset: {//可看到的范围，全屏往里缩
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  } 
  let rota={
    reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
    origin: 'bottom', // 动画开始的方向
    distance: '200px',//移动距离
    duration: 500, // 动画持续时间
    delay: 0, // 延迟
    rotate: { x: 500,y:0,z:0 }, // 过度到0的初始角度，关键点想要酷炫的样式主要修改此参数
    container: document.documentElement,
    opacity: 0, // 初始透明度
    scale: 1,
    easing:'ease',
    interval:0,
    viewFactor: 20,//视角，可拉长看到的距离
    viewOffset: {//可看到的范围，全屏往里缩
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  }
  let s={}
  switch(dir){
    case 'left':
      s=config2
    break
    case 'right':
      s=config
    break
    case 'top':
      s=config3
    break
    case 'bottom':
      s=config4
    break
    case 'rota':
      s=rota
    break
  }
  scrolls(s).reveal(select)
}
Vue.prototype.createAn=createan





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
    
    ajaxs[methods](url,
      methods=='post'?data:{params:data}
      ,{headers}).then(res=>{
        console.log(res)
      if(res.data.status==200||res.data.code==0){
        ok(res.data)
      }else{  
    
        Toast.fail(res.message||res.msg||res.data.message||res.data.msg)
        err(res)
      }
    }).catch(fill=>{
      console.log(fill)
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
