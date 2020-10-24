import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../pages/home'
import haojise from '../pages/haojise'
import gongsi from '../pages/gongsi'
import news_list from '../pages/news_list'
import news_detail from '../pages/news_detail'
import hezuo from '../pages/hezuo'


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
   },
   {
      path:'/news_list',
      component:news_list
   },
   {
      path:'/news_detail',
      component:news_detail
   },
   {
      path:'/hezuo',
      component:hezuo
   },
   ]
})

