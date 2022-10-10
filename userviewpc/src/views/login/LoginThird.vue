<template>
<div>
  <el-tabs v-model="activeName" class="login-bok">
    <el-tab-pane label="微信" name="first">
      <div style="margin: 50px auto">
        <loginby-wx></loginby-wx>
      </div>
    </el-tab-pane>
    <el-tab-pane label="QQ" name="second">
      <loginby-q-q></loginby-q-q>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import LoginbyQQ from "./LoginbyQQ";
import LoginbyWx from "./LoginbyWx";
export default {
  components:{
    LoginbyQQ,
    LoginbyWx,
  },
  name: "LoginThird",
  data() {
    return {
      activeName: 'first'
    };
  },
}
</script>

<style scoped>
.login-bok{
  margin: 0 auto;
  text-align: center;
}

</style>
