import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../pages/home'


export default new Router({
    routes:[
     {
        path:'/',
        component:home
     }
   ]
})

