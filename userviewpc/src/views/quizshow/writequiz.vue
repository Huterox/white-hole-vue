<template>
  <div id="main">
    <div  v-if="editFlag">
      <div>
        <br>
        <br>
        <mavon-editor
          v-model="form.value"
          ref="md"
          @imgAdd="imgAdd"
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
import 'mavon-editor/dist/css/index.css'
import {getUUID} from "../../components/upload/uuid";
export default {
  // 注册
  name: "writequiz",
  components: {
    mavonEditor,
    signleUpload,
  },
  props:['Messages'],
  data() {
    return {
      userid: null,
      loginToken: null,
      editFlag: true,
      fullscreenLoading: false,
      dataObj: {
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: '',
        // callback:'',
      },
      form: {
        value: '', // 输入的markdown
        html: '',    // 及时转的html
        ruleForm: this.ruleForm,
        title: '',
      },
    }
  },

  created() {
    //判断用户是否登录
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
  methods: {
    toOss(pos,$file){
      //组装数据
      let formData = new FormData();
      Object.keys(this.dataObj).forEach(key => {
        // 添加一个新值到 formData 对象内的一个已存在的键中，如果键不存在则会添加该键。
        formData.append(key, this.dataObj[key]);
      });
      formData.append('file',$file)
      //此时发送请求去给到OSS
      this.axios({
        url: this.dataObj.host,
        method: 'post',
        data: formData
      }).then((res) => {
        let imgpath = this.dataObj.host + '/' + this.dataObj.key;
        //把这个给到我们的编辑器
        this.$refs.md.$img2Url(pos,imgpath)
      })
    },
    imgAdd(pos, $file){
      /**
       * 上传图片到OSS服务里面
       * */
      let filename = $file.name
      let _self = this;
      // 获取认证码
      this.axios
        .get('/third-part/oss/quizWriteAnsImgPolicy')
        .then(response => {
          response = response.data;
          _self.dataObj.policy = response.data.policy;
          _self.dataObj.signature = response.data.signature;
          _self.dataObj.ossaccessKeyId = response.data.accessid;
          _self.dataObj.key = response.data.dir +getUUID()+"_"+filename;
          _self.dataObj.dir = response.data.dir;
          _self.dataObj.host = response.data.host;
          //推送到OSS
          this.toOss(pos,$file);
        }).catch(function (error) {
        alert(error)
        console.log("出错了...",err)
      })
    },

    // 所有操作都会被解析重新渲染
    change(value, render){
      //value为编辑器中的实际内容，即markdown的内容，render为被解析成的html的内容
      this.form.html = render;
    },
    // 提交
    submit(){
      //点击提交后既可以获取html内容，又可以获得markdown的内容，之后存入到服务端就可以了
      this.fullscreenLoading = true;

      // console.log(this.form.value);
      // console.log(this.form.html);
      //将Markdown文档提交到服务器
      let flag = true;
      if(!this.form.value){
        flag = false;
      }else {
        if(this.form.value.length<10){
          flag = false;
          alert("回答不能低于10个字符")
        }
      }
      if(flag){
        //此时对用户回答进行提交
        this.axios({
          url: "/quiz/quiz/base/baseUpAns",
          method: 'post',
          headers: {
            "userid": this.userid,
            "loginType": "PcType",
            "loginToken": this.loginToken,
          },
          data:{
            "userid": this.userid,
            "quizid": this.Messages.quizid,
            "quizTitle": this.Messages.quizTitle,
            "context": this.form.value
          }
        }).then((res)=>{
          res = res.data;
          if(res.code===0){
            alert(res.msg)
          }else {
            this.$message.error(res.msg);
          }
          this.fullscreenLoading = false;
          this.editFlag = false;
        });
      }else {
        alert("您的回答为空！")
      }

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

}
</script>
<style scoped>

</style>



