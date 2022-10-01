<template>
<div>
  <br><br>
  <div>
    <div style="position: fixed;top: 200px;left: 52%;width: 80px;height: 80px">

      <el-button style="width: 100%;height: 100%"
                 @click="submit" type="primary"
                 icon="el-icon-edit" circle
      >
        写写
      </el-button>
    </div>
  </div>

  <div class="block" >
    <el-empty v-if="Message.length===0" description="您还没有日志哟~"></el-empty>
    <el-timeline v-if="Message.length>0" v-infinite-scroll="load"  v-bind:infinite-scroll-distance="long" infinite-scroll-disabled="busy">
      <el-timeline-item
        v-for="(message, index) in Message"
        :key="index"
        :data="message.data"
      >
        <el-card class="show" style="background-color: white;width: 60%">
          <el-popover
            placement="top-start"
            width="500"
            trigger="hover"
            v-bind:content="message.content">
            <el-button class="show1" style="border-radius: 10px" slot="reference">{{message.data}}</el-button>
          </el-popover>
        </el-card>

      </el-timeline-item>
    </el-timeline>
  </div>
  <el-dialog
    style="width:80%;margin: 0 auto"
    title="日志"
    :visible.sync="dialogFormVisible"
  >

    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">


      <el-form-item label="日志内容" prop="content">
        <el-input type="textarea" :rows="10" v-model="ruleForm.content"
                  placeholder="同一天提交的日志将被覆盖哟~"

        ></el-input>
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
  name: "riZhi",
  data() {
    return {

      long: 2,
      Message: [
        {
        content: 'WhiteHoleV0.7设计初稿',
        data: '2022-03-27',

      }, {
        content: '吃饱了没事做开始继续完成这个WhiteHoleV0.7',
        data: '2022-05-01',

      },
        {
          content: '吃饱了没事做开始继续完成这个WhiteHoleV0.7',
          data: '2022-05-02',

        },
        {
          content: '吃饱了没事做开始继续完成这个WhiteHoleV0.7，要加快进度了',
          data: '2022-05-03',
        },

      ],

      dialogFormVisible: false,

      ruleForm: {
        content: '',
      },

      rules: {
        content: [
          {required: true, message: '请编写您的日志', trigger: 'blur'},
          {min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur'}
        ],
      }

    };
  },
  methods: {
    load () {
      //这部分让你的axios去动态加载
      let temp=[
        {
          content: 'WhiteHoleV0.7设计初稿',
          data: '2022-03-27',
        }
      ]
      for (let i = 0; i < temp.length; i++) {
        this.Message.push(temp[i])
      }

    },

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
.show:hover{
  box-shadow: 0px 15px 30px rgb(24, 160, 236);
  margin-top: 20px;
  background-color: #1e6ce1;
}
.show1:hover{
  box-shadow: 0px 15px 30px rgb(24, 160, 236);
  margin-top: 5px;
  background-color: #cdda19;


}

</style>
