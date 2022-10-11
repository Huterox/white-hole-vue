<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>

    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">{{message.type}}:{{message.name}}</p>
            <p style="font-weight: lighter; color: #bae88a;" class="message"

            >
              {{message.info}}

            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.number}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.favorite}}

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
      total: 1,
      Messages:[

        {"info":"女权无非是行走的50w和表面上以维护女性权益来迷惑女性煽动性别对立获取利益的汉奸后代",
          "type": "回答",
          "name":"如何看待女权",
          "number": 1,"data":"2022-3-27",favorite: 0

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
    if(localUser){
      this.User = JSON.parse(localUser)
    }else {
      this.axios({
        url: "/user/user/userinfo",
        method: 'get',
        params: {
          'userid': userid,
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          let data = res.User;
          if (!data.userpic) {
            data.userpic = userpic_base;
          }
          if (!data.userinfo) {
            data.userinfo = "这个人什么也没说，想必是一代侠客吧！"
          }
          this.User = data;
          //成功后在存到本地，这个是临时存储，避免用户信息修改之后出现数据不同步的情况
          sessionStorage.setItem("user", JSON.stringify(this.User));
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
</style>
