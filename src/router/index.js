import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../pages/home'
import haojise from '../pages/haojise'


export default new Router({
    routes:[
     {
        path:'/',
        component:home
     },
     {
      path:'/haojise',
      component:haojise
   }
   ]
})

