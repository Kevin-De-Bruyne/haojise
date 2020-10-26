import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

router.beforeEach((to, from, next) => {
   document.documentElement.scrollTop=0
  next()
})

import vant from 'vant'
import {Col , Row} from 'vant'
import 'vant/lib/index.css';



Vue.use(vant)
.use(Col)
.use(Row)

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
