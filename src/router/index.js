import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
      path:'/login',
      name:'Login',
      component:()=> import ('../views/Login/index')
    },
    {
      path:'/',
      name:'Layout',
      component:()=> import ('../views/Layout/index'),
      children:[
          {
              path:'',
              name:'HomeIndex',
              component:()=> import ('../views/Home/index')
          },
          {
            path:'/setting',
            name:'SettingIndex',
            component:()=> import ('../views/Setting/index')
          },
          {
            path:'/video',
            name:'VideoIndex',
            component:()=> import ('../views/Video/index')
          },
          {
            path:'/user',
            name:'UserPage1',
            component:()=> import ('../views/User/page1'),
            redirect:'/user/page1',
            children:[
                {
                    path:'/user/page1',
                    name:'UserPage1',
                    component:()=> import ('../views/User/page1')  
                }
            ]
          }
      ]
    }
   
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
    
    
    const token = JSON.parse(sessionStorage.getItem('user'))
    
    if( to.path != '/login'){
          if( token ){
              next()
          }else{
              next('/login')
          }
    }else{
        next()
    }
    
})

export default router
