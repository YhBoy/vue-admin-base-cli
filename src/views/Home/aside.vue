<template>
    <div class="aside">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#252526"
      text-color="#ffffff"
      active-text-color="#F88064"
      router
      :collapse="collapse"
      @close="handleClose">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-menu"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image" >
        <i class="el-icon-document"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="publish">
        <i class="el-icon-setting"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-setting"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="iconfont iconfabu"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <i class="iconfont iconsucai"></i>
        <span slot="title">个人设置</span>
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
    .aside /deep/ .el-menu{
        height: 100vh;
    }
    .iconfont{
        margin-left: 5px;
        margin-right: 10px;
    }
   
</style>










