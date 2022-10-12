<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main style="background-color: #fafafa;width: 100%">
        <br>
        <br>
        <router-view></router-view>
      </el-main>
    </el-container>


  </div>
</template>

<script>
import Header from "../../components/home/Header";
export default {
  name: 'home',
  components:{
    Header,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  position: relative;
  width: 100%;
  height: 60px;
}
.el-main {
  position: absolute;
  left: 4%;
  right: 0;
  margin: 0 auto;
  top: 80px;
  bottom: 0;
  overflow-y: scroll;
}

</style>
