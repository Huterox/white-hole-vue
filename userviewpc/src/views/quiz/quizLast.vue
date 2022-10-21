<template>
  <div style="width: 100%">
    <el-empty
      image="/static/image/empty.gif" :image-size="600" description="路在前方，莫问东西~"
      v-if="isEmpty"
    >
    </el-empty>
    <br>
    <br>
    <div v-if="!isEmpty" style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">

          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold" >
              <a style="cursor:pointer" class="alink" @click="goto(message)"  >
                {{message.quizTitle}}
              </a>
            </p>
            <p style="font-weight: lighter;color: #0bdcc5" class="message"

            >
              {{message.quizContent}}

            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.quizViewNumber}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.quizCollectNumber}}
              &nbsp;&nbsp;
              日期：
              <i style="font-size: 10px">{{message.createTime}}</i>
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


  </div>

</template>

<script>
export default {
  name: "quizLast",
  data(){
    return{
      isEmpty: true,
      total: 0,
      page: 1,
      limit: 5,
      Messages:[
        {
          userid: null,
          quizid: null,
          quizContent: null,
          quizTitle: null,
          userNickname: null,
          userImg: null,
          quizCollectNumber: null,
          quizViewNumber: null,
          quizLikeNumber:null,
          quizAnsNumber: null,
          status: null,
          createTime: null,
        },
      ]
    }
  },
  methods:{

    goto(message) {
      //将问答的一些基本信息存进session里面
      // sessionStorage.setItem("quiz:"+message.quizid, JSON.stringify(message));
      this.$router.push({ path: '/quiz/quizshow', query: {quizid:message.quizid}});
    },

    getDataList(){
      //这里的话设缓存，实时性不高，降低服务器压力
      let pageSession = sessionStorage.getItem("lastQuizPageSession");
      let total = sessionStorage.getItem("lastQuizTotal");
      if(pageSession && total){
        this.Messages = JSON.parse(pageSession);
        this.total = parseInt(total);
        this.isEmpty = (this.total === 0);
      }else {
      this.axios({
        url: "/quiz/quiz/base/lastQuiz",
        method: 'get',
        params: {
          'userid': "",
          'page': this.page,
          'limit': this.limit
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          //这个就是我们的默认展示图片
          let image_base_user = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
          //同样的拿到数据后需要临时保存
          let page = res.page;
          this.total = page.totalCount;
          this.Messages = page.list
          this.isEmpty = (this.total === 0);
          for (let i=0;i<this.Messages.length;i++)
          {
            if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
          }
          //存储临时缓存
          sessionStorage.setItem("lastQuizPageSession", JSON.stringify(this.Messages));
          sessionStorage.setItem("lastQuizTotal",page.totalCount);
        } else {
          this.$message.error(res.msg);
        }
      });
      }
    }
  },
  created() {
    //这里的逻辑和进入UserInfo页面的类似
    this.getDataList();

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
.alink{

  text-decoration: none;
  color: #333333;
}


</style>
