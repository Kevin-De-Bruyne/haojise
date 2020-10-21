import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../pages/home'
import haojise from '../pages/haojise'
import gongsi from '../pages/gongsi'


export default new Router({
    routes:[
     {
        path:'/',
        component:home
     },
     {
      path:'/haojise',
      component:haojise
   },
   {
      path:'/gongsi',
      component:gongsi
   }
   ]
})

