
<template>
  <div id="main">
    <div  v-if="editFlag">
      <div>
        <br>
        <br>
        <mavon-editor
          v-model="form.value"
          ref="md"
          @change="change"
          style="min-height: 400px;width: 100%"
        />
      </div>
      <br><br>
      <div>
        <el-button v-loading.fullscreen.lock="fullscreenLoading"
                   element-loading-text="正在提交,审核通过后将给您通知！"
                   element-loading-spinner="el-icon-loading"
                   style="margin-left: 90%;width: 10%" @click="submit" type="primary"

        >提交</el-button>
      </div>
    </div>


    <div v-if="editFlag===false">
      <div>
        <vue-particles
          color="#409EFF"
          :particleOpacity="0.7"
          :particlesNumber="120"
          shapeType="circle"
          :particleSize="6"
          linesColor="#409EFF"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >

        </vue-particles>
      </div>
    </div>



  </div>



</template>

<script>
import signleUpload from "../../components/upload/signleUpload";
import { mavonEditor } from 'mavon-editor'     //引入mavon-editor组件
import 'mavon-editor/dist/css/index.css'       //引入组件的样式
export default {
  // 注册
  name: "writequiz",
  components: {
    mavonEditor,
    signleUpload,
  },

  data() {
    return {
      editFlag: true,
      fullscreenLoading: false,
      form: {
        value: '', // 输入的markdown
        html: '',    // 及时转的html
        ruleForm: this.ruleForm,
        title: '',

      },
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
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.editFlag = false;
      }, 2000);
      console.log(this.form.value);
      console.log(this.form.html);

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

</style>



