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
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: '../static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_1/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '../static/live2dw/live2d-widget-model-haru_1/assets/haru01.model.json' },
        display: { position: 'left', width: 220, height: 450 },  //调整大小,和位置
        mobile: { show: true },   //要不要盯着你的鼠标看
        log: false,
      })
    }, 1)
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
