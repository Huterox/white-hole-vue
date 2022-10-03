<template>
  <div style="height: 960px;width: 80%;margin: 0 auto">
    <el-row :gutter="22">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="block" style="width: 100%;margin: 0 auto">
            <span class="demonstration"><i  class="el-icon-position">&nbsp;热门社区：</i></span>
            <br><br><br>
            <el-carousel height="220px" :interval="4000" type="card">
              <el-carousel-item v-for="item in Items" :key="item">
                <div  style="width:80%;height: 80%;margin: 0 auto">
                  <img
                    style="width:100%;height: 100%;border-radius: 5px"
                    v-bind:src="item.image"
                    class="image"
                  >
                  <p class="message" style="font-weight:bold;text-align: center;
                   width: 100%;
                   margin: 0 auto
                  ">
                    {{item.info}}</p>
                </div>

              </el-carousel-item>
            </el-carousel>

            <br><br>
            <div style="margin-left: 2%">
                <search-com></search-com>
            </div>

            <br><br>
            <div style="margin-left: 2%">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/community' }">推荐</el-breadcrumb-item>
                <el-breadcrumb-item ></el-breadcrumb-item>
              </el-breadcrumb>

            </div>
            <div style="width: 98%;margin: 0 auto">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple" >
          <br><br><br>
          <div style="margin-left: 35%;width: 80px;height: 80px">
            <el-tooltip
            placement="bottom" effect="light">
            <div slot="content">
              创建社区后，您将获得社区管理权限，将负责审核社区成员所发布的文章与问答。<br>
              WhiteHole将不会对您的社区内容进行监管，但如果社区内容被举报并核实，我们<br>
              将采取一定的惩罚措施！请您切勿维护社区内正常友好的交流环境。承担管理职责！
            </div>
            <el-button style="width: 100%;height: 100%" @click="submit" type="primary" icon="el-icon-top" circle>
              创建
            </el-button>
            </el-tooltip>

          </div>

          <br>


        </div>

      </el-col>
    </el-row>

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

        <el-form-item label="社区封面" prop="url">
          <signle-upload v-model="ruleForm.url"></signle-upload>
<!--          <el-input placeholder="请输入封面URL" v-model="ruleForm.url"></el-input>-->
        </el-form-item>
        <el-form-item label="社区名称" prop="name" >
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="社区描述" prop="desc">
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
import SearchCom from "../../components/search/SearchCom";
import signleUpload from "../../components/upload/signleUpload";
export default {
  name: "community",
  components: {
    SearchCom,
    signleUpload,
  },
  data(){
    return{

      dialogFormVisible: false,
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

      Items: [
        {
          "image":"/static/temporary/headpic.jpg",
          "info":"Huterox社区"
        },
        {
          "image":"/static/temporary/showbg.jpg",
          "info":"Futerox社区"
        },
        {
          "image":"/static/temporary/showbg1.jpg",
          "info":"WhiteHole社区"
        },


      ],
      ItemsNot: [
        {
          "image":"/static/temporary/headpic.jpg",
          "info":"社区创建荣誉奖励"
        },
        {
          "image":"/static/temporary/showbg.jpg",
          "info":"新人加入社区白币奖励"
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: white;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: white;
}
.bg-purple {
  background: white;
}
.bg-purple-light {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.message{
  width: 10em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.is-selected {
  color: #1989FA;
}
.test /deep/  .el-calendar-table .el-calendar-day{
  width: 100%;
  height: 35px;
  font-size: 1px;
}
</style>
