
<template>
  <div id="main">
    <div>
      <div>
        <input type="text" v-model="form.title" placeholder="请输入文章标题" required>
        <el-button @click="submit" type="primary">发布文章</el-button>

      </div>

      <br>
      <br>

      <mavon-editor
        v-model="form.value"
        ref="md"
        @change="change"
        style="min-height: 800px;width: 100%"
      />
    </div>

    <el-dialog
      style="width:80%;margin: 0 auto"
      title="文章提交"
      :visible.sync="dialogFormVisible"
    >

      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">

        <el-form-item label="文章封面" >
<!--          <el-input v-model="ruleForm.url"></el-input>-->
          <signle-upload v-model="ruleForm.url"></signle-upload>
        </el-form-item>

        <el-form-item label="选择社区" prop="community">
          <el-select v-model="ruleForm.community" placeholder="请选择发布社区">
            <el-option label="社区一" value="A"></el-option>
            <el-option label="社区二" value="B"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选择专栏" prop="community">
          <el-select v-model="ruleForm.column" placeholder="请选择发布专栏">
            <el-option label="java" value="java"></el-option>
            <el-option label="python" value="python"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选择权限" prop="level">
          <el-select v-model="ruleForm.level" placeholder="请选择文章权限">
            <el-option label="私密" value="0"></el-option>
            <el-option label="公开" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="文章类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="原创" value="0"></el-radio>
            <el-radio label="转载" value="1"></el-radio>
            <el-radio label="翻译" value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文章描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
import signleUpload from "../../components/upload/signleUpload";
import { mavonEditor } from 'mavon-editor'     //引入mavon-editor组件
import 'mavon-editor/dist/css/index.css'       //引入组件的样式
export default {
  // 注册
  name: "writeblog",
  components: {
    mavonEditor,
    signleUpload,
  },

  data() {
    return {

      dialogFormVisible: false,
      form: {
        value:'', // 输入的markdown
        html:'',    // 及时转的html
        ruleForm:this.ruleForm,
        title: '',


      },
      ruleForm: {
        url: '',
        community:"",
        column: '',
        level:'',
        desc: '',
        type:'',
      },

      rules: {
        desc: [
          { required: true, message: '请输入文章描述', trigger: 'blur' },
          { min: 1, max: 150, message: '长度在 1 到 150 个字符', trigger: 'blur' }
        ],

        community: [
          { required: true, message: '请选择发布社区', trigger: 'blur' },
        ],

        level:[
          { required: true, message: '请选择文章权限', trigger: 'blur' },
        ],

        type: [
          { required: true, message: '请选择文章类型', trigger: 'change' }
        ],

      }
    }
  },

  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render){        //value为编辑器中的实际内容，即markdown的内容，render为被解析成的html的内容
      this.form.html = render;
    },
    // 提交
    submit(){
      //点击提交后既可以获取html内容，又可以获得markdown的内容，之后存入到服务端就可以了
      console.log(this.form.value);
      console.log(this.form.html);
      this.dialogFormVisible=true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.title===""){
            alert("标题不能为空")
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
  mounted() {

  }


}
</script>
<style scoped>
#center {
  margin-top: 5%;
  width: 96%;
  height: 96%;
  border: 1px;
}

img {
  margin: auto;
  margin-left: 30%;
  height: 40%;
  width: 40%;
  position: relative;
  top: 10%;
}

input {

  width: 85%;
  height: 30px;
  border-width: 2px;
  border-radius: 5px;
  border-color: #00c4ff;
  border-bottom-color: #2C7EEA;
  color: #586e75;
  font-size: 15px;

}
#main{
  width: 90%;
  margin: 0 auto;
}

</style>



