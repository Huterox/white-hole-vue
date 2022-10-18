<template>

  <div  style="background-color: rgba(239,250,246,0.53)">
    <el-empty description="建设中..." :image-size="400"></el-empty>
    <div v-show="show">
    <div class="head" style="width: 90%;margin: 0 auto">

      <el-button style="margin-left:74%" type="primary" plain @click="submit">创建专栏</el-button>

    </div>
    <br>

    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <br>
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              src="/static/temporary/showbg.jpg"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">
              <router-link class="alink" to="/myspace/columArticleList">
                {{message.name}}
              </router-link>
            </p>
            <p style="font-weight: lighter;color: #1d5e65" class="message"

            >
              {{message.info}}

            </p>

          </div>

        </div>
        <br>
      </el-card>
    </div>
    <br>
    <div class="footer" style="margin: 0 auto;width: 100%;">
      <div class="block" >
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </div>


    <el-dialog
      style="width:80%;margin: 0 auto"
      title="创建申请"
      :visible.sync="dialogFormVisible"
    >

      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">

        <el-form-item label="专栏封面" prop="url">
          <signle-upload v-model="ruleForm.url"></signle-upload>
          <!--          <el-input placeholder="请输入封面URL" v-model="ruleForm.url"></el-input>-->
        </el-form-item>
        <el-form-item label="专栏名称" prop="name" >
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="专栏描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
import signleUpload from "../../../components/upload/signleUpload";
import SearchCom from "../../../components/search/SearchCom";
export default {
  name: "columnArticle",
  components: {
    signleUpload,
  },
  data(){
    return{
      show: false,
      dialogFormVisible: false,
      total: 4,
      ruleForm: {
        url: '',
        name: '',
        desc: '',

      },

      rules: {
        desc: [
          { required: true, message: '请输入社区描述', trigger: 'blur' },
          { min: 10, max: 150, message: '长度在 10 到 150 个字符', trigger: 'blur' }
        ],

        // url: [
        //   { required: true, message: '请输入社区封面URL', trigger: 'blur' },
        // ],
        name: [
          { required: true, message: '请输入社区名称', trigger: 'blur' },
        ],


      },
      Messages:[
        {"name":"Java学习",
          "info":"每天记录Java的学习点滴",
        },
        {"name":"Python学习",
          "info":"记录与Python的每一刻",

        },
        {"name":"人工智能算法学习",
          "info":"跟着吴恩达大佬飞快成长",

        },
        {"name":"Spring源码学习",
          "info":"慢慢肢解Spring",

        },

      ]
    }
  },

  methods: {

    // 提交
    submit(){

      this.dialogFormVisible=true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.name===""){
            alert("社区名称不能为空")
            return
          }
          alert('submit!');
          this.dialogFormVisible = false;
          console.log(this.ruleForm)
        } else {

          console.log('error submit!!');
          return false;
        }
      });
    },

  },
}
</script>

<style scoped>
.message{
  width: 30em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.alink{

  text-decoration: none;
  color: #333333;
}
</style>
