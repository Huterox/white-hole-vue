<template>
  <div>
    <vue-particles
      class="login-background"
      color="#97D0F2"
      :particleOpacity="0.7"
      :particlesNumber="50"
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
    <div style="width: 80%;margin: 0 auto">

      <el-row :gutter="20">
        <br>
        <el-col :span="16">
          <div class="grid-content bg-purple show">
            <br>
            <div style="margin-left: 2%">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/unityshow'}">文章</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/unityshow/unityQuizList'}">问答</el-breadcrumb-item>
                <el-breadcrumb-item ></el-breadcrumb-item>
              </el-breadcrumb>

            </div>
            <br><br>
            <div style="width: 98%;margin: 0 auto">
              <router-view></router-view>
              <br>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple aside" style="background-color: whitesmoke">

            <el-card class="show">
              <div>
                <div style="width:30%;height: 100px;border-radius: 100px;display:inline-block;">
                  <img
                    style="width:100%;height: 100%;border-radius: 100px"
                    src="/static/temporary/headpic.jpg"
                    class="image"
                  >
                </div>
                <div>
                  <p style="font-size: larger;font-family: 楷体">简介</p>
                  <span style="font-size: smaller">
                社区页面展示社区页面展示社区页面展示社区页面展示社区页面展示社区页面展示
                社区页面展示社区页面展示社区页面展示社区页面展示社区页面展示社区页面展示
              </span>
                </div>

                <div>
                  <p>文章数：12</p>
                  <p>问答数：24</p>
                </div>
              </div>
            </el-card>

            <el-card class="show">
              <router-link class="alink" to="/writeblog">
                <el-button  type="primary" icon="el-icon-edit">
                  发文
                </el-button>
              </router-link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <el-button  @click="submit" type="primary" icon="el-icon-edit" >
                提问
              </el-button>
            </el-card>
            <br>
            <el-card class="show">
              <div class="show" style="height: 300px">
                <p>
                  <el-button icon="el-icon-s-custom" type="primary" round size="big">社区成员</el-button>
                </p>
                <div>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                  <el-avatar src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-avatar>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                  <el-avatar src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-avatar>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                  <el-avatar src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-avatar>
                </div>
              </div>
            </el-card>
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
  </div>

</template>

<script>
export default {
  name: "unityshow",
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

    // 提交
    submit(){
      //点击提交后既可以获取html内容，又可以获得markdown的内容，之后存入到服务端就可以了

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
    },

  },
}
</script>

<style scoped>
.aside{
  text-align: center;
}
.login-background {
  width: 96%;
  margin: 0 auto;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
}
.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.alink{

  text-decoration: none;
  color: #333333;
}

.show{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.show:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;

}
</style>
