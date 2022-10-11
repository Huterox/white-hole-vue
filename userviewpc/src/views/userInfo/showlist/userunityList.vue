
<template>

  <div style="background-color: rgba(239,250,246,0.53)">
    <el-empty
      image="/static/image/empty.gif" :image-size="600" description="暂时木有创建社区~"
      v-if="isEmpty"
    >
    </el-empty>
    <br>
    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in this.Messages" :key="index">

        <div style="height:100px">
          <div  style="width:12%;height: 100%;border-radius: 100px;display:inline-block;">
            <el-image
              style="width:100%;height: 100%;border-radius: 100px"
              :src="message.communityImg"
              class="image"
              alt="picture"/>
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 80%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" :to="{ path: '/unityshow',query:{'unityid':message.communityid}}">
                {{message.communityTitle}}
              </router-link>

            </p>
            <p style="font-weight: lighter" class="message"
            >
              {{message.communityInfo}}

            </p>
            <p>
              成员：
              <i class="el-icon-s-custom"></i>
              {{message.memberNumber}}
              &nbsp;&nbsp;
              博文：
              <i class="el-icon-document-copy"></i>
              {{message.blogNumber}}
              &nbsp;&nbsp;
              <i class="el-icon-check">点赞:
                {{message.communityLike}}
              </i>
              &nbsp;
              创建：
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
  name: "userunityList",
  data(){
    return{
      isEmpty: true,
      total: 0,
      page: 1,
      limit: 5,
      Messages:[

        {
          communityid: null,
          userid: null,
          communityTitle: null,
          createTime: null,
          userimg: null,
          userNickname: null,
          communityImg:null,
          communityInfo: null,
          memberNumber: null,
          blogNumber: null,
          status: null,
          communityLike: null
        },
      ]
    }
  },
  methods:{
    getDataList(userid){
      //和先前一样，访问服务地址，并且把当前的一些内容进行缓存，减少服务器的压力
      //同时，进入到这里的必须带上userid，如果没有带上那就是非法访问
      let pageSession = sessionStorage.getItem("unityListPageSession");
      let total = sessionStorage.getItem("unityListTotal");
      if(pageSession && total){
        this.Messages = JSON.parse(pageSession);
        this.total = parseInt(total);
        this.isEmpty = (this.total === 0);
      }else {
        this.axios({
          url: "/user/user/userinfo/userunityList",
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
            let image_base_unity = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            //同样的拿到数据后需要临时保存
            let page = res.page;
            this.total = page.totalCount;
            this.Messages = page.list
            this.isEmpty = (this.total === 0);
            for (let i=0;i<this.Messages.length;i++)
            {
              if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
              if(!this.Messages[i].communityImg){this.Messages[i].communityImg=image_base_unity}
            }
            //存储临时缓存
            sessionStorage.setItem("unityListPageSession", JSON.stringify(this.Messages));
            sessionStorage.setItem("unityListTotal",page.totalCount);
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
  width: 30em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.alink{

  text-decoration: none;
  color: #333333;
}

</style>
