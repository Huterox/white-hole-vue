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
              <router-link class="alink" to="/quiz/quizshow">
                {{message.quizTitle}}
              </router-link>
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
              <i>{{message.createTime}}</i>
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
  name: "userquizList",
  data(){
    return{
      isEmpty: true,
      total: 0,
      page: 1,
      limit: 5,
      Messages:[
        //这个其实没啥用的就是给写前端的同学一个参考，遗憾的是，前后端都是我一个大冤种
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
          blogimg: null
        },
      ]
    }
  },
  methods:{
    getDataList(userid){
      //和先前一样，访问服务地址，并且把当前的一些内容进行缓存，减少服务器的压力
      //同时，进入到这里的必须带上userid，如果没有带上那就是非法访问
      let pageSession = sessionStorage.getItem("quizListPageSession");
      let total = sessionStorage.getItem("quizListTotal");
      if(pageSession && total){
        this.Messages = JSON.parse(pageSession);
        this.total = parseInt(total);
        this.isEmpty = (this.total === 0);
      }else {
        this.axios({
          url: "/user/user/userinfo/userquizList",
          method: 'get',
          params: {
            'userid': userid,
            'page': this.page,
            'limit': this.limit
          }
        }).then((res) => {
          res = res.data;
          if (res.code === 0) {
            //这个就是我们的默认展示图片
            let image_base_user = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
            let image_base_quiz = "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
            //同样的拿到数据后需要临时保存
            let page = res.page;
            this.total = page.totalCount;
            this.Messages = page.list
            this.isEmpty = (this.total === 0);
            for (let i=0;i<this.Messages.length;i++)
            {
              if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
              if(!this.Messages[i].blogimg){this.Messages[i].blogimg=image_base_quiz}
            }
            //存储临时缓存
            sessionStorage.setItem("quizListPageSession", JSON.stringify(this.Messages));
            sessionStorage.setItem("quizListTotal",page.totalCount);

          } else {
            this.$message.error(res.msg);
          }
        });
      }

    }
  },
  created() {
    let userid = this.$route.query.userid;
    if(!userid){
      alert("非法访问")
      this.$router.push({path: "/"});
      return;
    }
    //这里的逻辑和进入UserInfo页面的类似
    this.getDataList(userid);

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
