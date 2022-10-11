<template>
  <div style="width: 90%;margin: 0 auto">
    <vue-particles
      class="login-background"
      color="#97D0F2"
      :particleOpacity="0.7"
      :particlesNumber="200"
      shapeType="circle"
      :particleSize="4"
      linesColor="#97D0F2"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
    <el-container style="width: 80%;margin: 0 auto" >

        <div  style="z-index: 1" >
          <div class="show" style="width: 900px;text-align: center">
            <div >
              <div style="width:200px;height: 100%;border-radius: 100px;margin: 0 auto">
                <el-image
                  style="width: 150px;height: 150px;border-radius: 100px;"
                  :src="User.userpic"
                  class="image"
                >
                </el-image>
                <p>
                  {{User.nickname}}
                </p>
              </div>
              <div>
                <br>
                <p>

                  <el-button @click="focusOn"  v-if="focusOnFlag===false" icon="el-icon-plus" type="primary" plain >
                    <span>关注</span>
                  </el-button>
                  <el-button @click="focusOn"  v-else icon="el-icon-check" type="primary" plain >
                    <span>已关注</span>
                  </el-button>
                </p>
              </div>
            </div>
            <div>
              <p style="font-size: larger;font-family: 楷体;text-align: center">简介</p>
              <p style="font-size: smaller;width: 65%;margin: 0 auto">
                 {{User.userinfo}}
              </p>
              <br><br>
            </div>
          </div>
          <div style="width: 30%;margin: 0 auto">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/userinfo',query:{'userid':this.User.userid}}">文章</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/userinfo/userquizList',query:{'userid':this.User.userid}}">提问</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/userinfo/useransList',query:{'userid':this.User.userid}}">回答</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/userinfo/userunityList',query:{'userid':this.User.userid}}">TA的社区</el-breadcrumb-item>
              <el-breadcrumb-item ></el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="width: 100%;margin: 0 auto">
            <router-view></router-view>
          </div>
        </div>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "userinfo",
  data(){
    return{
      focusOnFlag:false,
      User:{
        userid: null,
        nickname: null,
        userpic: null,
        userinfo: null,
      }
    }
  },
  created() {
  //  我们使用这个来完成对Userinfo信息的一个处理
  //  先拿到用户的userid,当链接跳转过来的时候
  //  过来先判断一下有没有携带userid,如果有的话就直接查询，那个userid
  //  如果没有的话，那么判断一下本地有没有userid，如果有那么说明是用户查看自己的一个Userinfo
  //  反之都没有的话，那么就说明这个可能是非法进入
    let userid = this.$route.query.userid;
    if(!userid){
      let localUserid = localStorage.getExpire("userid")
      if(!localUserid){
        alert("检测到您未登录，请先登录")
        this.$router.push({path: "/login"});
      }else {
        userid = localUserid
      }
    }
  //默认的用户头像
    let userpic_base = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
    let localUser = sessionStorage.getItem("user")
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
  methods:{
    focusOn(){
      this.focusOnFlag=!this.focusOnFlag;
      if(this.focusOnFlag){
        alert("关注成功")
      }else {
        alert("取关成功")
      }

    },
  },
}
</script>

<style scoped>

.login-background {
  width: 80%;
  margin: 0 auto;
  height: 1200px; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
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
</style>
