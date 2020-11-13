<template>
    <div class="aside">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#252526"
      text-color="#ffffff"
      active-text-color="#409EFF"
      router
      :collapse="collapse"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.path" v-for="(item) in aSideMenu" :key="item.path">
        <i class="iconfont" :class="item.iconfont"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<script>
export default {
    name:"Aside",
    props:['collapse'],
    data(){
        return {
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
                  path:'/user',
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
                }
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
   
</style>










