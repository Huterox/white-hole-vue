<template>
<div style="width: 70%;margin-top: 5%">
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="demo-dynamic"


  >
    <el-form-item
      style="width: 49%"
      label="昵称"
      prop="nickname"
      :rules="[
          { required: true, message: '请注意昵称长度在3~15个字符', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]"

    >
      <el-input v-model="ruleForm.nickname" :aria-placeholder="ruleForm.nickname"></el-input>
    </el-form-item>
    <br>
<!--    <el-form-item label="性别" prop="region">-->
<!--      <el-select v-model="ruleForm.sex" placeholder="请选择性别">-->
<!--        <el-option label="男" value="shanghai"></el-option>-->
<!--        <el-option label="女" value="beijing"></el-option>-->
<!--      </el-select>-->
<!--    </el-form-item>-->

    <el-form-item
      style="width: 49%"
      label="地址"
      prop="home"
      :rules="[
          { required: false, message: '请注意长度在3~20个字符', trigger: 'blur' },
          { min: 2, max: 100, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]"

    >
      <el-input v-model="ruleForm.home" :aria-placeholder="ruleForm.home"></el-input>
    </el-form-item>

    <el-tooltip content="请自行确保邮箱的准确性，由错误邮箱导致的后果请自负！" placement="top">
      <el-form-item
        style="width: 60%"
        prop="email"
        label="邮箱"
        :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ]"
      >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
    </el-tooltip>

    <el-form-item
      style="width: 80%;height: 120px"
      label="座右铭"
      prop="info"

      :rules="[
          { required: true, message: '请输入座右铭', trigger: 'blur' },
          { min: 0, max: 150, message: '请注意长度不能超过100个字符', trigger: 'blur' }
        ]"

    >
      <el-input type="textarea"
                style="height: 100px;resize: none" v-model="ruleForm.info"
                placeholder="限制在100个字符内"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-tooltip content="一天只允许修改一次" placement="top">
      <el-button type="primary" @click="submitForm('ruleForm')">提交修改</el-button>
      </el-tooltip>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  nickname: "infoeditor",
  data() {

    return {
      userid: null,
      loginToken: null,
      ruleForm: {
        nickname: '',
        email: '',
        home: '',
        info: '',
        userid: '',
      },
    };
  },
  created() {
    let loginToken = localStorage.getExpire("LoginToken");
    let userid = localStorage.getExpire("userid");
    //这个只有用户自己才能进入，自己只能进入自己对应的MySpace
    if(loginToken==null && userid==null) {
      alert("检测到您未登录，请先登录")
      this.$router.push({path: "/login"});
    }else {
      this.userid=userid;
      this.loginToken = loginToken;
      this.getData();
    }
  },
  methods: {
    getData() {
      this.axios({
        url: "/user/user/space/userShowInfoEditor",
        method: 'get',
        headers: {
          "userid": this.userid,
          "loginType": "PcType",
          "loginToken": this.loginToken,
        },
        params: {
          'userid': this.userid,
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          this.ruleForm = res.User;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            url: "/user/user/space/userInfoEditor",
            method: 'post',
            headers: {
              "userid": this.userid,
              "loginType": "PcType",
              "loginToken": this.loginToken,
            },
            data: {
              'userid': this.ruleForm.userid,
              'nickname': this.ruleForm.nickname,
              'email': this.ruleForm.email,
              'home': this.ruleForm.home,
              'info': this.ruleForm.info,

            }
          }).then((res) => {
            res = res.data;
            if (res.code === 0) {
                alert("修改成功，一天后可重新修改")
              } else {
              this.$message.error(res.msg);
            }
          });
        } else {
          alert("请按照规则修改对应信息")
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
