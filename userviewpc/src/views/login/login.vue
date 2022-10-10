<template>
  <div>
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
    <el-tabs v-model="activeName" class="login-bok">

      <el-tab-pane label="本账号登录" name="first">
        <div style="width: 80%;height: 80%;margin: 100px auto">
          <loginby-user-name></loginby-user-name>
        </div>
      </el-tab-pane>
      <el-tab-pane label="第三方登录" name="second">
        <login-third></login-third>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import loginbyUserName from "./loginbyUserName";
import LoginThird from "./LoginThird";
export default {
  components:{
    loginbyUserName,
    LoginThird
  },
  name: "login",
  data() {
    return {
      activeName: 'first'
    };
  },
}
</script>

<style scoped>
.login-bok{
  width: 30%;
  height: 450px;
  margin: 0 auto;
  border: 1px solid #DCDFE6;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 30px #DCDFE6;
}

.login-background {
  width: 80%;
  margin: 0 auto;
  height: 500px; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
}

</style>
