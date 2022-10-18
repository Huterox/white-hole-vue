<template>
  <div id="app">

    <home></home>

  </div>
</template>

<script>
import home from "./views/home/home";
import DevicePixelRatio from "./DevicePixelRatio";

export default {
  name: 'App',
  components:{
    home
  },
  created() {
    new DevicePixelRatio().init();
  },

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
