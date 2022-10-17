
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <el-empty
      image="/static/image/empty4.gif" :image-size="300" description="这里什么都没有丫~"
      v-if="isEmpty"
    >
    </el-empty>
    <br>
    <br>
    <div v-if="!isEmpty" style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <el-image
              style="width:100%;height: 100%;border-radius: 100px"
              :src="message.blogimg"
              class="image"
              alt="picture"/>
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">
              <router-link class="alink" :to="{ path: '/blogshow',query:{'blogid':message.blogid}}">
                {{message.blogTitle}}
              </router-link>
            </p>
            <p style="font-weight: lighter; color: #e38d86;" class="message"

            >
<!--              {{message.info}}-->
              <span class="el-icon-reading"
                    v-if="message.status===2"
                    style="color: #cdda19"
              >
                  (审核中)
              </span>
              <span class="el-icon-close"
                    v-else-if="message.status===3"
                    style="color: #e7073d"
              >
                  文章内容不适，请您修改后发布
              </span>

            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.viewNumber}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.collectNumber}}
              &nbsp;&nbsp;
              <i>fork:{{message.forkNumber}}</i>
            </p>

          </div>

          <div  style="width:18%;height: 100%;
          display:inline-block;
          "
          >
            <div style="display: inline-block;width: 48%;">
              <el-button type="warning" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-delete"></i>
              </el-button>
              <br><br>
            </div>

            <div style="display: inline-block;width: 48%">
              <el-button type="primary" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-edit-outline"></i>
              </el-button>
              <br><br>
            </div>
            <p style="text-align: center;font-size: 8px">{{message.createTime}}</p>
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
  name: "statusArticle",
  data(){
    return{
      isEmpty: true,
      total: 0,
      page: 1,
      limit: 5,
      userid: null,
      loginToken: null,
      Messages:[
        {
          userid: null,
          info: null,
          blogid: null,
          contentid: null,
          blogTitle: null,
          userNickname: null,
          userImg: null,
          createTime: null,
          viewNumber: null,
          likeNumber: null,
          collectNumber: null,
          status: null,
          level: null,
          forkNumber: null,
          blogimg: null
        },
      ]
    }
  },
  methods:{
    getDataList(){
      this.axios({
        url: "/user/user/space/statusArticle",
        method: 'get',
        headers: {
          "userid": this.userid,
          "loginType": "PcType",
          "loginToken": this.loginToken,
        },
        params: {
          'userid': this.userid,
          'page': this.page,
          'limit': this.limit
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          //这个就是我们的默认展示图片
          let image_base_user = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
          let image_base_blog = "https://whiteholecloud-dev.oss-cn-shanghai.aliyuncs.com/2022-09-25/8cee84b4-1d03-483f-8376-14d419d84ca5_03.jpg"
          //同样的拿到数据后需要临时保存
          let page = res.page;
          this.total = page.totalCount;
          this.Messages = page.list
          this.isEmpty = (this.total === 0);
          for (let i=0;i<this.Messages.length;i++)
          {
            if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
            if(!this.Messages[i].blogimg){this.Messages[i].blogimg=image_base_blog}
          }
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  },
  created() {
    let loginToken = localStorage.getExpire("LoginToken");
    let userid = localStorage.getExpire("userid");
    //这个只有用户自己才能进入，自己只能进入自己对应的MySpace
    if(loginToken==null && userid==null) {
      alert("检测到您未登录，请先登录")
      this.$router.push({path: "/login"});
    }else {
      this.userid=userid;
      this.loginToken = loginToken;
      this.getDataList();
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
</style>
