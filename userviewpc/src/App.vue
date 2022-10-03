<template>
  <div id="app">

    <home></home>

  </div>
</template>

<script>
import home from "./views/home/home";
export default {
  name: 'App',
  components:{
    home
  },
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: '../static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_2/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '../static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
        display: { position: 'left', width: 200, height: 450 },  //调整大小,和位置
        mobile: { show: true },   //要不要盯着你的鼠标看
        log: false,
      })
    }, 1)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 20px;
}
</style>
