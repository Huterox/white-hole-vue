<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item style="margin-left: 20%" index="1">
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
    <el-menu-item style="margin-left:100px">
      <Search></Search>
    </el-menu-item>


    <el-menu-item index="5" style="margin-left:100px">
      <router-link class="alink" to="/writeblog">
        <i class="el-icon-edit"></i>
      </router-link>
    </el-menu-item>


      <el-menu-item  index="6">
        <router-link to="/notices">
          <el-badge :value="200" :max="99" class="item">
            <el-button icon="el-icon-bell" size="small" ></el-button>
          </el-badge>
        </router-link>
      </el-menu-item>


    <el-menu-item index="7">
      <router-link to="myspace">
        <el-button round ><i class="el-icon-user-solid" ></i>Me</el-button>
      </router-link>
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
    }
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
