<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="ruleForm.checked">我已同意上述协议</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" class="btn" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import request from '@/utils/request.js'
// 密码加密
import CryptoJS from "crypto-js";

import {login} from '@/api/user.js'

export default {
    name:'Login',
    data(){
        var validatePassword = (rule, value, callback)=>{
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }
                if ( value.length < 6 ){
                    callback(new Error('密码长度必须大于6位!'));
                }else{
                    callback()
                }
        }
        return{
             rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
            },
            ruleForm: {
                username:'',
                password:'',
            },
            checked:false,
            loading:false
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.loading = true

              // md5 加密
            //   const username = this.ruleForm.username
            //   const password = CryptoJS.MD5(this.ruleForm.password)
            
            // 实际传参 是下面这两个
            // mobile:'13911111111',
            // code:"246810"
            const params = {
                mobile:'13911111111',
                code:"246810"
            }
            login(params).then(res=>{
                sessionStorage.setItem("user",JSON.stringify(res.data.data))
                this.$message({
                        message: '登录成功',
                        type: 'success'
                });
                this.$router.push({
                    name:'HomeIndex'
                })
                this.loading = false
            }).catch(err=>{
                this.loading = false
                console.log(err)
            })

              
          } else {
            console.log('error submit!!');
            this.loading = false
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
    .btn{
        display: block;
        width: 100%;
    }

}
.login /deep/ .el-form-item__content{
    margin-left: 0 !important;
}

</style>
