<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>

    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <br>
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              src="/static/temporary/showbg.jpg"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">{{message.name}}</p>
            <p style="font-weight: lighter;color: #1d5e65" class="message"

            >
              {{message.info}}

            </p>

          </div>

        </div>
        <br>
      </el-card>
    </div>
    <br>
    <div class="footer" style="margin: 0 auto;width: 100%;">
      <div class="block" >
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "columnArticle",
  data(){
    return{
      total: 4,
      Messages:[
        {"name":"Java学习",
          "info":"每天记录Java的学习点滴",
        },
        {"name":"Python学习",
          "info":"记录与Python的每一刻",

        },
        {"name":"人工智能算法学习",
          "info":"跟着吴恩达大佬飞快成长",

        },
        {"name":"Spring源码学习",
          "info":"慢慢肢解Spring",

        },

      ]
    }
  },
}
</script>

<style scoped>
.message{
  width: 30em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
