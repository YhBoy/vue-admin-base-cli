<template>
    <el-container class="container-wrap">
        <el-aside :width="collapse?'64px':'200px'" class="aside" >
            <!-- <Aside :collapse="collapse" /> -->
            <Aside :collapse="collapse" />
        </el-aside>
        <el-container>
            <el-header class="header">
                <div class="header-left">
                    <i :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="draw"></i>
                    <div>vue-admin-base-cli基础框架</div>
                </div>
                <el-dropdown>
                    <span class="el-dropdown-link avatar-info">
                        <img class="avatar" :src="userInfo.avatar" alt="">
                        {{userInfo.username}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main class="main">
                <router-view />
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>

import Aside from '@/views/Home/aside'
import Footer from '@/views/Home/footer'

import { getUserProfile } from '@/api/user.js'
export default {
    name:'Layout',
    components:{
        Aside,Footer
    },
    data(){
        return {
            userInfo:{
                username:'',
                avatar:''
            },
            collapse:false
        }
    },
    created(){
        this.getUserInfo()
    },
    methods:{
        draw(){
            this.collapse = !this.collapse
        },
        getUserInfo(){
            getUserProfile().then(res=>{
                   this.userInfo.username = res.data.data.name 
                   this.userInfo.avatar = res.data.data.photo 
            }).catch(err=>{
                console.log(err)
            })
        },
        logout(){
            this.$confirm('确定是否退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出成功'
                }); 
                sessionStorage.removeItem('user')
                this.$router.push({
                    name:'Login'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消退出'
                });          
            });
        }
    }
}
</script>

<style lang="less" scope>
    .container-wrap{
    height: 100vh;
}
.aside{
    background: #fff;
    height: 100%;
}


.header{
    display: flex;
    justify-content: space-between;
    align-content: center;
    line-height: 60px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .header-left{
        display: flex;
        align-items: center;
        i{
            cursor: pointer;
        }
        div{
            margin-left: 10px;
        }
    }
    .el-dropdown{
        align-content: center;
        display: flex;
    }
}
.avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.avatar-info{
    display: flex;
    align-items: center;
}
.el-footer{
    padding: 0 ;
}
</style>



