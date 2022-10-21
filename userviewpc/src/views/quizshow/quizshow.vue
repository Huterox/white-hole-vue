<template>
<div  v-if="update" style="width: 85%;margin: 0 auto">
    <br><br><br>
    <div>
      <div class="show">
        <br>
        <h3>{{Messages.quizTitle}}</h3>
        <br>
  <!--      user-->
        <div style="height:100px;width: 96%;margin: 0 auto">
          <br>
          <div  style="width:16%;height: 100%;border-radius: 100px;display:inline-block;">

            <el-image
              style="width:100%;height: 100%;border-radius: 100px"
              :src="Messages.userImg"
              class="image"
            />
          </div>

          <div style="display: inline-block;width: 80%;">
            <div style="height: 50%;width: 100%;display: inline-block">
              <router-link class="alink" :to="{path: '/userinfo',query:{'userid':Messages.userid}}">
              <p style="font-family: Microsoft YaHei">{{Messages.userNickname}}</p>
              </router-link>

              <p class="message" style="font-size: 15px">日期:{{Messages.createTime}}</p>

            </div>
          </div>
        </div>

        <div>
          <div style="width: 96%;margin: 0 auto">
            <br><br>

            <h6>详情：</h6>
            <div style="font-family: cursive">
                {{Messages.quizContent}}
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>

      <br><br>
      <div style="width: 96%;margin: 0 auto">
        阅读:
        <i class="el-icon-view"></i>
        {{Messages.quizViewNumber}}
        &nbsp;&nbsp;
        收藏:
        <i class="el-icon-star-off"></i>
        {{Messages.quizCollectNumber}}
        &nbsp;
        点赞:
        <i class="el-icon-check"></i>
        {{Messages.quizLikeNumber}}


          <el-button type="primary" round style="width: 20%;margin-left: 50px;display: inline-block"
                     @click="dialogVisible = true"
          >
            回答<i class="el-icon-edit-outline"></i>
          </el-button>
          <br><br>


      </div>

      <el-dialog
        title="编辑回答"
        :visible.sync="dialogVisible"
        width="80%"
        center
      >
        <writequiz v-bind:Messages="this.Messages"></writequiz>
        <span slot="footer" class="dialog-footer">
         </span>
      </el-dialog>
      <router-view v-if="update"></router-view>


    </div>

</div>
</template>

<script>
import writequiz from "./writequiz";

export default {
  name: "show",
  components:{
    writequiz
  },
  created(){
    this.reload()
    this.quizid = this.$route.query.quizid;
    this.Messages = JSON.parse(sessionStorage.getItem("quiz:"+this.quizid));
    if(!this.Messages){
      this.getQuiz(this.quizid)
    }

  },
  methods: {
    getQuiz(quizid){
      this.axios({
        url: "/quiz/quiz/base/quizById",
        method: 'get',
        params: {
          'quizid': quizid,
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          //这个就是我们的默认展示图片
          let image_base_user = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
          //同样的拿到数据后需要临时保存
          this.Messages = res.quiz
          if(!this.Messages.userImg){this.Messages.userImg=image_base_user;}
          sessionStorage.setItem("quiz:"+this.quizid, JSON.stringify(this.Messages));
          this.$router.go(0);
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    reload() {
      // 移除组件
      this.update = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true
      })
    },
  },
  // 这里的话用户会返回啥的，就不要销毁了反正浏览器关了就没了
  // beforeDestroy() {
  //   sessionStorage.removeItem(this.quizid)
  // },
  data(){
    return{
      update: true,
      dialogVisible:false,
      quizid: null,
      Messages:
        {
          userid: null,
          quizid: null,
          quizContent: null,
          quizTitle: null,
          //这个是提问者的userNickName
          userNickname: null,
          userImg: null,
          quizCollectNumber: null,
          quizViewNumber: null,
          quizLikeNumber:null,
          quizAnsNumber: null,
          status: null,
          createTime: null,
        },
    }
  },
}
</script>

<style scoped>
.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}


.show{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.show:hover{
  box-shadow: 0px 10px 30px rgb(12, 132, 224);
  margin-top: 10px;

}
.alink{

  text-decoration: none;
  color: #333333;

}
</style>
