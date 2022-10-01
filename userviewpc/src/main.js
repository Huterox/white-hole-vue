// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//使用编辑器Markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import global from "./global/global";
import axios from "axios";
//引入特效组
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
// use
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.axios = axios

import infiniteScroll from 'vue-infinite-scroll'
//使用无限加载
Vue.use(infiniteScroll)

import Chat from 'jwchat';
/* 在 0.2.041 之前的版本需要引入 css */
// import 'jwchat/lib/JwChat.css';
Vue.use(Chat)

//挂载全局变量
Vue.prototype.global = global;
axios.defaults.baseURL = global.baseURL;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
