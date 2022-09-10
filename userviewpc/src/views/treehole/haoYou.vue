<template>

  <div style="width: 100%">

    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="215px" style="background-color: white">
        <el-card style="height: 80px" shadow="hover" v-for="(message,index) in Messages" :key="index">
<!--          这边后面做参数传递-->
          <router-link to="/treehole/haoYou/haoYouChat" class="alink">
          <div style="height:50px">
            <div  style="width:50px;height: 100%;border-radius: 100px;display:inline-block;">
              <img
                style="width:100%;height: 100%;border-radius: 100px"
                v-bind:src="message.image"
                class="image"
              >
            </div>
            <div style="display:inline-block;width: 100px;height: 50px">
              <p class="message" style="font-size: 1px;color: #3492e7;font-weight: bold">{{message.name}}</p>
              <br>
            </div>

          </div>

          </router-link>
        </el-card>

      </el-aside>


      <el-container
        style="
        background-repeat: no-repeat;
        background-size:100% 100%;
        "
      >
        <el-main>
          <div style="width: 100%;margin: 0 auto">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>
<script>
//我们这边默认保留100条历史信息吧，不然顶不住
export default {
  name: "haoYou",
  data () {
    return {
      inputMsg: '',
      list: [],
      tool: {
        callback: this.toolEvent
      },
      Messages:[
        {"name":"Futerox","image":"/static/temporary/headpic.jpg"},
        {"name":"Kuterox","image":"/static/temporary/showbg.jpg"},
        {"name":"Luterox","image":"/static/temporary/showbg1.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},
        {"name":"Luterox","image":"/static/temporary/showbg1.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},
        {"name":"Luterox","image":"/static/temporary/showbg1.jpg"},
        {"name":"Muterox","image":"/static/temporary/headpic.jpg"},


      ]

    }
  },
  methods: {
    bindEnter (e) {
      console.log(e)
      const msg = this.inputMsg
      if (!msg) return;
      //这个是我的消息发送的
      const msgObj = {
        "date": "2022/05/3 21:19:07",
        "text": { "text": msg },
        "mine": true,

        "img": "/static/temporary/headpic.jpg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    },
  },
  mounted () {
    const img = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    //这个是对面发过来的消息
    const list = [
      {
        "date": "2022/05/3 21:19:07",
        "text": { "text": "起床不" },
        "mine": false,
        "name": "Futerox",
        "img": "/static/temporary/showbg.jpg"
      },

    ]
    this.list = list
  }
}
</script>

<style scoped>
.el-header {
  background-color: #e5efe2;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.router-link-active {
  text-decoration: none;
}

.alink{
  text-decoration: none;
}


</style>
