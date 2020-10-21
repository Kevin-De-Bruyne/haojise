import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

import vant from 'vant'
import 'vant/lib/index.css';


Vue.use(vant)

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css';
	
// 	Vue.use(VueAwesomeSwiper)



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
