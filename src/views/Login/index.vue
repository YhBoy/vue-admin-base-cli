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
                <el-button type="primary" class="btn" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import request from '@/utils/request.js'

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
            checked:false
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              const params = this.ruleForm
              console.log(params)
              request({
                  url:'/mp/v1_0/authorizations',
                  method:'POST',
                  data: params
              }).then(res=>{
                  debugger
                  console.log(res)
              }).catch(err=>{
                  debugger
                  console.log(err)
              })
          } else {
            console.log('error submit!!');
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
