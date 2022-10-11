<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>
    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in this.Messages" :key="index">

        <div style="height:100px">
          <div  style="width:12%;height: 100%;border-radius: 100px;display:inline-block;">
            <el-image
              style="width:100%;height: 100%;border-radius: 100px"
              :src="message.blogimg"
              class="image"
              alt="picture"/>
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 80%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" :to="{ path: '/blogshow',query:{'blogid':message.blogid}}">
                {{message.blogTitle}}
              </router-link>

            </p>
            <p style="font-weight: lighter" class="message"
            >
              {{message.info}}

            </p>
            <p>
              阅读：
              <i class="el-icon-view"></i>
              {{message.viewNumber}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.collectNumber}}
              &nbsp;&nbsp;
              <i>fork:{{message.forkNumber}}</i>
               &nbsp;
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
  name: "userblogList",
  data(){
    return{
      total: 99,
      page: 1,
      limit: 5,
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
  created() {
    //和先前一样，访问服务地址，并且把当前的一些内容进行缓存，减少服务器的压力
    //同时，进入到这里的必须带上userid，如果没有带上那就是非法访问
    let userid = this.$route.query.userid;
    if(!userid){
      alert("非法访问")
      this.$router.push({path: "/"});
      return;
    }
    //这里的逻辑和进入UserInfo页面的类似
    let pageSession = sessionStorage.getItem("pageSession");
    let total = sessionStorage.getItem("total");
    if(pageSession && total){
      this.Messages = JSON.parse(pageSession);
      this.total = total;
    }else {
      this.axios({
        url: "/user/user/userinfo/userarticle",
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
          let image_base_blog = "https://whiteholecloud-dev.oss-cn-shanghai.aliyuncs.com/2022-09-25/8cee84b4-1d03-483f-8376-14d419d84ca5_03.jpg"
          //同样的拿到数据后需要临时保存
          let page = res.page;
          this.total = page.totalCount;
          this.Messages = page.list

          for (let i=0;i<this.Messages.length;i++)
          {
            if(!this.Messages[i].userImg){this.Messages[i].userImg=image_base_user;}
            if(!this.Messages[i].blogimg){this.Messages[i].blogimg=image_base_blog}
          }
          //存储临时缓存
          sessionStorage.setItem("pageSession", JSON.stringify(this.Messages));
          sessionStorage.setItem("total",this.total);

        } else {
          this.$message.error(res.msg);
        }
      });
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
