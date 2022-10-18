<template>
<div style="width: 70%;margin-top: 5%">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="修改密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认修改" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="验证码：" prop="verify">
      <el-row :span="24">
        <el-col :span="18">
          <el-input type="text" placeholder="请输入验证码，发送验证码后请不要再修改密码！" v-model="ruleForm.verify"></el-input>
        </el-col>
        <el-col :span="6">
          <div class="login-code">
            <!--发送邮箱验证码-->
            <el-button @click="getEmailCode()" :disabled="!show"
                       style="margin-left: 26%;width: 70%"
                       type="primary"
            >
              <span v-show="show">发送验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-tooltip content="一天只允许修改一次,请按规则提交，否则密码修改失败后依然只能一天后修改！" placement="top">
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-tooltip>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "countcontrol",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if(value.length<=6){
          callback(new Error("密码长度不能低于6"))
        }
        if (this.ruleForm.checkPass !== '' ) {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      TIME_COUNT:60,
      show: true,
      count: 60,
      userid: null,
      loginToken: null,
      ruleForm: {
        pass: '',
        checkPass: '',
        verify: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        verify: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    let loginToken = localStorage.getExpire("LoginToken");
    let userid = localStorage.getExpire("userid");
    if(loginToken==null && userid==null) {
      alert("检测到您未登录，请先登录")
      this.$router.push({path: "/login"});
    }else {
      this.userid=userid;
      this.loginToken = loginToken;
    }
  },
  methods: {
    getEmailCode () {
      let flag = true;
      if(!this.ruleForm.pass || !this.ruleForm.checkPass){
        flag = false
      }else {
        if(this.ruleForm.pass!==this.ruleForm.checkPass) {
          flag = false
        }
      }
      if(flag){
        //发送邮箱验证码
        this.axios({
          url: "/user/user/space/userSpaceChangeEmailCode",
          method: 'post',
          headers: {
            "userid": this.userid,
            "loginType": "PcType",
            "loginToken": this.loginToken,
          },
          data:{
            "userid": this.userid,
            "password" : this.ruleForm.pass
          }
        }).then((res)=>{
          res = res.data;
          if(res.code===0){
            alert("邮箱验证码发送成功，请及时查看，一天有效！")
          }else {
            this.$message.error(res.msg);
          }
        });
        //进入倒计时
        if (!this.timer) {
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= this.TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      }else {
        alert("请填写新密码")
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      let flag = true;
      if(!this.ruleForm.pass || !this.ruleForm.checkPass){
        flag = false
      }else {
        if(this.ruleForm.pass!==this.ruleForm.checkPass) {
          flag = false
        }
      }if(!this.ruleForm.verify){
        flag = false
      }
      if(flag){
        this.axios({
          url: "/user/user/space/userSpaceChangePassword",
          method: 'post',
          headers: {
            "userid": this.userid,
            "loginType": "PcType",
            "loginToken": this.loginToken,
          },
          data:{
            "userid": this.userid,
            "password" : this.ruleForm.pass,
            "emailCode": this.ruleForm.verify
          }
        }).then((res)=>{
          res = res.data;
          if(res.code===0){
            alert("密码修改成功，请重新登录")
            this.$router.push({path: "/login"});
          }else {
            this.$message.error(res.msg);
          }
        });
      }

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
