<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item style="margin-left: 10%" index="1">
      <router-link to="/">
<!--      首页内容-->
        <i class="el-icon-s-home"></i>

      </router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link  to="/treehole">
        树洞
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/quiz">
        问答
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/community">
        社区
      </router-link>
    </el-menu-item>
    <el-menu-item style="margin-left:10px;width: 36%">
      <Search></Search>
    </el-menu-item>


    <el-menu-item index="5" style="margin-left:100px">
      <router-link class="alink" to="/writeblog">
        <i class="el-icon-edit"></i>
      </router-link>
    </el-menu-item>


      <el-menu-item  index="6">
        <router-link to="/notices">
          <el-badge :value="10" :max="99" class="item">
            <el-button icon="el-icon-bell" size="big" ></el-button>
          </el-badge>
        </router-link>
      </el-menu-item>


    <el-menu-item index="7">
      <el-dropdown>
        <span class="el-dropdown-link">
           <el-avatar
             :size="50"
             src="static/image/space3.jpg"
           >
           </el-avatar>
          <span style="font-size: large;color: #8c939d">Space</span>
        </span>
              <el-dropdown-menu slot="dropdown" >
                <br>
                <el-dropdown-item >
                    <el-button style="width: 100%" type="primary" plain  @click="isLogin('/userinfo')">我的主页</el-button>
                </el-dropdown-item>
                <br>
                <el-dropdown-item>
                    <el-button style="width: 100%" type="primary" plain  @click="isLogin('/myspace')">个人中心</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
      </el-dropdown>

    </el-menu-item>


  </el-menu>
</div>
</template>

<script>
import Search from "../search/Search";
export default {
  name: "Header",
  components:{
    Search,
  },
  data() {
    return {
      activeIndex: '1',

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    isLogin(val){
      let loginToken = localStorage.getExpire("loginToken");
      let userid = localStorage.getExpire("userid");
      if(loginToken==null || userid==null){
        alert("检测到您未登录，请先登录")
        this.$router.push({path: "/login"});
      }else {
        this.$router.push({path: val,query:{'userid':userid}});
      }
    },
  },

}
</script>

<style scoped>
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}



</style>
