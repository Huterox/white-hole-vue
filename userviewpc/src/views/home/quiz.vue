<template>
  <div style="height: 960px;width: 80%;margin: 0 auto">
    <el-row :gutter="22">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="block" style="width: 100%;margin: 0 auto">

            <br><br>
            <div style="margin-left: 2%">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/quiz' }">热榜</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/quiz/quizTui'}">推荐</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/quiz/quizFriend'}">好友问答</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/quiz/quizLast'}">最新问答</el-breadcrumb-item>
                <el-breadcrumb-item ></el-breadcrumb-item>
              </el-breadcrumb>

            </div>
            <br>
            <div style="width: 98%;margin: 0 auto">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple" style="position: fixed" >
<!--          这个是右侧边栏-->
          <img
            style="width:100%;height: 250px;border-radius: 5px"
            src="/static/image/pen.jpg"
            class="image"
          >
        </div>
        <div style="position: fixed;top: 330px;left: 78%;width: 80px;height: 80px">
          <el-button style="width: 100%;height: 100%" @click="submit" type="primary" icon="el-icon-edit" circle>提问</el-button>
        </div>

      </el-col>
    </el-row>


    <el-dialog
      style="width:80%;margin: 0 auto"
      title="创建提问"
      :visible.sync="dialogFormVisible"
    >

      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">

        <el-form-item label="问题" prop="que" >
          <el-input v-model="ruleForm.que"></el-input>
        </el-form-item>



        <el-form-item label="问题描述" prop="desc">
          <el-input type="textarea" :rows="10" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <div  style="margin: 0 auto" slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>

    </el-dialog>



  </div>
</template>

<script>
export default {
  name: "quiz",
  data(){
    return {
      dialogFormVisible: false,

      ruleForm: {
        que: '',
        desc: '',
      },

      rules: {
        que: [
          {required: true, message: '请输入问题标题', trigger: 'blur'},
          {min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur'}
        ],
        desc: [
          {required: true, message: '请输入问题描述', trigger: 'blur'},
          {min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur'}
        ],
      }

    }
  },
  methods: {
    isLogin() {
      let loginToken = localStorage.getExpire("LoginToken");
      let userid = localStorage.getExpire("userid");
      //这个只有用户自己才能进入，自己只能进入自己对应的MySpace
      if(loginToken==null && userid==null) {
        alert("检测到您未登录，请先登录")
        this.$router.push({path: "/login"});
      }else {
        this.userid=userid;
        this.loginToken = loginToken;
      }
    },

    // 提交
    submit(){
      //这里的话我们先进行用户的登录校验
      this.isLogin()
      this.dialogFormVisible=true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.que===""){
            alert("标题不能为空")
            return
          }
          alert('submit!');
          this.dialogFormVisible = false;

        } else {
          return false;
        }
      });
      //在这里进行上传我们的提问

    },


  },
}
</script>

<style scoped>



.bg-purple {
  background: white;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}



</style>
