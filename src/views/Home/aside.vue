<template>
    <div class="aside">
        <el-menu
              :default-active="menuActiveIndex"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              background-color="#252526"
              text-color="#ffffff"
              active-text-color="#409EFF"
              router
              
              :collapse-transition="false"	
              :collapse="collapse"
              @close="handleClose"
              >
              <template  v-for="(item) in aSideMenu" >
                  <template v-if="item.children && item.children.length > 0">
                      <el-submenu :key="item.path" :index="item.path">
                            <template >
                                <template slot="title">
                                    <i class="iconfont" :class="item.iconfont"></i>
                                    <span >{{item.label}}</span>
                                </template>
                                <template>
                                    <el-menu-item :index="subItem.path" v-for="(subItem,subKey) in item.children" :key="subKey">
                                        <template slot="title">
                                              <i class="iconfont" :class="item.iconfont"></i>
                                              <span >{{subItem.label}}</span>
                                        </template>
                                    </el-menu-item>
                                </template>
                            </template>
                    </el-submenu>
                  </template>
                  <template v-else>
                        <el-menu-item :key="item.path" :index="item.path">
                              <template slot="title">
                                    <i class="iconfont" :class="item.iconfont"></i>
                                    <span >{{item.label}}</span>
                              </template>
                          </el-menu-item>
                  </template>
              </template>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:"Aside",
    props:['collapse'],
    computed: {
      noChildren(){
          return this.aSideMenu.filter(item=>!item.children)
      },
      hasChildren(){
          return this.aSideMenu.filter(item=>item.children)
      }
    },
    mounted(){
        // this.menuActiveIndex = this.$route.path
    },
    data(){
        return {
            menuActiveIndex:'/',
            aSideMenu:[
                {
                  path:'/',
                  label:'首页',
                  iconfont:'iconshouye'
                },
                {
                  path:'/video',
                  label:'视频管理',
                  iconfont:'iconsucai'
                },
                {
                  path:'/user/page1',
                  label:'用户管理',
                  iconfont:'iconfabu',
                  children:[
                      {
                          path:'',
                          label:'page1',
                          iconfont:'iconfabu',
                      },
                      {
                          path:'/page2',
                          label:'page2',
                          iconfont:'iconfabu',
                      }
                  ]
                },
                {
                  path:'/settings',
                  label:'设置',
                  iconfont:'iconsucai',
                  children:[
                      {
                        path:'',
                        label:'设置增加',
                        iconfont:'iconsucai',
                      }
                  ]
                },
            ]
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scope>
    // .aside /deep/ .el-menu{
    //     height: 100vh;
    // }
    .aside>ul{
      height: 100%;
    }
    .iconfont{
        margin-left: 5px;
        margin-right: 10px;
    }
    .el-menu{
      border-right: 0;
    }
    .toggle{
      background: rgb(37, 37, 38);
      text-align: center;
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      letter-spacing: 0.2em;
      cursor: pointer;
    }
</style>










