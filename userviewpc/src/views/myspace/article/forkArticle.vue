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
              :src="message.articleImg"
              class="image"
              alt="picture"/>
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">
              <router-link class="alink" :to="{ path: '/blogshow',query:{'blogid':message.articleid}}">
                {{message.articleTitle}}
              </router-link>
            </p>
            <p style="font-weight: lighter;color: #17dca7" class="message"

            >
              <router-link class="alink" :to="{ path: '/userinfo',query:{'userid':message.userid}}">
                From：{{message.articleUserNickname}}
              </router-link>
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
  name: "publicArticle",
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
            "userid": null,
            "articleid": null,
            "creatTime": null,
            "articleTitle": null,
            "articleUserid": null,
            "articleUserNickname": null,
            "articleImg": null
        },
      ]
    }
  },
  methods:{
    getDataList(){
      this.axios({
        url: "/user/user/space/forkArticle",
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
          let image_base_blog = "https://whiteholecloud-dev.oss-cn-shanghai.aliyuncs.com/2022-09-25/8cee84b4-1d03-483f-8376-14d419d84ca5_03.jpg"
          //同样的拿到数据后需要临时保存
          let page = res.page;
          this.total = page.totalCount;
          this.Messages = page.list
          this.isEmpty = (this.total === 0);
          for (let i=0;i<this.Messages.length;i++)
          {
            if(!this.Messages[i].articleImg){this.Messages[i].blogimg=image_base_blog}
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
