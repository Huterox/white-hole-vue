<template>
  <div >
    <JwChat :taleList="list" @enter="bindEnter" @clickTalk="talkEvent" v-model="inputMsg"
            :toolConfig="tool" >

    </JwChat>
  </div>

</template>
<script>
//我们这边默认保留100条历史信息吧，不然顶不住
export default {
  name: "haoYouChat",
  data () {
    return {
      inputMsg: '',
      list: [],
      tool: {
        callback: this.toolEvent
      },

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
