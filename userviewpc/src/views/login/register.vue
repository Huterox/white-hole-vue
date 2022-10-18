<template>
  <div>
  <vue-particles
    class="login-background"
    color="#97D0F2"
    :particleOpacity="0.7"
    :particlesNumber="200"
    shapeType="circle"
    :particleSize="4"
    linesColor="#97D0F2"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.8"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push">
  </vue-particles>
    <el-container>
    <div style="width: 30%;margin: 0 auto">
      <el-form :model="formRegister" :rules="rules" ref="formRegister" label-width="0px" >
        <el-form-item prop="nickname">
          <el-input v-model="formRegister.nickname" placeholder="昵称">
            <i slot="prepend" class="el-icon-user"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formRegister.username" placeholder="账号">
            <i slot="prepend" class="el-icon-s-custom"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="formRegister.password">
            <i slot="prepend" class="el-icon-lock"/>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="phone" placeholder="手机(选填，建议填写)" v-model="formRegister.phone">
            <i slot="prepend" class="el-icon-phone"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" placeholder="邮箱（必填）" v-model="formRegister.email">
            <i slot="prepend" class="el-icon-s-promotion"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :span="24">
            <el-col :span="12">
              <el-input v-model="formRegister.code" auto-complete="off"  placeholder="请输入验证码" size=""></el-input>
            </el-col>
            <el-col :span="12">
              <div class="login-code" @click="refreshCode">
                <!--验证码组件-->
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="emailCode">
          <el-row :span="24">
            <el-col :span="12">
              <el-input v-model="formRegister.emailCode" auto-complete="off"  placeholder="请输入邮箱验证码" size=""></el-input>
            </el-col>
            <el-col :span="12">
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
          <div class="login-btn">
            <el-button type="primary" @click="goLogin" style="margin-left: auto;width: 35%">登录</el-button>
            <el-button type="primary" @click="submitForm()" style="margin-left: 27%;width: 35%" >注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    </el-container>
  </div>
</template>

<script>
import SIdentify from "../../components/SIdentify/SIdentify";
export default {
  name: "register",
  components: { SIdentify },
  data() {
    return{
      TIME_COUNT:60,
      show: true,
      count: 60,
      formRegister: {
        nickname: "",
        phone: "",
        username: "",
        password: "",
        code: "",
        email:"",
        emailCode:""
      },
      identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',//随机串内容
      identifyCode: '',
      // 校验
      rules: {
        phone: [
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
          {
            pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: '请输入正确的手机号码'
          }
        ],
        nickname:
          [
            { required: true, message: "请输入用户昵称", trigger: "blur" }
          ],
        username:
          [
            { required: true, message: "请输入账号（用于登录）", trigger: "blur" }
          ],
        password: [
          { required: true, message: "请输入密码(6-18位，区分大小写)", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ],
        emailCode: [
          { required: true, message: "请输入邮箱验证码", trigger: "blur" }
        ]

      }

    }
  },
  mounted () {
    // 初始化验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods:{
    getEmailCode () {
      const that = this
      if (this.formRegister.email === '') {
        this.$message.error('请先输入邮箱再点击获取验证码')
      } else {
        let flag=true;
        let regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!regEmail.test(this.formRegister.email)) {
          this.$message({showClose: true, message: '请输入格式正确有效的邮箱号!', type: 'error'})
          flag=false;
        } else if(!this.formRegister.username){
          this.$message.error('请填写账号');
          this.refreshCode();
          flag=false;
        } else if(!this.formRegister.password){
          this.$message.error('请填写密码');
          this.refreshCode();
          flag=false;
        }else if(!this.formRegister.nickname){
          this.$message.error('请填写用户昵称');
          this.refreshCode();
          flag=false;
        }

        if(flag){
          //  这部分是发送邮箱验证码的玩意
          this.axios({
            url: "/user/user/emailcode",
            method: 'post',
            data:{
              "email":this.formRegister.email,
              "username":this.formRegister.username,
              "password":this.formRegister.password,
              "nickname":this.formRegister.nickname,
            }
          }).then((res)=>{
            res = res.data;
            if (res.code===10001){
              alert("请将对应信息填写完整！")
            }else if(res.code===0){
              alert("邮箱验证码发送成功，请及时查看，10分钟有效")
            }else {
              this.$message.error(res.msg);
            }

          });
          //倒计时
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
        }

      }
    },

    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
    },
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    submitForm(){
      let flag = true;
      if (this.formRegister.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
        this.$message.error('请填写正确验证码');
        this.refreshCode();
        flag=false;
      }
      else if(!this.formRegister.emailCode){
        this.$message.error('请填写邮箱验证码');
        this.refreshCode();
        flag=false;
      }
      else if(!this.formRegister.email){
        this.$message.error('已填写邮箱请勿删除或修改邮箱，恶意操作将在120分钟内禁止注册！');
        this.refreshCode();
        flag=false;
      }

      if(flag){
        //这边后面做一个提交，提交对于消息
        this.axios({
          url: "/user/user/register",
          method: 'post',
          data:{
            "nickname": this.formRegister.nickname,
            "phone": this.formRegister.phone,
            "username": this.formRegister.username,
            "password": this.formRegister.password,
            "email":this.formRegister.email,
            "emailCode":this.formRegister.emailCode
          }
        }).then((res)=>{
          res = res.data;
          if (res.code===10001){
            alert("请将对应信息填写完整！")
          }else if(res.code===0){
            alert("注册成功")
            this.goLogin();
          }else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    goLogin(){
      this.$router.push("/login")
    }
  },
}
</script>
<style scoped>
.login-background {
  width: 80%;
  margin: 0 auto;
  height: 500px; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
}

</style>
