
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <el-empty
      image="/static/image/empty.gif" :image-size="600" description="暂时还没有人回答这个问题呢~"
      v-if="isEmpty"
    >
    </el-empty>
    <br>
    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:17%;height: 100%;border-radius: 100px;display:inline-block;">
            <el-image
              style="width:100%;height: 100%;border-radius: 100px"
              :src="message.userImg"
              class="image"
            />
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" :to="{path: '/userinfo',query:{'userid':message.userid}}">
                {{message.userNickname}}
              </router-link>

            </p>
            <p style="font-weight: lighter" class="message"

            >
              <a class="alink1" @click="goto(message)" style="cursor:default">
              {{message.creatTime}} 回答了该问题
              </a>
            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.ansViewNumber}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.ansCollectNumber}}
              &nbsp;&nbsp;
              <i>点赞:{{message.ansLikeNumber}}</i>
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
  name: "anslist",
  methods:{
    goto(message) {
      //将问答的一些基本信息存进session里面
      sessionStorage.setItem("ans:"+message.ansid, JSON.stringify(message));
      this.$router.push({ path: '/quiz/ansshowinfo', query: {ansid:message.ansid}});
    },
    getDataList(){
        this.axios({
          url: "/quiz/quiz/base/lastQuizAns",
          method: 'get',
          params: {
            'quizid': this.quizid,
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
          } else {
            this.$message.error(res.msg);
          }
        });
    }
  },
  created() {
    //这里的逻辑和进入UserInfo页面的类似
    this.quizid = this.$route.query.quizid;
    this.getDataList();

  },
  data(){
    return{
      update: true,
      quizid: null,
      isEmpty: true,
      total: 0,
      page: 1,
      limit: 5,
      Messages:[
        {
          "userid": null,
          "quizid": null,
          "creatTime": null,
          "quizTitle": null,
          "status": null,
          "userImg": null,
          "userNickname": null,
          "ansCollectNumber": null,
          "ansLikeNumber": null,
          "ansViewNumber": null,
          "context": null,
        },
      ]
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
.alink{

  text-decoration: none;
  color: #333333;

}
.alink1{

  text-decoration: none;
  color: deepskyblue;

}

</style>
