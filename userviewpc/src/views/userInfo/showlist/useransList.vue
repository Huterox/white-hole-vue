<template>
  <div style="background-color: rgba(239,250,246,0.53);">
    <el-empty
      image="/static/image/empty.gif" :image-size="600" description="好像还木有帮助其他小伙伴答疑~"
      v-if="isEmpty"
    >
    </el-empty>
    <br>
    <br>
    <div v-if="!isEmpty" style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <el-tooltip content="查看提问" placement="top" effect="light">
              <a style="cursor:pointer" class="alink" @click="gotoquiz(message)"  >
                <p class="message" style="font-weight:bold">{{message.quizTitle}}</p>
              </a>
            </el-tooltip>
            <p style="font-weight: lighter; color: #25c1e5;" class="message"

            >
              <a class="alink1" @click="goto(message)" style="cursor:default">
                <el-tooltip content="查看回答" placement="bottom" effect="light">
                  <span style="font-size: 12px"> {{message.creatTime}}</span>
                </el-tooltip>
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
  name: "useransList",
  data(){
    return{
      isEmpty: true,
      page: 1,
      limit: 5,
      total: 0,
      Messages:[
        {
          userid: null,
          quizid: null,
          quizTitle: null,
          creatTime: null,
          context: null,
          ansViewNumber: null,
          ansLikeNumber: null,
          ansCollectNumber: null,
          userNickname: null,
          userImg: null,
          ansid: null,
          status: null,
          blogimg: null
        },
      ]
    }
  },
  methods:{
    gotoquiz(message){
      this.$router.push({ path: '/quiz/quizshow', query: {quizid:message.quizid}});
    },
    goto(message) {
      //将问答的一些基本信息存进session里面
      sessionStorage.setItem("ans:"+message.ansid, JSON.stringify(message));
      this.$router.push({ path: '/quiz/ansshowinfo', query: {ansid:message.ansid}});
    },
    getDataList(userid){
      //和先前一样，访问服务地址，并且把当前的一些内容进行缓存，减少服务器的压力
      //同时，进入到这里的必须带上userid，如果没有带上那就是非法访问
      // let pageSession = sessionStorage.getItem("ansListPageSession");
      // let total = sessionStorage.getItem("ansListTotal");
      // if(pageSession && total){
      //   this.Messages = JSON.parse(pageSession);
      //   this.total = parseInt(total);
      //   this.isEmpty = (this.total === 0);
      // }else {
        this.axios({
          url: "/user/user/userinfo/useransList",
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
            let image_base_ans = "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
            //同样的拿到数据后需要临时保存
            let page = res.page;
            this.total = page.totalCount;
            this.Messages = page.list
            this.isEmpty = (this.total === 0);
            for (let i=0;i<this.Messages.length;i++)
            {
              if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
              if(!this.Messages[i].blogimg){this.Messages[i].blogimg=image_base_ans}
            }
            //存储临时缓存
            // sessionStorage.setItem("ansListPageSession", JSON.stringify(this.Messages));
            // sessionStorage.setItem("ansListTotal",page.totalCount);

          } else {
            this.$message.error(res.msg);
          }
        });
      // }

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
</style>
