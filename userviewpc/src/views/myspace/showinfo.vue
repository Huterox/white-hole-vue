<template>
<div>
    <div  style="width:14%;height: 130px;border-radius: 100px;display:inline-block;">
      <el-image
        style="width: 150px;height: 150px;border-radius: 100px;"
        :src="User.userpic"
        class="image"
      >
      </el-image>
    </div>

  <br>
  <br>
  <el-descriptions :column="1" border>

    <el-descriptions-item label="用户名" v-model="this.User.nickname" ><p class="message">{{this.User.nickname}}</p></el-descriptions-item>
    <el-descriptions-item label="邮箱号" v-model="this.User.email" class="message"><p class="message">{{this.User.email}}</p></el-descriptions-item>
    <el-descriptions-item label="白洞值" v-model="this.User.holeValue" class="message"><p class="message">{{this.User.holeValue}}</p></el-descriptions-item>
    <el-descriptions-item label="IP地址" v-model="this.User.ipAddr" class="message"><p class="message">{{this.User.ipAddr}}</p></el-descriptions-item>
    <el-descriptions-item label="座右铭" v-model="this.User.info" class="message" ><p class="message">{{this.User.info}}</p></el-descriptions-item>
    <el-descriptions-item label="所在地" v-model="this.User.home" class="message"><p class="message">{{this.User.home}}</p></el-descriptions-item>

  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "showinfo",
  data(){
    return{
      userid: null,
      loginToken: null,
      User:{
        nickname:null,
        phone:null,
        email:null,
        info:null,
        holeValue:61,
        home:null,
        userpic: null,
        ipAddr: null,
      }
    }
  },
  methods:{
    getData() {
      let userpic_base = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
      let localUser = sessionStorage.getItem("usershowinfo")
      if (localUser) {
        this.User = JSON.parse(localUser)
      } else {
        this.axios({
          url: "/user/user/space/userShowInfo",
          method: 'get',
          headers: {
            "userid": this.userid,
            "loginType": "PcType",
            "loginToken": this.loginToken,
          },
          params: {
            'userid': this.userid,
          }
        }).then((res) => {
          res = res.data;
          if (res.code === 0) {
            let data = res.User;
            if (!data.userpic) {
              data.userpic = userpic_base;
            }
            if (!data.info) {
              data.info = "这个人什么也没说，想必是一代侠客吧！"
            }
            this.User = data;
            //成功后在存到本地，这个是临时存储，避免用户信息修改之后出现数据不同步的情况
            sessionStorage.setItem("usershowinfo", JSON.stringify(this.User));
          } else {
            this.$message.error(res.msg);
          }
        });
      }
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
      this.getData();
    }
  },
}
</script>

<style scoped>
.message{
  width: 80em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 6px;
}

</style>
